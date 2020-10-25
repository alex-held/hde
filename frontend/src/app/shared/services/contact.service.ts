import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContactFormModel } from "src/app/shared/models/contact-form.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  url = "";

  constructor(private http: HttpClient) {
    this.url = environment.contactApi;
  }

  submitContactForm(contactModel: ContactFormModel): Observable<any> {
    return this.http.post(this.url, contactModel);
  }
}
