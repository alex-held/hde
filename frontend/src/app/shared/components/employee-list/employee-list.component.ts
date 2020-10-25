import { Component, OnInit } from "@angular/core";
import { EmployeeDetailsModel } from "src/app/shared/models/employee-details.model.js";
import { EmployeeService } from "src/app/shared/services/employee.service.js";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeDetailsModel[] = [];
  gridColumns: number = 3;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService
      .getWorkersEmployees()
      .subscribe(value => (this.employees = value));
  }
}
