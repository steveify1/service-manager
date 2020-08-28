import { expect } from 'chai';
import Service from '../../src/lib/Service';
import IPortal from '../../src/lib/interfaces/IPortal';
import IEventManager from '../../src/lib/interfaces/IEventManager';

const portal: IPortal = { services: {} };
const eventManager: IEventManager = { emit: () => null };

class TestService extends Service {
  getEventManager(): IEventManager | undefined {
    return this.eventManager;
  }

  getPortal(): IPortal | undefined {
    return this.portal;
  }
}

describe('Base Service class', () => {
  let testService: TestService | undefined;

  before(() => {
    testService = new TestService();
  });

  describe('When the event manager is set, the `eventManager` property', () => {
    it('should be an object with an emit method', () => {
      testService = testService as TestService;
      testService.setEventManager(eventManager);

      expect(testService!.getEventManager()!.emit).is.a('function');
    });
  });

  describe('When the service is connected, the `portal` property', () => {
    it('should be be defined', () => {
      testService = testService as TestService;
      testService.connect(portal);

      expect(testService!.getPortal()!.services).is.not.undefined;
    });
  });
});
