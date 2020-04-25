"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchSong = searchSong;
exports.type = void 0;
var type = {
  SEARCH_SONG: 'SEARCH_SONG'
};
exports.type = type;

function searchSong(value) {
  return {
    type: type.SEARCH_SONG,
    value: value
  };
}