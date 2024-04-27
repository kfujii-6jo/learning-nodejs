// import _ from "lodash"; // パスの指定がない場合はnode_modules配下のフォルダ名を参照する

import cloneDeep from "lodash/cloneDeep.js";

const original = { prop: { nested: "value" } };

// オブジェクトの複製
// const cloned = _.cloneDeep(original);
const cloned = cloneDeep(original);

cloned.prop.nested = "new value";

console.log(original, cloned);
// npm main.mjs
// { prop: { nested: 'value' } } { prop: { nested: 'new value' } }
