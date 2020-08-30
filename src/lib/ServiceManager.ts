import IServiceManager from './interfaces/IServiceManager';
import IPortal from './interfaces/IPortal';
import IEventManager from './interfaces/IEventManager';
import IService from './interfaces/IService';
import Portal from './Portal';

const eventManager: IEventManager = { emit: () => null };

/**
 * A class that manages all the services in the system
 * It provides each class access to a portal channel and an event manager for
 * remote communication
 */
class ServiceManager implements IServiceManager {
  services: object;
  portal: IPortal;
  eventManager: IEventManager = eventManager;

  /**
   *
   * @param { object } registry - A service registry. An object whose values
   * are service instances
   */
  constructor(registry: object) {
    this.services = registry;
    this.portal = new Portal(this.services);
  }

  /**
   * Provides portal channel access to a service
   * @param { IService } service - A service instance
   * @returns { void } void
   */
  providePortalChannel(service: IService): void {
    service.connect(this.portal.exposeChannel(service));
  }

  /**
   * Provides a service with access to a central event mamager object
   * @param { IService } service - A service instance
   * @returns { void } void
   */
  provideEventManager(service: IService): void {
    service.setEventManager(this.eventManager);
  }

  /**
   * Sets up access and connection for every service in the registry
   */
  setup(): object {
    for (const serviceName in this.services) {
      const service = Object.getOwnPropertyDescriptor(
        this.services,
        serviceName
      )!.value as IService;

      this.provideEventManager(service);
      this.providePortalChannel(service);
    }
    return this.services;
  }
}

export default ServiceManager;
