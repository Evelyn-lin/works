"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _redux=require("redux"),_reducer=_interopRequireDefault(require("./reducer"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var initialState={menuName:""},store=function(){return(0,_redux.createStore)(_reducer.default,initialState)},_default=store;exports.default=_default;