export class Teacher {
    name: string;
    lastname: string;
    speciality: string;
    image: string;
    cargo: string;

    constructor(teacher: {name?: string, lastname?: string, speciality?: string, image?:string,cargo?: string}) {
        this.name = teacher.name || "";
        this.lastname = teacher.lastname || "";
        this.speciality = teacher.speciality || "";
        this.image = teacher.image || "";
        this.cargo=teacher.cargo ||"";
    }
}
