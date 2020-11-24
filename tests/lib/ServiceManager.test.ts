import { expect } from 'chai';
import { stub, spy } from 'sinon';
import IServiceManager from '../../src/lib/interfaces/IServiceManager';
import ServiceManager from '../../src/lib/ServiceManager';
import Service from '../../src/lib/Service';
import Portal from '../../src/lib/Portal';

const registry = {
  userService: new Service(),
  postService: new Service(),
};

describe('ServiceManager', () => {
  let serviceManager: ServiceManager | undefined;
  before(() => {
    serviceManager = new ServiceManager(registry);
  });

  describe('Once instantiated', () => {
    it('should set the `services` and `portal` properties of the ServiceManager', () => {
      expect(serviceManager!.services).is.not.undefined;
      expect(serviceManager!.portal).is.not.undefined;
      expect(serviceManager!.portal instanceof Portal).to.be.true;
    });
  });

  describe('When the `setup` method is called', () => {
    const registry = {
      userService: new Service(),
      paymentService: new Service(),
      alertService: new Service(),
    };

    let serviceManager: ServiceManager | undefined;

    before(() => {
      serviceManager = new ServiceManager(registry);
    });

    it('should loop through the `service` object and obtain the value of each key (service name)', () => {
      const serviceManager: ServiceManager = new ServiceManager(registry);
      const getOwnPropertyDescriptorSpy = spy(
        Object,
        'getOwnPropertyDescriptor'
      );

      serviceManager!.setup();
      expect(getOwnPropertyDescriptorSpy.called).to.be.true;
    });

    it('should call the `providePortalChannel` method as many times as the number of services in the registry', () => {
      const providePortalChannelStub = stub(
        serviceManager!,
        'providePortalChannel'
      );

      serviceManager!.setup();
      expect(providePortalChannelStub.called).to.be.true;
      expect(providePortalChannelStub.callCount).to.equal(3);
    });

    // it('should call the `provideEventManager` method as many times as the number of services in the registry', () => {
    //   const provideEventManagerStub = stub(
    //     serviceManager!,
    //     'provideEventManager'
    //   );
    //   serviceManager!.setup();
    //   expect(provideEventManagerStub.called).to.be.true;
    //   expect(provideEventManagerStub.callCount).to.equal(3);
    // });

    it('should return the service property on the ServiceManager', () => {
      expect(serviceManager!.setup()).to.equal(serviceManager!.services);
    });
  });

  describe('When the `providePortalChannel` method is called', () => {
    it('should call the `connect` method on its @param `service` and expose the portal channel to it', () => {
      const { userService } = registry;
      const connectStub = stub(userService, 'connect');
      const exposeChannelStub = stub(serviceManager!.portal, 'exposeChannel');

      serviceManager!.providePortalChannel(userService);

      expect(connectStub.calledOnce).to.be.true;
      expect(exposeChannelStub.calledOnce).to.be.true;
      expect(exposeChannelStub.calledOnceWith(userService)).to.be.true;
    });
  });

  // describe('When the `provideEventManager` method is called', () => {
  //   it('should call the `setEventManager` method on its @param `service` and pass an event manager object to it', () => {
  //     const { userService } = registry;
  //     const setEventManagerStub = stub(userService, 'setEventManager');

  //     serviceManager!.provideEventManager(userService);

  //     expect(setEventManagerStub.calledOnce).to.be.true;
  //     expect(setEventManagerStub.calledOnceWith(serviceManager!.eventManager))
  //       .to.be.true;
  //   });
  // });
});
