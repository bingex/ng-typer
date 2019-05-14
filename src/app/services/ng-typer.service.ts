import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgTyperService {
  randomJokeURL: string = 'https://geek-jokes.sameerkumar.website/api';

  constructor(private http: HttpClient) {}

  getTextToType() {
    return this.http.get(this.randomJokeURL);
  }
}
