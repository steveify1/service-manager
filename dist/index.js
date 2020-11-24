"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = __importDefault(require("./lib/Service"));
const ServiceManager_1 = __importDefault(require("./lib/ServiceManager"));
exports.default = {
    Service: Service_1.default,
    ServiceManager: ServiceManager_1.default,
};
