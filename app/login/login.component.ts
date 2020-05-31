import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.loginService.getUserData().subscribe(
      (data: any): void => {
        console.log(data);
      }
    );
  }
}
