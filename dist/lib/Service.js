"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    /**
     * Allows the service to connect to other services
     * @param { IChannel } channel - a reference to an object in the service manager containing all other services
     * in the system except for this current one
     * @returns { void } void
     */
    connect(channel) {
        this.channel = channel;
    }
    /**
     * Sets the eventManager through which the service can send and receive
     * messages from other services
     * @param { IEventManager } eventManager - An instance of the `EventManager` class
     * @returns { void } void
     */
    setEventManager(eventManager) {
        this.eventManager = eventManager;
    }
}
exports.default = Service;
