"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchSong = searchSong;
exports.playSong = playSong;
exports.type = void 0;
var type = {
  SEARCH_SONG: 'SEARCH_SONG',
  PLAY: 'PLAY',
  PLAY_Pause: 'PLAY_Pause'
};
exports.type = type;

function searchSong(value) {
  return {
    type: type.SEARCH_SONG,
    value: value
  };
}

function playSong(value) {
  return {
    type: type.PLAY,
    value: value
  };
}