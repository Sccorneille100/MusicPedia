"use strict";
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 1300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ query),
/* harmony export */   S: () => (/* binding */ queryTypes)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql/',
//   cache: new InMemoryCache(),
// });
const queryTypes = Object.freeze({
    list: "SEARCH_PLAYLISTS",
    specific: "GET_PLAYLIST"
});
const query = Object.freeze({
    SEARCH_PLAYLISTS: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query SearchPlaylists($query: String!) {
      queryPlaylists(byPlaylistName: $query) {
        id
        name
        image
        description
        spotify_url
        owner_name
      }
    }
  `,
    GET_PLAYLIST: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPlaylist($query: String!) {
      queryIndividualPlaylist(byPlaylistId: $query) {
        id
        name
        image
        description
        spotify_url
        owner_name
      }
    }
  `,
    GET_PLAYLIST_WITH_TRACKS: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPlaylistWithTracks($query: String!) {
      queryIndividualPlaylist(byPlaylistId: $query) {
        id
        name
        image
        description
        spotify_url
        owner_name
        tracks {
          id
          name
          image
          preview_url
          album_name
          added_at
          artist_name
        }
      }
    }
  `
});


/***/ })

};
;