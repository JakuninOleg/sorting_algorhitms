"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var performance_now_1 = __importDefault(require("performance-now"));
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        var start = performance_now_1.default();
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
        var end = performance_now_1.default();
        console.log(end - start);
        return end - start;
    };
    return Sorter;
}());
exports.Sorter = Sorter;
