webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/img/instagram.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "instagram.59ee5389b22217637e5a.png";

/***/ }),

/***/ "../../../../../src/assets/img/venturus.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "venturus.b493f3f13bbf62591422.png";

/***/ }),

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Shadows+Into+Light);", ""]);

// module
exports.push([module.i, "html,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 18px; }\n\n.container {\n  width: 100%;\n  height: 100%;\n  background-color: #2980B9;\n  position: relative; }\n\n.content-wrapper {\n  margin-left: 15%;\n  width: 80%;\n  height: calc(100% - 150px);\n  padding-top: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.media-img {\n  z-index: 999;\n  border: 10px solid white;\n  border-bottom-width: 70px;\n  box-shadow: -15px 25px 15px 15px rgba(0, 0, 0, 0.2);\n  max-height: 70%;\n  width: 50%; }\n\n.caption {\n  width: 50%;\n  color: white;\n  margin-left: 5%;\n  margin-top: -7px;\n  padding: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 1.5vw;\n  line-height: 1.2em; }\n  .caption img {\n    margin-right: 50px;\n    border-radius: 50%;\n    width: 150px;\n    border: 7px white solid; }\n  .caption p {\n    max-height: 60vh;\n    overflow: hidden; }\n\n.venturus-signature {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/venturus.png") + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 300px;\n  height: 150px;\n  position: absolute;\n  bottom: 20px;\n  right: 40px; }\n\n.instagram-signature {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/instagram.png") + ");\n  background-repeat: no-repeat;\n  background-position: left;\n  background-size: contain;\n  width: 250px;\n  height: 100px;\n  position: absolute;\n  top: 40px;\n  left: 40px;\n  padding-left: 180px;\n  padding-top: 70px;\n  font-family: 'Shadows Into Light', cursive;\n  font-size: 110px;\n  color: white; }\n\n.settings {\n  position: absolute;\n  top: 30px;\n  right: 30px; }\n  .settings a {\n    float: right;\n    cursor: pointer;\n    margin-bottom: 15px; }\n\n.dropdown-settings {\n  padding-top: 15px; }\n  .dropdown-settings label {\n    color: #fff; }\n  .dropdown-settings input {\n    display: block;\n    margin-bottom: 5px; }\n  .dropdown-settings button {\n    border: 0;\n    background-color: #fff;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif; }\n\n/* ----------------------------------------------\n * Generated by Animista on 2017-12-6 13:4:38\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation rotate-out-2-cw\n * ----------------------------------------\n */\n.rotate-out-2-cw {\n  -webkit-animation: rotate-out-2-cw 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: rotate-out-2-cw 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.slit-in-vertical {\n  -webkit-animation: slit-in-vertical 0.6s ease-out both;\n  animation: slit-in-vertical 0.6s ease-out both; }\n\n.fade-in-right {\n  -webkit-animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n\n@-webkit-keyframes rotate-out-2-cw {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    opacity: 0; } }\n\n@keyframes rotate-out-2-cw {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    opacity: 0; } }\n\n@-webkit-keyframes slit-in-vertical {\n  0% {\n    -webkit-transform: translateZ(-800px) rotateY(90deg);\n    transform: translateZ(-800px) rotateY(90deg);\n    opacity: 0; }\n  54% {\n    -webkit-transform: translateZ(-160px) rotateY(87deg);\n    transform: translateZ(-160px) rotateY(87deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0);\n    transform: translateZ(0) rotateY(0); } }\n\n@keyframes slit-in-vertical {\n  0% {\n    -webkit-transform: translateZ(-800px) rotateY(90deg);\n    transform: translateZ(-800px) rotateY(90deg);\n    opacity: 0; }\n  54% {\n    -webkit-transform: translateZ(-160px) rotateY(87deg);\n    transform: translateZ(-160px) rotateY(87deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0);\n    transform: translateZ(0) rotateY(0); } }\n\n@-webkit-keyframes fade-in-right {\n  0% {\n    -webkit-transform: translateX(50px);\n    transform: translateX(50px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fade-in-right {\n  0% {\n    -webkit-transform: translateX(50px);\n    transform: translateX(50px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; } }\n", ""]);

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

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map