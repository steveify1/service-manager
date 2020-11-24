import Service from './Service';
import IPortal from './interfaces/IPortal';
import Channel from './types/Channel';

/**
 * A channel through which a service instance can access the other
 * services held together by the service manager class
 */
class Portal implements IPortal {
  readonly channel: Channel;

  /**
   *
   * @param services - A reference to an object containing all the services.
   */
  constructor(services: object) {
    this.channel = services;
  }

  excludeService(serviceToExclude: Service): object {
    let modifiedChannel: Channel = {};

    for (let service in this.channel) {
      const { value } = Object.getOwnPropertyDescriptor(this.channel, service)!;

      if (value === serviceToExclude) {
        modifiedChannel = { ...this.channel, [service]: undefined };
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
  exposeChannel(service: Service): Channel {
    return this.excludeService(service);
  }
}

export default Portal;
