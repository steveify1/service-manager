import Service from '../lib/Service';
declare class WalletService extends Service {
    constructor();
    setListeners(): void;
    createWallet(type: string, userId: number): any;
    createPersonalWallet(data: object): any;
}
export default WalletService;
