import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ServiceCardModel } from "src/app/shared/models/service-card.model.js";

@Injectable({
  providedIn: "root"
})
export class ServiceCardService {
  private services: ServiceCardModel[] = [
    {
      title: "Elektroinstallation",
      url: "assets/images/services/installation.jpg",
      subtitle:
        "Ob in Neubauten, in Häusern, in Wohnungen oder in gewerblichen Objekten: Stromleitungen werden überall gebraucht. Auch für Ihre Wünsche bieten wir die passende Lösung."
    },
    {
      title: "Smart Hone Services",
      url: "assets/images/services/smart-home.jpg",
      subtitle:
        "Schalten Sie unkalkulierbare Sicherheitsrisiken von Anfang an aus."
    },
    {
      title: "Stromkasten",
      url: "assets/images/services/stromkasten.jpg",
      subtitle: "Egal ob Neubau oder Wartung"
    },
    {
      title: "Netzwerk Verkabelung",
      url: "assets/images/services/fiber.jpg",
      subtitle: "High-Speed internet"
    },
    {
      title: "E-Check Fachberatung",
      url:
        "http://www.bohnen-mies.de/files/template/upload/Leistungen/Elektrotechnik/ECHECK-.jpg",
      subtitle:
        "Schalten Sie unkalkulierbare Sicherheitsrisiken von Anfang an aus."
    }
  ];

  constructor() {}

  getServices(): Observable<ServiceCardModel[]> {
    return of(this.services);
  }
}
