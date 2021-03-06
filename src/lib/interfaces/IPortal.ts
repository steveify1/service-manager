import IService from './IService';

export default interface IPortal {
  /**
   * An object containing a set of services
   * @property
   */
  channel: object;

  exposeChannel(service: IService): object;
}
