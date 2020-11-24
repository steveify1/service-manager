import Service from '../lib/Service';
declare class UserService extends Service {
    constructor();
    createUser(): Promise<void>;
}
export default UserService;
