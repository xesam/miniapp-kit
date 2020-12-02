import wxx from '../wxx';
import storage from "../storage/index";

export default class User {
    constructor(cacheKey) {
        this._cacheKey = cacheKey;
    }

    _login() {
        return wxx('login')({
            timeout: 30000
        }).then(this.getOpenId)
            .then(data => {
                storage.setSync(this._cacheKey, data);
                return this.getSync();
            });
    }

    getOpenId(data) {
        console.warn('no implement');
    }

    get() {
        return wxx('checkSession')()
            .then(checkSession => {
                const sessionValid = checkSession.errMsg.indexOf('checkSession:ok') !== -1;
                const cached = this.getSync();
                if (sessionValid && cached) {
                    return cached;
                } else {
                    return Promise.reject({
                        msg: 'session fail'
                    });
                }
            }).catch(e => {
                return this._login();
            })
    }

    getSync() {
        return storage.getSync(this._cacheKey);
    }
}