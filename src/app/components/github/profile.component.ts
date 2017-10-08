import { Component } from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent {
  user: any;
  repos: any[];
  username: string;

  constructor(private github: GithubService){
    this.user = false;
  }

  searchUser(){

    this.github.updateUser(this.username);
    this.github.getUser()
      .subscribe(user => {
        this.user = user;
      } )

    this.github.getRepos()
      .subscribe(repos => {
        this.repos = repos;
      } )
  }


}
