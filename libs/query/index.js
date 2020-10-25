function getScene(query) {
    if (query.scene) {
        const sceneStr = decodeURIComponent(query.scene);
        return url.fromQueryString(sceneStr);
    }
    return {};
}

function getQrCode(query) {
    if (query.q) {
        const raw = decodeURIComponent(query.q);
        const rawUrlQs = url.getQuery(query.q, true);
        return url.fromQueryString(rawUrlQs);
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