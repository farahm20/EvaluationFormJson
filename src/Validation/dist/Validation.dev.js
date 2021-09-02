"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var validationSchema = Yup.object({
  FirstName: Yup.string().max(15, "Must be 15 characters or less").test('length', 'First Name must have more than 1 character', function (value) {
    return value && value.length > 2;
  }).matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Required"),
  LastName: Yup.string().max(15, "Must be 15 characters or less").test('length', 'First Name must have more than 1 character', function (value) {
    return value && value.length > 2;
  }).matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Required"),
  TherapistName: Yup.string().max(15, "Must be 15 characters or less").test('length', 'First Name must have more than 1 character', function (value) {
    return value && value.length > 2;
  }).matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Required"),
  SatisfiedByTherapist: Yup.array().test('length', 'Your should select at least one option.', function (value) {
    console.log(value.length);
    return value && value.length === 1;
  }).required("Required"),
  check: Yup["boolean"]().oneOf([true], 'Please check the agreement'),
  OverallExperience: Yup.string().max(100, "Must be 100 characters or less.").test('length', 'Your answer must have more than 10 characters', function (value) {
    return value && value.length > 10;
  }).required("Required")
});
var _default = validationSchema;
exports["default"] = _default;