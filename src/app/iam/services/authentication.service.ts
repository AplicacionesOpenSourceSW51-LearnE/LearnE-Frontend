import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, map} from "rxjs";
import {Router} from "@angular/router";
import {SignUpRequest} from "../model/sign-up.request";
import {SignUpResponse} from "../model/sign-up.response";
import {SignInRequest} from "../model/sign-in.request";
import {SignInResponse} from "../model/sign-in.response";
import {UserService} from "../../learning/services/user.service";
import {User} from "../../learning/model/user.entity";
import {UserType} from "../../learning/model/user.enum";

/**
 * Service for handling authentication operations.
 * @summary
 * This service is responsible for handling authentication operations like sign-up, sign-in, and sign-out.
 */
@Injectable({providedIn: 'root'})
export class AuthenticationService {
  basePath: string = `${environment.serverBasePath}`;
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');

  /**
   * Constructor for the AuthenticationService.
    * @param router The router service.
   * @param http The HttpClient service.
   */
  constructor(private router: Router, private http: HttpClient, private userApiService: UserService) {
  }

  get isSignedIn() {
    return this.signedIn.asObservable();
  }

  get currentUserId() {
    return this.signedInUserId.asObservable();
  }

  get currentUsername() {
    return this.signedInUsername.asObservable();
  }

  /**
   * Sign up a new user.
   * @summary
   * This method sends a POST request to the server with the user's username and password.
   * If the request is successful, the user's id and username are logged and the user is navigated to the sign-in page.
   * If the request fails, an error message is logged and the user is navigated to the sign-up page.
   * @param signUpRequest The {@link SignUpRequest} object containing the user's username and password.
   * @returns The {@link SignUpResponse} object containing the user's id and username.
   */
  signUp(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpResponse>(`${this.basePath}/authentication/sign-up`, signUpRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          console.log(`Signed up as ${response.username} with id ${response.id}`);
          this.userApiService.getAll()
            .pipe(
              map((users: User[]) => users.find(u => u.username === response.username))
            )
            .subscribe({
              next: (user) => {
                if (user) {
                  console.log(`Found user: ${user.username}`);
                  if (user.type_user == UserType.TEACHER) {
                    this.router.navigate(['/mainToolbar/signIn']).then();
                  } else if (user.type_user == UserType.STUDENT) {
                    this.router.navigate(['/subscriptions']).then();
                  }
                } else {
                  console.warn('User not found');
                }
              },
              error: (error) => {
                console.error('Error fetching users:', error);
              }
            });
        },
        error: (error) => {
          console.error(`Error while signing up: ${error}`);
          this.router.navigate(['/mainToolbar/register']).then();
        }
      });
  }

  /**
   * Sign in a user.
   * @summary
   * This method sends a POST request to the server with the user's username and password.
   * If the request is successful, the signedIn, signedInUserId, and signedInUsername are set to true,
   * the user's id, and the user's username respectively.
   * The token is stored in the local storage and the user is navigated to the home page.
   * If the request fails, the signedIn, signedInUserId, and signedInUsername are set to false, 0, and
   * an empty string respectively.
   * An error message is logged and the user is navigated to the sign-in page.
   * @param signInRequest The {@link SignInRequest} object containing the user's username and password.
   * @returns The {@link SignInResponse} object containing the user's id, username, and token.
   */
  signIn(signInRequest: SignInRequest) {
    console.log(signInRequest);
    return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`, signInRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          this.signedIn.next(true);
          this.signedInUserId.next(response.id);
          this.signedInUsername.next(response.username);
          localStorage.setItem('token', response.token);
          console.log(`Signed in as ${response.username} with token ${response.token}`);
          this.userApiService.getAll()
            .pipe(
              map((users: User[]) => users.find(u => u.username === response.username))
            )
            .subscribe({
              next: (user) => {
                if (user) {
                  console.log(`Found user: ${user.username}`);
                  if (user.type_user == UserType.TEACHER) {
                    this.router.navigate(['/mainPage/management']).then();
                  } else if (user.type_user == UserType.STUDENT) {
                    this.router.navigate(['/mainPage/myCourses']).then();
                  }
                } else {
                  console.warn('User not found');
                }
              },
              error: (error) => {
                console.error('Error fetching users:', error);
              }
            });
        },
        error: (error) => {
          this.signedIn.next(false);
          this.signedInUserId.next(0);
          this.signedInUsername.next('');
          console.error(`Error while signing in: ${error}`);
          this.router.navigate(['/mainToolbar/signIn']).then();
        }
      });
  }

  /**
   * Sign out the user.
   * @summary
   * This method sets the signedIn, signedInUserId, and signedInUsername to their default values,
   * removes the token from the local storage, and navigates to the sign-in page.
   */
  signOut() {
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUsername.next('');
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']).then();
  }

}
