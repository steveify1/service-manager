import ControlledEventOptions from './ControlledEventOptions';
declare type ControlledListener = (options?: ControlledEventOptions, done?: Function) => Promise<any> | void;
export default ControlledListener;
