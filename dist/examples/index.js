"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceManager_1 = __importDefault(require("../lib/ServiceManager"));
const UserService_1 = __importDefault(require("./UserService"));
const ProfileService_1 = __importDefault(require("./ProfileService"));
const WalletService_1 = __importDefault(require("./WalletService"));
const registry = {
    userService: new UserService_1.default(),
    profileService: new ProfileService_1.default(),
    walletService: new WalletService_1.default(),
};
registry.userService.createUser();
const serviceManager = new ServiceManager_1.default(registry);
const services = serviceManager.setup();
exports.default = services;
