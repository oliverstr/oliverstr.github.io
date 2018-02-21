webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_token_component__ = __webpack_require__("../../../../../src/app/token/token.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: ':hashtag', component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */] },
    { path: 'token', component: __WEBPACK_IMPORTED_MODULE_2__token_token_component__["a" /* TokenComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http } from '@angular/http';

var AppConfig = (function () {
    function AppConfig(http) {
        this.http = http;
        this.config = null;
    }
    /**
     * Use to get the data found in the second file (config file)
     */
    AppConfig.prototype.getConfig = function (key) {
        return this.config[key];
    };
    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    AppConfig.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/config/config.json').catch(function (error) {
                console.log('Configuration file "config.json" could not be read');
                resolve(true);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
            }).subscribe(function (responseData) {
                _this.config = responseData;
                console.log('[LOG] reading configuration file');
                resolve(true);
            });
        });
    };
    return AppConfig;
}());
AppConfig.KEYS = {
    APP_URI: 'app_uri',
    CLIENT_ID: 'clienteId',
    TOKEN_HANDLER: 'tokenHandler'
};
AppConfig = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AppConfig);

var _a;
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__token_token_component__ = __webpack_require__("../../../../../src/app/token/token.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authorization_service__ = __webpack_require__("../../../../../src/app/services/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_connection_service__ = __webpack_require__("../../../../../src/app/services/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function initConfig(config) {
    return function () { return config.load(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_6__token_token_component__["a" /* TokenComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_connection_service__["a" /* ConnectionService */],
            __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* AppConfig */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* APP_INITIALIZER */],
                useFactory: initConfig,
                deps: [__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* AppConfig */]],
                multi: true
            },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"instagram-signature\">#{{config.tag}}</div>\n  <div *ngIf=\"selectedMedia\" class=\"content-wrapper\">\n    <img [src]=\"selectedMedia.node.display_url\" alt=\"Imagem do instagram\" class=\"media-img\" [ngClass]=\"{'slit-in-vertical' : inAnimation, 'rotate-out-2-cw' : outAnimation}\">\n    <div *ngIf=\"selectedMedia.user\" class=\"caption\" [ngClass]=\"{'fade-in-right' : inAnimation}\">\n      <img src=\"{{selectedMedia.user.profile_pic_url}}\" alt=\"Profile Picture\">\n      <div>\n        <b>@{{selectedMedia.user.username}}</b>\n        <br>\n        <small>{{selectedMedia.user.full_name}}</small>\n        <p>{{selectedMedia.node.edge_media_to_caption.edges[0].node.text}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"venturus-signature\"></div>\n  <div class=\"settings\">\n    <a (click)=\"toggleSettings()\"><img src=\"assets/img/fa-cog.png\" alt=\"Config\" style=\"color: rgba(0,0,0,0.5)\"></a>\n    <div *ngIf=\"displaySettings\" class=\"dropdown-settings\">\n      <form #form=\"ngForm\" (ngSubmit)=\"setNewConfig()\">\n\n        <label>Hashtag</label>\n        <input type=\"text\" [(ngModel)]=\"newConfig.tag\" name=\"tag\" placeholder=\"Hashtag\" required>\n\n        <label>Duration seconds</label>\n        <input type=\"number\" [(ngModel)]=\"newConfig.durationSeconds\" name=\"duration\" placeholder=\"Duration time\" required>\n\n        <label>Refresh minutes</label>\n        <input type=\"number\" [(ngModel)]=\"newConfig.refreshMinutes\" name=\"refresh\" placeholder=\"Refresh time\" required>\n        \n        <button type=\"submit\" [disabled]=\"!form.form.valid\">Save</button>\n      </form>   \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_connection_service__ = __webpack_require__("../../../../../src/app/services/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(_connection, _route, _router) {
        this._connection = _connection;
        this._route = _route;
        this._router = _router;
        this._mediaItems = [];
        this._mediaIndex = 0;
        this.inAnimation = true;
        this.outAnimation = false;
        this.config = {
            mediaItemsInterval: undefined, switchMediaInteral: undefined
        };
        this.displaySettings = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.config['tag'] = params['hashtag'] || 'venturus';
            _this.setConfig();
            _this.getMediaItems(_this.config['tag']);
            _this.config.mediaItemsInterval = setInterval(function () {
                _this.getMediaItems(_this.config['tag']);
            }, (_this.config['refreshMinutes'] * 60000));
            _this.config.switchMediaInteral = setInterval(_this.switchMedia.bind(_this), (_this.config['durationSeconds'] * 1000));
        });
    };
    MainComponent.prototype.checkAuthorization = function () {
        this._connection.getToken();
    };
    MainComponent.prototype.getMediaItems = function (tag) {
        var _this = this;
        console.log("Searching for posts with #" + tag + "..");
        this._connection.getTagMedia(tag).subscribe(function (data) {
            console.log(data.length + ' posts ready...');
            _this._mediaItems = data;
            _this._mediaIndex = -1;
        }, function (err) { return console.log(err); });
    };
    MainComponent.prototype.getLocationItems = function (location) {
        var _this = this;
        console.log("Searching for posts with location " + location + "..");
        this._connection.getLocationMedia(location).subscribe(function (data) {
            console.log(data.length + ' posts ready...');
            _this._mediaItems = data;
            _this._mediaIndex = -1;
        }, function (err) { return console.log(err); });
    };
    MainComponent.prototype.switchMedia = function () {
        var _this = this;
        this.animate('out');
        setTimeout(function () {
            _this._mediaIndex = _this._mediaIndex === (_this._mediaItems.length - 1) ? 0 : _this._mediaIndex + 1;
            _this.selectedMedia = _this._mediaItems[_this._mediaIndex];
        }, 500); // Wait for out transition complete to load other image
        setTimeout(function () {
            _this.animate('in');
        }, 500); // Wait for in transition complete to load other image
    };
    MainComponent.prototype.animate = function (direction) {
        switch (direction) {
            case 'in': {
                this.inAnimation = true;
                this.outAnimation = false;
                break;
            }
            case 'out': {
                this.inAnimation = false;
                this.outAnimation = true;
                break;
            }
        }
    };
    MainComponent.prototype.setNewConfig = function () {
        clearInterval(this.config.switchMediaInteral);
        clearInterval(this.config.mediaItemsInterval);
        localStorage['durationSeconds'] = this.newConfig.durationSeconds;
        localStorage['refreshMinutes'] = this.newConfig.refreshMinutes;
        this.config = this.newConfig;
        this.toggleSettings();
        this._router.navigate(['', this.newConfig.tag]);
    };
    MainComponent.prototype.toggleSettings = function () {
        var _this = this;
        this.displaySettings = this.displaySettings ? false : true;
        if (this.displaySettings) {
            setTimeout(function () {
                _this.displaySettings = false;
            }, 10000);
        }
    };
    MainComponent.prototype.setConfig = function () {
        this.config['durationSeconds'] = localStorage['durationSeconds'] || 5;
        this.config['refreshMinutes'] = localStorage['refreshMinutes'] || 5;
        this.newConfig = Object.assign({}, this.config);
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_connection_service__["a" /* ConnectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MainComponent);

var _a, _b, _c;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/authorization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthorizationService = (function () {
    function AuthorizationService() {
    }
    AuthorizationService.prototype.saveToken = function (token) {
        localStorage.setItem('token', token);
        this.token = token;
        console.log("Token saved succesfully: " + token);
    };
    AuthorizationService.prototype.getLocalToken = function () {
        var ok;
        var localToken = localStorage.getItem('token');
        if (localToken) {
            this.token = localToken.toString();
            return ok = true;
        }
        return ok = false;
    };
    return AuthorizationService;
}());
AuthorizationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthorizationService);

//# sourceMappingURL=authorization.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/connection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorization_service__ = __webpack_require__("../../../../../src/app/services/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectionService = (function () {
    function ConnectionService(_auth, _http, _config) {
        this._auth = _auth;
        this._http = _http;
        this._config = _config;
        this._clientID = this._config.getConfig(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */].KEYS.CLIENT_ID);
        this._appURI = this._config.getConfig(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */].KEYS.APP_URI);
        this._tokenHandler = this._config.getConfig(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */].KEYS.TOKEN_HANDLER);
        this._athorizationLink = "https://api.instagram.com/oauth/authorize/?client_id=" + this._clientID + "&redirect_uri=" + this._appURI +
            (this._tokenHandler + "&response_type=token&scope=public_content");
    }
    ConnectionService.prototype.redirectToAuth = function () {
        window.location.href = this._athorizationLink;
    };
    ConnectionService.prototype.getToken = function () {
        if (!this._auth.getLocalToken()) {
            this.redirectToAuth();
        }
    };
    ConnectionService.prototype.getTagMedia = function (tag) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var url = "https://www.instagram.com/explore/tags/" + tag + "/";
        return this._http.get(url, { headers: header, responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Text })
            .map(function (data) {
            var posts = JSON.parse(data['_body'].split('_sharedData = ')[1].split(';</script>')[0])['entry_data']['TagPage'][0]['graphql']['hashtag']['edge_hashtag_to_media']['edges'];
            posts.forEach(function (post) {
                _this.getUserByPostCode(post['node']['shortcode']).subscribe(function (user) { return post['user'] = user; });
            });
            return posts;
        });
    };
    ConnectionService.prototype.getLocationMedia = function (location) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var url = "https://www.instagram.com/explore/locations/" + location + "/";
        return this._http.get(url, { headers: header, responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Text })
            .map(function (data) {
            var posts = JSON.parse(data['_body'].split('_sharedData = ')[1].split(';</script>')[0])['entry_data']['TagPage'][0]['graphql']['hashtag']['edge_hashtag_to_media']['edges'];
            posts.forEach(function (post) {
                _this.getUserByPostCode(post['node']['shortcode']).subscribe(function (user) { return post['user'] = user; });
            });
            return posts;
        });
    };
    ConnectionService.prototype.getUserByPostCode = function (postCode) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var url = "https://www.instagram.com/p/" + postCode + "/";
        var user = {};
        return this._http.get(url, { headers: header, responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Text })
            .map(function (data) {
            var owner_id = data['_body'].split('<meta property="instapp:owner_user_id" content="')[1].split('" />')[0];
            user['profile_pic_url'] = data['_body'].split('{"id":"' + owner_id + '","profile_pic_url":"')[1].split('","username":"')[0];
            user['username'] = data['_body'].split('(@')[1].split(') on Instagram')[0];
            user['full_name'] = data['_body'].split('<meta property="og:title" content="')[1].split(' on Instagram:')[0];
            return user;
        });
    };
    return ConnectionService;
}());
ConnectionService.LOCATIONS = {
    venturus: '251957435',
};
ConnectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]) === "function" && _c || Object])
], ConnectionService);

var _a, _b, _c;
//# sourceMappingURL=connection.service.js.map

/***/ }),

/***/ "../../../../../src/app/token/token.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__ = __webpack_require__("../../../../../src/app/services/authorization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenComponent = (function () {
    function TokenComponent(_route, _auth, _router) {
        this._route = _route;
        this._auth = _auth;
        this._router = _router;
    }
    TokenComponent.prototype.ngOnInit = function () {
        this.getToken();
    };
    TokenComponent.prototype.getToken = function () {
        var _this = this;
        this._route.fragment.subscribe(function (fragment) {
            _this._auth.saveToken(fragment.replace('access_token=', ''));
            _this._router.navigate(['/main']);
        });
    };
    return TokenComponent;
}());
TokenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-token',
        template: "Autorizando aplica\u00E7\u00E3o no instagram.."
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], TokenComponent);

var _a, _b, _c;
//# sourceMappingURL=token.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map