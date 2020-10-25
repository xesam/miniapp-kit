const runtime = require("@xesam/miniapp");

const storage = {
    get(key, defaultValue) {
    },
    getSync(key, defaultValue) {
        const ds = runtime.host.getStorageSync(key);
        if (!ds) {
            return defaultValue;
        }
        const data = JSON.parse(ds);
        return data.data || defaultValue;
    },
    set(key, defaultValue) {
    },
    setSync(key, value) {
        const data = {
            data: value
        };
        runtime.host.setStorageSync(key, JSON.stringify(data));
        return this;
    },
    remove(key) {
    },
    removeSync(key) {
        runtime.host.removeStorageSync(key);
        return this;
    },
    clear() {
    },
    clearSync() {
        runtime.host.clearStorageSync();
        return this;
    }
};

export default storage;
