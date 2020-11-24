import Service from '../lib/Service';

class UserService extends Service {
  constructor() {
    super();
  }

  async createUser() {
    try {
      const result = await this.cEmit('new::user', {
        payload: {
          id: 1,
          first_name:'Stephen',
          last_name:'Nwakasi',
          email: 'nwakasistephen@gmail.com',
          phone_number: '07038202504',
  
        }
      });
  
      console.log('Result here::: ', result);
    } catch (error) {
      console.log('Logging error which says:: ', error);
    }
  }
}

export default UserService;
