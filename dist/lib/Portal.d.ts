import Service from './Service';
import IPortal from './interfaces/IPortal';
import Channel from './types/Channel';
/**
 * A channel through which a service instance can access the other
 * services held together by the service manager class
 */
declare class Portal implements IPortal {
    readonly channel: Channel;
    /**
     *
     * @param services - A reference to an object containing all the services.
     */
    constructor(services: object);
    excludeService(serviceToExclude: Service): object;
    /**
     * Exposes the portal
     * @param { Service } service - A Service instance.
     * @returns { object } The reference to the object containing
     * all the services, but the service, `service`.
     */
    exposeChannel(service: Service): Channel;
}
export default Portal;
