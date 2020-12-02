import {location, storage} from '../../libs/index';
import appUser from './AppUser';

Page({
    data: {},
    onLoad(query) {

    },

    onTapGetLocation(e) {
        location.authorize().then(res => {
            return loc.get().then(location => {
                console.log(location);
            }).catch(err => {
                console.error(err);
            });
        }).catch(e => {
            console.error('authorize', e, '应该提示用户打开设置面板去开启位置权限');
        });
    },

    onTapGetUser(e) {
        appUser.get().then(user => {
            console.log('user=', user);
        });
    },

    onTapStorage(e) {
        storage.setSync('storage/key_1', 'value_1');
        console.log(storage.getSync('storage/key_1'));
        console.log(storage.getAllSync());
        console.log(storage.getAllSync(true));
    }
});
