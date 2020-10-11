import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { ContactComponent } from './contact/contact.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ContactComponent
        ],
        imports: [
            AppRoutingModule,
            HttpClientModule,
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            SharedModule,
            AngularFullpageModule
        ],
        providers: [FormBuilder],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map