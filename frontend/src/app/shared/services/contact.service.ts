import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "src/environments/environment.js";
import {ContactModel} from '../contact.model';

@Injectable ({
	providedIn: 'root'
})
export class ContactService {

	url = "";

	constructor (private http: HttpClient){
		this.url = environment.contactApi;
	}

	submitContactForm (contactModel: ContactModel): Observable<any> {
		return this.http.post (this.url, contactModel);
	}
}
