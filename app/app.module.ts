import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { CustomMaterialModule } from "./material.module";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing.module";
import { HttpModule } from "@angular/http";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
