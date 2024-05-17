"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/pages/chat.js":
/*!***************************!*\
  !*** ./src/pages/chat.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Chat = ()=>{\n    _s();\n    const [mensaje, setMensaje] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mensajes, setMensajes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"username\");\n    const mensajesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    async function actualizarTablaMensajes() {\n        try {\n            const response = await fetch(\"/api/obtenermensajes\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const respuesta = await response.json();\n            if (response.ok) {\n                setMensajes(respuesta);\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const eventSource = new EventSource(\"/api/sse\");\n        eventSource.onmessage = (event)=>{\n            const data = JSON.parse(event.data);\n            console.log(\"Received message from server:\", data);\n        // Maneja los eventos recibidos según sea necesario\n        // Por ejemplo, puedes actualizar el estado de los mensajes\n        };\n        actualizarTablaMensajes();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            actualizarTablaMensajes();\n        }, 5000);\n        return ()=>clearInterval(interval);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom();\n    }, [\n        mensajes\n    ]);\n    const scrollToBottom = ()=>{\n        var _messagesEndRef_current;\n        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    async function insertarMensaje(mensaje) {\n        try {\n            const response = await fetch(\"/api/insertarmensaje\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(mensaje)\n            });\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    }\n    const handleEnviarMensaje = async ()=>{\n        if (mensaje.trim() !== \"\") {\n            const nuevoMensaje = {\n                contenido: mensaje,\n                nombre_usu: username,\n                hora: obtenerHoraActual()\n            };\n            sendWsMessage(nuevoMensaje);\n            //await insertarMensaje(nuevoMensaje);\n            setMensaje(\"\");\n        //actualizarTablaMensajes();\n        }\n    };\n    const handleKeyPress = (event)=>{\n        if (event.key === \"Enter\") {\n            handleEnviarMensaje();\n        }\n    };\n    const obtenerHoraActual = ()=>{\n        const fecha = new Date();\n        const hora = fecha.getHours().toString().padStart(2, \"0\");\n        const minutos = fecha.getMinutes().toString().padStart(2, \"0\");\n        const segundos = fecha.getSeconds().toString().padStart(2, \"0\");\n        return \"\".concat(hora, \":\").concat(minutos, \":\").concat(segundos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./images/chat.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"./styles/chat.css\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mostrarBotonHome: true,\n                mostrarCerrarSesion: true\n            }, void 0, false, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center my-5 display-4 font-weight-bold text-uppercase text-secondary\",\n                children: \"Chat\"\n            }, void 0, false, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card chat-container\",\n                    ref: mensajesRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"messages\",\n                                children: [\n                                    mensajes.map((msg, index)=>msg.nombre_usu === username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"message sent\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: msg.mensaje\n                                                }, void 0, false, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                    href: \"/detallecontacto?n=\".concat(username),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                        className: \"text-muted\",\n                                                        children: \"T\\xfa\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                        lineNumber: 119,\n                                                        columnNumber: 45\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                    className: \"text-muted\",\n                                                    children: [\n                                                        \" - \",\n                                                        msg.hora\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 121,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 37\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"message received\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: msg.mensaje\n                                                }, void 0, false, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 125,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                    href: \"/detallecontacto?n=\".concat(msg.nombre_usu),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                        className: \"text-muted\",\n                                                        children: \"Contacto 1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                        lineNumber: 127,\n                                                        columnNumber: 45\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 126,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                    className: \"text-muted\",\n                                                    children: [\n                                                        \" - \",\n                                                        msg.hora\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 129,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                            lineNumber: 124,\n                                            columnNumber: 37\n                                        }, undefined)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        ref: messagesEndRef\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                lineNumber: 113,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                            lineNumber: 112,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-footer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"form-control\",\n                                placeholder: \"Escribe un mensaje...\",\n                                value: mensaje,\n                                onChange: (e)=>setMensaje(e.target.value),\n                                onKeyPress: handleKeyPress\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                lineNumber: 137,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                            lineNumber: 136,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                    lineNumber: 111,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                lineNumber: 148,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n        lineNumber: 102,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"8fbLhUtFK57684lbofWzFDs/S/g=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O3NDQUdsQiw4REFBQ2dEOzRCQUFJUSxXQUFVO3NDQUNYLDRFQUFDTztnQ0FDR0MsTUFBSztnQ0FDTFIsV0FBVTtnQ0FDVlMsYUFBWTtnQ0FDWkMsT0FBT3pFO2dDQUNQMEUsVUFBVSxDQUFDQyxJQUFNMUUsV0FBVzBFLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FDMUNJLFlBQVlqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLNUIsOERBQUNsRCx1REFBR0E7Ozs7Ozs7Ozs7O0FBR2hCO0dBOUlNSztLQUFBQTtBQWdKTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC5qcz9kMGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FiZWNlcmEgZnJvbSAnQC9jb21wb25lbnRzL2NhYmVjZXJhJztcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZW5zYWplLCBzZXRNZW5zYWplXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbWVuc2FqZXMsIHNldE1lbnNhamVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IENvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgIGNvbnN0IG1lbnNhamVzUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGFjdHVhbGl6YXJUYWJsYU1lbnNhamVzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9vYnRlbmVybWVuc2FqZXMnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgc2V0TWVuc2FqZXMocmVzcHVlc3RhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvYXBpL3NzZScpO1xuICBldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgbWVzc2FnZSBmcm9tIHNlcnZlcjonLCBkYXRhKTtcbiAgICAvLyBNYW5lamEgbG9zIGV2ZW50b3MgcmVjaWJpZG9zIHNlZ8O6biBzZWEgbmVjZXNhcmlvXG4gICAgLy8gUG9yIGVqZW1wbG8sIHB1ZWRlcyBhY3R1YWxpemFyIGVsIGVzdGFkbyBkZSBsb3MgbWVuc2FqZXNcbiAgfTtcbiAgICAgICAgYWN0dWFsaXphclRhYmxhTWVuc2FqZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGFjdHVhbGl6YXJUYWJsYU1lbnNhamVzKCk7XG4gICAgICAgIH0sIDUwMDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9LCBbXSk7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9LCBbbWVuc2FqZXNdKTtcblxuICAgIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgICAgICBtZXNzYWdlc0VuZFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0YXJNZW5zYWplKG1lbnNhamUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvaW5zZXJ0YXJtZW5zYWplJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobWVuc2FqZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRW52aWFyTWVuc2FqZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKG1lbnNhamUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3QgbnVldm9NZW5zYWplID0ge1xuICAgICAgICAgICAgICAgIGNvbnRlbmlkbzogbWVuc2FqZSxcbiAgICAgICAgICAgICAgICBub21icmVfdXN1OiB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBob3JhOiBvYnRlbmVySG9yYUFjdHVhbCgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZFdzTWVzc2FnZShudWV2b01lbnNhamUpO1xuICAgICAgICAgICAgLy9hd2FpdCBpbnNlcnRhck1lbnNhamUobnVldm9NZW5zYWplKTtcbiAgICAgICAgICAgIHNldE1lbnNhamUoJycpO1xuICAgICAgICAgICAgLy9hY3R1YWxpemFyVGFibGFNZW5zYWplcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGhhbmRsZUVudmlhck1lbnNhamUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvYnRlbmVySG9yYUFjdHVhbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZmVjaGEgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBob3JhID0gZmVjaGEuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0b3MgPSBmZWNoYS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBzZWd1bmRvcyA9IGZlY2hhLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHJldHVybiBgJHtob3JhfToke21pbnV0b3N9OiR7c2VndW5kb3N9YDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DaGF0PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4vaW1hZ2VzL2NoYXQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4vc3R5bGVzL2NoYXQuY3NzXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxDYWJlY2VyYSBtb3N0cmFyQm90b25Ib21lPXt0cnVlfSBtb3N0cmFyQ2VycmFyU2VzaW9uPXt0cnVlfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTUgZGlzcGxheS00IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgdGV4dC1zZWNvbmRhcnlcIj5DaGF0PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2hhdC1jb250YWluZXJcIiByZWY9e21lbnNhamVzUmVmfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVuc2FqZXMubWFwKChtc2csIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZy5ub21icmVfdXN1ID09PSB1c2VybmFtZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZSBzZW50XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21zZy5tZW5zYWplfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFsbGVjb250YWN0bz9uPSR7dXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+VMO6PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4gLSB7bXNnLmhvcmF9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlIHJlY2VpdmVkXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21zZy5tZW5zYWplfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFsbGVjb250YWN0bz9uPSR7bXNnLm5vbWJyZV91c3V9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Q29udGFjdG8gMTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+IC0ge21zZy5ob3JhfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXttZXNzYWdlc0VuZFJlZn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFc2NyaWJlIHVuIG1lbnNhamUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW5zYWplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVuc2FqZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBpZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2FiZWNlcmEiLCJQaWUiLCJIZWFkIiwiQ29va2llcyIsIkxpbmsiLCJpbyIsIkNoYXQiLCJtZW5zYWplIiwic2V0TWVuc2FqZSIsIm1lbnNhamVzIiwic2V0TWVuc2FqZXMiLCJ1c2VybmFtZSIsImdldCIsIm1lbnNhamVzUmVmIiwibWVzc2FnZXNFbmRSZWYiLCJhY3R1YWxpemFyVGFibGFNZW5zYWplcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcHVlc3RhIiwianNvbiIsIm9rIiwiZXJyb3IiLCJjb25zb2xlIiwiZXZlbnRTb3VyY2UiLCJFdmVudFNvdXJjZSIsIm9ubWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImxvZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImluc2VydGFyTWVuc2FqZSIsImJvZHkiLCJzdHJpbmdpZnkiLCJoYW5kbGVFbnZpYXJNZW5zYWplIiwidHJpbSIsIm51ZXZvTWVuc2FqZSIsImNvbnRlbmlkbyIsIm5vbWJyZV91c3UiLCJob3JhIiwib2J0ZW5lckhvcmFBY3R1YWwiLCJzZW5kV3NNZXNzYWdlIiwiaGFuZGxlS2V5UHJlc3MiLCJrZXkiLCJmZWNoYSIsIkRhdGUiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dG9zIiwiZ2V0TWludXRlcyIsInNlZ3VuZG9zIiwiZ2V0U2Vjb25kcyIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtb3N0cmFyQm90b25Ib21lIiwibW9zdHJhckNlcnJhclNlc2lvbiIsImgxIiwiY2xhc3NOYW1lIiwicmVmIiwibWFwIiwibXNnIiwiaW5kZXgiLCJwIiwic21hbGwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlQcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/chat.js\n"));

/***/ })

});