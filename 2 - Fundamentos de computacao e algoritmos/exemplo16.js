function logMapElements(value, key, map) {
    console.log(`map.get('${key}') = ${value}`);
  }
  new Map([
    ["foo", 3],
    ["bar", {}],
    ["baz", undefined],
  ]).forEach(logMapElements);
  
  // Logs:
  // "map.get('foo') = 3"
  // "map.get('bar') = [object Object]"
  // "map.get('baz') = undefined"