"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _indexModule = _interopRequireDefault(require("../index.module.scss"));

var _reactImage = _interopRequireDefault(require("react-image"));

var _logo = _interopRequireDefault(require("@liberaldemocrats/logo"));

var _triangles = _interopRequireDefault(require("@liberaldemocrats/triangles"));

var _section = _interopRequireDefault(require("@liberaldemocrats/section"));

var _card = _interopRequireDefault(require("@liberaldemocrats/card"));

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

var hero = _react["default"].createElement(_reactImage["default"], {
  src: "http://www.bolton-libdems.org.uk/userfiles/media/139.59.166.45/1904161159475cb5c3b343bcfbolton.jpeg"
});

var Demo =
/*#__PURE__*/
function (_Component) {
  _inherits(Demo, _Component);

  function Demo() {
    _classCallCheck(this, Demo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Demo).apply(this, arguments));
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: _indexModule["default"].logo
      }, _react["default"].createElement(_logo["default"], {
        strap: "Bolton"
      })), _react["default"].createElement(_triangles["default"], {
        background: hero,
        bottom: _react["default"].createElement(_logo["default"], {
          strap: "DEMAND BETTER"
        })
      }), _react["default"].createElement(_section["default"], {
        title: "Demand Better For Britain"
      }, _react["default"].createElement("div", {
        className: _indexModule["default"].manifesto
      }, _react["default"].createElement("div", {
        className: _indexModule["default"].item
      }, _react["default"].createElement(_card["default"], {
        img: _react["default"].createElement(_reactImage["default"], {
          src: "https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13372/attachments/original/1495011869/card_reform.jpg?1495011869"
        }),
        onClick: function onClick() {
          alert('clicked');
        },
        hovertext: "Fix Our Broken System",
        linktext: "CONSTITUTIONAL & POLITICAL REFORM"
      })), _react["default"].createElement("div", {
        className: _indexModule["default"].item
      }, _react["default"].createElement(_card["default"], {
        img: _react["default"].createElement(_reactImage["default"], {
          src: "https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13370/attachments/original/1495012048/card_world.jpg?1495012048"
        }),
        onClick: function onClick() {
          alert('clicked');
        },
        hovertext: "Fight for a better world",
        linktext: "International Affairs"
      })), _react["default"].createElement("div", {
        className: _indexModule["default"].item
      }, _react["default"].createElement(_card["default"], {
        img: _react["default"].createElement(_reactImage["default"], {
          src: "https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349"
        }),
        onClick: function onClick() {
          alert('clicked');
        },
        hovertext: "Fix Our Broken System",
        linktext: "CONSTITUTIONAL & POLITICAL REFORM"
      })), _react["default"].createElement("div", {
        className: _indexModule["default"].item
      }, _react["default"].createElement(_card["default"], {
        img: _react["default"].createElement(_reactImage["default"], {
          src: "https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349"
        }),
        onClick: function onClick() {
          alert('clicked');
        },
        hovertext: "Fix Our Broken System",
        linktext: "CONSTITUTIONAL & POLITICAL REFORM"
      })), _react["default"].createElement("div", {
        className: _indexModule["default"].item
      }, _react["default"].createElement(_card["default"], {
        img: _react["default"].createElement(_reactImage["default"], {
          src: "https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349"
        }),
        onClick: function onClick() {
          alert('clicked');
        },
        hovertext: "Fix Our Broken System",
        linktext: "CONSTITUTIONAL & POLITICAL REFORM"
      })), _react["default"].createElement("div", {
        className: _indexModule["default"].item
      }, _react["default"].createElement(_card["default"], {
        img: _react["default"].createElement(_reactImage["default"], {
          src: "https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349"
        }),
        onClick: function onClick() {
          alert('clicked');
        },
        hovertext: "Fix Our Broken System",
        linktext: "CONSTITUTIONAL & POLITICAL REFORM"
      })), _react["default"].createElement("div", {
        className: _indexModule["default"].item
      }, _react["default"].createElement(_card["default"], {
        img: _react["default"].createElement(_reactImage["default"], {
          src: "https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349"
        }),
        onClick: function onClick() {
          alert('clicked');
        },
        hovertext: "Fix Our Broken System",
        linktext: "CONSTITUTIONAL & POLITICAL REFORM"
      })), _react["default"].createElement("div", {
        className: _indexModule["default"].item
      }, _react["default"].createElement(_card["default"], {
        img: _react["default"].createElement(_reactImage["default"], {
          src: "https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349"
        }),
        onClick: function onClick() {
          alert('clicked');
        },
        hovertext: "Fix Our Broken System",
        linktext: "CONSTITUTIONAL & POLITICAL REFORM"
      })), _react["default"].createElement("div", {
        className: _indexModule["default"].item
      }, _react["default"].createElement(_card["default"], {
        img: _react["default"].createElement(_reactImage["default"], {
          src: "https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349"
        }),
        onClick: function onClick() {
          alert('clicked');
        },
        hovertext: "Fix Our Broken System",
        linktext: "CONSTITUTIONAL & POLITICAL REFORM"
      })), _react["default"].createElement("div", {
        className: _indexModule["default"].item
      }, _react["default"].createElement(_card["default"], {
        img: _react["default"].createElement(_reactImage["default"], {
          src: "https://d3n8a8pro7vhmx.cloudfront.net/libdems/pages/13367/attachments/original/1495014349/card_families.jpg?1495014349"
        }),
        onClick: function onClick() {
          alert('clicked');
        },
        hovertext: "Fix Our Broken System",
        linktext: "CONSTITUTIONAL & POLITICAL REFORM"
      })))));
    }
  }]);

  return Demo;
}(_react.Component);

var _default = Demo;
exports["default"] = _default;