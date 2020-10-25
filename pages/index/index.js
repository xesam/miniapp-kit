import loc from '../../libs/location/index';

Page({
    data: {},
    onLoad(query) {

    },

    onTapGetLocation(e) {
        loc.getLocation().then(location => {
            console.log(location);
        }).catch(err => {
            console.error(err);
        });
    }
});
