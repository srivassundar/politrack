webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/fonts/WhitneyHTF-Black.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "WhitneyHTF-Black.095d965093297b139750.otf";

/***/ }),

/***/ "../../../../../src/assets/fonts/WhitneyHTF-Bold.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "WhitneyHTF-Bold.f4dd93a357b2958f9e4b.otf";

/***/ }),

/***/ "../../../../../src/assets/fonts/WhitneyHTF-Book.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "WhitneyHTF-Book.75a422c30e7141fd1bbf.otf";

/***/ }),

/***/ "../../../../../src/assets/fonts/WhitneyHTF-Light.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "WhitneyHTF-Light.daa18a642778b94e040b.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/WhitneyHTF-Medium.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "WhitneyHTF-Medium.cc1ab44380a988779e63.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/WhitneyHTF-SemiBold.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "WhitneyHTF-SemiBold.84f3fcc2e2f403922cfc.otf";

/***/ }),

/***/ "../../../../../src/assets/fonts/circular-std-bold.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "circular-std-bold.6baed2bf580964bec955.otf";

/***/ }),

/***/ "../../../../../src/assets/fonts/circular-std-book.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "circular-std-book.390d3eaa966ef5d30b16.otf";

/***/ }),

/***/ "../../../../../src/assets/fonts/circular-std-medium.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "circular-std-medium.0234b5e42ae5d89dcbc9.ttf";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:700);", ""]);

// module
exports.push([module.i, "/*font-family: 'Raleway', sans-serif;*/\n/* You can add global styles to this file, and also import other style files */\n@font-face {\n    font-family: 'circular-std-book';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/circular-std-book.otf") + "); /* Legacy iOS */\n}\n@font-face {\n    font-family: 'circular-std-medium';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/circular-std-medium.ttf") + "); /* Legacy iOS */\n}\n@font-face {\n    font-family: 'circular-std-bold';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/circular-std-bold.otf") + "); /* Legacy iOS */\n}\n@font-face {\n    font-family: 'whitneyHTF-light';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/WhitneyHTF-Light.ttf") + "); /* Legacy iOS */\n}\n@font-face {\n    font-family: 'whitneyHTF-book';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/WhitneyHTF-Book.otf") + "); /* Legacy iOS */\n}\n@font-face {\n    font-family: 'whitneyHTF-medium';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/WhitneyHTF-Medium.ttf") + "); /* Legacy iOS */\n}\n@font-face {\n    font-family: 'whitneyHTF-semibold';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/WhitneyHTF-SemiBold.otf") + "); /* Legacy iOS */\n}\n@font-face {\n    font-family: 'whitneyHTF-bold';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/WhitneyHTF-Bold.otf") + "); /* Legacy iOS */\n}\n@font-face {\n    font-family: 'whitneyHTF-black';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/WhitneyHTF-Black.otf") + "); /* Legacy iOS */\n}\n\n\nhtml {\n  padding-bottom: 75px;\n}\nbody {\n    font-family: 'whitneyHTF-book';\n    max-width: 100%;\n    overflow-x: hidden;\n    margin-left: 60px;\n    margin-right: 60px;\n}\nnav {\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 1;\n    top: 0px;\n    margin-left: -65px;\n    /*padding-top: 7.5px;\n    padding-left: 60px;\n    padding-right: 60px;*/\n    background-color: white;\n    height: 110px;\n    width: 100%;\n    vertical-align: center;\n    box-shadow: 0 8px 6px -6px #d6d6d6;\n}\nnav a {\n    padding: 5px 20px;\n    color: #000000;\n}\na.logo.active {\n    padding-top: 1.5px;\n    color: #000000;\n    font-family: 'whitneyHTF-bold';\n}\nnav._ngcontent-c0, a.active._ngcontent-c0 {\n    color: #000000;\n    padding-left: 130px;\n}\n.h2, h2 {\n    font-family: 'whitneyHTF-book';\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-bottom: 0px;\n    text-align: left;\n    color: #444444;\n    padding-left: 5px;\n    font-size: 28px;\n}\n#motto {\n    font-family: 'Raleway', sans-serif;\n    font-size: 40px;\n    margin-left: 0px;\n    margin-top: 50px;\n    text-align: center;\n}\ndiv.col-lg-4 {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    text-align: center;\n    width: 1150px;\n    background-color: #ededed;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    z-index: 0;\n    position: absolute;\n    left: 0;\n    right: 0;\n}\n.col-lg-4 {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n.col-lg-4 input {\n    border: none;\n    display: inline-block;\n    float: left;\n    padding: 5px;\n    font-size: 18px;\n    margin-right: 10px;\n}\n.col-lg-4 input::-webkit-input-placeholder {\n    color: #969696;\n}\n.col-lg-4 input:-ms-input-placeholder {\n    color: #969696;\n}\n.col-lg-4 input::placeholder {\n    color: #969696;\n}\n.col-lg-4 input[name=\"projectSearch2\"] {\n    margin-left: 15px;\n    width: 70%;\n    border-top-left-radius: 50px;\n    border-bottom-left-radius: 50px;\n    font-family: 'whitneyHTF-light';\n}\n.col-lg-4 input[name=\"neighSearch\"] {\n    width: 22%;\n}\n.col-lg-4 input[name=\"dateSearch\"] {\n    width: 16%;\n}\n.col-lg-4 button {\n\n    margin-right: 15px;\n    background-color: #000000;\n    color: #fff;\n    border: none;\n    font-size: 16px;\n    font-family: 'whitneyHTF-medium';\n}\n.h1, h1 {\n    margin-top: 50px;\n    margin-left: 20px;\n    font-family: \"whitneyHTF-medium\";\n}\n.grid .grid-pad {\n    text-align: center;\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n}\ndiv.col-1-4 {\n    width: 100px;\n    text-align: center;\n/*    border-style: solid;\n    border-width: 1px;*/\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    padding: 10px;\n}\ndiv.col-1-4[_ngcontent-c1] {\n  width: 33.33%;\n}\n.inner {\n/*    border-color: #e0e0e0;\n    border-style: solid;\n    border-width: 1px;*/\n    text-align: center;\n    display: inline-block;\n    margin: 0 auto;\n    width: 95%;\n    height: 90%;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.inner p {\n  font-size: 14px;\n}\ndiv.col-1-4 img {\n/*    display: block;\n    margin-left: auto;\n    margin-right: auto;*/\n    margin-top: 10px;\n    width: 100%;\n    height: 100%;\n}\ndiv.progress {\n  margin-left: 10.5px;\n  margin-right: 10.5px;\n  height: 25px;\n  margin-bottom: 5px;\n}\ndiv.progress-bar {\n    display: block;\n    margin: 0 auto;\n    height: 100%;\n    background-color: #00B76B;\n    float: left;\n    font-size: 14px;\n    font-family: 'whitneyHTF-book';\n    width:90%;\n    padding-top: 1px;\n/*    border-style: solid;\n    border-width: 2px;\n    border-color: #000000;*/\n}\ndiv.col-1-4 p {\n    margin-left: 0px;\n    margin-top: 0px;\n    text-align: center;\n    padding-top: 14px;\n}\nproject-detail img {\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: 20px;\n  margin-top: 40px;\n}\nproject-detail h2 {\n  margin-top: 45px;\n  font-family: 'whitneyHTF-medium';\n  font-size: 48px;\n  margin-bottom: 20px;\n  text-align: center;\n}\nproject-detail #tagline {\n  font-size: 16px;\n  text-align: center;\n}\ndiv.dateDiv, div.locationDiv, div.timeDiv {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 250px;\n  text-align: left;\n  margin-top: 10px;\n}\nproject-detail #calendarIcon, #locationIcon, #timeIcon {\n  margin-top: 0px;\n  float: left;\n  height: 40px;\n  width: 40px;\n}\nh3, .h3 {\n  font-family: 'whitneyHTF-medium';\n  font-size: 36px;\n}\n.detailsHeader {\n  margin-top: 75px;\n}\n.tagsHeader {\n  margin-top: 50px;\n}\n.tagButtons {\n  margin-left: 5px;\n}\ndiv.tagButtons button {\n  background-color: #000;\n  font-family: 'whitneyHTF-light';\n  font-size: 15px;\n  color: #fff;\n  padding: 12.5px;\n  margin-right: 5px;\n  border-radius: 0px;\n}\ndiv.tagButtons button:hover {\n  background-color: #444;\n}\n.col-md-4 button.helpButton {\n  background-color: #000;\n  font-family: 'whitneyHTF-medium';\n  font-size: 22px;\n  color: #fff;\n  padding: 15px;\n  margin-right: 5px;\n  border-radius: 0px;\n}\n.prjDesc {\n  font-size: 16px;\n  font-family: 'whitneyHTF-light';\n}\n.col-1-4 {\n    padding: 14px;\n}\ndiv.aboutContainer h2 {\nmargin-top: 30px;\ntext-align: left;\n}\ndiv.aboutContainer p {\nmargin-top: 30px;\nmargin-left: 5px;\npadding-left: 5px;\nwidth: 70%;\ntext-align: left;\n}\ndiv.Playbooktitle p {\n  font-size-adjust: 20px;\n}\ndiv.grid.grid-pad button {\n  background-color: #fff;\n  color: #000;\n  font-family: 'whitneyHTF-book';\n  padding: 10px;\n  margin-bottom: 10px;\n  border-width: 1px;\n  border-style: solid;\n  margin-right: 1%;\n}\ndiv.grid.grid-pad button:hover {\n  background-color: #000;\n  color: #fff;\n}\ndiv.topGrid {\n  margin-left: 2%;\n}\ndiv.topGrid select {\n   -webkit-appearance: none;\n   -moz-appearance: none;\n   appearance: none;\n   padding: 10px;\n   padding-left: 15px;\n   padding-right: 5px;\n   font-family: 'whitneyHTF-medium';\n   vertical-align: center;\n}\ndiv.signUp button, button, div.button, button.helpButton, #helpButton {\n  background-color: none;\n  font-family: 'whitneyHTF-light';\n  font-size: 15px;\n  color: #fff;\n  padding: 6px;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-right: 5px;\n  border: none;\n}\n.hereButton {\n  background-color: #fff;\n  color: #000;\n  font-family: 'whitneyHTF-medium';\n  border-width: 1px;\n  padding: 0px;\n  padding-right: -3px;\n}\ndiv.dropdown button, div.saveDiv.button.saveAndContinue p{\n  color: #fff;\n}\n#playbook {\n  font-family: 'whitneyHTF-semibold';\n  font-size: 21px;\n}\ndiv.progress-bars p {\n  text-align: center;\n}\n@media (min-width: 320px) {\n  #explorePrj, #createPrj, #aboutNav, #signUpNav {\n      display: none;\n  }\n  nav input[name=\"projectSearch\"] {\n    display: none;\n  }\n  div.col-1-4[_ngcontent-c1] {\n    width: 100%;\n  }\n  nav {\n    width: 100vw;\n  }\n  #searchBar, #motto {\n    display: none;\n  }\n  h1.trendingHeader {\n    margin-top: 15px;\n  }\n}\n@media (min-width: 550px) {\n  nav input[name=\"projectSearch\"] {\n    display: inline-block;\n  }\n}\n@media (min-width: 660px) {\n  #explorePrj {\n    display: inline-block;\n  }\n}\n@media (min-width: 775px) {\n  #createPrj {\n    display: inline-block;\n  }\n}\n@media (min-width: 835px) {\n  #aboutNav {\n    display: inline-block;\n  }\n  h1.trendingHeader {\n  margin-top: 150px;\n  }\n  #motto {\n    display: block;\n  }\n  #searchBar {\n    display: block;\n    width: 57%;\n    border-radius: 50px;\n    background-color: #F05F40;\n  }\n}\n@media (min-width: 950px) {\n  #signUpNav {\n    display: inline-block;\n  }\n}\nbutton:disabled, button[disabled], #helpButton:disabled, #helpButton[disabled] {\n  background-color: #C4C9C4;\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map