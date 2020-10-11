import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
const appRoutes = [
    { path: '**', component: AppComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [
            RouterModule
        ]
    })
], AppRoutingModule);
export { AppRoutingModule };
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app-routing.module.js.map