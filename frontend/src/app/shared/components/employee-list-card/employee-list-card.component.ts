import { Component, Input, OnInit } from "@angular/core";
import { EmployeeDetailsModel } from "src/app/shared/models/employee-details.model.js";

@Component({
  selector: "app-employee-list-card",
  templateUrl: "./employee-list-card.component.html",
  styleUrls: ["./employee-list-card.component.sass"]
})
export class EmployeeListCardComponent implements OnInit {
  @Input()
  employee?: EmployeeDetailsModel;

  constructor() {}

  ngOnInit(): void {}
}
