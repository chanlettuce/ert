export const methods = {
  objectSort: (obj: any): object => {
    if (Array.isArray(obj)) {
      return obj.sort();
    }

    let keys: string[] = [];
    for (const key in obj) {
      if (typeof obj[key] == "object") {
        obj[key] = methods.objectSort(obj[key]);
      }
      keys.push(key);
    }
    keys.sort();

    let output: any = {};
    keys.forEach(key => {
      output[key] = obj[key];
    });

    return output;
  }
};
