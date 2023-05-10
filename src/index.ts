import { AppDataSource } from './data-source';
import { User } from './entity/User';

AppDataSource.initialize()
  .then(async () => {
    const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    await AppDataSource.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);
    const users = await AppDataSource.manager.find(User);
    console.log('Loaded users: ', users);
  })
  .catch(error => console.log(error));
