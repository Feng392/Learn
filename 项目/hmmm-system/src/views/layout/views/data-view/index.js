"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// 导入mobx
const mobx_react_1 = require("mobx-react");
function Page1(props) {
    return (react_1.default.createElement("div", null,
        "\u9875\u97621",
        react_1.default.createElement("div", null, props.store.counter)));
}
exports.default = (0, mobx_react_1.observer)(Page1);
