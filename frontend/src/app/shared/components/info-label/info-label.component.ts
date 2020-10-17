import {Component, Input, OnInit} from '@angular/core';

@Component ({
	selector: 'app-info-label',
	templateUrl: './info-label.component.html',
	styleUrls: ['./info-label.component.sass']
})
export class InfoLabelComponent implements OnInit {

	@Input ()
	title: string = "Title"

	@Input ()
	icon: string = "home"

	@Input ()
	value: string = "Value"

	constructor () {
	}

	ngOnInit (): void {
	}

}
