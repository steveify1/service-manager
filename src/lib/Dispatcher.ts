import ControlledEventOptions from './types/ControlledEventOptions';
import ControlledListener from './types/ControlledListener';

class Dispatcher {
  private state: object = {};

  constructor() {
    this.updateState.bind(this);
  }

  /**
   * Updates the state immutably
   * 
   * @param { string } key - This points to the name of the listener function that
   * is returning the value. This would be used to store the listener's value in the
   * state, particularly in the case where the value from the listener is not an
   * object literal
   * 
   * @param { string } key - The name of the listener (that is, Function.name)
   * @param { object } value - An object containing the value returned by a listener
   * @returns { void } void
   */
  updateState(key: string, value: object = {}): void {
    if (typeof value !== 'object') {
      this.state = { [key]: value };
      return;
    }

    this.state = { ...this.state, ...value };
  }

  /**
   * Calls a single listener
   * @param { ControlledListener }
   */
  async dispatch(listener: ControlledListener, options: ControlledEventOptions): Promise<void> {
    const result = await listener(options, (value: any) => {
      this.updateState(listener.name, value);
    });

    if (result) {
      this.updateState(listener.name, result);
    }
  }

  /**
   * Calls all the listeners asynchronously
   *
   * @returns { Promise<object> } The state
   */
  async dispatchAll(
    listeners: ControlledListener[],
    options: ControlledEventOptions
  ): Promise<object> {
    await Promise.all(
      listeners.map(async (listener: ControlledListener) => {
        return await this.dispatch(listener, options);
      })
    );

    return this.state;
  }
}

export default Dispatcher;
