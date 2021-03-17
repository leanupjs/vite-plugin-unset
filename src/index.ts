import type { UserConfig, Plugin } from "vite";

function unsetConfigOption(config: UserConfig, unsets: UserConfig) {
  if (
    typeof config === "object" &&
    config !== null &&
    typeof unsets === "object" &&
    unsets !== null
  ) {
    for (const key in unsets) {
      if (config.hasOwnProperty(key) && unsets.hasOwnProperty(key)) {
        if (typeof unsets[key] === "object" && unsets[key] !== null) {
          unsetConfigOption(config[key], unsets[key]);
        } else {
          delete config[key];
        }
      }
    }
  }
  return config;
}

export function unsetConfigPlugin(unsets: UserConfig): Plugin {
  return {
    name: "mutate-config",
    config(config: UserConfig) {
      return unsetConfigOption(config, unsets);
    },
  };
}
