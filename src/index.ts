import Portal from './lib/Portal';
import Service from './lib/Service';

const services = {
  userService: new Service(),
  paymentService: new Service(),
};

const p = new Portal(services);

const { userService } = services;

userService.connect(p.exposeChannel(userService));

console.log(userService.channel);

export default (
  value: number | string | boolean
): number | string | boolean => {
  return value;
};
