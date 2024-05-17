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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Cabecera = (param)=>{\n    let { mostrarBotonHome, mostrarCerrarSesion } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mostrarRecuadroTexto, setMostrarRecuadroTexto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nuevoTexto, setNuevoTexto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function actualizarEstado(estado) {\n        try {\n            const valores = {\n                username: username,\n                estado: estado\n            };\n            const response = await fetch(\"/api/actualizarestado\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(valores)\n            });\n            const respuestaJSON = await response;\n            if (response.ok) {\n                alert(\"Estado modificado con \\xe9xito!\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        // Manejar el error según tus necesidades\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsername = async ()=>{\n            const fetchedUsername = await js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\");\n            setUsername(fetchedUsername);\n        };\n        fetchUsername();\n    }, []); // Ejecutar una sola vez cuando el componente se monta\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"isLoggedIn\");\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const handleHome = ()=>{\n        router.push(\"/\"); // Redirige a la página de inicio después de cerrar sesión\n    };\n    const toggleRecuadroTexto = ()=>{\n        setMostrarRecuadroTexto(!mostrarRecuadroTexto);\n    };\n    const handleChangeTexto = (event)=>{\n        setNuevoTexto(event.target.value);\n    };\n    const handleSubmitTexto = (event)=>{\n        event.preventDefault();\n        actualizarEstado(nuevoTexto);\n        // Luego puedes limpiar el texto o hacer cualquier otra cosa que necesites\n        setNuevoTexto(\"\");\n        // También puedes ocultar el recuadro de texto si es necesario\n        setMostrarRecuadroTexto(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            backgroundColor: \"rgba(0, 80, 255, 0.5)\",\n            color: \"white\",\n            paddingTop: \"0.5px\",\n            paddingBottom: \"0.5px\",\n            textAlign: \"center\",\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    listStyleType: \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        id: \"boton-home\",\n                        children: mostrarBotonHome && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleHome,\n                            className: \"btn home\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/home.png\",\n                                    alt: \"Inicio\",\n                                    style: {\n                                        width: \"40px\",\n                                        height: \"40px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 80\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                            lineNumber: 75,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: mostrarCerrarSesion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleRecuadroTexto,\n                                    style: {\n                                        marginRight: \"40px\"\n                                    },\n                                    children: \"Nuevo Estado\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 33\n                                }, undefined),\n                                mostrarRecuadroTexto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleSubmitTexto,\n                                    style: {\n                                        marginRight: \"40px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            value: nuevoTexto,\n                                            onChange: handleChangeTexto,\n                                            placeholder: \"Introduce tu texto\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            children: \"✅\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/perfil.png\",\n                                    alt: \"Inicio\",\n                                    style: {\n                                        width: \"30px\",\n                                        height: \"30px\",\n                                        marginRight: \"10px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        color: \"black\",\n                                        marginRight: \"50px\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: username\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 87\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogout,\n                                    className: \"btn cerrar\",\n                                    children: \"Cerrar Sesi\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/components/cabecera.js\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cabecera, \"ci4dgq9WZcm5Obwc4Ug8TOOrV5w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Cabecera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cabecera);\nvar _c;\n$RefreshReg$(_c, \"Cabecera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZOzs7Ozs7c0RBQy9FLDhEQUFDYjs0Q0FBT1csTUFBSztzREFBUzs7Ozs7Ozs7Ozs7OzhDQUd0Qiw4REFBQ1I7b0NBQUlDLEtBQUk7b0NBQXNCQyxLQUFJO29DQUFTcEIsT0FBTzt3Q0FBRU0sT0FBTzt3Q0FBUWUsUUFBUTt3Q0FBUUMsYUFBWTtvQ0FBTzs7Ozs7OzhDQUN2Ryw4REFBQ087b0NBQUs3QixPQUFPO3dDQUFFRSxPQUFPO3dDQUFTb0IsYUFBYTtvQ0FBTzs4Q0FBRyw0RUFBQ1E7a0RBQVFsRTs7Ozs7Ozs7Ozs7OENBQy9ELDhEQUFDbUQ7b0NBQU9DLFNBQVM1QjtvQ0FBYzZCLFdBQVU7OENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RGO0dBOUZNekQ7O1FBQ2FGLGtEQUFTQTs7O0tBRHRCRTtBQWdHTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYWJlY2VyYS5qcz9mOTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5jb25zdCBDYWJlY2VyYSA9ICh7IG1vc3RyYXJCb3RvbkhvbWUsIG1vc3RyYXJDZXJyYXJTZXNpb24gfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttb3N0cmFyUmVjdWFkcm9UZXh0bywgc2V0TW9zdHJhclJlY3VhZHJvVGV4dG9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtudWV2b1RleHRvLCBzZXROdWV2b1RleHRvXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFjdHVhbGl6YXJFc3RhZG8oZXN0YWRvKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2YWxvcmVzID0ge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBlc3RhZG86IGVzdGFkb1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hY3R1YWxpemFyZXN0YWRvJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsb3JlcylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhSlNPTiA9IGF3YWl0IHJlc3BvbnNlO1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVzdGFkbyBtb2RpZmljYWRvIGNvbiDDqXhpdG8hXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgIC8vIE1hbmVqYXIgZWwgZXJyb3Igc2Vnw7puIHR1cyBuZWNlc2lkYWRlc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hVc2VybmFtZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZldGNoZWRVc2VybmFtZSA9IGF3YWl0IENvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgICAgICAgICAgc2V0VXNlcm5hbWUoZmV0Y2hlZFVzZXJuYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2hVc2VybmFtZSgpO1xuICAgIH0sIFtdKTsgLy8gRWplY3V0YXIgdW5hIHNvbGEgdmV6IGN1YW5kbyBlbCBjb21wb25lbnRlIHNlIG1vbnRhXG5cbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCdpc0xvZ2dlZEluJyk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIFJlZGlyaWdlIGEgbGEgcMOhZ2luYSBkZSBpbmljaW8gZGVzcHXDqXMgZGUgY2VycmFyIHNlc2nDs25cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlSG9tZSA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJpZ2UgYSBsYSBww6FnaW5hIGRlIGluaWNpbyBkZXNwdcOpcyBkZSBjZXJyYXIgc2VzacOzblxuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVSZWN1YWRyb1RleHRvID0gKCkgPT4ge1xuICAgICAgICBzZXRNb3N0cmFyUmVjdWFkcm9UZXh0byghbW9zdHJhclJlY3VhZHJvVGV4dG8pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0byA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXROdWV2b1RleHRvKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdFRleHRvID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFjdHVhbGl6YXJFc3RhZG8obnVldm9UZXh0byk7XG4gICAgICAgIC8vIEx1ZWdvIHB1ZWRlcyBsaW1waWFyIGVsIHRleHRvIG8gaGFjZXIgY3VhbHF1aWVyIG90cmEgY29zYSBxdWUgbmVjZXNpdGVzXG4gICAgICAgIHNldE51ZXZvVGV4dG8oJycpO1xuICAgICAgICAvLyBUYW1iacOpbiBwdWVkZXMgb2N1bHRhciBlbCByZWN1YWRybyBkZSB0ZXh0byBzaSBlcyBuZWNlc2FyaW9cbiAgICAgICAgc2V0TW9zdHJhclJlY3VhZHJvVGV4dG8oZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgODAsIDI1NSwgMC41KScsIGNvbG9yOiAnd2hpdGUnLCBwYWRkaW5nVG9wOiAnMC41cHgnLCBwYWRkaW5nQm90dG9tOicwLjVweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBsaXN0U3R5bGVUeXBlOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImJvdG9uLWhvbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3N0cmFyQm90b25Ib21lICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUhvbWV9IGNsYXNzTmFtZT0nYnRuIGhvbWUnPiA8aW1nIHNyYz1cIi4vaW1hZ2VzL2hvbWUucG5nXCIgYWx0PVwiSW5pY2lvXCIgc3R5bGU9e3sgd2lkdGg6ICc0MHB4JywgaGVpZ2h0OiAnNDBweCcgfX0gLz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge21vc3RyYXJDZXJyYXJTZXNpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlUmVjdWFkcm9UZXh0b30gc3R5bGU9e3ttYXJnaW5SaWdodDonNDBweCcgfX0+TnVldm8gRXN0YWRvPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb3N0cmFyUmVjdWFkcm9UZXh0byAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFRleHRvfSBzdHlsZT17e21hcmdpblJpZ2h0Oic0MHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e251ZXZvVGV4dG99IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0b30gcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgdHUgdGV4dG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7inIU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3BlcmZpbC5wbmdcIiBhbHQ9XCJJbmljaW9cIiBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4JywgbWFyZ2luUmlnaHQ6JzEwcHgnIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIG1hcmdpblJpZ2h0OiAnNTBweCcgfX0+PHN0cm9uZz57dXNlcm5hbWV9PC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPSdidG4gY2VycmFyJz5DZXJyYXIgU2VzacOzbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FiZWNlcmE7XG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkNvb2tpZXMiLCJDYWJlY2VyYSIsIm1vc3RyYXJCb3RvbkhvbWUiLCJtb3N0cmFyQ2VycmFyU2VzaW9uIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIm1vc3RyYXJSZWN1YWRyb1RleHRvIiwic2V0TW9zdHJhclJlY3VhZHJvVGV4dG8iLCJudWV2b1RleHRvIiwic2V0TnVldm9UZXh0byIsImFjdHVhbGl6YXJFc3RhZG8iLCJlc3RhZG8iLCJ2YWxvcmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3B1ZXN0YUpTT04iLCJvayIsImFsZXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hVc2VybmFtZSIsImZldGNoZWRVc2VybmFtZSIsImdldCIsImhhbmRsZUxvZ291dCIsInJlbW92ZSIsInB1c2giLCJoYW5kbGVIb21lIiwidG9nZ2xlUmVjdWFkcm9UZXh0byIsImhhbmRsZUNoYW5nZVRleHRvIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdFRleHRvIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXIiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsIm5hdiIsInVsIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImxpc3RTdHlsZVR5cGUiLCJsaSIsImlkIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNwYW4iLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cabecera.js\n"));

/***/ })

});