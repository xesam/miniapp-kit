function getScene(query) {
    if (query.scene) {
        const sceneStr = decodeURIComponent(query.scene);
    }
    return {};
}

function getQrCode(query) {
    if (query.q) {
        const raw = decodeURIComponent(query.q);
    }
    return {};
}

function parseQuery(query) {
    return {
        ...query,
        ...getScene(query),
        ...getQrCode(query)
    };
}

exports.query = parseQuery;