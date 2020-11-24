import ControlledEventOptions from './ControlledEventOptions';

type ControlledListener = (
  options?: ControlledEventOptions,
  done?: Function
) => Promise<any> | void;

export default ControlledListener;
