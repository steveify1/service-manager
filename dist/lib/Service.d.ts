import IService from './interfaces/IService';
import EventManager from './EventManager';
import Channel from './types/Channel';
import ControlledListener from './types/ControlledListener';
import ControlledEventOptions from './types/ControlledEventOptions';
/**
 * It is the oldest ancestor of all other services of this API and the only place
 * the database is accessed (indirectly) through an factory
 *
 *
 * THE BIG RULE: The methods of a Service or it's Decendant may return a value
 * and reach out to an external API over a network protocol, but must not send
 * a response to the requesting client.
 */
declare class Service implements IService {
    eventManager: EventManager;
    channel: Channel | undefined;
    constructor();
    emit(event: string | symbol, ...args: any[]): boolean;
    cEmit(event: string | symbol, options: ControlledEventOptions): Promise<object | undefined>;
    /**
     * A simple method to set all your event handlers in a service. This
     * method is called automatically when your service is instantiated
     *
     * @returns { void }
     */
    protected setListeners(): void;
    /**
     *
     * @param { string | symbol } event - A registered event
     * @param { ControlledListener | Function } handler - An event handler
     * @returns { void } void
     */
    on(event: string | symbol, handler: ControlledListener): void;
    /**
     * Allows the service to connect to other services
     * @param { Channel } channel - a reference to an object in the service manager containing all other services
     * in the system except for this current one
     * @returns { void } void
     */
    connect(channel: Channel): void;
}
export default Service;
