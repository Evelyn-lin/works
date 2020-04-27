"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  getDuration: function getDuration(time) {
    var m = parseInt(time / 60);
    m = m < 10 ? '0' + m : m;
    var s = time % 60;
    s = s < 10 ? '0' + s : s;
    return m + ':' + s;
  }
};
exports["default"] = _default;