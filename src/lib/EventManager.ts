import { EventEmitter } from 'events';
import IEventManager from './interfaces/IEventManager';
import ControlledEventOptions from './types/ControlledEventOptions';
import ControlledListener from './types/ControlledListener';
import Dispatcher from './Dispatcher';

class EventManager extends EventEmitter {
  private activeEvents: object = {};

  constructor() {
    super();
    this.on('error', (...args) => {
      console.log(...args);
    });
  }

  /**
   * Works like the EventEmitter.emit method except the dispatch of the
   * event is controlled.
   */
  async cEmit(eventType: string | symbol, options: ControlledEventOptions) {
    try {
      const listeners = this.listeners(eventType) as ControlledListener[];
      const dispatcher = new Dispatcher();
      return await dispatcher.dispatchAll(listeners, options);
    } catch (error) {
      // this.emit('error', error, options);
      throw error;
    }
  }

  /**
   *
   */
  addControlledListener(eventType: string | symbol, listener: ControlledListener): void {
    this.addListener(eventType, listener);
  }
}

export const useEventManager = () => new EventManager();
export default EventManager;
