import IEventManager from './IEventManager';
import IPortal from './IPortal';

export default interface IService {
  eventManager: IEventManager | undefined;
  portal: IPortal | undefined;
  connect(portal: IPortal): void;
  setEventManager(eventManager: IEventManager): void;
}
