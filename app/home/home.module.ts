import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { HomeService } from "./home.service";
import { CustomMaterialModule } from "../material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule {}
