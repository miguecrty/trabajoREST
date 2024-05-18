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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/cabecera */ \"./src/components/cabecera.js\");\n\nvar _s = $RefreshSig$();\n\n\n // Importa la biblioteca para manejar cookies\n\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [exito, setExito] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchData = async (userData)=>{\n        try {\n            const response = await fetch(\"/api/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(userData)\n            });\n            const respuestaJSON = await response.json();\n            if (response.ok) {\n                // Si las credenciales son correctas, muestra un mensaje y luego redirige a la página de menú\n                setIsLoading(true);\n                setExito(\"Credenciales correctas, redirigiendo a men\\xfa...\");\n                setTimeout(()=>{\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"isLoggedIn\", \"true\");\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"username\", userData.username);\n                    router.push(\"/menu\");\n                }, 1500);\n            } else {\n                const responseData = await response.json();\n                console.log(\"Credenciales incorrectas\");\n                setError(responseData.error);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"isLoggedIn\");\n        // Simular una carga durante 2 segundos\n        const timer = setTimeout(()=>{\n            if (isLoggedIn === \"true\") {\n                // Si el usuario está logueado, redirecciona a la página de menú\n                router.push(\"/menu\");\n            } else {\n                // Si el usuario no está logueado, se ha completado la carga\n                setIsLoading(false);\n                router.push(\"/\");\n            }\n        }, 300);\n        return ()=>clearTimeout(timer); // Limpia el temporizador al desmontar el componente\n    }, []);\n    const handleLogin = ()=>{\n        const userData = {\n            username: username,\n            password: password\n        };\n        fetchData(userData);\n    };\n    const handleRegistro = ()=>{\n        // Si el usuario no está logueado, se ha completado la carga\n        setIsLoading(false);\n        router.push(\"/registro\");\n    };\n    if (isLoading) {\n        // Si isLoading es true, la página está cargando\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Cargando...\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/images/chat.png\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"./styles/detallecontacto.css\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    mostrarBotonHome: false,\n                    mostrarCerrarSesion: true\n                }, void 0, false, {\n                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                    lineNumber: 90,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cargando\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/cargando.gif\",\n                        alt: \"Cargando\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./images/chat.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"login-form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Iniciar Sesi\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Usuario\",\n                                value: username,\n                                onChange: (e)=>setUsername(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                placeholder: \"Contrase\\xf1a\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogin,\n                                children: \"Iniciar Sesi\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleRegistro,\n                                children: \"Registrarse\"\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 111,\n                                columnNumber: 17\n                            }, undefined),\n                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"error-message\",\n                                children: error\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 112,\n                                columnNumber: 27\n                            }, undefined),\n                            exito && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"exito-message\",\n                                children: exito\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 113,\n                                columnNumber: 27\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"fUdi8kB2vLx2JnJcbnB88dHBbe4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNHO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0MsYUFBWTtnQ0FBVUMsT0FBT2pEO2dDQUFVa0QsVUFBVSxDQUFDQyxJQUFNbEQsWUFBWWtELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBDQUNyRyw4REFBQ0g7Z0NBQU1DLE1BQUs7Z0NBQVdDLGFBQVk7Z0NBQWFDLE9BQU8vQztnQ0FBVWdELFVBQVUsQ0FBQ0MsSUFBTWhELFlBQVlnRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FDNUcsOERBQUNJO2dDQUFPQyxTQUFTdEI7MENBQWE7Ozs7OzswQ0FDOUIsOERBQUNxQjtnQ0FBT0MsU0FBU3JCOzBDQUFnQjs7Ozs7OzRCQUNoQzNCLHVCQUFTLDhEQUFDa0M7Z0NBQUlDLFdBQVU7MENBQWlCbkM7Ozs7Ozs0QkFDekNFLHVCQUFTLDhEQUFDZ0M7Z0NBQUlDLFdBQVU7MENBQWlCakM7Ozs7Ozs7Ozs7OztrQ0FFOUMsOERBQUNiLHVEQUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7R0EvR01HOztRQUNhTCxrREFBU0E7OztLQUR0Qks7QUFpSE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7IC8vIEltcG9ydGEgbGEgYmlibGlvdGVjYSBwYXJhIG1hbmVqYXIgY29va2llc1xuaW1wb3J0IFBpZSBmcm9tICcuLi9jb21wb25lbnRzL3BpZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IENhYmVjZXJhIGZyb20gJ0AvY29tcG9uZW50cy9jYWJlY2VyYSc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtleGl0byxzZXRFeGl0b10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXNlckRhdGEpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9naW4nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIC8vIFNpIGxhcyBjcmVkZW5jaWFsZXMgc29uIGNvcnJlY3RhcywgbXVlc3RyYSB1biBtZW5zYWplIHkgbHVlZ28gcmVkaXJpZ2UgYSBsYSBww6FnaW5hIGRlIG1lbsO6XG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIHNldEV4aXRvKCdDcmVkZW5jaWFsZXMgY29ycmVjdGFzLCByZWRpcmlnaWVuZG8gYSBtZW7Dui4uLicpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgnaXNMb2dnZWRJbicsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KCd1c2VybmFtZScsIHVzZXJEYXRhLnVzZXJuYW1lKTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL21lbnUnKTtcbiAgICAgICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlZGVuY2lhbGVzIGluY29ycmVjdGFzXCIpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yKHJlc3BvbnNlRGF0YS5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0xvZ2dlZEluID0gQ29va2llcy5nZXQoJ2lzTG9nZ2VkSW4nKTtcblxuICAgICAgICAvLyBTaW11bGFyIHVuYSBjYXJnYSBkdXJhbnRlIDIgc2VndW5kb3NcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvZ2dlZEluID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBlbCB1c3VhcmlvIGVzdMOhIGxvZ3VlYWRvLCByZWRpcmVjY2lvbmEgYSBsYSBww6FnaW5hIGRlIG1lbsO6XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9tZW51Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNpIGVsIHVzdWFyaW8gbm8gZXN0w6EgbG9ndWVhZG8sIHNlIGhhIGNvbXBsZXRhZG8gbGEgY2FyZ2FcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7IC8vIExpbXBpYSBlbCB0ZW1wb3JpemFkb3IgYWwgZGVzbW9udGFyIGVsIGNvbXBvbmVudGVcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGZldGNoRGF0YSh1c2VyRGF0YSk7XG4gXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZWdpc3RybyA9ICgpID0+IHtcbiBcbiAgICAgICAgLy8gU2kgZWwgdXN1YXJpbyBubyBlc3TDoSBsb2d1ZWFkbywgc2UgaGEgY29tcGxldGFkbyBsYSBjYXJnYVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICByb3V0ZXIucHVzaCgnL3JlZ2lzdHJvJyk7XG4gXG4gICAgfTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgLy8gU2kgaXNMb2FkaW5nIGVzIHRydWUsIGxhIHDDoWdpbmEgZXN0w6EgY2FyZ2FuZG9cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q2FyZ2FuZG8uLi48L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ltYWdlcy9jaGF0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL3N0eWxlcy9kZXRhbGxlY29udGFjdG8uY3NzXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxDYWJlY2VyYSBtb3N0cmFyQm90b25Ib21lPXtmYWxzZX0gbW9zdHJhckNlcnJhclNlc2lvbj17dHJ1ZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJnYW5kb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2FyZ2FuZG8uZ2lmXCIgYWx0PVwiQ2FyZ2FuZG9cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8UGllIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiLi9pbWFnZXMvY2hhdC5wbmdcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8aDE+SW5pY2lhciBTZXNpw7NuPC9oMT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzdWFyaW9cIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5JbmljaWFyIFNlc2nDs248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlZ2lzdHJvfT5SZWdpc3RyYXJzZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj57ZXJyb3J9PC9kaXY+fVxuICAgICAgICAgICAgICAgIHtleGl0byAmJiA8ZGl2IGNsYXNzTmFtZT1cImV4aXRvLW1lc3NhZ2VcIj57ZXhpdG99PC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8UGllIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkNvb2tpZXMiLCJQaWUiLCJIZWFkIiwiQ2FiZWNlcmEiLCJIb21lIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZXhpdG8iLCJzZXRFeGl0byIsImZldGNoRGF0YSIsInVzZXJEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3B1ZXN0YUpTT04iLCJqc29uIiwib2siLCJzZXRUaW1lb3V0Iiwic2V0IiwicHVzaCIsInJlc3BvbnNlRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpc0xvZ2dlZEluIiwiZ2V0IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVMb2dpbiIsImhhbmRsZVJlZ2lzdHJvIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1vc3RyYXJCb3RvbkhvbWUiLCJtb3N0cmFyQ2VycmFyU2VzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});