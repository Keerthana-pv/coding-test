import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { CustomMaterialModule } from "./material.module";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing.module";
import { HttpModule } from "@angular/http";
import { LoginModule } from "./login/login.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeModule } from "./home/home.module";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    LoginModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
