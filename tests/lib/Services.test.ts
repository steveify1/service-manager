import { expect } from 'chai';
import Service from '../../src/lib/Service';
import IPortal from '../../src/lib/interfaces/IPortal';
import IEventManager from '../../src/lib/interfaces/IEventManager';
import EventManager from '../../src/lib/EventManager';
import Channel from '../../src/lib/types/Channel';

const portal: IPortal = {
  channel: {},
  exposeChannel(service: Service) {
    return this.channel;
  },
};

const eventManager: EventManager = new EventManager();

class TestService extends Service {
  getEventManager(): EventManager | undefined {
    return this.eventManager;
  }

  getChannel(): object | undefined {
    return this.channel;
  }
}

describe('Base Service class', () => {
  let testService: TestService | undefined;

  before(() => {
    testService = new TestService();
  });

  // describe('When the event manager is set, the `eventManager` property', () => {
  //   it('should be an object with an emit method', () => {
  //     testService = testService as TestService;
  //     testService.setEventManager(eventManager);

  //     expect(testService!.getEventManager()!.emit).is.a('function');
  //   });
  // });

  describe('When the service is connected, the `channel` property', () => {
    it('should be defined', () => {
      testService = testService as TestService;
      const channel: Channel = portal.exposeChannel(testService);
      testService.connect(channel);

      expect(testService!.getChannel()).is.not.undefined;
    });
  });
});
