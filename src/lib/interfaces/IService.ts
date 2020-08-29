import IEventManager from './IEventManager';

export default interface IService {
  eventManager: IEventManager | undefined;
  channel: object | undefined;
  connect(channel: object): void;
  setEventManager(eventManager: IEventManager): void;
}
