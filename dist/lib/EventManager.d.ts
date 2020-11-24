/// <reference types="node" />
import { EventEmitter } from 'events';
import ControlledEventOptions from './types/ControlledEventOptions';
import ControlledListener from './types/ControlledListener';
declare class EventManager extends EventEmitter {
    private activeEvents;
    constructor();
    /**
     * Works like the EventEmitter.emit method except the dispatch of the
     * event is controlled.
     */
    cEmit(eventType: string | symbol, options: ControlledEventOptions): Promise<object>;
    /**
     *
     */
    addControlledListener(eventType: string | symbol, listener: ControlledListener): void;
}
export declare const useEventManager: () => EventManager;
export default EventManager;
