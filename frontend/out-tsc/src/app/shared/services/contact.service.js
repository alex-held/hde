import { __decorate, __metadata } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8000/api/contact';
    }
    submitContactForm(contactModel) {
        return this.http.post(this.url, contactModel);
        //		HttpRequest.constructor ('POST', this.url, {
        //			body: contactModel,
        //			url: this.url,
        //			method: 'POST',
        //		})
        //)
        //	;
    }
};
ContactService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], ContactService);
export { ContactService };
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
//# sourceMappingURL=contact.service.js.map