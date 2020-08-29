"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A channel through which a service instance can access the other
 * services held together by the service manager class
 */
class Portal {
    /**
     *
     * @param services - A reference to an object containing all the services.
     */
    constructor(services) {
        this.channel = services;
    }
    excludeService(serviceToExclude) {
        const modifiedChannel = {};
        for (let service in this.channel) {
            const { value } = Object.getOwnPropertyDescriptor(this.channel, service);
            if (value !== serviceToExclude) {
                Object.defineProperty(modifiedChannel, service, { value });
            }
        }
        return modifiedChannel;
    }
    /**
     * Exposes the portal
     * @param { Service } service - A Service instance.
     * @returns { object } The reference to the object containing
     * all the services, but the service, `service`.
     */
    exposeChannel(service) {
        return this.excludeService(service);
    }
}
exports.default = Portal;
