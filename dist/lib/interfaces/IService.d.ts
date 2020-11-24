import IEventManager from './IEventManager';
import ControlledListener from '../types/ControlledListener';
import ControlledEventOptions from '../types/ControlledEventOptions';
export default interface IService {
    eventManager: IEventManager | undefined;
    channel: object | undefined;
    connect(channel: object): void;
    on(event: string, handler: ControlledListener): void;
    emit(event: string, ...args: any[]): boolean;
    cEmit(event: string, options: ControlledEventOptions): object;
}
