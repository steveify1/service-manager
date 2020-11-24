"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = __importDefault(require("../lib/Service"));
class WalletService extends Service_1.default {
    constructor() {
        super();
    }
    setListeners() {
        this.on('new::user', (options, done) => __awaiter(this, void 0, void 0, function* () {
            options = options;
            const res = this.createPersonalWallet(options.payload);
            done({ wallet: res });
            return { wallet: res };
        }));
    }
    createWallet(type, userId) {
        console.log(`Creating a ${type} wallet for user with ID ${userId}`);
        // throw new Error('Wallet no gree create o, but we go try our best to solve the wahala');
        return { id: 3, balance: '0.0', user_id: userId };
    }
    createPersonalWallet(data) {
        const { id } = data;
        return this.createWallet('personal', id);
    }
}
exports.default = WalletService;
