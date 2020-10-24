import { Component, OnInit } from "@angular/core";
import { ServiceOffer } from "src/app/shared/components/service-card/service-card.component";
import { ServiceCardService } from "src/app/shared/services/service-card.service";
import { ServiceCardModel } from "src/app/shared/services/serviceCardModel";

@Component({
  selector: "app-service-card-grid",
  templateUrl: "./service-card-grid.component.html",
  styleUrls: ["./service-card-grid.component.sass"]
})
export class ServiceCardGridComponent implements OnInit {
  services: ServiceCardModel[] = [];

  constructor(private serviceCardService: ServiceCardService) {}

  ngOnInit(): void {
    this.serviceCardService.getServices().subscribe({
      next: value => (this.services = value),
      complete: () => console.log("loaded services"),
      error: err => console.error(err)
    });
  }

  serviceOfferings: ServiceOffer[] = [
    {
      title: "Elektroinstallation",
      long_description:
        "Ob in Neubauten, in Häusern, in Wohnungen oder in gewerblichen Objekten: Stromleitungen werden überall gebraucht. Auch für Ihre Wünsche bieten wir die passende Lösung.",
      url: "assets/images/banner-4.jpg",
      subtitle: null
    },
    {
      title: "Smart Hone Services",
      long_description:
        "Mit Smarter Home ist die intelligente Vernetzung Ihrer verschiedenen Haushaltsgeräte und elektrischen Einrichtungen im Haus gemeint. Durch diese Gebäudeautomation gewinnen Sie an Wohnkomfort, gleichzeitig erhöht sich die Sicherheit und Sie können Energie sparen. So zum Beispiel, indem Sie von Ihrem Smartphone aus, die Aufnahmen der Überwachungskamera sehen können, oder Ihre Heizung von unterwegs aus anschalten können, statt sie die ganze Zeit laufen zu lassen.",
      url: "assets/images/banner-5.jpg",
      subtitle:
        "Schalten Sie unkalkulierbare Sicherheitsrisiken von Anfang an aus."
    },
    {
      title: "Klingel- und Sprechanlage",
      long_description:
        "Sprechanlagen und moderne Türklingeln gehören seit einiger Zeit zur Standardausstattung jedes guten Hauses und jeder Wohnung. Sie entscheiden, wie viel Komfort, Design und Sicherheit Sie haben wollen. Für jeden Wunsch haben wir die passende Lösung an Klingel- und Sprechanlagen parat.",
      url: "assets/images/banner-6.jpg",
      subtitle: "Mehr Sicherheit durch eine Sprechanlage"
    },
    {
      title: "E-Check Fachberatung",
      long_description:
        "Unsere E-Check Experten prüfen vor Ort Ihre gesamten Elektroinstallationen auf einwandfreien Zustand. Dabei werden Schutzeinrichtungen, elektrische Geräte oder Maschinen wie z. B. Herde, Computer, Kopierer, Aktenvernichter auf Sicherheitsrisiken hin untersucht und mit einem Messgerät die Netzspannung überprüft. Im Anschluss erhalten Sie die Prüfergebnisse als E-Check Prüfprotokoll, in dem die Sicherheit bestätigt oder auszubessernde Mängel, wie unzureichende Schutzeinrichtungen und nötige Instandsetzungen, angegeben sind, sowie eine E-Check Plakette.",
      url:
        "http://www.bohnen-mies.de/files/template/upload/Leistungen/Elektrotechnik/ECHECK-.jpg",
      subtitle:
        "Schalten Sie unkalkulierbare Sicherheitsrisiken von Anfang an aus."
    },
    {
      title: "E-Check Fachberatung",
      long_description:
        "Unsere E-Check Experten prüfen vor Ort Ihre gesamten Elektroinstallationen auf einwandfreien Zustand. Dabei werden Schutzeinrichtungen, elektrische Geräte oder Maschinen wie z. B. Herde, Computer, Kopierer, Aktenvernichter auf Sicherheitsrisiken hin untersucht und mit einem Messgerät die Netzspannung überprüft. Im Anschluss erhalten Sie die Prüfergebnisse als E-Check Prüfprotokoll, in dem die Sicherheit bestätigt oder auszubessernde Mängel, wie unzureichende Schutzeinrichtungen und nötige Instandsetzungen, angegeben sind, sowie eine E-Check Plakette.",
      url:
        "http://www.bohnen-mies.de/files/template/upload/Leistungen/Elektrotechnik/ECHECK-.jpg",
      subtitle:
        "Schalten Sie unkalkulierbare Sicherheitsrisiken von Anfang an aus."
    },
    {
      title: "E-Check Fachberatung",
      long_description:
        "Unsere E-Check Experten prüfen vor Ort Ihre gesamten Elektroinstallationen auf einwandfreien Zustand. Dabei werden Schutzeinrichtungen, elektrische Geräte oder Maschinen wie z. B. Herde, Computer, Kopierer, Aktenvernichter auf Sicherheitsrisiken hin untersucht und mit einem Messgerät die Netzspannung überprüft. Im Anschluss erhalten Sie die Prüfergebnisse als E-Check Prüfprotokoll, in dem die Sicherheit bestätigt oder auszubessernde Mängel, wie unzureichende Schutzeinrichtungen und nötige Instandsetzungen, angegeben sind, sowie eine E-Check Plakette.",
      url:
        "http://www.bohnen-mies.de/files/template/upload/Leistungen/Elektrotechnik/ECHECK-.jpg",
      subtitle:
        "Schalten Sie unkalkulierbare Sicherheitsrisiken von Anfang an aus."
    }
  ];
  gridColumns: number = 3;
}
