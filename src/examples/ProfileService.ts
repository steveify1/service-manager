import Service from '../lib/Service';
import ControlledEventOptions from '../lib/types/ControlledEventOptions';


class ProfileService extends Service {
  constructor() {
    super();
  }

  setListeners() {
    this.on('new::user', async (options) => {
      options = options as ControlledEventOptions;
      console.log('Creating a user profile', options.payload);
      // throw new Error('Profile creation no dey work');
      return { profile: 'Your profile has been created' }
    });
  }
}

export default ProfileService;
