
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ContactService} from '../shared/services/contact.service'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

	contactForm!: FormGroup;

	constructor (private contactService: ContactService) {
	}

	ngOnInit (): void {
		this.contactForm = this.createForm();
	}
	onSubmit () {

		this.contactService.submitContactForm(this.contactForm.value).subscribe({
			next: res => {
				console.info ("success:  " + JSON.stringify (res))
				this.contactForm = this.createForm();
			},
			error: err => alert("ERROR:  " + JSON.stringify (err))
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
