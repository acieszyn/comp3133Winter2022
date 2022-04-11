import { Component, OnInit } from '@angular/core';
import { Login } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private login: Login) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.login
    .mutate({
      username: this.username,
      password: this.password
    }).subscribe(({data}) => {
      localStorage.setItem('token', data?.login.token!);
      window.location.reload();
    });
  }
}
