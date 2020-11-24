import ControlledEventOptions from './types/ControlledEventOptions';
import ControlledListener from './types/ControlledListener';
declare class Dispatcher {
    private state;
    constructor();
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
    updateState(key: string, value?: object): void;
    /**
     * Calls a single listener
     * @param { ControlledListener }
     */
    dispatch(listener: ControlledListener, options: ControlledEventOptions): Promise<void>;
    /**
     * Calls all the listeners asynchronously
     *
     * @returns { Promise<object> } The state
     */
    dispatchAll(listeners: ControlledListener[], options: ControlledEventOptions): Promise<object>;
}
export default Dispatcher;
