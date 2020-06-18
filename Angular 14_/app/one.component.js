"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var one = (function () {
    function one() {
        this.childEvent = new core_1.EventEmitter();
    }
    one.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    one = __decorate([
        core_1.Component({
            selector: 'one',
            template: "{{pdata}}{{pdata1}}\n                child to parent: <input type=\"text\" #cdata (keyup)=\"onChange(cdata.value)\">",
            inputs: ['pdata', 'pdata1'],
            outputs: ["childEvent"]
        }), 
        __metadata('design:paramtypes', [])
    ], one);
    return one;
}());
exports.one = one;
//# sourceMappingURL=one.component.js.map