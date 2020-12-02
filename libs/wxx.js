const miniapp = require("miniapp-compat");

const supportPromise = !!wx.getSystemInfo();

function promisify(fn_name) {
    const miniapp_fn = miniapp.host[fn_name];
    return function _promisify(options) {
        if (supportPromise) {
            return miniapp_fn.call(miniapp.host, options);
        } else {
            if (options && (options.success || options.fail || options.complete)) {
                return miniapp_fn.call(miniapp.host, options);
            } else {
                return new Promise((resolve, reject) => {
                    miniapp_fn.call(miniapp.host, {
                        ...options,
                        success: res => {
                            resolve(res);
                        },
                        fail: (e) => {
                            reject(e);
                        }
                    });
                });
            }
        }
    }
}

export default function wxx(fn_name) {
    if (!wxx[fn_name]) {
        wxx[fn_name] = promisify(fn_name);
    }
    return wxx[fn_name];
}

export {
    promisify
}