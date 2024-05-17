"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/menu",{

/***/ "./src/components/cabecera.js":
/*!************************************!*\
  !*** ./src/components/cabecera.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Cabecera = (param)=>{\n    let { mostrarBotonHome, mostrarCerrarSesion } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mostrarRecuadroTexto, setMostrarRecuadroTexto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nuevoTexto, setNuevoTexto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function actualizarEstado(estado) {\n        try {\n            const valores = {\n                username: username,\n                estado: estado\n            };\n            const response = await fetch(\"/api/actualizarestado\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(valores)\n            });\n            const respuestaJSON = await response;\n            if (response.ok) {\n                setEstadoActualizado(true);\n                alert(\"Estado modificado con \\xe9xito!\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsername = async ()=>{\n            const fetchedUsername = await js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\");\n            setUsername(fetchedUsername);\n        };\n        fetchUsername();\n    }, []); // Ejecutar una sola vez cuando el componente se monta\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"isLoggedIn\");\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const handleHome = ()=>{\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const toggleRecuadroTexto = ()=>{\n        setMostrarRecuadroTexto(!mostrarRecuadroTexto);\n    };\n    const handleChangeTexto = (event)=>{\n        setNuevoTexto(event.target.value);\n    };\n    const handleSubmitTexto = (event)=>{\n        event.preventDefault();\n        actualizarEstado(nuevoTexto);\n        // Luego puedes limpiar el texto o hacer cualquier otra cosa que necesites\n        setNuevoTexto(\"\");\n        // También puedes ocultar el recuadro de texto si es necesario\n        setMostrarRecuadroTexto(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            backgroundColor: \"rgba(0, 80, 255, 0.5)\",\n            color: \"white\",\n            paddingTop: \"0.5px\",\n            paddingBottom: \"0.5px\",\n            textAlign: \"center\",\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    listStyleType: \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        id: \"boton-home\",\n                        children: mostrarBotonHome && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleHome,\n                            className: \"btn home\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/home.png\",\n                                    alt: \"Inicio\",\n                                    style: {\n                                        width: \"40px\",\n                                        height: \"40px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 80\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                            lineNumber: 75,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: mostrarCerrarSesion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleRecuadroTexto,\n                                    style: {\n                                        marginRight: \"40px\"\n                                    },\n                                    children: \"Nuevo Estado\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 33\n                                }, undefined),\n                                mostrarRecuadroTexto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleSubmitTexto,\n                                    style: {\n                                        marginRight: \"40px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            value: nuevoTexto,\n                                            onChange: handleChangeTexto,\n                                            placeholder: \"Introduce tu texto\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            children: \"✅\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/perfil.png\",\n                                    alt: \"Inicio\",\n                                    style: {\n                                        width: \"30px\",\n                                        height: \"30px\",\n                                        marginRight: \"10px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        color: \"black\",\n                                        marginRight: \"50px\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: username\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 87\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogout,\n                                    className: \"btn cerrar\",\n                                    children: \"Cerrar Sesi\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cabecera, \"ci4dgq9WZcm5Obwc4Ug8TOOrV5w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Cabecera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cabecera);\nvar _c;\n$RefreshReg$(_c, \"Cabecera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQVk7Ozs7OztzREFDL0UsOERBQUNiOzRDQUFPVyxNQUFLO3NEQUFTOzs7Ozs7Ozs7Ozs7OENBR3RCLDhEQUFDUjtvQ0FBSUMsS0FBSTtvQ0FBc0JDLEtBQUk7b0NBQVNwQixPQUFPO3dDQUFFTSxPQUFPO3dDQUFRZSxRQUFRO3dDQUFRQyxhQUFZO29DQUFPOzs7Ozs7OENBQ3ZHLDhEQUFDTztvQ0FBSzdCLE9BQU87d0NBQUVFLE9BQU87d0NBQVNvQixhQUFhO29DQUFPOzhDQUFHLDRFQUFDUTtrREFBUW5FOzs7Ozs7Ozs7Ozs4Q0FDL0QsOERBQUNvRDtvQ0FBT0MsU0FBUzVCO29DQUFjNkIsV0FBVTs4Q0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdEY7R0E5Rk0xRDs7UUFDYUYsa0RBQVNBOzs7S0FEdEJFO0FBZ0dOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhYmVjZXJhLmpzP2Y5MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNvbnN0IENhYmVjZXJhID0gKHsgbW9zdHJhckJvdG9uSG9tZSwgbW9zdHJhckNlcnJhclNlc2lvbiB9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21vc3RyYXJSZWN1YWRyb1RleHRvLCBzZXRNb3N0cmFyUmVjdWFkcm9UZXh0b10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW251ZXZvVGV4dG8sIHNldE51ZXZvVGV4dG9dID0gdXNlU3RhdGUoJycpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gYWN0dWFsaXphckVzdGFkbyhlc3RhZG8pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbG9yZXMgPSB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIGVzdGFkbzogZXN0YWRvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FjdHVhbGl6YXJlc3RhZG8nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWxvcmVzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGFKU09OID0gYXdhaXQgcmVzcG9uc2U7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVzdGFkb0FjdHVhbGl6YWRvKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVzdGFkbyBtb2RpZmljYWRvIGNvbiDDqXhpdG8hXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmZXRjaGVkVXNlcm5hbWUgPSBhd2FpdCBDb29raWVzLmdldCgndXNlcm5hbWUnKTtcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKGZldGNoZWRVc2VybmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoVXNlcm5hbWUoKTtcbiAgICB9LCBbXSk7IC8vIEVqZWN1dGFyIHVuYSBzb2xhIHZleiBjdWFuZG8gZWwgY29tcG9uZW50ZSBzZSBtb250YVxuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICBDb29raWVzLnJlbW92ZSgnaXNMb2dnZWRJbicpO1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmlnZSBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGRlc3B1w6lzIGRlIGNlcnJhciBzZXNpw7NuXG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUhvbWUgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIFJlZGlyaWdlIGEgbGEgcMOhZ2luYSBkZSBpbmljaW8gZGVzcHXDqXMgZGUgY2VycmFyIHNlc2nDs25cbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlUmVjdWFkcm9UZXh0byA9ICgpID0+IHtcbiAgICAgICAgc2V0TW9zdHJhclJlY3VhZHJvVGV4dG8oIW1vc3RyYXJSZWN1YWRyb1RleHRvKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlVGV4dG8gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0TnVldm9UZXh0byhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXRUZXh0byA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhY3R1YWxpemFyRXN0YWRvKG51ZXZvVGV4dG8pO1xuICAgICAgICAvLyBMdWVnbyBwdWVkZXMgbGltcGlhciBlbCB0ZXh0byBvIGhhY2VyIGN1YWxxdWllciBvdHJhIGNvc2EgcXVlIG5lY2VzaXRlc1xuICAgICAgICBzZXROdWV2b1RleHRvKCcnKTtcbiAgICAgICAgLy8gVGFtYmnDqW4gcHVlZGVzIG9jdWx0YXIgZWwgcmVjdWFkcm8gZGUgdGV4dG8gc2kgZXMgbmVjZXNhcmlvXG4gICAgICAgIHNldE1vc3RyYXJSZWN1YWRyb1RleHRvKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDgwLCAyNTUsIDAuNSknLCBjb2xvcjogJ3doaXRlJywgcGFkZGluZ1RvcDogJzAuNXB4JywgcGFkZGluZ0JvdHRvbTonMC41cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbGlzdFN0eWxlVHlwZTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJib3Rvbi1ob21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9zdHJhckJvdG9uSG9tZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVIb21lfSBjbGFzc05hbWU9J2J0biBob21lJz4gPGltZyBzcmM9XCIuL2ltYWdlcy9ob21lLnBuZ1wiIGFsdD1cIkluaWNpb1wiIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcsIGhlaWdodDogJzQwcHgnIH19IC8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3N0cmFyQ2VycmFyU2VzaW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVJlY3VhZHJvVGV4dG99IHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzQwcHgnIH19Pk51ZXZvIEVzdGFkbzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9zdHJhclJlY3VhZHJvVGV4dG8gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRUZXh0b30gc3R5bGU9e3ttYXJnaW5SaWdodDonNDBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtudWV2b1RleHRvfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGV4dG99IHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIHR1IHRleHRvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+4pyFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9wZXJmaWwucG5nXCIgYWx0PVwiSW5pY2lvXCIgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcsIG1hcmdpblJpZ2h0OicxMHB4JyB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBtYXJnaW5SaWdodDogJzUwcHgnIH19PjxzdHJvbmc+e3VzZXJuYW1lfTwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IGNsYXNzTmFtZT0nYnRuIGNlcnJhcic+Q2VycmFyIFNlc2nDs248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhYmVjZXJhO1xuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiQ2FiZWNlcmEiLCJtb3N0cmFyQm90b25Ib21lIiwibW9zdHJhckNlcnJhclNlc2lvbiIsInJvdXRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJtb3N0cmFyUmVjdWFkcm9UZXh0byIsInNldE1vc3RyYXJSZWN1YWRyb1RleHRvIiwibnVldm9UZXh0byIsInNldE51ZXZvVGV4dG8iLCJhY3R1YWxpemFyRXN0YWRvIiwiZXN0YWRvIiwidmFsb3JlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwdWVzdGFKU09OIiwib2siLCJzZXRFc3RhZG9BY3R1YWxpemFkbyIsImFsZXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hVc2VybmFtZSIsImZldGNoZWRVc2VybmFtZSIsImdldCIsImhhbmRsZUxvZ291dCIsInJlbW92ZSIsInB1c2giLCJoYW5kbGVIb21lIiwidG9nZ2xlUmVjdWFkcm9UZXh0byIsImhhbmRsZUNoYW5nZVRleHRvIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdFRleHRvIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXIiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsIm5hdiIsInVsIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImxpc3RTdHlsZVR5cGUiLCJsaSIsImlkIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNwYW4iLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cabecera.js\n"));

/***/ })

});