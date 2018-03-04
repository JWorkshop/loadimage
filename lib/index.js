"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var load = function load(url) {
  return new Promise(function (resolve) {
    var image = new Image();
    image.onload = function () {
      return resolve(image);
    };
    image.onerror = function () {
      return resolve(null);
    };

    image.src = url;
  });
};

var loadImage = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(imageURLs) {
    var images, i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof imageURLs === "string")) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return load(imageURLs);

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            if (!Array.isArray(imageURLs)) {
              _context.next = 17;
              break;
            }

            images = [];
            i = 0;

          case 9:
            if (!(i < imageURLs.length)) {
              _context.next = 16;
              break;
            }

            _context.next = 12;
            return load(imageURLs[i]);

          case 12:
            images[i] = _context.sent;

          case 13:
            i++;
            _context.next = 9;
            break;

          case 16:
            return _context.abrupt("return", images);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function loadImage(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = loadImage;