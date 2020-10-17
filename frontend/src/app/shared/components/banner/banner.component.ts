import { Component, OnInit } from "@angular/core";

export interface Photo {
  thumbnailImageSrc: string;
}

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.sass"]
})
export class BannerComponent implements OnInit {
  images: Photo[] = [
    {
      thumbnailImageSrc: "../../../../assets/images/products/bamboo-watch.jpg"
    },
    { thumbnailImageSrc: "../../../../assets/images/products/black-watch.jpg" },
    { thumbnailImageSrc: "../../../../assets/images/products/blue-band.jpg" }
  ];

  constructor() {}

  ngOnInit(): void {}
}
