import { Component, Input, OnInit } from "@angular/core";
import { ServiceCardModel } from "src/app/shared/services/serviceCardModel";

@Component({
  selector: "app-service-card",
  templateUrl: "./service-card.component.html",
  styleUrls: ["./service-card.component.sass"]
})
export class ServiceCardComponent implements OnInit {
  @Input() service!: ServiceCardModel;

  constructor() {}

  ngOnInit(): void {}
}

export interface ServiceOffer {
  url?: string;
  title: string;
  subtitle: string | any;
  long_description: string;
}
