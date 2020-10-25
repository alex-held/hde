import { Component, OnInit } from "@angular/core";
import { ServiceCardService } from "src/app/shared/services/service-card.service";
import { ServiceCardModel } from "src/app/shared/models/service-card.model.js";

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
  gridColumns: number = 3;
}
