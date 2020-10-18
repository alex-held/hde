import { TestBed } from "@angular/core/testing";
import {} from "jasmine";
import { ContactService } from "./contact.service";

describe("ContactService", () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
