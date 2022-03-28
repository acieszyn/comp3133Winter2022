import IPerson from './IPerson';

export default class Student implements IPerson {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, fnm: string, lnm: string) {
        this.id = id;
        this.firstName = fnm;
        this.lastName = lnm;
    }

    display(): void {
        console.log('Student ID:' + this.id);
        console.log('Student Type: Full Time');
        console.log('First Name:' + this.firstName);
        console.log('Last Name:' + this.lastName);
    }

    print(): void {
        console.log('Printing from the Student class');
    }
}