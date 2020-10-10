import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ContactModel} from './shared/contact.model';
import {ContactService} from './shared/services/contact.service'

@Component ({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'app';

	contactForm: FormGroup;

	constructor (private fb: FormBuilder, private contactService: ContactService) {
		this.contactForm = this.fb.group ({
			name: '',
			mail: '',
			message: '',
		});

	}

	getContactData(): FormGroup {
		return this.contactForm;
	}

	onSubmit () {
		const data: ContactModel = this.contactForm.value;
		console.log(data);
		this.contactService.submitContactForm (data);
	}

}
