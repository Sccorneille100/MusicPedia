"use strict";
(() => {
var exports = {};
exports.id = 682;
exports.ids = [682,660];
exports.modules = {

/***/ 3584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5186);
/* harmony import */ var private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2212);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/playlists/[id]",
        pathname: "/playlists/[id]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_playlists_id_js__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ excludeKeys)
/* harmony export */ });
const excludeKeys = (orgObj, keysArr)=>{
    return Object.keys(orgObj).filter((key)=>!keysArr.includes(key)).reduce((obj, key)=>{
        obj[key] = orgObj[key];
        return obj;
    }, {});
};


/***/ }),

/***/ 2212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Playlist),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1300);
/* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8958);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4779);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_page_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9978);
/* harmony import */ var antd_lib_page_header__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_page_header__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1030);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5998);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1886);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4285);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9348);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8168);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















const { Title, Text } = (antd_lib_typography__WEBPACK_IMPORTED_MODULE_15___default());
function Playlist({ id, searchText, searchOption }) {
    const { loading, error, data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_lib_spotify__WEBPACK_IMPORTED_MODULE_3__/* .query */ .I.GET_PLAYLIST_WITH_TRACKS, {
        variables: {
            query: id
        }
    });
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    let playlist = {};
    let tracks = Array(10).fill({});
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        children: `Error! ${error}`
    });
    if (data) {
        playlist = (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_16__/* .excludeKeys */ .l)(data.queryIndividualPlaylist, [
            "tracks"
        ]);
        tracks = data.queryIndividualPlaylist.tracks;
    }
    const columns = [
        {
            title: "#",
            key: "index",
            width: 60,
            render: (value, item, index)=>(page - 1) * 10 + (index + 1)
        },
        {
            title: "Title",
            dataIndex: "name",
            key: "name",
            render: (name, obj)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: obj.image,
                            height: 50,
                            width: 50,
                            style: {
                                marginRight: "16px"
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "track-title-col",
                                    children: name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                    className: "text-gray",
                                    style: {
                                        maxWidth: "150px"
                                    },
                                    ellipsis: true,
                                    children: obj.artist_name
                                })
                            ]
                        })
                    ]
                })
        },
        {
            title: "Preview",
            dataIndex: "preview_url",
            key: "preview_url",
            width: 150,
            render: (previewUrl)=>{
                if (!!previewUrl) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: previewUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_13___default()), {
                            placement: "right",
                            title: "Preview in Spotify",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png",
                                height: 28
                            })
                        })
                    });
                } else {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_13___default()), {
                        placement: "right",
                        title: "Preview not available",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tag__WEBPACK_IMPORTED_MODULE_11___default()), {
                            color: "orange",
                            style: {
                                cursor: "not-allowed"
                            },
                            children: "N/A"
                        })
                    });
                }
            }
        },
        {
            title: "Album",
            dataIndex: "album_name",
            key: "album_name"
        },
        {
            title: "Uploaded at",
            dataIndex: "added_at",
            key: "added_at"
        }
    ];
    const titleContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tag__WEBPACK_IMPORTED_MODULE_11___default()), {
                color: "blue",
                children: "Playlist"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "playlist-title",
                children: playlist?.name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMusic,
                        style: {
                            height: "16px",
                            marginRight: "6px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-gray",
                        children: "Total tracks:\xa0"
                    }),
                    tracks?.length,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "spotify-link-full",
                        href: playlist?.spotify_url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_14___default()), {
                            style: {
                                marginLeft: "60px",
                                padding: "3px",
                                borderRadius: "10px",
                                height: "50px",
                                width: "170px"
                            },
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png",
                                height: 30
                            }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "spotify-link",
                                style: {
                                    fontSize: "14px",
                                    fontWeight: "bold"
                                },
                                children: "\xa0Open In Spotify"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "spotify-link-icon-only",
                        href: playlist?.spotify_url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_13___default()), {
                            placement: "right",
                            title: "Open In Spotify",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_14___default()), {
                                style: {
                                    marginLeft: "80px",
                                    padding: "3px",
                                    borderRadius: "50%",
                                    height: "50px",
                                    width: "50px"
                                },
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png",
                                    height: 30
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "playlist-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_9___default()), {
                active: true,
                loading: loading,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_page_header__WEBPACK_IMPORTED_MODULE_8___default()), {
                    title: titleContent,
                    className: "site-page-header playlist-header",
                    avatar: {
                        src: playlist?.image,
                        shape: "square",
                        className: "playlist-cover"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_table__WEBPACK_IMPORTED_MODULE_12___default()), {
                className: "tracks-table",
                loading: loading,
                columns: columns,
                dataSource: tracks,
                pageSizeOptions: false,
                rowKey: "id",
                pagination: {
                    pageSize: 10,
                    onChange (current) {
                        setPage(current);
                    }
                },
                scroll: {
                    y: 400
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tracks-list",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        level: 3,
                        style: {
                            marginTop: "20px"
                        },
                        children: "Tracks"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "60vh",
                            overflow: "auto",
                            padding: "0 0 0 16px",
                            backgroundColor: "azure",
                            borderRadius: "10px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6___default()), {
                            dataLength: tracks.length,
                            scrollableTarget: "scrollableDiv",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default()), {
                                dataSource: tracks,
                                renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        avatar: true,
                                        title: false,
                                        loading: loading,
                                        active: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default().Item), {
                                            actions: previewAndUploadedDetails(item),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default().Item).Meta, {
                                                avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_avatar__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    src: item.image,
                                                    shape: "square"
                                                }),
                                                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                                    className: "tracks-text",
                                                    ellipsis: true,
                                                    children: item.name
                                                }),
                                                description: item.artist_name?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                                    className: "tracks-text",
                                                    ellipsis: true,
                                                    children: `By ${item.artist_name}`
                                                }) : null
                                            })
                                        }, item.id)
                                    })
                            })
                        })
                    })
                ]
            })
        ]
    });
}
const previewAndUploadedDetails = (track)=>{
    let preview;
    const uploadedAt = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_13___default()), {
                className: "track-uploaded-at-long",
                placement: "right",
                title: "Uploaded at",
                children: track.added_at
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_13___default()), {
                className: "track-uploaded-at-short",
                placement: "right",
                title: "Uploaded at",
                children: new Date(track.added_at).toLocaleDateString()
            })
        ]
    });
    if (!!track.preview_url) {
        preview = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: track.preview_url,
            target: "_blank",
            rel: "noreferrer",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_13___default()), {
                placement: "right",
                title: "Preview in Spotify",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png",
                    height: 28
                })
            })
        });
    } else {
        preview = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_13___default()), {
            placement: "right",
            title: "Preview not available",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tag__WEBPACK_IMPORTED_MODULE_11___default()), {
                color: "orange",
                style: {
                    cursor: "not-allowed"
                },
                children: "N/A"
            })
        });
    }
    return [
        preview,
        uploadedAt
    ];
};
async function getServerSideProps({ params }) {
    return {
        props: {
            id: params.id
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5998:
/***/ ((module) => {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ 3800:
/***/ ((module) => {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 8518:
/***/ ((module) => {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 675:
/***/ ((module) => {

module.exports = require("antd/lib/input");

/***/ }),

/***/ 5417:
/***/ ((module) => {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ 4779:
/***/ ((module) => {

module.exports = require("antd/lib/list");

/***/ }),

/***/ 274:
/***/ ((module) => {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ 9978:
/***/ ((module) => {

module.exports = require("antd/lib/page-header");

/***/ }),

/***/ 7050:
/***/ ((module) => {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 3526:
/***/ ((module) => {

module.exports = require("antd/lib/select");

/***/ }),

/***/ 1030:
/***/ ((module) => {

module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ 4285:
/***/ ((module) => {

module.exports = require("antd/lib/table");

/***/ }),

/***/ 1886:
/***/ ((module) => {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ 9348:
/***/ ((module) => {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ 8168:
/***/ ((module) => {

module.exports = require("antd/lib/typography");

/***/ }),

/***/ 9031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4336:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,572,186,300], () => (__webpack_exec__(3584)));
module.exports = __webpack_exports__;

})();