"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _indexModule = _interopRequireDefault(require("../index.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Triangles =
/*#__PURE__*/
function (_Component) {
  _inherits(Triangles, _Component);

  function Triangles() {
    _classCallCheck(this, Triangles);

    return _possibleConstructorReturn(this, _getPrototypeOf(Triangles).apply(this, arguments));
  }

  _createClass(Triangles, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: _indexModule["default"].container
      }, _react["default"].createElement("div", {
        className: _indexModule["default"].background
      }, this.props.background), _react["default"].createElement("svg", {
        className: _indexModule["default"].Triangles,
        viewBox: "0 0 285 330",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react["default"].createElement("path", {
        className: _indexModule["default"].triangleUp,
        d: "M126.809 77.5L253.5 329.5H0L126.809 77.5Z",
        fill: "#FAA61A"
      }), _react["default"].createElement("path", {
        className: _indexModule["default"].triangleDown,
        d: "M155.098 133L86.5 -0.499975L222 -0.499992L155.098 133Z",
        fill: "#151721"
      }), _react["default"].createElement("path", {
        className: _indexModule["default"].bar,
        d: "M114.5 -1H86L253.5 329H285L114.5 -1Z",
        fill: "#FAA61A",
        "fill-opacity": "0.32"
      })), _react["default"].createElement("div", {
        className: _indexModule["default"].bottomContent
      }, this.props.bottom));
    }
  }]);

  return Triangles;
}(_react.Component);

var _default = Triangles;
exports["default"] = _default;