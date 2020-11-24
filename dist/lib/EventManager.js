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
exports.useEventManager = void 0;
const events_1 = require("events");
const Dispatcher_1 = __importDefault(require("./Dispatcher"));
class EventManager extends events_1.EventEmitter {
    constructor() {
        super();
        this.activeEvents = {};
        this.on('error', (...args) => {
            console.log(...args);
        });
    }
    /**
     * Works like the EventEmitter.emit method except the dispatch of the
     * event is controlled.
     */
    cEmit(eventType, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listeners = this.listeners(eventType);
                const dispatcher = new Dispatcher_1.default();
                return yield dispatcher.dispatchAll(listeners, options);
            }
            catch (error) {
                // this.emit('error', error, options);
                throw error;
            }
        });
    }
    /**
     *
     */
    addControlledListener(eventType, listener) {
        this.addListener(eventType, listener);
    }
}
exports.useEventManager = () => new EventManager();
exports.default = EventManager;
