import Service from '../lib/Service';
import ControlledEventOptions from '../lib/types/ControlledEventOptions';

class WalletService extends Service {
  constructor() {
    super();
  }

  setListeners() {
    this.on('new::user', async (options, done) => {
      options = options as ControlledEventOptions;
      const res = this.createPersonalWallet(options.payload as object);
      done!({ wallet: res });
      return { wallet: res };
    });
  }

  createWallet(type: string, userId: number): any {
    console.log(`Creating a ${type} wallet for user with ID ${userId}`);
    // throw new Error('Wallet no gree create o, but we go try our best to solve the wahala');
    return { id: 3, balance: '0.0', user_id: userId }
  }

  createPersonalWallet(data: object) {
    const { id } = data as { id: number };
    return this.createWallet('personal', id);
  }
}

export default WalletService;
