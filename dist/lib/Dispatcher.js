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
Object.defineProperty(exports, "__esModule", { value: true });
class Dispatcher {
    constructor() {
        this.state = {};
        this.updateState.bind(this);
    }
    /**
     * Updates the state immutably
     *
     * @param { string } key - This points to the name of the listener function that
     * is returning the value. This would be used to store the listener's value in the
     * state, particularly in the case where the value from the listener is not an
     * object literal
     *
     * @param { string } key - The name of the listener (that is, Function.name)
     * @param { object } value - An object containing the value returned by a listener
     * @returns { void } void
     */
    updateState(key, value = {}) {
        if (typeof value !== 'object') {
            this.state = { [key]: value };
            return;
        }
        this.state = Object.assign(Object.assign({}, this.state), value);
    }
    /**
     * Calls a single listener
     * @param { ControlledListener }
     */
    dispatch(listener, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield listener(options, (value) => {
                this.updateState(listener.name, value);
            });
            if (result) {
                this.updateState(listener.name, result);
            }
        });
    }
    /**
     * Calls all the listeners asynchronously
     *
     * @returns { Promise<object> } The state
     */
    dispatchAll(listeners, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(listeners.map((listener) => __awaiter(this, void 0, void 0, function* () {
                return yield this.dispatch(listener, options);
            })));
            return this.state;
        });
    }
}
exports.default = Dispatcher;
