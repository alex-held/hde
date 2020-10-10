import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';

@NgModule ({
	declarations: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		HttpClientModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule
	],
	providers: [FormBuilder],
	bootstrap: [AppComponent]
})
export class AppModule {
}
