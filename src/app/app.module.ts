import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ListUrlComponent } from "../components/list-url/list-url.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, ListUrlComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
