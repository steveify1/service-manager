"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Portal_1 = __importDefault(require("./lib/Portal"));
const Service_1 = __importDefault(require("./lib/Service"));
const services = {
    userService: new Service_1.default(),
    paymentService: new Service_1.default(),
};
const p = new Portal_1.default(services);
const { userService } = services;
userService.connect(p.exposeChannel(userService));
console.log(userService.channel);
exports.default = (value) => {
    return value;
};
