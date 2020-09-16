function _Component(options) {
    if (!options.externalClasses) {
        options.externalClasses = []
    }
    options.externalClasses.unshift('ui-class');
    if (!options.behaviors) {
        options.behaviors = [];
    }
    options.behaviors.unshift();
    options.options = {
        styleIsolation: 'isolated',
        multipleSlots: true,
        pureDataPattern: /^\$_/,
        ...options.options
    }
    Component(options);
}

exports._Component = _Component;