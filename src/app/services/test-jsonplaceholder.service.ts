import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestJSONPlaceholderService {
  public users: any[] | undefined = [];

  url = 'https://my-json-server.typicode.com/typicode/demo/posts';

  constructor(private http: HttpClient) { }

  public getUsers(): void {
    this.getUsersFromApi().subscribe((users) => {
      this.users = users
    },(error)=> {
      this.users = undefined
    }
    )
  }

  private getUsersFromApi(): Observable<any>{
    return this.http.get(this.url);
  }

}
