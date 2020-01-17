import { Component } from "@angular/core";
import { UrlModel } from "../../models/UrlModel";
import * as dbJson from "../../app/db.json";

@Component({
  selector: "list-url",
  templateUrl: "./list-url.component.html",
  styleUrls: ["./list-url.component.scss"]
})
export class ListUrlComponent {
  title = "CodeSandbox";
  public urls: Array<UrlModel> = dbJson;
  public filteredUrls = Object.assign([], this.urls);
  Init() {}

  /**
   * filterUrls
   */
  public filterUrls(value: string): void {
    this.filteredUrls = Object.assign([], this.urls).filter(
      item => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }
}
