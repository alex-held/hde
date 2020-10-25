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
      url: "assets/images/banner-4.jpg",
      subtitle:
        "Ob in Neubauten, in Häusern, in Wohnungen oder in gewerblichen Objekten: Stromleitungen werden überall gebraucht. Auch für Ihre Wünsche bieten wir die passende Lösung."
    },
    {
      title: "Smart Hone Services",
      url: "assets/images/banner-5.jpg",
      subtitle:
        "Schalten Sie unkalkulierbare Sicherheitsrisiken von Anfang an aus."
    },
    {
      title: "Klingel- und Sprechanlage",
      url: "assets/images/banner-6.jpg",
      subtitle: "Mehr Sicherheit durch eine Sprechanlage"
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
