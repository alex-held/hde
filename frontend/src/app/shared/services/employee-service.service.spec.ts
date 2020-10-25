import { TestBed } from "@angular/core/testing";

import { EmployeeService } from "src/app/shared/services/employee.service.js";

describe("EmployeeServiceService", () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
