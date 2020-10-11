import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ContactService } from './shared/services/contact.service';
let AppComponent = class AppComponent {
    constructor(fb, contactService) {
        this.fb = fb;
        this.contactService = contactService;
        this.title = 'app';
        this.config = {
            anchors: ['home', 'about-us', 'contact'],
            menu: '#menu',
            navigation: true
        };
    }
    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }
    ngOnInit() {
        this.contactForm = this.createForm();
    }
    getContactData() {
        return this.contactForm;
    }
    onSubmit() {
        this.contactService.submitContactForm(this.contactForm.value).subscribe({
            next: res => {
                console.info("success:  " + JSON.stringify(res));
            },
            error: err => console.error("ERROR:  " + JSON.stringify(err))
        });
    }
    createForm() {
        return new FormGroup({
            name: new FormControl(''),
            mail: new FormControl(''),
            message: new FormControl('')
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.sass']
    }),
    __metadata("design:paramtypes", [FormBuilder, ContactService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map