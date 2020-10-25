import { Component, Input, OnInit } from "@angular/core";
import { ServiceCardModel } from "src/app/shared/models/service-card.model";

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
