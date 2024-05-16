"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n\nvar _s = $RefreshSig$();\n\n\n // Importa la biblioteca para manejar cookies\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [exito, setExito] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchData = async (userData)=>{\n        try {\n            const response = await fetch(\"/api/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(userData)\n            });\n            console.log(response);\n            if (response.ok) {\n                // Si las credenciales son correctas, muestra un mensaje y luego redirige a la página de menú\n                setIsLoading(true);\n                setExito(\"Credenciales correctas, redirigiendo a men\\xfa...\");\n                setTimeout(()=>{\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"isLoggedIn\", \"true\");\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"username\", userData.username);\n                    router.push(\"/menu\");\n                }, 1500);\n            } else {\n                const responseData = await response.json();\n                setError(responseData.error);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"isLoggedIn\");\n        // Simular una carga durante 2 segundos\n        const timer = setTimeout(()=>{\n            if (isLoggedIn === \"true\") {\n                // Si el usuario está logueado, redirecciona a la página de menú\n                router.push(\"/menu\");\n            } else {\n                // Si el usuario no está logueado, se ha completado la carga\n                setIsLoading(false);\n                router.push(\"/\");\n            }\n        }, 300);\n        return ()=>clearTimeout(timer); // Limpia el temporizador al desmontar el componente\n    }, []);\n    const handleLogin = ()=>{\n        const userData = {\n            username: username,\n            password: password\n        };\n        fetchData(userData);\n    };\n    const handleRegistro = ()=>{\n        // Si el usuario no está logueado, se ha completado la carga\n        setIsLoading(false);\n        router.push(\"/registro\");\n    };\n    if (isLoading) {\n        // Si isLoading es true, la página está cargando\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cargando\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/cargando.gif\",\n                alt: \"Cargando\"\n            }, void 0, false, {\n                fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n            lineNumber: 81,\n            columnNumber: 13\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Iniciar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Usuario\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Contrase\\xf1a\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogin,\n                        children: \"Iniciar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleRegistro,\n                        children: \"Registrarse\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"error-message\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 27\n                    }, undefined),\n                    exito && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"exito-message\",\n                        children: exito\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 27\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"fUdi8kB2vLx2JnJcbnB88dHBbe4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBSUMsV0FBVTtrQ0FBaUI1Qjs7Ozs7O29CQUN6Q0UsdUJBQVMsOERBQUN5Qjt3QkFBSUMsV0FBVTtrQ0FBaUIxQjs7Ozs7Ozs7Ozs7OzBCQUU5Qyw4REFBQ1gsdURBQUdBOzs7Ozs7Ozs7OztBQUdoQjtHQS9GTUM7O1FBQ2FILGtEQUFTQTs7O0tBRHRCRztBQWlHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJzsgLy8gSW1wb3J0YSBsYSBiaWJsaW90ZWNhIHBhcmEgbWFuZWphciBjb29raWVzXG5pbXBvcnQgUGllIGZyb20gJy4uL2NvbXBvbmVudHMvcGllJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2V4aXRvLHNldEV4aXRvXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1c2VyRGF0YSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBsYXMgY3JlZGVuY2lhbGVzIHNvbiBjb3JyZWN0YXMsIG11ZXN0cmEgdW4gbWVuc2FqZSB5IGx1ZWdvIHJlZGlyaWdlIGEgbGEgcMOhZ2luYSBkZSBtZW7DulxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRFeGl0bygnQ3JlZGVuY2lhbGVzIGNvcnJlY3RhcywgcmVkaXJpZ2llbmRvIGEgbWVuw7ouLi4nKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoJ2lzTG9nZ2VkSW4nLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgndXNlcm5hbWUnLCB1c2VyRGF0YS51c2VybmFtZSk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9tZW51Jyk7XG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihyZXNwb25zZURhdGEuZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNMb2dnZWRJbiA9IENvb2tpZXMuZ2V0KCdpc0xvZ2dlZEluJyk7XG5cbiAgICAgICAgLy8gU2ltdWxhciB1bmEgY2FyZ2EgZHVyYW50ZSAyIHNlZ3VuZG9zXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNMb2dnZWRJbiA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgLy8gU2kgZWwgdXN1YXJpbyBlc3TDoSBsb2d1ZWFkbywgcmVkaXJlY2Npb25hIGEgbGEgcMOhZ2luYSBkZSBtZW7DulxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWVudScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBlbCB1c3VhcmlvIG5vIGVzdMOhIGxvZ3VlYWRvLCBzZSBoYSBjb21wbGV0YWRvIGxhIGNhcmdhXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpOyAvLyBMaW1waWEgZWwgdGVtcG9yaXphZG9yIGFsIGRlc21vbnRhciBlbCBjb21wb25lbnRlXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmZXRjaERhdGEodXNlckRhdGEpO1xuIFxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVnaXN0cm8gPSAoKSA9PiB7XG4gXG4gICAgICAgIC8vIFNpIGVsIHVzdWFyaW8gbm8gZXN0w6EgbG9ndWVhZG8sIHNlIGhhIGNvbXBsZXRhZG8gbGEgY2FyZ2FcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy9yZWdpc3RybycpO1xuIFxuICAgIH07XG5cbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIC8vIFNpIGlzTG9hZGluZyBlcyB0cnVlLCBsYSBww6FnaW5hIGVzdMOhIGNhcmdhbmRvXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmdhbmRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jYXJnYW5kby5naWZcIiBhbHQ9XCJDYXJnYW5kb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGgxPkluaWNpYXIgU2VzacOzbjwvaDE+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc3VhcmlvXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJDb250cmFzZcOxYVwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+SW5pY2lhciBTZXNpw7NuPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZWdpc3Ryb30+UmVnaXN0cmFyc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+e2Vycm9yfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7ZXhpdG8gJiYgPGRpdiBjbGFzc05hbWU9XCJleGl0by1tZXNzYWdlXCI+e2V4aXRvfTwvZGl2Pn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBpZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkNvb2tpZXMiLCJQaWUiLCJIb21lIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZXhpdG8iLCJzZXRFeGl0byIsImZldGNoRGF0YSIsInVzZXJEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJvayIsInNldFRpbWVvdXQiLCJzZXQiLCJwdXNoIiwicmVzcG9uc2VEYXRhIiwianNvbiIsImlzTG9nZ2VkSW4iLCJnZXQiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsImhhbmRsZUxvZ2luIiwiaGFuZGxlUmVnaXN0cm8iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});