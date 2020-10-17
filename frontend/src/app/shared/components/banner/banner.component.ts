import { Component, OnInit } from "@angular/core";
import { interval, Subject, timer } from "rxjs";
import { AsyncScheduler } from "rxjs/internal/scheduler/AsyncScheduler.js";
import { map, repeat, throttle } from "rxjs/operators";

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
  subject: Subject<Banner[]>;
  banners: Banner[];

  constructor() {
    this.banners = [
      {
        name: "Ihr Elektriker Meisterbetrieb mit langjähriger Erfahrung!",
        description:
          "Für Sie sind wir stets auf dem neuesten Stand der Technik und helfen mit Experten-Erfahrung professionell weiter. Informieren Sie sich hier über unser Angebot und erfahren Sie, was wir für Sie tun können.",
        imgUrl: "../../../../assets/images/banner-1.jpg",
        order: 1
      },
      {
        name: "Sicherungen",
        description:
          "Für Sie sind wir stets auf dem neuesten Stand der Technik und helfen mit Experten-Erfahrung professionell weiter. Informieren Sie sich hier über unser Angebot und erfahren Sie, was wir für Sie tun können.",
        imgUrl: "../../../../assets/images/banner-2.jpg",
        order: 2
      },
      {
        name: "Glasfaser",
        description:
          "Für Sie sind wir stets auf dem neuesten Stand der Technik und helfen mit Experten-Erfahrung professionell weiter. Informieren Sie sich hier über unser Angebot und erfahren Sie, was wir für Sie tun können.",
        imgUrl: "../../../../assets/images/banner-3.jpg",
        order: 3
      },
      {
        name: "Checkup",
        description:
          "Für Sie sind wir stets auf dem neuesten Stand der Technik und helfen mit Experten-Erfahrung professionell weiter. Informieren Sie sich hier über unser Angebot und erfahren Sie, was wir für Sie tun können.",
        imgUrl: "../../../../assets/images/banner-4.jpg",
        order: 4
      }
    ];
    this.subject = new Subject<Banner[]>();
  }

  ngOnInit() {
    interval(this.banners.length, AsyncScheduler.delegate)
      .pipe(
        throttle(value => timer(3000)),
        map(v =>
          this.subject.next(this.banners.slice(v, this.banners.length - v))
        ),
        repeat()
      )
      .subscribe(
        next => console.log(next),
        error => console.error(error)
      );
  }
}
