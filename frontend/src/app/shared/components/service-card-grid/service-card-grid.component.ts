import { Component, OnInit } from "@angular/core";
import { ServiceOffer } from "src/app/shared/components/service-card/service-card.component.js";

@Component({
  selector: "app-service-card-grid",
  templateUrl: "./service-card-grid.component.html",
  styleUrls: ["./service-card-grid.component.sass"]
})
export class ServiceCardGridComponent implements OnInit {
  serviceOfferings: ServiceOffer[] = [
    {
      title: "Elektroinstallation",
      long_description:
        "Ob in Neubauten, in Häusern, in Wohnungen oder in gewerblichen Objekten: Stromleitungen werden überall gebraucht. Auch für Ihre Wünsche bieten wir die passende Lösung.",
      url:
        "https://www.theodor-schmidt.de/schmallenberg/wp-content/uploads/2017/07/verteiler.jpg",
      subtitle: null
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

  constructor() {}

  ngOnInit(): void {}
}
