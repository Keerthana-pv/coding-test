import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isValid = true;
  username: string;
  password: string;
  userData = {
    username: "admin",
    password: "password"
  };
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    // this.getUserData();
    console.log(this.userData);
  }
  getUserData() {
    this.loginService.getUserData().subscribe(
      (data: any): void => {
        this.userData = data;
        console.log(data);
      }
    );
  }
  login() {
    if (
      this.username == this.userData.username &&
      this.password == this.userData.password
    ) {
      this.router.navigate(["./home"]);
    } else {
      this.isValid = false;
      console.log("Invalid credentials");
    }
  }
}
