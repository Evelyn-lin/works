"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _action=require("./action");function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var song=function(e,t){switch(t.type){case _action.type.SEARCH_SONG:return _objectSpread({},e,{query:t.value});case _action.type.PLAY:return _objectSpread({},e,{},t.value);default:return _objectSpread({},e)}},_default=song;exports.default=_default;