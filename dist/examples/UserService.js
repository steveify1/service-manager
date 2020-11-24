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
class UserService extends Service_1.default {
    constructor() {
        super();
    }
    createUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.cEmit('new::user', {
                    payload: {
                        id: 1,
                        first_name: 'Stephen',
                        last_name: 'Nwakasi',
                        email: 'nwakasistephen@gmail.com',
                        phone_number: '07038202504',
                    }
                });
                console.log('Result here::: ', result);
            }
            catch (error) {
                console.log('Logging error which says:: ', error);
            }
        });
    }
}
exports.default = UserService;
