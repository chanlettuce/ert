import { object } from "prop-types";

export const methods = {
  objectSort: (obj: object) => {
    if (Array.isArray(obj)) {
      return obj.sort();
    }

    let keys = [];
    for (const key in obj) {
      if (typeof obj[key] == "object") {
        obj[key] = methods.objectSort(obj[key]);
      }
      keys.push(key);
    }
    keys.sort();

    let output = {};
    keys.forEach(key => {
      output[key] = obj[key];
    });

    return output;
  }
};
