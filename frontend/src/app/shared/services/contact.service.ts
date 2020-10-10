import {HttpClient, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ContactModel} from '../contact.model';

@Injectable ({
	providedIn: 'root'
})
export class ContactService {

	private url = 'http://localhost:8080/api/contact';

	constructor (private http: HttpClient) {
	}

	submitContactForm (contactModel: ContactModel) {


		this.http.request (HttpRequest.constructor ('POST', this.url, {
			body: JSON.stringify (contactModel),
			url: this.url,
			method: 'POST',
		})).subscribe ({
			next: res => {
				console.info ("success:  " + JSON.stringify (res))
			},
			error: err => console.error ("ERROR:  " + JSON.stringify (err))
		})
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
