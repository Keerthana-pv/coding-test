import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get("../assets/static-data/user-data.json");
  }
}
