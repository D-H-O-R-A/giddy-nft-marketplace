(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.eVESTXAPI = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var storage = {
        remapAsset: function (data) { return data; }
    };
    var config;
    (function (config) {
        function get(key) {
            return storage[key];
        }
        config.get = get;
        function set(key, value) {
            if (typeof key === 'string') {
                storage[key] = value;
            }
            else {
                Object.keys(key).forEach(function (configKey) { return set(configKey, key[configKey]); });
            }
        }
        config.set = set;
    })(config = exports.config || (exports.config = {}));
    
    },{}],2:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bignumber_1 = require("../libs/bignumber");
    var config_1 = require("../config");
    var Asset = /** @class */ (function () {
        function Asset(assetObject) {
            assetObject = config_1.config.get('remapAsset')(assetObject);
            this.quantity =
                assetObject.quantity instanceof bignumber_1.BigNumber
                    ? assetObject.quantity
                    : new bignumber_1.BigNumber(assetObject.quantity);
            this.ticker = assetObject.ticker || null;
            this.id = assetObject.id;
            this.name = assetObject.name;
            this.precision = assetObject.precision;
            this.description = assetObject.description;
            this.height = assetObject.height;
            this.timestamp = assetObject.timestamp;
            this.sender = assetObject.sender;
            this.reissuable = assetObject.reissuable;
            this.displayName = assetObject.ticker || assetObject.name;
        }
        Asset.prototype.toJSON = function () {
            return {
                ticker: this.ticker,
                id: this.id,
                name: this.name,
                precision: this.precision,
                description: this.description,
                height: this.height,
                timestamp: this.timestamp,
                sender: this.sender,
                quantity: this.quantity,
                reissuable: this.reissuable,
            };
        };
        Asset.prototype.toString = function () {
            return this.id;
        };
        Asset.isAsset = function (object) {
            return object instanceof Asset;
        };
        return Asset;
    }());
    exports.Asset = Asset;
    
    },{"../config":1,"../libs/bignumber":7}],3:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AssetPair = /** @class */ (function () {
        function AssetPair(amountAsset, priceAsset) {
            this.amountAsset = amountAsset;
            this.priceAsset = priceAsset;
            this.precisionDifference =
                this.priceAsset.precision - this.amountAsset.precision;
        }
        AssetPair.prototype.toJSON = function () {
            return {
                amountAsset: this.amountAsset.id,
                priceAsset: this.priceAsset.id,
            };
        };
        AssetPair.prototype.toString = function () {
            return this.amountAsset + "/" + this.priceAsset;
        };
        AssetPair.isAssetPair = function (object) {
            return object instanceof AssetPair;
        };
        return AssetPair;
    }());
    exports.AssetPair = AssetPair;
    
    },{}],4:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bignumber_1 = require("../libs/bignumber");
    var utils_1 = require("../utils");
    var Money = /** @class */ (function () {
        // @todo refactor to accept full 'tokens' instead of 'coins'
        // to hide precision arithmetic implementation
        function Money(coins, asset) {
            var divider = Money._getDivider(asset.precision);
            this.asset = asset;
            this._coins = utils_1.toBigNumber(coins).dp(0);
            this._tokens = this._coins.div(divider);
        }
        Money.prototype.getCoins = function () {
            return this._coins.plus(0);
        };
        Money.prototype.getTokens = function () {
            return this._tokens.plus(0);
        };
        Money.prototype.toCoins = function () {
            return this._coins.toFixed(0);
        };
        Money.prototype.toTokens = function () {
            return this._tokens.toFixed(this.asset.precision);
        };
        Money.prototype.toFormat = function (precision) {
            return this._tokens.toFormat(precision);
        };
        Money.prototype.add = function (money) {
            this._matchAssets(money);
            var inputCoins = money.getCoins();
            var result = this._coins.plus(inputCoins);
            return new Money(result, this.asset);
        };
        Money.prototype.plus = function (money) {
            return this.add(money);
        };
        Money.prototype.sub = function (money) {
            this._matchAssets(money);
            var inputCoins = money.getCoins();
            var result = this._coins.minus(inputCoins);
            return new Money(result, this.asset);
        };
        Money.prototype.minus = function (money) {
            return this.sub(money);
        };
        Money.prototype.times = function (money) {
            this._matchAssets(money);
            return new Money(this.getTokens().times(money.getTokens()), this.asset);
        };
        Money.prototype.div = function (money) {
            this._matchAssets(money);
            return new Money(this.getTokens().div(money.getTokens()), this.asset);
        };
        Money.prototype.eq = function (money) {
            this._matchAssets(money);
            return this._coins.eq(money.getCoins());
        };
        Money.prototype.lt = function (money) {
            this._matchAssets(money);
            return this._coins.lt(money.getCoins());
        };
        Money.prototype.lte = function (money) {
            this._matchAssets(money);
            return this._coins.lte(money.getCoins());
        };
        Money.prototype.gt = function (money) {
            this._matchAssets(money);
            return this._coins.gt(money.getCoins());
        };
        Money.prototype.gte = function (money) {
            this._matchAssets(money);
            return this._coins.gte(money.getCoins());
        };
        Money.prototype.safeSub = function (money) {
            if (this.asset.id === money.asset.id) {
                return this.sub(money);
            }
            return this;
        };
        Money.prototype.toNonNegative = function () {
            if (this.getTokens().lt(0)) {
                return this.cloneWithTokens(0);
            }
            return this;
        };
        // @todo coins refactor
        Money.prototype.cloneWithCoins = function (coins) {
            return new Money(new bignumber_1.BigNumber(coins), this.asset);
        };
        Money.prototype.cloneWithTokens = function (tokens) {
            var coins = Money._tokensToCoins(tokens, this.asset.precision);
            return new Money(coins, this.asset);
        };
        Money.prototype.convertTo = function (asset, exchangeRate) {
            return Money.convert(this, asset, utils_1.toBigNumber(exchangeRate));
        };
        Money.prototype.toJSON = function () {
            return {
                assetId: this.asset.id,
                tokens: this.toTokens(),
            };
        };
        Money.prototype.toString = function () {
            return this.toTokens() + " " + this.asset.id;
        };
        Money.prototype._matchAssets = function (money) {
            if (this.asset.id !== money.asset.id) {
                throw new Error('You cannot apply arithmetic operations to Money created with different assets');
            }
        };
        Money.max = function () {
            var moneyList = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                moneyList[_i] = arguments[_i];
            }
            return moneyList.reduce(function (max, money) { return max.gte(money) ? max : money; });
        };
        Money.min = function () {
            var moneyList = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                moneyList[_i] = arguments[_i];
            }
            return moneyList.reduce(function (min, money) { return min.lte(money) ? min : money; });
        };
        Money.isMoney = function (object) {
            return object instanceof Money;
        };
        Money.convert = function (money, asset, exchangeRate) {
            if (money.asset === asset) {
                return money;
            }
            else {
                var difference = money.asset.precision - asset.precision;
                var divider = new bignumber_1.BigNumber(10).pow(difference);
                var coins = money.getCoins();
                var result = coins
                    .multipliedBy(exchangeRate)
                    .div(divider)
                    .toFixed(0, bignumber_1.BigNumber.ROUND_DOWN);
                return new Money(new bignumber_1.BigNumber(result), asset);
            }
        };
        Money.fromTokens = function (count, asset) {
            var tokens = utils_1.toBigNumber(count);
            return new Money(tokens.times(new bignumber_1.BigNumber(10).pow(asset.precision)), asset);
        };
        Money.fromCoins = function (count, asset) {
            return new Money(count, asset);
        };
        Money._tokensToCoins = function (tokens, precision) {
            var divider = Money._getDivider(precision);
            tokens = new bignumber_1.BigNumber(tokens).toFixed(precision);
            return new bignumber_1.BigNumber(tokens).multipliedBy(divider);
        };
        Money._getDivider = function (precision) {
            return new bignumber_1.BigNumber(10).pow(precision);
        };
        return Money;
    }());
    exports.Money = Money;
    
    },{"../libs/bignumber":7,"../utils":8}],5:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bignumber_1 = require("../libs/bignumber");
    var utils_1 = require("../utils");
    var OrderPrice = /** @class */ (function () {
        // @todo refactor to accept Money instead of BigNumber
        function OrderPrice(coins, pair) {
            var divider = OrderPrice._getMatcherDivider(pair.precisionDifference);
            this.pair = pair;
            this._matcherCoins = coins;
            this._tokens = this._matcherCoins.div(divider);
        }
        OrderPrice.prototype.getMatcherCoins = function () {
            return this._matcherCoins.plus(0);
        };
        OrderPrice.prototype.getTokens = function () {
            return this._tokens.plus(0);
        };
        OrderPrice.prototype.toMatcherCoins = function () {
            return this._matcherCoins.toFixed(0);
        };
        OrderPrice.prototype.toTokens = function () {
            return this._tokens.toFixed(this.pair.priceAsset.precision);
        };
        OrderPrice.prototype.toFormat = function () {
            return this._tokens.toFormat(this.pair.priceAsset.precision);
        };
        OrderPrice.prototype.toJSON = function () {
            return {
                amountAssetId: this.pair.amountAsset.id,
                priceAssetId: this.pair.priceAsset.id,
                priceTokens: this.toTokens(),
            };
        };
        OrderPrice.prototype.toString = function () {
            return this.toTokens() + " " + this.pair.amountAsset.id + "/" + this.pair.priceAsset.id;
        };
        OrderPrice.fromMatcherCoins = function (coins, pair) {
            OrderPrice._checkAmount(coins);
            return new OrderPrice(utils_1.toBigNumber(coins), pair);
        };
        OrderPrice.fromTokens = function (tokens, pair) {
            OrderPrice._checkAmount(tokens);
            tokens = utils_1.toBigNumber(tokens).toFixed(pair.priceAsset.precision);
            var divider = OrderPrice._getMatcherDivider(pair.precisionDifference);
            var coins = new bignumber_1.BigNumber(tokens).times(divider);
            return new OrderPrice(coins, pair);
        };
        OrderPrice._getMatcherDivider = function (precision) {
            return new bignumber_1.BigNumber(10)
                .pow(precision)
                .multipliedBy(OrderPrice._MATCHER_SCALE);
        };
        OrderPrice.isOrderPrice = function (object) {
            return object instanceof OrderPrice;
        };
        OrderPrice._checkAmount = function (amount) {
            if (!(['string', 'number'].includes(typeof amount) || amount instanceof bignumber_1.BigNumber)) {
                throw new Error('Please use strings to create instances of OrderPrice');
            }
        };
        OrderPrice._MATCHER_SCALE = new bignumber_1.BigNumber(10).pow(8);
        return OrderPrice;
    }());
    exports.OrderPrice = OrderPrice;
    
    },{"../libs/bignumber":7,"../utils":8}],6:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bignumber_1 = require("./libs/bignumber");
    exports.BigNumber = bignumber_1.BigNumber;
    var Asset_1 = require("./entities/Asset");
    exports.Asset = Asset_1.Asset;
    var Money_1 = require("./entities/Money");
    exports.Money = Money_1.Money;
    var OrderPrice_1 = require("./entities/OrderPrice");
    exports.OrderPrice = OrderPrice_1.OrderPrice;
    var AssetPair_1 = require("./entities/AssetPair");
    exports.AssetPair = AssetPair_1.AssetPair;
    var config_1 = require("./config");
    exports.config = config_1.config;
    
    },{"./config":1,"./entities/Asset":2,"./entities/AssetPair":3,"./entities/Money":4,"./entities/OrderPrice":5,"./libs/bignumber":7}],7:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bignumber_js_1 = require("bignumber.js");
    exports.BigNumber = bignumber_js_1.default;
    bignumber_js_1.default.config({
        ROUNDING_MODE: bignumber_js_1.default.ROUND_DOWN,
    });
    
    },{"bignumber.js":9}],8:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bignumber_1 = require("./libs/bignumber");
    function toBigNumber(some) {
        return some instanceof bignumber_1.BigNumber ? some : new bignumber_1.BigNumber(some);
    }
    exports.toBigNumber = toBigNumber;
    
    },{"./libs/bignumber":7}],9:[function(require,module,exports){
    ;(function (globalObject) {
      'use strict';


    
    /*
     *      bignumber.js v7.0.1
     *      A JavaScript library for arbitrary-precision arithmetic.
     *      https://github.com/MikeMcl/bignumber.js
     *      Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
     *      MIT Licensed.
     *
     *      BigNumber.prototype methods     |  BigNumber methods
     *                                      |
     *      absoluteValue            abs    |  clone
     *      comparedTo                      |  config               set
     *      decimalPlaces            dp     |      DECIMAL_PLACES
     *      dividedBy                div    |      ROUNDING_MODE
     *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
     *      exponentiatedBy          pow    |      RANGE
     *      integerValue                    |      CRYPTO
     *      isEqualTo                eq     |      MODULO_MODE
     *      isFinite                        |      POW_PRECISION
     *      isGreaterThan            gt     |      FORMAT
     *      isGreaterThanOrEqualTo   gte    |      ALPHABET
     *      isInteger                       |  isBigNumber
     *      isLessThan               lt     |  maximum              max
     *      isLessThanOrEqualTo      lte    |  minimum              min
     *      isNaN                           |  random
     *      isNegative                      |
     *      isPositive                      |
     *      isZero                          |
     *      minus                           |
     *      modulo                   mod    |
     *      multipliedBy             times  |
     *      negated                         |
     *      plus                            |
     *      precision                sd     |
     *      shiftedBy                       |
     *      squareRoot               sqrt   |
     *      toExponential                   |
     *      toFixed                         |
     *      toFormat                        |
     *      toFraction                      |
     *      toJSON                          |
     *      toNumber                        |
     *      toPrecision                     |
     *      toString                        |
     *      valueOf                         |
     *
     */
    
    
      var BigNumber,
        isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    
        mathceil = Math.ceil,
        mathfloor = Math.floor,
    
        bignumberError = '[BigNumber Error] ',
        tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',
    
        BASE = 1e14,
        LOG_BASE = 14,
        MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
        // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
        POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        SQRT_BASE = 1e7,
    
        // EDITABLE
        // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
        // the arguments to toExponential, toFixed, toFormat, and toPrecision.
        MAX = 1E9;                                   // 0 to MAX_INT32
    
    
      /*
       * Create and return a BigNumber constructor.
       */
      function clone(configObject) {
        var div, convertBase, parseNumeric,
          P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
          ONE = new BigNumber(1),
    
    
          //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
    
    
          // The default values below must be integers within the inclusive ranges stated.
          // The values can also be changed at run-time using BigNumber.set.
    
          // The maximum number of decimal places for operations involving division.
          DECIMAL_PLACES = 20,                     // 0 to MAX
    
          // The rounding mode used when rounding to the above decimal places, and when using
          // toExponential, toFixed, toFormat and toPrecision, and round (default value).
          // UP         0 Away from zero.
          // DOWN       1 Towards zero.
          // CEIL       2 Towards +Infinity.
          // FLOOR      3 Towards -Infinity.
          // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
          // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
          // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
          // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
          // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
          ROUNDING_MODE = 4,                       // 0 to 8
    
          // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
    
          // The exponent value at and beneath which toString returns exponential notation.
          // Number type: -7
          TO_EXP_NEG = -7,                         // 0 to -MAX
    
          // The exponent value at and above which toString returns exponential notation.
          // Number type: 21
          TO_EXP_POS = 21,                         // 0 to MAX
    
          // RANGE : [MIN_EXP, MAX_EXP]
    
          // The minimum exponent value, beneath which underflow to zero occurs.
          // Number type: -324  (5e-324)
          MIN_EXP = -1e7,                          // -1 to -MAX
    
          // The maximum exponent value, above which overflow to Infinity occurs.
          // Number type:  308  (1.7976931348623157e+308)
          // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
          MAX_EXP = 1e7,                           // 1 to MAX
    
          // Whether to use cryptographically-secure random number generation, if available.
          CRYPTO = false,                          // true or false
    
          // The modulo mode used when calculating the modulus: a mod n.
          // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
          // The remainder (r) is calculated as: r = a - n * q.
          //
          // UP        0 The remainder is positive if the dividend is negative, else is negative.
          // DOWN      1 The remainder has the same sign as the dividend.
          //             This modulo mode is commonly known as 'truncated division' and is
          //             equivalent to (a % n) in JavaScript.
          // FLOOR     3 The remainder has the same sign as the divisor (Python %).
          // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
          // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
          //             The remainder is always positive.
          //
          // The truncated division, floored division, Euclidian division and IEEE 754 remainder
          // modes are commonly used for the modulus operation.
          // Although the other rounding modes can also be used, they may not give useful results.
          MODULO_MODE = 1,                         // 0 to 9
    
          // The maximum number of significant digits of the result of the exponentiatedBy operation.
          // If POW_PRECISION is 0, there will be unlimited significant digits.
          POW_PRECISION = 0,                    // 0 to MAX
    
          // The format specification used by the BigNumber.prototype.toFormat method.
          FORMAT = {
            decimalSeparator: '.',
            groupSeparator: ',',
            groupSize: 3,
            secondaryGroupSize: 0,
            fractionGroupSeparator: '\xA0',      // non-breaking space
            fractionGroupSize: 0
          },
    
          // The alphabet used for base conversion.
          // It must be at least 2 characters long, with no '.' or repeated character.
          // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
          ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';
    
    
        //------------------------------------------------------------------------------------------
    
    
        // CONSTRUCTOR
    
    
        /*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * n {number|string|BigNumber} A numeric value.
         * [b] {number} The base of n. Integer, 2 to ALPHABET.length inclusive.
         */
        function BigNumber(n, b) {
          var alphabet, c, e, i, isNum, len, str,
            x = this;
    
          // Enable constructor usage without new.
          if (!(x instanceof BigNumber)) {
    
            // Don't throw on constructor call without new (#81).
            // '[BigNumber Error] Constructor call without new: {n}'
            //throw Error(bignumberError + ' Constructor call without new: ' + n);
            return new BigNumber(n, b);
          }
    
          if (b == null) {
    
            // Duplicate.
            if (n instanceof BigNumber) {
              x.s = n.s;
              x.e = n.e;
              x.c = (n = n.c) ? n.slice() : n;
              return;
            }
    
            isNum = typeof n == 'number';
    
            if (isNum && n * 0 == 0) {
    
              // Use `1 / n` to handle minus zero also.
              x.s = 1 / n < 0 ? (n = -n, -1) : 1;
    
              // Faster path for integers.
              if (n === ~~n) {
                for (e = 0, i = n; i >= 10; i /= 10, e++);
                x.e = e;
                x.c = [n];
                return;
              }
    
              str = n + '';
            } else {
              if (!isNumeric.test(str = n + '')) return parseNumeric(x, str, isNum);
              x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
            }
    
          } else {
    
            // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
            intCheck(b, 2, ALPHABET.length, 'Base');
            str = n + '';
    
            // Allow exponential notation to be used with base 10 argument, while
            // also rounding to DECIMAL_PLACES as with other bases.
            if (b == 10) {
              x = new BigNumber(n instanceof BigNumber ? n : str);
              return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
            }
    
            isNum = typeof n == 'number';
    
            if (isNum) {
    
              // Avoid potential interpretation of Infinity and NaN as base 44+ values.
              if (n * 0 != 0) return parseNumeric(x, str, isNum, b);
    
              x.s = 1 / n < 0 ? (str = str.slice(1), -1) : 1;
    
              // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
              if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
                throw Error
                 (tooManyDigits + n);
              }
    
              // Prevent later check for length on converted number.
              isNum = false;
            } else {
              x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
    
              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (b > 10 && b < 37) str = str.toLowerCase();
            }
    
            alphabet = ALPHABET.slice(0, b);
            e = i = 0;
    
            // Check that str is a valid base b number.
            // Don't use RegExp so alphabet can contain special characters.
            for (len = str.length; i < len; i++) {
              if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                if (c == '.') {
    
                  // If '.' is not the first character and it has not be found before.
                  if (i > e) {
                    e = len;
                    continue;
                  }
                }
    
                return parseNumeric(x, n + '', isNum, b);
              }
            }
    
            str = convertBase(str, b, 10, x.s);
          }
    
          // Decimal point?
          if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
    
          // Exponential form?
          if ((i = str.search(/e/i)) > 0) {
    
            // Determine exponent.
            if (e < 0) e = i;
            e += +str.slice(i + 1);
            str = str.substring(0, i);
          } else if (e < 0) {
    
            // Integer.
            e = str.length;
          }
    
          // Determine leading zeros.
          for (i = 0; str.charCodeAt(i) === 48; i++);
    
          // Determine trailing zeros.
          for (len = str.length; str.charCodeAt(--len) === 48;);
    
          str = str.slice(i, ++len);
    
          if (str) {
            len -= i;
    
            // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
            if (isNum && BigNumber.DEBUG &&
              len > 15 && (n > MAX_SAFE_INTEGER || n !== mathfloor(n))) {
                throw Error
                 (tooManyDigits + (x.s * n));
            }
    
            e = e - i - 1;
    
             // Overflow?
            if (e > MAX_EXP) {
    
              // Infinity.
              x.c = x.e = null;
    
            // Underflow?
            } else if (e < MIN_EXP) {
    
              // Zero.
              x.c = [x.e = 0];
            } else {
              x.e = e;
              x.c = [];
    
              // Transform base
    
              // e is the base 10 exponent.
              // i is where to slice str to get the first element of the coefficient array.
              i = (e + 1) % LOG_BASE;
              if (e < 0) i += LOG_BASE;
    
              if (i < len) {
                if (i) x.c.push(+str.slice(0, i));
    
                for (len -= LOG_BASE; i < len;) {
                  x.c.push(+str.slice(i, i += LOG_BASE));
                }
    
                str = str.slice(i);
                i = LOG_BASE - str.length;
              } else {
                i -= len;
              }
    
              for (; i--; str += '0');
              x.c.push(+str);
            }
          } else {
    
            // Zero.
            x.c = [x.e = 0];
          }
        }
    
    
        // CONSTRUCTOR PROPERTIES
    
    
        BigNumber.clone = clone;
    
        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;
    
    
        /*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object with the following optional properties (if the value of a property is
         * a number, it must be an integer within the inclusive range stated):
         *
         *   DECIMAL_PLACES   {number}           0 to MAX
         *   ROUNDING_MODE    {number}           0 to 8
         *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
         *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
         *   CRYPTO           {boolean}          true or false
         *   MODULO_MODE      {number}           0 to 9
         *   POW_PRECISION       {number}           0 to MAX
         *   ALPHABET         {string}           A string of two or more unique characters, and not
         *                                       containing '.'. The empty string, null or undefined
         *                                       resets the alphabet to its default value.
         *   FORMAT           {object}           An object with some of the following properties:
         *      decimalSeparator       {string}
         *      groupSeparator         {string}
         *      groupSize              {number}
         *      secondaryGroupSize     {number}
         *      fractionGroupSeparator {string}
         *      fractionGroupSize      {number}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined, except for ALPHABET.
         *
         * Return an object with the properties current values.
         */
        BigNumber.config = BigNumber.set = function (obj) {
          var p, v;
    
          if (obj != null) {
    
            if (typeof obj == 'object') {
    
              // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
              // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                DECIMAL_PLACES = v;
              }
    
              // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
              // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
                v = obj[p];
                intCheck(v, 0, 8, p);
                ROUNDING_MODE = v;
              }
    
              // EXPONENTIAL_AT {number|number[]}
              // Integer, -MAX to MAX inclusive or
              // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
              // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
                v = obj[p];
                if (isArray(v)) {
                  intCheck(v[0], -MAX, 0, p);
                  intCheck(v[1], 0, MAX, p);
                  TO_EXP_NEG = v[0];
                  TO_EXP_POS = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                }
              }
    
              // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
              // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
              // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
              if (obj.hasOwnProperty(p = 'RANGE')) {
                v = obj[p];
                if (isArray(v)) {
                  intCheck(v[0], -MAX, -1, p);
                  intCheck(v[1], 1, MAX, p);
                  MIN_EXP = v[0];
                  MAX_EXP = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  if (v) {
                    MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                  } else {
                    throw Error
                     (bignumberError + p + ' cannot be zero: ' + v);
                  }
                }
              }
    
              // CRYPTO {boolean} true or false.
              // '[BigNumber Error] CRYPTO not true or false: {v}'
              // '[BigNumber Error] crypto unavailable'
              if (obj.hasOwnProperty(p = 'CRYPTO')) {
                v = obj[p];
                if (v === !!v) {
                  if (v) {
                    if (typeof crypto != 'undefined' && crypto &&
                     (crypto.getRandomValues || crypto.randomBytes)) {
                      CRYPTO = v;
                    } else {
                      CRYPTO = !v;
                      throw Error
                       (bignumberError + 'crypto unavailable');
                    }
                  } else {
                    CRYPTO = v;
                  }
                } else {
                  throw Error
                   (bignumberError + p + ' not true or false: ' + v);
                }
              }
    
              // MODULO_MODE {number} Integer, 0 to 9 inclusive.
              // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
                v = obj[p];
                intCheck(v, 0, 9, p);
                MODULO_MODE = v;
              }
    
              // POW_PRECISION {number} Integer, 0 to MAX inclusive.
              // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                POW_PRECISION = v;
              }
    
              // FORMAT {object}
              // '[BigNumber Error] FORMAT not an object: {v}'
              if (obj.hasOwnProperty(p = 'FORMAT')) {
                v = obj[p];
                if (typeof v == 'object') FORMAT = v;
                else throw Error
                 (bignumberError + p + ' not an object: ' + v);
              }
    
              // ALPHABET {string}
              // '[BigNumber Error] ALPHABET invalid: {v}'
              if (obj.hasOwnProperty(p = 'ALPHABET')) {
                v = obj[p];
    
                // Disallow if only one character, or contains '.' or a repeated character.
                if (typeof v == 'string' && !/^.$|\.|(.).*\1/.test(v)) {
                  ALPHABET = v;
                } else {
                  throw Error
                   (bignumberError + p + ' invalid: ' + v);
                }
              }
    
            } else {
    
              // '[BigNumber Error] Object expected: {v}'
              throw Error
               (bignumberError + 'Object expected: ' + obj);
            }
          }
    
          return {
            DECIMAL_PLACES: DECIMAL_PLACES,
            ROUNDING_MODE: ROUNDING_MODE,
            EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
            RANGE: [MIN_EXP, MAX_EXP],
            CRYPTO: CRYPTO,
            MODULO_MODE: MODULO_MODE,
            POW_PRECISION: POW_PRECISION,
            FORMAT: FORMAT,
            ALPHABET: ALPHABET
          };
        };
    
    
        /*
         * Return true if v is a BigNumber instance, otherwise return false.
         *
         * v {any}
         */
        BigNumber.isBigNumber = function (v) {
          return v instanceof BigNumber || v && v._isBigNumber === true || false;
        };
    
    
        /*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.maximum = BigNumber.max = function () {
          return maxOrMin(arguments, P.lt);
        };
    
    
        /*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.minimum = BigNumber.min = function () {
          return maxOrMin(arguments, P.gt);
        };
    
    
        /*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
         * '[BigNumber Error] crypto unavailable'
         */
        BigNumber.random = (function () {
          var pow2_53 = 0x20000000000000;
    
          // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
          // Check if Math.random() produces more than 32 bits of randomness.
          // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
          // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
          var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
           ? function () { return mathfloor(Math.random() * pow2_53); }
           : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
             (Math.random() * 0x800000 | 0); };
    
          return function (dp) {
            var a, b, e, k, v,
              i = 0,
              c = [],
              rand = new BigNumber(ONE);
    
            if (dp == null) dp = DECIMAL_PLACES;
            else intCheck(dp, 0, MAX);
    
            k = mathceil(dp / LOG_BASE);
    
            if (CRYPTO) {
    
              // Browsers supporting crypto.getRandomValues.
              if (crypto.getRandomValues) {
    
                a = crypto.getRandomValues(new Uint32Array(k *= 2));
    
                for (; i < k;) {
    
                  // 53 bits:
                  // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                  // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                  // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                  //                                     11111 11111111 11111111
                  // 0x20000 is 2^21.
                  v = a[i] * 0x20000 + (a[i + 1] >>> 11);
    
                  // Rejection sampling:
                  // 0 <= v < 9007199254740992
                  // Probability that v >= 9e15, is
                  // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                  if (v >= 9e15) {
                    b = crypto.getRandomValues(new Uint32Array(2));
                    a[i] = b[0];
                    a[i + 1] = b[1];
                  } else {
    
                    // 0 <= v <= 8999999999999999
                    // 0 <= (v % 1e14) <= 99999999999999
                    c.push(v % 1e14);
                    i += 2;
                  }
                }
                i = k / 2;
    
              // Node.js supporting crypto.randomBytes.
              } else if (crypto.randomBytes) {
    
                // buffer
                a = crypto.randomBytes(k *= 7);
    
                for (; i < k;) {
    
                  // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                  // 0x100000000 is 2^32, 0x1000000 is 2^24
                  // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                  // 0 <= v < 9007199254740992
                  v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                     (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                     (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
    
                  if (v >= 9e15) {
                    crypto.randomBytes(7).copy(a, i);
                  } else {
    
                    // 0 <= (v % 1e14) <= 99999999999999
                    c.push(v % 1e14);
                    i += 7;
                  }
                }
                i = k / 7;
              } else {
                CRYPTO = false;
                throw Error
                 (bignumberError + 'crypto unavailable');
              }
            }
    
            // Use Math.random.
            if (!CRYPTO) {
    
              for (; i < k;) {
                v = random53bitInt();
                if (v < 9e15) c[i++] = v % 1e14;
              }
            }
    
            k = c[--i];
            dp %= LOG_BASE;
    
            // Convert trailing digits to zeros according to dp.
            if (k && dp) {
              v = POWS_TEN[LOG_BASE - dp];
              c[i] = mathfloor(k / v) * v;
            }
    
            // Remove trailing elements which are zero.
            for (; c[i] === 0; c.pop(), i--);
    
            // Zero?
            if (i < 0) {
              c = [e = 0];
            } else {
    
              // Remove leading elements which are zero and adjust exponent accordingly.
              for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);
    
              // Count the digits of the first element of c to determine leading zeros, and...
              for (i = 1, v = c[0]; v >= 10; v /= 10, i++);
    
              // adjust the exponent accordingly.
              if (i < LOG_BASE) e -= LOG_BASE - i;
            }
    
            rand.e = e;
            rand.c = c;
            return rand;
          };
        })();
    
    
        // PRIVATE FUNCTIONS
    
    
        // Called by BigNumber and BigNumber.prototype.toString.
        convertBase = (function () {
          var decimal = '0123456789';
    
          /*
           * Convert string of baseIn to an array of numbers of baseOut.
           * Eg. toBaseOut('255', 10, 16) returns [15, 15].
           * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
           */
          function toBaseOut(str, baseIn, baseOut, alphabet) {
            var j,
              arr = [0],
              arrL,
              i = 0,
              len = str.length;
    
            for (; i < len;) {
              for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);
    
              arr[0] += alphabet.indexOf(str.charAt(i++));
    
              for (j = 0; j < arr.length; j++) {
    
                if (arr[j] > baseOut - 1) {
                  if (arr[j + 1] == null) arr[j + 1] = 0;
                  arr[j + 1] += arr[j] / baseOut | 0;
                  arr[j] %= baseOut;
                }
              }
            }
    
            return arr.reverse();
          }
    
          // Convert a numeric string of baseIn to a numeric string of baseOut.
          // If the caller is toString, we are converting from base 10 to baseOut.
          // If the caller is BigNumber, we are converting from baseIn to base 10.
          return function (str, baseIn, baseOut, sign, callerIsToString) {
            var alphabet, d, e, k, r, x, xc, y,
              i = str.indexOf('.'),
              dp = DECIMAL_PLACES,
              rm = ROUNDING_MODE;
    
            // Non-integer.
            if (i >= 0) {
              k = POW_PRECISION;
    
              // Unlimited precision.
              POW_PRECISION = 0;
              str = str.replace('.', '');
              y = new BigNumber(baseIn);
              x = y.pow(str.length - i);
              POW_PRECISION = k;
    
              // Convert str as if an integer, then restore the fraction part by dividing the
              // result by its base raised to a power.
    
              y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
               10, baseOut, decimal);
              y.e = y.c.length;
            }
    
            // Convert the number as integer.
    
            xc = toBaseOut(str, baseIn, baseOut, callerIsToString
             ? (alphabet = ALPHABET, decimal)
             : (alphabet = decimal, ALPHABET));
    
            // xc now represents str as an integer and converted to baseOut. e is the exponent.
            e = k = xc.length;
    
            // Remove trailing zeros.
            for (; xc[--k] == 0; xc.pop());
    
            // Zero?
            if (!xc[0]) return alphabet.charAt(0);
    
            // Does str represent an integer? If so, no need for the division.
            if (i < 0) {
              --e;
            } else {
              x.c = xc;
              x.e = e;
    
              // The sign is needed for correct rounding.
              x.s = sign;
              x = div(x, y, dp, rm, baseOut);
              xc = x.c;
              r = x.r;
              e = x.e;
            }
    
            // xc now represents str converted to baseOut.
    
            // THe index of the rounding digit.
            d = e + dp + 1;
    
            // The rounding digit: the digit to the right of the digit that may be rounded up.
            i = xc[d];
    
            // Look at the rounding digits and mode to determine whether to round up.
    
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;
    
            r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
                  : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
                   rm == (x.s < 0 ? 8 : 7));
    
            // If the index of the rounding digit is not greater than zero, or xc represents
            // zero, then the result of the base conversion is zero or, if rounding up, a value
            // such as 0.00001.
            if (d < 1 || !xc[0]) {
    
              // 1^-dp or 0
              str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0))
                  : alphabet.charAt(0);
            } else {
    
              // Truncate xc to the required number of decimal places.
              xc.length = d;
    
              // Round up?
              if (r) {
    
                // Rounding up may mean the previous digit has to be rounded up and so on.
                for (--baseOut; ++xc[--d] > baseOut;) {
                  xc[d] = 0;
    
                  if (!d) {
                    ++e;
                    xc = [1].concat(xc);
                  }
                }
              }
    
              // Determine trailing zeros.
              for (k = xc.length; !xc[--k];);
    
              // E.g. [4, 11, 15] becomes 4bf.
              for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));
    
              // Add leading zeros, decimal point and trailing zeros as required.
              str = toFixedPoint(str, e, alphabet.charAt(0));
            }
    
            // The caller will add the sign.
            return str;
          };
        })();
    
    
        // Perform division in the specified base. Called by div and convertBase.
        div = (function () {
    
          // Assume non-zero x and k.
          function multiply(x, k, base) {
            var m, temp, xlo, xhi,
              carry = 0,
              i = x.length,
              klo = k % SQRT_BASE,
              khi = k / SQRT_BASE | 0;
    
            for (x = x.slice(); i--;) {
              xlo = x[i] % SQRT_BASE;
              xhi = x[i] / SQRT_BASE | 0;
              m = khi * xlo + xhi * klo;
              temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
              carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
              x[i] = temp % base;
            }
    
            if (carry) x = [carry].concat(x);
    
            return x;
          }
    
          function compare(a, b, aL, bL) {
            var i, cmp;
    
            if (aL != bL) {
              cmp = aL > bL ? 1 : -1;
            } else {
    
              for (i = cmp = 0; i < aL; i++) {
    
                if (a[i] != b[i]) {
                  cmp = a[i] > b[i] ? 1 : -1;
                  break;
                }
              }
            }
    
            return cmp;
          }
    
          function subtract(a, b, aL, base) {
            var i = 0;
    
            // Subtract b from a.
            for (; aL--;) {
              a[aL] -= i;
              i = a[aL] < b[aL] ? 1 : 0;
              a[aL] = i * base + a[aL] - b[aL];
            }
    
            // Remove leading zeros.
            for (; !a[0] && a.length > 1; a.splice(0, 1));
          }
    
          // x: dividend, y: divisor.
          return function (x, y, dp, rm, base) {
            var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
              yL, yz,
              s = x.s == y.s ? 1 : -1,
              xc = x.c,
              yc = y.c;
    
            // Either NaN, Infinity or 0?
            if (!xc || !xc[0] || !yc || !yc[0]) {
    
              return new BigNumber(
    
               // Return NaN if either NaN, or both Infinity or 0.
               !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :
    
                // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xc && xc[0] == 0 || !yc ? s * 0 : s / 0
             );
            }
    
            q = new BigNumber(s);
            qc = q.c = [];
            e = x.e - y.e;
            s = dp + e + 1;
    
            if (!base) {
              base = BASE;
              e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
              s = s / LOG_BASE | 0;
            }
    
            // Result exponent may be one less then the current value of e.
            // The coefficients of the BigNumbers from convertBase may have trailing zeros.
            for (i = 0; yc[i] == (xc[i] || 0); i++);
    
            if (yc[i] > (xc[i] || 0)) e--;
    
            if (s < 0) {
              qc.push(1);
              more = true;
            } else {
              xL = xc.length;
              yL = yc.length;
              i = 0;
              s += 2;
    
              // Normalise xc and yc so highest order digit of yc is >= base / 2.
    
              n = mathfloor(base / (yc[0] + 1));
    
              // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
              // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
              if (n > 1) {
                yc = multiply(yc, n, base);
                xc = multiply(xc, n, base);
                yL = yc.length;
                xL = xc.length;
              }
    
              xi = yL;
              rem = xc.slice(0, yL);
              remL = rem.length;
    
              // Add zeros to make remainder as long as divisor.
              for (; remL < yL; rem[remL++] = 0);
              yz = yc.slice();
              yz = [0].concat(yz);
              yc0 = yc[0];
              if (yc[1] >= base / 2) yc0++;
              // Not necessary, but to prevent trial digit n > base, when using base 3.
              // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
    
              do {
                n = 0;
    
                // Compare divisor and remainder.
                cmp = compare(yc, rem, yL, remL);
    
                // If divisor < remainder.
                if (cmp < 0) {
    
                  // Calculate trial digit, n.
    
                  rem0 = rem[0];
                  if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
    
                  // n is how many times the divisor goes into the current remainder.
                  n = mathfloor(rem0 / yc0);
    
                  //  Algorithm:
                  //  product = divisor multiplied by trial digit (n).
                  //  Compare product and remainder.
                  //  If product is greater than remainder:
                  //    Subtract divisor from product, decrement trial digit.
                  //  Subtract product from remainder.
                  //  If product was less than remainder at the last compare:
                  //    Compare new remainder and divisor.
                  //    If remainder is greater than divisor:
                  //      Subtract divisor from remainder, increment trial digit.
    
                  if (n > 1) {
    
                    // n may be > base only when base is 3.
                    if (n >= base) n = base - 1;
    
                    // product = divisor * trial digit.
                    prod = multiply(yc, n, base);
                    prodL = prod.length;
                    remL = rem.length;
    
                    // Compare product and remainder.
                    // If product > remainder then trial digit n too high.
                    // n is 1 too high about 5% of the time, and is not known to have
                    // ever been more than 1 too high.
                    while (compare(prod, rem, prodL, remL) == 1) {
                      n--;
    
                      // Subtract divisor from product.
                      subtract(prod, yL < prodL ? yz : yc, prodL, base);
                      prodL = prod.length;
                      cmp = 1;
                    }
                  } else {
    
                    // n is 0 or 1, cmp is -1.
                    // If n is 0, there is no need to compare yc and rem again below,
                    // so change cmp to 1 to avoid it.
                    // If n is 1, leave cmp as -1, so yc and rem are compared again.
                    if (n == 0) {
    
                      // divisor < remainder, so n must be at least 1.
                      cmp = n = 1;
                    }
    
                    // product = divisor
                    prod = yc.slice();
                    prodL = prod.length;
                  }
    
                  if (prodL < remL) prod = [0].concat(prod);
    
                  // Subtract product from remainder.
                  subtract(rem, prod, remL, base);
                  remL = rem.length;
    
                   // If product was < remainder.
                  if (cmp == -1) {
    
                    // Compare divisor and new remainder.
                    // If divisor < new remainder, subtract divisor from remainder.
                    // Trial digit n too low.
                    // n is 1 too low about 5% of the time, and very rarely 2 too low.
                    while (compare(yc, rem, yL, remL) < 1) {
                      n++;
    
                      // Subtract divisor from remainder.
                      subtract(rem, yL < remL ? yz : yc, remL, base);
                      remL = rem.length;
                    }
                  }
                } else if (cmp === 0) {
                  n++;
                  rem = [0];
                } // else cmp === 1 and n will be 0
    
                // Add the next digit, n, to the result array.
                qc[i++] = n;
    
                // Update the remainder.
                if (rem[0]) {
                  rem[remL++] = xc[xi] || 0;
                } else {
                  rem = [xc[xi]];
                  remL = 1;
                }
              } while ((xi++ < xL || rem[0] != null) && s--);
    
              more = rem[0] != null;
    
              // Leading zero?
              if (!qc[0]) qc.splice(0, 1);
            }
    
            if (base == BASE) {
    
              // To calculate q.e, first get the number of digits of qc[0].
              for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);
    
              round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
    
            // Caller is convertBase.
            } else {
              q.e = e;
              q.r = +more;
            }
    
            return q;
          };
        })();
    
    
        /*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n: a BigNumber.
         * i: the index of the last digit required (i.e. the digit that may be rounded up).
         * rm: the rounding mode.
         * id: 1 (toExponential) or 2 (toPrecision).
         */
        function format(n, i, rm, id) {
          var c0, e, ne, len, str;
    
          if (rm == null) rm = ROUNDING_MODE;
          else intCheck(rm, 0, 8);
    
          if (!n.c) return n.toString();
    
          c0 = n.c[0];
          ne = n.e;
    
          if (i == null) {
            str = coeffToString(n.c);
            str = id == 1 || id == 2 && ne <= TO_EXP_NEG
             ? toExponential(str, ne)
             : toFixedPoint(str, ne, '0');
          } else {
            n = round(new BigNumber(n), i, rm);
    
            // n.e may have changed if the value was rounded up.
            e = n.e;
    
            str = coeffToString(n.c);
            len = str.length;
    
            // toPrecision returns exponential notation if the number of significant digits
            // specified is less than the number of digits necessary to represent the integer
            // part of the value in fixed-point notation.
    
            // Exponential notation.
            if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
    
              // Append zeros?
              for (; len < i; str += '0', len++);
              str = toExponential(str, e);
    
            // Fixed-point notation.
            } else {
              i -= ne;
              str = toFixedPoint(str, e, '0');
    
              // Append zeros?
              if (e + 1 > len) {
                if (--i > 0) for (str += '.'; i--; str += '0');
              } else {
                i += e - len;
                if (i > 0) {
                  if (e + 1 == len) str += '.';
                  for (; i--; str += '0');
                }
              }
            }
          }
    
          return n.s < 0 && c0 ? '-' + str : str;
        }
    
    
        // Handle BigNumber.max and BigNumber.min.
        function maxOrMin(args, method) {
          var m, n,
            i = 0;
    
          if (isArray(args[0])) args = args[0];
          m = new BigNumber(args[0]);
    
          for (; ++i < args.length;) {
            n = new BigNumber(args[i]);
    
            // If any number is NaN, return NaN.
            if (!n.s) {
              m = n;
              break;
            } else if (method.call(m, n)) {
              m = n;
            }
          }
    
          return m;
        }
    
    
        /*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */
        function normalise(n, c, e) {
          var i = 1,
            j = c.length;
    
           // Remove trailing zeros.
          for (; !c[--j]; c.pop());
    
          // Calculate the base 10 exponent. First get the number of digits of c[0].
          for (j = c[0]; j >= 10; j /= 10, i++);
    
          // Overflow?
          if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
    
            // Infinity.
            n.c = n.e = null;
    
          // Underflow?
          } else if (e < MIN_EXP) {
    
            // Zero.
            n.c = [n.e = 0];
          } else {
            n.e = e;
            n.c = c;
          }
    
          return n;
        }
    
    
        // Handle values that fail the validity test in BigNumber.
        parseNumeric = (function () {
          var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
            dotAfter = /^([^.]+)\.$/,
            dotBefore = /^\.([^.]+)$/,
            isInfinityOrNaN = /^-?(Infinity|NaN)$/,
            whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    
          return function (x, str, isNum, b) {
            var base,
              s = isNum ? str : str.replace(whitespaceOrPlus, '');
    
            // No exception on ±Infinity or NaN.
            if (isInfinityOrNaN.test(s)) {
              x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
              x.c = x.e = null;
            } else {
              if (!isNum) {
    
                // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                s = s.replace(basePrefix, function (m, p1, p2) {
                  base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                  return !b || b == base ? p1 : m;
                });
    
                if (b) {
                  base = b;
    
                  // E.g. '1.' to '1', '.1' to '0.1'
                  s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                }
    
                if (str != s) return new BigNumber(s, base);
              }
    
              // '[BigNumber Error] Not a number: {n}'
              // '[BigNumber Error] Not a base {b} number: {n}'
              if (BigNumber.DEBUG) {
                throw Error
                  (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
              }
    
              // NaN
              x.c = x.e = x.s = null;
            }
          }
        })();
    
    
        /*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */
        function round(x, sd, rm, r) {
          var d, i, j, k, n, ni, rd,
            xc = x.c,
            pows10 = POWS_TEN;
    
          // if x is not Infinity or NaN...
          if (xc) {
    
            // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
            // n is a base 1e14 number, the value of the element of array x.c containing rd.
            // ni is the index of n within x.c.
            // d is the number of digits of n.
            // i is the index of rd within n including leading zeros.
            // j is the actual index of rd within n (if < 0, rd is a leading zero).
            out: {
    
              // Get the number of digits of the first element of xc.
              for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
              i = sd - d;
    
              // If the rounding digit is in the first element of xc...
              if (i < 0) {
                i += LOG_BASE;
                j = sd;
                n = xc[ni = 0];
    
                // Get the rounding digit at index j of n.
                rd = n / pows10[d - j - 1] % 10 | 0;
              } else {
                ni = mathceil((i + 1) / LOG_BASE);
    
                if (ni >= xc.length) {
    
                  if (r) {
    
                    // Needed by sqrt.
                    for (; xc.length <= ni; xc.push(0));
                    n = rd = 0;
                    d = 1;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + 1;
                  } else {
                    break out;
                  }
                } else {
                  n = k = xc[ni];
    
                  // Get the number of digits of n.
                  for (d = 1; k >= 10; k /= 10, d++);
    
                  // Get the index of rd within n.
                  i %= LOG_BASE;
    
                  // Get the index of rd within n, adjusted for leading zeros.
                  // The number of leading zeros of n is given by LOG_BASE - d.
                  j = i - LOG_BASE + d;
    
                  // Get the rounding digit at index j of n.
                  rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                }
              }
    
              r = r || sd < 0 ||
    
              // Are there any non-zero digits after the rounding digit?
              // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
              // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
               xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
    
              r = rm < 4
               ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
               : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&
    
                // Check whether the digit to the left of the rounding digit is odd.
                ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
                 rm == (x.s < 0 ? 8 : 7));
    
              if (sd < 1 || !xc[0]) {
                xc.length = 0;
    
                if (r) {
    
                  // Convert sd to decimal places.
                  sd -= x.e + 1;
    
                  // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                  xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                  x.e = -sd || 0;
                } else {
    
                  // Zero.
                  xc[0] = x.e = 0;
                }
    
                return x;
              }
    
              // Remove excess digits.
              if (i == 0) {
                xc.length = ni;
                k = 1;
                ni--;
              } else {
                xc.length = ni + 1;
                k = pows10[LOG_BASE - i];
    
                // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                // j > 0 means i > number of leading zeros of n.
                xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
              }
    
              // Round up?
              if (r) {
    
                for (; ;) {
    
                  // If the digit to be rounded up is in the first element of xc...
                  if (ni == 0) {
    
                    // i will be the length of xc[0] before k is added.
                    for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                    j = xc[0] += k;
                    for (k = 1; j >= 10; j /= 10, k++);
    
                    // if i != k the length has increased.
                    if (i != k) {
                      x.e++;
                      if (xc[0] == BASE) xc[0] = 1;
                    }
    
                    break;
                  } else {
                    xc[ni] += k;
                    if (xc[ni] != BASE) break;
                    xc[ni--] = 0;
                    k = 1;
                  }
                }
              }
    
              // Remove trailing zeros.
              for (i = xc.length; xc[--i] === 0; xc.pop());
            }
    
            // Overflow? Infinity.
            if (x.e > MAX_EXP) {
              x.c = x.e = null;
    
            // Underflow? Zero.
            } else if (x.e < MIN_EXP) {
              x.c = [x.e = 0];
            }
          }
    
          return x;
        }
    
    
        // PROTOTYPE/INSTANCE METHODS
    
    
        /*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */
        P.absoluteValue = P.abs = function () {
          var x = new BigNumber(this);
          if (x.s < 0) x.s = 1;
          return x;
        };
    
    
        /*
         * Return
         *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         *   0 if they have the same value,
         *   or null if the value of either is NaN.
         */
        P.comparedTo = function (y, b) {
          return compare(this, new BigNumber(y, b));
        };
    
    
        /*
         * If dp is undefined or null or true or false, return the number of decimal places of the
         * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
         *
         * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
         * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
         * ROUNDING_MODE if rm is omitted.
         *
         * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
        P.decimalPlaces = P.dp = function (dp, rm) {
          var c, n, v,
            x = this;
    
          if (dp != null) {
            intCheck(dp, 0, MAX);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
    
            return round(new BigNumber(x), dp + x.e + 1, rm);
          }
    
          if (!(c = x.c)) return null;
          n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
    
          // Subtract the number of trailing zeros of the last number.
          if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
          if (n < 0) n = 0;
    
          return n;
        };
    
    
        /*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.dividedBy = P.div = function (y, b) {
          return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };
    
    
        /*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */
        P.dividedToIntegerBy = P.idiv = function (y, b) {
          return div(this, new BigNumber(y, b), 0, 1);
        };
    
    
        /*
         * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
         *
         * If m is present, return the result modulo m.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
         *
         * The modular power operation works efficiently when x, n, and m are integers, otherwise it
         * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
         *
         * n {number|string|BigNumber} The exponent. An integer.
         * [m] {number|string|BigNumber} The modulus.
         *
         * '[BigNumber Error] Exponent not an integer: {n}'
         */
        P.exponentiatedBy = P.pow = function (n, m) {
          var half, isModExp, k, more, nIsBig, nIsNeg, nIsOdd, y,
            x = this;
    
          n = new BigNumber(n);
    
          // Allow NaN and ±Infinity, but not other non-integers.
          if (n.c && !n.isInteger()) {
            throw Error
              (bignumberError + 'Exponent not an integer: ' + n);
          }
    
          if (m != null) m = new BigNumber(m);
    
          // Exponent of MAX_SAFE_INTEGER is 15.
          nIsBig = n.e > 14;
    
          // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
          if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
    
            // The sign of the result of pow when x is negative depends on the evenness of n.
            // If +n overflows to ±Infinity, the evenness of n would be not be known.
            y = new BigNumber(Math.pow(+x.valueOf(), nIsBig ? 2 - isOdd(n) : +n));
            return m ? y.mod(m) : y;
          }
    
          nIsNeg = n.s < 0;
    
          if (m) {
    
            // x % m returns NaN if abs(m) is zero, or m is NaN.
            if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
    
            isModExp = !nIsNeg && x.isInteger() && m.isInteger();
    
            if (isModExp) x = x.mod(m);
    
          // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
          // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
          } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
            // [1, 240000000]
            ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
            // [80000000000000]  [99999750000000]
            : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
    
            // If x is negative and n is odd, k = -0, else k = 0.
            k = x.s < 0 && isOdd(n) ? -0 : 0;
    
            // If x >= 1, k = ±Infinity.
            if (x.e > -1) k = 1 / k;
    
            // If n is negative return ±0, else return ±Infinity.
            return new BigNumber(nIsNeg ? 1 / k : k);
    
          } else if (POW_PRECISION) {
    
            // Truncating each coefficient array to a length of k after each multiplication
            // equates to truncating significant digits to POW_PRECISION + [28, 41],
            // i.e. there will be a minimum of 28 guard digits retained.
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
          }
    
          if (nIsBig) {
            half = new BigNumber(0.5);
            nIsOdd = isOdd(n);
          } else {
            nIsOdd = n % 2;
          }
    
          if (nIsNeg) n.s = 1;
    
          y = new BigNumber(ONE);
    
          // Performs 54 loop iterations for n of 9007199254740991.
          for (; ;) {
    
            if (nIsOdd) {
              y = y.times(x);
              if (!y.c) break;
    
              if (k) {
                if (y.c.length > k) y.c.length = k;
              } else if (isModExp) {
                y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
              }
            }
    
            if (nIsBig) {
              n = n.times(half);
              round(n, n.e + 1, 1);
              if (!n.c[0]) break;
              nIsBig = n.e > 14;
              nIsOdd = isOdd(n);
            } else {
              n = mathfloor(n / 2);
              if (!n) break;
              nIsOdd = n % 2;
            }
    
            x = x.times(x);
    
            if (k) {
              if (x.c && x.c.length > k) x.c.length = k;
            } else if (isModExp) {
              x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
            }
          }
    
          if (isModExp) return y;
          if (nIsNeg) y = ONE.div(y);
    
          return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };
    
    
        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
         * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
         */
        P.integerValue = function (rm) {
          var n = new BigNumber(this);
          if (rm == null) rm = ROUNDING_MODE;
          else intCheck(rm, 0, 8);
          return round(n, n.e + 1, rm);
        };
    
    
        /*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise return false.
         */
        P.isEqualTo = P.eq = function (y, b) {
          return compare(this, new BigNumber(y, b)) === 0;
        };
    
    
        /*
         * Return true if the value of this BigNumber is a finite number, otherwise return false.
         */
        P.isFinite = function () {
          return !!this.c;
        };
    
    
        /*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise return false.
         */
        P.isGreaterThan = P.gt = function (y, b) {
          return compare(this, new BigNumber(y, b)) > 0;
        };
    
    
        /*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise return false.
         */
        P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
          return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
    
        };
    
    
        /*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */
        P.isInteger = function () {
          return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };
    
    
        /*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise return false.
         */
        P.isLessThan = P.lt = function (y, b) {
          return compare(this, new BigNumber(y, b)) < 0;
        };
    
    
        /*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise return false.
         */
        P.isLessThanOrEqualTo = P.lte = function (y, b) {
          return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };
    
    
        /*
         * Return true if the value of this BigNumber is NaN, otherwise return false.
         */
        P.isNaN = function () {
          return !this.s;
        };
    
    
        /*
         * Return true if the value of this BigNumber is negative, otherwise return false.
         */
        P.isNegative = function () {
          return this.s < 0;
        };
    
    
        /*
         * Return true if the value of this BigNumber is positive, otherwise return false.
         */
        P.isPositive = function () {
          return this.s > 0;
        };
    
    
        /*
         * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
         */
        P.isZero = function () {
          return !!this.c && this.c[0] == 0;
        };
    
    
        /*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */
        P.minus = function (y, b) {
          var i, j, t, xLTy,
            x = this,
            a = x.s;
    
          y = new BigNumber(y, b);
          b = y.s;
    
          // Either NaN?
          if (!a || !b) return new BigNumber(NaN);
    
          // Signs differ?
          if (a != b) {
            y.s = -b;
            return x.plus(y);
          }
    
          var xe = x.e / LOG_BASE,
            ye = y.e / LOG_BASE,
            xc = x.c,
            yc = y.c;
    
          if (!xe || !ye) {
    
            // Either Infinity?
            if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
    
            // Either zero?
            if (!xc[0] || !yc[0]) {
    
              // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
              return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :
    
               // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
               ROUNDING_MODE == 3 ? -0 : 0);
            }
          }
    
          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();
    
          // Determine which is the bigger number.
          if (a = xe - ye) {
    
            if (xLTy = a < 0) {
              a = -a;
              t = xc;
            } else {
              ye = xe;
              t = yc;
            }
    
            t.reverse();
    
            // Prepend zeros to equalise exponents.
            for (b = a; b--; t.push(0));
            t.reverse();
          } else {
    
            // Exponents equal. Check digit by digit.
            j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
    
            for (a = b = 0; b < j; b++) {
    
              if (xc[b] != yc[b]) {
                xLTy = xc[b] < yc[b];
                break;
              }
            }
          }
    
          // x < y? Point xc to the array of the bigger number.
          if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;
    
          b = (j = yc.length) - (i = xc.length);
    
          // Append zeros to xc if shorter.
          // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
          if (b > 0) for (; b--; xc[i++] = 0);
          b = BASE - 1;
    
          // Subtract yc from xc.
          for (; j > a;) {
    
            if (xc[--j] < yc[j]) {
              for (i = j; i && !xc[--i]; xc[i] = b);
              --xc[i];
              xc[j] += BASE;
            }
    
            xc[j] -= yc[j];
          }
    
          // Remove leading zeros and adjust exponent accordingly.
          for (; xc[0] == 0; xc.splice(0, 1), --ye);
    
          // Zero?
          if (!xc[0]) {
    
            // Following IEEE 754 (2008) 6.3,
            // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
            y.s = ROUNDING_MODE == 3 ? -1 : 1;
            y.c = [y.e = 0];
            return y;
          }
    
          // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
          // for finite x and y.
          return normalise(y, xc, ye);
        };
    
    
        /*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */
        P.modulo = P.mod = function (y, b) {
          var q, s,
            x = this;
    
          y = new BigNumber(y, b);
    
          // Return NaN if x is Infinity or NaN, or y is NaN or zero.
          if (!x.c || !y.s || y.c && !y.c[0]) {
            return new BigNumber(NaN);
    
          // Return x if y is Infinity or x is zero.
          } else if (!y.c || x.c && !x.c[0]) {
            return new BigNumber(x);
          }
    
          if (MODULO_MODE == 9) {
    
            // Euclidian division: q = sign(y) * floor(x / abs(y))
            // r = x - qy    where  0 <= r < abs(y)
            s = y.s;
            y.s = 1;
            q = div(x, y, 0, 3);
            y.s = s;
            q.s *= s;
          } else {
            q = div(x, y, 0, MODULO_MODE);
          }
    
          y = x.minus(q.times(y));
    
          // To match JavaScript %, ensure sign of zero is sign of dividend.
          if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
    
          return y;
        };
    
    
        /*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
         * of BigNumber(y, b).
         */
        P.multipliedBy = P.times = function (y, b) {
          var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
            base, sqrtBase,
            x = this,
            xc = x.c,
            yc = (y = new BigNumber(y, b)).c;
    
          // Either NaN, ±Infinity or ±0?
          if (!xc || !yc || !xc[0] || !yc[0]) {
    
            // Return NaN if either is NaN, or one is 0 and the other is Infinity.
            if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
              y.c = y.e = y.s = null;
            } else {
              y.s *= x.s;
    
              // Return ±Infinity if either is ±Infinity.
              if (!xc || !yc) {
                y.c = y.e = null;
    
              // Return ±0 if either is ±0.
              } else {
                y.c = [0];
                y.e = 0;
              }
            }
    
            return y;
          }
    
          e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
          y.s *= x.s;
          xcL = xc.length;
          ycL = yc.length;
    
          // Ensure xc points to longer array and xcL to its length.
          if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
    
          // Initialise the result array with zeros.
          for (i = xcL + ycL, zc = []; i--; zc.push(0));
    
          base = BASE;
          sqrtBase = SQRT_BASE;
    
          for (i = ycL; --i >= 0;) {
            c = 0;
            ylo = yc[i] % sqrtBase;
            yhi = yc[i] / sqrtBase | 0;
    
            for (k = xcL, j = i + k; j > i;) {
              xlo = xc[--k] % sqrtBase;
              xhi = xc[k] / sqrtBase | 0;
              m = yhi * xlo + xhi * ylo;
              xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
              c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
              zc[j--] = xlo % base;
            }
    
            zc[j] = c;
          }
    
          if (c) {
            ++e;
          } else {
            zc.splice(0, 1);
          }
    
          return normalise(y, zc, e);
        };
    
    
        /*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */
        P.negated = function () {
          var x = new BigNumber(this);
          x.s = -x.s || null;
          return x;
        };
    
    
        /*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */
        P.plus = function (y, b) {
          var t,
            x = this,
            a = x.s;
    
          y = new BigNumber(y, b);
          b = y.s;
    
          // Either NaN?
          if (!a || !b) return new BigNumber(NaN);
    
          // Signs differ?
           if (a != b) {
            y.s = -b;
            return x.minus(y);
          }
    
          var xe = x.e / LOG_BASE,
            ye = y.e / LOG_BASE,
            xc = x.c,
            yc = y.c;
    
          if (!xe || !ye) {
    
            // Return ±Infinity if either ±Infinity.
            if (!xc || !yc) return new BigNumber(a / 0);
    
            // Either zero?
            // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
            if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
          }
    
          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();
    
          // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
          if (a = xe - ye) {
            if (a > 0) {
              ye = xe;
              t = yc;
            } else {
              a = -a;
              t = xc;
            }
    
            t.reverse();
            for (; a--; t.push(0));
            t.reverse();
          }
    
          a = xc.length;
          b = yc.length;
    
          // Point xc to the longer array, and b to the shorter length.
          if (a - b < 0) t = yc, yc = xc, xc = t, b = a;
    
          // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
          for (a = 0; b;) {
            a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
            xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
          }
    
          if (a) {
            xc = [a].concat(xc);
            ++ye;
          }
    
          // No need to check for zero, as +x + +y != 0 && -x + -y != 0
          // ye = MAX_EXP + 1 possible
          return normalise(y, xc, ye);
        };
    
    
        /*
         * If sd is undefined or null or true or false, return the number of significant digits of
         * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
         * If sd is true include integer-part trailing zeros in the count.
         *
         * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
         * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
         * ROUNDING_MODE if rm is omitted.
         *
         * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
         *                     boolean: whether to count integer-part trailing zeros: true or false.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
         */
        P.precision = P.sd = function (sd, rm) {
          var c, n, v,
            x = this;
    
          if (sd != null && sd !== !!sd) {
            intCheck(sd, 1, MAX);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
    
            return round(new BigNumber(x), sd, rm);
          }
    
          if (!(c = x.c)) return null;
          v = c.length - 1;
          n = v * LOG_BASE + 1;
    
          if (v = c[v]) {
    
            // Subtract the number of trailing zeros of the last element.
            for (; v % 10 == 0; v /= 10, n--);
    
            // Add the number of digits of the first element.
            for (v = c[0]; v >= 10; v /= 10, n++);
          }
    
          if (sd && x.e + 1 > n) n = x.e + 1;
    
          return n;
        };
    
    
        /*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
         */
        P.shiftedBy = function (k) {
          intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
          return this.times('1e' + k);
        };
    
    
        /*
         *  sqrt(-n) =  N
         *  sqrt(N) =  N
         *  sqrt(-I) =  N
         *  sqrt(I) =  I
         *  sqrt(0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.squareRoot = P.sqrt = function () {
          var m, n, r, rep, t,
            x = this,
            c = x.c,
            s = x.s,
            e = x.e,
            dp = DECIMAL_PLACES + 4,
            half = new BigNumber('0.5');
    
          // Negative/NaN/Infinity/zero?
          if (s !== 1 || !c || !c[0]) {
            return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
          }
    
          // Initial estimate.
          s = Math.sqrt(+x);
    
          // Math.sqrt underflow/overflow?
          // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
          if (s == 0 || s == 1 / 0) {
            n = coeffToString(c);
            if ((n.length + e) % 2 == 0) n += '0';
            s = Math.sqrt(n);
            e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
    
            if (s == 1 / 0) {
              n = '1e' + e;
            } else {
              n = s.toExponential();
              n = n.slice(0, n.indexOf('e') + 1) + e;
            }
    
            r = new BigNumber(n);
          } else {
            r = new BigNumber(s + '');
          }
    
          // Check for zero.
          // r could be zero if MIN_EXP is changed after the this value was created.
          // This would cause a division by zero (x/t) and hence Infinity below, which would cause
          // coeffToString to throw.
          if (r.c[0]) {
            e = r.e;
            s = e + dp;
            if (s < 3) s = 0;
    
            // Newton-Raphson iteration.
            for (; ;) {
              t = r;
              r = half.times(t.plus(div(x, t, dp, 1)));
    
              if (coeffToString(t.c  ).slice(0, s) === (n =
                 coeffToString(r.c)).slice(0, s)) {
    
                // The exponent of r may here be one less than the final result exponent,
                // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                // are indexed correctly.
                if (r.e < e) --s;
                n = n.slice(s - 3, s + 1);
    
                // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                // iteration.
                if (n == '9999' || !rep && n == '4999') {
    
                  // On the first iteration only, check to see if rounding up gives the
                  // exact result as the nines may infinitely repeat.
                  if (!rep) {
                    round(t, t.e + DECIMAL_PLACES + 2, 0);
    
                    if (t.times(t).eq(x)) {
                      r = t;
                      break;
                    }
                  }
    
                  dp += 4;
                  s += 4;
                  rep = 1;
                } else {
    
                  // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                  // result. If not, then there are further digits and m will be truthy.
                  if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
    
                    // Truncate to the first rounding digit.
                    round(r, r.e + DECIMAL_PLACES + 2, 1);
                    m = !r.times(r).eq(x);
                  }
    
                  break;
                }
              }
            }
          }
    
          return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };
    
    
        /*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
        P.toExponential = function (dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp++;
          }
          return format(this, dp, rm, 1);
        };
    
    
        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
        P.toFixed = function (dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp = dp + this.e + 1;
          }
          return format(this, dp, rm);
        };
    
    
        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the FORMAT object (see BigNumber.set).
         *
         * FORMAT = {
         *      decimalSeparator : '.',
         *      groupSeparator : ',',
         *      groupSize : 3,
         *      secondaryGroupSize : 0,
         *      fractionGroupSeparator : '\xA0',    // non-breaking space
         *      fractionGroupSize : 0
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
        P.toFormat = function (dp, rm) {
          var str = this.toFixed(dp, rm);
    
          if (this.c) {
            var i,
              arr = str.split('.'),
              g1 = +FORMAT.groupSize,
              g2 = +FORMAT.secondaryGroupSize,
              groupSeparator = FORMAT.groupSeparator,
              intPart = arr[0],
              fractionPart = arr[1],
              isNeg = this.s < 0,
              intDigits = isNeg ? intPart.slice(1) : intPart,
              len = intDigits.length;
    
            if (g2) i = g1, g1 = g2, g2 = i, len -= i;
    
            if (g1 > 0 && len > 0) {
              i = len % g1 || g1;
              intPart = intDigits.substr(0, i);
    
              for (; i < len; i += g1) {
                intPart += groupSeparator + intDigits.substr(i, g1);
              }
    
              if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
              if (isNeg) intPart = '-' + intPart;
            }
    
            str = fractionPart
             ? intPart + FORMAT.decimalSeparator + ((g2 = +FORMAT.fractionGroupSize)
              ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
               '$&' + FORMAT.fractionGroupSeparator)
              : fractionPart)
             : intPart;
          }
    
          return str;
        };
    
    
        /*
         * Return a string array representing the value of this BigNumber as a simple fraction with
         * an integer numerator and an integer denominator. The denominator will be a positive
         * non-zero value less than or equal to the specified maximum denominator. If a maximum
         * denominator is not specified, the denominator will be the lowest value necessary to
         * represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
         *
         * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
         */
        P.toFraction = function (md) {
          var arr, d, d0, d1, d2, e, exp, n, n0, n1, q, s,
            x = this,
            xc = x.c;
    
          if (md != null) {
            n = new BigNumber(md);
    
            // Throw if md is less than one or is not an integer, unless it is Infinity.
            if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
              throw Error
                (bignumberError + 'Argument ' +
                  (n.isInteger() ? 'out of range: ' : 'not an integer: ') + md);
            }
          }
    
          if (!xc) return x.toString();
    
          d = new BigNumber(ONE);
          n1 = d0 = new BigNumber(ONE);
          d1 = n0 = new BigNumber(ONE);
          s = coeffToString(xc);
    
          // Determine initial denominator.
          // d is a power of 10 and the minimum max denominator that specifies the value exactly.
          e = d.e = s.length - x.e - 1;
          d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
          md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;
    
          exp = MAX_EXP;
          MAX_EXP = 1 / 0;
          n = new BigNumber(s);
    
          // n0 = d1 = 0
          n0.c[0] = 0;
    
          for (; ;)  {
            q = div(n, d, 0, 1);
            d2 = d0.plus(q.times(d1));
            if (d2.comparedTo(md) == 1) break;
            d0 = d1;
            d1 = d2;
            n1 = n0.plus(q.times(d2 = n1));
            n0 = d2;
            d = n.minus(q.times(d2 = d));
            n = d2;
          }
    
          d2 = div(md.minus(d0), d1, 0, 1);
          n0 = n0.plus(d2.times(n1));
          d0 = d0.plus(d2.times(d1));
          n0.s = n1.s = x.s;
          e *= 2;
    
          // Determine which fraction is closer to x, n0/d0 or n1/d1
          arr = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
             div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1
              ? [n1.toString(), d1.toString()]
              : [n0.toString(), d0.toString()];
    
          MAX_EXP = exp;
          return arr;
        };
    
    
        /*
         * Return the value of this BigNumber converted to a number primitive.
         */
        P.toNumber = function () {
          return +this;
        };
    
    
        /*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
         */
        P.toPrecision = function (sd, rm) {
          if (sd != null) intCheck(sd, 1, MAX);
          return format(this, sd, rm, 2);
        };
    
    
        /*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to ALPHABET.length inclusive.
         *
         * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
         */
        P.toString = function (b) {
          var str,
            n = this,
            s = n.s,
            e = n.e;
    
          // Infinity or NaN?
          if (e === null) {
    
            if (s) {
              str = 'Infinity';
              if (s < 0) str = '-' + str;
            } else {
              str = 'NaN';
            }
          } else {
            str = coeffToString(n.c);
    
            if (b == null) {
              str = e <= TO_EXP_NEG || e >= TO_EXP_POS
               ? toExponential(str, e)
               : toFixedPoint(str, e, '0');
            } else {
              intCheck(b, 2, ALPHABET.length, 'Base');
              str = convertBase(toFixedPoint(str, e, '0'), 10, b, s, true);
            }
    
            if (s < 0 && n.c[0]) str = '-' + str;
          }
    
          return str;
        };
    
    
        /*
         * Return as toString, but do not accept a base argument, and include the minus sign for
         * negative zero.
         */
        P.valueOf = P.toJSON = function () {
          var str,
            n = this,
            e = n.e;
    
          if (e === null) return n.toString();
    
          str = coeffToString(n.c);
    
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
            ? toExponential(str, e)
            : toFixedPoint(str, e, '0');
    
          return n.s < 0 ? '-' + str : str;
        };
    
    
        P._isBigNumber = true;
    
        if (configObject != null) BigNumber.set(configObject);
    
        return BigNumber;
      }
    
    
      // PRIVATE HELPER FUNCTIONS
    
    
      function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
      }
    
    
      // Return a coefficient array as a string of base 10 digits.
      function coeffToString(a) {
        var s, z,
          i = 1,
          j = a.length,
          r = a[0] + '';
    
        for (; i < j;) {
          s = a[i++] + '';
          z = LOG_BASE - s.length;
          for (; z--; s = '0' + s);
          r += s;
        }
    
        // Determine trailing zeros.
        for (j = r.length; r.charCodeAt(--j) === 48;);
        return r.slice(0, j + 1 || 1);
      }
    
    
      // Compare the value of BigNumbers x and y.
      function compare(x, y) {
        var a, b,
          xc = x.c,
          yc = y.c,
          i = x.s,
          j = y.s,
          k = x.e,
          l = y.e;
    
        // Either NaN?
        if (!i || !j) return null;
    
        a = xc && !xc[0];
        b = yc && !yc[0];
    
        // Either zero?
        if (a || b) return a ? b ? 0 : -j : i;
    
        // Signs differ?
        if (i != j) return i;
    
        a = i < 0;
        b = k == l;
    
        // Either Infinity?
        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
    
        // Compare exponents.
        if (!b) return k > l ^ a ? 1 : -1;
    
        j = (k = xc.length) < (l = yc.length) ? k : l;
    
        // Compare digit by digit.
        for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
    
        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
      }
    
    
      /*
       * Check that n is a primitive number, an integer, and in range, otherwise throw.
       */
      function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== (n < 0 ? mathceil(n) : mathfloor(n))) {
          throw Error
           (bignumberError + (name || 'Argument') + (typeof n == 'number'
             ? n < min || n > max ? ' out of range: ' : ' not an integer: '
             : ' not a primitive number: ') + n);
        }
      }
    
    
      function isArray(obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
      }
    
    
      // Assumes finite n.
      function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
      }
    
    
      function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
         (e < 0 ? 'e' : 'e+') + e;
      }
    
    
      function toFixedPoint(str, e, z) {
        var len, zs;
    
        // Negative exponent?
        if (e < 0) {
    
          // Prepend zeros.
          for (zs = z + '.'; ++e; zs += z);
          str = zs + str;
    
        // Positive exponent
        } else {
          len = str.length;
    
          // Append zeros.
          if (++e > len) {
            for (zs = z, e -= len; --e; zs += z);
            str += zs;
          } else if (e < len) {
            str = str.slice(0, e) + '.' + str.slice(e);
          }
        }
    
        return str;
      }
    
    
      // EXPORT
    
    
      BigNumber = clone();
      BigNumber['default'] = BigNumber.BigNumber = BigNumber;
    
      // AMD.
      if (typeof define == 'function' && define.amd) {
        define(function () { return BigNumber; });
    
      // Node.js and other environments that support module.exports.
      } else if (typeof module != 'undefined' && module.exports) {
        module.exports = BigNumber;
    
      // Browser.
      } else {
        if (!globalObject) {
          globalObject = typeof self != 'undefined' && self ? self : window;
        }
    
        globalObject.BigNumber = BigNumber;
      }
    })(this);
    
    },{}],10:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Config_1 = require("./config/Config");
    var index_1 = require("./index");
    var dictionary_1 = require("./dictionary");

    var Seed = /** @class */ (function () {
        function Seed(phrase) {
            if (phrase.length < Config_1.config.get('minimalSeedLength')) {
                throw new Error('Your seed length is less than allowed in config');
            }
            var keys = index_1.utils.crypto.buildKeyPair(phrase);
            this.phrase = phrase;
            this.address = index_1.utils.crypto.buildRawAddress(keys.publicKey);
            this.keyPair = {
                privateKey: index_1.libs.base58.encode(keys.privateKey),
                publicKey: index_1.libs.base58.encode(keys.publicKey)
            };
            Object.freeze(this);
            Object.freeze(this.keyPair);
        }
        Seed.prototype.encrypt = function (password, encryptionRounds) {
            return Seed.encryptSeedPhrase(this.phrase, password, encryptionRounds);
        };
        Seed.encryptSeedPhrase = function (seedPhrase, password, encryptionRounds) {
            if (encryptionRounds === void 0) { encryptionRounds = 5000; }
            if (password && password.length < 8) {
                // logger.warn('Your password may be too weak');
            }
            if (encryptionRounds < 1000) {
                // logger.warn('Encryption rounds may be too few');
            }
            if (seedPhrase.length < Config_1.config.get('minimalSeedLength')) {
                throw new Error('The seed phrase you are trying to encrypt is too short');
            }
            return index_1.utils.crypto.encryptSeed(seedPhrase, password, encryptionRounds);
        };
        Seed.decryptSeedPhrase = function (encryptedSeedPhrase, password, encryptionRounds) {
            if (encryptionRounds === void 0) { encryptionRounds = 5000; }
            var wrongPasswordMessage = 'The password is wrong';
            var phrase;
            try {
                phrase = index_1.utils.crypto.decryptSeed(encryptedSeedPhrase, password, encryptionRounds);
            }
            catch (e) {
                throw new Error(wrongPasswordMessage);
            }
            if (phrase === '' || phrase.length < Config_1.config.get('minimalSeedLength')) {
                throw new Error(wrongPasswordMessage);
            }
            return phrase;
        };
        Seed.create = function (words) {
            if (words === void 0) { words = 15; }
            var phrase = Seed._generateNewSeed(words);
            var minimumSeedLength = Config_1.config.get('minimalSeedLength');
            if (phrase.length < minimumSeedLength) {
                // If you see that error you should increase the number of words in the generated seed
                throw new Error("The resulted seed length is less than the minimum length (" + minimumSeedLength + ")");
            }
            return new Seed(phrase);
        };
        Seed.fromExistingPhrase = function (phrase) {
            var minimumSeedLength = Config_1.config.get('minimalSeedLength');
            if (phrase.length < minimumSeedLength) {
                // If you see that error you should increase the number of words or set it lower in the config
                throw new Error("The resulted seed length is less than the minimum length (" + minimumSeedLength + ")");
            }
            return new Seed(phrase);
        };
        Seed._generateNewSeed = function (length) {
            var random = index_1.utils.crypto.generateRandomUint32Array(length);
            var wordCount = dictionary_1.default.length;
            var phrase = [];
            for (var i = 0; i < length; i++) {
                var wordIndex = random[i] % wordCount;
                phrase.push(dictionary_1.default[wordIndex]);
            }
            random.set(new Uint8Array(random.length));
            return phrase.join(' ');
        };
        return Seed;
    }());
    exports.Seed = Seed;
    
    },{"./config/Config":12,"./dictionary":14,"./index":15}],11:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var data_entities_1 = require("@evestx/data-entities");
    var base64_js_1 = require("base64-js");
    var base58_1 = require("../libs/base58");
    var convert_1 = require("../utils/convert");
    var concat_1 = require("../utils/concat");
    var constants_1 = require("../constants");
    var __1 = require("..");
    var constants_2 = require("../constants");
    // NOTE : eVESTX asset ID in blockchain transactions equals to an empty string
    function blockchainifyAssetId(assetId) {
        if (!assetId)
            throw new Error('Asset ID should not be empty');
        return assetId === constants_2.EVESTX_ID ? constants_2.EVESTX_BLOCKCHAIN_ID : assetId;
    }
    function getAliasBytes(alias) {
        var aliasBytes = convert_1.default.stringToByteArrayWithSize(alias);
        return [constants_2.ALIAS_VERSION, __1.config.getNetworkByte()].concat(aliasBytes);
    }
    // ABSTRACT PARENT
    var ByteProcessor = /** @class */ (function () {
        function ByteProcessor(name) {
            this.name = name;
        }
        return ByteProcessor;
    }());
    exports.ByteProcessor = ByteProcessor;
    // SIMPLE
    var Base58 = /** @class */ (function (_super) {
        __extends(Base58, _super);
        function Base58() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Base58.prototype.process = function (value) {
            var bytes = base58_1.default.decode(value);
            return Promise.resolve(bytes);
        };
        return Base58;
    }(ByteProcessor));
    exports.Base58 = Base58;
    var Base64 = /** @class */ (function (_super) {
        __extends(Base64, _super);
        function Base64() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Base64.prototype.process = function (value) {
            if (typeof value !== 'string')
                throw new Error('You should pass a string to BinaryDataEntry constructor');
            if (value.slice(0, 7) !== 'base64:')
                throw new Error('Blob should be encoded in base64 and prefixed with "base64:"');
            var b64 = value.slice(7); // Getting the string payload
            var bytes = Uint8Array.from(base64_js_1.toByteArray(b64));
            var lengthBytes = Uint8Array.from(convert_1.default.shortToByteArray(bytes.length));
            return Promise.resolve(concat_1.concatUint8Arrays(lengthBytes, bytes));
        };
        return Base64;
    }(ByteProcessor));
    exports.Base64 = Base64;
    var Bool = /** @class */ (function (_super) {
        __extends(Bool, _super);
        function Bool() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Bool.prototype.process = function (value) {
            var bytes = convert_1.default.booleanToBytes(value);
            return Promise.resolve(Uint8Array.from(bytes));
        };
        return Bool;
    }(ByteProcessor));
    exports.Bool = Bool;
    var Byte = /** @class */ (function (_super) {
        __extends(Byte, _super);
        function Byte() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Byte.prototype.process = function (value) {
            if (typeof value !== 'number')
                throw new Error('You should pass a number to Byte constructor');
            if (value < 0 || value > 255)
                throw new Error('Byte value must fit between 0 and 255');
            return Promise.resolve(Uint8Array.from([value]));
        };
        return Byte;
    }(ByteProcessor));
    exports.Byte = Byte;
    var Long = /** @class */ (function (_super) {
        __extends(Long, _super);
        function Long() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Long.prototype.process = function (value) {
            var bytes;
            if (typeof value === 'number') {
                bytes = convert_1.default.longToByteArray(value);
            }
            else {
                if (typeof value === 'string') {
                    value = new data_entities_1.BigNumber(value);
                }
                bytes = convert_1.default.bigNumberToByteArray(value);
            }
            return Promise.resolve(Uint8Array.from(bytes));
        };
        return Long;
    }(ByteProcessor));
    exports.Long = Long;
    var Short = /** @class */ (function (_super) {
        __extends(Short, _super);
        function Short() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Short.prototype.process = function (value) {
            if (typeof value !== 'number')
                throw new Error('You should pass a number to Short constructor');
            if (value < 0 || value > 65535)
                throw new Error('Short value must fit between 0 and 65535');
            return Promise.resolve(Uint8Array.from(convert_1.default.shortToByteArray(value)));
        };
        return Short;
    }(ByteProcessor));
    exports.Short = Short;
    var StringWithLength = /** @class */ (function (_super) {
        __extends(StringWithLength, _super);
        function StringWithLength() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StringWithLength.prototype.process = function (value) {
            var bytesWithLength = convert_1.default.stringToByteArrayWithSize(value);
            return Promise.resolve(Uint8Array.from(bytesWithLength));
        };
        return StringWithLength;
    }(ByteProcessor));
    exports.StringWithLength = StringWithLength;
    // COMPLEX
    var Alias = /** @class */ (function (_super) {
        __extends(Alias, _super);
        function Alias() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Alias.prototype.process = function (value) {
            var aliasBytes = getAliasBytes(value);
            var aliasBytesWithLength = convert_1.default.bytesToByteArrayWithSize(aliasBytes);
            return Promise.resolve(Uint8Array.from(aliasBytesWithLength));
        };
        return Alias;
    }(ByteProcessor));
    exports.Alias = Alias;
    var AssetId = /** @class */ (function (_super) {
        __extends(AssetId, _super);
        function AssetId() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AssetId.prototype.process = function (value) {
            value = blockchainifyAssetId(value);
            // We must pass bytes of `[0]` for eVESTX asset ID and bytes of `[1] + assetId` for other asset IDs
            var bytes = value ? concat_1.concatUint8Arrays(Uint8Array.from([1]), base58_1.default.decode(value)) : Uint8Array.from([0]);
            return Promise.resolve(bytes);
        };
        return AssetId;
    }(ByteProcessor));
    exports.AssetId = AssetId;
    var Attachment = /** @class */ (function (_super) {
        __extends(Attachment, _super);
        function Attachment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Attachment.prototype.process = function (value) {
            if (typeof value === 'string') {
                value = Uint8Array.from(convert_1.default.stringToByteArray(value));
            }
            if (value.length > constants_2.TRANSFER_ATTACHMENT_BYTE_LIMIT) {
                throw new Error('Maximum attachment length is exceeded');
            }
            var valueWithLength = convert_1.default.bytesToByteArrayWithSize(value);
            return Promise.resolve(Uint8Array.from(valueWithLength));
        };
        return Attachment;
    }(ByteProcessor));
    exports.Attachment = Attachment;
    var MandatoryAssetId = /** @class */ (function (_super) {
        __extends(MandatoryAssetId, _super);
        function MandatoryAssetId() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MandatoryAssetId.prototype.process = function (value) {
            value = blockchainifyAssetId(value);
            return Promise.resolve(base58_1.default.decode(value));
        };
        return MandatoryAssetId;
    }(ByteProcessor));
    exports.MandatoryAssetId = MandatoryAssetId;
    var OrderType = /** @class */ (function (_super) {
        __extends(OrderType, _super);
        function OrderType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OrderType.prototype.process = function (value) {
            if (value === 'buy') {
                return Bool.prototype.process.call(this, false);
            }
            else if (value === 'sell') {
                return Bool.prototype.process.call(this, true);
            }
            else {
                throw new Error('There are no other order types besides "buy" and "sell"');
            }
        };
        return OrderType;
    }(ByteProcessor));
    exports.OrderType = OrderType;
    var Recipient = /** @class */ (function (_super) {
        __extends(Recipient, _super);
        function Recipient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Recipient.prototype.process = function (value) {
            if (value.length <= 30) {
                var aliasBytes = getAliasBytes(value);
                return Promise.resolve(Uint8Array.from(aliasBytes));
            }
            else {
                var addressBytes = base58_1.default.decode(value);
                return Promise.resolve(Uint8Array.from(addressBytes));
            }
        };
        return Recipient;
    }(ByteProcessor));
    exports.Recipient = Recipient;
    var Transfers = /** @class */ (function (_super) {
        __extends(Transfers, _super);
        function Transfers() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Transfers.prototype.process = function (values) {
            var recipientProcessor = new Recipient(constants_1.STUB_NAME);
            var amountProcessor = new Long(constants_1.STUB_NAME);
            var promises = [];
            for (var i = 0; i < values.length; i++) {
                promises.push(recipientProcessor.process(values[i].recipient));
                promises.push(amountProcessor.process(values[i].amount));
            }
            return Promise.all(promises).then(function (elements) {
                var length = convert_1.default.shortToByteArray(values.length);
                var lengthBytes = Uint8Array.from(length);
                return concat_1.concatUint8Arrays.apply(void 0, [lengthBytes].concat(elements));
            });
        };
        return Transfers;
    }(ByteProcessor));
    exports.Transfers = Transfers;
    // DATA TRANSACTIONS ONLY
    var INTEGER_DATA_TYPE = 0;
    var BOOLEAN_DATA_TYPE = 1;
    var BINARY_DATA_TYPE = 2;
    var STRING_DATA_TYPE = 3;
    var IntegerDataEntry = /** @class */ (function (_super) {
        __extends(IntegerDataEntry, _super);
        function IntegerDataEntry() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IntegerDataEntry.prototype.process = function (value) {
            return Long.prototype.process.call(this, value).then(function (longBytes) {
                var typeByte = Uint8Array.from([INTEGER_DATA_TYPE]);
                return concat_1.concatUint8Arrays(typeByte, longBytes);
            });
        };
        return IntegerDataEntry;
    }(ByteProcessor));
    exports.IntegerDataEntry = IntegerDataEntry;
    var BooleanDataEntry = /** @class */ (function (_super) {
        __extends(BooleanDataEntry, _super);
        function BooleanDataEntry() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BooleanDataEntry.prototype.process = function (value) {
            return Bool.prototype.process.call(this, value).then(function (boolByte) {
                var typeByte = Uint8Array.from([BOOLEAN_DATA_TYPE]);
                return concat_1.concatUint8Arrays(typeByte, boolByte);
            });
        };
        return BooleanDataEntry;
    }(ByteProcessor));
    exports.BooleanDataEntry = BooleanDataEntry;
    var BinaryDataEntry = /** @class */ (function (_super) {
        __extends(BinaryDataEntry, _super);
        function BinaryDataEntry() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BinaryDataEntry.prototype.process = function (value) {
            return Base64.prototype.process.call(this, value).then(function (binaryBytes) {
                var typeByte = Uint8Array.from([BINARY_DATA_TYPE]);
                return Promise.resolve(concat_1.concatUint8Arrays(typeByte, binaryBytes));
            });
        };
        return BinaryDataEntry;
    }(ByteProcessor));
    exports.BinaryDataEntry = BinaryDataEntry;
    var StringDataEntry = /** @class */ (function (_super) {
        __extends(StringDataEntry, _super);
        function StringDataEntry() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StringDataEntry.prototype.process = function (value) {
            return StringWithLength.prototype.process.call(this, value).then(function (stringBytes) {
                var typeByte = Uint8Array.from([STRING_DATA_TYPE]);
                return concat_1.concatUint8Arrays(typeByte, stringBytes);
            });
        };
        return StringDataEntry;
    }(ByteProcessor));
    exports.StringDataEntry = StringDataEntry;
    var DataEntries = /** @class */ (function (_super) {
        __extends(DataEntries, _super);
        function DataEntries() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DataEntries.prototype.process = function (entries) {
            var _this = this;
            var lengthBytes = Uint8Array.from(convert_1.default.shortToByteArray(entries.length));
            if (entries.length) {
                return Promise.all(entries.map(function (entry) {
                    var prependKeyBytes = function (valueBytes) {
                        return StringWithLength.prototype.process.call(_this, entry.key).then(function (keyBytes) {
                            return concat_1.concatUint8Arrays(keyBytes, valueBytes);
                        });
                    };
                    switch (entry.type) {
                        case 'integer':
                            return IntegerDataEntry.prototype.process.call(_this, entry.value).then(prependKeyBytes);
                        case 'boolean':
                            return BooleanDataEntry.prototype.process.call(_this, entry.value).then(prependKeyBytes);
                        case 'binary':
                            return BinaryDataEntry.prototype.process.call(_this, entry.value).then(prependKeyBytes);
                        case 'string':
                            return StringDataEntry.prototype.process.call(_this, entry.value).then(prependKeyBytes);
                        default:
                            throw new Error("There is no data type \"" + entry.type + "\"");
                    }
                })).then(function (entriesBytes) {
                    var bytes = concat_1.concatUint8Arrays.apply(void 0, [lengthBytes].concat(entriesBytes));
                    if (bytes.length > constants_1.DATA_ENTRIES_BYTE_LIMIT)
                        throw new Error('Data transaction is too large (140KB max)');
                    return bytes;
                });
            }
            else {
                return Promise.resolve(Uint8Array.from([0, 0]));
            }
        };
        return DataEntries;
    }(ByteProcessor));
    exports.DataEntries = DataEntries;
    
    },{"..":15,"../constants":13,"../libs/base58":17,"../utils/concat":23,"../utils/convert":24,"@evestx/data-entities":6,"base64-js":26}],12:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var __1 = require("../");
    var DEFAULT_CONFIG = {
        networkByte: __1.MAINNET_BYTE,
        logLevel: 'warning',
        minimalSeedLength: 15
    };
    var Config = /** @class */ (function () {
        function Config() {
            this.props = Object.assign(Object.create(null), DEFAULT_CONFIG);
        }
        Config.prototype.getNetworkByte = function () {
            return this.props.networkByte;
        };
        Config.prototype.getLogLevel = function () {
            return this.props.logLevel;
        };
        Config.prototype.set = function (config) {
            Object.assign(this.props, config);
        };
        Config.prototype.get = function (key) {
            return this.props[key];
        };
        Config.prototype.clear = function () {
            this.props = Object.assign(Object.create(null), DEFAULT_CONFIG);
        };
        return Config;
    }());
    exports.config = new Config();
    
    },{"../":15}],13:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EVESTX_ID = 'eVESTX';
    exports.EVESTX_BLOCKCHAIN_ID = '';
    exports.MAINNET_BYTE = 139;
    exports.TESTNET_BYTE = 140;
    exports.ADDRESS_VERSION = 3;
    exports.PRIVATE_ADDRESS_VERSION = 23;
    exports.ALIAS_VERSION = 2;
    exports.SET_SCRIPT_LANG_VERSION = 1;
    exports.TRANSFER_ATTACHMENT_BYTE_LIMIT = 140;
    exports.DATA_TX_SIZE_WITHOUT_ENTRIES = 52;
    exports.DATA_ENTRIES_BYTE_LIMIT = 140 * 1024 - exports.DATA_TX_SIZE_WITHOUT_ENTRIES; // 140 kb for the whole tx
    exports.INITIAL_NONCE = 0;
    exports.PRIVATE_KEY_LENGTH = 32;
    exports.PUBLIC_KEY_LENGTH = 32;
    // That is to mark ByteProcessor instances which cannot be affected by user
    exports.STUB_NAME = 'reservedName';
    
    },{}],14:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = [
        'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse', 'access',
        'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act', 'action',
        'actor', 'actress', 'actual', 'adapt', 'add', 'addict', 'address', 'adjust', 'admit', 'adult', 'advance',
        'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'age', 'agent', 'agree', 'ahead', 'aim', 'air',
        'airport', 'aisle', 'alarm', 'album', 'alcohol', 'alert', 'alien', 'all', 'alley', 'allow', 'almost',
        'alone', 'alpha', 'already', 'also', 'alter', 'always', 'amateur', 'amazing', 'among', 'amount', 'amused',
        'analyst', 'anchor', 'ancient', 'anger', 'angle', 'angry', 'animal', 'ankle', 'announce', 'annual',
        'another', 'answer', 'antenna', 'antique', 'anxiety', 'any', 'apart', 'apology', 'appear', 'apple',
        'approve', 'april', 'arch', 'arctic', 'area', 'arena', 'argue', 'arm', 'armed', 'armor', 'army', 'around',
        'arrange', 'arrest', 'arrive', 'arrow', 'art', 'artefact', 'artist', 'artwork', 'ask', 'aspect', 'assault',
        'asset', 'assist', 'assume', 'asthma', 'athlete', 'atom', 'attack', 'attend', 'attitude', 'attract',
        'auction', 'audit', 'august', 'aunt', 'author', 'auto', 'autumn', 'average', 'avocado', 'avoid', 'awake',
        'aware', 'away', 'awesome', 'awful', 'awkward', 'axis', 'baby', 'bachelor', 'bacon', 'badge', 'bag',
        'balance', 'balcony', 'ball', 'bamboo', 'banana', 'banner', 'bar', 'barely', 'bargain', 'barrel', 'base',
        'basic', 'basket', 'battle', 'beach', 'bean', 'beauty', 'because', 'become', 'beef', 'before', 'begin',
        'behave', 'behind', 'believe', 'below', 'belt', 'bench', 'benefit', 'best', 'betray', 'better', 'between',
        'beyond', 'bicycle', 'bid', 'bike', 'bind', 'biology', 'bird', 'birth', 'bitter', 'black', 'blade', 'blame',
        'blanket', 'blast', 'bleak', 'bless', 'blind', 'blood', 'blossom', 'blouse', 'blue', 'blur', 'blush',
        'board', 'boat', 'body', 'boil', 'bomb', 'bone', 'bonus', 'book', 'boost', 'border', 'boring', 'borrow',
        'boss', 'bottom', 'bounce', 'box', 'boy', 'bracket', 'brain', 'brand', 'brass', 'brave', 'bread', 'breeze',
        'brick', 'bridge', 'brief', 'bright', 'bring', 'brisk', 'broccoli', 'broken', 'bronze', 'broom', 'brother',
        'brown', 'brush', 'bubble', 'buddy', 'budget', 'buffalo', 'build', 'bulb', 'bulk', 'bullet', 'bundle',
        'bunker', 'burden', 'burger', 'burst', 'bus', 'business', 'busy', 'butter', 'buyer', 'buzz', 'cabbage',
        'cabin', 'cable', 'cactus', 'cage', 'cake', 'call', 'calm', 'camera', 'camp', 'can', 'canal', 'cancel',
        'candy', 'cannon', 'canoe', 'canvas', 'canyon', 'capable', 'capital', 'captain', 'car', 'carbon', 'card',
        'cargo', 'carpet', 'carry', 'cart', 'case', 'cash', 'casino', 'castle', 'casual', 'cat', 'catalog', 'catch',
        'category', 'cattle', 'caught', 'cause', 'caution', 'cave', 'ceiling', 'celery', 'cement', 'census',
        'century', 'cereal', 'certain', 'chair', 'chalk', 'champion', 'change', 'chaos', 'chapter', 'charge',
        'chase', 'chat', 'cheap', 'check', 'cheese', 'chef', 'cherry', 'chest', 'chicken', 'chief', 'child',
        'chimney', 'choice', 'choose', 'chronic', 'chuckle', 'chunk', 'churn', 'cigar', 'cinnamon', 'circle',
        'citizen', 'city', 'civil', 'claim', 'clap', 'clarify', 'claw', 'clay', 'clean', 'clerk', 'clever', 'click',
        'client', 'cliff', 'climb', 'clinic', 'clip', 'clock', 'clog', 'close', 'cloth', 'cloud', 'clown', 'club',
        'clump', 'cluster', 'clutch', 'coach', 'coast', 'coconut', 'code', 'coffee', 'coil', 'coin', 'collect',
        'color', 'column', 'combine', 'come', 'comfort', 'comic', 'common', 'company', 'concert', 'conduct',
        'confirm', 'congress', 'connect', 'consider', 'control', 'convince', 'cook', 'cool', 'copper', 'copy',
        'coral', 'core', 'corn', 'correct', 'cost', 'cotton', 'couch', 'country', 'couple', 'course', 'cousin',
        'cover', 'coyote', 'crack', 'cradle', 'craft', 'cram', 'crane', 'crash', 'crater', 'crawl', 'crazy',
        'cream', 'credit', 'creek', 'crew', 'cricket', 'crime', 'crisp', 'critic', 'crop', 'cross', 'crouch',
        'crowd', 'crucial', 'cruel', 'cruise', 'crumble', 'crunch', 'crush', 'cry', 'crystal', 'cube', 'culture',
        'cup', 'cupboard', 'curious', 'current', 'curtain', 'curve', 'cushion', 'custom', 'cute', 'cycle', 'dad',
        'damage', 'damp', 'dance', 'danger', 'daring', 'dash', 'daughter', 'dawn', 'day', 'deal', 'debate',
        'debris', 'decade', 'december', 'decide', 'decline', 'decorate', 'decrease', 'deer', 'defense', 'define',
        'defy', 'degree', 'delay', 'deliver', 'demand', 'demise', 'denial', 'dentist', 'deny', 'depart', 'depend',
        'deposit', 'depth', 'deputy', 'derive', 'describe', 'desert', 'design', 'desk', 'despair', 'destroy',
        'detail', 'detect', 'develop', 'device', 'devote', 'diagram', 'dial', 'diamond', 'diary', 'dice', 'diesel',
        'diet', 'differ', 'digital', 'dignity', 'dilemma', 'dinner', 'dinosaur', 'direct', 'dirt', 'disagree',
        'discover', 'disease', 'dish', 'dismiss', 'disorder', 'display', 'distance', 'divert', 'divide', 'divorce',
        'dizzy', 'doctor', 'document', 'dog', 'doll', 'dolphin', 'domain', 'donate', 'donkey', 'donor', 'door',
        'dose', 'double', 'dove', 'draft', 'dragon', 'drama', 'drastic', 'draw', 'dream', 'dress', 'drift', 'drill',
        'drink', 'drip', 'drive', 'drop', 'drum', 'dry', 'duck', 'dumb', 'dune', 'during', 'dust', 'dutch', 'duty',
        'dwarf', 'dynamic', 'eager', 'eagle', 'early', 'earn', 'earth', 'easily', 'east', 'easy', 'echo', 'ecology',
        'economy', 'edge', 'edit', 'educate', 'effort', 'egg', 'eight', 'either', 'elbow', 'elder', 'electric',
        'elegant', 'element', 'elephant', 'elevator', 'elite', 'else', 'embark', 'embody', 'embrace', 'emerge',
        'emotion', 'employ', 'empower', 'empty', 'enable', 'enact', 'end', 'endless', 'endorse', 'enemy', 'energy',
        'enforce', 'engage', 'engine', 'enhance', 'enjoy', 'enlist', 'enough', 'enrich', 'enroll', 'ensure',
        'enter', 'entire', 'entry', 'envelope', 'episode', 'equal', 'equip', 'era', 'erase', 'erode', 'erosion',
        'error', 'erupt', 'escape', 'essay', 'essence', 'estate', 'eternal', 'ethics', 'evidence', 'evil', 'evoke',
        'evolve', 'exact', 'example', 'excess', 'exchange', 'excite', 'exclude', 'excuse', 'execute', 'exercise',
        'exhaust', 'exhibit', 'exile', 'exist', 'exit', 'exotic', 'expand', 'expect', 'expire', 'explain', 'expose',
        'express', 'extend', 'extra', 'eye', 'eyebrow', 'fabric', 'face', 'faculty', 'fade', 'faint', 'faith',
        'fall', 'false', 'fame', 'family', 'famous', 'fan', 'fancy', 'fantasy', 'farm', 'fashion', 'fat', 'fatal',
        'father', 'fatigue', 'fault', 'favorite', 'feature', 'february', 'federal', 'fee', 'feed', 'feel', 'female',
        'fence', 'festival', 'fetch', 'fever', 'few', 'fiber', 'fiction', 'field', 'figure', 'file', 'film',
        'filter', 'final', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fiscal', 'fish', 'fit',
        'fitness', 'fix', 'flag', 'flame', 'flash', 'flat', 'flavor', 'flee', 'flight', 'flip', 'float', 'flock',
        'floor', 'flower', 'fluid', 'flush', 'fly', 'foam', 'focus', 'fog', 'foil', 'fold', 'follow', 'food',
        'foot', 'force', 'forest', 'forget', 'fork', 'fortune', 'forum', 'forward', 'fossil', 'foster', 'found',
        'fox', 'fragile', 'frame', 'frequent', 'fresh', 'friend', 'fringe', 'frog', 'front', 'frost', 'frown',
        'frozen', 'fruit', 'fuel', 'fun', 'funny', 'furnace', 'fury', 'future', 'gadget', 'gain', 'galaxy',
        'gallery', 'game', 'gap', 'garage', 'garbage', 'garden', 'garlic', 'garment', 'gas', 'gasp', 'gate',
        'gather', 'gauge', 'gaze', 'general', 'genius', 'genre', 'gentle', 'genuine', 'gesture', 'ghost', 'giant',
        'gift', 'giggle', 'ginger', 'giraffe', 'girl', 'give', 'glad', 'glance', 'glare', 'glass', 'glide',
        'glimpse', 'globe', 'gloom', 'glory', 'glove', 'glow', 'glue', 'goat', 'goddess', 'gold', 'good', 'goose',
        'gorilla', 'gospel', 'gossip', 'govern', 'gown', 'grab', 'grace', 'grain', 'grant', 'grape', 'grass',
        'gravity', 'great', 'green', 'grid', 'grief', 'grit', 'grocery', 'group', 'grow', 'grunt', 'guard', 'guess',
        'guide', 'guilt', 'guitar', 'gun', 'gym', 'habit', 'hair', 'half', 'hammer', 'hamster', 'hand', 'happy',
        'harbor', 'hard', 'harsh', 'harvest', 'hat', 'have', 'hawk', 'hazard', 'head', 'health', 'heart', 'heavy',
        'hedgehog', 'height', 'hello', 'helmet', 'help', 'hen', 'hero', 'hidden', 'high', 'hill', 'hint', 'hip',
        'hire', 'history', 'hobby', 'hockey', 'hold', 'hole', 'holiday', 'hollow', 'home', 'honey', 'hood', 'hope',
        'horn', 'horror', 'horse', 'hospital', 'host', 'hotel', 'hour', 'hover', 'hub', 'huge', 'human', 'humble',
        'humor', 'hundred', 'hungry', 'hunt', 'hurdle', 'hurry', 'hurt', 'husband', 'hybrid', 'ice', 'icon', 'idea',
        'identify', 'idle', 'ignore', 'ill', 'illegal', 'illness', 'image', 'imitate', 'immense', 'immune',
        'impact', 'impose', 'improve', 'impulse', 'inch', 'include', 'income', 'increase', 'index', 'indicate',
        'indoor', 'industry', 'infant', 'inflict', 'inform', 'inhale', 'inherit', 'initial', 'inject', 'injury',
        'inmate', 'inner', 'innocent', 'input', 'inquiry', 'insane', 'insect', 'inside', 'inspire', 'install',
        'intact', 'interest', 'into', 'invest', 'invite', 'involve', 'iron', 'island', 'isolate', 'issue', 'item',
        'ivory', 'jacket', 'jaguar', 'jar', 'jazz', 'jealous', 'jeans', 'jelly', 'jewel', 'job', 'join', 'joke',
        'journey', 'joy', 'judge', 'juice', 'jump', 'jungle', 'junior', 'junk', 'just', 'kangaroo', 'keen', 'keep',
        'ketchup', 'key', 'kick', 'kid', 'kidney', 'kind', 'kingdom', 'kiss', 'kit', 'kitchen', 'kite', 'kitten',
        'kiwi', 'knee', 'knife', 'knock', 'know', 'lab', 'label', 'labor', 'ladder', 'lady', 'lake', 'lamp',
        'language', 'laptop', 'large', 'later', 'latin', 'laugh', 'laundry', 'lava', 'law', 'lawn', 'lawsuit',
        'layer', 'lazy', 'leader', 'leaf', 'learn', 'leave', 'lecture', 'left', 'leg', 'legal', 'legend', 'leisure',
        'lemon', 'lend', 'length', 'lens', 'leopard', 'lesson', 'letter', 'level', 'liar', 'liberty', 'library',
        'license', 'life', 'lift', 'light', 'like', 'limb', 'limit', 'link', 'lion', 'liquid', 'list', 'little',
        'live', 'lizard', 'load', 'loan', 'lobster', 'local', 'lock', 'logic', 'lonely', 'long', 'loop', 'lottery',
        'loud', 'lounge', 'love', 'loyal', 'lucky', 'luggage', 'lumber', 'lunar', 'lunch', 'luxury', 'lyrics',
        'machine', 'mad', 'magic', 'magnet', 'maid', 'mail', 'main', 'major', 'make', 'mammal', 'man', 'manage',
        'mandate', 'mango', 'mansion', 'manual', 'maple', 'marble', 'march', 'margin', 'marine', 'market',
        'marriage', 'mask', 'mass', 'master', 'match', 'material', 'math', 'matrix', 'matter', 'maximum', 'maze',
        'meadow', 'mean', 'measure', 'meat', 'mechanic', 'medal', 'media', 'melody', 'melt', 'member', 'memory',
        'mention', 'menu', 'mercy', 'merge', 'merit', 'merry', 'mesh', 'message', 'metal', 'method', 'middle',
        'midnight', 'milk', 'million', 'mimic', 'mind', 'minimum', 'minor', 'minute', 'miracle', 'mirror', 'misery',
        'miss', 'mistake', 'mix', 'mixed', 'mixture', 'mobile', 'model', 'modify', 'mom', 'moment', 'monitor',
        'monkey', 'monster', 'month', 'moon', 'moral', 'more', 'morning', 'mosquito', 'mother', 'motion', 'motor',
        'mountain', 'mouse', 'move', 'movie', 'much', 'muffin', 'mule', 'multiply', 'muscle', 'museum', 'mushroom',
        'music', 'must', 'mutual', 'myself', 'mystery', 'myth', 'naive', 'name', 'napkin', 'narrow', 'nasty',
        'nation', 'nature', 'near', 'neck', 'need', 'negative', 'neglect', 'neither', 'nephew', 'nerve', 'nest',
        'net', 'network', 'neutral', 'never', 'news', 'next', 'nice', 'night', 'noble', 'noise', 'nominee',
        'noodle', 'normal', 'north', 'nose', 'notable', 'note', 'nothing', 'notice', 'novel', 'now', 'nuclear',
        'number', 'nurse', 'nut', 'oak', 'obey', 'object', 'oblige', 'obscure', 'observe', 'obtain', 'obvious',
        'occur', 'ocean', 'october', 'odor', 'off', 'offer', 'office', 'often', 'oil', 'okay', 'old', 'olive',
        'olympic', 'omit', 'once', 'one', 'onion', 'online', 'only', 'open', 'opera', 'opinion', 'oppose',
        'option', 'orange', 'orbit', 'orchard', 'order', 'ordinary', 'organ', 'orient', 'original', 'orphan',
        'ostrich', 'other', 'outdoor', 'outer', 'output', 'outside', 'oval', 'oven', 'over', 'own', 'owner',
        'oxygen', 'oyster', 'ozone', 'pact', 'paddle', 'page', 'pair', 'palace', 'palm', 'panda', 'panel', 'panic',
        'panther', 'paper', 'parade', 'parent', 'park', 'parrot', 'party', 'pass', 'patch', 'path', 'patient',
        'patrol', 'pattern', 'pause', 'pave', 'payment', 'peace', 'peanut', 'pear', 'peasant', 'pelican', 'pen',
        'penalty', 'pencil', 'people', 'pepper', 'perfect', 'permit', 'person', 'pet', 'phone', 'photo', 'phrase',
        'physical', 'piano', 'picnic', 'picture', 'piece', 'pig', 'pigeon', 'pill', 'pilot', 'pink', 'pioneer',
        'pipe', 'pistol', 'pitch', 'pizza', 'place', 'planet', 'plastic', 'plate', 'play', 'please', 'pledge',
        'pluck', 'plug', 'plunge', 'poem', 'poet', 'point', 'polar', 'pole', 'police', 'pond', 'pony', 'pool',
        'popular', 'portion', 'position', 'possible', 'post', 'potato', 'pottery', 'poverty', 'powder', 'power',
        'practice', 'praise', 'predict', 'prefer', 'prepare', 'present', 'pretty', 'prevent', 'price', 'pride',
        'primary', 'print', 'priority', 'prison', 'private', 'prize', 'problem', 'process', 'produce', 'profit',
        'program', 'project', 'promote', 'proof', 'property', 'prosper', 'protect', 'proud', 'provide', 'public',
        'pudding', 'pull', 'pulp', 'pulse', 'pumpkin', 'punch', 'pupil', 'puppy', 'purchase', 'purity', 'purpose',
        'purse', 'push', 'put', 'puzzle', 'pyramid', 'quality', 'quantum', 'quarter', 'question', 'quick', 'quit',
        'quiz', 'quote', 'rabbit', 'raccoon', 'race', 'rack', 'radar', 'radio', 'rail', 'rain', 'raise', 'rally',
        'ramp', 'ranch', 'random', 'range', 'rapid', 'rare', 'rate', 'rather', 'raven', 'raw', 'razor', 'ready',
        'real', 'reason', 'rebel', 'rebuild', 'recall', 'receive', 'recipe', 'record', 'recycle', 'reduce',
        'reflect', 'reform', 'refuse', 'region', 'regret', 'regular', 'reject', 'relax', 'release', 'relief',
        'rely', 'remain', 'remember', 'remind', 'remove', 'render', 'renew', 'rent', 'reopen', 'repair', 'repeat',
        'replace', 'report', 'require', 'rescue', 'resemble', 'resist', 'resource', 'response', 'result', 'retire',
        'retreat', 'return', 'reunion', 'reveal', 'review', 'reward', 'rhythm', 'rib', 'ribbon', 'rice', 'rich',
        'ride', 'ridge', 'rifle', 'right', 'rigid', 'ring', 'riot', 'ripple', 'risk', 'ritual', 'rival', 'river',
        'road', 'roast', 'robot', 'robust', 'rocket', 'romance', 'roof', 'rookie', 'room', 'rose', 'rotate',
        'rough', 'round', 'route', 'royal', 'rubber', 'rude', 'rug', 'rule', 'run', 'runway', 'rural', 'sad',
        'saddle', 'sadness', 'safe', 'sail', 'salad', 'salmon', 'salon', 'salt', 'salute', 'same', 'sample', 'sand',
        'satisfy', 'satoshi', 'sauce', 'sausage', 'save', 'say', 'scale', 'scan', 'scare', 'scatter', 'scene',
        'scheme', 'school', 'science', 'scissors', 'scorpion', 'scout', 'scrap', 'screen', 'script', 'scrub', 'sea',
        'search', 'season', 'seat', 'second', 'secret', 'section', 'security', 'seed', 'seek', 'segment', 'select',
        'sell', 'seminar', 'senior', 'sense', 'sentence', 'series', 'service', 'session', 'settle', 'setup',
        'seven', 'shadow', 'shaft', 'shallow', 'share', 'shed', 'shell', 'sheriff', 'shield', 'shift', 'shine',
        'ship', 'shiver', 'shock', 'shoe', 'shoot', 'shop', 'short', 'shoulder', 'shove', 'shrimp', 'shrug',
        'shuffle', 'shy', 'sibling', 'sick', 'side', 'siege', 'sight', 'sign', 'silent', 'silk', 'silly', 'silver',
        'similar', 'simple', 'since', 'sing', 'siren', 'sister', 'situate', 'six', 'size', 'skate', 'sketch', 'ski',
        'skill', 'skin', 'skirt', 'skull', 'slab', 'slam', 'sleep', 'slender', 'slice', 'slide', 'slight', 'slim',
        'slogan', 'slot', 'slow', 'slush', 'small', 'smart', 'smile', 'smoke', 'smooth', 'snack', 'snake', 'snap',
        'sniff', 'snow', 'soap', 'soccer', 'social', 'sock', 'soda', 'soft', 'solar', 'soldier', 'solid',
        'solution', 'solve', 'someone', 'song', 'soon', 'sorry', 'sort', 'soul', 'sound', 'soup', 'source', 'south',
        'space', 'spare', 'spatial', 'spawn', 'speak', 'special', 'speed', 'spell', 'spend', 'sphere', 'spice',
        'spider', 'spike', 'spin', 'spirit', 'split', 'spoil', 'sponsor', 'spoon', 'sport', 'spot', 'spray',
        'spread', 'spring', 'spy', 'square', 'squeeze', 'squirrel', 'stable', 'stadium', 'staff', 'stage', 'stairs',
        'stamp', 'stand', 'start', 'state', 'stay', 'steak', 'steel', 'stem', 'step', 'stereo', 'stick', 'still',
        'sting', 'stock', 'stomach', 'stone', 'stool', 'story', 'stove', 'strategy', 'street', 'strike', 'strong',
        'struggle', 'student', 'stuff', 'stumble', 'style', 'subject', 'submit', 'subway', 'success', 'such',
        'sudden', 'suffer', 'sugar', 'suggest', 'suit', 'summer', 'sun', 'sunny', 'sunset', 'super', 'supply',
        'supreme', 'sure', 'surface', 'surge', 'surprise', 'surround', 'survey', 'suspect', 'sustain', 'swallow',
        'swamp', 'swap', 'swarm', 'swear', 'sweet', 'swift', 'swim', 'swing', 'switch', 'sword', 'symbol',
        'symptom', 'syrup', 'system', 'table', 'tackle', 'tag', 'tail', 'talent', 'talk', 'tank', 'tape', 'target',
        'task', 'taste', 'tattoo', 'taxi', 'teach', 'team', 'tell', 'ten', 'tenant', 'tennis', 'tent', 'term',
        'test', 'text', 'thank', 'that', 'theme', 'then', 'theory', 'there', 'they', 'thing', 'this', 'thought',
        'three', 'thrive', 'throw', 'thumb', 'thunder', 'ticket', 'tide', 'tiger', 'tilt', 'timber', 'time', 'tiny',
        'tip', 'tired', 'tissue', 'title', 'toast', 'tobacco', 'today', 'toddler', 'toe', 'together', 'toilet',
        'token', 'tomato', 'tomorrow', 'tone', 'tongue', 'tonight', 'tool', 'tooth', 'top', 'topic', 'topple',
        'torch', 'tornado', 'tortoise', 'toss', 'total', 'tourist', 'toward', 'tower', 'town', 'toy', 'track',
        'trade', 'traffic', 'tragic', 'train', 'transfer', 'trap', 'trash', 'travel', 'tray', 'treat', 'tree',
        'trend', 'trial', 'tribe', 'trick', 'trigger', 'trim', 'trip', 'trophy', 'trouble', 'truck', 'true',
        'truly', 'trumpet', 'trust', 'truth', 'try', 'tube', 'tuition', 'tumble', 'tuna', 'tunnel', 'turkey',
        'turn', 'turtle', 'twelve', 'twenty', 'twice', 'twin', 'twist', 'two', 'type', 'typical', 'ugly',
        'umbrella', 'unable', 'unaware', 'uncle', 'uncover', 'under', 'undo', 'unfair', 'unfold', 'unhappy',
        'uniform', 'unique', 'unit', 'universe', 'unknown', 'unlock', 'until', 'unusual', 'unveil', 'update',
        'upgrade', 'uphold', 'upon', 'upper', 'upset', 'urban', 'urge', 'usage', 'use', 'used', 'useful', 'useless',
        'usual', 'utility', 'vacant', 'vacuum', 'vague', 'valid', 'valley', 'valve', 'van', 'vanish', 'vapor',
        'various', 'vast', 'vault', 'vehicle', 'velvet', 'vendor', 'venture', 'venue', 'verb', 'verify', 'version',
        'very', 'vessel', 'veteran', 'viable', 'vibrant', 'vicious', 'victory', 'video', 'view', 'village',
        'vintage', 'violin', 'virtual', 'virus', 'visa', 'visit', 'visual', 'vital', 'vivid', 'vocal', 'voice',
        'void', 'volcano', 'volume', 'vote', 'voyage', 'wage', 'wagon', 'wait', 'walk', 'wall', 'walnut', 'want',
        'warfare', 'warm', 'warrior', 'wash', 'wasp', 'waste', 'water', 'wave', 'way', 'wealth', 'weapon', 'wear',
        'weasel', 'weather', 'web', 'wedding', 'weekend', 'weird', 'welcome', 'west', 'wet', 'whale', 'what',
        'wheat', 'wheel', 'when', 'where', 'whip', 'whisper', 'wide', 'width', 'wife', 'wild', 'will', 'win',
        'window', 'wine', 'wing', 'wink', 'winner', 'winter', 'wire', 'wisdom', 'wise', 'wish', 'witness', 'wolf',
        'woman', 'wonder', 'wood', 'wool', 'word', 'work', 'world', 'worry', 'worth', 'wrap', 'wreck', 'wrestle',
        'wrist', 'write', 'wrong', 'yard', 'year', 'yellow', 'you', 'young', 'youth', 'zebra', 'zero', 'zone', 'zoo'
    ];
    
    },{}],15:[function(require,module,exports){
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./constants"));
    __export(require("./byteProcessor/ByteProcessor"));
    __export(require("./config/Config"));
    __export(require("./signatureFactory/SignatureFactory"));
    __export(require("./Seed"));
    __export(require("./dictionary"));
    var base58_1 = require("./libs/base58");
    var converters_1 = require("./libs/converters");
    var axlsign_1 = require("./libs/axlsign");
    var blake2b = require("./libs/blake2b");
    var sha3_1 = require("./libs/sha3");
    var secure_random_1 = require("./libs/secure-random");
    var base64 = require("base64-js");
    var concat_1 = require("./utils/concat");
    var convert_1 = require("./utils/convert");
    var crypto_1 = require("./utils/crypto");
    exports.libs = {
        base64: base64,
        base58: base58_1.default,
        converters: converters_1.default,
        axlsign: axlsign_1.default,
        blake2b: blake2b,
        secureRandom: secure_random_1.default,
        keccak256: sha3_1.keccak256
    };
    exports.utils = {
        concatUint8Arrays: concat_1.concatUint8Arrays,
        convert: convert_1.default,
        crypto: crypto_1.default
    };
    
    },{"./Seed":10,"./byteProcessor/ByteProcessor":11,"./config/Config":12,"./constants":13,"./dictionary":14,"./libs/axlsign":16,"./libs/base58":17,"./libs/blake2b":18,"./libs/converters":19,"./libs/secure-random":20,"./libs/sha3":21,"./signatureFactory/SignatureFactory":22,"./utils/concat":23,"./utils/convert":24,"./utils/crypto":25,"base64-js":26}],16:[function(require,module,exports){
    "use strict";
    // Curve25519 signatures (and also key agreement)
    // like in the early Axolotl.
    //
    // Written by Dmitry Chestnykh.
    // You can use it under MIT or CC0 license.
    Object.defineProperty(exports, "__esModule", { value: true });
    // Curve25519 signatures idea and math by Trevor Perrin
    // https://moderncrypto.org/mail-archive/curves/2014/000205.html
    // Derived from TweetNaCl.js (https://tweetnacl.js.org/)
    // Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
    // Public domain.
    //
    // Implementation derived from TweetNaCl version 20140427.
    // See for details: http://tweetnacl.cr.yp.to/
    var axlsign = Object.create(null);
    var gf = function (init) {
        var i, r = new Float64Array(16);
        if (init)
            for (i = 0; i < init.length; i++)
                r[i] = init[i];
        return r;
    };
    var _0 = new Uint8Array(16);
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var gf0 = gf(), gf1 = gf([1]), _121665 = gf([0xdb41, 1]), D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]), D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]), X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]), Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]), I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);
    function ts64(x, i, h, l) {
        x[i] = (h >> 24) & 0xff;
        x[i + 1] = (h >> 16) & 0xff;
        x[i + 2] = (h >> 8) & 0xff;
        x[i + 3] = h & 0xff;
        x[i + 4] = (l >> 24) & 0xff;
        x[i + 5] = (l >> 16) & 0xff;
        x[i + 6] = (l >> 8) & 0xff;
        x[i + 7] = l & 0xff;
    }
    function vn(x, xi, y, yi, n) {
        var i, d = 0;
        for (i = 0; i < n; i++)
            d |= x[xi + i] ^ y[yi + i];
        return (1 & ((d - 1) >>> 8)) - 1;
    }
    function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
    }
    function set25519(r, a) {
        for (var i = 0; i < 16; i++)
            r[i] = a[i] | 0;
    }
    function car25519(o) {
        var i, v, c = 1;
        for (i = 0; i < 16; i++) {
            v = o[i] + c + 65535;
            c = Math.floor(v / 65536);
            o[i] = v - c * 65536;
        }
        o[0] += c - 1 + 37 * (c - 1);
    }
    function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for (var i = 0; i < 16; i++) {
            t = c & (p[i] ^ q[i]);
            p[i] ^= t;
            q[i] ^= t;
        }
    }
    function pack25519(o, n) {
        var i, j, b;
        var m = gf(), t = gf();
        for (i = 0; i < 16; i++)
            t[i] = n[i];
        car25519(t);
        car25519(t);
        car25519(t);
        for (j = 0; j < 2; j++) {
            m[0] = t[0] - 0xffed;
            for (i = 1; i < 15; i++) {
                m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1);
                m[i - 1] &= 0xffff;
            }
            m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1);
            b = (m[15] >> 16) & 1;
            m[14] &= 0xffff;
            sel25519(t, m, 1 - b);
        }
        for (i = 0; i < 16; i++) {
            o[2 * i] = t[i] & 0xff;
            o[2 * i + 1] = t[i] >> 8;
        }
    }
    function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
    }
    function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
    }
    function unpack25519(o, n) {
        for (var i = 0; i < 16; i++)
            o[i] = n[2 * i] + (n[2 * i + 1] << 8);
        o[15] &= 0x7fff;
    }
    function A(o, a, b) {
        for (var i = 0; i < 16; i++)
            o[i] = a[i] + b[i];
    }
    function Z(o, a, b) {
        for (var i = 0; i < 16; i++)
            o[i] = a[i] - b[i];
    }
    function M(o, a, b) {
        var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        // t15 left as is
        // first car
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        // second car
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o[0] = t0;
        o[1] = t1;
        o[2] = t2;
        o[3] = t3;
        o[4] = t4;
        o[5] = t5;
        o[6] = t6;
        o[7] = t7;
        o[8] = t8;
        o[9] = t9;
        o[10] = t10;
        o[11] = t11;
        o[12] = t12;
        o[13] = t13;
        o[14] = t14;
        o[15] = t15;
    }
    function S(o, a) {
        M(o, a, a);
    }
    function inv25519(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++)
            c[a] = i[a];
        for (a = 253; a >= 0; a--) {
            S(c, c);
            if (a !== 2 && a !== 4)
                M(c, c, i);
        }
        for (a = 0; a < 16; a++)
            o[a] = c[a];
    }
    function pow2523(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++)
            c[a] = i[a];
        for (a = 250; a >= 0; a--) {
            S(c, c);
            if (a !== 1)
                M(c, c, i);
        }
        for (a = 0; a < 16; a++)
            o[a] = c[a];
    }
    function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80);
        var r, i;
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
        for (i = 0; i < 31; i++)
            z[i] = n[i];
        z[31] = (n[31] & 127) | 64;
        z[0] &= 248;
        unpack25519(x, p);
        for (i = 0; i < 16; i++) {
            b[i] = x[i];
            d[i] = a[i] = c[i] = 0;
        }
        a[0] = d[0] = 1;
        for (i = 254; i >= 0; --i) {
            r = (z[i >>> 3] >>> (i & 7)) & 1;
            sel25519(a, b, r);
            sel25519(c, d, r);
            A(e, a, c);
            Z(a, a, c);
            A(c, b, d);
            Z(b, b, d);
            S(d, e);
            S(f, a);
            M(a, c, a);
            M(c, b, e);
            A(e, a, c);
            Z(a, a, c);
            S(b, a);
            Z(c, d, f);
            M(a, c, _121665);
            A(a, a, d);
            M(c, c, a);
            M(a, d, f);
            M(d, b, x);
            S(b, e);
            sel25519(a, b, r);
            sel25519(c, d, r);
        }
        for (i = 0; i < 16; i++) {
            x[i + 16] = a[i];
            x[i + 32] = c[i];
            x[i + 48] = b[i];
            x[i + 64] = d[i];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
    }
    function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
    }
    var K = [
        0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
        0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
        0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
        0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
        0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
        0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
        0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
        0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
        0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
        0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
        0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
        0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
        0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
        0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
        0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
        0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
        0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
        0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
        0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
        0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
        0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
        0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
        0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
        0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
        0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
        0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
        0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
        0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
        0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
        0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
        0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
        0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
        0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
        0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
        0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
        0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
        0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
        0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
        0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
        0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
    ];
    function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16);
        var bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while (n >= 128) {
            for (i = 0; i < 16; i++) {
                j = 8 * i + pos;
                wh[i] = (m[j + 0] << 24) | (m[j + 1] << 16) | (m[j + 2] << 8) | m[j + 3];
                wl[i] = (m[j + 4] << 24) | (m[j + 5] << 16) | (m[j + 6] << 8) | m[j + 7];
            }
            for (i = 0; i < 80; i++) {
                bh0 = ah0;
                bh1 = ah1;
                bh2 = ah2;
                bh3 = ah3;
                bh4 = ah4;
                bh5 = ah5;
                bh6 = ah6;
                bh7 = ah7;
                bl0 = al0;
                bl1 = al1;
                bl2 = al2;
                bl3 = al3;
                bl4 = al4;
                bl5 = al5;
                bl6 = al6;
                bl7 = al7;
                // add
                h = ah7;
                l = al7;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                // Sigma1
                h = ((ah4 >>> 14) | (al4 << (32 - 14))) ^ ((ah4 >>> 18) | (al4 << (32 - 18))) ^ ((al4 >>> (41 - 32)) | (ah4 << (32 - (41 - 32))));
                l = ((al4 >>> 14) | (ah4 << (32 - 14))) ^ ((al4 >>> 18) | (ah4 << (32 - 18))) ^ ((ah4 >>> (41 - 32)) | (al4 << (32 - (41 - 32))));
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // Ch
                h = (ah4 & ah5) ^ (~ah4 & ah6);
                l = (al4 & al5) ^ (~al4 & al6);
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // K
                h = K[i * 2];
                l = K[i * 2 + 1];
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // w
                h = wh[i % 16];
                l = wl[i % 16];
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                th = c & 0xffff | d << 16;
                tl = a & 0xffff | b << 16;
                // add
                h = th;
                l = tl;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                // Sigma0
                h = ((ah0 >>> 28) | (al0 << (32 - 28))) ^ ((al0 >>> (34 - 32)) | (ah0 << (32 - (34 - 32)))) ^ ((al0 >>> (39 - 32)) | (ah0 << (32 - (39 - 32))));
                l = ((al0 >>> 28) | (ah0 << (32 - 28))) ^ ((ah0 >>> (34 - 32)) | (al0 << (32 - (34 - 32)))) ^ ((ah0 >>> (39 - 32)) | (al0 << (32 - (39 - 32))));
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // Maj
                h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
                l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                bh7 = (c & 0xffff) | (d << 16);
                bl7 = (a & 0xffff) | (b << 16);
                // add
                h = bh3;
                l = bl3;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                h = th;
                l = tl;
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                bh3 = (c & 0xffff) | (d << 16);
                bl3 = (a & 0xffff) | (b << 16);
                ah1 = bh0;
                ah2 = bh1;
                ah3 = bh2;
                ah4 = bh3;
                ah5 = bh4;
                ah6 = bh5;
                ah7 = bh6;
                ah0 = bh7;
                al1 = bl0;
                al2 = bl1;
                al3 = bl2;
                al4 = bl3;
                al5 = bl4;
                al6 = bl5;
                al7 = bl6;
                al0 = bl7;
                if (i % 16 === 15) {
                    for (j = 0; j < 16; j++) {
                        // add
                        h = wh[j];
                        l = wl[j];
                        a = l & 0xffff;
                        b = l >>> 16;
                        c = h & 0xffff;
                        d = h >>> 16;
                        h = wh[(j + 9) % 16];
                        l = wl[(j + 9) % 16];
                        a += l & 0xffff;
                        b += l >>> 16;
                        c += h & 0xffff;
                        d += h >>> 16;
                        // sigma0
                        th = wh[(j + 1) % 16];
                        tl = wl[(j + 1) % 16];
                        h = ((th >>> 1) | (tl << (32 - 1))) ^ ((th >>> 8) | (tl << (32 - 8))) ^ (th >>> 7);
                        l = ((tl >>> 1) | (th << (32 - 1))) ^ ((tl >>> 8) | (th << (32 - 8))) ^ ((tl >>> 7) | (th << (32 - 7)));
                        a += l & 0xffff;
                        b += l >>> 16;
                        c += h & 0xffff;
                        d += h >>> 16;
                        // sigma1
                        th = wh[(j + 14) % 16];
                        tl = wl[(j + 14) % 16];
                        h = ((th >>> 19) | (tl << (32 - 19))) ^ ((tl >>> (61 - 32)) | (th << (32 - (61 - 32)))) ^ (th >>> 6);
                        l = ((tl >>> 19) | (th << (32 - 19))) ^ ((th >>> (61 - 32)) | (tl << (32 - (61 - 32)))) ^ ((tl >>> 6) | (th << (32 - 6)));
                        a += l & 0xffff;
                        b += l >>> 16;
                        c += h & 0xffff;
                        d += h >>> 16;
                        b += a >>> 16;
                        c += b >>> 16;
                        d += c >>> 16;
                        wh[j] = (c & 0xffff) | (d << 16);
                        wl[j] = (a & 0xffff) | (b << 16);
                    }
                }
            }
            // add
            h = ah0;
            l = al0;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[0];
            l = hl[0];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[0] = ah0 = (c & 0xffff) | (d << 16);
            hl[0] = al0 = (a & 0xffff) | (b << 16);
            h = ah1;
            l = al1;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[1];
            l = hl[1];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[1] = ah1 = (c & 0xffff) | (d << 16);
            hl[1] = al1 = (a & 0xffff) | (b << 16);
            h = ah2;
            l = al2;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[2];
            l = hl[2];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[2] = ah2 = (c & 0xffff) | (d << 16);
            hl[2] = al2 = (a & 0xffff) | (b << 16);
            h = ah3;
            l = al3;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[3];
            l = hl[3];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[3] = ah3 = (c & 0xffff) | (d << 16);
            hl[3] = al3 = (a & 0xffff) | (b << 16);
            h = ah4;
            l = al4;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[4];
            l = hl[4];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[4] = ah4 = (c & 0xffff) | (d << 16);
            hl[4] = al4 = (a & 0xffff) | (b << 16);
            h = ah5;
            l = al5;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[5];
            l = hl[5];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[5] = ah5 = (c & 0xffff) | (d << 16);
            hl[5] = al5 = (a & 0xffff) | (b << 16);
            h = ah6;
            l = al6;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[6];
            l = hl[6];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[6] = ah6 = (c & 0xffff) | (d << 16);
            hl[6] = al6 = (a & 0xffff) | (b << 16);
            h = ah7;
            l = al7;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[7];
            l = hl[7];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[7] = ah7 = (c & 0xffff) | (d << 16);
            hl[7] = al7 = (a & 0xffff) | (b << 16);
            pos += 128;
            n -= 128;
        }
        return n;
    }
    function crypto_hash(out, m, n) {
        var hh = new Int32Array(8);
        var hl = new Int32Array(8);
        var x = new Uint8Array(256);
        var i, b = n;
        hh[0] = 0x6a09e667;
        hh[1] = 0xbb67ae85;
        hh[2] = 0x3c6ef372;
        hh[3] = 0xa54ff53a;
        hh[4] = 0x510e527f;
        hh[5] = 0x9b05688c;
        hh[6] = 0x1f83d9ab;
        hh[7] = 0x5be0cd19;
        hl[0] = 0xf3bcc908;
        hl[1] = 0x84caa73b;
        hl[2] = 0xfe94f82b;
        hl[3] = 0x5f1d36f1;
        hl[4] = 0xade682d1;
        hl[5] = 0x2b3e6c1f;
        hl[6] = 0xfb41bd6b;
        hl[7] = 0x137e2179;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for (i = 0; i < n; i++)
            x[i] = m[b - n + i];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, (b / 0x20000000) | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for (i = 0; i < 8; i++)
            ts64(out, 8 * i, hh[i], hl[i]);
        return 0;
    }
    function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p[0], p[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c, p[3], q[3]);
        M(c, c, D2);
        M(d, p[2], q[2]);
        A(d, d, d);
        Z(e, b, a);
        Z(f, d, c);
        A(g, d, c);
        A(h, b, a);
        M(p[0], e, f);
        M(p[1], h, g);
        M(p[2], g, f);
        M(p[3], e, h);
    }
    function cswap(p, q, b) {
        for (var i = 0; i < 4; i++) {
            sel25519(p[i], q[i], b);
        }
    }
    function pack(r, p) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M(tx, p[0], zi);
        M(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p, q, s) {
        var b, i;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for (i = 255; i >= 0; --i) {
            b = (s[(i / 8) | 0] >> (i & 7)) & 1;
            cswap(p, q, b);
            add(q, p);
            add(p, p);
            cswap(p, q, b);
        }
    }
    function scalarbase(p, s) {
        var q = [gf(), gf(), gf(), gf()];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p, q, s);
    }
    var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);
    function modL(r, x) {
        var carry, i, j, k;
        for (i = 63; i >= 32; --i) {
            carry = 0;
            for (j = i - 32, k = i - 12; j < k; ++j) {
                x[j] += carry - 16 * x[i] * L[j - (i - 32)];
                carry = (x[j] + 128) >> 8;
                x[j] -= carry * 256;
            }
            x[j] += carry;
            x[i] = 0;
        }
        carry = 0;
        for (j = 0; j < 32; j++) {
            x[j] += carry - (x[31] >> 4) * L[j];
            carry = x[j] >> 8;
            x[j] &= 255;
        }
        for (j = 0; j < 32; j++)
            x[j] -= carry * L[j];
        for (i = 0; i < 32; i++) {
            x[i + 1] += x[i] >> 8;
            r[i] = x[i] & 255;
        }
    }
    function reduce(r) {
        var x = new Float64Array(64);
        var i;
        for (i = 0; i < 64; i++)
            x[i] = r[i];
        for (i = 0; i < 64; i++)
            r[i] = 0;
        modL(r, x);
    }
    // Like crypto_sign, but uses secret key directly in hash.
    function crypto_sign_direct(sm, m, n, sk) {
        var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var x = new Float64Array(64);
        var p = [gf(), gf(), gf(), gf()];
        var i, j;
        for (i = 0; i < n; i++)
            sm[64 + i] = m[i];
        for (i = 0; i < 32; i++)
            sm[32 + i] = sk[i];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for (i = 0; i < 32; i++)
            sm[i + 32] = sk[32 + i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for (i = 0; i < 64; i++)
            x[i] = 0;
        for (i = 0; i < 32; i++)
            x[i] = r[i];
        for (i = 0; i < 32; i++) {
            for (j = 0; j < 32; j++) {
                x[i + j] += h[i] * sk[j];
            }
        }
        modL(sm.subarray(32), x);
        return n + 64;
    }
    // Note: sm must be n+128.
    function crypto_sign_direct_rnd(sm, m, n, sk, rnd) {
        var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var x = new Float64Array(64);
        var p = [gf(), gf(), gf(), gf()];
        var i, j;
        // Hash separation.
        sm[0] = 0xfe;
        for (i = 1; i < 32; i++)
            sm[i] = 0xff;
        // Secret key.
        for (i = 0; i < 32; i++)
            sm[32 + i] = sk[i];
        // Message.
        for (i = 0; i < n; i++)
            sm[64 + i] = m[i];
        // Random suffix.
        for (i = 0; i < 64; i++)
            sm[n + 64 + i] = rnd[i];
        crypto_hash(r, sm, n + 128);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for (i = 0; i < 32; i++)
            sm[i + 32] = sk[32 + i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        // Wipe out random suffix.
        for (i = 0; i < 64; i++)
            sm[n + 64 + i] = 0;
        for (i = 0; i < 64; i++)
            x[i] = 0;
        for (i = 0; i < 32; i++)
            x[i] = r[i];
        for (i = 0; i < 32; i++) {
            for (j = 0; j < 32; j++) {
                x[i + j] += h[i] * sk[j];
            }
        }
        modL(sm.subarray(32, n + 64), x);
        return n + 64;
    }
    function curve25519_sign(sm, m, n, sk, opt_rnd) {
        // If opt_rnd is provided, sm must have n + 128,
        // otherwise it must have n + 64 bytes.
        // Convert Curve25519 secret key into Ed25519 secret key (includes pub key).
        var edsk = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()];
        for (var i = 0; i < 32; i++)
            edsk[i] = sk[i];
        // Ensure private key is in the correct format.
        edsk[0] &= 248;
        edsk[31] &= 127;
        edsk[31] |= 64;
        scalarbase(p, edsk);
        pack(edsk.subarray(32), p);
        // Remember sign bit.
        var signBit = edsk[63] & 128;
        var smlen;
        if (opt_rnd) {
            smlen = crypto_sign_direct_rnd(sm, m, n, edsk, opt_rnd);
        }
        else {
            smlen = crypto_sign_direct(sm, m, n, edsk);
        }
        // Copy sign bit from public key into signature.
        sm[63] |= signBit;
        return smlen;
    }
    function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num))
            M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num))
            return -1;
        if (par25519(r[0]) === (p[31] >> 7))
            Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
    }
    function crypto_sign_open(m, sm, n, pk) {
        var i, mlen;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
        mlen = -1;
        if (n < 64)
            return -1;
        if (unpackneg(q, pk))
            return -1;
        for (i = 0; i < n; i++)
            m[i] = sm[i];
        for (i = 0; i < 32; i++)
            m[i + 32] = pk[i];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p, q, h);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
            for (i = 0; i < n; i++)
                m[i] = 0;
            return -1;
        }
        for (i = 0; i < n; i++)
            m[i] = sm[i + 64];
        mlen = n;
        return mlen;
    }
    // Converts Curve25519 public key back to Ed25519 public key.
    // edwardsY = (montgomeryX - 1) / (montgomeryX + 1)
    function convertPublicKey(pk) {
        var z = new Uint8Array(32), x = gf(), a = gf(), b = gf();
        unpack25519(x, pk);
        A(a, x, gf1);
        Z(b, x, gf1);
        inv25519(a, a);
        M(a, a, b);
        pack25519(z, a);
        return z;
    }
    function curve25519_sign_open(m, sm, n, pk) {
        // Convert Curve25519 public key into Ed25519 public key.
        var edpk = convertPublicKey(pk);
        // Restore sign bit from signature.
        edpk[31] |= sm[63] & 128;
        // Remove sign bit from signature.
        sm[63] &= 127;
        // Verify signed message.
        return crypto_sign_open(m, sm, n, edpk);
    }
    /* High-level API */
    function checkArrayTypes() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var t, i;
        for (i = 0; i < arguments.length; i++) {
            if ((t = Object.prototype.toString.call(arguments[i])) !== '[object Uint8Array]')
                throw new TypeError('unexpected type ' + t + ', use Uint8Array');
        }
    }
    axlsign.sharedKey = function (secretKey, publicKey) {
        checkArrayTypes(publicKey, secretKey);
        if (publicKey.length !== 32)
            throw new Error('wrong public key length');
        if (secretKey.length !== 32)
            throw new Error('wrong secret key length');
        var sharedKey = new Uint8Array(32);
        crypto_scalarmult(sharedKey, secretKey, publicKey);
        return sharedKey;
    };
    axlsign.signMessage = function (secretKey, msg, opt_random) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== 32)
            throw new Error('wrong secret key length');
        if (opt_random) {
            checkArrayTypes(opt_random);
            if (opt_random.length !== 64)
                throw new Error('wrong random data length');
            var buf = new Uint8Array(128 + msg.length);
            curve25519_sign(buf, msg, msg.length, secretKey, opt_random);
            return new Uint8Array(buf.subarray(0, 64 + msg.length));
        }
        else {
            var signedMsg = new Uint8Array(64 + msg.length);
            curve25519_sign(signedMsg, msg, msg.length, secretKey);
            return signedMsg;
        }
    };
    axlsign.openMessage = function (publicKey, signedMsg) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== 32)
            throw new Error('wrong public key length');
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = curve25519_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0)
            return null;
        var m = new Uint8Array(mlen);
        for (var i = 0; i < m.length; i++)
            m[i] = tmp[i];
        return m;
    };
    axlsign.sign = function (secretKey, msg, opt_random) {
        checkArrayTypes(secretKey, msg);
        if (secretKey.length !== 32)
            throw new Error('wrong secret key length');
        if (opt_random) {
            checkArrayTypes(opt_random);
            if (opt_random.length !== 64)
                throw new Error('wrong random data length');
        }
        var buf = new Uint8Array((opt_random ? 128 : 64) + msg.length);
        curve25519_sign(buf, msg, msg.length, secretKey, opt_random);
        var signature = new Uint8Array(64);
        for (var i = 0; i < signature.length; i++)
            signature[i] = buf[i];
        return signature;
    };
    axlsign.verify = function (publicKey, msg, signature) {
        checkArrayTypes(msg, signature, publicKey);
        if (signature.length !== 64)
            throw new Error('wrong signature length');
        if (publicKey.length !== 32)
            throw new Error('wrong public key length');
        var sm = new Uint8Array(64 + msg.length);
        var m = new Uint8Array(64 + msg.length);
        var i;
        for (i = 0; i < 64; i++)
            sm[i] = signature[i];
        for (i = 0; i < msg.length; i++)
            sm[i + 64] = msg[i];
        return (curve25519_sign_open(m, sm, sm.length, publicKey) >= 0);
    };
    axlsign.generateKeyPair = function (seed) {
        checkArrayTypes(seed);
        if (seed.length !== 32)
            throw new Error('wrong seed length');
        var sk = new Uint8Array(32);
        var pk = new Uint8Array(32);
        for (var i = 0; i < 32; i++)
            sk[i] = seed[i];
        crypto_scalarmult_base(pk, sk);
        // Turn secret key into the correct format.
        sk[0] &= 248;
        sk[31] &= 127;
        sk[31] |= 64;
        // Remove sign bit from public key.
        pk[31] &= 127;
        return {
            public: pk,
            private: sk
        };
    };
    exports.default = axlsign;
    
    },{}],17:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    var ALPHABET_MAP = ALPHABET.split('').reduce(function (map, c, i) {
        map[c] = i;
        return map;
    }, {});
    exports.default = {
        encode: function (buffer) {
            if (!buffer.length)
                return '';
            var digits = [0];
            for (var i = 0; i < buffer.length; i++) {
                for (var j = 0; j < digits.length; j++) {
                    digits[j] <<= 8;
                }
                digits[0] += buffer[i];
                var carry = 0;
                for (var k = 0; k < digits.length; k++) {
                    digits[k] += carry;
                    carry = (digits[k] / 58) | 0;
                    digits[k] %= 58;
                }
                while (carry) {
                    digits.push(carry % 58);
                    carry = (carry / 58) | 0;
                }
            }
            for (var i = 0; buffer[i] === 0 && i < buffer.length - 1; i++) {
                digits.push(0);
            }
            return digits.reverse().map(function (digit) {
                return ALPHABET[digit];
            }).join('');
        },
        decode: function (string) {
            if (!string.length)
                return new Uint8Array(0);
            var bytes = [0];
            for (var i = 0; i < string.length; i++) {
                var c = string[i];
                if (!(c in ALPHABET_MAP)) {
                    throw "There is no character \"" + c + "\" in the Base58 sequence!";
                }
                for (var j = 0; j < bytes.length; j++) {
                    bytes[j] *= 58;
                }
                bytes[0] += ALPHABET_MAP[c];
                var carry = 0;
                for (var j = 0; j < bytes.length; j++) {
                    bytes[j] += carry;
                    carry = bytes[j] >> 8;
                    bytes[j] &= 0xff;
                }
                while (carry) {
                    bytes.push(carry & 0xff);
                    carry >>= 8;
                }
            }
            for (var i = 0; string[i] === '1' && i < string.length - 1; i++) {
                bytes.push(0);
            }
            return new Uint8Array(bytes.reverse());
        }
    };
    
    },{}],18:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ERROR_MSG_INPUT = 'Input must be an string, Buffer or Uint8Array';
    // For convenience, let people hash a string, not just a Uint8Array
    function normalizeInput(input) {
        var ret;
        if (input instanceof Uint8Array) {
            ret = input;
        }
        else if (input instanceof Buffer) {
            ret = new Uint8Array(input);
        }
        else if (typeof (input) === 'string') {
            ret = new Uint8Array(Buffer.from(input, 'utf8'));
        }
        else {
            throw new Error(ERROR_MSG_INPUT);
        }
        return ret;
    }
    // Converts a Uint8Array to a hexadecimal string
    // For example, toHex([255, 0, 255]) returns "ff00ff"
    function toHex(bytes) {
        return Array.prototype.map.call(bytes, function (n) {
            return (n < 16 ? '0' : '') + n.toString(16);
        }).join('');
    }
    // Converts any value in [0...2^32-1] to an 8-character hex string
    function uint32ToHex(val) {
        return (0x100000000 + val).toString(16).substring(1);
    }
    // For debugging: prints out hash state in the same format as the RFC
    // sample computation exactly, so that you can diff
    function debugPrint(label, arr, size) {
        var msg = '\n' + label + ' = ';
        for (var i = 0; i < arr.length; i += 2) {
            if (size === 32) {
                msg += uint32ToHex(arr[i]).toUpperCase();
                msg += ' ';
                msg += uint32ToHex(arr[i + 1]).toUpperCase();
            }
            else if (size === 64) {
                msg += uint32ToHex(arr[i + 1]).toUpperCase();
                msg += uint32ToHex(arr[i]).toUpperCase();
            }
            else
                throw new Error('Invalid size ' + size);
            if (i % 6 === 4) {
                msg += '\n' + new Array(label.length + 4).join(' ');
            }
            else if (i < arr.length - 2) {
                msg += ' ';
            }
        }
    }
    // For performance testing: generates N bytes of input, hashes M times
    // Measures and prints MB/second hash performance each time
    function testSpeed(hashFn, N, M) {
        var startMs = new Date().getTime();
        var input = new Uint8Array(N);
        for (var i = 0; i < N; i++) {
            input[i] = i % 256;
        }
        var genMs = new Date().getTime();
        startMs = genMs;
        for (i = 0; i < M; i++) {
            var hashHex = hashFn(input);
            var hashMs = new Date().getTime();
            var ms = hashMs - startMs;
            startMs = hashMs;
        }
    }
    // Blake2B in pure Javascript
    // Adapted from the reference implementation in RFC7693
    // Ported to Javascript by DC - https://github.com/dcposch
    // 64-bit unsigned addition
    // Sets v[a,a+1] += v[b,b+1]
    // v should be a Uint32Array
    function ADD64AA(v, a, b) {
        var o0 = v[a] + v[b];
        var o1 = v[a + 1] + v[b + 1];
        if (o0 >= 0x100000000) {
            o1++;
        }
        v[a] = o0;
        v[a + 1] = o1;
    }
    // 64-bit unsigned addition
    // Sets v[a,a+1] += b
    // b0 is the low 32 bits of b, b1 represents the high 32 bits
    function ADD64AC(v, a, b0, b1) {
        var o0 = v[a] + b0;
        if (b0 < 0) {
            o0 += 0x100000000;
        }
        var o1 = v[a + 1] + b1;
        if (o0 >= 0x100000000) {
            o1++;
        }
        v[a] = o0;
        v[a + 1] = o1;
    }
    // Little-endian byte access
    function B2B_GET32(arr, i) {
        return (arr[i] ^
            (arr[i + 1] << 8) ^
            (arr[i + 2] << 16) ^
            (arr[i + 3] << 24));
    }
    // G Mixing function
    // The ROTRs are inlined for speed
    function B2B_G(a, b, c, d, ix, iy) {
        var x0 = m[ix];
        var x1 = m[ix + 1];
        var y0 = m[iy];
        var y1 = m[iy + 1];
        ADD64AA(v, a, b); // v[a,a+1] += v[b,b+1] ... in JS we must store a uint64 as two uint32s
        ADD64AC(v, a, x0, x1); // v[a, a+1] += x ... x0 is the low 32 bits of x, x1 is the high 32 bits
        // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated to the right by 32 bits
        var xor0 = v[d] ^ v[a];
        var xor1 = v[d + 1] ^ v[a + 1];
        v[d] = xor1;
        v[d + 1] = xor0;
        ADD64AA(v, c, d);
        // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 24 bits
        xor0 = v[b] ^ v[c];
        xor1 = v[b + 1] ^ v[c + 1];
        v[b] = (xor0 >>> 24) ^ (xor1 << 8);
        v[b + 1] = (xor1 >>> 24) ^ (xor0 << 8);
        ADD64AA(v, a, b);
        ADD64AC(v, a, y0, y1);
        // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated right by 16 bits
        xor0 = v[d] ^ v[a];
        xor1 = v[d + 1] ^ v[a + 1];
        v[d] = (xor0 >>> 16) ^ (xor1 << 16);
        v[d + 1] = (xor1 >>> 16) ^ (xor0 << 16);
        ADD64AA(v, c, d);
        // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 63 bits
        xor0 = v[b] ^ v[c];
        xor1 = v[b + 1] ^ v[c + 1];
        v[b] = (xor1 >>> 31) ^ (xor0 << 1);
        v[b + 1] = (xor0 >>> 31) ^ (xor1 << 1);
    }
    // Initialization Vector
    var BLAKE2B_IV32 = new Uint32Array([
        0xF3BCC908, 0x6A09E667, 0x84CAA73B, 0xBB67AE85,
        0xFE94F82B, 0x3C6EF372, 0x5F1D36F1, 0xA54FF53A,
        0xADE682D1, 0x510E527F, 0x2B3E6C1F, 0x9B05688C,
        0xFB41BD6B, 0x1F83D9AB, 0x137E2179, 0x5BE0CD19
    ]);
    var SIGMA8 = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
        11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4,
        7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
        9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
        2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
        12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11,
        13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
        6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5,
        10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3
    ];
    // These are offsets into a uint64 buffer.
    // Multiply them all by 2 to make them offsets into a uint32 buffer,
    // because this is Javascript and we don't have uint64s
    var SIGMA82 = new Uint8Array(SIGMA8.map(function (x) {
        return x * 2;
    }));
    // Compression function. 'last' flag indicates last block.
    // Note we're representing 16 uint64s as 32 uint32s
    var v = new Uint32Array(32);
    var m = new Uint32Array(32);
    function blake2bCompress(ctx, last) {
        var i = 0;
        // init work variables
        for (i = 0; i < 16; i++) {
            v[i] = ctx.h[i];
            v[i + 16] = BLAKE2B_IV32[i];
        }
        // low 64 bits of offset
        v[24] = v[24] ^ ctx.t;
        v[25] = v[25] ^ (ctx.t / 0x100000000);
        // high 64 bits not supported, offset may not be higher than 2**53-1
        // last block flag set ?
        if (last) {
            v[28] = ~v[28];
            v[29] = ~v[29];
        }
        // get little-endian words
        for (i = 0; i < 32; i++) {
            m[i] = B2B_GET32(ctx.b, 4 * i);
        }
        // twelve rounds of mixing
        // uncomment the DebugPrint calls to log the computation
        // and match the RFC sample documentation
        // util.debugPrint('          m[16]', m, 64)
        for (i = 0; i < 12; i++) {
            // util.debugPrint('   (i=' + (i < 10 ? ' ' : '') + i + ') v[16]', v, 64)
            B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1]);
            B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3]);
            B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5]);
            B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7]);
            B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9]);
            B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11]);
            B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13]);
            B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15]);
        }
        // util.debugPrint('   (i=12) v[16]', v, 64)
        for (i = 0; i < 16; i++) {
            ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16];
        }
        // util.debugPrint('h[8]', ctx.h, 64)
    }
    // Creates a BLAKE2b hashing context
    // Requires an output length between 1 and 64 bytes
    // Takes an optional Uint8Array key
    function blake2bInit(outlen, key) {
        if (outlen === 0 || outlen > 64) {
            throw new Error('Illegal output length, expected 0 < length <= 64');
        }
        if (key && key.length > 64) {
            throw new Error('Illegal key, expected Uint8Array with 0 < length <= 64');
        }
        // state, 'param block'
        var ctx = {
            b: new Uint8Array(128),
            h: new Uint32Array(16),
            t: 0,
            c: 0,
            outlen: outlen // output length in bytes
        };
        // initialize hash state
        for (var i = 0; i < 16; i++) {
            ctx.h[i] = BLAKE2B_IV32[i];
        }
        var keylen = key ? key.length : 0;
        ctx.h[0] ^= 0x01010000 ^ (keylen << 8) ^ outlen;
        // key the hash, if applicable
        if (key) {
            blake2bUpdate(ctx, key);
            // at the end
            ctx.c = 128;
        }
        return ctx;
    }
    exports.blake2bInit = blake2bInit;
    // Updates a BLAKE2b streaming hash
    // Requires hash context and Uint8Array (byte array)
    function blake2bUpdate(ctx, input) {
        for (var i = 0; i < input.length; i++) {
            if (ctx.c === 128) { // buffer full ?
                ctx.t += ctx.c; // add counters
                blake2bCompress(ctx, false); // compress (not last)
                ctx.c = 0; // counter to zero
            }
            ctx.b[ctx.c++] = input[i];
        }
    }
    exports.blake2bUpdate = blake2bUpdate;
    // Completes a BLAKE2b streaming hash
    // Returns a Uint8Array containing the message digest
    function blake2bFinal(ctx) {
        ctx.t += ctx.c; // mark last block offset
        while (ctx.c < 128) { // fill up with zeros
            ctx.b[ctx.c++] = 0;
        }
        blake2bCompress(ctx, true); // final block flag = 1
        // little endian convert and store
        var out = new Uint8Array(ctx.outlen);
        for (var i = 0; i < ctx.outlen; i++) {
            out[i] = ctx.h[i >> 2] >> (8 * (i & 3));
        }
        return out;
    }
    exports.blake2bFinal = blake2bFinal;
    // Computes the BLAKE2B hash of a string or byte array, and returns a Uint8Array
    //
    // Returns a n-byte Uint8Array
    //
    // Parameters:
    // - input - the input bytes, as a string, Buffer or Uint8Array
    // - key - optional key Uint8Array, up to 64 bytes
    // - outlen - optional output length in bytes, default 64
    function blake2b(input, key, outlen) {
        // preprocess inputs
        outlen = outlen || 64;
        input = normalizeInput(input);
        // do the math
        var ctx = blake2bInit(outlen, key);
        blake2bUpdate(ctx, input);
        return blake2bFinal(ctx);
    }
    exports.blake2b = blake2b;
    // Computes the BLAKE2B hash of a string or byte array
    //
    // Returns an n-byte hash in hex, all lowercase
    //
    // Parameters:
    // - input - the input bytes, as a string, Buffer, or Uint8Array
    // - key - optional key Uint8Array, up to 64 bytes
    // - outlen - optional output length in bytes, default 64
    function blake2bHex(input, key, outlen) {
        var output = blake2b(input, key, outlen);
        return toHex(output);
    }
    exports.blake2bHex = blake2bHex;
    
    },{}],19:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CryptoJS = require("crypto-js");
    /** START OF THE LICENSED CODE */
    /******************************************************************************
     * Copyright © 2013-2016 The Nxt Core Developers.                             *
     *                                                                            *
     * See the AUTHORS.txt, DEVELOPER-AGREEMENT.txt and LICENSE.txt files at      *
     * the top-level directory of this distribution for the individual copyright  *
     * holder information and the developer policies on copyright and licensing.  *
     *                                                                            *
     * Unless otherwise agreed in a custom licensing agreement, no part of the    *
     * Nxt software, including this file, may be copied, modified, propagated,    *
     * or distributed except according to the terms contained in the LICENSE.txt  *
     * file.                                                                      *
     *                                                                            *
     * Removal or modification of this copyright notice is prohibited.            *
     *                                                                            *
     ******************************************************************************/
    var converters = function () {
        var charToNibble = {};
        var nibbleToChar = [];
        var i;
        for (i = 0; i <= 9; ++i) {
            var character = i.toString();
            charToNibble[character] = i;
            nibbleToChar.push(character);
        }
        for (i = 10; i <= 15; ++i) {
            var lowerChar = String.fromCharCode('a'.charCodeAt(0) + i - 10);
            var upperChar = String.fromCharCode('A'.charCodeAt(0) + i - 10);
            charToNibble[lowerChar] = i;
            charToNibble[upperChar] = i;
            nibbleToChar.push(lowerChar);
        }
        return {
            byteArrayToHexString: function (bytes) {
                var str = '';
                for (var i_1 = 0; i_1 < bytes.length; ++i_1) {
                    if (bytes[i_1] < 0) {
                        bytes[i_1] += 256;
                    }
                    str += nibbleToChar[bytes[i_1] >> 4] + nibbleToChar[bytes[i_1] & 0x0F];
                }
                return str;
            },
            stringToByteArray: function (str) {
                str = unescape(encodeURIComponent(str));
                var bytes = new Array(str.length);
                for (var i_2 = 0; i_2 < str.length; ++i_2)
                    bytes[i_2] = str.charCodeAt(i_2);
                return bytes;
            },
            hexStringToByteArray: function (str) {
                var bytes = [];
                var i = 0;
                if (0 !== str.length % 2) {
                    bytes.push(charToNibble[str.charAt(0)]);
                    ++i;
                }
                for (; i < str.length - 1; i += 2)
                    bytes.push((charToNibble[str.charAt(i)] << 4) + charToNibble[str.charAt(i + 1)]);
                return bytes;
            },
            stringToHexString: function (str) {
                return this.byteArrayToHexString(this.stringToByteArray(str));
            },
            hexStringToString: function (hex) {
                return this.byteArrayToString(this.hexStringToByteArray(hex));
            },
            checkBytesToIntInput: function (bytes, numBytes, opt_startIndex) {
                var startIndex = opt_startIndex || 0;
                if (startIndex < 0) {
                    throw new Error('Start index should not be negative');
                }
                if (bytes.length < startIndex + numBytes) {
                    throw new Error('Need at least ' + (numBytes) + ' bytes to convert to an integer');
                }
                return startIndex;
            },
            byteArrayToSignedShort: function (bytes, opt_startIndex) {
                var index = this.checkBytesToIntInput(bytes, 2, opt_startIndex);
                var value = bytes[index];
                value += bytes[index + 1] << 8;
                return value;
            },
            byteArrayToSignedInt32: function (bytes, opt_startIndex) {
                var index = this.checkBytesToIntInput(bytes, 4, opt_startIndex);
                var value = bytes[index];
                value += bytes[index + 1] << 8;
                value += bytes[index + 2] << 16;
                value += bytes[index + 3] << 24;
                return value;
            },
            byteArrayToBigInteger: function (bytes, opt_startIndex) {
                var index = this.checkBytesToIntInput(bytes, 8, opt_startIndex);
                var value = new BigInteger('0', 10);
                var temp1, temp2;
                for (var i_3 = 7; i_3 >= 0; i_3--) {
                    temp1 = value.multiply(new BigInteger('256', 10));
                    temp2 = temp1.add(new BigInteger(bytes[opt_startIndex + i_3].toString(10), 10));
                    value = temp2;
                }
                return value;
            },
            // create a wordArray that is Big-Endian
            byteArrayToWordArray: function (byteArray) {
                var i = 0, offset = 0, word = 0, len = byteArray.length;
                var words = new Uint32Array(((len / 4) | 0) + (len % 4 == 0 ? 0 : 1));
                while (i < (len - (len % 4))) {
                    words[offset++] = (byteArray[i++] << 24) | (byteArray[i++] << 16) | (byteArray[i++] << 8) | (byteArray[i++]);
                }
                if (len % 4 != 0) {
                    word = byteArray[i++] << 24;
                    if (len % 4 > 1) {
                        word = word | byteArray[i++] << 16;
                    }
                    if (len % 4 > 2) {
                        word = word | byteArray[i++] << 8;
                    }
                    words[offset] = word;
                }
                var wordArray = new Object();
                wordArray.sigBytes = len;
                wordArray.words = words;
                return wordArray;
            },
            // assumes wordArray is Big-Endian
            wordArrayToByteArray: function (wordArray) {
                return converters.wordArrayToByteArrayImpl(wordArray, true);
            },
            wordArrayToByteArrayImpl: function (wordArray, isFirstByteHasSign) {
                var len = wordArray.words.length;
                if (len == 0) {
                    return new Array(0);
                }
                var byteArray = new Array(wordArray.sigBytes);
                var offset = 0, word, i;
                for (i = 0; i < len - 1; i++) {
                    word = wordArray.words[i];
                    byteArray[offset++] = isFirstByteHasSign ? word >> 24 : (word >> 24) & 0xff;
                    byteArray[offset++] = (word >> 16) & 0xff;
                    byteArray[offset++] = (word >> 8) & 0xff;
                    byteArray[offset++] = word & 0xff;
                }
                word = wordArray.words[len - 1];
                byteArray[offset++] = isFirstByteHasSign ? word >> 24 : (word >> 24) & 0xff;
                if (wordArray.sigBytes % 4 == 0) {
                    byteArray[offset++] = (word >> 16) & 0xff;
                    byteArray[offset++] = (word >> 8) & 0xff;
                    byteArray[offset++] = word & 0xff;
                }
                if (wordArray.sigBytes % 4 > 1) {
                    byteArray[offset++] = (word >> 16) & 0xff;
                }
                if (wordArray.sigBytes % 4 > 2) {
                    byteArray[offset++] = (word >> 8) & 0xff;
                }
                return byteArray;
            },
            byteArrayToString: function (bytes, opt_startIndex, length) {
                if (length == 0) {
                    return '';
                }
                if (opt_startIndex && length) {
                    var index = this.checkBytesToIntInput(bytes, parseInt(length, 10), parseInt(opt_startIndex, 10));
                    bytes = bytes.slice(opt_startIndex, opt_startIndex + length);
                }
                return decodeURIComponent(escape(String.fromCharCode.apply(null, bytes)));
            },
            byteArrayToShortArray: function (byteArray) {
                var shortArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var i;
                for (i = 0; i < 16; i++) {
                    shortArray[i] = byteArray[i * 2] | byteArray[i * 2 + 1] << 8;
                }
                return shortArray;
            },
            shortArrayToByteArray: function (shortArray) {
                var byteArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var i;
                for (i = 0; i < 16; i++) {
                    byteArray[2 * i] = shortArray[i] & 0xff;
                    byteArray[2 * i + 1] = shortArray[i] >> 8;
                }
                return byteArray;
            },
            shortArrayToHexString: function (ary) {
                var res = '';
                for (var i_4 = 0; i_4 < ary.length; i_4++) {
                    res += nibbleToChar[(ary[i_4] >> 4) & 0x0f] + nibbleToChar[ary[i_4] & 0x0f] + nibbleToChar[(ary[i_4] >> 12) & 0x0f] + nibbleToChar[(ary[i_4] >> 8) & 0x0f];
                }
                return res;
            },
            /**
             * Produces an array of the specified number of bytes to represent the integer
             * value. Default output encodes ints in little endian format. Handles signed
             * as well as unsigned integers. Due to limitations in JavaScript's number
             * format, x cannot be a true 64 bit integer (8 bytes).
             */
            intToBytes_: function (x, numBytes, unsignedMax, opt_bigEndian) {
                var signedMax = Math.floor(unsignedMax / 2);
                var negativeMax = (signedMax + 1) * -1;
                if (x != Math.floor(x) || x < negativeMax || x > unsignedMax) {
                    throw new Error(x + ' is not a ' + (numBytes * 8) + ' bit integer');
                }
                var bytes = [];
                var current;
                // Number type 0 is in the positive int range, 1 is larger than signed int,
                // and 2 is negative int.
                var numberType = x >= 0 && x <= signedMax ? 0 :
                    x > signedMax && x <= unsignedMax ? 1 : 2;
                if (numberType == 2) {
                    x = (x * -1) - 1;
                }
                for (var i_5 = 0; i_5 < numBytes; i_5++) {
                    if (numberType == 2) {
                        current = 255 - (x % 256);
                    }
                    else {
                        current = x % 256;
                    }
                    if (opt_bigEndian) {
                        bytes.unshift(current);
                    }
                    else {
                        bytes.push(current);
                    }
                    if (numberType == 1) {
                        x = Math.floor(x / 256);
                    }
                    else {
                        x = x >> 8;
                    }
                }
                return bytes;
            },
            int32ToBytes: function (x, opt_bigEndian) {
                return converters.intToBytes_(x, 4, 4294967295, opt_bigEndian);
            },
            int16ToBytes: function (x, opt_bigEndian) {
                return converters.intToBytes_(x, 2, 65535, opt_bigEndian);
            },
            /**
             * Based on https://groups.google.com/d/msg/crypto-js/TOb92tcJlU0/Eq7VZ5tpi-QJ
             * Converts a word array to a Uint8Array.
             * @param {WordArray} wordArray The word array.
             * @return {Uint8Array} The Uint8Array.
             */
            wordArrayToByteArrayEx: function (wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var u8 = new Uint8Array(sigBytes);
                for (var i_6 = 0; i_6 < sigBytes; i_6++) {
                    var byte = (words[i_6 >>> 2] >>> (24 - (i_6 % 4) * 8)) & 0xff;
                    u8[i_6] = byte;
                }
                return u8;
            },
            /**
             * Converts a Uint8Array to a word array.
             * @param {string} u8Str The Uint8Array.
             * @return {WordArray} The word array.
             */
            byteArrayToWordArrayEx: function (u8arr) {
                // Shortcut
                var len = u8arr.length;
                // Convert
                var words = [];
                for (var i_7 = 0; i_7 < len; i_7++) {
                    words[i_7 >>> 2] |= (u8arr[i_7] & 0xff) << (24 - (i_7 % 4) * 8);
                }
                return CryptoJS.lib.WordArray.create(words, len);
            }
        };
    }();
    /** END OF THE LICENSED CODE */
    exports.default = converters;
    
    },{"crypto-js":35}],20:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function nodeRandom(count, options) {
        var crypto = require('crypto');
        var buf = crypto.randomBytes(count);
        switch (options.type) {
            case 'Array':
                return [].slice.call(buf);
            case 'Buffer':
                return buf;
            case 'Uint8Array':
                var arr = new Uint8Array(count);
                for (var i = 0; i < count; ++i) {
                    arr[i] = buf.readUInt8(i);
                }
                return arr;
            default:
                throw new Error(options.type + ' is unsupported.');
        }
    }
    function browserRandom(count, options) {
        var nativeArr = new Uint8Array(count);
        var crypto = self.crypto || self.msCrypto;
        crypto.getRandomValues(nativeArr);
        switch (options.type) {
            case 'Array':
                return [].slice.call(nativeArr);
            case 'Buffer':
                try {
                    var b = new Buffer(1);
                }
                catch (e) {
                    throw new Error('Buffer not supported in this environment. Use Node.js or Browserify for browser support.');
                }
                return new Buffer(nativeArr);
            case 'Uint8Array':
                return nativeArr;
            default:
                throw new Error(options.type + ' is unsupported.');
        }
    }
    function secureRandom(count, options) {
        options = options || { type: 'Array' };
        if (typeof window !== 'undefined' || typeof self !== 'undefined') {
            return browserRandom(count, options);
        }
        else if (typeof exports === 'object' && typeof module !== 'undefined') {
            return nodeRandom(count, options);
        }
        else {
            throw new Error('Your environment is not defined');
        }
    }
    exports.default = {
        secureRandom: secureRandom,
        randomArray: function (byteCount) {
            return secureRandom(byteCount, { type: 'Array' });
        },
        randomUint8Array: function (byteCount) {
            return secureRandom(byteCount, { type: 'Uint8Array' });
        },
        randomBuffer: function (byteCount) {
            return secureRandom(byteCount, { type: 'Buffer' });
        }
    };
    
    },{"crypto":undefined}],21:[function(require,module,exports){
    "use strict";
    /**
     * [js-sha3]{@link https://github.com/emn178/js-sha3}
     *
     * @version 0.5.7
     * @author Chen, Yi-Cyuan [emn178@gmail.com]
     * @copyright Chen, Yi-Cyuan 2015-2016
     * @license MIT
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    var sha3 = {};
    var HEX_CHARS = '0123456789abcdef'.split('');
    var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
    var KECCAK_PADDING = [1, 256, 65536, 16777216];
    var PADDING = [6, 1536, 393216, 100663296];
    var SHIFT = [0, 8, 16, 24];
    var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
        0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
        2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
        2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
        2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
    var BITS = [224, 256, 384, 512];
    var SHAKE_BITS = [128, 256];
    var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array'];
    var createOutputMethod = function (bits, padding, outputType) {
        return function (message) {
            return new Keccak(bits, padding, bits).update(message)[outputType]();
        };
    };
    var createShakeOutputMethod = function (bits, padding, outputType) {
        return function (message, outputBits) {
            return new Keccak(bits, padding, outputBits).update(message)[outputType]();
        };
    };
    var createMethod = function (bits, padding) {
        var method = createOutputMethod(bits, padding, 'hex');
        method.create = function () {
            return new Keccak(bits, padding, bits);
        };
        method.update = function (message) {
            return method.create().update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(bits, padding, type);
        }
        return method;
    };
    var createShakeMethod = function (bits, padding) {
        var method = createShakeOutputMethod(bits, padding, 'hex');
        method.create = function (outputBits) {
            return new Keccak(bits, padding, outputBits);
        };
        method.update = function (message, outputBits) {
            return method.create(outputBits).update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createShakeOutputMethod(bits, padding, type);
        }
        return method;
    };
    var algorithms = [
        { name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod },
        { name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod },
        { name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod }
    ];
    var methods = {}, methodNames = [];
    for (var i = 0; i < algorithms.length; ++i) {
        var algorithm = algorithms[i];
        var bits = algorithm.bits;
        for (var j = 0; j < bits.length; ++j) {
            var methodName = algorithm.name + '_' + bits[j];
            methodNames.push(methodName);
            methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
        }
    }
    function Keccak(bits, padding, outputBits) {
        this.blocks = [];
        this.s = [];
        this.padding = padding;
        this.outputBits = outputBits;
        this.reset = true;
        this.block = 0;
        this.start = 0;
        this.blockCount = (1600 - (bits << 1)) >> 5;
        this.byteCount = this.blockCount << 2;
        this.outputBlocks = outputBits >> 5;
        this.extraBytes = (outputBits & 31) >> 3;
        for (var i = 0; i < 50; ++i) {
            this.s[i] = 0;
        }
    }
    Keccak.prototype.update = function (message) {
        var notString = typeof message !== 'string';
        if (notString && message.constructor === ArrayBuffer) {
            message = new Uint8Array(message);
        }
        var length = message.length, blocks = this.blocks, byteCount = this.byteCount;
        var blockCount = this.blockCount, index = 0, s = this.s, i, code;
        while (index < length) {
            if (this.reset) {
                this.reset = false;
                blocks[0] = this.block;
                for (i = 1; i < blockCount + 1; ++i) {
                    blocks[i] = 0;
                }
            }
            if (notString) {
                for (i = this.start; index < length && i < byteCount; ++index) {
                    blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
                }
            }
            else {
                for (i = this.start; index < length && i < byteCount; ++index) {
                    code = message.charCodeAt(index);
                    if (code < 0x80) {
                        blocks[i >> 2] |= code << SHIFT[i++ & 3];
                    }
                    else if (code < 0x800) {
                        blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                    }
                    else if (code < 0xd800 || code >= 0xe000) {
                        blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                    }
                    else {
                        code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
                        blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                    }
                }
            }
            this.lastByteIndex = i;
            if (i >= byteCount) {
                this.start = i - byteCount;
                this.block = blocks[blockCount];
                for (i = 0; i < blockCount; ++i) {
                    s[i] ^= blocks[i];
                }
                f(s);
                this.reset = true;
            }
            else {
                this.start = i;
            }
        }
        return this;
    };
    Keccak.prototype.finalize = function () {
        var blocks = this.blocks;
        var i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
        blocks[i >> 2] |= this.padding[i & 3];
        if (this.lastByteIndex === this.byteCount) {
            blocks[0] = blocks[blockCount];
            for (i = 1; i < blockCount + 1; ++i) {
                blocks[i] = 0;
            }
        }
        blocks[blockCount - 1] |= 0x80000000;
        for (i = 0; i < blockCount; ++i) {
            s[i] ^= blocks[i];
        }
        f(s);
    };
    Keccak.prototype.toString = Keccak.prototype.hex = function () {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks;
        var extraBytes = this.extraBytes, i = 0, j = 0;
        var hex = '', block;
        while (j < outputBlocks) {
            for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
                block = s[i];
                hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
                    HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
                    HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
                    HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
            }
            if (j % blockCount === 0) {
                f(s);
                i = 0;
            }
        }
        if (extraBytes) {
            block = s[i];
            if (extraBytes > 0) {
                hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
            }
            if (extraBytes > 1) {
                hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
            }
            if (extraBytes > 2) {
                hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
            }
        }
        return hex;
    };
    Keccak.prototype.arrayBuffer = function () {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks;
        var extraBytes = this.extraBytes, i = 0, j = 0;
        var bytes = this.outputBits >> 3;
        var buffer;
        if (extraBytes) {
            buffer = new ArrayBuffer((outputBlocks + 1) << 2);
        }
        else {
            buffer = new ArrayBuffer(bytes);
        }
        var array = new Uint32Array(buffer);
        while (j < outputBlocks) {
            for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
                array[j] = s[i];
            }
            if (j % blockCount === 0) {
                f(s);
            }
        }
        if (extraBytes) {
            array[i] = s[i];
            buffer = buffer.slice(0, bytes);
        }
        return buffer;
    };
    Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;
    Keccak.prototype.digest = Keccak.prototype.array = function () {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks;
        var extraBytes = this.extraBytes, i = 0, j = 0;
        var array = [];
        var offset, block;
        while (j < outputBlocks) {
            for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
                offset = j << 2;
                block = s[i];
                array[offset] = block & 0xFF;
                array[offset + 1] = (block >> 8) & 0xFF;
                array[offset + 2] = (block >> 16) & 0xFF;
                array[offset + 3] = (block >> 24) & 0xFF;
            }
            if (j % blockCount === 0) {
                f(s);
            }
        }
        if (extraBytes) {
            offset = j << 2;
            block = s[i];
            if (extraBytes > 0) {
                array[offset] = block & 0xFF;
            }
            if (extraBytes > 1) {
                array[offset + 1] = (block >> 8) & 0xFF;
            }
            if (extraBytes > 2) {
                array[offset + 2] = (block >> 16) & 0xFF;
            }
        }
        return array;
    };
    var f = function (s) {
        var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
        for (n = 0; n < 48; n += 2) {
            c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
            c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
            c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
            c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
            c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
            c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
            c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
            c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
            c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
            c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
            h = c8 ^ ((c2 << 1) | (c3 >>> 31));
            l = c9 ^ ((c3 << 1) | (c2 >>> 31));
            s[0] ^= h;
            s[1] ^= l;
            s[10] ^= h;
            s[11] ^= l;
            s[20] ^= h;
            s[21] ^= l;
            s[30] ^= h;
            s[31] ^= l;
            s[40] ^= h;
            s[41] ^= l;
            h = c0 ^ ((c4 << 1) | (c5 >>> 31));
            l = c1 ^ ((c5 << 1) | (c4 >>> 31));
            s[2] ^= h;
            s[3] ^= l;
            s[12] ^= h;
            s[13] ^= l;
            s[22] ^= h;
            s[23] ^= l;
            s[32] ^= h;
            s[33] ^= l;
            s[42] ^= h;
            s[43] ^= l;
            h = c2 ^ ((c6 << 1) | (c7 >>> 31));
            l = c3 ^ ((c7 << 1) | (c6 >>> 31));
            s[4] ^= h;
            s[5] ^= l;
            s[14] ^= h;
            s[15] ^= l;
            s[24] ^= h;
            s[25] ^= l;
            s[34] ^= h;
            s[35] ^= l;
            s[44] ^= h;
            s[45] ^= l;
            h = c4 ^ ((c8 << 1) | (c9 >>> 31));
            l = c5 ^ ((c9 << 1) | (c8 >>> 31));
            s[6] ^= h;
            s[7] ^= l;
            s[16] ^= h;
            s[17] ^= l;
            s[26] ^= h;
            s[27] ^= l;
            s[36] ^= h;
            s[37] ^= l;
            s[46] ^= h;
            s[47] ^= l;
            h = c6 ^ ((c0 << 1) | (c1 >>> 31));
            l = c7 ^ ((c1 << 1) | (c0 >>> 31));
            s[8] ^= h;
            s[9] ^= l;
            s[18] ^= h;
            s[19] ^= l;
            s[28] ^= h;
            s[29] ^= l;
            s[38] ^= h;
            s[39] ^= l;
            s[48] ^= h;
            s[49] ^= l;
            b0 = s[0];
            b1 = s[1];
            b32 = (s[11] << 4) | (s[10] >>> 28);
            b33 = (s[10] << 4) | (s[11] >>> 28);
            b14 = (s[20] << 3) | (s[21] >>> 29);
            b15 = (s[21] << 3) | (s[20] >>> 29);
            b46 = (s[31] << 9) | (s[30] >>> 23);
            b47 = (s[30] << 9) | (s[31] >>> 23);
            b28 = (s[40] << 18) | (s[41] >>> 14);
            b29 = (s[41] << 18) | (s[40] >>> 14);
            b20 = (s[2] << 1) | (s[3] >>> 31);
            b21 = (s[3] << 1) | (s[2] >>> 31);
            b2 = (s[13] << 12) | (s[12] >>> 20);
            b3 = (s[12] << 12) | (s[13] >>> 20);
            b34 = (s[22] << 10) | (s[23] >>> 22);
            b35 = (s[23] << 10) | (s[22] >>> 22);
            b16 = (s[33] << 13) | (s[32] >>> 19);
            b17 = (s[32] << 13) | (s[33] >>> 19);
            b48 = (s[42] << 2) | (s[43] >>> 30);
            b49 = (s[43] << 2) | (s[42] >>> 30);
            b40 = (s[5] << 30) | (s[4] >>> 2);
            b41 = (s[4] << 30) | (s[5] >>> 2);
            b22 = (s[14] << 6) | (s[15] >>> 26);
            b23 = (s[15] << 6) | (s[14] >>> 26);
            b4 = (s[25] << 11) | (s[24] >>> 21);
            b5 = (s[24] << 11) | (s[25] >>> 21);
            b36 = (s[34] << 15) | (s[35] >>> 17);
            b37 = (s[35] << 15) | (s[34] >>> 17);
            b18 = (s[45] << 29) | (s[44] >>> 3);
            b19 = (s[44] << 29) | (s[45] >>> 3);
            b10 = (s[6] << 28) | (s[7] >>> 4);
            b11 = (s[7] << 28) | (s[6] >>> 4);
            b42 = (s[17] << 23) | (s[16] >>> 9);
            b43 = (s[16] << 23) | (s[17] >>> 9);
            b24 = (s[26] << 25) | (s[27] >>> 7);
            b25 = (s[27] << 25) | (s[26] >>> 7);
            b6 = (s[36] << 21) | (s[37] >>> 11);
            b7 = (s[37] << 21) | (s[36] >>> 11);
            b38 = (s[47] << 24) | (s[46] >>> 8);
            b39 = (s[46] << 24) | (s[47] >>> 8);
            b30 = (s[8] << 27) | (s[9] >>> 5);
            b31 = (s[9] << 27) | (s[8] >>> 5);
            b12 = (s[18] << 20) | (s[19] >>> 12);
            b13 = (s[19] << 20) | (s[18] >>> 12);
            b44 = (s[29] << 7) | (s[28] >>> 25);
            b45 = (s[28] << 7) | (s[29] >>> 25);
            b26 = (s[38] << 8) | (s[39] >>> 24);
            b27 = (s[39] << 8) | (s[38] >>> 24);
            b8 = (s[48] << 14) | (s[49] >>> 18);
            b9 = (s[49] << 14) | (s[48] >>> 18);
            s[0] = b0 ^ (~b2 & b4);
            s[1] = b1 ^ (~b3 & b5);
            s[10] = b10 ^ (~b12 & b14);
            s[11] = b11 ^ (~b13 & b15);
            s[20] = b20 ^ (~b22 & b24);
            s[21] = b21 ^ (~b23 & b25);
            s[30] = b30 ^ (~b32 & b34);
            s[31] = b31 ^ (~b33 & b35);
            s[40] = b40 ^ (~b42 & b44);
            s[41] = b41 ^ (~b43 & b45);
            s[2] = b2 ^ (~b4 & b6);
            s[3] = b3 ^ (~b5 & b7);
            s[12] = b12 ^ (~b14 & b16);
            s[13] = b13 ^ (~b15 & b17);
            s[22] = b22 ^ (~b24 & b26);
            s[23] = b23 ^ (~b25 & b27);
            s[32] = b32 ^ (~b34 & b36);
            s[33] = b33 ^ (~b35 & b37);
            s[42] = b42 ^ (~b44 & b46);
            s[43] = b43 ^ (~b45 & b47);
            s[4] = b4 ^ (~b6 & b8);
            s[5] = b5 ^ (~b7 & b9);
            s[14] = b14 ^ (~b16 & b18);
            s[15] = b15 ^ (~b17 & b19);
            s[24] = b24 ^ (~b26 & b28);
            s[25] = b25 ^ (~b27 & b29);
            s[34] = b34 ^ (~b36 & b38);
            s[35] = b35 ^ (~b37 & b39);
            s[44] = b44 ^ (~b46 & b48);
            s[45] = b45 ^ (~b47 & b49);
            s[6] = b6 ^ (~b8 & b0);
            s[7] = b7 ^ (~b9 & b1);
            s[16] = b16 ^ (~b18 & b10);
            s[17] = b17 ^ (~b19 & b11);
            s[26] = b26 ^ (~b28 & b20);
            s[27] = b27 ^ (~b29 & b21);
            s[36] = b36 ^ (~b38 & b30);
            s[37] = b37 ^ (~b39 & b31);
            s[46] = b46 ^ (~b48 & b40);
            s[47] = b47 ^ (~b49 & b41);
            s[8] = b8 ^ (~b0 & b2);
            s[9] = b9 ^ (~b1 & b3);
            s[18] = b18 ^ (~b10 & b12);
            s[19] = b19 ^ (~b11 & b13);
            s[28] = b28 ^ (~b20 & b22);
            s[29] = b29 ^ (~b21 & b23);
            s[38] = b38 ^ (~b30 & b32);
            s[39] = b39 ^ (~b31 & b33);
            s[48] = b48 ^ (~b40 & b42);
            s[49] = b49 ^ (~b41 & b43);
            s[0] ^= RC[n];
            s[1] ^= RC[n + 1];
        }
    };
    exports.keccak256 = methods.keccak_256;
    
    },{}],22:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var __1 = require("..");
    var concat_1 = require("../utils/concat");
    var crypto_1 = require("../utils/crypto");
    var constants = require("../constants");
    function generate(fields) {
        if (!fields || !fields.length) {
            throw new Error('It is not possible to create TransactionClass without fields');
        }
        // Fields of the original data object
        var storedFields = Object.create(null);
        // Data bytes or functions returning data bytes via promises
        var byteProviders = [];
        fields.forEach(function (field) {
            if (field instanceof __1.ByteProcessor) {
                // Remember user data fields
                storedFields[field.name] = field;
                // All user data must be represented as bytes
                byteProviders.push(function (data) { return field.process(data[field.name]); });
            }
            else if (typeof field === 'number') {
                // All static data must be converted to bytes as well
                byteProviders.push(Uint8Array.from([field]));
            }
            else {
                throw new Error('Invalid field is passed to the createTransactionClass function');
            }
        });
        var SignatureGenerator = /** @class */ (function () {
            function SignatureGenerator(hashMap) {
                if (hashMap === void 0) { hashMap = {}; }
                var _this = this;
                // Save all needed values from user data
                this._rawData = Object.keys(storedFields).reduce(function (store, key) {
                    store[key] = hashMap[key];
                    return store;
                }, {});
                this._dataHolders = byteProviders.map(function (provider) {
                    if (typeof provider === 'function') {
                        // Execute function so that they return promises containing Uint8Array data
                        return provider(_this._rawData);
                    }
                    else {
                        // Or just pass Uint8Array data
                        return provider;
                    }
                });
            }
            SignatureGenerator.prototype.getSignature = function (privateKey) {
                return this.getBytes().then(function (dataBytes) {
                    return crypto_1.default.buildTransactionSignature(dataBytes, privateKey);
                });
            };
            // Get byte representation of the transaction
            SignatureGenerator.prototype.getBytes = function () {
                return Promise.all(this._dataHolders).then(function (multipleDataBytes) {
                    if (multipleDataBytes.length === 1) {
                        return multipleDataBytes[0];
                    }
                    else {
                        return concat_1.concatUint8Arrays.apply(void 0, multipleDataBytes);
                    }
                });
            };
            SignatureGenerator.prototype.getDebugBytes = function () {
                var _this = this;
                return Promise.all(fields.map(function (field, i) {
                    var result = _this._dataHolders[i];
                    if (result instanceof Promise) {
                        return result.then(function (bytes) {
                            return { bytes: bytes, from: field && field.name || field };
                        });
                    }
                    else {
                        return Promise.resolve({ bytes: result, from: field });
                    }
                }));
            };
            // Get bytes of an exact field from user data
            SignatureGenerator.prototype.getExactBytes = function (fieldName) {
                if (!(fieldName in storedFields)) {
                    throw new Error("There is no field '" + fieldName + "' in 'RequestDataType class");
                }
                var byteProcessor = storedFields[fieldName];
                var userData = this._rawData[fieldName];
                return byteProcessor.process(userData);
            };
            return SignatureGenerator;
        }());
        return SignatureGenerator;
    }
    exports.generate = generate;
    exports.TX_NUMBER_MAP = Object.create(null);
    exports.TX_TYPE_MAP = Object.create(null);
    exports.CREATE_ORDER_SIGNATURE = generate([
        new __1.Base58('senderPublicKey'),
        new __1.Base58('matcherPublicKey'),
        new __1.AssetId('amountAsset'),
        new __1.AssetId('priceAsset'),
        new __1.OrderType('orderType'),
        new __1.Long('price'),
        new __1.Long('amount'),
        new __1.Long('timestamp'),
        new __1.Long('expiration'),
        new __1.Long('matcherFee')
    ]);
    exports.AUTH_ORDER_SIGNATURE = generate([
        new __1.Base58('senderPublicKey'),
        new __1.Long('timestamp')
    ]);
    exports.CANCEL_ORDER_SIGNATURE = generate([
        new __1.Base58('senderPublicKey'),
        new __1.Base58('orderId')
    ]);
    var ISSUE = generate([
        3 /* ISSUE */,
        2 /* ISSUE */,
        new __1.Byte('chainId'),
        new __1.Base58('senderPublicKey'),
        new __1.StringWithLength('name'),
        new __1.StringWithLength('description'),
        new __1.Long('quantity'),
        new __1.Byte('precision'),
        new __1.Bool('reissuable'),
        new __1.Long('fee'),
        new __1.Long('timestamp'),
        0 // Byte for script smart assets.
    ]);
    exports.TX_NUMBER_MAP[3 /* ISSUE */] = ISSUE;
    exports.TX_TYPE_MAP["issue" /* ISSUE */] = ISSUE;
    var TRANSFER = generate([
        4 /* TRANSFER */,
        2 /* TRANSFER */,
        new __1.Base58('senderPublicKey'),
        new __1.AssetId('assetId'),
        new __1.AssetId('feeAssetId'),
        new __1.Long('timestamp'),
        new __1.Long('amount'),
        new __1.Long('fee'),
        new __1.Recipient('recipient'),
        new __1.Attachment('attachment')
    ]);
    exports.TX_NUMBER_MAP[4 /* TRANSFER */] = TRANSFER;
    exports.TX_TYPE_MAP["transfer" /* TRANSFER */] = TRANSFER;
    var REISSUE = generate([
        5 /* REISSUE */,
        2 /* REISSUE */,
        new __1.Byte('chainId'),
        new __1.Base58('senderPublicKey'),
        new __1.MandatoryAssetId('assetId'),
        new __1.Long('quantity'),
        new __1.Bool('reissuable'),
        new __1.Long('fee'),
        new __1.Long('timestamp')
    ]);
    exports.TX_NUMBER_MAP[5 /* REISSUE */] = REISSUE;
    exports.TX_TYPE_MAP["reissue" /* REISSUE */] = REISSUE;
    var BURN = generate([
        6 /* BURN */,
        2 /* BURN */,
        new __1.Byte('chainId'),
        new __1.Base58('senderPublicKey'),
        new __1.MandatoryAssetId('assetId'),
        new __1.Long('quantity'),
        new __1.Long('fee'),
        new __1.Long('timestamp')
    ]);
    exports.TX_NUMBER_MAP[6 /* BURN */] = BURN;
    exports.TX_TYPE_MAP["burn" /* BURN */] = BURN;
    var LEASE = generate([
        8 /* LEASE */,
        2 /* LEASE */,
        0,
        new __1.Base58('senderPublicKey'),
        new __1.Recipient('recipient'),
        new __1.Long('amount'),
        new __1.Long('fee'),
        new __1.Long('timestamp')
    ]);
    exports.TX_NUMBER_MAP[8 /* LEASE */] = LEASE;
    exports.TX_TYPE_MAP["lease" /* LEASE */] = LEASE;
    var CANCEL_LEASING = generate([
        9 /* CANCEL_LEASING */,
        2 /* CANCEL_LEASING */,
        new __1.Byte('chainId'),
        new __1.Base58('senderPublicKey'),
        new __1.Long('fee'),
        new __1.Long('timestamp'),
        new __1.Base58('transactionId')
    ]);
    exports.TX_NUMBER_MAP[9 /* CANCEL_LEASING */] = CANCEL_LEASING;
    exports.TX_TYPE_MAP["cancelLeasing" /* CANCEL_LEASING */] = CANCEL_LEASING;
    var CREATE_ALIAS = generate([
        10 /* CREATE_ALIAS */,
        2 /* CREATE_ALIAS */,
        new __1.Base58('senderPublicKey'),
        new __1.Alias('alias'),
        new __1.Long('fee'),
        new __1.Long('timestamp')
    ]);
    exports.TX_NUMBER_MAP[10 /* CREATE_ALIAS */] = CREATE_ALIAS;
    exports.TX_TYPE_MAP["createAlias" /* CREATE_ALIAS */] = CREATE_ALIAS;
    var MASS_TRANSFER = generate([
        11 /* MASS_TRANSFER */,
        1 /* MASS_TRANSFER */,
        new __1.Base58('senderPublicKey'),
        new __1.AssetId('assetId'),
        new __1.Transfers('transfers'),
        new __1.Long('timestamp'),
        new __1.Long('fee'),
        new __1.Attachment('attachment')
    ]);
    exports.TX_NUMBER_MAP[11 /* MASS_TRANSFER */] = MASS_TRANSFER;
    exports.TX_TYPE_MAP["massTransfer" /* MASS_TRANSFER */] = MASS_TRANSFER;
    var DATA = generate([
        12 /* DATA */,
        1 /* DATA */,
        new __1.Base58('senderPublicKey'),
        new __1.DataEntries('data'),
        new __1.Long('timestamp'),
        new __1.Long('fee')
    ]);
    exports.TX_NUMBER_MAP[12 /* DATA */] = DATA;
    exports.TX_TYPE_MAP["data" /* DATA */] = DATA;
    var SET_SCRIPT = generate([
        13 /* SET_SCRIPT */,
        1 /* SET_SCRIPT */,
        new __1.Byte('chainId'),
        new __1.Base58('senderPublicKey'),
        constants.SET_SCRIPT_LANG_VERSION,
        new __1.Base64('script'),
        new __1.Long('fee'),
        new __1.Long('timestamp')
    ]);
    exports.TX_NUMBER_MAP[13 /* SET_SCRIPT */] = SET_SCRIPT;
    exports.TX_TYPE_MAP["setScript" /* SET_SCRIPT */] = SET_SCRIPT;
    var SPONSORSHIP = generate([
        14 /* SPONSORSHIP */,
        1 /* SPONSORSHIP */,
        new __1.Base58('senderPublicKey'),
        new __1.Base58('assetId'),
        new __1.Long('minSponsoredAssetFee'),
        new __1.Long('fee'),
        new __1.Long('timestamp')
    ]);
    exports.TX_NUMBER_MAP[14 /* SPONSORSHIP */] = SPONSORSHIP;
    exports.TX_TYPE_MAP["sponsorship" /* SPONSORSHIP */] = SPONSORSHIP;
    
    },{"..":15,"../constants":13,"../utils/concat":23,"../utils/crypto":25}],23:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function concatUint8Arrays() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length < 2) {
            throw new Error('Two or more Uint8Array are expected');
        }
        if (!(args.every(function (arg) { return arg instanceof Uint8Array; }))) {
            throw new Error('One of arguments is not a Uint8Array');
        }
        var count = args.length;
        var sumLength = args.reduce(function (sum, arr) { return sum + arr.length; }, 0);
        var result = new Uint8Array(sumLength);
        var curLength = 0;
        for (var i = 0; i < count; i++) {
            result.set(args[i], curLength);
            curLength += args[i].length;
        }
        return result;
    }
    exports.concatUint8Arrays = concatUint8Arrays;
    
    },{}],24:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var converters_1 = require("../libs/converters");
    var data_entities_1 = require("@evestx/data-entities");
    function performBitwiseAnd(a, b) {
        var sa = a.toString(2).split('.')[0];
        var sb = b.toString(2).split('.')[0];
        var len = Math.min(sa.length, sb.length);
        var s1 = sa.slice(sa.length - len);
        var s2 = sb.slice(sb.length - len);
        var result = new Array(len);
        for (var i = len - 1; i >= 0; i--) {
            result[i] = (s1[i] === '1' && s2[i] === '1') ? '1' : '0';
        }
        return parseInt(result.join(''), 2);
    }
    exports.default = {
        booleanToBytes: function (input) {
            if (typeof input !== 'boolean') {
                throw new Error('Boolean input is expected');
            }
            return input ? [1] : [0];
        },
        shortToByteArray: function (input) {
            if (typeof input !== 'number') {
                throw new Error('Numeric input is expected');
            }
            return converters_1.default.int16ToBytes(input, true);
        },
        bytesToByteArrayWithSize: function (input) {
            if (!(input instanceof Array || input instanceof Uint8Array)) {
                throw new Error('Byte array or Uint8Array input is expected');
            }
            else if (input instanceof Array && !(input.every(function (n) { return typeof n === 'number'; }))) {
                throw new Error('Byte array contains non-numeric elements');
            }
            if (!(input instanceof Array)) {
                input = Array.prototype.slice.call(input);
            }
            var lengthBytes = converters_1.default.int16ToBytes(input.length, true);
            return lengthBytes.concat(input);
        },
        longToByteArray: function (input) {
            if (typeof input !== 'number') {
                throw new Error('Numeric input is expected');
            }
            var bytes = new Array(7);
            for (var k = 7; k >= 0; k--) {
                bytes[k] = input & (255);
                input = input / 256;
            }
            return bytes;
        },
        bigNumberToByteArray: function (input) {
            if (!(input instanceof data_entities_1.BigNumber)) {
                throw new Error('BigNumber input is expected');
            }
            var performBitwiseAnd255 = performBitwiseAnd.bind(null, new data_entities_1.BigNumber(255));
            var bytes = new Array(7);
            for (var k = 7; k >= 0; k--) {
                bytes[k] = performBitwiseAnd255(input);
                input = input.div(256);
            }
            return bytes;
        },
        stringToByteArray: function (input) {
            if (typeof input !== 'string') {
                throw new Error('String input is expected');
            }
            return converters_1.default.stringToByteArray(input);
        },
        stringToByteArrayWithSize: function (input) {
            if (typeof input !== 'string') {
                throw new Error('String input is expected');
            }
            var stringBytes = converters_1.default.stringToByteArray(input);
            var lengthBytes = converters_1.default.int16ToBytes(stringBytes.length, true);
            return lengthBytes.concat(stringBytes);
        }
    };
    
    },{"../libs/converters":19,"@evestx/data-entities":6}],25:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CryptoJS = require("crypto-js");
    var axlsign_1 = require("../libs/axlsign");
    var base58_1 = require("../libs/base58");
    var blake = require("../libs/blake2b");
    var converters_1 = require("../libs/converters");
    var secure_random_1 = require("../libs/secure-random");
    var sha3_1 = require("../libs/sha3");
    var concat_1 = require("./concat");
    var __1 = require("../");
    var constants_1 = require("../constants");
    function sha256(input) {
        var bytes;
        if (typeof input === 'string') {
            bytes = converters_1.default.stringToByteArray(input);
        }
        else {
            bytes = input;
        }
        var wordArray = converters_1.default.byteArrayToWordArrayEx(Uint8Array.from(bytes));
        var resultWordArray = CryptoJS.SHA256(wordArray);
        return converters_1.default.wordArrayToByteArrayEx(resultWordArray);
    }
    function blake2b(input) {
        return blake.blake2b(input, null, 32);
    }
    function keccak(input) {
        return sha3_1.keccak256.array(input);
    }
    function hashChain(input) {
        return keccak(blake2b(input));
    }
    function buildSeedHash(seedBytes) {
        var nonce = new Uint8Array(converters_1.default.int32ToBytes(constants_1.INITIAL_NONCE, true));
        var seedBytesWithNonce = concat_1.concatUint8Arrays(nonce, seedBytes);
        var seedHash = hashChain(seedBytesWithNonce);
        return sha256(seedHash);
    }
    function strengthenPassword(password, rounds) {
        if (rounds === void 0) { rounds = 5000; }
        while (rounds--)
            password = converters_1.default.byteArrayToHexString(sha256(password));
        return password;
    }
    exports.default = {
        buildTransactionSignature: function (dataBytes, privateKey) {
            if (!dataBytes || !(dataBytes instanceof Uint8Array)) {
                throw new Error('Missing or invalid data');
            }
            if (!privateKey || typeof privateKey !== 'string') {
                throw new Error('Missing or invalid private key');
            }
            var privateKeyBytes = base58_1.default.decode(privateKey);
            if (privateKeyBytes.length !== constants_1.PRIVATE_KEY_LENGTH) {
                throw new Error('Invalid public key');
            }
            var signature = axlsign_1.default.sign(privateKeyBytes, dataBytes, secure_random_1.default.randomUint8Array(64));
            return base58_1.default.encode(signature);
        },
        isValidSignature: function (dataBytes, signature, publicKey) {
            if (!dataBytes || !(dataBytes instanceof Uint8Array)) {
                throw new Error('Missing or invalid data');
            }
            if (!signature || typeof signature !== 'string') {
                throw new Error('Missing or invalid signature');
            }
            if (!publicKey || typeof publicKey !== 'string') {
                throw new Error('Missing or invalid public key');
            }
            var signatureBytes = base58_1.default.decode(signature);
            var publicKeyBytes = base58_1.default.decode(publicKey);
            if (publicKeyBytes.length !== constants_1.PUBLIC_KEY_LENGTH) {
                throw new Error('Invalid public key');
            }
            return axlsign_1.default.verify(publicKeyBytes, dataBytes, signatureBytes);
        },
        buildTransactionId: function (dataBytes) {
            if (!dataBytes || !(dataBytes instanceof Uint8Array)) {
                throw new Error('Missing or invalid data');
            }
            var hash = blake2b(dataBytes);
            return base58_1.default.encode(hash);
        },
        buildKeyPair: function (seed) {
            if (!seed || typeof seed !== 'string') {
                throw new Error('Missing or invalid seed phrase');
            }
            var seedBytes = Uint8Array.from(converters_1.default.stringToByteArray(seed));
            var seedHash = buildSeedHash(seedBytes);
            var keys = axlsign_1.default.generateKeyPair(seedHash);
            return {
                privateKey: keys.private,
                publicKey: keys.public
            };
        },
        buildKeyPairFromBytes: function (seedBytes){
            if (!seedBytes || typeof seedBytes !== 'object') {
                throw new Error('Missing or invalid Uint32Array seed phrase');
            }
            var seedBytesF = Uint8Array.from(seedBytes);
            var seedHash = buildSeedHash(seedBytesF);
            var keys = axlsign_1.default.generateKeyPair(seedHash);
            return {
                privateKey: keys.private,
                publicKey: keys.public
            };
        },
        isValidAddress: function (address) {
            if (!address || typeof address !== 'string') {
                throw new Error('Missing or invalid address');
            }
            var addressBytes = base58_1.default.decode(address);
            if (addressBytes[0] !== 1 || addressBytes[1] !== __1.config.getNetworkByte()) {
                return false;
            }
            var key = addressBytes.slice(0, 22);
            var check = addressBytes.slice(22, 26);
            var keyHash = hashChain(key).slice(0, 4);
            for (var i = 0; i < 4; i++) {
                if (check[i] !== keyHash[i]) {
                    return false;
                }
            }
            return true;
        },
        toMetamaskChainId: function (chainId) {
            if(!chainId || typeof chainId !== 'number') {
                throw new Error('Missing or invalid Chain ID');
            }
            return '0x' + (chainId).toString(16);
        },
        toChainId: function (chainId) {
            if(!chainId || typeof chainId !== 'string') {
                throw new Error('Missing or invalid value');
            }
            return (chainId).charCodeAt(0);
        },
        buildRawAddress: function (publicKeyBytes) {
            if (!publicKeyBytes || publicKeyBytes.length !== constants_1.PUBLIC_KEY_LENGTH || !(publicKeyBytes instanceof Uint8Array)) {
                throw new Error('Missing or invalid public key');
            }
            var prefix = Uint8Array.from([constants_1.ADDRESS_VERSION, __1.config.getNetworkByte()]);
            var publicKeyHashPart = Uint8Array.from(hashChain(publicKeyBytes).slice(0, 20));
            var rawAddress = concat_1.concatUint8Arrays(prefix, publicKeyHashPart);
            var addressHash = Uint8Array.from(hashChain(rawAddress).slice(0, 4));
            return base58_1.default.encode(concat_1.concatUint8Arrays(rawAddress, addressHash));
        },
        buildPrivateRawAddress: function (publicKeyBytes) {
            if (!publicKeyBytes || publicKeyBytes.length !== constants_1.PUBLIC_KEY_LENGTH || !(publicKeyBytes instanceof Uint8Array)) {
                throw new Error('Missing or invalid public key');
            }
            var prefix = Uint8Array.from([constants_1.PRIVATE_ADDRESS_VERSION, __1.config.getNetworkByte()]);
            var publicKeyHashPart = Uint8Array.from(hashChain(publicKeyBytes).slice(0, 20));
            var rawAddress = concat_1.concatUint8Arrays(prefix, publicKeyHashPart);
            var addressHash = Uint8Array.from(hashChain(rawAddress).slice(0, 4));
            return base58_1.default.encode(concat_1.concatUint8Arrays(rawAddress, addressHash)); 
        },
        encryptSeed: function (seed, password, encryptionRounds) {
            if (!seed || typeof seed !== 'string') {
                throw new Error('Seed is required');
            }
            if (!password || typeof password !== 'string') {
                throw new Error('Password is required');
            }
            password = strengthenPassword(password, encryptionRounds);
            return CryptoJS.AES.encrypt(seed, password).toString();
        },
        decryptSeed: function (encryptedSeed, password, encryptionRounds) {
            if (!encryptedSeed || typeof encryptedSeed !== 'string') {
                throw new Error('Encrypted seed is required');
            }
            if (!password || typeof password !== 'string') {
                throw new Error('Password is required');
            }
            password = strengthenPassword(password, encryptionRounds);
            var hexSeed = CryptoJS.AES.decrypt(encryptedSeed, password);
            return converters_1.default.hexStringToString(hexSeed.toString());
        },
        generateRandomUint32Array: function (length) {
            if (!length || length < 0) {
                throw new Error('Missing or invalid array length');
            }
            var a = secure_random_1.default.randomUint8Array(length);
            var b = secure_random_1.default.randomUint8Array(length);
            var result = new Uint32Array(length);
            for (var i = 0; i < length; i++) {
                var hash = converters_1.default.byteArrayToHexString(sha256("" + a[i] + b[i]));
                var randomValue = parseInt(hash.slice(0, 13), 16);
                result.set([randomValue], i);
            }
            return result;
        }
    };
    
    },{"../":15,"../constants":13,"../libs/axlsign":16,"../libs/base58":17,"../libs/blake2b":18,"../libs/converters":19,"../libs/secure-random":20,"../libs/sha3":21,"./concat":23,"crypto-js":35}],26:[function(require,module,exports){
    'use strict'
    
    exports.byteLength = byteLength
    exports.toByteArray = toByteArray
    exports.fromByteArray = fromByteArray
    
    var lookup = []
    var revLookup = []
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
    
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i]
      revLookup[code.charCodeAt(i)] = i
    }
    
    // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications
    revLookup['-'.charCodeAt(0)] = 62
    revLookup['_'.charCodeAt(0)] = 63
    
    function getLens (b64) {
      var len = b64.length
    
      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }
    
      // Trim off extra bytes after placeholder bytes are found
      // See: https://github.com/beatgammit/base64-js/issues/42
      var validLen = b64.indexOf('=')
      if (validLen === -1) validLen = len
    
      var placeHoldersLen = validLen === len
        ? 0
        : 4 - (validLen % 4)
    
      return [validLen, placeHoldersLen]
    }
    
    // base64 is 4/3 + up to two characters of the original data
    function byteLength (b64) {
      var lens = getLens(b64)
      var validLen = lens[0]
      var placeHoldersLen = lens[1]
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }
    
    function _byteLength (b64, validLen, placeHoldersLen) {
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }
    
    function toByteArray (b64) {
      var tmp
      var lens = getLens(b64)
      var validLen = lens[0]
      var placeHoldersLen = lens[1]
    
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
    
      var curByte = 0
    
      // if there are placeholders, only get up to the last complete 4 chars
      var len = placeHoldersLen > 0
        ? validLen - 4
        : validLen
    
      for (var i = 0; i < len; i += 4) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 18) |
          (revLookup[b64.charCodeAt(i + 1)] << 12) |
          (revLookup[b64.charCodeAt(i + 2)] << 6) |
          revLookup[b64.charCodeAt(i + 3)]
        arr[curByte++] = (tmp >> 16) & 0xFF
        arr[curByte++] = (tmp >> 8) & 0xFF
        arr[curByte++] = tmp & 0xFF
      }
    
      if (placeHoldersLen === 2) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 2) |
          (revLookup[b64.charCodeAt(i + 1)] >> 4)
        arr[curByte++] = tmp & 0xFF
      }
    
      if (placeHoldersLen === 1) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 10) |
          (revLookup[b64.charCodeAt(i + 1)] << 4) |
          (revLookup[b64.charCodeAt(i + 2)] >> 2)
        arr[curByte++] = (tmp >> 8) & 0xFF
        arr[curByte++] = tmp & 0xFF
      }
    
      return arr
    }
    
    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] +
        lookup[num >> 12 & 0x3F] +
        lookup[num >> 6 & 0x3F] +
        lookup[num & 0x3F]
    }
    
    function encodeChunk (uint8, start, end) {
      var tmp
      var output = []
      for (var i = start; i < end; i += 3) {
        tmp =
          ((uint8[i] << 16) & 0xFF0000) +
          ((uint8[i + 1] << 8) & 0xFF00) +
          (uint8[i + 2] & 0xFF)
        output.push(tripletToBase64(tmp))
      }
      return output.join('')
    }
    
    function fromByteArray (uint8) {
      var tmp
      var len = uint8.length
      var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
      var parts = []
      var maxChunkLength = 16383 // must be multiple of 3
    
      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(
          uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
        ))
      }
    
      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1]
        parts.push(
          lookup[tmp >> 2] +
          lookup[(tmp << 4) & 0x3F] +
          '=='
        )
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1]
        parts.push(
          lookup[tmp >> 10] +
          lookup[(tmp >> 4) & 0x3F] +
          lookup[(tmp << 2) & 0x3F] +
          '='
        )
      }
    
      return parts.join('')
    }
    
    },{}],27:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var BlockCipher = C_lib.BlockCipher;
            var C_algo = C.algo;
    
            // Lookup tables
            var SBOX = [];
            var INV_SBOX = [];
            var SUB_MIX_0 = [];
            var SUB_MIX_1 = [];
            var SUB_MIX_2 = [];
            var SUB_MIX_3 = [];
            var INV_SUB_MIX_0 = [];
            var INV_SUB_MIX_1 = [];
            var INV_SUB_MIX_2 = [];
            var INV_SUB_MIX_3 = [];
    
            // Compute lookup tables
            (function () {
                // Compute double table
                var d = [];
                for (var i = 0; i < 256; i++) {
                    if (i < 128) {
                        d[i] = i << 1;
                    } else {
                        d[i] = (i << 1) ^ 0x11b;
                    }
                }
    
                // Walk GF(2^8)
                var x = 0;
                var xi = 0;
                for (var i = 0; i < 256; i++) {
                    // Compute sbox
                    var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
                    sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
                    SBOX[x] = sx;
                    INV_SBOX[sx] = x;
    
                    // Compute multiplication
                    var x2 = d[x];
                    var x4 = d[x2];
                    var x8 = d[x4];
    
                    // Compute sub bytes, mix columns tables
                    var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
                    SUB_MIX_0[x] = (t << 24) | (t >>> 8);
                    SUB_MIX_1[x] = (t << 16) | (t >>> 16);
                    SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
                    SUB_MIX_3[x] = t;
    
                    // Compute inv sub bytes, inv mix columns tables
                    var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
                    INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
                    INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
                    INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
                    INV_SUB_MIX_3[sx] = t;
    
                    // Compute next counter
                    if (!x) {
                        x = xi = 1;
                    } else {
                        x = x2 ^ d[d[d[x8 ^ x2]]];
                        xi ^= d[d[xi]];
                    }
                }
            }());
    
            // Precomputed Rcon lookup
            var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
    
            /**
             * AES block cipher algorithm.
             */
            var AES = C_algo.AES = BlockCipher.extend({
                _doReset: function () {
                    // Skip reset of nRounds has been set before and key did not change
                    if (this._nRounds && this._keyPriorReset === this._key) {
                        return;
                    }
    
                    // Shortcuts
                    var key = this._keyPriorReset = this._key;
                    var keyWords = key.words;
                    var keySize = key.sigBytes / 4;
    
                    // Compute number of rounds
                    var nRounds = this._nRounds = keySize + 6;
    
                    // Compute number of key schedule rows
                    var ksRows = (nRounds + 1) * 4;
    
                    // Compute key schedule
                    var keySchedule = this._keySchedule = [];
                    for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                        if (ksRow < keySize) {
                            keySchedule[ksRow] = keyWords[ksRow];
                        } else {
                            var t = keySchedule[ksRow - 1];
    
                            if (!(ksRow % keySize)) {
                                // Rot word
                                t = (t << 8) | (t >>> 24);
    
                                // Sub word
                                t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
    
                                // Mix Rcon
                                t ^= RCON[(ksRow / keySize) | 0] << 24;
                            } else if (keySize > 6 && ksRow % keySize == 4) {
                                // Sub word
                                t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                            }
    
                            keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                        }
                    }
    
                    // Compute inv key schedule
                    var invKeySchedule = this._invKeySchedule = [];
                    for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                        var ksRow = ksRows - invKsRow;
    
                        if (invKsRow % 4) {
                            var t = keySchedule[ksRow];
                        } else {
                            var t = keySchedule[ksRow - 4];
                        }
    
                        if (invKsRow < 4 || ksRow <= 4) {
                            invKeySchedule[invKsRow] = t;
                        } else {
                            invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
                                                       INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
                        }
                    }
                },
    
                encryptBlock: function (M, offset) {
                    this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
                },
    
                decryptBlock: function (M, offset) {
                    // Swap 2nd and 4th rows
                    var t = M[offset + 1];
                    M[offset + 1] = M[offset + 3];
                    M[offset + 3] = t;
    
                    this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
    
                    // Inv swap 2nd and 4th rows
                    var t = M[offset + 1];
                    M[offset + 1] = M[offset + 3];
                    M[offset + 3] = t;
                },
    
                _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
                    // Shortcut
                    var nRounds = this._nRounds;
    
                    // Get input, add round key
                    var s0 = M[offset]     ^ keySchedule[0];
                    var s1 = M[offset + 1] ^ keySchedule[1];
                    var s2 = M[offset + 2] ^ keySchedule[2];
                    var s3 = M[offset + 3] ^ keySchedule[3];
    
                    // Key schedule row counter
                    var ksRow = 4;
    
                    // Rounds
                    for (var round = 1; round < nRounds; round++) {
                        // Shift rows, sub bytes, mix columns, add round key
                        var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
                        var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
                        var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
                        var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];
    
                        // Update state
                        s0 = t0;
                        s1 = t1;
                        s2 = t2;
                        s3 = t3;
                    }
    
                    // Shift rows, sub bytes, add round key
                    var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
                    var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
                    var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
                    var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
    
                    // Set output
                    M[offset]     = t0;
                    M[offset + 1] = t1;
                    M[offset + 2] = t2;
                    M[offset + 3] = t3;
                },
    
                keySize: 256/32
            });
    
            /**
             * Shortcut functions to the cipher's object interface.
             *
             * @example
             *
             *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
             *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
             */
            C.AES = BlockCipher._createHelper(AES);
        }());
    
    
        return CryptoJS.AES;
    
    }));
    },{"./cipher-core":28,"./core":29,"./enc-base64":30,"./evpkdf":32,"./md5":37}],28:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./evpkdf"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./evpkdf"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /**
         * Cipher core components.
         */
        CryptoJS.lib.Cipher || (function (undefined) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var WordArray = C_lib.WordArray;
            var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
            var C_enc = C.enc;
            var Utf8 = C_enc.Utf8;
            var Base64 = C_enc.Base64;
            var C_algo = C.algo;
            var EvpKDF = C_algo.EvpKDF;
    
            /**
             * Abstract base cipher template.
             *
             * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
             * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
             * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
             * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
             */
            var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
                /**
                 * Configuration options.
                 *
                 * @property {WordArray} iv The IV to use for this operation.
                 */
                cfg: Base.extend(),
    
                /**
                 * Creates this cipher in encryption mode.
                 *
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {Cipher} A cipher instance.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
                 */
                createEncryptor: function (key, cfg) {
                    return this.create(this._ENC_XFORM_MODE, key, cfg);
                },
    
                /**
                 * Creates this cipher in decryption mode.
                 *
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {Cipher} A cipher instance.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
                 */
                createDecryptor: function (key, cfg) {
                    return this.create(this._DEC_XFORM_MODE, key, cfg);
                },
    
                /**
                 * Initializes a newly created cipher.
                 *
                 * @param {number} xformMode Either the encryption or decryption transormation mode constant.
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @example
                 *
                 *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
                 */
                init: function (xformMode, key, cfg) {
                    // Apply config defaults
                    this.cfg = this.cfg.extend(cfg);
    
                    // Store transform mode and key
                    this._xformMode = xformMode;
                    this._key = key;
    
                    // Set initial values
                    this.reset();
                },
    
                /**
                 * Resets this cipher to its initial state.
                 *
                 * @example
                 *
                 *     cipher.reset();
                 */
                reset: function () {
                    // Reset data buffer
                    BufferedBlockAlgorithm.reset.call(this);
    
                    // Perform concrete-cipher logic
                    this._doReset();
                },
    
                /**
                 * Adds data to be encrypted or decrypted.
                 *
                 * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
                 *
                 * @return {WordArray} The data after processing.
                 *
                 * @example
                 *
                 *     var encrypted = cipher.process('data');
                 *     var encrypted = cipher.process(wordArray);
                 */
                process: function (dataUpdate) {
                    // Append
                    this._append(dataUpdate);
    
                    // Process available blocks
                    return this._process();
                },
    
                /**
                 * Finalizes the encryption or decryption process.
                 * Note that the finalize operation is effectively a destructive, read-once operation.
                 *
                 * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
                 *
                 * @return {WordArray} The data after final processing.
                 *
                 * @example
                 *
                 *     var encrypted = cipher.finalize();
                 *     var encrypted = cipher.finalize('data');
                 *     var encrypted = cipher.finalize(wordArray);
                 */
                finalize: function (dataUpdate) {
                    // Final data update
                    if (dataUpdate) {
                        this._append(dataUpdate);
                    }
    
                    // Perform concrete-cipher logic
                    var finalProcessedData = this._doFinalize();
    
                    return finalProcessedData;
                },
    
                keySize: 128/32,
    
                ivSize: 128/32,
    
                _ENC_XFORM_MODE: 1,
    
                _DEC_XFORM_MODE: 2,
    
                /**
                 * Creates shortcut functions to a cipher's object interface.
                 *
                 * @param {Cipher} cipher The cipher to create a helper for.
                 *
                 * @return {Object} An object with encrypt and decrypt shortcut functions.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
                 */
                _createHelper: (function () {
                    function selectCipherStrategy(key) {
                        if (typeof key == 'string') {
                            return PasswordBasedCipher;
                        } else {
                            return SerializableCipher;
                        }
                    }
    
                    return function (cipher) {
                        return {
                            encrypt: function (message, key, cfg) {
                                return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                            },
    
                            decrypt: function (ciphertext, key, cfg) {
                                return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                            }
                        };
                    };
                }())
            });
    
            /**
             * Abstract base stream cipher template.
             *
             * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
             */
            var StreamCipher = C_lib.StreamCipher = Cipher.extend({
                _doFinalize: function () {
                    // Process partial blocks
                    var finalProcessedBlocks = this._process(!!'flush');
    
                    return finalProcessedBlocks;
                },
    
                blockSize: 1
            });
    
            /**
             * Mode namespace.
             */
            var C_mode = C.mode = {};
    
            /**
             * Abstract base block cipher mode template.
             */
            var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
                /**
                 * Creates this mode for encryption.
                 *
                 * @param {Cipher} cipher A block cipher instance.
                 * @param {Array} iv The IV words.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
                 */
                createEncryptor: function (cipher, iv) {
                    return this.Encryptor.create(cipher, iv);
                },
    
                /**
                 * Creates this mode for decryption.
                 *
                 * @param {Cipher} cipher A block cipher instance.
                 * @param {Array} iv The IV words.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
                 */
                createDecryptor: function (cipher, iv) {
                    return this.Decryptor.create(cipher, iv);
                },
    
                /**
                 * Initializes a newly created mode.
                 *
                 * @param {Cipher} cipher A block cipher instance.
                 * @param {Array} iv The IV words.
                 *
                 * @example
                 *
                 *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
                 */
                init: function (cipher, iv) {
                    this._cipher = cipher;
                    this._iv = iv;
                }
            });
    
            /**
             * Cipher Block Chaining mode.
             */
            var CBC = C_mode.CBC = (function () {
                /**
                 * Abstract base CBC mode.
                 */
                var CBC = BlockCipherMode.extend();
    
                /**
                 * CBC encryptor.
                 */
                CBC.Encryptor = CBC.extend({
                    /**
                     * Processes the data block at offset.
                     *
                     * @param {Array} words The data words to operate on.
                     * @param {number} offset The offset where the block starts.
                     *
                     * @example
                     *
                     *     mode.processBlock(data.words, offset);
                     */
                    processBlock: function (words, offset) {
                        // Shortcuts
                        var cipher = this._cipher;
                        var blockSize = cipher.blockSize;
    
                        // XOR and encrypt
                        xorBlock.call(this, words, offset, blockSize);
                        cipher.encryptBlock(words, offset);
    
                        // Remember this block to use with next block
                        this._prevBlock = words.slice(offset, offset + blockSize);
                    }
                });
    
                /**
                 * CBC decryptor.
                 */
                CBC.Decryptor = CBC.extend({
                    /**
                     * Processes the data block at offset.
                     *
                     * @param {Array} words The data words to operate on.
                     * @param {number} offset The offset where the block starts.
                     *
                     * @example
                     *
                     *     mode.processBlock(data.words, offset);
                     */
                    processBlock: function (words, offset) {
                        // Shortcuts
                        var cipher = this._cipher;
                        var blockSize = cipher.blockSize;
    
                        // Remember this block to use with next block
                        var thisBlock = words.slice(offset, offset + blockSize);
    
                        // Decrypt and XOR
                        cipher.decryptBlock(words, offset);
                        xorBlock.call(this, words, offset, blockSize);
    
                        // This block becomes the previous block
                        this._prevBlock = thisBlock;
                    }
                });
    
                function xorBlock(words, offset, blockSize) {
                    // Shortcut
                    var iv = this._iv;
    
                    // Choose mixing block
                    if (iv) {
                        var block = iv;
    
                        // Remove IV for subsequent blocks
                        this._iv = undefined;
                    } else {
                        var block = this._prevBlock;
                    }
    
                    // XOR blocks
                    for (var i = 0; i < blockSize; i++) {
                        words[offset + i] ^= block[i];
                    }
                }
    
                return CBC;
            }());
    
            /**
             * Padding namespace.
             */
            var C_pad = C.pad = {};
    
            /**
             * PKCS #5/7 padding strategy.
             */
            var Pkcs7 = C_pad.Pkcs7 = {
                /**
                 * Pads data using the algorithm defined in PKCS #5/7.
                 *
                 * @param {WordArray} data The data to pad.
                 * @param {number} blockSize The multiple that the data should be padded to.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
                 */
                pad: function (data, blockSize) {
                    // Shortcut
                    var blockSizeBytes = blockSize * 4;
    
                    // Count padding bytes
                    var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
    
                    // Create padding word
                    var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;
    
                    // Create padding
                    var paddingWords = [];
                    for (var i = 0; i < nPaddingBytes; i += 4) {
                        paddingWords.push(paddingWord);
                    }
                    var padding = WordArray.create(paddingWords, nPaddingBytes);
    
                    // Add padding
                    data.concat(padding);
                },
    
                /**
                 * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
                 *
                 * @param {WordArray} data The data to unpad.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     CryptoJS.pad.Pkcs7.unpad(wordArray);
                 */
                unpad: function (data) {
                    // Get number of padding bytes from last byte
                    var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
    
                    // Remove padding
                    data.sigBytes -= nPaddingBytes;
                }
            };
    
            /**
             * Abstract base block cipher template.
             *
             * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
             */
            var BlockCipher = C_lib.BlockCipher = Cipher.extend({
                /**
                 * Configuration options.
                 *
                 * @property {Mode} mode The block mode to use. Default: CBC
                 * @property {Padding} padding The padding strategy to use. Default: Pkcs7
                 */
                cfg: Cipher.cfg.extend({
                    mode: CBC,
                    padding: Pkcs7
                }),
    
                reset: function () {
                    // Reset cipher
                    Cipher.reset.call(this);
    
                    // Shortcuts
                    var cfg = this.cfg;
                    var iv = cfg.iv;
                    var mode = cfg.mode;
    
                    // Reset block mode
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        var modeCreator = mode.createEncryptor;
                    } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                        var modeCreator = mode.createDecryptor;
                        // Keep at least one block in the buffer for unpadding
                        this._minBufferSize = 1;
                    }
    
                    if (this._mode && this._mode.__creator == modeCreator) {
                        this._mode.init(this, iv && iv.words);
                    } else {
                        this._mode = modeCreator.call(mode, this, iv && iv.words);
                        this._mode.__creator = modeCreator;
                    }
                },
    
                _doProcessBlock: function (words, offset) {
                    this._mode.processBlock(words, offset);
                },
    
                _doFinalize: function () {
                    // Shortcut
                    var padding = this.cfg.padding;
    
                    // Finalize
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        // Pad data
                        padding.pad(this._data, this.blockSize);
    
                        // Process final blocks
                        var finalProcessedBlocks = this._process(!!'flush');
                    } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                        // Process final blocks
                        var finalProcessedBlocks = this._process(!!'flush');
    
                        // Unpad data
                        padding.unpad(finalProcessedBlocks);
                    }
    
                    return finalProcessedBlocks;
                },
    
                blockSize: 128/32
            });
    
            /**
             * A collection of cipher parameters.
             *
             * @property {WordArray} ciphertext The raw ciphertext.
             * @property {WordArray} key The key to this ciphertext.
             * @property {WordArray} iv The IV used in the ciphering operation.
             * @property {WordArray} salt The salt used with a key derivation function.
             * @property {Cipher} algorithm The cipher algorithm.
             * @property {Mode} mode The block mode used in the ciphering operation.
             * @property {Padding} padding The padding scheme used in the ciphering operation.
             * @property {number} blockSize The block size of the cipher.
             * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
             */
            var CipherParams = C_lib.CipherParams = Base.extend({
                /**
                 * Initializes a newly created cipher params object.
                 *
                 * @param {Object} cipherParams An object with any of the possible cipher parameters.
                 *
                 * @example
                 *
                 *     var cipherParams = CryptoJS.lib.CipherParams.create({
                 *         ciphertext: ciphertextWordArray,
                 *         key: keyWordArray,
                 *         iv: ivWordArray,
                 *         salt: saltWordArray,
                 *         algorithm: CryptoJS.algo.AES,
                 *         mode: CryptoJS.mode.CBC,
                 *         padding: CryptoJS.pad.PKCS7,
                 *         blockSize: 4,
                 *         formatter: CryptoJS.format.OpenSSL
                 *     });
                 */
                init: function (cipherParams) {
                    this.mixIn(cipherParams);
                },
    
                /**
                 * Converts this cipher params object to a string.
                 *
                 * @param {Format} formatter (Optional) The formatting strategy to use.
                 *
                 * @return {string} The stringified cipher params.
                 *
                 * @throws Error If neither the formatter nor the default formatter is set.
                 *
                 * @example
                 *
                 *     var string = cipherParams + '';
                 *     var string = cipherParams.toString();
                 *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
                 */
                toString: function (formatter) {
                    return (formatter || this.formatter).stringify(this);
                }
            });
    
            /**
             * Format namespace.
             */
            var C_format = C.format = {};
    
            /**
             * OpenSSL formatting strategy.
             */
            var OpenSSLFormatter = C_format.OpenSSL = {
                /**
                 * Converts a cipher params object to an OpenSSL-compatible string.
                 *
                 * @param {CipherParams} cipherParams The cipher params object.
                 *
                 * @return {string} The OpenSSL-compatible string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
                 */
                stringify: function (cipherParams) {
                    // Shortcuts
                    var ciphertext = cipherParams.ciphertext;
                    var salt = cipherParams.salt;
    
                    // Format
                    if (salt) {
                        var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
                    } else {
                        var wordArray = ciphertext;
                    }
    
                    return wordArray.toString(Base64);
                },
    
                /**
                 * Converts an OpenSSL-compatible string to a cipher params object.
                 *
                 * @param {string} openSSLStr The OpenSSL-compatible string.
                 *
                 * @return {CipherParams} The cipher params object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
                 */
                parse: function (openSSLStr) {
                    // Parse base64
                    var ciphertext = Base64.parse(openSSLStr);
    
                    // Shortcut
                    var ciphertextWords = ciphertext.words;
    
                    // Test for salt
                    if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
                        // Extract salt
                        var salt = WordArray.create(ciphertextWords.slice(2, 4));
    
                        // Remove salt from ciphertext
                        ciphertextWords.splice(0, 4);
                        ciphertext.sigBytes -= 16;
                    }
    
                    return CipherParams.create({ ciphertext: ciphertext, salt: salt });
                }
            };
    
            /**
             * A cipher wrapper that returns ciphertext as a serializable cipher params object.
             */
            var SerializableCipher = C_lib.SerializableCipher = Base.extend({
                /**
                 * Configuration options.
                 *
                 * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
                 */
                cfg: Base.extend({
                    format: OpenSSLFormatter
                }),
    
                /**
                 * Encrypts a message.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {WordArray|string} message The message to encrypt.
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {CipherParams} A cipher params object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 */
                encrypt: function (cipher, message, key, cfg) {
                    // Apply config defaults
                    cfg = this.cfg.extend(cfg);
    
                    // Encrypt
                    var encryptor = cipher.createEncryptor(key, cfg);
                    var ciphertext = encryptor.finalize(message);
    
                    // Shortcut
                    var cipherCfg = encryptor.cfg;
    
                    // Create and return serializable cipher params
                    return CipherParams.create({
                        ciphertext: ciphertext,
                        key: key,
                        iv: cipherCfg.iv,
                        algorithm: cipher,
                        mode: cipherCfg.mode,
                        padding: cipherCfg.padding,
                        blockSize: cipher.blockSize,
                        formatter: cfg.format
                    });
                },
    
                /**
                 * Decrypts serialized ciphertext.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {WordArray} The plaintext.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 */
                decrypt: function (cipher, ciphertext, key, cfg) {
                    // Apply config defaults
                    cfg = this.cfg.extend(cfg);
    
                    // Convert string to CipherParams
                    ciphertext = this._parse(ciphertext, cfg.format);
    
                    // Decrypt
                    var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
    
                    return plaintext;
                },
    
                /**
                 * Converts serialized ciphertext to CipherParams,
                 * else assumed CipherParams already and returns ciphertext unchanged.
                 *
                 * @param {CipherParams|string} ciphertext The ciphertext.
                 * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
                 *
                 * @return {CipherParams} The unserialized ciphertext.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
                 */
                _parse: function (ciphertext, format) {
                    if (typeof ciphertext == 'string') {
                        return format.parse(ciphertext, this);
                    } else {
                        return ciphertext;
                    }
                }
            });
    
            /**
             * Key derivation function namespace.
             */
            var C_kdf = C.kdf = {};
    
            /**
             * OpenSSL key derivation function.
             */
            var OpenSSLKdf = C_kdf.OpenSSL = {
                /**
                 * Derives a key and IV from a password.
                 *
                 * @param {string} password The password to derive from.
                 * @param {number} keySize The size in words of the key to generate.
                 * @param {number} ivSize The size in words of the IV to generate.
                 * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
                 *
                 * @return {CipherParams} A cipher params object with the key, IV, and salt.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
                 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
                 */
                execute: function (password, keySize, ivSize, salt) {
                    // Generate random salt
                    if (!salt) {
                        salt = WordArray.random(64/8);
                    }
    
                    // Derive key and IV
                    var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
    
                    // Separate key and IV
                    var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
                    key.sigBytes = keySize * 4;
    
                    // Return params
                    return CipherParams.create({ key: key, iv: iv, salt: salt });
                }
            };
    
            /**
             * A serializable cipher wrapper that derives the key from a password,
             * and returns ciphertext as a serializable cipher params object.
             */
            var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
                /**
                 * Configuration options.
                 *
                 * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
                 */
                cfg: SerializableCipher.cfg.extend({
                    kdf: OpenSSLKdf
                }),
    
                /**
                 * Encrypts a message using a password.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {WordArray|string} message The message to encrypt.
                 * @param {string} password The password.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {CipherParams} A cipher params object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
                 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
                 */
                encrypt: function (cipher, message, password, cfg) {
                    // Apply config defaults
                    cfg = this.cfg.extend(cfg);
    
                    // Derive key and other params
                    var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
    
                    // Add IV to config
                    cfg.iv = derivedParams.iv;
    
                    // Encrypt
                    var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
    
                    // Mix in derived params
                    ciphertext.mixIn(derivedParams);
    
                    return ciphertext;
                },
    
                /**
                 * Decrypts serialized ciphertext using a password.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
                 * @param {string} password The password.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {WordArray} The plaintext.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
                 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
                 */
                decrypt: function (cipher, ciphertext, password, cfg) {
                    // Apply config defaults
                    cfg = this.cfg.extend(cfg);
    
                    // Convert string to CipherParams
                    ciphertext = this._parse(ciphertext, cfg.format);
    
                    // Derive key and other params
                    var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
    
                    // Add IV to config
                    cfg.iv = derivedParams.iv;
    
                    // Decrypt
                    var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
    
                    return plaintext;
                }
            });
        }());
    
    
    }));
    },{"./core":29,"./evpkdf":32}],29:[function(require,module,exports){
    ;(function (root, factory) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory();
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define([], factory);
        }
        else {
            // Global (browser)
            root.CryptoJS = factory();
        }
    }(this, function () {
    
        /**
         * CryptoJS core components.
         */
        var CryptoJS = CryptoJS || (function (Math, undefined) {
            /*
             * Local polyfil of Object.create
             */
            var create = Object.create || (function () {
                function F() {};
    
                return function (obj) {
                    var subtype;
    
                    F.prototype = obj;
    
                    subtype = new F();
    
                    F.prototype = null;
    
                    return subtype;
                };
            }())
    
            /**
             * CryptoJS namespace.
             */
            var C = {};
    
            /**
             * Library namespace.
             */
            var C_lib = C.lib = {};
    
            /**
             * Base object for prototypal inheritance.
             */
            var Base = C_lib.Base = (function () {
    
    
                return {
                    /**
                     * Creates a new object that inherits from this object.
                     *
                     * @param {Object} overrides Properties to copy into the new object.
                     *
                     * @return {Object} The new object.
                     *
                     * @static
                     *
                     * @example
                     *
                     *     var MyType = CryptoJS.lib.Base.extend({
                     *         field: 'value',
                     *
                     *         method: function () {
                     *         }
                     *     });
                     */
                    extend: function (overrides) {
                        // Spawn
                        var subtype = create(this);
    
                        // Augment
                        if (overrides) {
                            subtype.mixIn(overrides);
                        }
    
                        // Create default initializer
                        if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
                            subtype.init = function () {
                                subtype.$super.init.apply(this, arguments);
                            };
                        }
    
                        // Initializer's prototype is the subtype object
                        subtype.init.prototype = subtype;
    
                        // Reference supertype
                        subtype.$super = this;
    
                        return subtype;
                    },
    
                    /**
                     * Extends this object and runs the init method.
                     * Arguments to create() will be passed to init().
                     *
                     * @return {Object} The new object.
                     *
                     * @static
                     *
                     * @example
                     *
                     *     var instance = MyType.create();
                     */
                    create: function () {
                        var instance = this.extend();
                        instance.init.apply(instance, arguments);
    
                        return instance;
                    },
    
                    /**
                     * Initializes a newly created object.
                     * Override this method to add some logic when your objects are created.
                     *
                     * @example
                     *
                     *     var MyType = CryptoJS.lib.Base.extend({
                     *         init: function () {
                     *             // ...
                     *         }
                     *     });
                     */
                    init: function () {
                    },
    
                    /**
                     * Copies properties into this object.
                     *
                     * @param {Object} properties The properties to mix in.
                     *
                     * @example
                     *
                     *     MyType.mixIn({
                     *         field: 'value'
                     *     });
                     */
                    mixIn: function (properties) {
                        for (var propertyName in properties) {
                            if (properties.hasOwnProperty(propertyName)) {
                                this[propertyName] = properties[propertyName];
                            }
                        }
    
                        // IE won't copy toString using the loop above
                        if (properties.hasOwnProperty('toString')) {
                            this.toString = properties.toString;
                        }
                    },
    
                    /**
                     * Creates a copy of this object.
                     *
                     * @return {Object} The clone.
                     *
                     * @example
                     *
                     *     var clone = instance.clone();
                     */
                    clone: function () {
                        return this.init.prototype.extend(this);
                    }
                };
            }());
    
            /**
             * An array of 32-bit words.
             *
             * @property {Array} words The array of 32-bit words.
             * @property {number} sigBytes The number of significant bytes in this word array.
             */
            var WordArray = C_lib.WordArray = Base.extend({
                /**
                 * Initializes a newly created word array.
                 *
                 * @param {Array} words (Optional) An array of 32-bit words.
                 * @param {number} sigBytes (Optional) The number of significant bytes in the words.
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.lib.WordArray.create();
                 *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
                 *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
                 */
                init: function (words, sigBytes) {
                    words = this.words = words || [];
    
                    if (sigBytes != undefined) {
                        this.sigBytes = sigBytes;
                    } else {
                        this.sigBytes = words.length * 4;
                    }
                },
    
                /**
                 * Converts this word array to a string.
                 *
                 * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
                 *
                 * @return {string} The stringified word array.
                 *
                 * @example
                 *
                 *     var string = wordArray + '';
                 *     var string = wordArray.toString();
                 *     var string = wordArray.toString(CryptoJS.enc.Utf8);
                 */
                toString: function (encoder) {
                    return (encoder || Hex).stringify(this);
                },
    
                /**
                 * Concatenates a word array to this word array.
                 *
                 * @param {WordArray} wordArray The word array to append.
                 *
                 * @return {WordArray} This word array.
                 *
                 * @example
                 *
                 *     wordArray1.concat(wordArray2);
                 */
                concat: function (wordArray) {
                    // Shortcuts
                    var thisWords = this.words;
                    var thatWords = wordArray.words;
                    var thisSigBytes = this.sigBytes;
                    var thatSigBytes = wordArray.sigBytes;
    
                    // Clamp excess bits
                    this.clamp();
    
                    // Concat
                    if (thisSigBytes % 4) {
                        // Copy one byte at a time
                        for (var i = 0; i < thatSigBytes; i++) {
                            var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                            thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                        }
                    } else {
                        // Copy one word at a time
                        for (var i = 0; i < thatSigBytes; i += 4) {
                            thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
                        }
                    }
                    this.sigBytes += thatSigBytes;
    
                    // Chainable
                    return this;
                },
    
                /**
                 * Removes insignificant bits.
                 *
                 * @example
                 *
                 *     wordArray.clamp();
                 */
                clamp: function () {
                    // Shortcuts
                    var words = this.words;
                    var sigBytes = this.sigBytes;
    
                    // Clamp
                    words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
                    words.length = Math.ceil(sigBytes / 4);
                },
    
                /**
                 * Creates a copy of this word array.
                 *
                 * @return {WordArray} The clone.
                 *
                 * @example
                 *
                 *     var clone = wordArray.clone();
                 */
                clone: function () {
                    var clone = Base.clone.call(this);
                    clone.words = this.words.slice(0);
    
                    return clone;
                },
    
                /**
                 * Creates a word array filled with random bytes.
                 *
                 * @param {number} nBytes The number of random bytes to generate.
                 *
                 * @return {WordArray} The random word array.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.lib.WordArray.random(16);
                 */
                random: function (nBytes) {
                    var words = [];
    
                    var r = (function (m_w) {
                        var m_w = m_w;
                        var m_z = 0x3ade68b1;
                        var mask = 0xffffffff;
    
                        return function () {
                            m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
                            m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
                            var result = ((m_z << 0x10) + m_w) & mask;
                            result /= 0x100000000;
                            result += 0.5;
                            return result * (Math.random() > .5 ? 1 : -1);
                        }
                    });
    
                    for (var i = 0, rcache; i < nBytes; i += 4) {
                        var _r = r((rcache || Math.random()) * 0x100000000);
    
                        rcache = _r() * 0x3ade67b7;
                        words.push((_r() * 0x100000000) | 0);
                    }
    
                    return new WordArray.init(words, nBytes);
                }
            });
    
            /**
             * Encoder namespace.
             */
            var C_enc = C.enc = {};
    
            /**
             * Hex encoding strategy.
             */
            var Hex = C_enc.Hex = {
                /**
                 * Converts a word array to a hex string.
                 *
                 * @param {WordArray} wordArray The word array.
                 *
                 * @return {string} The hex string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
                 */
                stringify: function (wordArray) {
                    // Shortcuts
                    var words = wordArray.words;
                    var sigBytes = wordArray.sigBytes;
    
                    // Convert
                    var hexChars = [];
                    for (var i = 0; i < sigBytes; i++) {
                        var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                        hexChars.push((bite >>> 4).toString(16));
                        hexChars.push((bite & 0x0f).toString(16));
                    }
    
                    return hexChars.join('');
                },
    
                /**
                 * Converts a hex string to a word array.
                 *
                 * @param {string} hexStr The hex string.
                 *
                 * @return {WordArray} The word array.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
                 */
                parse: function (hexStr) {
                    // Shortcut
                    var hexStrLength = hexStr.length;
    
                    // Convert
                    var words = [];
                    for (var i = 0; i < hexStrLength; i += 2) {
                        words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
                    }
    
                    return new WordArray.init(words, hexStrLength / 2);
                }
            };
    
            /**
             * Latin1 encoding strategy.
             */
            var Latin1 = C_enc.Latin1 = {
                /**
                 * Converts a word array to a Latin1 string.
                 *
                 * @param {WordArray} wordArray The word array.
                 *
                 * @return {string} The Latin1 string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
                 */
                stringify: function (wordArray) {
                    // Shortcuts
                    var words = wordArray.words;
                    var sigBytes = wordArray.sigBytes;
    
                    // Convert
                    var latin1Chars = [];
                    for (var i = 0; i < sigBytes; i++) {
                        var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                        latin1Chars.push(String.fromCharCode(bite));
                    }
    
                    return latin1Chars.join('');
                },
    
                /**
                 * Converts a Latin1 string to a word array.
                 *
                 * @param {string} latin1Str The Latin1 string.
                 *
                 * @return {WordArray} The word array.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
                 */
                parse: function (latin1Str) {
                    // Shortcut
                    var latin1StrLength = latin1Str.length;
    
                    // Convert
                    var words = [];
                    for (var i = 0; i < latin1StrLength; i++) {
                        words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
                    }
    
                    return new WordArray.init(words, latin1StrLength);
                }
            };
    
            /**
             * UTF-8 encoding strategy.
             */
            var Utf8 = C_enc.Utf8 = {
                /**
                 * Converts a word array to a UTF-8 string.
                 *
                 * @param {WordArray} wordArray The word array.
                 *
                 * @return {string} The UTF-8 string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
                 */
                stringify: function (wordArray) {
                    try {
                        return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                    } catch (e) {
                        throw new Error('Malformed UTF-8 data');
                    }
                },
    
                /**
                 * Converts a UTF-8 string to a word array.
                 *
                 * @param {string} utf8Str The UTF-8 string.
                 *
                 * @return {WordArray} The word array.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
                 */
                parse: function (utf8Str) {
                    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
                }
            };
    
            /**
             * Abstract buffered block algorithm template.
             *
             * The property blockSize must be implemented in a concrete subtype.
             *
             * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
             */
            var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
                /**
                 * Resets this block algorithm's data buffer to its initial state.
                 *
                 * @example
                 *
                 *     bufferedBlockAlgorithm.reset();
                 */
                reset: function () {
                    // Initial values
                    this._data = new WordArray.init();
                    this._nDataBytes = 0;
                },
    
                /**
                 * Adds new data to this block algorithm's buffer.
                 *
                 * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
                 *
                 * @example
                 *
                 *     bufferedBlockAlgorithm._append('data');
                 *     bufferedBlockAlgorithm._append(wordArray);
                 */
                _append: function (data) {
                    // Convert string to WordArray, else assume WordArray already
                    if (typeof data == 'string') {
                        data = Utf8.parse(data);
                    }
    
                    // Append
                    this._data.concat(data);
                    this._nDataBytes += data.sigBytes;
                },
    
                /**
                 * Processes available data blocks.
                 *
                 * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
                 *
                 * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
                 *
                 * @return {WordArray} The processed data.
                 *
                 * @example
                 *
                 *     var processedData = bufferedBlockAlgorithm._process();
                 *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
                 */
                _process: function (doFlush) {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
                    var dataSigBytes = data.sigBytes;
                    var blockSize = this.blockSize;
                    var blockSizeBytes = blockSize * 4;
    
                    // Count blocks ready
                    var nBlocksReady = dataSigBytes / blockSizeBytes;
                    if (doFlush) {
                        // Round up to include partial blocks
                        nBlocksReady = Math.ceil(nBlocksReady);
                    } else {
                        // Round down to include only full blocks,
                        // less the number of blocks that must remain in the buffer
                        nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
                    }
    
                    // Count words ready
                    var nWordsReady = nBlocksReady * blockSize;
    
                    // Count bytes ready
                    var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
    
                    // Process blocks
                    if (nWordsReady) {
                        for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                            // Perform concrete-algorithm logic
                            this._doProcessBlock(dataWords, offset);
                        }
    
                        // Remove processed words
                        var processedWords = dataWords.splice(0, nWordsReady);
                        data.sigBytes -= nBytesReady;
                    }
    
                    // Return processed words
                    return new WordArray.init(processedWords, nBytesReady);
                },
    
                /**
                 * Creates a copy of this object.
                 *
                 * @return {Object} The clone.
                 *
                 * @example
                 *
                 *     var clone = bufferedBlockAlgorithm.clone();
                 */
                clone: function () {
                    var clone = Base.clone.call(this);
                    clone._data = this._data.clone();
    
                    return clone;
                },
    
                _minBufferSize: 0
            });
    
            /**
             * Abstract hasher template.
             *
             * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
             */
            var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
                /**
                 * Configuration options.
                 */
                cfg: Base.extend(),
    
                /**
                 * Initializes a newly created hasher.
                 *
                 * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
                 *
                 * @example
                 *
                 *     var hasher = CryptoJS.algo.SHA256.create();
                 */
                init: function (cfg) {
                    // Apply config defaults
                    this.cfg = this.cfg.extend(cfg);
    
                    // Set initial values
                    this.reset();
                },
    
                /**
                 * Resets this hasher to its initial state.
                 *
                 * @example
                 *
                 *     hasher.reset();
                 */
                reset: function () {
                    // Reset data buffer
                    BufferedBlockAlgorithm.reset.call(this);
    
                    // Perform concrete-hasher logic
                    this._doReset();
                },
    
                /**
                 * Updates this hasher with a message.
                 *
                 * @param {WordArray|string} messageUpdate The message to append.
                 *
                 * @return {Hasher} This hasher.
                 *
                 * @example
                 *
                 *     hasher.update('message');
                 *     hasher.update(wordArray);
                 */
                update: function (messageUpdate) {
                    // Append
                    this._append(messageUpdate);
    
                    // Update the hash
                    this._process();
    
                    // Chainable
                    return this;
                },
    
                /**
                 * Finalizes the hash computation.
                 * Note that the finalize operation is effectively a destructive, read-once operation.
                 *
                 * @param {WordArray|string} messageUpdate (Optional) A final message update.
                 *
                 * @return {WordArray} The hash.
                 *
                 * @example
                 *
                 *     var hash = hasher.finalize();
                 *     var hash = hasher.finalize('message');
                 *     var hash = hasher.finalize(wordArray);
                 */
                finalize: function (messageUpdate) {
                    // Final message update
                    if (messageUpdate) {
                        this._append(messageUpdate);
                    }
    
                    // Perform concrete-hasher logic
                    var hash = this._doFinalize();
    
                    return hash;
                },
    
                blockSize: 512/32,
    
                /**
                 * Creates a shortcut function to a hasher's object interface.
                 *
                 * @param {Hasher} hasher The hasher to create a helper for.
                 *
                 * @return {Function} The shortcut function.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
                 */
                _createHelper: function (hasher) {
                    return function (message, cfg) {
                        return new hasher.init(cfg).finalize(message);
                    };
                },
    
                /**
                 * Creates a shortcut function to the HMAC's object interface.
                 *
                 * @param {Hasher} hasher The hasher to use in this HMAC helper.
                 *
                 * @return {Function} The shortcut function.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
                 */
                _createHmacHelper: function (hasher) {
                    return function (message, key) {
                        return new C_algo.HMAC.init(hasher, key).finalize(message);
                    };
                }
            });
    
            /**
             * Algorithm namespace.
             */
            var C_algo = C.algo = {};
    
            return C;
        }(Math));
    
    
        return CryptoJS;
    
    }));
    },{}],30:[function(require,module,exports){
    ;(function (root, factory) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var C_enc = C.enc;
    
            /**
             * Base64 encoding strategy.
             */
            var Base64 = C_enc.Base64 = {
                /**
                 * Converts a word array to a Base64 string.
                 *
                 * @param {WordArray} wordArray The word array.
                 *
                 * @return {string} The Base64 string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
                 */
                stringify: function (wordArray) {
                    // Shortcuts
                    var words = wordArray.words;
                    var sigBytes = wordArray.sigBytes;
                    var map = this._map;
    
                    // Clamp excess bits
                    wordArray.clamp();
    
                    // Convert
                    var base64Chars = [];
                    for (var i = 0; i < sigBytes; i += 3) {
                        var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
                        var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                        var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
    
                        var triplet = (byte1 << 16) | (byte2 << 8) | byte3;
    
                        for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                            base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                        }
                    }
    
                    // Add padding
                    var paddingChar = map.charAt(64);
                    if (paddingChar) {
                        while (base64Chars.length % 4) {
                            base64Chars.push(paddingChar);
                        }
                    }
    
                    return base64Chars.join('');
                },
    
                /**
                 * Converts a Base64 string to a word array.
                 *
                 * @param {string} base64Str The Base64 string.
                 *
                 * @return {WordArray} The word array.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
                 */
                parse: function (base64Str) {
                    // Shortcuts
                    var base64StrLength = base64Str.length;
                    var map = this._map;
                    var reverseMap = this._reverseMap;
    
                    if (!reverseMap) {
                            reverseMap = this._reverseMap = [];
                            for (var j = 0; j < map.length; j++) {
                                reverseMap[map.charCodeAt(j)] = j;
                            }
                    }
    
                    // Ignore padding
                    var paddingChar = map.charAt(64);
                    if (paddingChar) {
                        var paddingIndex = base64Str.indexOf(paddingChar);
                        if (paddingIndex !== -1) {
                            base64StrLength = paddingIndex;
                        }
                    }
    
                    // Convert
                    return parseLoop(base64Str, base64StrLength, reverseMap);
    
                },
    
                _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
            };
    
            function parseLoop(base64Str, base64StrLength, reverseMap) {
              var words = [];
              var nBytes = 0;
              for (var i = 0; i < base64StrLength; i++) {
                  if (i % 4) {
                      var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
                      var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
                      words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                      nBytes++;
                  }
              }
              return WordArray.create(words, nBytes);
            }
        }());
    
    
        return CryptoJS.enc.Base64;
    
    }));
    },{"./core":29}],31:[function(require,module,exports){
    ;(function (root, factory) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var C_enc = C.enc;
    
            /**
             * UTF-16 BE encoding strategy.
             */
            var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
                /**
                 * Converts a word array to a UTF-16 BE string.
                 *
                 * @param {WordArray} wordArray The word array.
                 *
                 * @return {string} The UTF-16 BE string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
                 */
                stringify: function (wordArray) {
                    // Shortcuts
                    var words = wordArray.words;
                    var sigBytes = wordArray.sigBytes;
    
                    // Convert
                    var utf16Chars = [];
                    for (var i = 0; i < sigBytes; i += 2) {
                        var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
                        utf16Chars.push(String.fromCharCode(codePoint));
                    }
    
                    return utf16Chars.join('');
                },
    
                /**
                 * Converts a UTF-16 BE string to a word array.
                 *
                 * @param {string} utf16Str The UTF-16 BE string.
                 *
                 * @return {WordArray} The word array.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
                 */
                parse: function (utf16Str) {
                    // Shortcut
                    var utf16StrLength = utf16Str.length;
    
                    // Convert
                    var words = [];
                    for (var i = 0; i < utf16StrLength; i++) {
                        words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
                    }
    
                    return WordArray.create(words, utf16StrLength * 2);
                }
            };
    
            /**
             * UTF-16 LE encoding strategy.
             */
            C_enc.Utf16LE = {
                /**
                 * Converts a word array to a UTF-16 LE string.
                 *
                 * @param {WordArray} wordArray The word array.
                 *
                 * @return {string} The UTF-16 LE string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
                 */
                stringify: function (wordArray) {
                    // Shortcuts
                    var words = wordArray.words;
                    var sigBytes = wordArray.sigBytes;
    
                    // Convert
                    var utf16Chars = [];
                    for (var i = 0; i < sigBytes; i += 2) {
                        var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
                        utf16Chars.push(String.fromCharCode(codePoint));
                    }
    
                    return utf16Chars.join('');
                },
    
                /**
                 * Converts a UTF-16 LE string to a word array.
                 *
                 * @param {string} utf16Str The UTF-16 LE string.
                 *
                 * @return {WordArray} The word array.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
                 */
                parse: function (utf16Str) {
                    // Shortcut
                    var utf16StrLength = utf16Str.length;
    
                    // Convert
                    var words = [];
                    for (var i = 0; i < utf16StrLength; i++) {
                        words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
                    }
    
                    return WordArray.create(words, utf16StrLength * 2);
                }
            };
    
            function swapEndian(word) {
                return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
            }
        }());
    
    
        return CryptoJS.enc.Utf16;
    
    }));
    },{"./core":29}],32:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./sha1", "./hmac"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var WordArray = C_lib.WordArray;
            var C_algo = C.algo;
            var MD5 = C_algo.MD5;
    
            /**
             * This key derivation function is meant to conform with EVP_BytesToKey.
             * www.openssl.org/docs/crypto/EVP_BytesToKey.html
             */
            var EvpKDF = C_algo.EvpKDF = Base.extend({
                /**
                 * Configuration options.
                 *
                 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
                 * @property {Hasher} hasher The hash algorithm to use. Default: MD5
                 * @property {number} iterations The number of iterations to perform. Default: 1
                 */
                cfg: Base.extend({
                    keySize: 128/32,
                    hasher: MD5,
                    iterations: 1
                }),
    
                /**
                 * Initializes a newly created key derivation function.
                 *
                 * @param {Object} cfg (Optional) The configuration options to use for the derivation.
                 *
                 * @example
                 *
                 *     var kdf = CryptoJS.algo.EvpKDF.create();
                 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
                 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
                 */
                init: function (cfg) {
                    this.cfg = this.cfg.extend(cfg);
                },
    
                /**
                 * Derives a key from a password.
                 *
                 * @param {WordArray|string} password The password.
                 * @param {WordArray|string} salt A salt.
                 *
                 * @return {WordArray} The derived key.
                 *
                 * @example
                 *
                 *     var key = kdf.compute(password, salt);
                 */
                compute: function (password, salt) {
                    // Shortcut
                    var cfg = this.cfg;
    
                    // Init hasher
                    var hasher = cfg.hasher.create();
    
                    // Initial values
                    var derivedKey = WordArray.create();
    
                    // Shortcuts
                    var derivedKeyWords = derivedKey.words;
                    var keySize = cfg.keySize;
                    var iterations = cfg.iterations;
    
                    // Generate key
                    while (derivedKeyWords.length < keySize) {
                        if (block) {
                            hasher.update(block);
                        }
                        var block = hasher.update(password).finalize(salt);
                        hasher.reset();
    
                        // Iterations
                        for (var i = 1; i < iterations; i++) {
                            block = hasher.finalize(block);
                            hasher.reset();
                        }
    
                        derivedKey.concat(block);
                    }
                    derivedKey.sigBytes = keySize * 4;
    
                    return derivedKey;
                }
            });
    
            /**
             * Derives a key from a password.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             * @param {Object} cfg (Optional) The configuration options to use for this computation.
             *
             * @return {WordArray} The derived key.
             *
             * @static
             *
             * @example
             *
             *     var key = CryptoJS.EvpKDF(password, salt);
             *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
             *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
             */
            C.EvpKDF = function (password, salt, cfg) {
                return EvpKDF.create(cfg).compute(password, salt);
            };
        }());
    
    
        return CryptoJS.EvpKDF;
    
    }));
    },{"./core":29,"./hmac":34,"./sha1":53}],33:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function (undefined) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var CipherParams = C_lib.CipherParams;
            var C_enc = C.enc;
            var Hex = C_enc.Hex;
            var C_format = C.format;
    
            var HexFormatter = C_format.Hex = {
                /**
                 * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
                 *
                 * @param {CipherParams} cipherParams The cipher params object.
                 *
                 * @return {string} The hexadecimally encoded string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
                 */
                stringify: function (cipherParams) {
                    return cipherParams.ciphertext.toString(Hex);
                },
    
                /**
                 * Converts a hexadecimally encoded ciphertext string to a cipher params object.
                 *
                 * @param {string} input The hexadecimally encoded string.
                 *
                 * @return {CipherParams} The cipher params object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
                 */
                parse: function (input) {
                    var ciphertext = Hex.parse(input);
                    return CipherParams.create({ ciphertext: ciphertext });
                }
            };
        }());
    
    
        return CryptoJS.format.Hex;
    
    }));
    },{"./cipher-core":28,"./core":29}],34:[function(require,module,exports){
    ;(function (root, factory) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var C_enc = C.enc;
            var Utf8 = C_enc.Utf8;
            var C_algo = C.algo;
    
            /**
             * HMAC algorithm.
             */
            var HMAC = C_algo.HMAC = Base.extend({
                /**
                 * Initializes a newly created HMAC.
                 *
                 * @param {Hasher} hasher The hash algorithm to use.
                 * @param {WordArray|string} key The secret key.
                 *
                 * @example
                 *
                 *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
                 */
                init: function (hasher, key) {
                    // Init hasher
                    hasher = this._hasher = new hasher.init();
    
                    // Convert string to WordArray, else assume WordArray already
                    if (typeof key == 'string') {
                        key = Utf8.parse(key);
                    }
    
                    // Shortcuts
                    var hasherBlockSize = hasher.blockSize;
                    var hasherBlockSizeBytes = hasherBlockSize * 4;
    
                    // Allow arbitrary length keys
                    if (key.sigBytes > hasherBlockSizeBytes) {
                        key = hasher.finalize(key);
                    }
    
                    // Clamp excess bits
                    key.clamp();
    
                    // Clone key for inner and outer pads
                    var oKey = this._oKey = key.clone();
                    var iKey = this._iKey = key.clone();
    
                    // Shortcuts
                    var oKeyWords = oKey.words;
                    var iKeyWords = iKey.words;
    
                    // XOR keys with pad constants
                    for (var i = 0; i < hasherBlockSize; i++) {
                        oKeyWords[i] ^= 0x5c5c5c5c;
                        iKeyWords[i] ^= 0x36363636;
                    }
                    oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
    
                    // Set initial values
                    this.reset();
                },
    
                /**
                 * Resets this HMAC to its initial state.
                 *
                 * @example
                 *
                 *     hmacHasher.reset();
                 */
                reset: function () {
                    // Shortcut
                    var hasher = this._hasher;
    
                    // Reset
                    hasher.reset();
                    hasher.update(this._iKey);
                },
    
                /**
                 * Updates this HMAC with a message.
                 *
                 * @param {WordArray|string} messageUpdate The message to append.
                 *
                 * @return {HMAC} This HMAC instance.
                 *
                 * @example
                 *
                 *     hmacHasher.update('message');
                 *     hmacHasher.update(wordArray);
                 */
                update: function (messageUpdate) {
                    this._hasher.update(messageUpdate);
    
                    // Chainable
                    return this;
                },
    
                /**
                 * Finalizes the HMAC computation.
                 * Note that the finalize operation is effectively a destructive, read-once operation.
                 *
                 * @param {WordArray|string} messageUpdate (Optional) A final message update.
                 *
                 * @return {WordArray} The HMAC.
                 *
                 * @example
                 *
                 *     var hmac = hmacHasher.finalize();
                 *     var hmac = hmacHasher.finalize('message');
                 *     var hmac = hmacHasher.finalize(wordArray);
                 */
                finalize: function (messageUpdate) {
                    // Shortcut
                    var hasher = this._hasher;
    
                    // Compute HMAC
                    var innerHash = hasher.finalize(messageUpdate);
                    hasher.reset();
                    var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
    
                    return hmac;
                }
            });
        }());
    
    
    }));
    },{"./core":29}],35:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./x64-core"), require("./lib-typedarrays"), require("./enc-utf16"), require("./enc-base64"), require("./md5"), require("./sha1"), require("./sha256"), require("./sha224"), require("./sha512"), require("./sha384"), require("./sha3"), require("./ripemd160"), require("./hmac"), require("./pbkdf2"), require("./evpkdf"), require("./cipher-core"), require("./mode-cfb"), require("./mode-ctr"), require("./mode-ctr-gladman"), require("./mode-ofb"), require("./mode-ecb"), require("./pad-ansix923"), require("./pad-iso10126"), require("./pad-iso97971"), require("./pad-zeropadding"), require("./pad-nopadding"), require("./format-hex"), require("./aes"), require("./tripledes"), require("./rc4"), require("./rabbit"), require("./rabbit-legacy"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
        }
        else {
            // Global (browser)
            root.CryptoJS = factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        return CryptoJS;
    
    }));
    },{"./aes":27,"./cipher-core":28,"./core":29,"./enc-base64":30,"./enc-utf16":31,"./evpkdf":32,"./format-hex":33,"./hmac":34,"./lib-typedarrays":36,"./md5":37,"./mode-cfb":38,"./mode-ctr":40,"./mode-ctr-gladman":39,"./mode-ecb":41,"./mode-ofb":42,"./pad-ansix923":43,"./pad-iso10126":44,"./pad-iso97971":45,"./pad-nopadding":46,"./pad-zeropadding":47,"./pbkdf2":48,"./rabbit":50,"./rabbit-legacy":49,"./rc4":51,"./ripemd160":52,"./sha1":53,"./sha224":54,"./sha256":55,"./sha3":56,"./sha384":57,"./sha512":58,"./tripledes":59,"./x64-core":60}],36:[function(require,module,exports){
    ;(function (root, factory) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Check if typed arrays are supported
            if (typeof ArrayBuffer != 'function') {
                return;
            }
    
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
    
            // Reference original init
            var superInit = WordArray.init;
    
            // Augment WordArray.init to handle typed arrays
            var subInit = WordArray.init = function (typedArray) {
                // Convert buffers to uint8
                if (typedArray instanceof ArrayBuffer) {
                    typedArray = new Uint8Array(typedArray);
                }
    
                // Convert other array views to uint8
                if (
                    typedArray instanceof Int8Array ||
                    (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
                    typedArray instanceof Int16Array ||
                    typedArray instanceof Uint16Array ||
                    typedArray instanceof Int32Array ||
                    typedArray instanceof Uint32Array ||
                    typedArray instanceof Float32Array ||
                    typedArray instanceof Float64Array
                ) {
                    typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
                }
    
                // Handle Uint8Array
                if (typedArray instanceof Uint8Array) {
                    // Shortcut
                    var typedArrayByteLength = typedArray.byteLength;
    
                    // Extract bytes
                    var words = [];
                    for (var i = 0; i < typedArrayByteLength; i++) {
                        words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
                    }
    
                    // Initialize this word array
                    superInit.call(this, words, typedArrayByteLength);
                } else {
                    // Else call normal init
                    superInit.apply(this, arguments);
                }
            };
    
            subInit.prototype = WordArray;
        }());
    
    
        return CryptoJS.lib.WordArray;
    
    }));
    },{"./core":29}],37:[function(require,module,exports){
    ;(function (root, factory) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function (Math) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var Hasher = C_lib.Hasher;
            var C_algo = C.algo;
    
            // Constants table
            var T = [];
    
            // Compute constants
            (function () {
                for (var i = 0; i < 64; i++) {
                    T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
                }
            }());
    
            /**
             * MD5 hash algorithm.
             */
            var MD5 = C_algo.MD5 = Hasher.extend({
                _doReset: function () {
                    this._hash = new WordArray.init([
                        0x67452301, 0xefcdab89,
                        0x98badcfe, 0x10325476
                    ]);
                },
    
                _doProcessBlock: function (M, offset) {
                    // Swap endian
                    for (var i = 0; i < 16; i++) {
                        // Shortcuts
                        var offset_i = offset + i;
                        var M_offset_i = M[offset_i];
    
                        M[offset_i] = (
                            (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
                            (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
                        );
                    }
    
                    // Shortcuts
                    var H = this._hash.words;
    
                    var M_offset_0  = M[offset + 0];
                    var M_offset_1  = M[offset + 1];
                    var M_offset_2  = M[offset + 2];
                    var M_offset_3  = M[offset + 3];
                    var M_offset_4  = M[offset + 4];
                    var M_offset_5  = M[offset + 5];
                    var M_offset_6  = M[offset + 6];
                    var M_offset_7  = M[offset + 7];
                    var M_offset_8  = M[offset + 8];
                    var M_offset_9  = M[offset + 9];
                    var M_offset_10 = M[offset + 10];
                    var M_offset_11 = M[offset + 11];
                    var M_offset_12 = M[offset + 12];
                    var M_offset_13 = M[offset + 13];
                    var M_offset_14 = M[offset + 14];
                    var M_offset_15 = M[offset + 15];
    
                    // Working varialbes
                    var a = H[0];
                    var b = H[1];
                    var c = H[2];
                    var d = H[3];
    
                    // Computation
                    a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
                    d = FF(d, a, b, c, M_offset_1,  12, T[1]);
                    c = FF(c, d, a, b, M_offset_2,  17, T[2]);
                    b = FF(b, c, d, a, M_offset_3,  22, T[3]);
                    a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
                    d = FF(d, a, b, c, M_offset_5,  12, T[5]);
                    c = FF(c, d, a, b, M_offset_6,  17, T[6]);
                    b = FF(b, c, d, a, M_offset_7,  22, T[7]);
                    a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
                    d = FF(d, a, b, c, M_offset_9,  12, T[9]);
                    c = FF(c, d, a, b, M_offset_10, 17, T[10]);
                    b = FF(b, c, d, a, M_offset_11, 22, T[11]);
                    a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
                    d = FF(d, a, b, c, M_offset_13, 12, T[13]);
                    c = FF(c, d, a, b, M_offset_14, 17, T[14]);
                    b = FF(b, c, d, a, M_offset_15, 22, T[15]);
    
                    a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
                    d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
                    c = GG(c, d, a, b, M_offset_11, 14, T[18]);
                    b = GG(b, c, d, a, M_offset_0,  20, T[19]);
                    a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
                    d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
                    c = GG(c, d, a, b, M_offset_15, 14, T[22]);
                    b = GG(b, c, d, a, M_offset_4,  20, T[23]);
                    a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
                    d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
                    c = GG(c, d, a, b, M_offset_3,  14, T[26]);
                    b = GG(b, c, d, a, M_offset_8,  20, T[27]);
                    a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
                    d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
                    c = GG(c, d, a, b, M_offset_7,  14, T[30]);
                    b = GG(b, c, d, a, M_offset_12, 20, T[31]);
    
                    a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
                    d = HH(d, a, b, c, M_offset_8,  11, T[33]);
                    c = HH(c, d, a, b, M_offset_11, 16, T[34]);
                    b = HH(b, c, d, a, M_offset_14, 23, T[35]);
                    a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
                    d = HH(d, a, b, c, M_offset_4,  11, T[37]);
                    c = HH(c, d, a, b, M_offset_7,  16, T[38]);
                    b = HH(b, c, d, a, M_offset_10, 23, T[39]);
                    a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
                    d = HH(d, a, b, c, M_offset_0,  11, T[41]);
                    c = HH(c, d, a, b, M_offset_3,  16, T[42]);
                    b = HH(b, c, d, a, M_offset_6,  23, T[43]);
                    a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
                    d = HH(d, a, b, c, M_offset_12, 11, T[45]);
                    c = HH(c, d, a, b, M_offset_15, 16, T[46]);
                    b = HH(b, c, d, a, M_offset_2,  23, T[47]);
    
                    a = II(a, b, c, d, M_offset_0,  6,  T[48]);
                    d = II(d, a, b, c, M_offset_7,  10, T[49]);
                    c = II(c, d, a, b, M_offset_14, 15, T[50]);
                    b = II(b, c, d, a, M_offset_5,  21, T[51]);
                    a = II(a, b, c, d, M_offset_12, 6,  T[52]);
                    d = II(d, a, b, c, M_offset_3,  10, T[53]);
                    c = II(c, d, a, b, M_offset_10, 15, T[54]);
                    b = II(b, c, d, a, M_offset_1,  21, T[55]);
                    a = II(a, b, c, d, M_offset_8,  6,  T[56]);
                    d = II(d, a, b, c, M_offset_15, 10, T[57]);
                    c = II(c, d, a, b, M_offset_6,  15, T[58]);
                    b = II(b, c, d, a, M_offset_13, 21, T[59]);
                    a = II(a, b, c, d, M_offset_4,  6,  T[60]);
                    d = II(d, a, b, c, M_offset_11, 10, T[61]);
                    c = II(c, d, a, b, M_offset_2,  15, T[62]);
                    b = II(b, c, d, a, M_offset_9,  21, T[63]);
    
                    // Intermediate hash value
                    H[0] = (H[0] + a) | 0;
                    H[1] = (H[1] + b) | 0;
                    H[2] = (H[2] + c) | 0;
                    H[3] = (H[3] + d) | 0;
                },
    
                _doFinalize: function () {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
    
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
    
                    // Add padding
                    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    
                    var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
                    var nBitsTotalL = nBitsTotal;
                    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
                        (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
                        (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
                    );
                    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
                        (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
                        (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
                    );
    
                    data.sigBytes = (dataWords.length + 1) * 4;
    
                    // Hash final blocks
                    this._process();
    
                    // Shortcuts
                    var hash = this._hash;
                    var H = hash.words;
    
                    // Swap endian
                    for (var i = 0; i < 4; i++) {
                        // Shortcut
                        var H_i = H[i];
    
                        H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
                               (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
                    }
    
                    // Return final computed hash
                    return hash;
                },
    
                clone: function () {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
    
                    return clone;
                }
            });
    
            function FF(a, b, c, d, x, s, t) {
                var n = a + ((b & c) | (~b & d)) + x + t;
                return ((n << s) | (n >>> (32 - s))) + b;
            }
    
            function GG(a, b, c, d, x, s, t) {
                var n = a + ((b & d) | (c & ~d)) + x + t;
                return ((n << s) | (n >>> (32 - s))) + b;
            }
    
            function HH(a, b, c, d, x, s, t) {
                var n = a + (b ^ c ^ d) + x + t;
                return ((n << s) | (n >>> (32 - s))) + b;
            }
    
            function II(a, b, c, d, x, s, t) {
                var n = a + (c ^ (b | ~d)) + x + t;
                return ((n << s) | (n >>> (32 - s))) + b;
            }
    
            /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.MD5('message');
             *     var hash = CryptoJS.MD5(wordArray);
             */
            C.MD5 = Hasher._createHelper(MD5);
    
            /**
             * Shortcut function to the HMAC's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             * @param {WordArray|string} key The secret key.
             *
             * @return {WordArray} The HMAC.
             *
             * @static
             *
             * @example
             *
             *     var hmac = CryptoJS.HmacMD5(message, key);
             */
            C.HmacMD5 = Hasher._createHmacHelper(MD5);
        }(Math));
    
    
        return CryptoJS.MD5;
    
    }));
    },{"./core":29}],38:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /**
         * Cipher Feedback block mode.
         */
        CryptoJS.mode.CFB = (function () {
            var CFB = CryptoJS.lib.BlockCipherMode.extend();
    
            CFB.Encryptor = CFB.extend({
                processBlock: function (words, offset) {
                    // Shortcuts
                    var cipher = this._cipher;
                    var blockSize = cipher.blockSize;
    
                    generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
    
                    // Remember this block to use with next block
                    this._prevBlock = words.slice(offset, offset + blockSize);
                }
            });
    
            CFB.Decryptor = CFB.extend({
                processBlock: function (words, offset) {
                    // Shortcuts
                    var cipher = this._cipher;
                    var blockSize = cipher.blockSize;
    
                    // Remember this block to use with next block
                    var thisBlock = words.slice(offset, offset + blockSize);
    
                    generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
    
                    // This block becomes the previous block
                    this._prevBlock = thisBlock;
                }
            });
    
            function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
                // Shortcut
                var iv = this._iv;
    
                // Generate keystream
                if (iv) {
                    var keystream = iv.slice(0);
    
                    // Remove IV for subsequent blocks
                    this._iv = undefined;
                } else {
                    var keystream = this._prevBlock;
                }
                cipher.encryptBlock(keystream, 0);
    
                // Encrypt
                for (var i = 0; i < blockSize; i++) {
                    words[offset + i] ^= keystream[i];
                }
            }
    
            return CFB;
        }());
    
    
        return CryptoJS.mode.CFB;
    
    }));
    },{"./cipher-core":28,"./core":29}],39:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /** @preserve
         * Counter block mode compatible with  Dr Brian Gladman fileenc.c
         * derived from CryptoJS.mode.CTR
         * Jan Hruby jhruby.web@gmail.com
         */
        CryptoJS.mode.CTRGladman = (function () {
            var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
    
            function incWord(word)
            {
                if (((word >> 24) & 0xff) === 0xff) { //overflow
                var b1 = (word >> 16)&0xff;
                var b2 = (word >> 8)&0xff;
                var b3 = word & 0xff;
    
                if (b1 === 0xff) // overflow b1
                {
                b1 = 0;
                if (b2 === 0xff)
                {
                    b2 = 0;
                    if (b3 === 0xff)
                    {
                        b3 = 0;
                    }
                    else
                    {
                        ++b3;
                    }
                }
                else
                {
                    ++b2;
                }
                }
                else
                {
                ++b1;
                }
    
                word = 0;
                word += (b1 << 16);
                word += (b2 << 8);
                word += b3;
                }
                else
                {
                word += (0x01 << 24);
                }
                return word;
            }
    
            function incCounter(counter)
            {
                if ((counter[0] = incWord(counter[0])) === 0)
                {
                    // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
                    counter[1] = incWord(counter[1]);
                }
                return counter;
            }
    
            var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
                processBlock: function (words, offset) {
                    // Shortcuts
                    var cipher = this._cipher
                    var blockSize = cipher.blockSize;
                    var iv = this._iv;
                    var counter = this._counter;
    
                    // Generate keystream
                    if (iv) {
                        counter = this._counter = iv.slice(0);
    
                        // Remove IV for subsequent blocks
                        this._iv = undefined;
                    }
    
                    incCounter(counter);
    
                    var keystream = counter.slice(0);
                    cipher.encryptBlock(keystream, 0);
    
                    // Encrypt
                    for (var i = 0; i < blockSize; i++) {
                        words[offset + i] ^= keystream[i];
                    }
                }
            });
    
            CTRGladman.Decryptor = Encryptor;
    
            return CTRGladman;
        }());
    
    
    
    
        return CryptoJS.mode.CTRGladman;
    
    }));
    },{"./cipher-core":28,"./core":29}],40:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /**
         * Counter block mode.
         */
        CryptoJS.mode.CTR = (function () {
            var CTR = CryptoJS.lib.BlockCipherMode.extend();
    
            var Encryptor = CTR.Encryptor = CTR.extend({
                processBlock: function (words, offset) {
                    // Shortcuts
                    var cipher = this._cipher
                    var blockSize = cipher.blockSize;
                    var iv = this._iv;
                    var counter = this._counter;
    
                    // Generate keystream
                    if (iv) {
                        counter = this._counter = iv.slice(0);
    
                        // Remove IV for subsequent blocks
                        this._iv = undefined;
                    }
                    var keystream = counter.slice(0);
                    cipher.encryptBlock(keystream, 0);
    
                    // Increment counter
                    counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0
    
                    // Encrypt
                    for (var i = 0; i < blockSize; i++) {
                        words[offset + i] ^= keystream[i];
                    }
                }
            });
    
            CTR.Decryptor = Encryptor;
    
            return CTR;
        }());
    
    
        return CryptoJS.mode.CTR;
    
    }));
    },{"./cipher-core":28,"./core":29}],41:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /**
         * Electronic Codebook block mode.
         */
        CryptoJS.mode.ECB = (function () {
            var ECB = CryptoJS.lib.BlockCipherMode.extend();
    
            ECB.Encryptor = ECB.extend({
                processBlock: function (words, offset) {
                    this._cipher.encryptBlock(words, offset);
                }
            });
    
            ECB.Decryptor = ECB.extend({
                processBlock: function (words, offset) {
                    this._cipher.decryptBlock(words, offset);
                }
            });
    
            return ECB;
        }());
    
    
        return CryptoJS.mode.ECB;
    
    }));
    },{"./cipher-core":28,"./core":29}],42:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /**
         * Output Feedback block mode.
         */
        CryptoJS.mode.OFB = (function () {
            var OFB = CryptoJS.lib.BlockCipherMode.extend();
    
            var Encryptor = OFB.Encryptor = OFB.extend({
                processBlock: function (words, offset) {
                    // Shortcuts
                    var cipher = this._cipher
                    var blockSize = cipher.blockSize;
                    var iv = this._iv;
                    var keystream = this._keystream;
    
                    // Generate keystream
                    if (iv) {
                        keystream = this._keystream = iv.slice(0);
    
                        // Remove IV for subsequent blocks
                        this._iv = undefined;
                    }
                    cipher.encryptBlock(keystream, 0);
    
                    // Encrypt
                    for (var i = 0; i < blockSize; i++) {
                        words[offset + i] ^= keystream[i];
                    }
                }
            });
    
            OFB.Decryptor = Encryptor;
    
            return OFB;
        }());
    
    
        return CryptoJS.mode.OFB;
    
    }));
    },{"./cipher-core":28,"./core":29}],43:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /**
         * ANSI X.923 padding strategy.
         */
        CryptoJS.pad.AnsiX923 = {
            pad: function (data, blockSize) {
                // Shortcuts
                var dataSigBytes = data.sigBytes;
                var blockSizeBytes = blockSize * 4;
    
                // Count padding bytes
                var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
    
                // Compute last byte position
                var lastBytePos = dataSigBytes + nPaddingBytes - 1;
    
                // Pad
                data.clamp();
                data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
                data.sigBytes += nPaddingBytes;
            },
    
            unpad: function (data) {
                // Get number of padding bytes from last byte
                var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
    
                // Remove padding
                data.sigBytes -= nPaddingBytes;
            }
        };
    
    
        return CryptoJS.pad.Ansix923;
    
    }));
    },{"./cipher-core":28,"./core":29}],44:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /**
         * ISO 10126 padding strategy.
         */
        CryptoJS.pad.Iso10126 = {
            pad: function (data, blockSize) {
                // Shortcut
                var blockSizeBytes = blockSize * 4;
    
                // Count padding bytes
                var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
    
                // Pad
                data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
                     concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
            },
    
            unpad: function (data) {
                // Get number of padding bytes from last byte
                var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
    
                // Remove padding
                data.sigBytes -= nPaddingBytes;
            }
        };
    
    
        return CryptoJS.pad.Iso10126;
    
    }));
    },{"./cipher-core":28,"./core":29}],45:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /**
         * ISO/IEC 9797-1 Padding Method 2.
         */
        CryptoJS.pad.Iso97971 = {
            pad: function (data, blockSize) {
                // Add 0x80 byte
                data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));
    
                // Zero pad the rest
                CryptoJS.pad.ZeroPadding.pad(data, blockSize);
            },
    
            unpad: function (data) {
                // Remove zero padding
                CryptoJS.pad.ZeroPadding.unpad(data);
    
                // Remove one more byte -- the 0x80 byte
                data.sigBytes--;
            }
        };
    
    
        return CryptoJS.pad.Iso97971;
    
    }));
    },{"./cipher-core":28,"./core":29}],46:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /**
         * A noop padding strategy.
         */
        CryptoJS.pad.NoPadding = {
            pad: function () {
            },
    
            unpad: function () {
            }
        };
    
    
        return CryptoJS.pad.NoPadding;
    
    }));
    },{"./cipher-core":28,"./core":29}],47:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /**
         * Zero padding strategy.
         */
        CryptoJS.pad.ZeroPadding = {
            pad: function (data, blockSize) {
                // Shortcut
                var blockSizeBytes = blockSize * 4;
    
                // Pad
                data.clamp();
                data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
            },
    
            unpad: function (data) {
                // Shortcut
                var dataWords = data.words;
    
                // Unpad
                var i = data.sigBytes - 1;
                while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
                    i--;
                }
                data.sigBytes = i + 1;
            }
        };
    
    
        return CryptoJS.pad.ZeroPadding;
    
    }));
    },{"./cipher-core":28,"./core":29}],48:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./sha1", "./hmac"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var WordArray = C_lib.WordArray;
            var C_algo = C.algo;
            var SHA1 = C_algo.SHA1;
            var HMAC = C_algo.HMAC;
    
            /**
             * Password-Based Key Derivation Function 2 algorithm.
             */
            var PBKDF2 = C_algo.PBKDF2 = Base.extend({
                /**
                 * Configuration options.
                 *
                 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
                 * @property {Hasher} hasher The hasher to use. Default: SHA1
                 * @property {number} iterations The number of iterations to perform. Default: 1
                 */
                cfg: Base.extend({
                    keySize: 128/32,
                    hasher: SHA1,
                    iterations: 1
                }),
    
                /**
                 * Initializes a newly created key derivation function.
                 *
                 * @param {Object} cfg (Optional) The configuration options to use for the derivation.
                 *
                 * @example
                 *
                 *     var kdf = CryptoJS.algo.PBKDF2.create();
                 *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
                 *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
                 */
                init: function (cfg) {
                    this.cfg = this.cfg.extend(cfg);
                },
    
                /**
                 * Computes the Password-Based Key Derivation Function 2.
                 *
                 * @param {WordArray|string} password The password.
                 * @param {WordArray|string} salt A salt.
                 *
                 * @return {WordArray} The derived key.
                 *
                 * @example
                 *
                 *     var key = kdf.compute(password, salt);
                 */
                compute: function (password, salt) {
                    // Shortcut
                    var cfg = this.cfg;
    
                    // Init HMAC
                    var hmac = HMAC.create(cfg.hasher, password);
    
                    // Initial values
                    var derivedKey = WordArray.create();
                    var blockIndex = WordArray.create([0x00000001]);
    
                    // Shortcuts
                    var derivedKeyWords = derivedKey.words;
                    var blockIndexWords = blockIndex.words;
                    var keySize = cfg.keySize;
                    var iterations = cfg.iterations;
    
                    // Generate key
                    while (derivedKeyWords.length < keySize) {
                        var block = hmac.update(salt).finalize(blockIndex);
                        hmac.reset();
    
                        // Shortcuts
                        var blockWords = block.words;
                        var blockWordsLength = blockWords.length;
    
                        // Iterations
                        var intermediate = block;
                        for (var i = 1; i < iterations; i++) {
                            intermediate = hmac.finalize(intermediate);
                            hmac.reset();
    
                            // Shortcut
                            var intermediateWords = intermediate.words;
    
                            // XOR intermediate with block
                            for (var j = 0; j < blockWordsLength; j++) {
                                blockWords[j] ^= intermediateWords[j];
                            }
                        }
    
                        derivedKey.concat(block);
                        blockIndexWords[0]++;
                    }
                    derivedKey.sigBytes = keySize * 4;
    
                    return derivedKey;
                }
            });
    
            /**
             * Computes the Password-Based Key Derivation Function 2.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             * @param {Object} cfg (Optional) The configuration options to use for this computation.
             *
             * @return {WordArray} The derived key.
             *
             * @static
             *
             * @example
             *
             *     var key = CryptoJS.PBKDF2(password, salt);
             *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
             *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
             */
            C.PBKDF2 = function (password, salt, cfg) {
                return PBKDF2.create(cfg).compute(password, salt);
            };
        }());
    
    
        return CryptoJS.PBKDF2;
    
    }));
    },{"./core":29,"./hmac":34,"./sha1":53}],49:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var StreamCipher = C_lib.StreamCipher;
            var C_algo = C.algo;
    
            // Reusable objects
            var S  = [];
            var C_ = [];
            var G  = [];
    
            /**
             * Rabbit stream cipher algorithm.
             *
             * This is a legacy version that neglected to convert the key to little-endian.
             * This error doesn't affect the cipher's security,
             * but it does affect its compatibility with other implementations.
             */
            var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
                _doReset: function () {
                    // Shortcuts
                    var K = this._key.words;
                    var iv = this.cfg.iv;
    
                    // Generate initial state values
                    var X = this._X = [
                        K[0], (K[3] << 16) | (K[2] >>> 16),
                        K[1], (K[0] << 16) | (K[3] >>> 16),
                        K[2], (K[1] << 16) | (K[0] >>> 16),
                        K[3], (K[2] << 16) | (K[1] >>> 16)
                    ];
    
                    // Generate initial counter values
                    var C = this._C = [
                        (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
                        (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
                        (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
                        (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
                    ];
    
                    // Carry bit
                    this._b = 0;
    
                    // Iterate the system four times
                    for (var i = 0; i < 4; i++) {
                        nextState.call(this);
                    }
    
                    // Modify the counters
                    for (var i = 0; i < 8; i++) {
                        C[i] ^= X[(i + 4) & 7];
                    }
    
                    // IV setup
                    if (iv) {
                        // Shortcuts
                        var IV = iv.words;
                        var IV_0 = IV[0];
                        var IV_1 = IV[1];
    
                        // Generate four subvectors
                        var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
                        var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
                        var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
                        var i3 = (i2 << 16)  | (i0 & 0x0000ffff);
    
                        // Modify counter values
                        C[0] ^= i0;
                        C[1] ^= i1;
                        C[2] ^= i2;
                        C[3] ^= i3;
                        C[4] ^= i0;
                        C[5] ^= i1;
                        C[6] ^= i2;
                        C[7] ^= i3;
    
                        // Iterate the system four times
                        for (var i = 0; i < 4; i++) {
                            nextState.call(this);
                        }
                    }
                },
    
                _doProcessBlock: function (M, offset) {
                    // Shortcut
                    var X = this._X;
    
                    // Iterate the system
                    nextState.call(this);
    
                    // Generate four keystream words
                    S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
                    S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
                    S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
                    S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);
    
                    for (var i = 0; i < 4; i++) {
                        // Swap endian
                        S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
                               (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);
    
                        // Encrypt
                        M[offset + i] ^= S[i];
                    }
                },
    
                blockSize: 128/32,
    
                ivSize: 64/32
            });
    
            function nextState() {
                // Shortcuts
                var X = this._X;
                var C = this._C;
    
                // Save old counter values
                for (var i = 0; i < 8; i++) {
                    C_[i] = C[i];
                }
    
                // Calculate new counter values
                C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
                C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
                C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
                C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
                C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
                C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
                C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
                C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
                this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;
    
                // Calculate the g-values
                for (var i = 0; i < 8; i++) {
                    var gx = X[i] + C[i];
    
                    // Construct high and low argument for squaring
                    var ga = gx & 0xffff;
                    var gb = gx >>> 16;
    
                    // Calculate high and low result of squaring
                    var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
                    var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);
    
                    // High XOR low
                    G[i] = gh ^ gl;
                }
    
                // Calculate new state values
                X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
                X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
                X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
                X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
                X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
                X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
                X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
                X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
            }
    
            /**
             * Shortcut functions to the cipher's object interface.
             *
             * @example
             *
             *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
             *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
             */
            C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
        }());
    
    
        return CryptoJS.RabbitLegacy;
    
    }));
    },{"./cipher-core":28,"./core":29,"./enc-base64":30,"./evpkdf":32,"./md5":37}],50:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var StreamCipher = C_lib.StreamCipher;
            var C_algo = C.algo;
    
            // Reusable objects
            var S  = [];
            var C_ = [];
            var G  = [];
    
            /**
             * Rabbit stream cipher algorithm
             */
            var Rabbit = C_algo.Rabbit = StreamCipher.extend({
                _doReset: function () {
                    // Shortcuts
                    var K = this._key.words;
                    var iv = this.cfg.iv;
    
                    // Swap endian
                    for (var i = 0; i < 4; i++) {
                        K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
                               (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
                    }
    
                    // Generate initial state values
                    var X = this._X = [
                        K[0], (K[3] << 16) | (K[2] >>> 16),
                        K[1], (K[0] << 16) | (K[3] >>> 16),
                        K[2], (K[1] << 16) | (K[0] >>> 16),
                        K[3], (K[2] << 16) | (K[1] >>> 16)
                    ];
    
                    // Generate initial counter values
                    var C = this._C = [
                        (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
                        (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
                        (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
                        (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
                    ];
    
                    // Carry bit
                    this._b = 0;
    
                    // Iterate the system four times
                    for (var i = 0; i < 4; i++) {
                        nextState.call(this);
                    }
    
                    // Modify the counters
                    for (var i = 0; i < 8; i++) {
                        C[i] ^= X[(i + 4) & 7];
                    }
    
                    // IV setup
                    if (iv) {
                        // Shortcuts
                        var IV = iv.words;
                        var IV_0 = IV[0];
                        var IV_1 = IV[1];
    
                        // Generate four subvectors
                        var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
                        var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
                        var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
                        var i3 = (i2 << 16)  | (i0 & 0x0000ffff);
    
                        // Modify counter values
                        C[0] ^= i0;
                        C[1] ^= i1;
                        C[2] ^= i2;
                        C[3] ^= i3;
                        C[4] ^= i0;
                        C[5] ^= i1;
                        C[6] ^= i2;
                        C[7] ^= i3;
    
                        // Iterate the system four times
                        for (var i = 0; i < 4; i++) {
                            nextState.call(this);
                        }
                    }
                },
    
                _doProcessBlock: function (M, offset) {
                    // Shortcut
                    var X = this._X;
    
                    // Iterate the system
                    nextState.call(this);
    
                    // Generate four keystream words
                    S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
                    S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
                    S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
                    S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);
    
                    for (var i = 0; i < 4; i++) {
                        // Swap endian
                        S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
                               (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);
    
                        // Encrypt
                        M[offset + i] ^= S[i];
                    }
                },
    
                blockSize: 128/32,
    
                ivSize: 64/32
            });
    
            function nextState() {
                // Shortcuts
                var X = this._X;
                var C = this._C;
    
                // Save old counter values
                for (var i = 0; i < 8; i++) {
                    C_[i] = C[i];
                }
    
                // Calculate new counter values
                C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
                C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
                C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
                C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
                C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
                C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
                C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
                C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
                this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;
    
                // Calculate the g-values
                for (var i = 0; i < 8; i++) {
                    var gx = X[i] + C[i];
    
                    // Construct high and low argument for squaring
                    var ga = gx & 0xffff;
                    var gb = gx >>> 16;
    
                    // Calculate high and low result of squaring
                    var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
                    var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);
    
                    // High XOR low
                    G[i] = gh ^ gl;
                }
    
                // Calculate new state values
                X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
                X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
                X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
                X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
                X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
                X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
                X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
                X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
            }
    
            /**
             * Shortcut functions to the cipher's object interface.
             *
             * @example
             *
             *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
             *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
             */
            C.Rabbit = StreamCipher._createHelper(Rabbit);
        }());
    
    
        return CryptoJS.Rabbit;
    
    }));
    },{"./cipher-core":28,"./core":29,"./enc-base64":30,"./evpkdf":32,"./md5":37}],51:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var StreamCipher = C_lib.StreamCipher;
            var C_algo = C.algo;
    
            /**
             * RC4 stream cipher algorithm.
             */
            var RC4 = C_algo.RC4 = StreamCipher.extend({
                _doReset: function () {
                    // Shortcuts
                    var key = this._key;
                    var keyWords = key.words;
                    var keySigBytes = key.sigBytes;
    
                    // Init sbox
                    var S = this._S = [];
                    for (var i = 0; i < 256; i++) {
                        S[i] = i;
                    }
    
                    // Key setup
                    for (var i = 0, j = 0; i < 256; i++) {
                        var keyByteIndex = i % keySigBytes;
                        var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;
    
                        j = (j + S[i] + keyByte) % 256;
    
                        // Swap
                        var t = S[i];
                        S[i] = S[j];
                        S[j] = t;
                    }
    
                    // Counters
                    this._i = this._j = 0;
                },
    
                _doProcessBlock: function (M, offset) {
                    M[offset] ^= generateKeystreamWord.call(this);
                },
    
                keySize: 256/32,
    
                ivSize: 0
            });
    
            function generateKeystreamWord() {
                // Shortcuts
                var S = this._S;
                var i = this._i;
                var j = this._j;
    
                // Generate keystream word
                var keystreamWord = 0;
                for (var n = 0; n < 4; n++) {
                    i = (i + 1) % 256;
                    j = (j + S[i]) % 256;
    
                    // Swap
                    var t = S[i];
                    S[i] = S[j];
                    S[j] = t;
    
                    keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
                }
    
                // Update counters
                this._i = i;
                this._j = j;
    
                return keystreamWord;
            }
    
            /**
             * Shortcut functions to the cipher's object interface.
             *
             * @example
             *
             *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
             *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
             */
            C.RC4 = StreamCipher._createHelper(RC4);
    
            /**
             * Modified RC4 stream cipher algorithm.
             */
            var RC4Drop = C_algo.RC4Drop = RC4.extend({
                /**
                 * Configuration options.
                 *
                 * @property {number} drop The number of keystream words to drop. Default 192
                 */
                cfg: RC4.cfg.extend({
                    drop: 192
                }),
    
                _doReset: function () {
                    RC4._doReset.call(this);
    
                    // Drop
                    for (var i = this.cfg.drop; i > 0; i--) {
                        generateKeystreamWord.call(this);
                    }
                }
            });
    
            /**
             * Shortcut functions to the cipher's object interface.
             *
             * @example
             *
             *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
             *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
             */
            C.RC4Drop = StreamCipher._createHelper(RC4Drop);
        }());
    
    
        return CryptoJS.RC4;
    
    }));
    },{"./cipher-core":28,"./core":29,"./enc-base64":30,"./evpkdf":32,"./md5":37}],52:[function(require,module,exports){
    ;(function (root, factory) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        /** @preserve
        (c) 2012 by Cédric Mesnil. All rights reserved.
    
        Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
            - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
            - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        */
    
        (function (Math) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var Hasher = C_lib.Hasher;
            var C_algo = C.algo;
    
            // Constants table
            var _zl = WordArray.create([
                0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
                7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
                3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
                1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
                4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
            var _zr = WordArray.create([
                5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
                6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
                15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
                8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
                12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
            var _sl = WordArray.create([
                 11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
                7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
                11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
                  11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
                9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
            var _sr = WordArray.create([
                8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
                9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
                9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
                15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
                8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);
    
            var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
            var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);
    
            /**
             * RIPEMD160 hash algorithm.
             */
            var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
                _doReset: function () {
                    this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
                },
    
                _doProcessBlock: function (M, offset) {
    
                    // Swap endian
                    for (var i = 0; i < 16; i++) {
                        // Shortcuts
                        var offset_i = offset + i;
                        var M_offset_i = M[offset_i];
    
                        // Swap
                        M[offset_i] = (
                            (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
                            (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
                        );
                    }
                    // Shortcut
                    var H  = this._hash.words;
                    var hl = _hl.words;
                    var hr = _hr.words;
                    var zl = _zl.words;
                    var zr = _zr.words;
                    var sl = _sl.words;
                    var sr = _sr.words;
    
                    // Working variables
                    var al, bl, cl, dl, el;
                    var ar, br, cr, dr, er;
    
                    ar = al = H[0];
                    br = bl = H[1];
                    cr = cl = H[2];
                    dr = dl = H[3];
                    er = el = H[4];
                    // Computation
                    var t;
                    for (var i = 0; i < 80; i += 1) {
                        t = (al +  M[offset+zl[i]])|0;
                        if (i<16){
                        t +=  f1(bl,cl,dl) + hl[0];
                        } else if (i<32) {
                        t +=  f2(bl,cl,dl) + hl[1];
                        } else if (i<48) {
                        t +=  f3(bl,cl,dl) + hl[2];
                        } else if (i<64) {
                        t +=  f4(bl,cl,dl) + hl[3];
                        } else {// if (i<80) {
                        t +=  f5(bl,cl,dl) + hl[4];
                        }
                        t = t|0;
                        t =  rotl(t,sl[i]);
                        t = (t+el)|0;
                        al = el;
                        el = dl;
                        dl = rotl(cl, 10);
                        cl = bl;
                        bl = t;
    
                        t = (ar + M[offset+zr[i]])|0;
                        if (i<16){
                        t +=  f5(br,cr,dr) + hr[0];
                        } else if (i<32) {
                        t +=  f4(br,cr,dr) + hr[1];
                        } else if (i<48) {
                        t +=  f3(br,cr,dr) + hr[2];
                        } else if (i<64) {
                        t +=  f2(br,cr,dr) + hr[3];
                        } else {// if (i<80) {
                        t +=  f1(br,cr,dr) + hr[4];
                        }
                        t = t|0;
                        t =  rotl(t,sr[i]) ;
                        t = (t+er)|0;
                        ar = er;
                        er = dr;
                        dr = rotl(cr, 10);
                        cr = br;
                        br = t;
                    }
                    // Intermediate hash value
                    t    = (H[1] + cl + dr)|0;
                    H[1] = (H[2] + dl + er)|0;
                    H[2] = (H[3] + el + ar)|0;
                    H[3] = (H[4] + al + br)|0;
                    H[4] = (H[0] + bl + cr)|0;
                    H[0] =  t;
                },
    
                _doFinalize: function () {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
    
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
    
                    // Add padding
                    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
                    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
                        (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
                        (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
                    );
                    data.sigBytes = (dataWords.length + 1) * 4;
    
                    // Hash final blocks
                    this._process();
    
                    // Shortcuts
                    var hash = this._hash;
                    var H = hash.words;
    
                    // Swap endian
                    for (var i = 0; i < 5; i++) {
                        // Shortcut
                        var H_i = H[i];
    
                        // Swap
                        H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
                               (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
                    }
    
                    // Return final computed hash
                    return hash;
                },
    
                clone: function () {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
    
                    return clone;
                }
            });
    
    
            function f1(x, y, z) {
                return ((x) ^ (y) ^ (z));
    
            }
    
            function f2(x, y, z) {
                return (((x)&(y)) | ((~x)&(z)));
            }
    
            function f3(x, y, z) {
                return (((x) | (~(y))) ^ (z));
            }
    
            function f4(x, y, z) {
                return (((x) & (z)) | ((y)&(~(z))));
            }
    
            function f5(x, y, z) {
                return ((x) ^ ((y) |(~(z))));
    
            }
    
            function rotl(x,n) {
                return (x<<n) | (x>>>(32-n));
            }
    
    
            /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.RIPEMD160('message');
             *     var hash = CryptoJS.RIPEMD160(wordArray);
             */
            C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
    
            /**
             * Shortcut function to the HMAC's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             * @param {WordArray|string} key The secret key.
             *
             * @return {WordArray} The HMAC.
             *
             * @static
             *
             * @example
             *
             *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
             */
            C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
        }(Math));
    
    
        return CryptoJS.RIPEMD160;
    
    }));
    },{"./core":29}],53:[function(require,module,exports){
    ;(function (root, factory) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var Hasher = C_lib.Hasher;
            var C_algo = C.algo;
    
            // Reusable object
            var W = [];
    
            /**
             * SHA-1 hash algorithm.
             */
            var SHA1 = C_algo.SHA1 = Hasher.extend({
                _doReset: function () {
                    this._hash = new WordArray.init([
                        0x67452301, 0xefcdab89,
                        0x98badcfe, 0x10325476,
                        0xc3d2e1f0
                    ]);
                },
    
                _doProcessBlock: function (M, offset) {
                    // Shortcut
                    var H = this._hash.words;
    
                    // Working variables
                    var a = H[0];
                    var b = H[1];
                    var c = H[2];
                    var d = H[3];
                    var e = H[4];
    
                    // Computation
                    for (var i = 0; i < 80; i++) {
                        if (i < 16) {
                            W[i] = M[offset + i] | 0;
                        } else {
                            var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                            W[i] = (n << 1) | (n >>> 31);
                        }
    
                        var t = ((a << 5) | (a >>> 27)) + e + W[i];
                        if (i < 20) {
                            t += ((b & c) | (~b & d)) + 0x5a827999;
                        } else if (i < 40) {
                            t += (b ^ c ^ d) + 0x6ed9eba1;
                        } else if (i < 60) {
                            t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
                        } else /* if (i < 80) */ {
                            t += (b ^ c ^ d) - 0x359d3e2a;
                        }
    
                        e = d;
                        d = c;
                        c = (b << 30) | (b >>> 2);
                        b = a;
                        a = t;
                    }
    
                    // Intermediate hash value
                    H[0] = (H[0] + a) | 0;
                    H[1] = (H[1] + b) | 0;
                    H[2] = (H[2] + c) | 0;
                    H[3] = (H[3] + d) | 0;
                    H[4] = (H[4] + e) | 0;
                },
    
                _doFinalize: function () {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
    
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
    
                    // Add padding
                    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
                    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
                    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
                    data.sigBytes = dataWords.length * 4;
    
                    // Hash final blocks
                    this._process();
    
                    // Return final computed hash
                    return this._hash;
                },
    
                clone: function () {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
    
                    return clone;
                }
            });
    
            /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA1('message');
             *     var hash = CryptoJS.SHA1(wordArray);
             */
            C.SHA1 = Hasher._createHelper(SHA1);
    
            /**
             * Shortcut function to the HMAC's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             * @param {WordArray|string} key The secret key.
             *
             * @return {WordArray} The HMAC.
             *
             * @static
             *
             * @example
             *
             *     var hmac = CryptoJS.HmacSHA1(message, key);
             */
            C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
        }());
    
    
        return CryptoJS.SHA1;
    
    }));
    },{"./core":29}],54:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./sha256"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./sha256"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var C_algo = C.algo;
            var SHA256 = C_algo.SHA256;
    
            /**
             * SHA-224 hash algorithm.
             */
            var SHA224 = C_algo.SHA224 = SHA256.extend({
                _doReset: function () {
                    this._hash = new WordArray.init([
                        0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
                        0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
                    ]);
                },
    
                _doFinalize: function () {
                    var hash = SHA256._doFinalize.call(this);
    
                    hash.sigBytes -= 4;
    
                    return hash;
                }
            });
    
            /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA224('message');
             *     var hash = CryptoJS.SHA224(wordArray);
             */
            C.SHA224 = SHA256._createHelper(SHA224);
    
            /**
             * Shortcut function to the HMAC's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             * @param {WordArray|string} key The secret key.
             *
             * @return {WordArray} The HMAC.
             *
             * @static
             *
             * @example
             *
             *     var hmac = CryptoJS.HmacSHA224(message, key);
             */
            C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
        }());
    
    
        return CryptoJS.SHA224;
    
    }));
    },{"./core":29,"./sha256":55}],55:[function(require,module,exports){
    ;(function (root, factory) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function (Math) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var Hasher = C_lib.Hasher;
            var C_algo = C.algo;
    
            // Initialization and round constants tables
            var H = [];
            var K = [];
    
            // Compute constants
            (function () {
                function isPrime(n) {
                    var sqrtN = Math.sqrt(n);
                    for (var factor = 2; factor <= sqrtN; factor++) {
                        if (!(n % factor)) {
                            return false;
                        }
                    }
    
                    return true;
                }
    
                function getFractionalBits(n) {
                    return ((n - (n | 0)) * 0x100000000) | 0;
                }
    
                var n = 2;
                var nPrime = 0;
                while (nPrime < 64) {
                    if (isPrime(n)) {
                        if (nPrime < 8) {
                            H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
                        }
                        K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
    
                        nPrime++;
                    }
    
                    n++;
                }
            }());
    
            // Reusable object
            var W = [];
    
            /**
             * SHA-256 hash algorithm.
             */
            var SHA256 = C_algo.SHA256 = Hasher.extend({
                _doReset: function () {
                    this._hash = new WordArray.init(H.slice(0));
                },
    
                _doProcessBlock: function (M, offset) {
                    // Shortcut
                    var H = this._hash.words;
    
                    // Working variables
                    var a = H[0];
                    var b = H[1];
                    var c = H[2];
                    var d = H[3];
                    var e = H[4];
                    var f = H[5];
                    var g = H[6];
                    var h = H[7];
    
                    // Computation
                    for (var i = 0; i < 64; i++) {
                        if (i < 16) {
                            W[i] = M[offset + i] | 0;
                        } else {
                            var gamma0x = W[i - 15];
                            var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
                                          ((gamma0x << 14) | (gamma0x >>> 18)) ^
                                           (gamma0x >>> 3);
    
                            var gamma1x = W[i - 2];
                            var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
                                          ((gamma1x << 13) | (gamma1x >>> 19)) ^
                                           (gamma1x >>> 10);
    
                            W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                        }
    
                        var ch  = (e & f) ^ (~e & g);
                        var maj = (a & b) ^ (a & c) ^ (b & c);
    
                        var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
                        var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));
    
                        var t1 = h + sigma1 + ch + K[i] + W[i];
                        var t2 = sigma0 + maj;
    
                        h = g;
                        g = f;
                        f = e;
                        e = (d + t1) | 0;
                        d = c;
                        c = b;
                        b = a;
                        a = (t1 + t2) | 0;
                    }
    
                    // Intermediate hash value
                    H[0] = (H[0] + a) | 0;
                    H[1] = (H[1] + b) | 0;
                    H[2] = (H[2] + c) | 0;
                    H[3] = (H[3] + d) | 0;
                    H[4] = (H[4] + e) | 0;
                    H[5] = (H[5] + f) | 0;
                    H[6] = (H[6] + g) | 0;
                    H[7] = (H[7] + h) | 0;
                },
    
                _doFinalize: function () {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
    
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
    
                    // Add padding
                    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
                    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
                    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
                    data.sigBytes = dataWords.length * 4;
    
                    // Hash final blocks
                    this._process();
    
                    // Return final computed hash
                    return this._hash;
                },
    
                clone: function () {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
    
                    return clone;
                }
            });
    
            /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA256('message');
             *     var hash = CryptoJS.SHA256(wordArray);
             */
            C.SHA256 = Hasher._createHelper(SHA256);
    
            /**
             * Shortcut function to the HMAC's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             * @param {WordArray|string} key The secret key.
             *
             * @return {WordArray} The HMAC.
             *
             * @static
             *
             * @example
             *
             *     var hmac = CryptoJS.HmacSHA256(message, key);
             */
            C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
        }(Math));
    
    
        return CryptoJS.SHA256;
    
    }));
    },{"./core":29}],56:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./x64-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./x64-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function (Math) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var Hasher = C_lib.Hasher;
            var C_x64 = C.x64;
            var X64Word = C_x64.Word;
            var C_algo = C.algo;
    
            // Constants tables
            var RHO_OFFSETS = [];
            var PI_INDEXES  = [];
            var ROUND_CONSTANTS = [];
    
            // Compute Constants
            (function () {
                // Compute rho offset constants
                var x = 1, y = 0;
                for (var t = 0; t < 24; t++) {
                    RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;
    
                    var newX = y % 5;
                    var newY = (2 * x + 3 * y) % 5;
                    x = newX;
                    y = newY;
                }
    
                // Compute pi index constants
                for (var x = 0; x < 5; x++) {
                    for (var y = 0; y < 5; y++) {
                        PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
                    }
                }
    
                // Compute round constants
                var LFSR = 0x01;
                for (var i = 0; i < 24; i++) {
                    var roundConstantMsw = 0;
                    var roundConstantLsw = 0;
    
                    for (var j = 0; j < 7; j++) {
                        if (LFSR & 0x01) {
                            var bitPosition = (1 << j) - 1;
                            if (bitPosition < 32) {
                                roundConstantLsw ^= 1 << bitPosition;
                            } else /* if (bitPosition >= 32) */ {
                                roundConstantMsw ^= 1 << (bitPosition - 32);
                            }
                        }
    
                        // Compute next LFSR
                        if (LFSR & 0x80) {
                            // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
                            LFSR = (LFSR << 1) ^ 0x71;
                        } else {
                            LFSR <<= 1;
                        }
                    }
    
                    ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
                }
            }());
    
            // Reusable objects for temporary values
            var T = [];
            (function () {
                for (var i = 0; i < 25; i++) {
                    T[i] = X64Word.create();
                }
            }());
    
            /**
             * SHA-3 hash algorithm.
             */
            var SHA3 = C_algo.SHA3 = Hasher.extend({
                /**
                 * Configuration options.
                 *
                 * @property {number} outputLength
                 *   The desired number of bits in the output hash.
                 *   Only values permitted are: 224, 256, 384, 512.
                 *   Default: 512
                 */
                cfg: Hasher.cfg.extend({
                    outputLength: 512
                }),
    
                _doReset: function () {
                    var state = this._state = []
                    for (var i = 0; i < 25; i++) {
                        state[i] = new X64Word.init();
                    }
    
                    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
    
                _doProcessBlock: function (M, offset) {
                    // Shortcuts
                    var state = this._state;
                    var nBlockSizeLanes = this.blockSize / 2;
    
                    // Absorb
                    for (var i = 0; i < nBlockSizeLanes; i++) {
                        // Shortcuts
                        var M2i  = M[offset + 2 * i];
                        var M2i1 = M[offset + 2 * i + 1];
    
                        // Swap endian
                        M2i = (
                            (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
                            (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
                        );
                        M2i1 = (
                            (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
                            (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
                        );
    
                        // Absorb message into state
                        var lane = state[i];
                        lane.high ^= M2i1;
                        lane.low  ^= M2i;
                    }
    
                    // Rounds
                    for (var round = 0; round < 24; round++) {
                        // Theta
                        for (var x = 0; x < 5; x++) {
                            // Mix column lanes
                            var tMsw = 0, tLsw = 0;
                            for (var y = 0; y < 5; y++) {
                                var lane = state[x + 5 * y];
                                tMsw ^= lane.high;
                                tLsw ^= lane.low;
                            }
    
                            // Temporary values
                            var Tx = T[x];
                            Tx.high = tMsw;
                            Tx.low  = tLsw;
                        }
                        for (var x = 0; x < 5; x++) {
                            // Shortcuts
                            var Tx4 = T[(x + 4) % 5];
                            var Tx1 = T[(x + 1) % 5];
                            var Tx1Msw = Tx1.high;
                            var Tx1Lsw = Tx1.low;
    
                            // Mix surrounding columns
                            var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
                            var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
                            for (var y = 0; y < 5; y++) {
                                var lane = state[x + 5 * y];
                                lane.high ^= tMsw;
                                lane.low  ^= tLsw;
                            }
                        }
    
                        // Rho Pi
                        for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                            // Shortcuts
                            var lane = state[laneIndex];
                            var laneMsw = lane.high;
                            var laneLsw = lane.low;
                            var rhoOffset = RHO_OFFSETS[laneIndex];
    
                            // Rotate lanes
                            if (rhoOffset < 32) {
                                var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
                                var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
                            } else /* if (rhoOffset >= 32) */ {
                                var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
                                var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
                            }
    
                            // Transpose lanes
                            var TPiLane = T[PI_INDEXES[laneIndex]];
                            TPiLane.high = tMsw;
                            TPiLane.low  = tLsw;
                        }
    
                        // Rho pi at x = y = 0
                        var T0 = T[0];
                        var state0 = state[0];
                        T0.high = state0.high;
                        T0.low  = state0.low;
    
                        // Chi
                        for (var x = 0; x < 5; x++) {
                            for (var y = 0; y < 5; y++) {
                                // Shortcuts
                                var laneIndex = x + 5 * y;
                                var lane = state[laneIndex];
                                var TLane = T[laneIndex];
                                var Tx1Lane = T[((x + 1) % 5) + 5 * y];
                                var Tx2Lane = T[((x + 2) % 5) + 5 * y];
    
                                // Mix rows
                                lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
                                lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
                            }
                        }
    
                        // Iota
                        var lane = state[0];
                        var roundConstant = ROUND_CONSTANTS[round];
                        lane.high ^= roundConstant.high;
                        lane.low  ^= roundConstant.low;;
                    }
                },
    
                _doFinalize: function () {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
                    var blockSizeBits = this.blockSize * 32;
    
                    // Add padding
                    dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
                    dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
                    data.sigBytes = dataWords.length * 4;
    
                    // Hash final blocks
                    this._process();
    
                    // Shortcuts
                    var state = this._state;
                    var outputLengthBytes = this.cfg.outputLength / 8;
                    var outputLengthLanes = outputLengthBytes / 8;
    
                    // Squeeze
                    var hashWords = [];
                    for (var i = 0; i < outputLengthLanes; i++) {
                        // Shortcuts
                        var lane = state[i];
                        var laneMsw = lane.high;
                        var laneLsw = lane.low;
    
                        // Swap endian
                        laneMsw = (
                            (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
                            (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
                        );
                        laneLsw = (
                            (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
                            (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
                        );
    
                        // Squeeze state to retrieve hash
                        hashWords.push(laneLsw);
                        hashWords.push(laneMsw);
                    }
    
                    // Return final computed hash
                    return new WordArray.init(hashWords, outputLengthBytes);
                },
    
                clone: function () {
                    var clone = Hasher.clone.call(this);
    
                    var state = clone._state = this._state.slice(0);
                    for (var i = 0; i < 25; i++) {
                        state[i] = state[i].clone();
                    }
    
                    return clone;
                }
            });
    
            /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA3('message');
             *     var hash = CryptoJS.SHA3(wordArray);
             */
            C.SHA3 = Hasher._createHelper(SHA3);
    
            /**
             * Shortcut function to the HMAC's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             * @param {WordArray|string} key The secret key.
             *
             * @return {WordArray} The HMAC.
             *
             * @static
             *
             * @example
             *
             *     var hmac = CryptoJS.HmacSHA3(message, key);
             */
            C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
        }(Math));
    
    
        return CryptoJS.SHA3;
    
    }));
    },{"./core":29,"./x64-core":60}],57:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./x64-core"), require("./sha512"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./x64-core", "./sha512"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_x64 = C.x64;
            var X64Word = C_x64.Word;
            var X64WordArray = C_x64.WordArray;
            var C_algo = C.algo;
            var SHA512 = C_algo.SHA512;
    
            /**
             * SHA-384 hash algorithm.
             */
            var SHA384 = C_algo.SHA384 = SHA512.extend({
                _doReset: function () {
                    this._hash = new X64WordArray.init([
                        new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
                        new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
                        new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
                        new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
                    ]);
                },
    
                _doFinalize: function () {
                    var hash = SHA512._doFinalize.call(this);
    
                    hash.sigBytes -= 16;
    
                    return hash;
                }
            });
    
            /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA384('message');
             *     var hash = CryptoJS.SHA384(wordArray);
             */
            C.SHA384 = SHA512._createHelper(SHA384);
    
            /**
             * Shortcut function to the HMAC's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             * @param {WordArray|string} key The secret key.
             *
             * @return {WordArray} The HMAC.
             *
             * @static
             *
             * @example
             *
             *     var hmac = CryptoJS.HmacSHA384(message, key);
             */
            C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
        }());
    
    
        return CryptoJS.SHA384;
    
    }));
    },{"./core":29,"./sha512":58,"./x64-core":60}],58:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./x64-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./x64-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Hasher = C_lib.Hasher;
            var C_x64 = C.x64;
            var X64Word = C_x64.Word;
            var X64WordArray = C_x64.WordArray;
            var C_algo = C.algo;
    
            function X64Word_create() {
                return X64Word.create.apply(X64Word, arguments);
            }
    
            // Constants
            var K = [
                X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
                X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
                X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
                X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
                X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
                X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
                X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
                X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
                X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
                X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
                X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
                X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
                X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
                X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
                X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
                X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
                X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
                X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
                X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
                X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
                X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
                X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
                X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
                X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
                X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
                X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
                X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
                X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
                X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
                X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
                X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
                X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
                X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
                X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
                X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
                X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
                X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
                X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
                X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
                X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
            ];
    
            // Reusable objects
            var W = [];
            (function () {
                for (var i = 0; i < 80; i++) {
                    W[i] = X64Word_create();
                }
            }());
    
            /**
             * SHA-512 hash algorithm.
             */
            var SHA512 = C_algo.SHA512 = Hasher.extend({
                _doReset: function () {
                    this._hash = new X64WordArray.init([
                        new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
                        new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
                        new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
                        new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
                    ]);
                },
    
                _doProcessBlock: function (M, offset) {
                    // Shortcuts
                    var H = this._hash.words;
    
                    var H0 = H[0];
                    var H1 = H[1];
                    var H2 = H[2];
                    var H3 = H[3];
                    var H4 = H[4];
                    var H5 = H[5];
                    var H6 = H[6];
                    var H7 = H[7];
    
                    var H0h = H0.high;
                    var H0l = H0.low;
                    var H1h = H1.high;
                    var H1l = H1.low;
                    var H2h = H2.high;
                    var H2l = H2.low;
                    var H3h = H3.high;
                    var H3l = H3.low;
                    var H4h = H4.high;
                    var H4l = H4.low;
                    var H5h = H5.high;
                    var H5l = H5.low;
                    var H6h = H6.high;
                    var H6l = H6.low;
                    var H7h = H7.high;
                    var H7l = H7.low;
    
                    // Working variables
                    var ah = H0h;
                    var al = H0l;
                    var bh = H1h;
                    var bl = H1l;
                    var ch = H2h;
                    var cl = H2l;
                    var dh = H3h;
                    var dl = H3l;
                    var eh = H4h;
                    var el = H4l;
                    var fh = H5h;
                    var fl = H5l;
                    var gh = H6h;
                    var gl = H6l;
                    var hh = H7h;
                    var hl = H7l;
    
                    // Rounds
                    for (var i = 0; i < 80; i++) {
                        // Shortcut
                        var Wi = W[i];
    
                        // Extend message
                        if (i < 16) {
                            var Wih = Wi.high = M[offset + i * 2]     | 0;
                            var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
                        } else {
                            // Gamma0
                            var gamma0x  = W[i - 15];
                            var gamma0xh = gamma0x.high;
                            var gamma0xl = gamma0x.low;
                            var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
                            var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));
    
                            // Gamma1
                            var gamma1x  = W[i - 2];
                            var gamma1xh = gamma1x.high;
                            var gamma1xl = gamma1x.low;
                            var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
                            var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));
    
                            // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
                            var Wi7  = W[i - 7];
                            var Wi7h = Wi7.high;
                            var Wi7l = Wi7.low;
    
                            var Wi16  = W[i - 16];
                            var Wi16h = Wi16.high;
                            var Wi16l = Wi16.low;
    
                            var Wil = gamma0l + Wi7l;
                            var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
                            var Wil = Wil + gamma1l;
                            var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
                            var Wil = Wil + Wi16l;
                            var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);
    
                            Wi.high = Wih;
                            Wi.low  = Wil;
                        }
    
                        var chh  = (eh & fh) ^ (~eh & gh);
                        var chl  = (el & fl) ^ (~el & gl);
                        var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
                        var majl = (al & bl) ^ (al & cl) ^ (bl & cl);
    
                        var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
                        var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
                        var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
                        var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));
    
                        // t1 = h + sigma1 + ch + K[i] + W[i]
                        var Ki  = K[i];
                        var Kih = Ki.high;
                        var Kil = Ki.low;
    
                        var t1l = hl + sigma1l;
                        var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
                        var t1l = t1l + chl;
                        var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
                        var t1l = t1l + Kil;
                        var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
                        var t1l = t1l + Wil;
                        var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);
    
                        // t2 = sigma0 + maj
                        var t2l = sigma0l + majl;
                        var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);
    
                        // Update working variables
                        hh = gh;
                        hl = gl;
                        gh = fh;
                        gl = fl;
                        fh = eh;
                        fl = el;
                        el = (dl + t1l) | 0;
                        eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
                        dh = ch;
                        dl = cl;
                        ch = bh;
                        cl = bl;
                        bh = ah;
                        bl = al;
                        al = (t1l + t2l) | 0;
                        ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
                    }
    
                    // Intermediate hash value
                    H0l = H0.low  = (H0l + al);
                    H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
                    H1l = H1.low  = (H1l + bl);
                    H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
                    H2l = H2.low  = (H2l + cl);
                    H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
                    H3l = H3.low  = (H3l + dl);
                    H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
                    H4l = H4.low  = (H4l + el);
                    H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
                    H5l = H5.low  = (H5l + fl);
                    H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
                    H6l = H6.low  = (H6l + gl);
                    H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
                    H7l = H7.low  = (H7l + hl);
                    H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
                },
    
                _doFinalize: function () {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
    
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
    
                    // Add padding
                    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
                    dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
                    dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
                    data.sigBytes = dataWords.length * 4;
    
                    // Hash final blocks
                    this._process();
    
                    // Convert hash to 32-bit word array before returning
                    var hash = this._hash.toX32();
    
                    // Return final computed hash
                    return hash;
                },
    
                clone: function () {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
    
                    return clone;
                },
    
                blockSize: 1024/32
            });
    
            /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA512('message');
             *     var hash = CryptoJS.SHA512(wordArray);
             */
            C.SHA512 = Hasher._createHelper(SHA512);
    
            /**
             * Shortcut function to the HMAC's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             * @param {WordArray|string} key The secret key.
             *
             * @return {WordArray} The HMAC.
             *
             * @static
             *
             * @example
             *
             *     var hmac = CryptoJS.HmacSHA512(message, key);
             */
            C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
        }());
    
    
        return CryptoJS.SHA512;
    
    }));
    },{"./core":29,"./x64-core":60}],59:[function(require,module,exports){
    ;(function (root, factory, undef) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function () {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var BlockCipher = C_lib.BlockCipher;
            var C_algo = C.algo;
    
            // Permuted Choice 1 constants
            var PC1 = [
                57, 49, 41, 33, 25, 17, 9,  1,
                58, 50, 42, 34, 26, 18, 10, 2,
                59, 51, 43, 35, 27, 19, 11, 3,
                60, 52, 44, 36, 63, 55, 47, 39,
                31, 23, 15, 7,  62, 54, 46, 38,
                30, 22, 14, 6,  61, 53, 45, 37,
                29, 21, 13, 5,  28, 20, 12, 4
            ];
    
            // Permuted Choice 2 constants
            var PC2 = [
                14, 17, 11, 24, 1,  5,
                3,  28, 15, 6,  21, 10,
                23, 19, 12, 4,  26, 8,
                16, 7,  27, 20, 13, 2,
                41, 52, 31, 37, 47, 55,
                30, 40, 51, 45, 33, 48,
                44, 49, 39, 56, 34, 53,
                46, 42, 50, 36, 29, 32
            ];
    
            // Cumulative bit shift constants
            var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
    
            // SBOXes and round permutation constants
            var SBOX_P = [
                {
                    0x0: 0x808200,
                    0x10000000: 0x8000,
                    0x20000000: 0x808002,
                    0x30000000: 0x2,
                    0x40000000: 0x200,
                    0x50000000: 0x808202,
                    0x60000000: 0x800202,
                    0x70000000: 0x800000,
                    0x80000000: 0x202,
                    0x90000000: 0x800200,
                    0xa0000000: 0x8200,
                    0xb0000000: 0x808000,
                    0xc0000000: 0x8002,
                    0xd0000000: 0x800002,
                    0xe0000000: 0x0,
                    0xf0000000: 0x8202,
                    0x8000000: 0x0,
                    0x18000000: 0x808202,
                    0x28000000: 0x8202,
                    0x38000000: 0x8000,
                    0x48000000: 0x808200,
                    0x58000000: 0x200,
                    0x68000000: 0x808002,
                    0x78000000: 0x2,
                    0x88000000: 0x800200,
                    0x98000000: 0x8200,
                    0xa8000000: 0x808000,
                    0xb8000000: 0x800202,
                    0xc8000000: 0x800002,
                    0xd8000000: 0x8002,
                    0xe8000000: 0x202,
                    0xf8000000: 0x800000,
                    0x1: 0x8000,
                    0x10000001: 0x2,
                    0x20000001: 0x808200,
                    0x30000001: 0x800000,
                    0x40000001: 0x808002,
                    0x50000001: 0x8200,
                    0x60000001: 0x200,
                    0x70000001: 0x800202,
                    0x80000001: 0x808202,
                    0x90000001: 0x808000,
                    0xa0000001: 0x800002,
                    0xb0000001: 0x8202,
                    0xc0000001: 0x202,
                    0xd0000001: 0x800200,
                    0xe0000001: 0x8002,
                    0xf0000001: 0x0,
                    0x8000001: 0x808202,
                    0x18000001: 0x808000,
                    0x28000001: 0x800000,
                    0x38000001: 0x200,
                    0x48000001: 0x8000,
                    0x58000001: 0x800002,
                    0x68000001: 0x2,
                    0x78000001: 0x8202,
                    0x88000001: 0x8002,
                    0x98000001: 0x800202,
                    0xa8000001: 0x202,
                    0xb8000001: 0x808200,
                    0xc8000001: 0x800200,
                    0xd8000001: 0x0,
                    0xe8000001: 0x8200,
                    0xf8000001: 0x808002
                },
                {
                    0x0: 0x40084010,
                    0x1000000: 0x4000,
                    0x2000000: 0x80000,
                    0x3000000: 0x40080010,
                    0x4000000: 0x40000010,
                    0x5000000: 0x40084000,
                    0x6000000: 0x40004000,
                    0x7000000: 0x10,
                    0x8000000: 0x84000,
                    0x9000000: 0x40004010,
                    0xa000000: 0x40000000,
                    0xb000000: 0x84010,
                    0xc000000: 0x80010,
                    0xd000000: 0x0,
                    0xe000000: 0x4010,
                    0xf000000: 0x40080000,
                    0x800000: 0x40004000,
                    0x1800000: 0x84010,
                    0x2800000: 0x10,
                    0x3800000: 0x40004010,
                    0x4800000: 0x40084010,
                    0x5800000: 0x40000000,
                    0x6800000: 0x80000,
                    0x7800000: 0x40080010,
                    0x8800000: 0x80010,
                    0x9800000: 0x0,
                    0xa800000: 0x4000,
                    0xb800000: 0x40080000,
                    0xc800000: 0x40000010,
                    0xd800000: 0x84000,
                    0xe800000: 0x40084000,
                    0xf800000: 0x4010,
                    0x10000000: 0x0,
                    0x11000000: 0x40080010,
                    0x12000000: 0x40004010,
                    0x13000000: 0x40084000,
                    0x14000000: 0x40080000,
                    0x15000000: 0x10,
                    0x16000000: 0x84010,
                    0x17000000: 0x4000,
                    0x18000000: 0x4010,
                    0x19000000: 0x80000,
                    0x1a000000: 0x80010,
                    0x1b000000: 0x40000010,
                    0x1c000000: 0x84000,
                    0x1d000000: 0x40004000,
                    0x1e000000: 0x40000000,
                    0x1f000000: 0x40084010,
                    0x10800000: 0x84010,
                    0x11800000: 0x80000,
                    0x12800000: 0x40080000,
                    0x13800000: 0x4000,
                    0x14800000: 0x40004000,
                    0x15800000: 0x40084010,
                    0x16800000: 0x10,
                    0x17800000: 0x40000000,
                    0x18800000: 0x40084000,
                    0x19800000: 0x40000010,
                    0x1a800000: 0x40004010,
                    0x1b800000: 0x80010,
                    0x1c800000: 0x0,
                    0x1d800000: 0x4010,
                    0x1e800000: 0x40080010,
                    0x1f800000: 0x84000
                },
                {
                    0x0: 0x104,
                    0x100000: 0x0,
                    0x200000: 0x4000100,
                    0x300000: 0x10104,
                    0x400000: 0x10004,
                    0x500000: 0x4000004,
                    0x600000: 0x4010104,
                    0x700000: 0x4010000,
                    0x800000: 0x4000000,
                    0x900000: 0x4010100,
                    0xa00000: 0x10100,
                    0xb00000: 0x4010004,
                    0xc00000: 0x4000104,
                    0xd00000: 0x10000,
                    0xe00000: 0x4,
                    0xf00000: 0x100,
                    0x80000: 0x4010100,
                    0x180000: 0x4010004,
                    0x280000: 0x0,
                    0x380000: 0x4000100,
                    0x480000: 0x4000004,
                    0x580000: 0x10000,
                    0x680000: 0x10004,
                    0x780000: 0x104,
                    0x880000: 0x4,
                    0x980000: 0x100,
                    0xa80000: 0x4010000,
                    0xb80000: 0x10104,
                    0xc80000: 0x10100,
                    0xd80000: 0x4000104,
                    0xe80000: 0x4010104,
                    0xf80000: 0x4000000,
                    0x1000000: 0x4010100,
                    0x1100000: 0x10004,
                    0x1200000: 0x10000,
                    0x1300000: 0x4000100,
                    0x1400000: 0x100,
                    0x1500000: 0x4010104,
                    0x1600000: 0x4000004,
                    0x1700000: 0x0,
                    0x1800000: 0x4000104,
                    0x1900000: 0x4000000,
                    0x1a00000: 0x4,
                    0x1b00000: 0x10100,
                    0x1c00000: 0x4010000,
                    0x1d00000: 0x104,
                    0x1e00000: 0x10104,
                    0x1f00000: 0x4010004,
                    0x1080000: 0x4000000,
                    0x1180000: 0x104,
                    0x1280000: 0x4010100,
                    0x1380000: 0x0,
                    0x1480000: 0x10004,
                    0x1580000: 0x4000100,
                    0x1680000: 0x100,
                    0x1780000: 0x4010004,
                    0x1880000: 0x10000,
                    0x1980000: 0x4010104,
                    0x1a80000: 0x10104,
                    0x1b80000: 0x4000004,
                    0x1c80000: 0x4000104,
                    0x1d80000: 0x4010000,
                    0x1e80000: 0x4,
                    0x1f80000: 0x10100
                },
                {
                    0x0: 0x80401000,
                    0x10000: 0x80001040,
                    0x20000: 0x401040,
                    0x30000: 0x80400000,
                    0x40000: 0x0,
                    0x50000: 0x401000,
                    0x60000: 0x80000040,
                    0x70000: 0x400040,
                    0x80000: 0x80000000,
                    0x90000: 0x400000,
                    0xa0000: 0x40,
                    0xb0000: 0x80001000,
                    0xc0000: 0x80400040,
                    0xd0000: 0x1040,
                    0xe0000: 0x1000,
                    0xf0000: 0x80401040,
                    0x8000: 0x80001040,
                    0x18000: 0x40,
                    0x28000: 0x80400040,
                    0x38000: 0x80001000,
                    0x48000: 0x401000,
                    0x58000: 0x80401040,
                    0x68000: 0x0,
                    0x78000: 0x80400000,
                    0x88000: 0x1000,
                    0x98000: 0x80401000,
                    0xa8000: 0x400000,
                    0xb8000: 0x1040,
                    0xc8000: 0x80000000,
                    0xd8000: 0x400040,
                    0xe8000: 0x401040,
                    0xf8000: 0x80000040,
                    0x100000: 0x400040,
                    0x110000: 0x401000,
                    0x120000: 0x80000040,
                    0x130000: 0x0,
                    0x140000: 0x1040,
                    0x150000: 0x80400040,
                    0x160000: 0x80401000,
                    0x170000: 0x80001040,
                    0x180000: 0x80401040,
                    0x190000: 0x80000000,
                    0x1a0000: 0x80400000,
                    0x1b0000: 0x401040,
                    0x1c0000: 0x80001000,
                    0x1d0000: 0x400000,
                    0x1e0000: 0x40,
                    0x1f0000: 0x1000,
                    0x108000: 0x80400000,
                    0x118000: 0x80401040,
                    0x128000: 0x0,
                    0x138000: 0x401000,
                    0x148000: 0x400040,
                    0x158000: 0x80000000,
                    0x168000: 0x80001040,
                    0x178000: 0x40,
                    0x188000: 0x80000040,
                    0x198000: 0x1000,
                    0x1a8000: 0x80001000,
                    0x1b8000: 0x80400040,
                    0x1c8000: 0x1040,
                    0x1d8000: 0x80401000,
                    0x1e8000: 0x400000,
                    0x1f8000: 0x401040
                },
                {
                    0x0: 0x80,
                    0x1000: 0x1040000,
                    0x2000: 0x40000,
                    0x3000: 0x20000000,
                    0x4000: 0x20040080,
                    0x5000: 0x1000080,
                    0x6000: 0x21000080,
                    0x7000: 0x40080,
                    0x8000: 0x1000000,
                    0x9000: 0x20040000,
                    0xa000: 0x20000080,
                    0xb000: 0x21040080,
                    0xc000: 0x21040000,
                    0xd000: 0x0,
                    0xe000: 0x1040080,
                    0xf000: 0x21000000,
                    0x800: 0x1040080,
                    0x1800: 0x21000080,
                    0x2800: 0x80,
                    0x3800: 0x1040000,
                    0x4800: 0x40000,
                    0x5800: 0x20040080,
                    0x6800: 0x21040000,
                    0x7800: 0x20000000,
                    0x8800: 0x20040000,
                    0x9800: 0x0,
                    0xa800: 0x21040080,
                    0xb800: 0x1000080,
                    0xc800: 0x20000080,
                    0xd800: 0x21000000,
                    0xe800: 0x1000000,
                    0xf800: 0x40080,
                    0x10000: 0x40000,
                    0x11000: 0x80,
                    0x12000: 0x20000000,
                    0x13000: 0x21000080,
                    0x14000: 0x1000080,
                    0x15000: 0x21040000,
                    0x16000: 0x20040080,
                    0x17000: 0x1000000,
                    0x18000: 0x21040080,
                    0x19000: 0x21000000,
                    0x1a000: 0x1040000,
                    0x1b000: 0x20040000,
                    0x1c000: 0x40080,
                    0x1d000: 0x20000080,
                    0x1e000: 0x0,
                    0x1f000: 0x1040080,
                    0x10800: 0x21000080,
                    0x11800: 0x1000000,
                    0x12800: 0x1040000,
                    0x13800: 0x20040080,
                    0x14800: 0x20000000,
                    0x15800: 0x1040080,
                    0x16800: 0x80,
                    0x17800: 0x21040000,
                    0x18800: 0x40080,
                    0x19800: 0x21040080,
                    0x1a800: 0x0,
                    0x1b800: 0x21000000,
                    0x1c800: 0x1000080,
                    0x1d800: 0x40000,
                    0x1e800: 0x20040000,
                    0x1f800: 0x20000080
                },
                {
                    0x0: 0x10000008,
                    0x100: 0x2000,
                    0x200: 0x10200000,
                    0x300: 0x10202008,
                    0x400: 0x10002000,
                    0x500: 0x200000,
                    0x600: 0x200008,
                    0x700: 0x10000000,
                    0x800: 0x0,
                    0x900: 0x10002008,
                    0xa00: 0x202000,
                    0xb00: 0x8,
                    0xc00: 0x10200008,
                    0xd00: 0x202008,
                    0xe00: 0x2008,
                    0xf00: 0x10202000,
                    0x80: 0x10200000,
                    0x180: 0x10202008,
                    0x280: 0x8,
                    0x380: 0x200000,
                    0x480: 0x202008,
                    0x580: 0x10000008,
                    0x680: 0x10002000,
                    0x780: 0x2008,
                    0x880: 0x200008,
                    0x980: 0x2000,
                    0xa80: 0x10002008,
                    0xb80: 0x10200008,
                    0xc80: 0x0,
                    0xd80: 0x10202000,
                    0xe80: 0x202000,
                    0xf80: 0x10000000,
                    0x1000: 0x10002000,
                    0x1100: 0x10200008,
                    0x1200: 0x10202008,
                    0x1300: 0x2008,
                    0x1400: 0x200000,
                    0x1500: 0x10000000,
                    0x1600: 0x10000008,
                    0x1700: 0x202000,
                    0x1800: 0x202008,
                    0x1900: 0x0,
                    0x1a00: 0x8,
                    0x1b00: 0x10200000,
                    0x1c00: 0x2000,
                    0x1d00: 0x10002008,
                    0x1e00: 0x10202000,
                    0x1f00: 0x200008,
                    0x1080: 0x8,
                    0x1180: 0x202000,
                    0x1280: 0x200000,
                    0x1380: 0x10000008,
                    0x1480: 0x10002000,
                    0x1580: 0x2008,
                    0x1680: 0x10202008,
                    0x1780: 0x10200000,
                    0x1880: 0x10202000,
                    0x1980: 0x10200008,
                    0x1a80: 0x2000,
                    0x1b80: 0x202008,
                    0x1c80: 0x200008,
                    0x1d80: 0x0,
                    0x1e80: 0x10000000,
                    0x1f80: 0x10002008
                },
                {
                    0x0: 0x100000,
                    0x10: 0x2000401,
                    0x20: 0x400,
                    0x30: 0x100401,
                    0x40: 0x2100401,
                    0x50: 0x0,
                    0x60: 0x1,
                    0x70: 0x2100001,
                    0x80: 0x2000400,
                    0x90: 0x100001,
                    0xa0: 0x2000001,
                    0xb0: 0x2100400,
                    0xc0: 0x2100000,
                    0xd0: 0x401,
                    0xe0: 0x100400,
                    0xf0: 0x2000000,
                    0x8: 0x2100001,
                    0x18: 0x0,
                    0x28: 0x2000401,
                    0x38: 0x2100400,
                    0x48: 0x100000,
                    0x58: 0x2000001,
                    0x68: 0x2000000,
                    0x78: 0x401,
                    0x88: 0x100401,
                    0x98: 0x2000400,
                    0xa8: 0x2100000,
                    0xb8: 0x100001,
                    0xc8: 0x400,
                    0xd8: 0x2100401,
                    0xe8: 0x1,
                    0xf8: 0x100400,
                    0x100: 0x2000000,
                    0x110: 0x100000,
                    0x120: 0x2000401,
                    0x130: 0x2100001,
                    0x140: 0x100001,
                    0x150: 0x2000400,
                    0x160: 0x2100400,
                    0x170: 0x100401,
                    0x180: 0x401,
                    0x190: 0x2100401,
                    0x1a0: 0x100400,
                    0x1b0: 0x1,
                    0x1c0: 0x0,
                    0x1d0: 0x2100000,
                    0x1e0: 0x2000001,
                    0x1f0: 0x400,
                    0x108: 0x100400,
                    0x118: 0x2000401,
                    0x128: 0x2100001,
                    0x138: 0x1,
                    0x148: 0x2000000,
                    0x158: 0x100000,
                    0x168: 0x401,
                    0x178: 0x2100400,
                    0x188: 0x2000001,
                    0x198: 0x2100000,
                    0x1a8: 0x0,
                    0x1b8: 0x2100401,
                    0x1c8: 0x100401,
                    0x1d8: 0x400,
                    0x1e8: 0x2000400,
                    0x1f8: 0x100001
                },
                {
                    0x0: 0x8000820,
                    0x1: 0x20000,
                    0x2: 0x8000000,
                    0x3: 0x20,
                    0x4: 0x20020,
                    0x5: 0x8020820,
                    0x6: 0x8020800,
                    0x7: 0x800,
                    0x8: 0x8020000,
                    0x9: 0x8000800,
                    0xa: 0x20800,
                    0xb: 0x8020020,
                    0xc: 0x820,
                    0xd: 0x0,
                    0xe: 0x8000020,
                    0xf: 0x20820,
                    0x80000000: 0x800,
                    0x80000001: 0x8020820,
                    0x80000002: 0x8000820,
                    0x80000003: 0x8000000,
                    0x80000004: 0x8020000,
                    0x80000005: 0x20800,
                    0x80000006: 0x20820,
                    0x80000007: 0x20,
                    0x80000008: 0x8000020,
                    0x80000009: 0x820,
                    0x8000000a: 0x20020,
                    0x8000000b: 0x8020800,
                    0x8000000c: 0x0,
                    0x8000000d: 0x8020020,
                    0x8000000e: 0x8000800,
                    0x8000000f: 0x20000,
                    0x10: 0x20820,
                    0x11: 0x8020800,
                    0x12: 0x20,
                    0x13: 0x800,
                    0x14: 0x8000800,
                    0x15: 0x8000020,
                    0x16: 0x8020020,
                    0x17: 0x20000,
                    0x18: 0x0,
                    0x19: 0x20020,
                    0x1a: 0x8020000,
                    0x1b: 0x8000820,
                    0x1c: 0x8020820,
                    0x1d: 0x20800,
                    0x1e: 0x820,
                    0x1f: 0x8000000,
                    0x80000010: 0x20000,
                    0x80000011: 0x800,
                    0x80000012: 0x8020020,
                    0x80000013: 0x20820,
                    0x80000014: 0x20,
                    0x80000015: 0x8020000,
                    0x80000016: 0x8000000,
                    0x80000017: 0x8000820,
                    0x80000018: 0x8020820,
                    0x80000019: 0x8000020,
                    0x8000001a: 0x8000800,
                    0x8000001b: 0x0,
                    0x8000001c: 0x20800,
                    0x8000001d: 0x820,
                    0x8000001e: 0x20020,
                    0x8000001f: 0x8020800
                }
            ];
    
            // Masks that select the SBOX input
            var SBOX_MASK = [
                0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
                0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
            ];
    
            /**
             * DES block cipher algorithm.
             */
            var DES = C_algo.DES = BlockCipher.extend({
                _doReset: function () {
                    // Shortcuts
                    var key = this._key;
                    var keyWords = key.words;
    
                    // Select 56 bits according to PC1
                    var keyBits = [];
                    for (var i = 0; i < 56; i++) {
                        var keyBitPos = PC1[i] - 1;
                        keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
                    }
    
                    // Assemble 16 subkeys
                    var subKeys = this._subKeys = [];
                    for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
                        // Create subkey
                        var subKey = subKeys[nSubKey] = [];
    
                        // Shortcut
                        var bitShift = BIT_SHIFTS[nSubKey];
    
                        // Select 48 bits according to PC2
                        for (var i = 0; i < 24; i++) {
                            // Select from the left 28 key bits
                            subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);
    
                            // Select from the right 28 key bits
                            subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
                        }
    
                        // Since each subkey is applied to an expanded 32-bit input,
                        // the subkey can be broken into 8 values scaled to 32-bits,
                        // which allows the key to be used without expansion
                        subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
                        for (var i = 1; i < 7; i++) {
                            subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
                        }
                        subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
                    }
    
                    // Compute inverse subkeys
                    var invSubKeys = this._invSubKeys = [];
                    for (var i = 0; i < 16; i++) {
                        invSubKeys[i] = subKeys[15 - i];
                    }
                },
    
                encryptBlock: function (M, offset) {
                    this._doCryptBlock(M, offset, this._subKeys);
                },
    
                decryptBlock: function (M, offset) {
                    this._doCryptBlock(M, offset, this._invSubKeys);
                },
    
                _doCryptBlock: function (M, offset, subKeys) {
                    // Get input
                    this._lBlock = M[offset];
                    this._rBlock = M[offset + 1];
    
                    // Initial permutation
                    exchangeLR.call(this, 4,  0x0f0f0f0f);
                    exchangeLR.call(this, 16, 0x0000ffff);
                    exchangeRL.call(this, 2,  0x33333333);
                    exchangeRL.call(this, 8,  0x00ff00ff);
                    exchangeLR.call(this, 1,  0x55555555);
    
                    // Rounds
                    for (var round = 0; round < 16; round++) {
                        // Shortcuts
                        var subKey = subKeys[round];
                        var lBlock = this._lBlock;
                        var rBlock = this._rBlock;
    
                        // Feistel function
                        var f = 0;
                        for (var i = 0; i < 8; i++) {
                            f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
                        }
                        this._lBlock = rBlock;
                        this._rBlock = lBlock ^ f;
                    }
    
                    // Undo swap from last round
                    var t = this._lBlock;
                    this._lBlock = this._rBlock;
                    this._rBlock = t;
    
                    // Final permutation
                    exchangeLR.call(this, 1,  0x55555555);
                    exchangeRL.call(this, 8,  0x00ff00ff);
                    exchangeRL.call(this, 2,  0x33333333);
                    exchangeLR.call(this, 16, 0x0000ffff);
                    exchangeLR.call(this, 4,  0x0f0f0f0f);
    
                    // Set output
                    M[offset] = this._lBlock;
                    M[offset + 1] = this._rBlock;
                },
    
                keySize: 64/32,
    
                ivSize: 64/32,
    
                blockSize: 64/32
            });
    
            // Swap bits across the left and right words
            function exchangeLR(offset, mask) {
                var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
                this._rBlock ^= t;
                this._lBlock ^= t << offset;
            }
    
            function exchangeRL(offset, mask) {
                var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
                this._lBlock ^= t;
                this._rBlock ^= t << offset;
            }
    
            /**
             * Shortcut functions to the cipher's object interface.
             *
             * @example
             *
             *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
             *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
             */
            C.DES = BlockCipher._createHelper(DES);
    
            /**
             * Triple-DES block cipher algorithm.
             */
            var TripleDES = C_algo.TripleDES = BlockCipher.extend({
                _doReset: function () {
                    // Shortcuts
                    var key = this._key;
                    var keyWords = key.words;
    
                    // Create DES instances
                    this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
                    this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
                    this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
                },
    
                encryptBlock: function (M, offset) {
                    this._des1.encryptBlock(M, offset);
                    this._des2.decryptBlock(M, offset);
                    this._des3.encryptBlock(M, offset);
                },
    
                decryptBlock: function (M, offset) {
                    this._des3.decryptBlock(M, offset);
                    this._des2.encryptBlock(M, offset);
                    this._des1.decryptBlock(M, offset);
                },
    
                keySize: 192/32,
    
                ivSize: 64/32,
    
                blockSize: 64/32
            });
    
            /**
             * Shortcut functions to the cipher's object interface.
             *
             * @example
             *
             *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
             *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
             */
            C.TripleDES = BlockCipher._createHelper(TripleDES);
        }());
    
    
        return CryptoJS.TripleDES;
    
    }));
    },{"./cipher-core":28,"./core":29,"./enc-base64":30,"./evpkdf":32,"./md5":37}],60:[function(require,module,exports){
    ;(function (root, factory) {
        if (typeof exports === "object") {
            // CommonJS
            module.exports = exports = factory(require("./core"));
        }
        else if (typeof define === "function" && define.amd) {
            // AMD
            define(["./core"], factory);
        }
        else {
            // Global (browser)
            factory(root.CryptoJS);
        }
    }(this, function (CryptoJS) {
    
        (function (undefined) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var X32WordArray = C_lib.WordArray;
    
            /**
             * x64 namespace.
             */
            var C_x64 = C.x64 = {};
    
            /**
             * A 64-bit word.
             */
            var X64Word = C_x64.Word = Base.extend({
                /**
                 * Initializes a newly created 64-bit word.
                 *
                 * @param {number} high The high 32 bits.
                 * @param {number} low The low 32 bits.
                 *
                 * @example
                 *
                 *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
                 */
                init: function (high, low) {
                    this.high = high;
                    this.low = low;
                }
    
                /**
                 * Bitwise NOTs this word.
                 *
                 * @return {X64Word} A new x64-Word object after negating.
                 *
                 * @example
                 *
                 *     var negated = x64Word.not();
                 */
                // not: function () {
                    // var high = ~this.high;
                    // var low = ~this.low;
    
                    // return X64Word.create(high, low);
                // },
    
                /**
                 * Bitwise ANDs this word with the passed word.
                 *
                 * @param {X64Word} word The x64-Word to AND with this word.
                 *
                 * @return {X64Word} A new x64-Word object after ANDing.
                 *
                 * @example
                 *
                 *     var anded = x64Word.and(anotherX64Word);
                 */
                // and: function (word) {
                    // var high = this.high & word.high;
                    // var low = this.low & word.low;
    
                    // return X64Word.create(high, low);
                // },
    
                /**
                 * Bitwise ORs this word with the passed word.
                 *
                 * @param {X64Word} word The x64-Word to OR with this word.
                 *
                 * @return {X64Word} A new x64-Word object after ORing.
                 *
                 * @example
                 *
                 *     var ored = x64Word.or(anotherX64Word);
                 */
                // or: function (word) {
                    // var high = this.high | word.high;
                    // var low = this.low | word.low;
    
                    // return X64Word.create(high, low);
                // },
    
                /**
                 * Bitwise XORs this word with the passed word.
                 *
                 * @param {X64Word} word The x64-Word to XOR with this word.
                 *
                 * @return {X64Word} A new x64-Word object after XORing.
                 *
                 * @example
                 *
                 *     var xored = x64Word.xor(anotherX64Word);
                 */
                // xor: function (word) {
                    // var high = this.high ^ word.high;
                    // var low = this.low ^ word.low;
    
                    // return X64Word.create(high, low);
                // },
    
                /**
                 * Shifts this word n bits to the left.
                 *
                 * @param {number} n The number of bits to shift.
                 *
                 * @return {X64Word} A new x64-Word object after shifting.
                 *
                 * @example
                 *
                 *     var shifted = x64Word.shiftL(25);
                 */
                // shiftL: function (n) {
                    // if (n < 32) {
                        // var high = (this.high << n) | (this.low >>> (32 - n));
                        // var low = this.low << n;
                    // } else {
                        // var high = this.low << (n - 32);
                        // var low = 0;
                    // }
    
                    // return X64Word.create(high, low);
                // },
    
                /**
                 * Shifts this word n bits to the right.
                 *
                 * @param {number} n The number of bits to shift.
                 *
                 * @return {X64Word} A new x64-Word object after shifting.
                 *
                 * @example
                 *
                 *     var shifted = x64Word.shiftR(7);
                 */
                // shiftR: function (n) {
                    // if (n < 32) {
                        // var low = (this.low >>> n) | (this.high << (32 - n));
                        // var high = this.high >>> n;
                    // } else {
                        // var low = this.high >>> (n - 32);
                        // var high = 0;
                    // }
    
                    // return X64Word.create(high, low);
                // },
    
                /**
                 * Rotates this word n bits to the left.
                 *
                 * @param {number} n The number of bits to rotate.
                 *
                 * @return {X64Word} A new x64-Word object after rotating.
                 *
                 * @example
                 *
                 *     var rotated = x64Word.rotL(25);
                 */
                // rotL: function (n) {
                    // return this.shiftL(n).or(this.shiftR(64 - n));
                // },
    
                /**
                 * Rotates this word n bits to the right.
                 *
                 * @param {number} n The number of bits to rotate.
                 *
                 * @return {X64Word} A new x64-Word object after rotating.
                 *
                 * @example
                 *
                 *     var rotated = x64Word.rotR(7);
                 */
                // rotR: function (n) {
                    // return this.shiftR(n).or(this.shiftL(64 - n));
                // },
    
                /**
                 * Adds this word with the passed word.
                 *
                 * @param {X64Word} word The x64-Word to add with this word.
                 *
                 * @return {X64Word} A new x64-Word object after adding.
                 *
                 * @example
                 *
                 *     var added = x64Word.add(anotherX64Word);
                 */
                // add: function (word) {
                    // var low = (this.low + word.low) | 0;
                    // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
                    // var high = (this.high + word.high + carry) | 0;
    
                    // return X64Word.create(high, low);
                // }
            });
    
            /**
             * An array of 64-bit words.
             *
             * @property {Array} words The array of CryptoJS.x64.Word objects.
             * @property {number} sigBytes The number of significant bytes in this word array.
             */
            var X64WordArray = C_x64.WordArray = Base.extend({
                /**
                 * Initializes a newly created word array.
                 *
                 * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
                 * @param {number} sigBytes (Optional) The number of significant bytes in the words.
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.x64.WordArray.create();
                 *
                 *     var wordArray = CryptoJS.x64.WordArray.create([
                 *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
                 *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
                 *     ]);
                 *
                 *     var wordArray = CryptoJS.x64.WordArray.create([
                 *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
                 *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
                 *     ], 10);
                 */
                init: function (words, sigBytes) {
                    words = this.words = words || [];
    
                    if (sigBytes != undefined) {
                        this.sigBytes = sigBytes;
                    } else {
                        this.sigBytes = words.length * 8;
                    }
                },
    
                /**
                 * Converts this 64-bit word array to a 32-bit word array.
                 *
                 * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
                 *
                 * @example
                 *
                 *     var x32WordArray = x64WordArray.toX32();
                 */
                toX32: function () {
                    // Shortcuts
                    var x64Words = this.words;
                    var x64WordsLength = x64Words.length;
    
                    // Convert
                    var x32Words = [];
                    for (var i = 0; i < x64WordsLength; i++) {
                        var x64Word = x64Words[i];
                        x32Words.push(x64Word.high);
                        x32Words.push(x64Word.low);
                    }
    
                    return X32WordArray.create(x32Words, this.sigBytes);
                },
    
                /**
                 * Creates a copy of this word array.
                 *
                 * @return {X64WordArray} The clone.
                 *
                 * @example
                 *
                 *     var clone = x64WordArray.clone();
                 */
                clone: function () {
                    var clone = Base.clone.call(this);
    
                    // Clone "words" array
                    var words = clone.words = this.words.slice(0);
    
                    // Clone each X64Word object
                    var wordsLength = words.length;
                    for (var i = 0; i < wordsLength; i++) {
                        words[i] = words[i].clone();
                    }
    
                    return clone;
                }
            });
        }());
    
    
        return CryptoJS;
    
    }));
    },{"./core":29}],61:[function(require,module,exports){
    (function(a,b){if('function'==typeof define&&define.amd)define(['module'],b);else if('undefined'!=typeof exports)b(module);else{var c={exports:{}};b(c),a.parseJsonBignumber=c.exports}})(this,function(a){'use strict';a.exports=function(a){function b(a){return v.lastIndex=0,v.test(a)?'"'+a.replace(v,function(b){var a=w[b];return'string'==typeof a?a:'\\u'+('0000'+b.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(b){return b&&!!a.BigNumber&&(b instanceof a.BigNumber||a.BigNumber.isBigNumber(b))}function d(a,e){var f,g,h,i,j,k=s,l=e[a],m=c(l);switch(m&&!l.isFinite()&&(l=null),l&&'object'==typeof l&&'function'==typeof l.toJSON&&(l=l.toJSON(a)),'function'==typeof u&&(l=u.call(e,a,l)),typeof l){case'string':return m?l:b(l);case'number':return isFinite(l)?l+'':'null';case'boolean':return l+'';case'object':if(!l)return'null';if(s+=t,j=[],'[object Array]'===Object.prototype.toString.apply(l)){for(i=l.length,f=0;f<i;f+=1)j[f]=d(f,l)||'null';return h=0===j.length?'[]':s?'[\n'+s+j.join(',\n'+s)+'\n'+k+']':'['+j.join(',')+']',s=k,h}if(u&&'object'==typeof u)for(i=u.length,f=0;f<i;f+=1)'string'==typeof u[f]&&(g=u[f],h=d(g,l),h&&j.push(b(g)+(s?': ':':')+h));else for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&(h=d(g,l),h&&j.push(b(g)+(s?': ':':')+h));return h=0===j.length?'{}':s?'{\n'+s+j.join(',\n'+s)+'\n'+k+'}':'{'+j.join(',')+'}',s=k,h;}}var e={strict:!1};a!==void 0&&null!==a&&!0===a.strict&&(e.strict=!0);var f,g,h,i,j={'"':'"',"\\":'\\',"/":'/',b:'\b',f:'\f',n:'\n',r:'\r',t:'\t'},k=function(a){throw{name:'SyntaxError',message:a,at:f,text:h}},l=function(a){return a&&a!==g&&k('Expected \''+a+'\' instead of \''+g+'\''),g=h.charAt(f),f+=1,g},m=function(){var a,b='';for('-'===g&&(b='-',l('-'));'0'<=g&&'9'>=g;)b+=g,l();if('.'===g)for(b+='.';l()&&'0'<=g&&'9'>=g;)b+=g;if('e'===g||'E'===g)for(b+=g,l(),('-'===g||'+'===g)&&(b+=g,l());'0'<=g&&'9'>=g;)b+=g,l();return a=+b,isFinite(a)?15<b.length?b:a:void k('Bad number')},n=function(){var a,b,c,d='';if('"'===g)for(;l();){if('"'===g)return l(),d;if('\\'!==g)d+=g;else if(l(),'u'===g){for(c=0,b=0;4>b&&(a=parseInt(l(),16),!!isFinite(a));b+=1)c=16*c+a;d+=String.fromCharCode(c)}else if('string'==typeof j[g])d+=j[g];else break}k('Bad string')},o=function(){for(;g&&' '>=g;)l()},p=function(){switch(g){case't':return l('t'),l('r'),l('u'),l('e'),!0;case'f':return l('f'),l('a'),l('l'),l('s'),l('e'),!1;case'n':return l('n'),l('u'),l('l'),l('l'),null;}k('Unexpected \''+g+'\'')},q=function(){var a=[];if('['===g){if(l('['),o(),']'===g)return l(']'),a;for(;g;){if(a.push(i()),o(),']'===g)return l(']'),a;l(','),o()}}k('Bad array')},r=function(){var a,b={};if('{'===g){if(l('{'),o(),'}'===g)return l('}'),b;for(;g;){if(a=n(),o(),l(':'),!0===e.strict&&Object.hasOwnProperty.call(b,a)&&k('Duplicate key "'+a+'"'),b[a]=i(),o(),'}'===g)return l('}'),b;l(','),o()}}k('Bad object')};i=function(){return o(),'{'===g?r():'['===g?q():'"'===g?n():'-'===g?m():'0'<=g&&'9'>=g?m():p()};var s,t,u,v=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,w={"":'\\b',"	":'\\t',"\n":'\\n',"":'\\f',"\r":'\\r','"':'\\"',"\\":'\\\\'},x=function(a,b,c){var e;if(s='',t='','number'==typeof c)for(e=0;e<c;e+=1)t+=' ';else'string'==typeof c&&(t=c);if(u=b,b&&'function'!=typeof b&&('object'!=typeof b||'number'!=typeof b.length))throw new Error('JSON.stringify');return d('',{"":a})},y=function(a,b){var c;return h=a+'',f=0,g=' ',c=i(),o(),g&&k('Syntax error'),'function'==typeof b?function a(c,d){var e,f=c[d];return f&&'object'==typeof f&&Object.keys(f).forEach(function(b){e=a(f,b),void 0===e?delete f[b]:f[b]=e}),b.call(c,d,f)}({"":c},''):c};return{parse:y,stringify:x}}});
    
    },{}],62:[function(require,module,exports){
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./src/Schema"));
    __export(require("./src/config"));
    __export(require("./src/BooleanPart"));
    __export(require("./src/StringPart"));
    __export(require("./src/DatePart"));
    __export(require("./src/StringDatePart"));
    __export(require("./src/NumberPart"));
    __export(require("./src/ObjectPart"));
    __export(require("./src/ArrayPart"));
    __export(require("./src/BasePart"));
    
    },{"./src/ArrayPart":63,"./src/BasePart":64,"./src/BooleanPart":65,"./src/DatePart":66,"./src/NumberPart":67,"./src/ObjectPart":68,"./src/Schema":69,"./src/StringDatePart":70,"./src/StringPart":71,"./src/config":72}],63:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasePart_1 = require("./BasePart");
    var ts_utils_1 = require("ts-utils");
    var ArrayPart = /** @class */ (function (_super) {
        __extends(ArrayPart, _super);
        function ArrayPart(config, path) {
            var _this = _super.call(this, config, path) || this;
            var Component = _this.options.content.type;
            _this._child = new Component(_this.options.content);
            return _this;
        }
        ArrayPart.prototype.process = function (data, rootList) {
            var _this = this;
            return _super.prototype.process.call(this, data, rootList).then(function (value) {
                if (value && ts_utils_1.isArray(value)) {
                    return Promise.all(value.map(function (item) { return _this._child.process(item, rootList.concat(data)); }));
                }
                else {
                    return value;
                }
            });
        };
        ArrayPart.prototype.getValue = function (data) {
            if (ts_utils_1.isArray(data)) {
                return data;
            }
            else {
                return null;
            }
        };
        return ArrayPart;
    }(BasePart_1.BasePart));
    exports.ArrayPart = ArrayPart;
    
    },{"./BasePart":64,"ts-utils":73}],64:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts_utils_1 = require("ts-utils");
    var BasePart = /** @class */ (function () {
        function BasePart(options, path) {
            this.options = options;
            this.path = path;
            if (this.options.isEmpty) {
                this.isEmpty = this.options.isEmpty;
            }
            if (this.options.isValid) {
                this.isValid = this.options.isValid;
            }
            if (this.options.required && ('defaultValue' in this.options)) {
                throw new Error('Wrong params! Conflict options "required" and defaultValue');
            }
        }
        BasePart.prototype.process = function (data, roots) {
            var _this = this;
            var path = this.getPath();
            var result = this.getValue(this.getDataByPath(data, path), roots);
            return BasePart.toPromise(result).then(function (value) {
                var isEmpty = _this.isEmpty(value);
                var isValid = _this.isValid(value);
                var type = _this.options.type.name || _this.options.type.prototype.constructor.name;
                if (_this.options.required) {
                    if (isEmpty) {
                        throw new Error("Required field type \"" + type + "\" \"" + path + "\" is empty!");
                    }
                }
                if (('defaultValue' in _this.options) && isEmpty) {
                    value = _this.options.defaultValue;
                }
                else {
                    if (!isValid) {
                        throw new Error("Field \"" + path + "\" is invalid!");
                    }
                }
                return value;
            });
        };
        BasePart.prototype.getPath = function () {
            return this.options.path === null ? null : this.options.path || this.path;
        };
        BasePart.prototype.isEmpty = function (data) {
            return data == null;
        };
        BasePart.prototype.isValid = function (data) {
            return true;
        };
        BasePart.prototype.getDataByPath = function (data, path) {
            if (this.options.parseValue) {
                if (path) {
                    return this.options.parseValue(ts_utils_1.get(data, path));
                }
                else {
                    return this.options.parseValue(data);
                }
            }
            else if (path != null) {
                return ts_utils_1.get(data, path);
            }
            else {
                return data;
            }
        };
        BasePart.isPromise = function (some) {
            return some && some.then && typeof some.then === 'function';
        };
        BasePart.toPromise = function (some) {
            return BasePart.isPromise(some) ? some : Promise.resolve(some);
        };
        return BasePart;
    }());
    exports.BasePart = BasePart;
    
    },{"ts-utils":73}],65:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasePart_1 = require("./BasePart");
    var BooleanPart = /** @class */ (function (_super) {
        __extends(BooleanPart, _super);
        function BooleanPart() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BooleanPart.prototype.getValue = function (data) {
            switch (typeof data) {
                case 'boolean':
                    return data;
                case 'string':
                case 'number':
                    return Boolean(data);
                default:
                    return null;
            }
        };
        return BooleanPart;
    }(BasePart_1.BasePart));
    exports.BooleanPart = BooleanPart;
    
    },{"./BasePart":64}],66:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasePart_1 = require("./BasePart");
    var DatePart = /** @class */ (function (_super) {
        __extends(DatePart, _super);
        function DatePart() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DatePart.prototype.getValue = function (data) {
            if (data instanceof Date) {
                return data;
            }
            if (typeof data === 'number') {
                return new Date(data);
            }
            return null;
        };
        return DatePart;
    }(BasePart_1.BasePart));
    exports.DatePart = DatePart;
    
    },{"./BasePart":64}],67:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasePart_1 = require("./BasePart");
    var NumberPart = /** @class */ (function (_super) {
        __extends(NumberPart, _super);
        function NumberPart() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NumberPart.prototype.getValue = function (data) {
            switch (typeof data) {
                case 'number':
                    return data;
                case 'string':
                    return Number(data);
                default:
                    return null;
            }
        };
        NumberPart.prototype.isEmpty = function (data) {
            return data == null || isNaN(data);
        };
        return NumberPart;
    }(BasePart_1.BasePart));
    exports.NumberPart = NumberPart;
    
    },{"./BasePart":64}],68:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasePart_1 = require("./BasePart");
    var ts_utils_1 = require("ts-utils");
    var ObjectPart = /** @class */ (function (_super) {
        __extends(ObjectPart, _super);
        function ObjectPart(config, path) {
            var _this = _super.call(this, config, path) || this;
            var myPath = _this.getPath();
            _this._childHash = Object.create(null);
            ts_utils_1.each(_this.options.content, function (config, key) {
                var Component = config.type;
                var localPath = path == null ? String(key) : myPath + "." + key;
                _this._childHash[key] = new Component(config, localPath);
            });
            return _this;
        }
        ObjectPart.prototype.process = function (data, rootList) {
            var _this = this;
            return _super.prototype.process.call(this, data, rootList).then(function (value) {
                if (value && ts_utils_1.isObject(value)) {
                    var promises_1 = [];
                    var result_1 = Object.create(null);
                    Object.keys(_this._childHash).forEach(function (name) {
                        var promise = _this._childHash[name].process(data, rootList).then(function (itemValue) {
                            result_1[name] = itemValue;
                        });
                        promises_1.push(promise);
                    });
                    return Promise.all(promises_1).then(function () { return result_1; });
                }
                else {
                    return value;
                }
            });
        };
        ObjectPart.prototype.getValue = function (data) {
            if (ts_utils_1.isObject(data)) {
                return data;
            }
            else {
                return null;
            }
        };
        return ObjectPart;
    }(BasePart_1.BasePart));
    exports.ObjectPart = ObjectPart;
    
    },{"./BasePart":64,"ts-utils":73}],69:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Schema = /** @class */ (function () {
        function Schema(config) {
            var Component = config.type;
            this._children = new Component(config);
        }
        Schema.prototype.parse = function (data) {
            return this._children.process(data, []);
        };
        return Schema;
    }());
    exports.Schema = Schema;
    
    },{}],70:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasePart_1 = require("./BasePart");
    var config_1 = require("./config");
    var ts_utils_1 = require("ts-utils");
    var StringDatePart = /** @class */ (function (_super) {
        __extends(StringDatePart, _super);
        function StringDatePart(config, path) {
            var _this = _super.call(this, config, path) || this;
            _this.dateProcessor = ts_utils_1.date(_this.options.outPattern || config_1.OUT_DATE_PATTERN);
            return _this;
        }
        StringDatePart.prototype.getValue = function (data) {
            var date;
            if (data instanceof Date) {
                date = data;
            }
            if (typeof data === 'number') {
                date = new Date(data);
            }
            if (date) {
                return this.dateProcessor(date);
            }
            return null;
        };
        return StringDatePart;
    }(BasePart_1.BasePart));
    exports.StringDatePart = StringDatePart;
    
    },{"./BasePart":64,"./config":72,"ts-utils":73}],71:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasePart_1 = require("./BasePart");
    var StringPart = /** @class */ (function (_super) {
        __extends(StringPart, _super);
        function StringPart() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StringPart.prototype.getValue = function (data) {
            switch (typeof data) {
                case 'string':
                    return data;
                case 'number':
                    return String(data);
                default:
                    return null;
            }
        };
        return StringPart;
    }(BasePart_1.BasePart));
    exports.StringPart = StringPart;
    
    },{"./BasePart":64}],72:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OUT_DATE_PATTERN = 'DD.MM.YYYY';
    
    },{}],73:[function(require,module,exports){
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./src/utils"));
    __export(require("./src/filters"));
    __export(require("./src/Signal"));
    __export(require("./src/utilsWithFilters"));
    __export(require("./src/Path"));
    __export(require("./src/Iterator"));
    __export(require("./src/Receiver"));
    __export(require("./src/tree/BaseTree"));
    __export(require("./src/tree/Tree"));
    
    },{"./src/Iterator":74,"./src/Path":75,"./src/Receiver":76,"./src/Signal":77,"./src/filters":78,"./src/tree/BaseTree":79,"./src/tree/Tree":80,"./src/utils":81,"./src/utilsWithFilters":82}],74:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Iterator = /** @class */ (function () {
        function Iterator(some) {
            this._step = 0;
            this._list = some;
        }
        Iterator.prototype.next = function () {
            if (this._step < this._list.length) {
                var result = {
                    done: false,
                    value: this._list[this._step]
                };
                this._step++;
                return result;
            }
            else {
                return {
                    done: true
                };
            }
        };
        return Iterator;
    }());
    exports.Iterator = Iterator;
    
    },{}],75:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Iterator_1 = require("./Iterator");
    var Path = /** @class */ (function () {
        function Path(path) {
            this._path = path;
            this.length = this._path.length;
        }
        Path.prototype.reverse = function () {
            return new Path(this._path.slice().reverse());
        };
        Path.prototype.iterator = function () {
            var _this = this;
            return new Iterator_1.Iterator(this._path.map(function (item, index) { return _this.getItemData(index); }));
        };
        Path.prototype.slice = function (start, end) {
            return new Path(this._path.slice(start, end));
        };
        Path.prototype.forEach = function (cb, context) {
            var _this = this;
            return this._path.forEach(function (item, index) {
                cb.call(context, _this.getItemData(index), index);
            });
        };
        Path.prototype.some = function (cb, context) {
            var _this = this;
            return this._path.some(function (item, index) {
                return cb.call(context, _this.getItemData(index), index);
            });
        };
        Path.prototype.toString = function () {
            return this._path.map(function (item, i) {
                switch (item.type) {
                    case 0 /* Object */:
                        return i === 0 ? item.name : "." + item.name;
                    case 1 /* Array */:
                        return "[" + item.name + "]";
                }
            }).join('');
        };
        Path.prototype.getItemData = function (index) {
            var container = Path.getContainer(this._path[index].type);
            var nextContainer = this._path[index + 1] && Path.getContainer(this._path[index + 1].type) || null;
            return { name: this._path[index].name, container: container, nextContainer: nextContainer };
        };
        Path.parse = function (path) {
            var parts = [];
            path.split('.').forEach(function (key) {
                if (key === '') {
                    parts.push({
                        type: 0 /* Object */,
                        key: key
                    });
                }
                else {
                    var names = key.match(/(\w+)|((\w+)\[(\d+)\])/g);
                    if (names) {
                        names.forEach(function (name) {
                            var num = Number(name);
                            if (String(num) === name) {
                                parts.push({
                                    type: 1 /* Array */,
                                    name: num
                                });
                            }
                            else {
                                parts.push({
                                    type: 0 /* Object */,
                                    name: name
                                });
                            }
                        });
                    }
                }
            });
            return new Path(parts);
        };
        Path.getContainer = function (type) {
            switch (type) {
                case 0 /* Object */:
                    return Object.create(null);
                case 1 /* Array */:
                    return [];
            }
        };
        return Path;
    }());
    exports.Path = Path;
    
    },{"./Iterator":74}],76:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Signal_1 = require("./Signal");
    var Receiver = /** @class */ (function () {
        function Receiver() {
        }
        Receiver.prototype.receive = function (signal, handler, context) {
            receive.call(this, signal, handler, context, false);
        };
        Receiver.prototype.receiveOnce = function (signal, handler, context) {
            receive.call(this, signal, handler, context, true);
        };
        Receiver.prototype.stopReceive = function (arg1, arg2) {
            var _this = this;
            if (!this.__received) {
                return null;
            }
            var signal = isSignal(arg1) ? arg1 : null;
            var handler = (signal ? arg2 : arg1);
            if (!signal) {
                Object.keys(this.__received).forEach(function (cid) {
                    _this.stopReceive(_this.__received[cid].signal, arg2);
                });
                return null;
            }
            if (!this.__received[signal.cid] || !this.__received[signal.cid].handlers) {
                return null;
            }
            if (!handler) {
                this.__received[signal.cid].handlers.slice().forEach(function (myHandler) {
                    _this.stopReceive(arg1, myHandler);
                });
                return null;
            }
            var handlers = this.__received[signal.cid].handlers;
            for (var i = handlers.length; i--;) {
                if (handlers[i] === arg2) {
                    handlers.splice(i, 1);
                    this.__received[signal.cid].signal.off(arg2, this);
                }
            }
            if (!handlers.length) {
                delete this.__received[signal.cid];
            }
        };
        return Receiver;
    }());
    exports.Receiver = Receiver;
    function receive(signal, handler, context, isOnce) {
        if (!this.__received) {
            this.__received = Object.create(null);
        }
        if (isOnce) {
            signal.once(handler, context, this);
        }
        else {
            signal.on(handler, context, this);
        }
        if (!this.__received[signal.cid]) {
            this.__received[signal.cid] = {
                handlers: [handler],
                signal: signal
            };
        }
        else {
            this.__received[signal.cid].handlers.push(handler);
        }
    }
    function isSignal(some) {
        return some && (some instanceof Signal_1.Signal);
    }
    
    },{"./Signal":77}],77:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require("./utils");
    var Signal = /** @class */ (function () {
        function Signal() {
            this.cid = utils_1.uniqueId('signal');
            this._handlers = [];
        }
        Signal.prototype.on = function (handler, context, receiver) {
            this._handlers.push({
                isOnce: false,
                handler: handler,
                context: context,
                receiver: receiver
            });
        };
        Signal.prototype.once = function (handler, context, receiver) {
            this._handlers.push({
                isOnce: true,
                handler: handler,
                context: context,
                receiver: receiver
            });
        };
        Signal.prototype.off = function (handler, receiver) {
            for (var i = this._handlers.length; i--;) {
                var handlerData = this._handlers[i];
                if (!handlerData) {
                    continue;
                }
                if (handlerData.handler === handler) {
                    if (handlerData.receiver) {
                        if (receiver) {
                            if (handlerData.receiver === receiver) {
                                this._handlers.splice(i, 1);
                                handlerData.receiver.stopReceive(this, handler);
                            }
                        }
                        else {
                            throw new Error('Can\'t remove this handler without receiver!');
                        }
                    }
                    else {
                        this._handlers.splice(i, 1);
                    }
                }
            }
        };
        Signal.prototype.dispatch = function (some) {
            var _this = this;
            this._handlers.slice().forEach(function (handlerData) {
                if (handlerData.isOnce) {
                    _this.off(handlerData.handler, handlerData.receiver);
                }
                handlerData.handler.call(handlerData.context, some);
            });
        };
        return Signal;
    }());
    exports.Signal = Signal;
    
    },{"./utils":81}],78:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require("./utils");
    var EMPTY_FUNCS_MAP = {
        skipNumber: utils_1.isNumber,
        skipString: utils_1.isString,
        skipNotEmpty: utils_1.isNotEmpty,
        skipNull: utils_1.isNull,
        skipUndefined: utils_1.isUndefined
    };
    function filterList() {
        var filters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            filters[_i] = arguments[_i];
        }
        if (!filters.length) {
            return function () { return true; };
        }
        return function (item) {
            return filters.every(function (filter) { return filter(item); });
        };
    }
    exports.filterList = filterList;
    function not(processor) {
        if (processor) {
            return function (data) { return !processor(data); };
        }
        else {
            return function (data) { return !data; };
        }
    }
    exports.not = not;
    function empty(options) {
        if (!options) {
            return Boolean;
        }
        var functions = [];
        utils_1.each(options, function (value, optionName) {
            if (EMPTY_FUNCS_MAP[optionName] && value) {
                functions.push(EMPTY_FUNCS_MAP[optionName]);
            }
        });
        if (!functions.length) {
            return Boolean;
        }
        else {
            return function (data) {
                return functions.some(function (f) { return f(data); }) || !!data;
            };
        }
    }
    exports.empty = empty;
    function contains(data) {
        if (typeof data === 'object') {
            var keys_1 = Object.keys(data);
            return function (localData) {
                if (!utils_1.isObject(localData)) {
                    return false;
                }
                return keys_1.every(function (key) { return data[key] === localData[key]; });
            };
        }
        else {
            return function (localData) {
                return data === localData;
            };
        }
    }
    exports.contains = contains;
    function containsDeep(data) {
        var paths = utils_1.getPaths(data);
        var check = function (localData) {
            return paths.every(function (parts) {
                return utils_1.get(data, parts) === utils_1.get(localData, parts);
            });
        };
        return function (localData) {
            if (typeof localData === 'object') {
                return check(localData);
            }
            else {
                return false;
            }
        };
    }
    exports.containsDeep = containsDeep;
    function notContains(data) {
        return not(contains(data));
    }
    exports.notContains = notContains;
    function notContainsDeep(data) {
        return not(containsDeep(data));
    }
    exports.notContainsDeep = notContainsDeep;
    function roundFilter(len) {
        return function (num) { return utils_1.round(num, len); };
    }
    exports.roundFilter = roundFilter;
    function splitRangeFilter(processor, separator) {
        return function (num) { return utils_1.splitRange(num, separator, processor); };
    }
    exports.splitRangeFilter = splitRangeFilter;
    function roundSplit(len, separator) {
        return splitRangeFilter(roundFilter(len), separator);
    }
    exports.roundSplit = roundSplit;
    function equal(some, noStrict) {
        if (noStrict) {
            return function (data) {
                /* tslint:disable */
                return some == data;
                /* tslint:enable */
            };
        }
        return function (data) {
            return some === data;
        };
    }
    exports.equal = equal;
    function notEqual(some, noStrict) {
        return not(equal(some, noStrict));
    }
    exports.notEqual = notEqual;
    var dateParsers = [
        {
            pattern: 'YYYY',
            handler: function (localDate) { return String(localDate.getFullYear()); }
        },
        {
            pattern: 'YY',
            handler: function (localDate) { return String(localDate.getFullYear()).substr(2); }
        },
        {
            pattern: 'MM',
            handler: function (localDate) { return String(utils_1.numToLength(localDate.getMonth() + 1, 2)); }
        },
        {
            pattern: 'M',
            handler: function (localDate) { return String(localDate.getMonth() + 1); }
        },
        {
            pattern: 'DD',
            handler: function (localDate) { return String(utils_1.numToLength(localDate.getDate(), 2)); }
        },
        {
            pattern: 'D',
            handler: function (localDate) { return String(localDate.getDate()); }
        },
        {
            pattern: 'hh',
            handler: function (localDate) { return String(utils_1.numToLength(localDate.getHours(), 2)); }
        },
        {
            pattern: 'h',
            handler: function (localDate) { return String(localDate.getHours()); }
        },
        {
            pattern: 'mm',
            handler: function (localDate) { return String(utils_1.numToLength(localDate.getMinutes(), 2)); }
        },
        {
            pattern: 'm',
            handler: function (localDate) { return String(localDate.getMinutes()); }
        },
        {
            pattern: 'ss',
            handler: function (localDate) { return String(utils_1.numToLength(localDate.getSeconds(), 2)); }
        },
        {
            pattern: 's',
            handler: function (localDate) { return String(localDate.getSeconds()); }
        }
    ];
    function date(pattern, processor) {
        var localPatterns = [];
        var forFind = pattern;
        var parse;
        dateParsers.forEach(function (datePattern) {
            if (forFind.indexOf(datePattern.pattern) !== -1) {
                forFind = forFind.replace(datePattern.pattern, '');
                localPatterns.push(datePattern);
            }
        });
        if (processor) {
            parse = function (toParse) {
                var result = processor(toParse);
                return utils_1.isNumber(result) ? new Date(result) : result;
            };
        }
        else {
            parse = function (data) {
                return utils_1.isNumber(data) ? new Date(data) : data;
            };
        }
        return function (localDate) {
            var _date = parse(localDate);
            return localPatterns.reduce(function (result, datePattern) {
                return result.replace(datePattern.pattern, datePattern.handler(_date));
            }, pattern);
        };
    }
    exports.date = date;
    function getBinaryFilter(data) {
        var dataPaths = utils_1.getPaths(data);
        if (dataPaths.length === 1) {
            var path_1 = dataPaths[0];
            var value_1 = utils_1.get(data, path_1);
            return function (item) {
                var itemValue = utils_1.get(item, path_1);
                return itemValue > value_1 ? -1 : itemValue === value_1 ? 0 : 1;
            };
        }
        else {
            var pathsStr_1 = dataPaths.map(String);
            var pathsHash_1 = Object.create(null);
            dataPaths.forEach(function (path) {
                pathsHash_1[String(path)] = utils_1.get(data, path);
            });
            return function (item) {
                var map = dataPaths.map(function (path, i) {
                    var itemValue = utils_1.get(item, path);
                    var pathStr = pathsStr_1[i];
                    return itemValue > pathsHash_1[pathStr] ? -1 : itemValue === pathsHash_1[pathStr] ? 0 : 1;
                });
                var witoutZero = map.filter(Boolean);
                if (witoutZero.length === 0) {
                    return 0;
                }
                else {
                    return witoutZero[0];
                }
            };
        }
    }
    exports.getBinaryFilter = getBinaryFilter;
    
    },{"./utils":81}],79:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require("../utils");
    var BaseTree = /** @class */ (function () {
        function BaseTree(data, parent, options) {
            var _this = this;
            this.children = [];
            this.parent = parent;
            this.id = data.id;
            this.data = utils_1.cloneDeep(data.data);
            this.ChildConstructor = options && options.Child || BaseTree;
            this.getRoot().registerChild(this);
            if (data.children) {
                data.children.forEach(function (item) {
                    _this.children.push(new _this.ChildConstructor(item, _this, options));
                });
            }
        }
        BaseTree.prototype.getChildren = function () {
            return this.children || [];
        };
        BaseTree.prototype.toArray = function () {
            var result = [this];
            if (this.children) {
                this.children.forEach(function (item) {
                    result.push.apply(result, item.toArray());
                });
            }
            return result;
        };
        BaseTree.prototype.getData = function () {
            return this.data || Object.create(null);
        };
        BaseTree.prototype.set = function (key, value) {
            this.data[key] = value;
        };
        BaseTree.prototype.get = function (key) {
            return this.getData()[key];
        };
        BaseTree.prototype.getExtended = function (key) {
            var result = this.get(key);
            return result == null ? this.parent.getExtended(key) : result;
        };
        BaseTree.prototype.getParent = function () {
            return this.parent;
        };
        BaseTree.prototype.getRoot = function () {
            return this.parent.getRoot();
        };
        return BaseTree;
    }());
    exports.BaseTree = BaseTree;
    
    },{"../utils":81}],80:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseTree_1 = require("./BaseTree");
    var filters_1 = require("../filters");
    var Tree = /** @class */ (function (_super) {
        __extends(Tree, _super);
        function Tree(data, options) {
            return _super.call(this, data, null, options) || this;
        }
        Tree.prototype.where = function (data) {
            var _this = this;
            var filter = typeof data === 'object' ? filters_1.containsDeep(data) : filters_1.contains(data);
            return Object.keys(this._childHash).reduce(function (result, item, i) {
                if (filter(_this._childHash[item].getData())) {
                    result.push(_this._childHash[item]);
                }
                return result;
            }, []);
        };
        Tree.prototype.registerChild = function (child) {
            if (!this._childHash) {
                this._childHash = Object.create(null);
            }
            if (child !== this) {
                if (this._childHash[child.id]) {
                    throw new Error('Duplicate ID');
                }
                else {
                    this._childHash[child.id] = child;
                }
            }
        };
        Tree.prototype.getPath = function (id) {
            var item = this.find(id);
            if (!item) {
                return null;
            }
            var result = [];
            var tmp = item;
            do {
                result.push(tmp.id);
                tmp = tmp.getParent();
            } while (tmp.getParent());
            return result.reverse();
        };
        Tree.prototype.getRoot = function () {
            return this;
        };
        Tree.prototype.find = function (id) {
            return this._childHash[id];
        };
        return Tree;
    }(BaseTree_1.BaseTree));
    exports.Tree = Tree;
    
    },{"../filters":78,"./BaseTree":79}],81:[function(require,module,exports){
    "use strict";
    var __assign = (this && this.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Path_1 = require("./Path");
    /**
     * @private
     * @type {{string: string; number: string; object: string; array: string}}
     */
    var TYPES = {
        string: '[object String]',
        number: '[object Number]',
        boolean: '[object Boolean]',
        object: '[object Object]',
        array: '[object Array]'
    };
    /**
     * @private
     * @type {() => string}
     */
    var toString = Object.prototype.toString;
    exports.DEFAULT_NUMBER_SEPARATOR = ',';
    /**
     * Check the parameter type
     * Is the parameter an object
     * @param param
     * @returns {boolean}
     */
    function isObject(param) {
        return toString.call(param) === TYPES.object;
    }
    exports.isObject = isObject;
    /**
     * Check the parameter
     * Whether the parameter is null or undefined
     * @param param
     * @returns {boolean}
     */
    function isEmpty(param) {
        return param == null;
    }
    exports.isEmpty = isEmpty;
    /**
     * Check the parameter
     * Whether the parameter is not null or is not undefined
     * @param param
     * @returns {boolean}
     */
    function isNotEmpty(param) {
        return param != null;
    }
    exports.isNotEmpty = isNotEmpty;
    /**
     * Check the parameter type
     * Is the parameter an string
     * @param param
     * @returns {boolean}
     */
    function isString(param) {
        return toString.call(param) === TYPES.string;
    }
    exports.isString = isString;
    /**
     * Check the parameter type
     * Is the parameter an number
     * @param param
     * @returns {boolean}
     */
    function isNumber(param) {
        return toString.call(param) === TYPES.number;
    }
    exports.isNumber = isNumber;
    /**
     * Check the parameter type
     * Is the parameter an array
     * @param param
     * @returns {boolean}
     */
    function isArray(param) {
        return toString.call(param) === TYPES.array;
    }
    exports.isArray = isArray;
    /**
     * Check the parameter type
     * Is the parameter an boolean
     * @param param
     * @returns {boolean}
     */
    function isBoolean(param) {
        return toString.call(param) === TYPES.boolean;
    }
    exports.isBoolean = isBoolean;
    /**
     * Check the parameter type
     * Is the parameter an null
     * @param param
     * @returns {boolean}
     */
    function isNull(param) {
        return param === null;
    }
    exports.isNull = isNull;
    /**
     * Check the parameter type
     * Is the parameter an undefined
     * @param param
     * @returns {boolean}
     */
    function isUndefined(param) {
        return param === undefined;
    }
    exports.isUndefined = isUndefined;
    /**
     * Check the parameter type
     * Is the parameter an NaN
     * @param param
     * @returns {boolean}
     */
    function isNaNCheck(param) {
        return isNumber(param) && isNaN(param);
    }
    exports.isNaNCheck = isNaNCheck;
    /**
     * Check the parameter type
     * Is the parameter an function
     * @param param
     * @returns {boolean}
     */
    function isFunction(param) {
        return typeof param === 'function';
    }
    exports.isFunction = isFunction;
    /**
     *
     * @param param
     * @returns {TTypes}
     */
    function typeOf(param) {
        var type = typeof param;
        switch (type) {
            case 'object':
                if (param === null) {
                    return 'null';
                }
                else {
                    var checkList = [
                        { check: isArray, type: 'array' },
                        { check: isObject, type: 'object' },
                        { check: isString, type: 'string' },
                        { check: isNumber, type: 'number' },
                        { check: isBoolean, type: 'boolean' }
                    ];
                    var $type_1 = 'null';
                    checkList.some(function (item) {
                        if (item.check(param)) {
                            $type_1 = item.type;
                        }
                        return $type_1 !== 'null';
                    });
                    return $type_1;
                }
            default:
                return type;
        }
    }
    exports.typeOf = typeOf;
    /**
     * Give the number to a certain number of symbols
     *
     * @example
     * numToLength(22, 3) // returns '022'
     * @example
     * numToLength(new Date().getHours(), 2) //returns '06'
     *
     * @param {number} num
     * @param {number} length
     * @returns {string}
     */
    function numToLength(num, length) {
        var str = String(num);
        for (var i = str.length; i < length; i++) {
            str = '0' + str;
        }
        return str;
    }
    exports.numToLength = numToLength;
    /**
     * Safely rounds a number to a character
     * @param {number} num
     * @param {number} len
     * @returns {number}
     */
    function round(num, len) {
        len = len || 2;
        return Number(Math.round(Number(num + 'e' + len)) + 'e-' + len);
    }
    exports.round = round;
    /**
     * Format a number
     *
     * @example
     * splitRange(21257.32, {separator: ','}) // returns '21 257,32'
     *
     * @example
     * splitRange(21257.322, {separator: ','}, (num) => round(num, 2)) // returns '21 257,32'
     *
     * @param {number} num
     * @param {ISplitRangeOptions} options format options
     * @param {IFilter<number, number>} processor function for preprocess param
     * @returns {string}
     */
    function splitRange(num, separator, processor) {
        separator = isEmpty(separator) ? exports.DEFAULT_NUMBER_SEPARATOR : separator;
        if (processor) {
            num = processor(num);
        }
        var str = String(num);
        var numData = str.split('.');
        var integral = numData[0], fractional = numData[1];
        integral = integral.split('').reverse().join('');
        integral = integral.replace(/(\d{3})/g, "$1" + separator)
            .split('').reverse().join('').trim();
        if (fractional) {
            return integral + "." + fractional;
        }
        return integral;
    }
    exports.splitRange = splitRange;
    /**
     * A generic iterator function, which can be used to seamlessly iterate over objects.
     * Like forEach for array
     * @param {Array<T> | IHash<T>} param
     * @param {(data: T, key: (string | number))} callback
     * @param context
     */
    function each(param, callback, context) {
        if (typeof param !== 'object' || !param) {
            return null;
        }
        if (context) {
            return Array.isArray(param) ? param.forEach(callback, context) :
                Object.keys(param).forEach(function (key) { return callback.call(context, param[key], key); });
        }
        else {
            return Array.isArray(param) ? param.forEach(callback) :
                Object.keys(param).forEach(function (key) { return callback(param[key], key); });
        }
    }
    exports.each = each;
    /**
     * The general iterator function that can be used to test a particular property.
     * Like some for array
     * @param {Object} param
     * @param {ISomeCallback<T>} callback
     * @returns {boolean}
     */
    function some(param, callback) {
        return Object.keys(param).some(function (key) { return callback(param[key], key); });
    }
    exports.some = some;
    /**
     * Get some data from object by string path
     *
     * @example
     * get({a: {b: 1}}), 'a.b') // returns 1
     *
     * @param {Object} data
     * @param {string} path
     * @returns {T}
     */
    function get(data, path) {
        var tmp = data;
        var parts = isString(path) ? Path_1.Path.parse(path) : path;
        parts.some(function (item) {
            if (typeof tmp === 'object' && tmp !== null && (item.name in tmp)) {
                tmp = tmp[item.name];
            }
            else {
                tmp = null;
                return true;
            }
        });
        return tmp;
    }
    exports.get = get;
    /**
     * Set some data to object by string path
     *
     * @example
     * var some = {};
     * set(some), 'a.b', 1) // some equal {a: {b: 1}}
     *
     * @param {Object} data
     * @param {string} path
     * @param value
     */
    function set(data, path, value) {
        var tmp = data;
        var parts = isString(path) ? Path_1.Path.parse(path) : path;
        parts.forEach(function (itemData, index) {
            var isLast = index === parts.length - 1;
            if (isLast) {
                tmp[itemData.name] = value;
            }
            else {
                if (typeof tmp[itemData.name] !== 'object') {
                    tmp[itemData.name] = itemData.nextContainer;
                }
                tmp = tmp[itemData.name];
            }
        });
    }
    exports.set = set;
    function getLayers(data, path) {
        var tmp = data;
        var layers = [{ name: null, data: data, parent: null }];
        var parts = isString(path) ? Path_1.Path.parse(path) : path;
        parts.forEach(function (item) {
            if (tmp) {
                layers.push({ name: item.name, data: tmp[item.name], parent: tmp });
                tmp = tmp[item.name];
            }
            else {
                layers = null;
            }
        });
        return layers;
    }
    exports.getLayers = getLayers;
    function unset(data, path) {
        (getLayers(data, path) || []).reverse().some(function (item, index) {
            if (index === 0) {
                if (item.parent) {
                    delete item.parent[item.name];
                }
            }
            else {
                if (item.parent && Object.keys(item.data).length === 0) {
                    delete item.parent[item.name];
                }
            }
        });
    }
    exports.unset = unset;
    var counter = 0;
    function uniqueId(prefix) {
        if (prefix === void 0) { prefix = ''; }
        return "" + prefix + counter++;
    }
    exports.uniqueId = uniqueId;
    function result(param) {
        if (isFunction(param)) {
            return param();
        }
        else {
            return param;
        }
    }
    exports.result = result;
    /**
     * Get array all path from object
     *
     * @example
     * getPaths({a: {b: 1, c: 2}, d: 1}) // return [['a', 'b'], ['a', 'c'], ['d']]
     *
     * @param {Object} param
     * @returns {Array<Array<string>>}
     */
    function getPaths(param) {
        var paths = [];
        function getIterate(parents, array) {
            var iterate = function (value, key) {
                var newLine = parents.slice();
                newLine.push({ type: array ? 1 /* Array */ : 0 /* Object */, name: key });
                if (isObject(value)) {
                    each(value, getIterate(newLine));
                }
                else if (isArray(value)) {
                    each(value, getIterate(newLine, true));
                }
                else {
                    paths.push(newLine);
                }
            };
            return iterate;
        }
        var firstLine = [];
        each(param, getIterate(firstLine, isArray(param)));
        return paths.map(function (pathParts) { return new Path_1.Path(pathParts); });
    }
    exports.getPaths = getPaths;
    function clone(data) {
        switch (typeof data) {
            case 'object':
                if (data === null) {
                    return null;
                }
                if (Array.isArray(data)) {
                    return data.slice();
                }
                else {
                    return __assign({}, data);
                }
            default:
                return data;
        }
    }
    exports.clone = clone;
    function cloneDeep(data) {
        switch (typeof data) {
            case 'object':
                var paths = getPaths(data);
                var $clone_1 = isArray(data) ? [] : Object.create(null);
                paths.forEach(function (path) {
                    var value = get(data, path);
                    set($clone_1, path, value);
                });
                return $clone_1;
            default:
                return data;
        }
    }
    exports.cloneDeep = cloneDeep;
    function merge(origin) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        args.forEach(function (part) {
            var paths = getPaths(part);
            paths.forEach(function (path) {
                var value = get(part, path);
                set(origin, path, value);
            });
        });
        return origin;
    }
    exports.merge = merge;
    function defaults(target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var paths = getPaths(target).map(String);
        args.reverse().forEach(function (item) {
            var itemPaths = getPaths(item);
            itemPaths.forEach(function (path) {
                var stringPath = path.toString();
                if (paths.indexOf(stringPath) === -1) {
                    paths.push(stringPath);
                    set(target, path, get(item, path));
                }
            });
        });
        return target;
    }
    exports.defaults = defaults;
    function camelCase(text) {
        return text.split(/\W|_/).map(function (item, index) {
            switch (index) {
                case 0:
                    return item;
                default:
                    return item.charAt(0).toUpperCase() + item.substr(1);
            }
        }).join('');
    }
    exports.camelCase = camelCase;
    
    },{"./Path":75}],82:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require("./utils");
    var filters_1 = require("./filters");
    function find(some, target) {
        var filter = utils_1.isFunction(target) ? target : filters_1.contains(target);
        var result = null;
        if (utils_1.isArray(some)) {
            some.some(function (data) {
                if (filter(data)) {
                    result = data;
                    return true;
                }
            });
        }
        else {
            Object.keys(some).some(function (key) {
                if (filter(some[key])) {
                    result = some[key];
                    return true;
                }
            });
        }
        return result;
    }
    exports.find = find;
    function binaryFind(some, target) {
        var result = {
            index: -1,
            value: null
        };
        var delta = 0;
        var step = function (arr) {
            var index = Math.floor(arr.length / 2);
            var item = arr[index];
            switch (target(item)) {
                case -1:
                    step(arr.slice(0, index));
                    break;
                case 0:
                    result = { index: index + delta, value: item };
                    break;
                case 1:
                    delta += index;
                    step(arr.slice(index));
                    break;
            }
        };
        step(some.slice());
        return result;
    }
    exports.binaryFind = binaryFind;
    
    },{"./filters":78,"./utils":81}],83:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var signature_generator_1 = require("@evestx/signature-generator");
    var request = require("./utils/request");
    var NodeAPI = require("./api/node/index");
    var MatcherAPI = require("./api/matcher/index");
    var constants = require("./constants");
    var config_1 = require("./config");
    var tools_1 = require("./tools");
    var metamask = require("./evvm/metamask");
    var eVESTXAPI = /** @class */ (function () {
        function eVESTXAPI(initialConfiguration) {
            this.Seed = signature_generator_1.Seed;
            this.byteProcessors = signature_generator_1.ByteProcessor;
            this.config = config_1.default;
            this.constants = constants;
            this.crypto = signature_generator_1.utils.crypto;
            this.request = request;
            this.tools = tools_1.default;
            this.API = {
                Node: NodeAPI,
                Matcher: MatcherAPI
            };
            this.eVVM = {
                metamask: metamask,
            }
            if (this instanceof eVESTXAPI) {
                this.config.clear();
                this.config.set(initialConfiguration);
                if (eVESTXAPI._instance === null) {
                    eVESTXAPI._instance = this;
                }
                else {
                    return eVESTXAPI._instance;
                }
            }
            else {
                return new eVESTXAPI(initialConfiguration);
            }
        }
        return eVESTXAPI;
    }());
    function create(config) {
        return new eVESTXAPI(config);
    }
    exports.create = create;
    exports.MAINNET_CONFIG = constants.DEFAULT_MAINNET_CONFIG;
    exports.TESTNET_CONFIG = constants.DEFAULT_TESTNET_CONFIG;
    exports.METAMASK_MAINNET_CONFIG = constants.DEFAULT_MAINNET_CONFIG_METAMASK
    exports.METAMASK_TESTNET_CONFIG = constants.DEFAULT_TESTNET_CONFIG_METAMASK;
    
    },{"./evvm/metamask":221,"./api/matcher/index":84,"./api/node/index":92,"./config":98,"./constants":99,"./tools":103,"./utils/request":105,"@evestx/signature-generator":15}],84:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var info_1 = require("./info");
    var orderbooks_1 = require("./orderbooks");
    exports.getMatcherKey = info_1.default.getMatcherKey;
    exports.getOrderbooks = orderbooks_1.default.getOrderbooks;
    exports.getOrderbook = orderbooks_1.default.getOrderbook;
    exports.getOrders = orderbooks_1.default.getOrders;
    exports.getAllOrders = orderbooks_1.default.getAllOrders;
    exports.createOrder = orderbooks_1.default.createOrder;
    exports.cancelOrder = orderbooks_1.default.cancelOrder;
    exports.deleteOrder = orderbooks_1.default.deleteOrder;
    
    },{"./info":85,"./orderbooks":86}],85:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var request_1 = require("../../utils/request");
    var fetch = request_1.createFetchWrapper(1 /* MATCHER */, 0 /* V1 */, request_1.processJSON);
    exports.default = {
        getMatcherKey: function () {
            return fetch('/');
        }
    };
    
    },{"../../utils/request":105}],86:[function(require,module,exports){
    "use strict";
    var __assign = (this && this.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var signature_generator_1 = require("@evestx/signature-generator");
    var request_1 = require("../../utils/request");
    var remap_1 = require("../../utils/remap");
    var request_2 = require("../../utils/request");
    var orderbooks_x_1 = require("./orderbooks.x");
    var fetch = request_1.createFetchWrapper(1 /* MATCHER */, 0 /* V1 */, request_1.processJSON);
    var preCreateOrderAsync = function (data) { return orderbooks_x_1.createOrderSchema.parse(data); };
    var postCreateOrder = function (data) {
        data.assetPair = {
            amountAsset: remap_1.normalizeAssetId(data.amountAsset),
            priceAsset: remap_1.normalizeAssetId(data.priceAsset)
        };
        delete data.amountAsset;
        delete data.priceAsset;
        return data;
    };
    var postCancelOrder = remap_1.createRemapper({
        senderPublicKey: 'sender'
    });
    var generateCancelLikeRequest = function (type) {
        return function (amountAssetId, priceAssetId, orderId, keyPair) {
            var data = {
                senderPublicKey: keyPair.publicKey,
                orderId: orderId
            };
            var authData = new signature_generator_1.CANCEL_ORDER_SIGNATURE(data);
            return authData.getSignature(keyPair.privateKey)
                .then(function (signature) { return postCancelOrder(__assign({}, data, { signature: signature })); })
                .then(function (tx) {
                return fetch("/orderbook/" + amountAssetId + "/" + priceAssetId + "/" + type, __assign({}, request_2.POST_TEMPLATE, { body: JSON.stringify(tx) }));
            });
        };
    };
    exports.default = {
        getOrderbooks: function () {
            return fetch('/orderbook');
        },
        getOrderbook: function (assetOne, assetTwo) {
            return fetch("/orderbook/" + assetOne + "/" + assetTwo);
        },
        getOrders: function (assetOne, assetTwo, keyPair) {
            var data = {
                senderPublicKey: keyPair.publicKey,
                timestamp: remap_1.getTimestamp()
            };
            var authData = new signature_generator_1.AUTH_ORDER_SIGNATURE(data);
            return authData.getSignature(keyPair.privateKey).then(function (signature) {
                var preparedData = __assign({}, data, { signature: signature });
                return fetch("/orderbook/" + assetOne + "/" + assetTwo + "/publicKey/" + keyPair.publicKey, {
                    headers: {
                        Timestamp: preparedData.timestamp,
                        Signature: preparedData.signature
                    }
                });
            });
        },
        getAllOrders: function (keyPair) {
            var data = {
                senderPublicKey: keyPair.publicKey,
                timestamp: remap_1.getTimestamp()
            };
            var authData = new signature_generator_1.AUTH_ORDER_SIGNATURE(data);
            return authData.getSignature(keyPair.privateKey).then(function (signature) {
                var preparedData = __assign({}, data, { signature: signature });
                return fetch("/orderbook/" + keyPair.publicKey, {
                    headers: {
                        Timestamp: preparedData.timestamp,
                        Signature: preparedData.signature
                    }
                });
            });
        },
        createOrder: request_1.wrapTxRequest(signature_generator_1.CREATE_ORDER_SIGNATURE, preCreateOrderAsync, postCreateOrder, function (postParams) {
            return fetch('/orderbook', postParams);
        }),
        cancelOrder: generateCancelLikeRequest('cancel'),
        deleteOrder: generateCancelLikeRequest('delete')
    };
    
    },{"../../utils/remap":104,"../../utils/request":105,"./orderbooks.x":87,"@evestx/signature-generator":15}],87:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts_api_validator_1 = require("ts-api-validator");
    var remap_1 = require("../../utils/remap");
    var constants_1 = require("../../constants");
    var schemaFields_1 = require("../schemaFields");
    exports.createOrderSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            matcherPublicKey: schemaFields_1.default.publicKey,
            amountAsset: schemaFields_1.default.assetId,
            priceAsset: schemaFields_1.default.assetId,
            orderType: {
                type: ts_api_validator_1.StringPart,
                required: true,
                isValid: function (orderType) {
                    return orderType === 'buy' || orderType === 'sell';
                }
            },
            amount: {
                type: ts_api_validator_1.NumberPart,
                required: true
            },
            price: {
                type: ts_api_validator_1.NumberPart,
                required: true
            },
            timestamp: schemaFields_1.default.timestamp,
            expiration: {
                type: ts_api_validator_1.NumberPart,
                required: true,
                parseValue: function (expiration) {
                    if (expiration) {
                        return remap_1.getTimestamp(expiration);
                    }
                    else {
                        var date = new Date(remap_1.getTimestamp());
                        return date.setDate(date.getDate() + constants_1.DEFAULT_ORDER_EXPIRATION_DAYS);
                    }
                }
            },
            matcherFee: schemaFields_1.default.matcherFee
        }
    });
    
    },{"../../constants":99,"../../utils/remap":104,"../schemaFields":97,"ts-api-validator":62}],88:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var request_1 = require("../../utils/request");
    var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
    exports.default = {
        balance: function (address, confirmations) {
            if (!confirmations) {
                return fetch("/addresses/balance/" + address);
            }
            else {
                return fetch("/addresses/balance/" + address + "/" + confirmations);
            }
        },
        balanceDetails: function (address) {
            return fetch("/addresses/balance/details/" + address);
        }
    };
    
    },{"../../utils/request":105}],89:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var request_1 = require("../../utils/request");
    var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
    exports.default = {
        byAlias: function (alias) {
            return fetch("/alias/by-alias/" + alias);
        },
        byAddress: function (address) {
            return fetch("/alias/by-address/" + address);
        }
    };
    
    },{"../../utils/request":105}],90:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var request_1 = require("../../utils/request");
    var addresses_1 = require("./addresses");
    var constants = require("../../constants");
    var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
    exports.default = {
        balances: function (address) {
            return fetch("/assets/balance/" + address);
        },
        balance: function (address, assetId) {
            if (assetId === constants.EVESTX) {
                return addresses_1.default.balance(address);
            }
            else {
                return fetch("/assets/balance/" + address + "/" + assetId);
            }
        },
        distribution: function (assetId) {
            return fetch("/assets/" + assetId + "/distribution");
        }
    };
    
    },{"../../constants":99,"../../utils/request":105,"./addresses":88}],91:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var request_1 = require("../../utils/request");
    var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
    exports.default = {
        get: function (signature) {
            return fetch("/blocks/signature/" + signature);
        },
        at: function (height) {
            return fetch("/blocks/at/" + height);
        },
        first: function () {
            return fetch('/blocks/first');
        },
        last: function () {
            return fetch('/blocks/last');
        },
        height: function () {
            return fetch('/blocks/height');
        }
    };
    
    },{"../../utils/request":105}],92:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var addresses_1 = require("./addresses");
    var aliases_1 = require("./aliases");
    var assets_1 = require("./assets");
    var blocks_1 = require("./blocks");
    var leasing_1 = require("./leasing");
    var transactions_1 = require("./transactions");
    var utils_1 = require("./utils");
    exports.addresses = addresses_1.default;
    exports.aliases = aliases_1.default;
    exports.assets = assets_1.default;
    exports.blocks = blocks_1.default;
    exports.leasing = leasing_1.default;
    exports.transactions = transactions_1.default;
    exports.utils = utils_1.default;
    
    },{"./addresses":88,"./aliases":89,"./assets":90,"./blocks":91,"./leasing":93,"./transactions":94,"./utils":96}],93:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var request_1 = require("../../utils/request");
    var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
    exports.default = {
        getAllActiveLeases: function (address) {
            return fetch("/leasing/active/" + address).then(function (list) {
                return list.map(function (tx) {
                    tx.status = 'active';
                    return tx;
                });
            });
        }
    };
    
    },{"../../utils/request":105}],94:[function(require,module,exports){
    "use strict";
    var __assign = (this && this.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var request_1 = require("../../utils/request");
    var eVESTXError_1 = require("../../errors/eVESTXError");
    var constants = require("../../constants");
    var config_1 = require("../../config");
    var requests = require("./transactions.x");
    var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
    exports.default = {
        get: function (id) {
            if (id === constants.EVESTX) {
                return Promise.resolve(constants.EVESTX_V1_ISSUE_TX);
            }
            else {
                return fetch("/transactions/info/" + id);
            }
        },
        getList: function (address, limit) {
            if (limit === void 0) { limit = config_1.default.getRequestParams().limit; }
            // In the end of the line a strange response artifact is handled
            return fetch("/transactions/address/" + address + "/limit/" + limit).then(function (array) { return array[0]; });
        },
        utxSize: function () {
            return fetch('/transactions/unconfirmed/size');
        },
        utxGet: function (id) {
            return fetch("/transactions/unconfirmed/info/" + id);
        },
        utxGetList: function () {
            return fetch('/transactions/unconfirmed');
        },
        broadcast: function (type, data, keys) {
            switch (type) {
                case constants.ISSUE_TX_NAME:
                    return requests.sendIssueTx(data, keys);
                case constants.TRANSFER_TX_NAME:
                    return requests.sendTransferTx(data, keys);
                case constants.REISSUE_TX_NAME:
                    return requests.sendReissueTx(data, keys);
                case constants.BURN_TX_NAME:
                    return requests.sendBurnTx(data, keys);
                case constants.LEASE_TX_NAME:
                    return requests.sendLeaseTx(data, keys);
                case constants.CANCEL_LEASING_TX_NAME:
                    return requests.sendCancelLeasingTx(data, keys);
                case constants.CREATE_ALIAS_TX_NAME:
                    return requests.sendCreateAliasTx(data, keys);
                case constants.MASS_TRANSFER_TX_NAME:
                    return requests.sendMassTransferTx(data, keys);
                case constants.DATA_TX_NAME:
                    return requests.sendDataTx(data, keys);
                case constants.SET_SCRIPT_TX_NAME:
                    return requests.sendSetScriptTx(data, keys);
                case constants.SPONSORSHIP_TX_NAME:
                    return requests.sendSponsorshipTx(data, keys);
                default:
                    throw new eVESTXError_1.default("Wrong transaction type: " + type, data);
            }
        },
        rawBroadcast: function (data) {
            return fetch(constants.BROADCAST_PATH, __assign({}, request_1.POST_TEMPLATE, { body: JSON.stringify(data) }));
        }
    };
    
    },{"../../config":98,"../../constants":99,"../../errors/eVESTXError":100,"../../utils/request":105,"./transactions.x":95}],95:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts_api_validator_1 = require("ts-api-validator");
    var signature_generator_1 = require("@evestx/signature-generator");
    var schemaFields_1 = require("../schemaFields");
    var remap_1 = require("../../utils/remap");
    var request_1 = require("../../utils/request");
    var constants = require("../../constants");
    var config_1 = require("../../config");
    var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
    var AnyPart = /** @class */ (function (_super) {
        __extends(AnyPart, _super);
        function AnyPart() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnyPart.prototype.getValue = function (data) {
            return data;
        };
        return AnyPart;
    }(ts_api_validator_1.BasePart));
    /* ISSUE */
    exports.issueSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            name: {
                type: ts_api_validator_1.StringPart,
                required: true
            },
            description: {
                type: ts_api_validator_1.StringPart,
                required: false,
                defaultValue: ''
            },
            quantity: {
                type: ts_api_validator_1.NumberPart,
                required: true
            },
            precision: {
                type: ts_api_validator_1.NumberPart,
                required: true,
                isValid: remap_1.precisionCheck
            },
            reissuable: schemaFields_1.default.reissuable,
            fee: schemaFields_1.default.issueFee,
            timestamp: schemaFields_1.default.timestamp
        }
    });
    exports.preIssue = function (data) { return exports.issueSchema.parse(data); };
    exports.postIssue = remap_1.createRemapper({
        transactionType: null,
        precision: 'decimals'
        // ,
        // type: constants.ISSUE_TX,
        // version: constants.ISSUE_TX_VERSION
    });
    exports.sendIssueTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.issue, exports.preIssue, exports.postIssue, function (postParams) {
        return fetch('/assets/broadcast/issue', postParams);
    } /*, true*/);
    /* TRANSFER */
    exports.transferSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            recipient: schemaFields_1.default.recipient,
            assetId: schemaFields_1.default.assetId,
            amount: {
                type: ts_api_validator_1.NumberPart,
                required: true
            },
            feeAssetId: {
                type: ts_api_validator_1.StringPart,
                required: false,
                defaultValue: constants.EVESTX
            },
            fee: schemaFields_1.default.fee,
            attachment: {
                // TODO : make it possible to pass a byte array
                type: ts_api_validator_1.StringPart,
                required: false,
                defaultValue: ''
            },
            timestamp: schemaFields_1.default.timestamp
        }
    });
    exports.preTransfer = function (data) { return exports.transferSchema.parse(data); };
    exports.postTransfer = remap_1.createRemapper({
        transactionType: null,
        assetId: remap_1.normalizeAssetId,
        feeAssetId: remap_1.normalizeAssetId,
        attachment: {
            from: 'bytes',
            to: 'base58'
        },
        recipient: {
            from: 'raw',
            to: 'prefixed'
        }
        // ,
        // type: constants.TRANSFER_TX,
        // version: constants.TRANSFER_TX_VERSION
    });
    exports.sendTransferTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.transfer, exports.preTransfer, exports.postTransfer, function (postParams) {
        return fetch('/assets/broadcast/transfer', postParams);
    } /*, true*/);
    /* REISSUE */
    exports.reissueSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            assetId: schemaFields_1.default.assetId,
            quantity: {
                type: ts_api_validator_1.NumberPart,
                required: true
            },
            reissuable: schemaFields_1.default.reissuable,
            fee: schemaFields_1.default.issueFee,
            timestamp: schemaFields_1.default.timestamp
        }
    });
    exports.preReissue = function (data) { return exports.reissueSchema.parse(data); };
    exports.postReissue = remap_1.createRemapper({
        transactionType: null
        // ,
        // type: constants.REISSUE_TX,
        // version: constants.REISSUE_TX_VERSION
    });
    exports.sendReissueTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.reissue, exports.preReissue, exports.postReissue, function (postParams) {
        return fetch('/assets/broadcast/reissue', postParams);
    } /*, true*/);
    /* BURN */
    exports.burnSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            assetId: schemaFields_1.default.assetId,
            quantity: {
                type: ts_api_validator_1.NumberPart,
                required: true
            },
            fee: schemaFields_1.default.fee,
            timestamp: schemaFields_1.default.timestamp
        }
    });
    exports.preBurn = function (data) { return exports.burnSchema.parse(data); };
    exports.postBurn = remap_1.createRemapper(({
        transactionType: null
        // ,
        // type: constants.BURN_TX,
        // version: constants.BURN_TX_VERSION
    }));
    exports.sendBurnTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.burn, exports.preBurn, exports.postBurn, function (postParams) {
        return fetch('/assets/broadcast/burn', postParams);
    } /*, true*/);
    /* LEASE */
    exports.leaseSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            recipient: schemaFields_1.default.recipient,
            amount: {
                type: ts_api_validator_1.NumberPart,
                required: true
            },
            fee: schemaFields_1.default.fee,
            timestamp: schemaFields_1.default.timestamp
        }
    });
    exports.preLease = function (data) { return exports.leaseSchema.parse(data); };
    exports.postLease = remap_1.createRemapper({
        transactionType: null,
        recipient: {
            from: 'raw',
            to: 'prefixed'
        }
        // ,
        // type: constants.LEASE_TX,
        // version: constants.LEASE_TX_VERSION
    });
    exports.sendLeaseTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.lease, exports.preLease, exports.postLease, function (postParams) {
        return fetch('/leasing/broadcast/lease', postParams);
    } /*, true*/);
    /* CANCEL LEASING */
    exports.cancelLeasingSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            transactionId: {
                type: ts_api_validator_1.StringPart,
                required: true
            },
            fee: schemaFields_1.default.fee,
            timestamp: schemaFields_1.default.timestamp
        }
    });
    exports.preCancelLeasing = function (data) { return exports.cancelLeasingSchema.parse(data); };
    exports.postCancelLeasing = remap_1.createRemapper({
        transactionType: null,
        transactionId: 'txId'
        // ,
        // type: constants.CANCEL_LEASING_TX,
        // version: constants.CANCEL_LEASING_TX_VERSION
    });
    exports.sendCancelLeasingTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.cancelLeasing, exports.preCancelLeasing, exports.postCancelLeasing, function (postParams) {
        return fetch('/leasing/broadcast/cancel', postParams);
    } /*, true*/);
    /* CREATE ALIAS */
    exports.createAliasSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            alias: {
                type: ts_api_validator_1.StringPart,
                required: true,
                parseValue: remap_1.removeAliasPrefix
            },
            fee: schemaFields_1.default.fee,
            timestamp: schemaFields_1.default.timestamp
        }
    });
    exports.preCreateAlias = function (data) { return exports.createAliasSchema.parse(data); };
    exports.postCreateAlias = remap_1.createRemapper({
        transactionType: null
        // ,
        // type: constants.CREATE_ALIAS_TX,
        // version: constants.CREATE_ALIAS_TX_VERSION
    });
    exports.sendCreateAliasTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.createAlias, exports.preCreateAlias, exports.postCreateAlias, function (postParams) {
        return fetch('/alias/broadcast/create', postParams);
    } /*, true*/);
    /* MASS TRANSFER */
    exports.massTransferSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            assetId: schemaFields_1.default.assetId,
            transfers: {
                type: ts_api_validator_1.ArrayPart,
                content: {
                    type: ts_api_validator_1.ObjectPart,
                    required: true,
                    content: {
                        recipient: schemaFields_1.default.recipient,
                        amount: {
                            type: ts_api_validator_1.NumberPart,
                            required: true
                        }
                    }
                },
                defaultValue: []
            },
            timestamp: schemaFields_1.default.timestamp,
            fee: schemaFields_1.default.fee,
            attachment: {
                // TODO : make it possible to pass a byte array
                type: ts_api_validator_1.StringPart,
                required: false,
                defaultValue: ''
            }
        }
    });
    exports.preMassTransfer = function (data) { return exports.massTransferSchema.parse(data); };
    exports.postMassTransfer = remap_1.createRemapper({
        transactionType: null,
        assetId: remap_1.normalizeAssetId,
        attachment: {
            from: 'bytes',
            to: 'base58'
        },
        transfers: {
            from: 'raw',
            to: 'prefixed',
            path: 'recipient'
        },
        type: constants.MASS_TRANSFER_TX,
        version: constants.MASS_TRANSFER_TX_VERSION
    });
    exports.sendMassTransferTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.massTransfer, exports.preMassTransfer, exports.postMassTransfer, function (postParams) {
        return fetch(constants.BROADCAST_PATH, postParams);
    }, true);
    /* DATA */
    exports.dataSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            data: {
                type: ts_api_validator_1.ArrayPart,
                content: {
                    type: ts_api_validator_1.ObjectPart,
                    required: true,
                    content: {
                        type: {
                            type: ts_api_validator_1.StringPart,
                            required: true
                        },
                        key: {
                            type: ts_api_validator_1.StringPart,
                            required: true
                        },
                        value: {
                            type: AnyPart,
                            required: true
                        }
                    }
                },
                defaultValue: []
            },
            timestamp: schemaFields_1.default.timestamp,
            fee: schemaFields_1.default.fee // TODO : validate against the transaction size in bytes
        }
    });
    exports.preData = function (data) { return exports.dataSchema.parse(data); };
    exports.postData = remap_1.createRemapper({
        transactionType: null,
        type: constants.DATA_TX,
        version: constants.DATA_TX_VERSION
    });
    exports.sendDataTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.data, exports.preData, exports.postData, function (postParams) {
        return fetch(constants.BROADCAST_PATH, postParams);
    }, true);
    /* SET SCRIPT */
    exports.setScriptSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            script: {
                type: ts_api_validator_1.StringPart,
                required: true
            },
            chainId: {
                type: ts_api_validator_1.NumberPart,
                required: true,
                parseValue: function () { return config_1.default.getNetworkByte(); }
            },
            timestamp: schemaFields_1.default.timestamp,
            fee: schemaFields_1.default.fee // TODO : validate against the transaction size in bytes
        }
    });
    exports.preSetScript = function (data) { return exports.setScriptSchema.parse(data); };
    exports.postSetScript = remap_1.createRemapper({
        transactionType: null,
        type: constants.SET_SCRIPT_TX,
        version: constants.SET_SCRIPT_TX_VERSION
    });
    exports.sendSetScriptTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.setScript, exports.preSetScript, exports.postSetScript, function (postParams) {
        return fetch(constants.BROADCAST_PATH, postParams);
    }, true);
    /* SPONSORSHIP */
    exports.sponsorshipSchema = new ts_api_validator_1.Schema({
        type: ts_api_validator_1.ObjectPart,
        required: true,
        content: {
            senderPublicKey: schemaFields_1.default.publicKey,
            assetId: schemaFields_1.default.assetId,
            minSponsoredAssetFee: {
                type: ts_api_validator_1.NumberPart,
                required: true
            },
            timestamp: schemaFields_1.default.timestamp,
            fee: schemaFields_1.default.fee
        }
    });
    exports.preSponsorship = function (data) { return exports.sponsorshipSchema.parse(data); };
    exports.postSponsorship = remap_1.createRemapper({
        transactionType: null,
        type: constants.SPONSORSHIP_TX,
        version: constants.SPONSORSHIP_TX_VERSION
    });
    exports.sendSponsorshipTx = request_1.wrapTxRequest(signature_generator_1.TX_TYPE_MAP.sponsorship, exports.preSponsorship, exports.postSponsorship, function (postParams) {
        return fetch(constants.BROADCAST_PATH, postParams);
    }, true);
    
    },{"../../config":98,"../../constants":99,"../../utils/remap":104,"../../utils/request":105,"../schemaFields":97,"@evestx/signature-generator":15,"ts-api-validator":62}],96:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var request_1 = require("../../utils/request");
    var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
    exports.default = {
        time: function () {
            return fetch('/utils/time').then(function (t) { return t.system; });
        },
        script: {
            compile: function (code) {
                return fetch('/utils/script/compile', {
                    method: 'POST',
                    body: code
                }).then(function (response) {
                    return response.script;
                });
            }
        }
    };
    
    },{"../../utils/request":105}],97:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts_api_validator_1 = require("ts-api-validator");
    var remap_1 = require("../utils/remap");
    var constants = require("../constants");
    exports.default = {
        publicKey: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        assetId: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        fee: {
            type: ts_api_validator_1.NumberPart,
            required: false,
            defaultValue: constants.MINIMUM_FEE
        },
        issueFee: {
            type: ts_api_validator_1.NumberPart,
            required: false,
            defaultValue: constants.MINIMUM_ISSUE_FEE
        },
        matcherFee: {
            type: ts_api_validator_1.NumberPart,
            required: false,
            defaultValue: constants.MINIMUM_MATCHER_FEE
        },
        recipient: {
            type: ts_api_validator_1.StringPart,
            required: true,
            parseValue: remap_1.removeRecipientPrefix
        },
        reissuable: {
            type: ts_api_validator_1.BooleanPart,
            required: false,
            defaultValue: false
        },
        timestamp: {
            type: ts_api_validator_1.NumberPart,
            required: true,
            parseValue: remap_1.getTimestamp
        }
    };
    
    },{"../constants":99,"../utils/remap":104,"ts-api-validator":62}],98:[function(require,module,exports){
    "use strict";
    var __assign = (this && this.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var signature_generator_1 = require("@evestx/signature-generator");
    var constants_1 = require("./constants");
    var request_1 = require("./utils/request");
    var config = Object.create(null);
    function checkRequiredFields(conf) {
        if (!conf.networkByte)
            throw new Error('Missing network byte');
        if (!conf.nodeAddress)
            throw new Error('Missing node address');
        if (!conf.matcherAddress)
            throw new Error('Missing matcher address');
    }
    exports.default = {
        getNetworkByte: function () {
            return config.networkByte;
        },
        getNodeAddress: function () {
            return config.nodeAddress;
        },
        getMatcherAddress: function () {
            return config.matcherAddress;
        },
        getMinimumSeedLength: function () {
            return config.minimumSeedLength;
        },
        getRequestParams: function () {
            return {
                offset: config.requestOffset,
                limit: config.requestLimit
            };
        },
        getAssetFactory: function () {
            return config.assetFactory;
        },
        getLogLevel: function () {
            return config.logLevel;
        },
        getTimeDiff: function () {
            return config.timeDiff;
        },
        get: function () {
            return __assign({}, config);
        },
        set: function (newConfig) {
            signature_generator_1.config.set(newConfig);
            // Extend incoming objects only when `config` is empty
            if (Object.keys(config).length === 0) {
                newConfig = __assign({}, constants_1.DEFAULT_BASIC_CONFIG, newConfig);
            }
            Object.keys(newConfig).forEach(function (key) {
                switch (key) {
                    case 'nodeAddress':
                    case 'matcherAddress':
                        config[key] = request_1.normalizeHost(newConfig[key]);
                        break;
                    default:
                        config[key] = newConfig[key];
                        break;
                }
            });
            checkRequiredFields(config);
        },
        clear: function () {
            Object.keys(config).forEach(function (key) {
                delete config[key];
            });
        }
    };
    
    },{"./constants":99,"./utils/request":105,"@evestx/signature-generator":15}],99:[function(require,module,exports){
    "use strict";
    var __assign = (this && this.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EVESTX = 'EVESTX';
    exports.MAINNET_BYTE = 139;
    exports.TESTNET_BYTE = 140;
    exports.INITIAL_NONCE = 0;
    exports.ADDRESS_BYTE = 1;
    exports.ALIAS_BYTE = 2;
    exports.ISSUE_TX = 3 /* ISSUE */;
    exports.TRANSFER_TX = 4 /* TRANSFER */;
    exports.REISSUE_TX = 5 /* REISSUE */;
    exports.BURN_TX = 6 /* BURN */;
    exports.EXCHANGE_TX = 7 /* EXCHANGE */;
    exports.LEASE_TX = 8 /* LEASE */;
    exports.CANCEL_LEASING_TX = 9 /* CANCEL_LEASING */;
    exports.CREATE_ALIAS_TX = 10 /* CREATE_ALIAS */;
    exports.MASS_TRANSFER_TX = 11 /* MASS_TRANSFER */;
    exports.DATA_TX = 12 /* DATA */;
    exports.SET_SCRIPT_TX = 13 /* SET_SCRIPT */;
    exports.SPONSORSHIP_TX = 14 /* SPONSORSHIP */;
    exports.ISSUE_TX_VERSION = 2 /* ISSUE */;
    exports.TRANSFER_TX_VERSION = 2 /* TRANSFER */;
    exports.REISSUE_TX_VERSION = 2 /* REISSUE */;
    exports.BURN_TX_VERSION = 2 /* BURN */;
    exports.EXCHANGE_TX_VERSION = 2 /* EXCHANGE */;
    exports.LEASE_TX_VERSION = 2 /* LEASE */;
    exports.CANCEL_LEASING_TX_VERSION = 2 /* CANCEL_LEASING */;
    exports.CREATE_ALIAS_TX_VERSION = 2 /* CREATE_ALIAS */;
    exports.MASS_TRANSFER_TX_VERSION = 1 /* MASS_TRANSFER */;
    exports.DATA_TX_VERSION = 1 /* DATA */;
    exports.SET_SCRIPT_TX_VERSION = 1 /* SET_SCRIPT */;
    exports.SPONSORSHIP_TX_VERSION = 1 /* SPONSORSHIP */;
    exports.ISSUE_TX_NAME = "issue" /* ISSUE */;
    exports.TRANSFER_TX_NAME = "transfer" /* TRANSFER */;
    exports.REISSUE_TX_NAME = "reissue" /* REISSUE */;
    exports.BURN_TX_NAME = "burn" /* BURN */;
    exports.BYTES_METAMASK = '0x';
    exports.EXCHANGE_TX_NAME = "exchange" /* EXCHANGE */;
    exports.LEASE_TX_NAME = "lease" /* LEASE */;
    exports.CANCEL_LEASING_TX_NAME = "cancelLeasing" /* CANCEL_LEASING */;
    exports.CREATE_ALIAS_TX_NAME = "createAlias" /* CREATE_ALIAS */;
    exports.MASS_TRANSFER_TX_NAME = "massTransfer" /* MASS_TRANSFER */;
    exports.DATA_TX_NAME = "data" /* DATA */;
    exports.SET_SCRIPT_TX_NAME = "setScript" /* SET_SCRIPT */;
    exports.SPONSORSHIP_TX_NAME = "sponsorship" /* SPONSORSHIP */;
    exports.PRIVATE_KEY_LENGTH = 32;
    exports.PUBLIC_KEY_LENGTH = 32;
    exports.MINIMUM_FEE = 100000;
    exports.MINIMUM_ISSUE_FEE = 100000000;
    exports.MINIMUM_MATCHER_FEE = 300000;
    exports.MINIMUM_DATA_FEE_PER_KB = 100000;
    exports.TRANSFER_ATTACHMENT_BYTE_LIMIT = 140;
    exports.DEFAULT_MIN_SEED_LENGTH = 25;
    exports.DEFAULT_ORDER_EXPIRATION_DAYS = 20;
    exports.DEFAULT_BASIC_CONFIG = {
        minimumSeedLength: exports.DEFAULT_MIN_SEED_LENGTH,
        requestOffset: 0,
        requestLimit: 100,
        logLevel: 'warning',
        timeDiff: 0
    };
    exports.DEFAULT_MAINNET_CONFIG = __assign({}, exports.DEFAULT_BASIC_CONFIG, { networkByte: exports.MAINNET_BYTE, nodeAddress: 'https://nodes.vestxhybrid.com', matcherAddress: 'https://matcher.vestxhybrid.com/matcher' });
    exports.DEFAULT_TESTNET_CONFIG = __assign({}, exports.DEFAULT_BASIC_CONFIG, { networkByte: exports.TESTNET_BYTE, nodeAddress: 'https://testnet1.vestxhybrid.com', matcherAddress: 'https://testnet1.vestxhybrid.com/matcher' });
    exports.DEFAULT_MAINNET_CONFIG_METAMASK = {
        chainId: exports.BYTES_METAMASK + (exports.MAINNET_BYTE).toString(16),
        chainName: 'eVESTX Mainnet',
        nativeCurrency: { name: 'eVESTX', symbol: 'eVESTX', decimals: 18 },
        rpcUrls: ['https://nodes.vestxhybrid.com/eth'],
        blockExplorerUrls: ['https://vxhexplorer.com/'],
    };
    exports.DEFAULT_TESTNET_CONFIG_METAMASK = {
        chainId: exports.BYTES_METAMASK + (exports.TESTNET_BYTE).toString(16),
        chainName: 'eVESTX Testnet',
        nativeCurrency: { name: 'eVESTX', symbol: 'eVESTX', decimals: 18 },
        rpcUrls: ['https://nodes-testnet.vestxhybrid.com/eth'],
        blockExplorerUrls: ['https://vxhexplorer.com/testnet'],
    };
    exports.EVESTX_V1_ISSUE_TX = {
        assetId: exports.EVESTX,
        decimals: 8,
        description: '',
        fee: 0,
        height: 0,
        id: exports.EVESTX,
        name: 'eVESTX',
        quantity: 10000000000 * Math.pow(10, 6),
        reissuable: false,
        sender: exports.EVESTX,
        senderPublicKey: '',
        signature: '',
        timestamp: 1460419200000,
        type: exports.ISSUE_TX
    };
    exports.BROADCAST_PATH = '/transactions/broadcast';
    
    },{}],100:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    function paddedMessage(message) {
        return "\n" + message + "\n";
    }
    function resolveData(data) {
        if (data instanceof Error) {
            return paddedMessage(data.toString());
        }
        else if (data) {
            try {
                return paddedMessage(JSON.stringify(data, null, 2));
            }
            catch (e) {
                return paddedMessage('Not possible to retrieve error data');
            }
        }
        else {
            return paddedMessage('No additional data provided');
        }
    }
    var eVESTXError = /** @class */ (function (_super) {
        __extends(eVESTXError, _super);
        function eVESTXError(message, data) {
            var _this = _super.call(this, message + ":\n" + resolveData(data)) || this;
            _this.name = 'eVESTXError';
            _this.data = data;
            if (Error.captureStackTrace) {
                Error.captureStackTrace(_this, eVESTXError);
            }
            return _this;
        }
        return eVESTXError;
    }(Error));
    exports.default = eVESTXError;
    
    },{}],101:[function(require,module,exports){
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    var eVESTXError_1 = require("./eVESTXError");
    var FAILED_TO_FETCH = 'Failed to fetch';
    function normalizeErrorData(data) {
        if (!data.error && data.message && data.message.indexOf(FAILED_TO_FETCH) !== -1) {
            return {
                error: -1,
                message: 'failed to fetch'
            };
        }
        else {
            return data;
        }
    }
    var eVESTXRequestError = /** @class */ (function (_super) {
        __extends(eVESTXRequestError, _super);
        function eVESTXRequestError(url, data) {
            var _this = _super.call(this, "Server request to '" + url + "' has failed", normalizeErrorData(data)) || this;
            _this.name = 'eVESTXRequestError';
            return _this;
        }
        return eVESTXRequestError;
    }(eVESTXError_1.default));
    exports.default = eVESTXRequestError;
    
    },{"./eVESTXError":100}],102:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fetchSubstitute = (function () {
        if (typeof window !== 'undefined') {
            return window.fetch.bind(window);
        }
        else if (typeof exports === 'object' && typeof module !== 'undefined') {
            return require('node-fetch');
        }
        else if (typeof self !== 'undefined') {
            return self.fetch.bind(self);
        }
        else {
            throw new Error('Your environment is not defined');
        }
    })();
    exports.default = fetchSubstitute;
    
    },{"node-fetch":undefined}],103:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var signature_generator_1 = require("@evestx/signature-generator");
    var constants_1 = require("./constants");
    var transactions_1 = require("./utils/transactions"); // TODO : fix this issue with interface
    exports.default = {
        getAddressFromPublicKey: function (publicKey) {
            var publicKeyBytes = signature_generator_1.libs.base58.decode(publicKey);
            return signature_generator_1.utils.crypto.buildRawAddress(publicKeyBytes);
        },
        getPrivateAddressFromPublicKey: function (publicKey) {
            var publicKeyBytes = signature_generator_1.libs.base58.decode(publicKey);
            return signature_generator_1.utils.crypto.buildPrivateRawAddress(publicKeyBytes);
        },
        calculateTimeDiff: function (nodeTime, userTime) {
            return nodeTime - userTime;
        },
        base58: {
            encode: signature_generator_1.libs.base58.encode,
            decode: signature_generator_1.libs.base58.decode
        },
        getMinimumDataTxFee: function (data) {
            var emptyDataTx = new signature_generator_1.TX_TYPE_MAP.data({
                senderPublicKey: '11111111111111111111111111111111',
                timestamp: 0,
                fee: '',
                data: data
            });
            return emptyDataTx.getBytes().then(function (bytes) { return Math.ceil(bytes.length / 1024) * constants_1.MINIMUM_DATA_FEE_PER_KB; });
        },
        createTransaction: transactions_1.createTransaction
    };
    
    },{"./constants":99,"./utils/transactions":106,"@evestx/signature-generator":15}],104:[function(require,module,exports){
    "use strict";
    var __assign = (this && this.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var signature_generator_1 = require("@evestx/signature-generator");
    var constants_1 = require("../constants");
    var config_1 = require("../config");
    function normalizeAssetId(original) {
        if (!original || original === constants_1.EVESTX) {
            return '';
        }
        else {
            return original;
        }
    }
    exports.normalizeAssetId = normalizeAssetId;
    function removeRecipientPrefix(original) {
        if (original.slice(0, 8) === 'address:') {
            return original.slice(8);
        }
        else {
            return original;
        }
    }
    exports.removeRecipientPrefix = removeRecipientPrefix;
    function removeAliasPrefix(original) {
        if (original.slice(0, 6) === 'alias:') {
            return original.slice(8); // Mind the network byte characters
        }
        else {
            return original;
        }
    }
    exports.removeAliasPrefix = removeAliasPrefix;
    // Adjusts user time to UTC
    // Should be used for creating transactions and requests only
    function getTimestamp(timestamp) {
        return (timestamp || Date.now()) + config_1.default.getTimeDiff();
    }
    exports.getTimestamp = getTimestamp;
    function precisionCheck(precision) {
        return (precision >= 0 && precision <= 8);
    }
    exports.precisionCheck = precisionCheck;
    function castFromBytesToBase58(bytes, sliceIndex) {
        bytes = Uint8Array.from(Array.prototype.slice.call(bytes, sliceIndex));
        return signature_generator_1.libs.base58.encode(bytes);
    }
    function castFromRawToPrefixed(raw) {
        if (raw.length > 30) {
            return "address:" + raw;
        }
        else {
            var networkCharacter = String.fromCharCode(config_1.default.getNetworkByte());
            return "alias:" + networkCharacter + ":" + raw;
        }
    }
    function createRemapper(rules) {
        return function (data) {
            return Object.keys(__assign({}, data, rules)).reduce(function (result, key) {
                var rule = rules[key];
                if (typeof rule === 'function') {
                    // Process with a function
                    result[key] = rule(data[key]);
                }
                else if (typeof rule === 'string') {
                    // Rename a field with the rule name
                    result[rule] = data[key];
                }
                else if (rule && typeof rule === 'object') {
                    // Transform according to the rule
                    if (rule.from === 'bytes' && rule.to === 'base58') {
                        result[key] = castFromBytesToBase58(data[key], rule.slice || 0);
                    }
                    else if (rule.from === 'raw' && rule.to === 'prefixed') {
                        result[rule.path || key] = castFromRawToPrefixed(data[key]);
                    }
                }
                else if (rule !== null) {
                    // Leave the data as is (or add some default value from the rule)
                    result[key] = data[key] || rule;
                }
                return result;
            }, Object.create(null));
        };
    }
    exports.createRemapper = createRemapper;
    
    },{"../config":98,"../constants":99,"@evestx/signature-generator":15}],105:[function(require,module,exports){
    "use strict";
    var __assign = (this && this.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var create = require("parse-json-bignumber");
    var eVESTXRequestError_1 = require("../errors/eVESTXRequestError");
    var fetch_1 = require("../libs/fetch");
    var config_1 = require("../config");
    var SAFE_JSON_PARSE = create().parse;
    exports.POST_TEMPLATE = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };
    var key = function (product, version) {
        return product + "/" + version;
    };
    var hostResolvers = (_a = {},
        _a[key(0 /* NODE */, 0 /* V1 */)] = function () { return config_1.default.getNodeAddress(); },
        _a[key(1 /* MATCHER */, 0 /* V1 */)] = function () { return config_1.default.getMatcherAddress(); },
        _a);
    function normalizeHost(host) {
        return host.replace(/\/+$/, '');
    }
    exports.normalizeHost = normalizeHost;
    function normalizePath(path) {
        return ("/" + path).replace(/\/+/g, '/').replace(/\/$/, '');
    }
    exports.normalizePath = normalizePath;
    function processJSON(res) {
        if (res.ok) {
            return res.text().then(SAFE_JSON_PARSE);
        }
        else {
            return res.json().then(Promise.reject.bind(Promise));
        }
    }
    exports.processJSON = processJSON;
    function handleError(url, data) {
        throw new eVESTXRequestError_1.default(url, data);
    }
    function createFetchWrapper(product, version, pipe) {
        var resolveHost = hostResolvers[key(product, version)];
        return function (path, options) {
            var url = resolveHost() + normalizePath(path);
            var request = fetch_1.default(url, options);
            if (pipe) {
                return request.then(pipe).catch(function (data) { return handleError(url, data); });
            }
            else {
                return request.catch(function (data) { return handleError(url, data); });
            }
        };
    }
    exports.createFetchWrapper = createFetchWrapper;
    function wrapTxRequest(SignatureGenerator, preRemapAsync, postRemap, callback, withProofs) {
        if (withProofs === void 0) { withProofs = false; }
        return function (data, keyPair) {
            return preRemapAsync(__assign({}, data, { senderPublicKey: keyPair.publicKey })).then(function (validatedData) {
                var transaction = new SignatureGenerator(validatedData);
                return transaction.getSignature(keyPair.privateKey)
                    .then(function (signature) { return postRemap(__assign({}, validatedData, (withProofs ? { proofs: [signature] } : { signature: signature }))); })
                    .then(function (tx) {
                    return callback(__assign({}, exports.POST_TEMPLATE, { body: JSON.stringify(tx) }));
                });
            });
        };
    }
    exports.wrapTxRequest = wrapTxRequest;
    var _a;
    
    },{"../config":98,"../errors/eVESTXRequestError":101,"../libs/fetch":102,"parse-json-bignumber":61}],106:[function(require,module,exports){
    "use strict";
    var __assign = (this && this.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var signature_generator_1 = require("@evestx/signature-generator");
    var txHelpers = require("../api/node/transactions.x");
    // TODO : refactor this module and ugly dependency injections through names (like preIssue, postReissue, etc)
    var capitalize = function (name) { return name.slice(0, 1).toUpperCase() + name.slice(1); };
    var TransactionWrapper = /** @class */ (function () {
        function TransactionWrapper(signatureGenerator, validatedData, postRemap, proofs) {
            this.signatureGenerator = signatureGenerator;
            this.validatedData = validatedData;
            this.postRemap = postRemap;
            this.proofs = proofs;
            this._privateKeys = [];
        }
        TransactionWrapper.prototype.addProof = function (privateKey) {
            this._privateKeys.push(privateKey);
            return this;
        };
        TransactionWrapper.prototype.getJSON = function () {
            var _this = this;
            return Promise.all(this._privateKeys.map(function (privateKey) {
                return _this.signatureGenerator.getSignature(privateKey);
            })).then(function (newProofs) {
                return _this.postRemap(__assign({}, _this.validatedData, { proofs: [].concat(_this.proofs, newProofs) }));
            });
        };
        return TransactionWrapper;
    }());
    exports.createTransaction = function (type, data) {
        var name = capitalize(type);
        var preRemap = txHelpers['pre' + name];
        var postRemap = txHelpers['post' + name];
        if (!preRemap || !postRemap || !signature_generator_1.TX_TYPE_MAP[type]) {
            throw new Error("Unknown transaction type: " + type);
        }
        var proofs = data.proofs || [];
        return preRemap(data).then(function (validatedData) {
            var signatureGenerator = new signature_generator_1.TX_TYPE_MAP[type](validatedData);
            return new TransactionWrapper(signatureGenerator, validatedData, postRemap, proofs);
        });
    };
    
    },{"../api/node/transactions.x":95,"@evestx/signature-generator":15}],221:[function(require, module,exports) {
        //metamask
        "use strict";

        //@metamask/detect-provider
        /**
        * Returns a Promise that resolves to the value of window.ethereum if it is
        * set within the given timeout, or null.
        * The Promise will not reject, but an error will be thrown if invalid options
        * are provided.
        *
        * @param options - Options bag.
        * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.
        * Default: false
        * @param options.silent - Whether to silence console errors. Does not affect
        * thrown errors. Default: false
        * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to
        * be dispatched. Default: 3000
        * @returns A Promise that resolves with the Provider if it is detected within
        * given timeout, otherwise null.
        */
         function detectEthereumProvider({ mustBeMetaMask = false, silent = false, timeout = 3000, } = {}) {
            _validateInputs();
            let handled = false;
            return new Promise((resolve) => {
                if (window.ethereum) {
                    handleEthereum();
                }
                else {
                    window.addEventListener('ethereum#initialized', handleEthereum, { once: true });
                    setTimeout(() => {
                        handleEthereum();
                    }, timeout);
                }
                function handleEthereum() {
                    if (handled) {
                        return;
                    }
                    handled = true;
                    window.removeEventListener('ethereum#initialized', handleEthereum);
                    const { ethereum } = window;
                    if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) {
                        resolve(ethereum);
                    }
                    else {
                        const message = mustBeMetaMask && ethereum
                        ? 'Non-MetaMask window.ethereum detected.'
                        : 'Unable to detect window.ethereum.';
                    !silent && console.error('@metamask/detect-provider:', message);
                    resolve(null);
                }
            }
        });
        function _validateInputs() {
            if (typeof mustBeMetaMask !== 'boolean') {
                throw new Error(`@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.`);
            }
            if (typeof silent !== 'boolean') {
                throw new Error(`@metamask/detect-provider: Expected option 'silent' to be a boolean.`);
            }
            if (typeof timeout !== 'number') {
                throw new Error(`@metamask/detect-provider: Expected option 'timeout' to be a number.`);
            }
        }
        }
        exports.installed = function() {
            return typeof window.ethereum !== 'undefined'
        }
        exports.state = async function () {
            return (await detectEthereumProvider())._state
        }
        exports.chainId = async function (){
            return (await detectEthereumProvider()).chainId
        }
        exports.request = async function(j) {
            if (typeof j !== 'object') {
                throw new Error(`Invalid Method request.`);
            }
            const provider = await detectEthereumProvider()
            if (provider){
                return await provider.request(j)
            } else {
                // if the provider is not detected, detectEthereumProvider resolves to null
                throw new Error('Please install MetaMask!')
            }
        }

    },{}]},{},[83])(83)
    });