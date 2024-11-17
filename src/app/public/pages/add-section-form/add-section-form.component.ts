import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionService} from "../../../learning/services/section.service";
import {Section} from "../../../learning/model/section.entity";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {MatInput, MatLabel} from "@angular/material/input";

@Component({
  selector: 'app-add-section-form',
  standalone: true,
  imports: [
    TranslateModule,
    FormsModule,
    MatInput,
    MatLabel
  ],
  templateUrl: './add-section-form.component.html',
  styleUrl: './add-section-form.component.css'
})
export class AddSectionFormComponent {
  unitId: number | null = null;
  @Input() section = new Section({});
  @Output() protected addSection = new EventEmitter<Section>();

  constructor(private route: ActivatedRoute, private sectionService: SectionService, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.unitId = params['id'] ? Number(params['id']) : null;
      console.log(this.unitId);
      if (this.unitId) {
        this.section.unit_id = this.unitId;
        console.log(this.section.unit_id);
      }
    });
  }

  formatEmbedUrl(url: string): string {
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.*[?&]v=))([^?&"'>]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
  }

  protected async addNewSection() {
    if (this.section.url_video) {
      this.section.url_video = this.formatEmbedUrl(this.section.url_video);
    }
    this.sectionService.create(this.section).subscribe();
    this.router.navigate(['/courseEditContent']);
  }

  cancelAddSection() {
    this.router.navigate(['/courseEditContent']);
  }
}
