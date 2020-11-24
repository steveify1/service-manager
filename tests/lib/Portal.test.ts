import { expect } from 'chai';
import sinon from 'sinon';
import Channel from '../../src/lib/types/Channel';
import IPortal from '../../src/lib/interfaces/IPortal';
import Service from '../../src/lib/Service';
import Portal from '../../src/lib/Portal';

const services = {
  userService: new Service(),
  paymentService: new Service(),
};

describe('Portal', () => {
  let portal: Portal;

  before(() => {
    portal = new Portal(services);
  });

  describe('When the exposeChannel method is called', () => {
    it('should return a portal channel', () => {
      expect(typeof portal!.exposeChannel(services.userService)).to.equal('object');
    });

    it('should call the excludeService() method', () => {
      const excludeServiceMock = sinon.stub(portal!, 'excludeService');
      const { userService } = services;
      const modifiedChannel = portal!.exposeChannel(userService);

      expect(excludeServiceMock.calledOnceWith(userService)).is.true;
    });
  });

  describe('When the excludeService method is called', () => {
    it('should return a modified channel that has no access to the service that was passed  to the excludeService as an argument', () => {
      const services = {
        postService: new Service(),
        collectionService: new Service(),
      };

      const portal = new Portal(services);

      const { postService } = services;
      const modifiedChannel = portal!.excludeService(postService);
      const { value } = Object.getOwnPropertyDescriptor(modifiedChannel, 'postService')!;

      expect(value).to.be.undefined;
    });
  });
});
