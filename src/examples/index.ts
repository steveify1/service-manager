import ServiceManager from '../lib/ServiceManager';
import UserService from './UserService';
import ProfileService from './ProfileService';
import WalletService from './WalletService';

const registry = {
  userService: new UserService(),
  profileService: new ProfileService(),
  walletService: new WalletService(),
};

registry.userService.createUser();

const serviceManager = new ServiceManager(registry);
const services = serviceManager.setup();

export default services;
