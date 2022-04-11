import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';

export interface User {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  type: string;
}

export interface AuthPayload {
  token: string;
  user: User;
}

export interface Response {
  login: AuthPayload;
}

@Injectable({
  providedIn: 'root'
})
export class Login extends Mutation<Response> {
  override document = gql `
  mutation login($username: String!, $password: String!){
    login(username: $username, password: $password) {
      user {
        id
        username
        firstname
        lastname
        password
        email
        type
      }
      token
    }
  }
  `
}

@Injectable({
  providedIn: 'root'
})
export class AddUser extends Mutation<User>
{
  override document = gql `
  mutation addUser($username: String!, $firstname: String!, $lastname: String!, $password: String!, $email: String!)
  {
    addUser(username: $username, firstname: $firstname, lastname: $lastname, password: $password, email: $email, type: "customer") {
      id
      username
      firstname
      lastname
      password
      email
      type
    }
  }
  `
}
