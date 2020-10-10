import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ContactModel} from '../contact.model';

@Injectable ({
	providedIn: 'root'
})
export class ContactService {

	private url = 'http://localhost:8000/api/contact';

	constructor (private http: HttpClient) {
	}

	submitContactForm (contactModel: ContactModel): Observable<any> {

		return this.http.post (this.url, contactModel);


//		HttpRequest.constructor ('POST', this.url, {
//			body: contactModel,
//			url: this.url,
//			method: 'POST',
//		})
		//)
		//	;
	}
}


/** ContactModel

 function getRequestBodyFromForm() {
	let data = new FormData();
	data.append('name', document.getElementById('name').value);
	data.append('mail', document.getElementById('mail').value);
	data.append('message', document.getElementById('message').value);

	return data;
}


function SubmitContactForm() {

	let data = getRequestBodyFromForm();

	Submit(data, function () {
		console.debug('submit callback');
	});

}

function Submit(data, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8000/api/contact', true);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			callback();
		}
	}

	xhr.send(data);
}
 */
