import Student from './Student';

export default class PartTimeStudent extends Student {
    classTiming: string;

    constructor(id: number, fnm: string, lnm: string, ct: string) {
        super(id, fnm, lnm);
        this.classTiming = ct;
    }

    display(): void {
        console.log('Student ID:' + this.id);
        console.log('Student Type: Part Time');
        console.log('First Name:' + this.firstName);
        console.log('Last Name:' + this.lastName);
        console.log('Class Timing: ' + this.classTiming);
    }
}