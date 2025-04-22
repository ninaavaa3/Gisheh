module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[project]/src/api/config.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "baseUrl": (()=>baseUrl)
});
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
}}),
"[externals]/js-cookie [external] (js-cookie, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("js-cookie");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/api/token.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "getToken": (()=>getToken),
    "setToken": (()=>setToken)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/js-cookie [external] (js-cookie, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
function getToken() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].get("token");
}
function setToken(v) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].set("token", v);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/api/auth.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "getProfile": (()=>getProfile),
    "login": (()=>login)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/token.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
async function login() {
    const resp = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["baseUrl"] + "/api/token");
    const json = await resp.json();
    return json;
}
async function getProfile() {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])();
    const resp = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["baseUrl"]}/api/profile?token=${token}`);
    const json = await resp.json();
    return json;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react [external] (react, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}}),
"[project]/src/store/auth.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/auth.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/token.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
const { createContext, useState, useContext, useEffect } = __turbopack_context__.r("[externals]/react [external] (react, cjs)");
const authContext = createContext([
    null,
    ()=>{}
]);
function AuthProvider({ children }) {
    const state = useState(null);
    useEffect(()=>{
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])();
        if (token) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getProfile"])().then((p)=>{
                state[1](p);
            });
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(authContext.Provider, {
        value: state,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/store/auth.jsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
function useAuth() {
    return useContext(authContext);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/_app.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>App)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/auth.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
            ...pageProps
        }, void 0, false, {
            fileName: "[project]/src/pages/_app.js",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/_app.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__2ddc7097._.js.map