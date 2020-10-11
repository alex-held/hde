import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../shared/services/contact.service';
let ContactComponent = class ContactComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    ngOnInit() {
        this.contactForm = this.createForm();
    }
    onSubmit() {
        this.contactService.submitContactForm(this.contactForm.value).subscribe({
            next: res => {
                console.info("success:  " + JSON.stringify(res));
                this.contactForm = this.createForm();
            },
            error: err => alert("ERROR:  " + JSON.stringify(err))
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
ContactComponent = __decorate([
    Component({
        selector: 'app-contact-form',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.sass']
    }),
    __metadata("design:paramtypes", [ContactService])
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map