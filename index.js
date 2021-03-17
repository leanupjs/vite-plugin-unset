(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unsetConfigPlugin = void 0;
    function unsetConfigOption(config, unsets) {
        if (typeof config === "object" &&
            config !== null &&
            typeof unsets === "object" &&
            unsets !== null) {
            for (var key in unsets) {
                if (config.hasOwnProperty(key) && unsets.hasOwnProperty(key)) {
                    if (typeof unsets[key] === "object" && unsets[key] !== null) {
                        unsetConfigOption(config[key], unsets[key]);
                    }
                    else {
                        delete config[key];
                    }
                }
            }
        }
        return config;
    }
    function unsetConfigPlugin(unsets) {
        return {
            name: "mutate-config",
            config: function (config) {
                return unsetConfigOption(config, unsets);
            },
        };
    }
    exports.unsetConfigPlugin = unsetConfigPlugin;
});
//# sourceMappingURL=index.js.map