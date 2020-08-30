import IPortal from './IPortal';
import IEventManager from './IEventManager';
import IService from './IService';

export default interface IServiceManager {
  readonly services: object;
  readonly portal: IPortal;
  readonly eventManager: IEventManager;
  providePortalChannel(service: IService): void;
  provideEventManager(service: IService): void;
}
