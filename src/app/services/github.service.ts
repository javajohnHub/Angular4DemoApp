import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username: string;
  private client_id = '2a4f3654384a273b41ef';
  private client_secret = '47c933a5dc7d586aecf9bc58472c4467551c40e4';

  constructor(private http: Http){
  }

  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '' +
      '&client_secret=' + this.client_secret)
      .map(res => res.json())
  }

  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id +
      '&client_secret=' + this.client_secret)
      .map(res => res.json())
  }

  updateUser(username: string){
    this.username = username;
  }
}
