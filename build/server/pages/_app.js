(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1878:
/***/ ((module) => {

// Exports
module.exports = {
	"Footer": "Footer_Footer__PuBZo"
};


/***/ }),

/***/ 7145:
/***/ ((module) => {

// Exports
module.exports = {
	"Menu": "Header_Menu__n1zll"
};


/***/ }),

/***/ 9249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "client": () => (/* binding */ client),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Title.tsx



// Custom title bar
function Title() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Quinsy Brenda"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: ""
            }, "title"),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                href: "https://cdn-icons-png.flaticon.com/256/6486/6486322.png"
            })
        ]
    });
}
/* harmony default export */ const components_Title = (Title);

// EXTERNAL MODULE: ./components/ComponentStyles/Header.module.css
var Header_module = __webpack_require__(7145);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.tsx




const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Header_module_default()).Menu,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        "data-id": "Home",
                        "data-route": "home",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/Work",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        "data-id": "Work",
                        "data-route": "Work",
                        children: "Work"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/About",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        "data-id": "About",
                        "data-route": "About",
                        children: "About"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./components/ComponentStyles/Footer.module.css
var Footer_module = __webpack_require__(1878);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.tsx



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).Footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "mailto:pacheconlucky@gmail.com",
                        children: "Email"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/lagom-QB",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Github"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.linkedin.com/in/tebid-quinsy-b-aaa048140",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Linkedin"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./pages/_app.tsx






const client = new client_.ApolloClient({
    uri: "https://api-eu-central-1.graphcms.com/v2/cl39zv7no07cu01z2gjet3ce5/master",
    cache: new client_.InMemoryCache(),
    // Provide some optional constructor fields
    name: "react-web-client",
    version: "1.3",
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "cache-and-network"
        }
    }
});
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(client_.ApolloProvider, {
        client: client,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Title, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(9249)));
module.exports = __webpack_exports__;

})();