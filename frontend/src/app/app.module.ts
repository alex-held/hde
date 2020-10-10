import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';

@NgModule ({
	declarations: [
		AppComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule
	],
	providers: [FormBuilder],
	bootstrap: [AppComponent]
})
export class AppModule { }
