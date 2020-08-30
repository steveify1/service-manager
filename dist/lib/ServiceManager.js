"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Portal_1 = __importDefault(require("./Portal"));
const eventManager = { emit: () => null };
/**
 * A class that manages all the services in the system
 * It provides each class access to a portal channel and an event manager for
 * remote communication
 */
class ServiceManager {
    /**
     *
     * @param { object } registry - A service registry. An object whose values
     * are service instances
     */
    constructor(registry) {
        this.eventManager = eventManager;
        this.services = registry;
        this.portal = new Portal_1.default(this.services);
    }
    /**
     * Provides portal channel access to a service
     * @param { IService } service - A service instance
     * @returns { void } void
     */
    providePortalChannel(service) {
        service.connect(this.portal.exposeChannel(service));
    }
    /**
     * Provides a service with access to a central event mamager object
     * @param { IService } service - A service instance
     * @returns { void } void
     */
    provideEventManager(service) {
        service.setEventManager(this.eventManager);
    }
    /**
     * Sets up access and connection for every service in the registry
     */
    setup() {
        for (const serviceName in this.services) {
            const service = Object.getOwnPropertyDescriptor(this.services, serviceName).value;
            this.provideEventManager(service);
            this.providePortalChannel(service);
        }
        return this.services;
    }
}
exports.default = ServiceManager;
