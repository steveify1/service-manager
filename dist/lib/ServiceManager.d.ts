import IServiceManager from './interfaces/IServiceManager';
import IPortal from './interfaces/IPortal';
import IService from './interfaces/IService';
import EventManager from './EventManager';
/**
 * A class that manages all the services in the system
 * It provides each class access to a portal channel and an event manager for
 * remote communication
 */
declare class ServiceManager implements IServiceManager {
    services: object;
    portal: IPortal;
    eventManager: EventManager;
    /**
     *
     * @param { object } registry - A service registry. An object whose values
     * are service instances
     */
    constructor(registry: object);
    /**
     * Provides portal channel access to a service
     * @param { IService } service - A service instance
     * @returns { void } void
     */
    providePortalChannel(service: IService): void;
    /**
     * Sets up access and connection for every service in the registry
     */
    setup(): object;
}
export default ServiceManager;
