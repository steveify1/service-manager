"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventManager_1 = require("./EventManager");
const eventManager = EventManager_1.useEventManager();
/**
 * It is the oldest ancestor of all other services of this API and the only place
 * the database is accessed (indirectly) through an factory
 *
 *
 * THE BIG RULE: The methods of a Service or it's Decendant may return a value
 * and reach out to an external API over a network protocol, but must not send
 * a response to the requesting client.
 */
class Service {
    constructor() {
        this.eventManager = eventManager;
        this.setListeners();
    }
    emit(event, ...args) {
        return this.eventManager.emit(event, ...args);
    }
    cEmit(event, options) {
        try {
            return this.eventManager.cEmit(event, options);
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * A simple method to set all your event handlers in a service. This
     * method is called automatically when your service is instantiated
     *
     * @returns { void }
     */
    setListeners() { }
    /**
     *
     * @param { string | symbol } event - A registered event
     * @param { ControlledListener | Function } handler - An event handler
     * @returns { void } void
     */
    on(event, handler) {
        this.eventManager.on(event, handler);
    }
    /**
     * Allows the service to connect to other services
     * @param { Channel } channel - a reference to an object in the service manager containing all other services
     * in the system except for this current one
     * @returns { void } void
     */
    connect(channel) {
        this.channel = channel;
    }
}
exports.default = Service;
