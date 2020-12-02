import {User} from '../../index';

class AppUser extends User {
    constructor() {
        super('app/user');
    }

    getOpenId(data) {
        return Promise.resolve({
            age: 18,
            name: 'xesam'
        });
    }
}

export default new AppUser();