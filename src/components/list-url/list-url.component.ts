import { Component } from "@angular/core";
import { UrlModel } from "../../models/UrlModel";

@Component({
  selector: "list-url",
  templateUrl: "./list-url.component.html",
  styleUrls: ["./list-url.component.scss"]
})
export class ListUrlComponent {
  title = "CodeSandbox";
  public urls: Array<UrlModel> = [
    {
      title: "Vida AP",
      link:
        "https://servicos-aceitew.tokiomarine.com.br/aff/ctv/api/digita-vida-individual/#/seguro-acidentes-pessoais/",
      categories: ["Work"],
      tags: ["Vida"],
      env: "Aceite"
    },
    {
      title: "Vida Estagiario",
      link:
        "https://servicos-aceitew.tokiomarine.com.br/aff/ctv/api/digita-vida-individual/#/seguro-acidentes-pessoais-estagiario/",
      categories: ["Work"],
      tags: ["Vida"],
      env: "Aceite"
    },
    {
      title: "Vida AP",
      link:
        "http://srvprtapp001d:8085/aff/ctv/api/digita-vida-individual/#/seguro-acidentes-pessoais/",
      categories: ["Work"],
      tags: ["Vida"],
      env: "Dev"
    },
    {
      title: "Vida Estagiario",
      link:
        "http://srvprtapp001d:8085/aff/ctv/api/digita-vida-individual/#/seguro-acidentes-pessoais/",
      categories: ["Work"],
      tags: ["Vida"],
      env: "Dev"
    },
    {
      title: "Residencial - Cotador",
      link:
        "https://servicos-aceitew.tokiomarine.com.br/massificados/cotador-rd-digital",
      categories: ["Work"],
      tags: ["Residencial"],
      env: "Aceite"
    },
    {
      title: "Residencial - Cotador",
      link:
        "https://servicos-devz.tokiomarine.com.br/massificados/cotador-rd-digital",
      categories: ["Work"],
      tags: ["Residencial"],
      env: "Dev"
    },
    {
      title: "Portal Parceiros",
      link: "https://portalparceiros-aceitew.tokiomarine.com.br/",
      categories: ["Work"],
      tags: ["Residencial", "Vida", "Corretor"],
      env: "Aceite"
    },
    {
      title: "UOL",
      link: "https://www.uol.com.br/",
      categories: ["Personal"],
      tags: ["Entretenimento"],
      env: null
    }
  ];
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
