import IPerson, { collegeName } from './IPerson';
import Student from './Student';
import PartTimeStudent from './PartTimeStudent';

var p1 = new Student(1, 'George', 'Washington');
p1.display();

var p2 = new PartTimeStudent(2, 'Elizabeth', 'Windsor', 'Evenings');
p2.display();