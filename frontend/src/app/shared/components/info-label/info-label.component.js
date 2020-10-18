"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoLabelComponent = void 0;
var core_1 = require("@angular/core");
var InfoLabelComponent = /** @class */ (function () {
    function InfoLabelComponent() {
        this.title = "Title";
        this.icon = "home";
        this.value = "Value";
    }
    InfoLabelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], InfoLabelComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input()
    ], InfoLabelComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input()
    ], InfoLabelComponent.prototype, "value", void 0);
    InfoLabelComponent = __decorate([
        core_1.Component({
            selector: 'app-info-label',
            templateUrl: './info-label.component.html',
            styleUrls: ['./info-label.component.sass']
        })
    ], InfoLabelComponent);
    return InfoLabelComponent;
}());
exports.InfoLabelComponent = InfoLabelComponent;
