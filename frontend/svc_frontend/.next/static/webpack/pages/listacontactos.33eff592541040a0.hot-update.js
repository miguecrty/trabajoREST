"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/listacontactos",{

/***/ "./src/components/cabecera.js":
/*!************************************!*\
  !*** ./src/components/cabecera.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Cabecera = (param)=>{\n    let { mostrarBotonHome, mostrarCerrarSesion } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [estadoActualizado, setEstadoActualizado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mostrarRecuadroTexto, setMostrarRecuadroTexto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nuevoTexto, setNuevoTexto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function actualizarEstado(estado) {\n        try {\n            const valores = {\n                username: username,\n                estado: estado\n            };\n            const response = await fetch(\"/api/actualizarestado\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(valores)\n            });\n            const respuestaJSON = await response;\n            if (response.ok) {\n                console.log(\"Estado modificado con \\xe9xito!\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsername = async ()=>{\n            const fetchedUsername = await js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\");\n            setUsername(fetchedUsername);\n        };\n        fetchUsername();\n    }, []); // Ejecutar una sola vez cuando el componente se monta\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"isLoggedIn\");\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const handleHome = ()=>{\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const toggleRecuadroTexto = ()=>{\n        setMostrarRecuadroTexto(!mostrarRecuadroTexto);\n    };\n    const handleChangeTexto = (event)=>{\n        setNuevoTexto(event.target.value);\n    };\n    const handleSubmitTexto = (event)=>{\n        event.preventDefault();\n        actualizarEstado(nuevoTexto);\n        // Luego puedes limpiar el texto o hacer cualquier otra cosa que necesites\n        setNuevoTexto(\"\");\n        // También puedes ocultar el recuadro de texto si es necesario\n        setMostrarRecuadroTexto(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            backgroundColor: \"rgba(0, 80, 255, 0.5)\",\n            color: \"white\",\n            paddingTop: \"0.5px\",\n            paddingBottom: \"0.5px\",\n            textAlign: \"center\",\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    listStyleType: \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        id: \"boton-home\",\n                        children: mostrarBotonHome && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleHome,\n                            className: \"btn home\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/home.png\",\n                                    alt: \"Inicio\",\n                                    style: {\n                                        width: \"40px\",\n                                        height: \"40px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 80\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                            lineNumber: 75,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: mostrarCerrarSesion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleRecuadroTexto,\n                                    style: {\n                                        marginRight: \"40px\"\n                                    },\n                                    children: \"Nuevo Estado\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 33\n                                }, undefined),\n                                mostrarRecuadroTexto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleSubmitTexto,\n                                    style: {\n                                        marginRight: \"40px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            value: nuevoTexto,\n                                            onChange: handleChangeTexto,\n                                            placeholder: \"Introduce tu texto\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            children: \"✅\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/perfil.png\",\n                                    alt: \"Inicio\",\n                                    style: {\n                                        width: \"30px\",\n                                        height: \"30px\",\n                                        marginRight: \"10px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        color: \"black\",\n                                        marginRight: \"50px\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: username\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 87\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogout,\n                                    className: \"btn cerrar\",\n                                    children: \"Cerrar Sesi\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cabecera, \"mHkrbGJ9mbuhmkajTMvAps2Rtrc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Cabecera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cabecera);\nvar _c;\n$RefreshReg$(_c, \"Cabecera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1DLE1BQUs7NENBQU85QixPQUFPNUI7NENBQVkyRCxVQUFVbEM7NENBQW1CbUMsYUFBWTs7Ozs7O3NEQUMvRSw4REFBQ2I7NENBQU9XLE1BQUs7c0RBQVM7Ozs7Ozs7Ozs7Ozs4Q0FHdEIsOERBQUNSO29DQUFJQyxLQUFJO29DQUFzQkMsS0FBSTtvQ0FBU3BCLE9BQU87d0NBQUVNLE9BQU87d0NBQVFlLFFBQVE7d0NBQVFDLGFBQVk7b0NBQU87Ozs7Ozs4Q0FDdkcsOERBQUNPO29DQUFLN0IsT0FBTzt3Q0FBRUUsT0FBTzt3Q0FBU29CLGFBQWE7b0NBQU87OENBQUcsNEVBQUNRO2tEQUFRcEU7Ozs7Ozs7Ozs7OzhDQUMvRCw4REFBQ3FEO29DQUFPQyxTQUFTNUI7b0NBQWM2QixXQUFVOzhDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN0RjtHQTlGTTNEOztRQUNhRixrREFBU0E7OztLQUR0QkU7QUFnR04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FiZWNlcmEuanM/ZjkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuY29uc3QgQ2FiZWNlcmEgPSAoeyBtb3N0cmFyQm90b25Ib21lLCBtb3N0cmFyQ2VycmFyU2VzaW9uIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZXN0YWRvQWN0dWFsaXphZG8sIHNldEVzdGFkb0FjdHVhbGl6YWRvXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbW9zdHJhclJlY3VhZHJvVGV4dG8sIHNldE1vc3RyYXJSZWN1YWRyb1RleHRvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbnVldm9UZXh0bywgc2V0TnVldm9UZXh0b10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhY3R1YWxpemFyRXN0YWRvKGVzdGFkbykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdmFsb3JlcyA9IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgZXN0YWRvOiBlc3RhZG9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYWN0dWFsaXphcmVzdGFkbycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbG9yZXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YUpTT04gPSBhd2FpdCByZXNwb25zZTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFc3RhZG8gbW9kaWZpY2FkbyBjb24gw6l4aXRvIVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFVzZXJuYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmV0Y2hlZFVzZXJuYW1lID0gYXdhaXQgQ29va2llcy5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgICAgICAgICBzZXRVc2VybmFtZShmZXRjaGVkVXNlcm5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaFVzZXJuYW1lKCk7XG4gICAgfSwgW10pOyAvLyBFamVjdXRhciB1bmEgc29sYSB2ZXogY3VhbmRvIGVsIGNvbXBvbmVudGUgc2UgbW9udGFcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ2lzTG9nZ2VkSW4nKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJpZ2UgYSBsYSBww6FnaW5hIGRlIGluaWNpbyBkZXNwdcOpcyBkZSBjZXJyYXIgc2VzacOzblxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVIb21lID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmlnZSBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGRlc3B1w6lzIGRlIGNlcnJhciBzZXNpw7NuXG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZVJlY3VhZHJvVGV4dG8gPSAoKSA9PiB7XG4gICAgICAgIHNldE1vc3RyYXJSZWN1YWRyb1RleHRvKCFtb3N0cmFyUmVjdWFkcm9UZXh0byk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVRleHRvID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldE51ZXZvVGV4dG8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0VGV4dG8gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWN0dWFsaXphckVzdGFkbyhudWV2b1RleHRvKTtcbiAgICAgICAgLy8gTHVlZ28gcHVlZGVzIGxpbXBpYXIgZWwgdGV4dG8gbyBoYWNlciBjdWFscXVpZXIgb3RyYSBjb3NhIHF1ZSBuZWNlc2l0ZXNcbiAgICAgICAgc2V0TnVldm9UZXh0bygnJyk7XG4gICAgICAgIC8vIFRhbWJpw6luIHB1ZWRlcyBvY3VsdGFyIGVsIHJlY3VhZHJvIGRlIHRleHRvIHNpIGVzIG5lY2VzYXJpb1xuICAgICAgICBzZXRNb3N0cmFyUmVjdWFkcm9UZXh0byhmYWxzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCA4MCwgMjU1LCAwLjUpJywgY29sb3I6ICd3aGl0ZScsIHBhZGRpbmdUb3A6ICcwLjVweCcsIHBhZGRpbmdCb3R0b206JzAuNXB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGxpc3RTdHlsZVR5cGU6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiYm90b24taG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge21vc3RyYXJCb3RvbkhvbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlSG9tZX0gY2xhc3NOYW1lPSdidG4gaG9tZSc+IDxpbWcgc3JjPVwiLi9pbWFnZXMvaG9tZS5wbmdcIiBhbHQ9XCJJbmljaW9cIiBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICc0MHB4JyB9fSAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9zdHJhckNlcnJhclNlc2lvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVSZWN1YWRyb1RleHRvfSBzdHlsZT17e21hcmdpblJpZ2h0Oic0MHB4JyB9fT5OdWV2byBFc3RhZG88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vc3RyYXJSZWN1YWRyb1RleHRvICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0VGV4dG99IHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzQwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bnVldm9UZXh0b30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHRvfSBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSB0dSB0ZXh0b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuKchTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvcGVyZmlsLnBuZ1wiIGFsdD1cIkluaWNpb1wiIHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIGhlaWdodDogJzMwcHgnLCBtYXJnaW5SaWdodDonMTBweCcgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgbWFyZ2luUmlnaHQ6ICc1MHB4JyB9fT48c3Ryb25nPnt1c2VybmFtZX08L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fSBjbGFzc05hbWU9J2J0biBjZXJyYXInPkNlcnJhciBTZXNpw7NuPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYWJlY2VyYTtcblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ29va2llcyIsIkNhYmVjZXJhIiwibW9zdHJhckJvdG9uSG9tZSIsIm1vc3RyYXJDZXJyYXJTZXNpb24iLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZXN0YWRvQWN0dWFsaXphZG8iLCJzZXRFc3RhZG9BY3R1YWxpemFkbyIsIm1vc3RyYXJSZWN1YWRyb1RleHRvIiwic2V0TW9zdHJhclJlY3VhZHJvVGV4dG8iLCJudWV2b1RleHRvIiwic2V0TnVldm9UZXh0byIsImFjdHVhbGl6YXJFc3RhZG8iLCJlc3RhZG8iLCJ2YWxvcmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3B1ZXN0YUpTT04iLCJvayIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImZldGNoVXNlcm5hbWUiLCJmZXRjaGVkVXNlcm5hbWUiLCJnZXQiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmUiLCJwdXNoIiwiaGFuZGxlSG9tZSIsInRvZ2dsZVJlY3VhZHJvVGV4dG8iLCJoYW5kbGVDaGFuZ2VUZXh0byIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXRUZXh0byIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwidGV4dEFsaWduIiwid2lkdGgiLCJuYXYiLCJ1bCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJsaXN0U3R5bGVUeXBlIiwibGkiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzcGFuIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/cabecera.js\n"));

/***/ })

});