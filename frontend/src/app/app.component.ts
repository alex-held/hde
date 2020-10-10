import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ContactService} from './shared/services/contact.service'

@Component ({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title = 'app';

	contactForm!: FormGroup;

	config: any;
	fullpage_api: any;

	constructor (private fb: FormBuilder, private contactService: ContactService) {
		this.config = {
			anchors: ['home', 'about-us', 'contact'],
			menu: '#menu',
			navigation: true,
		}
	}

	getRef(fullPageRef: any) {
		this.fullpage_api = fullPageRef;
	}

	ngOnInit (): void {
		this.contactForm = this.createForm ();
	}

	getContactData (): FormGroup {
		return this.contactForm;
	}

	onSubmit () {

		this.contactService.submitContactForm(this.contactForm.value).subscribe({
			next: res => {
				console.info ("success:  " + JSON.stringify (res))
			},
			error: err => console.error ("ERROR:  " + JSON.stringify (err))
		});
	}

	private createForm (): FormGroup {
		return new FormGroup ({
			name: new FormControl (''),
			mail: new FormControl (''),
			message: new FormControl ('')
		});
	}

}
