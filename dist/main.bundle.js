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

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"aboutContainer\">\n<div>\n      <h2>About Us</h2>\n      <p> This web-app is based on Chapter 2 of the Atlanta Community Engagement Playbook - Plays for Community Associations.\n\n          In this chapter, storytelling is an important method to share ideas and information in rich ways. This site helps community associations facilitate the hosting of events while nurturing a tight-knit community by allowing members to initiate projects and take the lead. This way, community associations are able to better mobilize members around a shared vision for a more progressive community. </p>\n\n     </div>\n\n<div>\n      <p id=\"playbook\">Atlanta Community Engagement Playbook</p>\n       \t<p> The City of Atlanta and its community partners are committed to engaging residents, businesses, and organizations to shape the city to be the best it can be. This playbook includes approaches to community engagement that are constructive, sustainable, collaborative, holistic, creative, and open. </p>\n      \t<p> The goal is to offer community associations and service providers a set of actionable practices to achieve greater levels of quality engagement. Because neighborhood-led organizing has long been at the forefront of making change in Atlanta, from the civil rights movement through to today, this playbook is designed as a working resource—with action checklists, guides, and case studies—to support community leadership and participation in engagement processes. This resource extends to municipal agencies and service providers who have a responsibility to meet communities where they are and build sustainable partnerships through engagement. </p>\n</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(router) {
        this.router = router;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__official_detail_official_detail_component__ = __webpack_require__("../../../../../src/app/official-detail/official-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__search_result_search_result_component__["a" /* SearchResultComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__official_detail_official_detail_component__["a" /* OfficialDetailComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  text-decoration: none;\n  /*margin-top: 7.5px;*/\n  display: inline-block;\n  border-radius: 4px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: orangered;\n  font-weight:700;\n}\nnav a:visited, a:link {\n  color: #000000;\n}\nnav a:hover {\n  color: #333;\n}\nnav .logo {\n  color: #000000;\n  padding-top: 5px;\n  font-size: 22px;\n  font-family: \"whitneyHTF-semibold\";\n}\nnav input {\n  border-style: solid;\n  border-width: 2px;\n  border-color: #d9d9d9;\n}\nnav input::-webkit-input-placeholder {\n  /*padding: 5px;*/\n  font-family: 'whitneyHTF-light';\n  color: #969696;\n  font-size: 13px;\n}\nnav input:-ms-input-placeholder {\n  /*padding: 5px;*/\n  font-family: 'whitneyHTF-light';\n  color: #969696;\n  font-size: 13px;\n}\nnav input::placeholder {\n  /*padding: 5px;*/\n  font-family: 'whitneyHTF-light';\n  color: #969696;\n  font-size: 13px;\n}\ninput:focus::-webkit-input-placeholder { color:transparent; }\ninput:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\ninput:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\ninput:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */\nnav input[name=\"projectSearch\"] {\n  margin-left: 30px;\n  margin-right: 5px;\n  width: 225px;\n  font-family: 'whitneyHTF-light';\n  padding: 7px;\n}\nnav input a {\n  padding-left: 50px;\n}\n.preview {\n  border: 2px solid lightgrey;border-radius: 10px;\n}\n.makenavright {\n  float: right;\n  height: 100%;\n}\n.searchnav {\n  position: relative;\n  top: 15%;\n}\n.nav-options {\n  position: relative;\n  top: 38%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"logo\" id=\"logo\">\n        <img src='/src/assets/thumbnails/Logo5.png' style=\"width:200px;height:89px;\" ></a>\n    <!-- <a id=\"explorePrj\" routerLink=\"/explore\" routerLinkActive=\"active\">Explore Projects</a> -->\n    <div class=\"makenavright\">\n        <a class=\"nav-options\" id=\"aboutNav\" routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n        <a class=\"nav-options\" id=\"contactNav\">Contact Us </a>\n        <a class=\"nav-options\">\n            <img src='/src/assets/thumbnails/search-icon.png' class=\"searchnav\" style=\"width:44px;height:44px;\" >\n        </a>\n        </div>\n    </nav>\n<router-outlet></router-outlet>"

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

// import { User } from './data/user';
// import { UserService } from './user.service';
var AppComponent = (function () {
    // user_service: UserService = null;
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.user_service = this.userService
        // console.log(this.userService);
        // console.log('CurrUser: ' + this.user);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__official_service__ = __webpack_require__("../../../../../src/app/official.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_service__ = __webpack_require__("../../../../../src/app/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__official_detail_official_detail_component__ = __webpack_require__("../../../../../src/app/official-detail/official-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__search_result_search_result_component__["a" /* SearchResultComponent */],
            __WEBPACK_IMPORTED_MODULE_9__official_detail_official_detail_component__["a" /* OfficialDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__official_service__["a" /* OfficialService */], __WEBPACK_IMPORTED_MODULE_7__category_service__["a" /* CategoryService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_categories__ = __webpack_require__("../../../../../src/app/data/categories.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CategoryService = (function () {
    function CategoryService() {
    }
    CategoryService.prototype.getCategories = function () {
        return __WEBPACK_IMPORTED_MODULE_1__data_categories__["a" /* CATEGORIES */];
    };
    CategoryService.prototype.getCategory = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1__data_categories__["a" /* CATEGORIES */].find(function (category) { return category.id === id; });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], CategoryService);

//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/data/categories.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES; });
var CATEGORIES = [
    {
        id: 0,
        name: "Environmental",
        type: true,
        description: "e.g. Park clean-ups, etc."
    },
    {
        id: 1,
        name: "Social",
        type: true,
        description: "e.g. Meet-ups, block parties, etc."
    },
    {
        id: 2,
        name: "Impact",
        type: true,
        description: "e.g. Rallies, marches, etc. "
    },
    {
        id: 3,
        name: 'Donation',
        type: true,
        description: "e.g. Food drives, clothing drives, etc."
    },
    {
        id: 4,
        name: 'Sales',
        type: true,
        description: "e.g. Yard sales, fundraising, etc."
    },
    {
        id: 5,
        name: 'Educational',
        type: true,
        description: "e.g. Workshops, etc."
    },
    {
        id: 6,
        name: 'Public Safety',
        type: true,
        description: "e.g. Teaching safety practices, awareness talks, etc."
    },
    {
        id: 7,
        name: 'Park',
        type: false,
        description: "TAG EXAMPLE"
    }
];
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ "../../../../../src/app/data/officials.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OFFICIALS; });
var OFFICIALS = [
    {
        id: 2,
        title: "John Lewis",
        userID: 0,
        userName: 'Jane Doe',
        description: "John Robert Lewis (born February 21, 1940) is an American politician and civil rights leader. He is the U.S. Representative for Georgia's 5th congressional district, serving since 1987, and is the dean of the Georgia congressional delegation. His district includes three quarters of Atlanta.\n    \nLewis, who as chairman of the Student Nonviolent Coordinating Committee (SNCC) was one of the \"Big Six\" leaders of groups who organized the 1963 March on Washington, played many key roles in the Civil Rights Movement and its actions to end legalized racial segregation in the United States. A member of the Democratic Party, Lewis is a member of the Democratic leadership of the U.S. House of Representatives and has served as a Chief Deputy Whip since 1991 and Senior Chief Deputy Whip since 2003.\n    \nLewis has been awarded many honorary degrees and is the recipient of numerous awards from eminent national and international institutions, including the highest civil ian honor, the Presidential Medal of Freedom. John Lewis is an amazing person who fought for rights.",
        date: "Assumed office: January 3, 1987",
        timeOfEvent: ' In office: June 1963 – May 1966',
        timeLeft: 14,
        category: 1,
        tag: 'Park, Environment',
        media: "",
        neighborhood: 0,
        locationName: "Member of the U.S. House of Representatives",
        address: "from Georgia's 5th district",
        thumbnail: "./../../assets/thumbnails/johnLewis.jpg",
        resources_deadline: "",
        resources: null
    },
    {
        id: 4,
        title: "John Edwards",
        userID: 0,
        userName: 'John Adams',
        description: "Hi everyone! I just moved to the city and was looking to meet some people in the area. Looking forward to meeting everyone at the hike!",
        date: "Tuesday, May 16th, 2017",
        timeOfEvent: '10:00 am - 2:00 pm',
        timeLeft: 6,
        category: 2,
        tag: 'Park, Environment',
        media: "",
        neighborhood: 0,
        locationName: 'Stone Mountain',
        address: "400 Peachtree Road, Front Entrance",
        thumbnail: "./../../assets/thumbnails/johnEdwards.jpg",
        resources_deadline: "",
        resources: null
    },
    {
        id: 5,
        title: "John Kline",
        userID: 0,
        userName: 'Pam Locke',
        description: "Hey all! This worked is geared for students in the computing and design ",
        date: "Thursday, May 18th, 2017",
        timeOfEvent: '11:00 am - 1:00 pm',
        timeLeft: 6,
        category: 2,
        tag: 'Workshop, Career',
        media: "",
        neighborhood: 0,
        locationName: 'City Hall',
        address: "400 Park Dr NE, 14th Street",
        thumbnail: "./../../assets/thumbnails/johnKline.jpg",
        resources_deadline: "",
        resources: null
    },
    {
        id: 6,
        title: "Town Hall Meeting",
        userID: 0,
        userName: 'Pam Locke',
        description: "Hey all! This worked is geared for students in the computing and design ",
        date: "Wednesday, May 28th, 2017",
        timeOfEvent: '5:00 pm - 6:00 pm',
        timeLeft: 6,
        category: 2,
        tag: 'Meeting, Community',
        media: "",
        neighborhood: 0,
        locationName: 'City Hall',
        address: "Atlanta History Center, 560 Peachtree Street",
        thumbnail: "./../../assets/thumbnails/cityhall.jpg",
        resources_deadline: "",
        resources: null
    },
    {
        id: 8,
        title: "Taste of Atlanta Food Festival",
        userID: 0,
        userName: 'Sophia Amuraso',
        description: "Help support local restaurants! There'll be over 200 vendors at this all-day event! ",
        date: "Saturday, May 28th, 2017",
        timeOfEvent: '9:00 am - 6:00 pm',
        timeLeft: 19,
        category: 2,
        tag: 'Food, Community',
        media: "",
        neighborhood: 0,
        locationName: 'Sandy Springs',
        address: "1560 Peachtree Street",
        thumbnail: "./../../assets/thumbnails/tasteofatl.jpg",
        resources_deadline: "",
        resources: null
    },
    {
        id: 0,
        title: "Piedmont Park Clean-up",
        userID: 0,
        userName: 'Jane Doe',
        description: "Hi all, I'm looking for volunteers to help beautify our local park!\n    Volunteers will be expected to pick up trash around the park, and should arrive by\n    10:50 AM. We will be providing boxed lunch for those who will be staying for the\n    entirety of the event. If you have any questions, please reach out to me at\n    janedoe3710@gmail.com. Please spread the word!",
        date: "Saturday, April 1st, 2017",
        timeOfEvent: '11:00 am - 2:00 pm',
        timeLeft: 14,
        category: 0,
        tag: 'Park, Environment',
        media: "",
        neighborhood: 0,
        locationName: "Piedmont Park",
        address: "400 Park Dr NE, 14th Street",
        thumbnail: "./../../assets/thumbnails/piedmont_park.jpg",
        resources_deadline: "",
        resources: null
    },
    {
        id: 1,
        title: "Beekeeping Event at Metro Atlanta Beekeepers Association",
        userID: 0,
        userName: 'Emily Smith',
        description: "Hi all, the Metro Atlanta Beekeepers Association is hosting a free beekeeping event to educate the community about why keeping the bee population plentiful is imperative to the environment. Join us if you can!",
        date: "Monday, May 25th, 2017",
        timeOfEvent: '1:00 pm - 4:00 pm',
        timeLeft: 14,
        category: 2,
        tag: 'Park, Environment, Beekeeping, Gardens',
        media: "",
        neighborhood: 0,
        locationName: 'Atlanta Botanical Gardens',
        address: "400 Peachtree Dr NE, 18th Street",
        thumbnail: "./../../assets/thumbnails/beekeeping.jpg",
        resources_deadline: "",
        resources: null
    },
    {
        id: 3,
        title: "Beautifying Atlanta's Botanical Garden",
        userID: 0,
        userName: "Jane Doe",
        description: "Hi all, I'm looking for volunteers to help set up food and drinks for\n    an event I'm hosting at Atlanta Botanical Garden! Volunteers will be expected to\n    pour food into bowls and pour drinks into cups. Gloves and utensils will be provided.\n    Just bring yourself! If you have any questions, please reach out to me at\n    janedoe3710@gmail.com. Please spread the word!",
        date: "Friday, April 12th, 2017",
        timeOfEvent: '11:00 am - 2:00 pm',
        timeLeft: 14,
        category: 0,
        tag: 'Park, Environment',
        media: "",
        neighborhood: 0,
        locationName: 'Atlanta Botanical Garden',
        address: "400 Park Dr NE, 14th Street",
        thumbnail: "./../../assets/thumbnails/botanic_garden.png",
        resources_deadline: "",
        resources: null
    },
    {
        id: 7,
        title: "Soup Kitchen",
        userID: 0,
        userName: 'Burt Marlowe',
        description: "Support the community by volunteering to help serve food to the\n    homeless! ",
        date: "Saturday, April 28th, 2017",
        timeOfEvent: '9:00 am - 12:00 pm',
        timeLeft: 29,
        category: 2,
        tag: 'Food, Community',
        media: "",
        neighborhood: 0,
        locationName: 'Atlanta Community Food Bank',
        address: "732 Joseph E Lowery Blvd NW",
        thumbnail: "./../../assets/thumbnails/soupkitchen.jpg",
        resources_deadline: "",
        resources: null
    },
    {
        id: 9,
        title: "Women's March",
        userID: 0,
        userName: 'Jane Doe',
        description: "Hi all, I'm looking for people to go to the Women's March with! Please\n    try to be here by 10:50 AM. If you have any questions, please reach out to me at\n    janedoe3710@gmail.com. Please spread the word!",
        date: "Monday, May 15th, 2017",
        timeOfEvent: '11:00 am - 2:00 pm',
        timeLeft: 14,
        category: 2,
        tag: 'Park, Environment',
        media: "",
        neighborhood: 0,
        locationName: 'City Hall',
        address: "400 Park Dr NE, 14th Street",
        thumbnail: "./../../assets/thumbnails/womens_march.png",
        resources_deadline: "",
        resources: null
    },
];
//# sourceMappingURL=officials.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\n  float: left;\n}\nh2 {margin-left: 10px;}\n[class*='col-']:last-of-type {\n  padding-right: ;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\n/*h3 {\n  text-align: center; margin-bottom: 0;\n}*/\nh4 {\n  position: relative;\n}\n.grid {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 30px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (min-width: 600px) {\n  div.col-1-4[_ngcontent-c1] {\n    width: 50%;\n  }\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px;\n  }\n}\n@media (min-width: 800px) {\n  div.col-1-4[_ngcontent-c1] {\n    width: 33.33%;\n  }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n\n.home-center {\n  padding-top:30vh;\n  height: 80vh;\n  background-image: url(/./src/assets/thumbnails/harambe.png);\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  background-size: 360px 323px;\n  background-attachment: fixed;\n}\n\n.home-button {\n  border-bottom-right-radius: 50px;\n  border-top-right-radius: 50px;\n  width:20%;\n  background-color: #6794BD;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 id=\"motto\">PoliTrack your rep today</h2><br>\n<div class=\"home-center\">\n<div class=\"col-lg-4\" id=\"searchBar\">\n  <div>\n    <input type=\"text\" name=\"projectSearch2\" id=\"projectSearch2\" placeholder=\"Search official by name...\">\n    <!--<input type=\"text\" name=\"neighSearch\" name=\"neighSearch\" placeholder=\"zipcode (optional)\">-->\n    <!-- <input type=\"text\" name=\"dateSearch\" id=\"dateSearch\" placeholder=\"MM/DD/YYYY\"> -->\n  </div>\n  <button class=\"home-button\" [routerLink]=\"['/search']\" >SEARCH</button>\n</div>\n</div>\n<br clear=\"all\" />\n\n<!-- \n<h1 class=\"trendingHeader\">Trending</h1>\n<div class=\"grid grid-pad\">\n  <div *ngFor=\"let official of officials.slice(0,5)\" [routerLink]=\"['/detail', official.id]\" class=\"col-1-4\">\n    <div class=\"inner\" id={{official.id}}>\n      <img src=\"{{official.thumbnail}}\">\n      <h2>{{official.title}}</h2><br>\n      <span>{{official.name}}</span>\n         <p style=\"font-family:whitneyHTF-semibold;\">{{official.date}}</p>\n    </div>\n  </div>\n</div>\n\n<br clear=\"all\" />\n\n<h1>Needing Volunteers</h1>\n<div class=\"grid grid-pad\">\n  <div *ngFor=\"let official of officials.slice(5,10)\" [routerLink]=\"['/detail', official.id]\" class=\"col-1-4\">\n    <div class=\"inner\" id={{official.id}}>\n      <img src=\"{{official.thumbnail}}\">\n      <h2>{{official.title}}</h2><br>\n      <span>{{official.name}}</span>\n         <p style=\"font-family:whitneyHTF-semibold;\">{{official.date}}</p>\n    </div>\n  </div>\n</div>\n\n<br clear=\"all\" />\n\n<h1>Needing Donations</h1>\n<div class=\"grid grid-pad\">\n  <div *ngFor=\"let official of officials.slice(7,9)\" [routerLink]=\"['/detail', official.id]\" class=\"col-1-4\">\n    <div class=\"inner\" id={{official.id}}>\n      <img src=\"{{official.thumbnail}}\">\n      <h2>{{official.title}}</h2><br>\n      <span>{{official.name}}</span>\n         <p style=\"font-family:whitneyHTF-semibold;\">{{official.date}}</p>\n    </div>\n  </div>\n</div> -->\n<!--<div *ngFor=\"let official of officials\" [routerLink]=\"['/detail', official.id]\" class=\"col-1-3\">-->\n\n<!--</div>-->"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__official_service__ = __webpack_require__("../../../../../src/app/official.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = (function () {
    function HomepageComponent(officialService) {
        this.officialService = officialService;
        this.officials = [];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.getOfficials();
    };
    HomepageComponent.prototype.getOfficials = function () {
        var _this = this;
        this.officialService.getOfficials().then(function (officials) {
            _this.officials = officials;
            // this.officials.forEach(function(official){
            //   this.officialService.calculateProgress(official.id);
            // });
        });
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__official_service__["a" /* OfficialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__official_service__["a" /* OfficialService */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/official-detail/official-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/official-detail/official-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"official\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <img style=\"max-width: 500px\" src=\"{{official.thumbnail}}\">\n      </div>\n      <div class=\"col-md-5\">\n        <h2>{{official.title}}</h2>\n        <p id=\"tagline\"> {{category.name}} | Created by {{official.userName}}</p><br>\n        <div class=\"dateDiv\">\n          <img style=\"max-width: 50px\" id=\"calendarIcon\" src=\"./../../assets/icons/calendar.png\">\n          <span>{{official.date}}</span> <br />\n          <span>{{official.timeOfEvent}}</span>\n        </div><br>\n        <div class=\"locationDiv\">\n          <img style=\"max-width: 50px\" id=\"locationIcon\" src=\"./../../assets/icons/pin2.png\">\n          <span>{{official.locationName}}</span><br />\n          <span>{{official.address}}</span>\n        </div><br>\n        <div class=\"timeDiv\">\n          <img style=\"max-width: 50px\" id=\"timeIcon\" src=\"./../../assets/icons/clock.png\">\n          <span>{{official.timeLeft}} days left to sign up</span>\n        </div>\n      </div>\n    </div>\n\n    <h3 class=\"detailsHeader\">Biography</h3>\n    <span class=\"prjDesc\">{{official.description}}</span>\n    <!--   <div>\n      <label>Comment: </label>\n      <input [(ngModel)]=\"official.title\" placeholder=\"Enter comment\" />\n    </div> -->\n    <h3 class=\"tagsHeader\">Tags</h3>\n    <div class=\"tagButtons\">\n    <button>{{official.tag.split(\",\")[0]}}</button>\n    <button>{{official.tag.split(\",\")[1]}}</button>\n    </div>\n    <!--<span id=\"tags\"></span>-->\n    <!--<script>-->\n      <!--var tagList = official.tag.split(\",\");-->\n      <!--for(i = 0; i < tagList.length; i++) {-->\n        <!--<button>tagList[i]</button>;-->\n      <!---->\n    <!--</script>-->\n  </div>\n  <!-- <button (click)=\"goBack()\">Back</button> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/official-detail/official-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficialDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__official_service__ = __webpack_require__("../../../../../src/app/official.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__official__ = __webpack_require__("../../../../../src/app/official.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_service__ = __webpack_require__("../../../../../src/app/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OfficialDetailComponent = (function () {
    function OfficialDetailComponent(officialService, categoryService, route, location) {
        this.officialService = officialService;
        this.categoryService = categoryService;
        this.route = route;
        this.location = location;
        this.category = {
            id: -1,
            name: "Select Category",
            type: true,
            description: ""
        };
    }
    OfficialDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        if (this.input_official == undefined) {
            this.route.params
                .switchMap(function (params) { return _this.officialService.getOfficial(+params['id']); })
                .subscribe(function (official) {
                self.official = official;
                self.category = _this.categoryService.getCategory(_this.official.category);
            });
        }
        else {
            this.official = this.input_official;
            this.input_official = null;
            // console.log(this.official);
            this.category = this.categoryService.getCategory(this.official.category);
        }
    };
    OfficialDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return OfficialDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__official__["a" /* Official */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__official__["a" /* Official */]) === "function" && _a || Object)
], OfficialDetailComponent.prototype, "input_official", void 0);
OfficialDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'official-detail',
        template: __webpack_require__("../../../../../src/app/official-detail/official-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/official-detail/official-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__official_service__["a" /* OfficialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__official_service__["a" /* OfficialService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__category_service__["a" /* CategoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _e || Object])
], OfficialDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=official-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/official.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_officials__ = __webpack_require__("../../../../../src/app/data/officials.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OfficialService = (function () {
    function OfficialService() {
        this.official_list = __WEBPACK_IMPORTED_MODULE_1__data_officials__["a" /* OFFICIALS */];
    }
    OfficialService.prototype.getOfficials = function () {
        return Promise.resolve(this.official_list);
    };
    OfficialService.prototype.getOfficial = function (id) {
        var _this = this;
        return this.getOfficials()
            .then(function (officials) { return _this.official_list.find(function (official) { return official.id === id; }); });
    };
    OfficialService.prototype.getOfficialByCategory = function (categryID) {
        var self = this;
        return this.getOfficials()
            .then(function (officials) { return self.official_list.find(function (official) { return official.category === categryID; }); });
    };
    OfficialService.prototype.getListLength = function () {
        return this.official_list.length;
    };
    OfficialService.prototype.saveOfficial = function (new_official) {
        this.official_list.push(new_official);
    };
    return OfficialService;
}());
OfficialService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], OfficialService);

//# sourceMappingURL=official.service.js.map

/***/ }),

/***/ "../../../../../src/app/official.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Official; });
/* unused harmony export Contribution */
/* unused harmony export Resource */
var Official = (function () {
    function Official() {
    }
    return Official;
}());

var Contribution = (function () {
    function Contribution() {
    }
    return Contribution;
}());

var Resource = (function () {
    function Resource() {
    }
    return Resource;
}());

//# sourceMappingURL=official.js.map

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.projects {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.projects li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.projects li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.projects li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.projects .text {\n  position: relative;\n  top: -3px;\n}\n.projects .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<br><br clear=\"all\" />\n<div class=\"grid grid-pad\">\n  <div class=\"topGrid\">\n<!--   <button>Educational</button>\n  <button>Environmental</button>\n  <button>Public safety</button>\n  <button>Sales</button>\n  <button>Social</button>\n  <button>Food drive</button>\n  <button>Community</button>\n  <button>Outdoor</button>\n  <br clear=\"all\" />\n\n  <button>Looking for donations</button>\n  <button>Nearing volunteer mark</button>\n  <button>Almost at full funding</button>\n  <button>Occurring soon</button>\n  <button>Ending soon</button>\n  <button>Nearby</button>\n  <br clear=\"all\" /><br clear=\"all\" /><br clear=\"all\" /> -->\n\n  <select placeholder=\"Sort by\">\n    <option value=\"sortBy\">Sort by</option>\n    <option value=\"newest\">Newest</option>\n    <option value=\"popular\">Most Popular</option>\n    <option value=\"recommended\">Recommended</option>\n  </select>\n  </div>\n  <br clear=\"all\" /><br clear=\"all\" /><br clear=\"all\" />\n\n  <div *ngFor=\"let official of officials\" [routerLink]=\"['/detail', official.id]\" class=\"col-md-3\">\n    <img src=\"{{official.thumbnail}}\" style=\"width:300px;\">\n    <h2>{{official.title}}</h2><br>\n    <span>{{official.name}}</span>\n    <br>\n    <p style=\"text-align:center; font-family:'whitneyHTF-semibold';\">{{official.date}}</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__official_service__ = __webpack_require__("../../../../../src/app/official.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultComponent = (function () {
    function SearchResultComponent(officialService, router) {
        this.officialService = officialService;
        this.router = router;
        this.title = 'Explore officials around you';
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        this.getOfficials();
    };
    SearchResultComponent.prototype.getOfficials = function () {
        var _this = this;
        // this.officials = this.officialService.getOfficials();
        this.officialService.getOfficials().then(function (officials) {
            _this.officials = officials;
        });
    };
    SearchResultComponent.prototype.onSelect = function (official) {
        this.selectedOfficial = official;
    };
    SearchResultComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail',
            this.selectedOfficial.id]);
    };
    return SearchResultComponent;
}());
SearchResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'search-result',
        template: __webpack_require__("../../../../../src/app/search-result/search-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-result/search-result.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__official_service__["a" /* OfficialService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__official_service__["a" /* OfficialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__official_service__["a" /* OfficialService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SearchResultComponent);

var _a, _b;
//# sourceMappingURL=search-result.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map