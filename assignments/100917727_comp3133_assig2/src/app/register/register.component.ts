import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUser } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  firstname: string = '';
  lastname: string = '';
  password: string = '';
  email: string = '';

  constructor(private addUser: AddUser, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addUser
    .mutate({
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      password: this.password,
      email: this.email
    }).subscribe(({data}) => {
      console.log('created user', data?.username);
      this.router.navigate(['/']);
    });
  }

}
