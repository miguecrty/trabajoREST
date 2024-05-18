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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/cabecera */ \"./src/components/cabecera.js\");\n\nvar _s = $RefreshSig$();\n\n\n // Importa la biblioteca para manejar cookies\n\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [exito, setExito] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchData = async (userData)=>{\n        try {\n            const response = await fetch(\"/api/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(userData)\n            });\n            const respuestaJSON = await response.json();\n            if (response.ok) {\n                // Si las credenciales son correctas, muestra un mensaje y luego redirige a la página de menú\n                setIsLoading(true);\n                setExito(\"Credenciales correctas, redirigiendo a men\\xfa...\");\n                setTimeout(()=>{\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"isLoggedIn\", \"true\");\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"username\", userData.username);\n                    router.push(\"/menu\");\n                }, 1500);\n            } else {\n                const responseData = await response.json();\n                alert(\"Credenciales incorrectas\");\n                setError(responseData.error);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"isLoggedIn\");\n        // Simular una carga durante 2 segundos\n        const timer = setTimeout(()=>{\n            if (isLoggedIn === \"true\") {\n                // Si el usuario está logueado, redirecciona a la página de menú\n                router.push(\"/menu\");\n            } else {\n                // Si el usuario no está logueado, se ha completado la carga\n                setIsLoading(false);\n                router.push(\"/\");\n            }\n        }, 300);\n        return ()=>clearTimeout(timer); // Limpia el temporizador al desmontar el componente\n    }, []);\n    const handleLogin = ()=>{\n        const userData = {\n            username: username,\n            password: password\n        };\n        fetchData(userData);\n    };\n    const handleRegistro = ()=>{\n        // Si el usuario no está logueado, se ha completado la carga\n        setIsLoading(false);\n        router.push(\"/registro\");\n    };\n    if (isLoading) {\n        // Si isLoading es true, la página está cargando\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Cargando...\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/images/chat.png\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"./styles/detallecontacto.css\"\n                        }, void 0, false, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    mostrarBotonHome: false,\n                    mostrarCerrarSesion: true\n                }, void 0, false, {\n                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                    lineNumber: 90,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cargando\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/cargando.gif\",\n                        alt: \"Cargando\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./images/chat.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"login-form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Iniciar Sesi\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Usuario\",\n                                value: username,\n                                onChange: (e)=>setUsername(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                placeholder: \"Contrase\\xf1a\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogin,\n                                children: \"Iniciar Sesi\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleRegistro,\n                                children: \"Registrarse\"\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 111,\n                                columnNumber: 17\n                            }, undefined),\n                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"error-message\",\n                                children: error\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 112,\n                                columnNumber: 27\n                            }, undefined),\n                            exito && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"exito-message\",\n                                children: exito\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                                lineNumber: 113,\n                                columnNumber: 27\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"fUdi8kB2vLx2JnJcbnB88dHBbe4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLGFBQVk7Z0NBQVVDLE9BQU9qRDtnQ0FBVWtELFVBQVUsQ0FBQ0MsSUFBTWxELFlBQVlrRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FDckcsOERBQUNIO2dDQUFNQyxNQUFLO2dDQUFXQyxhQUFZO2dDQUFhQyxPQUFPL0M7Z0NBQVVnRCxVQUFVLENBQUNDLElBQU1oRCxZQUFZZ0QsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MENBQzVHLDhEQUFDSTtnQ0FBT0MsU0FBU3RCOzBDQUFhOzs7Ozs7MENBQzlCLDhEQUFDcUI7Z0NBQU9DLFNBQVNyQjswQ0FBZ0I7Ozs7Ozs0QkFDaEMzQix1QkFBUyw4REFBQ2tDO2dDQUFJQyxXQUFVOzBDQUFpQm5DOzs7Ozs7NEJBQ3pDRSx1QkFBUyw4REFBQ2dDO2dDQUFJQyxXQUFVOzBDQUFpQmpDOzs7Ozs7Ozs7Ozs7a0NBRTlDLDhEQUFDYix1REFBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhCO0dBL0dNRzs7UUFDYUwsa0RBQVNBOzs7S0FEdEJLO0FBaUhOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnOyAvLyBJbXBvcnRhIGxhIGJpYmxpb3RlY2EgcGFyYSBtYW5lamFyIGNvb2tpZXNcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBDYWJlY2VyYSBmcm9tICdAL2NvbXBvbmVudHMvY2FiZWNlcmEnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZXhpdG8sc2V0RXhpdG9dID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVzZXJEYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBsYXMgY3JlZGVuY2lhbGVzIHNvbiBjb3JyZWN0YXMsIG11ZXN0cmEgdW4gbWVuc2FqZSB5IGx1ZWdvIHJlZGlyaWdlIGEgbGEgcMOhZ2luYSBkZSBtZW7DulxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRFeGl0bygnQ3JlZGVuY2lhbGVzIGNvcnJlY3RhcywgcmVkaXJpZ2llbmRvIGEgbWVuw7ouLi4nKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoJ2lzTG9nZ2VkSW4nLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgndXNlcm5hbWUnLCB1c2VyRGF0YS51c2VybmFtZSk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9tZW51Jyk7XG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkNyZWRlbmNpYWxlcyBpbmNvcnJlY3Rhc1wiKTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihyZXNwb25zZURhdGEuZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNMb2dnZWRJbiA9IENvb2tpZXMuZ2V0KCdpc0xvZ2dlZEluJyk7XG5cbiAgICAgICAgLy8gU2ltdWxhciB1bmEgY2FyZ2EgZHVyYW50ZSAyIHNlZ3VuZG9zXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNMb2dnZWRJbiA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgLy8gU2kgZWwgdXN1YXJpbyBlc3TDoSBsb2d1ZWFkbywgcmVkaXJlY2Npb25hIGEgbGEgcMOhZ2luYSBkZSBtZW7DulxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWVudScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBlbCB1c3VhcmlvIG5vIGVzdMOhIGxvZ3VlYWRvLCBzZSBoYSBjb21wbGV0YWRvIGxhIGNhcmdhXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpOyAvLyBMaW1waWEgZWwgdGVtcG9yaXphZG9yIGFsIGRlc21vbnRhciBlbCBjb21wb25lbnRlXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmZXRjaERhdGEodXNlckRhdGEpO1xuIFxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVnaXN0cm8gPSAoKSA9PiB7XG4gXG4gICAgICAgIC8vIFNpIGVsIHVzdWFyaW8gbm8gZXN0w6EgbG9ndWVhZG8sIHNlIGhhIGNvbXBsZXRhZG8gbGEgY2FyZ2FcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy9yZWdpc3RybycpO1xuIFxuICAgIH07XG5cbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIC8vIFNpIGlzTG9hZGluZyBlcyB0cnVlLCBsYSBww6FnaW5hIGVzdMOhIGNhcmdhbmRvXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkNhcmdhbmRvLi4uPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWFnZXMvY2hhdC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi9zdHlsZXMvZGV0YWxsZWNvbnRhY3RvLmNzc1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Q2FiZWNlcmEgbW9zdHJhckJvdG9uSG9tZT17ZmFsc2V9IG1vc3RyYXJDZXJyYXJTZXNpb249e3RydWV9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZ2FuZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NhcmdhbmRvLmdpZlwiIGFsdD1cIkNhcmdhbmRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBpZSAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4vaW1hZ2VzL2NoYXQucG5nXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGgxPkluaWNpYXIgU2VzacOzbjwvaDE+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc3VhcmlvXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJDb250cmFzZcOxYVwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+SW5pY2lhciBTZXNpw7NuPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZWdpc3Ryb30+UmVnaXN0cmFyc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+e2Vycm9yfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7ZXhpdG8gJiYgPGRpdiBjbGFzc05hbWU9XCJleGl0by1tZXNzYWdlXCI+e2V4aXRvfTwvZGl2Pn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBpZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiUGllIiwiSGVhZCIsIkNhYmVjZXJhIiwiSG9tZSIsInJvdXRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImV4aXRvIiwic2V0RXhpdG8iLCJmZXRjaERhdGEiLCJ1c2VyRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwdWVzdGFKU09OIiwianNvbiIsIm9rIiwic2V0VGltZW91dCIsInNldCIsInB1c2giLCJyZXNwb25zZURhdGEiLCJhbGVydCIsImNvbnNvbGUiLCJpc0xvZ2dlZEluIiwiZ2V0IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVMb2dpbiIsImhhbmRsZVJlZ2lzdHJvIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1vc3RyYXJCb3RvbkhvbWUiLCJtb3N0cmFyQ2VycmFyU2VzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});