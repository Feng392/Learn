"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
// import axios from 'axios';
const req_1 = __importDefault(require("@/utils/req"));
function login(data) {
    return req_1.default.post('/frame/login', data);
}
exports.login = login;
