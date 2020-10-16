import {Component, OnInit} from '@angular/core';
import {
	FormControl,
	FormGroup,
	ValidatorFn,
	Validators
} from '@angular/forms';
import {ContactService} from '../shared/services/contact.service'


@Component ({
	selector: 'app-contact-form',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

	contactForm!: FormGroup;

	constructor (private contactService: ContactService) {
	}

	private static createForm (): FormGroup {
		return new FormGroup ({
				'name': new FormControl ('', [Validators.required, Validators.maxLength (25), Validators.minLength (3)]),
				'mail': new FormControl ('', [Validators.required, Validators.email]),
				'message': new FormControl ('', [Validators.required, Validators.maxLength (500), Validators.minLength (15)])
			}, formSubmittableValidator
		);
	}

	ngOnInit (): void {
		this.contactForm = ContactComponent.createForm ();
	}

	onSubmit () {
		this.contactService.submitContactForm (this.contactForm.value).subscribe ({
			next: res => {
				console.info ("success:  " + JSON.stringify (res))
				this.contactForm = ContactComponent.createForm ();
			},
			error: err => alert ("ERROR:  " + JSON.stringify (err))
		});
	}


}

export const formSubmittableValidator: ValidatorFn = (c) => {
	try {
		const name = c.get ('name')!;
		const mail = c.get ('mail')!;
		const message = c.get ('message')!;
		return name.valid && mail.valid && message.valid ? null : {formInvalid: true};
	} catch (e) {
		return null
	}
};
