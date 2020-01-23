import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ListUrlComponent } from "../components/list-url/list-url.component";
import { AppComponent } from "./app.component";
import { MatInputModule } from "@angular/material/input"

@NgModule({
  declarations: [AppComponent, ListUrlComponent],
  imports: [BrowserModule, FormsModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
