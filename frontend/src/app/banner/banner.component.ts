import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { timer } from "rxjs";
import { repeat } from "rxjs/operators";

export interface Banner {
  name: string;
  description: string;
  imgUrl: string;
  order: number;
}

@Component({
  selector: "banner",
  templateUrl: "./banner.component.html"
})
export class BannerComponent implements OnInit {
  @Output()
  active: EventEmitter<number> = new EventEmitter();
  activeBanner: number = 0;
  banners: Banner[] = [
    {
      name: "Ihr Elektriker Meisterbetrieb mit langjähriger Erfahrung!",
      description:
        "Für Sie sind wir stets auf dem neuesten Stand der Technik und helfen mit Experten-Erfahrung professionell weiter. Informieren Sie sich hier über unser Angebot und erfahren Sie, was wir für Sie tun können.",
      imgUrl: "assets/images/banner-1.jpg",
      order: 1
    },
    {
      name: "Sicherungen",
      description:
        "Für Sie sind wir stets auf dem neuesten Stand der Technik und helfen mit Experten-Erfahrung professionell weiter. Informieren Sie sich hier über unser Angebot und erfahren Sie, was wir für Sie tun können.",
      imgUrl: "assets/images/banner-2.jpg",
      order: 2
    },
    {
      name: "Glasfaser",
      description:
        "Für Sie sind wir stets auf dem neuesten Stand der Technik und helfen mit Experten-Erfahrung professionell weiter. Informieren Sie sich hier über unser Angebot und erfahren Sie, was wir für Sie tun können.",
      imgUrl: "assets/images/banner-3.jpg",
      order: 3
    },
    {
      name: "Checkup",
      description:
        "Für Sie sind wir stets auf dem neuesten Stand der Technik und helfen mit Experten-Erfahrung professionell weiter. Informieren Sie sich hier über unser Angebot und erfahren Sie, was wir für Sie tun können.",
      imgUrl: "assets/images/banner-4.jpg",
      order: 4
    }
  ];

  areas: string[] = ["top", "left", "center ", "right ", "bottom"];

  getImageUrl(): string {
    if (this.banners.length > 0) {
      return this.banners[this.activeBanner].imgUrl;
    }
    return "";
  }

  shouldBeVisible(id: Number): boolean {
    return id == this.activeBanner;
  }

  ngOnInit() {
    this.activeBanner = 0;
    timer(1000, 3000)
      .pipe(repeat())
      .subscribe(value => {
        const newValue = 1 + (value & (this.banners.length - 1));
        this.activeBanner = newValue - 1;
      });
  }
}
