import {NgModule} from '@angular/core';
import {GoogleMapsModule} from "@angular/google-maps";
import {MaterialModule} from "src/app/shared/modules/material.module.js";
import {PrimeModule} from "src/app/shared/modules/prime.module.js";
import {ContactService} from './services/contact.service';
import { InfoLabelComponent } from './components/info-label/info-label.component';
import { SectionComponent } from './components/section/section.component';

@NgModule ({
	declarations: [InfoLabelComponent, SectionComponent],
	imports: [PrimeModule,MaterialModule, GoogleMapsModule],
	exports: [PrimeModule,MaterialModule,  InfoLabelComponent],
	providers: [ContactService],
})
export class SharedModule {}
