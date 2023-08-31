exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 5186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/layout.js


const siteTitle = "Searching Spotify Playlists";
function Layout({ children, home }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Simple webpage to navigate different Spotify Playlist using Next.js + GraphQL + Apollo"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:image",
                        content: `https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "og:title",
                        content: siteTitle
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    })
                ]
            }),
            children
        ]
    });
}

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(5417);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);
// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(274);
// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7050);
// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(8518);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__(3526);
var select_default = /*#__PURE__*/__webpack_require__.n(select_);
// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(675);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);
;// CONCATENATED MODULE: ./components/searchbar.js




const { Option } = (select_default());
const { Search } = (input_default());
function Searchbar({ handleDropdownChange, handleSearchChange }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            display: "flex",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((select_default()), {
                defaultValue: "list",
                style: {
                    width: "80px",
                    color: "rgba(255, 255, 255, 0.65)"
                },
                bordered: false,
                onChange: handleDropdownChange,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Option, {
                        value: "list",
                        children: "Name"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Option, {
                        value: "specific",
                        children: "Id"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Search, {
                id: "search-field",
                placeholder: "Search",
                onSearch: (value1)=>{
                    handleSearchChange(value1);
                },
                onKeyPress: (e)=>{
                    if (e.keyCode === 13) {
                        handleSearchChange(value);
                    }
                },
                style: {
                    display: "flex",
                    flex: 1
                }
            })
        ]
    });
}
;

;// CONCATENATED MODULE: ./components/navbar.js









const { Header } = (layout_default());
const LANDING_PAGE = "/";
function Navbar({ setSearchText, setSearchOption }) {
    const router = (0,router_.useRouter)();
    const [burgerClicked, setBurgerClicked] = (0,external_react_.useState)(false);
    const handleDropdownChange = (value)=>{
        setSearchOption(value);
        setSearchText("");
    };
    const handleSearchChange = (value)=>{
        changePathConditionally();
        setSearchText(value);
    };
    const changePathConditionally = ()=>{
        if (router.pathname != LANDING_PAGE) {
            router.push(LANDING_PAGE);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Header, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "content-wrapper",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navmenu",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            id: "search-form",
                            style: {
                                height: "100%",
                                display: "inline-flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(Searchbar, {
                                handleDropdownChange: handleDropdownChange,
                                handleSearchChange: handleSearchChange
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            id: "menu",
                            onClick: ()=>{
                                setBurgerClicked(!burgerClicked);
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC9JREFUeNpi/P//PwM1AQsQU9VEJgYqg8FvICgMGUeel0eTzWiyGU02Qz/ZAAQYAOPcBjEdYroKAAAAAElFTkSuQmCC"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("nav", {
                            id: "navbar",
                            style: {
                                display: burgerClicked ? "block" : "none"
                            },
                            itemProp: "mainEntity",
                            itemScope: "itemscope",
                            itemType: "https://schema.org/SiteNavigationElement",
                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                className: "navbar",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        onClick: ()=>{
                                            setBurgerClicked(!burgerClicked);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            title: "Home",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                itemProp: "name",
                                                children: "Home"
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    clear: "both"
                }
            })
        ]
    });
}

// EXTERNAL MODULE: external "cross-fetch"
var external_cross_fetch_ = __webpack_require__(9031);
var external_cross_fetch_default = /*#__PURE__*/__webpack_require__.n(external_cross_fetch_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./pages/_app.js








const GRAPHQL_SERVER = "https://spotify-graphql-server.fly.dev/graphql" || 0;
const client = new client_.ApolloClient({
    link: new client_.HttpLink({
        uri: GRAPHQL_SERVER,
        fetch: (external_cross_fetch_default())
    }),
    cache: new client_.InMemoryCache()
});
function MyApp({ Component, pageProps }) {
    const [searchText, setSearchText] = (0,external_react_.useState)("top 100");
    const [searchOption, setSearchOption] = (0,external_react_.useState)("list");
    return /*#__PURE__*/ jsx_runtime.jsx(ErrorBoundary, {
        children: /*#__PURE__*/ jsx_runtime.jsx(client_.ApolloProvider, {
            client: client,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Navbar, {
                        setSearchText: setSearchText,
                        setSearchOption: setSearchOption
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        searchText: searchText,
                        searchOption: searchOption,
                        ...pageProps
                    })
                ]
            })
        })
    });
}
class ErrorBoundary extends (external_react_default()).Component {
    constructor(props){
        super(props);
        // Define a state variable to track whether is an error or not
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return {
            hasError: true
        };
    }
    componentDidCatch(error, errorInfo) {
        // You can use your own error logging service here
        console.log({
            error,
            errorInfo
        });
    }
    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: "Oops, there is an error!"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        type: "button",
                        onClick: ()=>this.setState({
                                hasError: false
                            }),
                        children: "Try again?"
                    })
                ]
            });
        }
        // Return children components in case of no error
        return this.props.children;
    }
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;