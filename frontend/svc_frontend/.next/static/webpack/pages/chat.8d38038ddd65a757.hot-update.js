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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_cabecera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/cabecera */ \"./src/components/cabecera.js\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Chat = ()=>{\n    _s();\n    const [mensaje, setMensaje] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mensajes, setMensajes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"username\");\n    const mensajesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    async function actualizarTablaMensajes() {\n        try {\n            const response = await fetch(\"/api/obtenermensajes\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const respuesta = await response.json();\n            if (response.ok) {\n                setMensajes(respuesta);\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const eventSource = new EventSource(\"/api/sse\");\n        eventSource.onmessage = (event)=>{\n            const data = JSON.parse(event.data);\n            console.log(\"Received message from server:\", data);\n        // Maneja los eventos recibidos según sea necesario\n        // Por ejemplo, puedes actualizar el estado de los mensajes\n        };\n        actualizarTablaMensajes();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            actualizarTablaMensajes();\n        }, 2000);\n        return ()=>clearInterval(interval);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom();\n    }, [\n        mensajes\n    ]);\n    const scrollToBottom = ()=>{\n        var _messagesEndRef_current;\n        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    async function insertarMensaje(mensaje) {\n        try {\n            const response = await fetch(\"/api/insertarmensaje\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(mensaje)\n            });\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    }\n    const handleEnviarMensaje = async ()=>{\n        if (mensaje.trim() !== \"\") {\n            const nuevoMensaje = {\n                contenido: mensaje,\n                nombre_usu: username,\n                hora: obtenerHoraActual()\n            };\n            await insertarMensaje(nuevoMensaje);\n            setMensaje(\"\");\n            actualizarTablaMensajes();\n        }\n    };\n    const handleKeyPress = (event)=>{\n        if (event.key === \"Enter\") {\n            handleEnviarMensaje();\n        }\n    };\n    const obtenerHoraActual = ()=>{\n        const fecha = new Date();\n        const hora = fecha.getHours().toString().padStart(2, \"0\");\n        const minutos = fecha.getMinutes().toString().padStart(2, \"0\");\n        const segundos = fecha.getSeconds().toString().padStart(2, \"0\");\n        return \"\".concat(hora, \":\").concat(minutos, \":\").concat(segundos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./images/chat.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"./styles/chat.css\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabecera__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mostrarBotonHome: true,\n                mostrarCerrarSesion: true\n            }, void 0, false, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center my-5 display-4 font-weight-bold text-uppercase text-secondary\",\n                children: \"Chat\"\n            }, void 0, false, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card chat-container\",\n                    ref: mensajesRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"messages\",\n                                children: [\n                                    mensajes.map((msg, index)=>msg.nombre_usu === username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"message sent\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: msg.mensaje\n                                                }, void 0, false, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 116,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                    href: \"/detallecontacto?n=\".concat(username),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                        className: \"text-muted\",\n                                                        children: \"T\\xfa\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                        lineNumber: 118,\n                                                        columnNumber: 45\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                    className: \"text-muted\",\n                                                    children: [\n                                                        \" - \",\n                                                        msg.hora\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 120,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 37\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"message received\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: msg.mensaje\n                                                }, void 0, false, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 124,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                    href: \"/detallecontacto?n=\".concat(msg.nombre_usu),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                        className: \"text-muted\",\n                                                        children: \"Contacto 1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                        lineNumber: 126,\n                                                        columnNumber: 45\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 125,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                    className: \"text-muted\",\n                                                    children: [\n                                                        \" - \",\n                                                        msg.hora\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                                    lineNumber: 128,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 37\n                                        }, undefined)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        ref: messagesEndRef\n                                    }, void 0, false, {\n                                        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                lineNumber: 112,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                            lineNumber: 111,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-footer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"form-control\",\n                                placeholder: \"Escribe un mensaje...\",\n                                value: mensaje,\n                                onChange: (e)=>setMensaje(e.target.value),\n                                onKeyPress: handleKeyPress\n                            }, void 0, false, {\n                                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                                lineNumber: 136,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                            lineNumber: 135,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                    lineNumber: 110,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n                lineNumber: 147,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/migue/Escritorio/trabajoREST/frontend/svc_frontend/src/pages/chat.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"8fbLhUtFK57684lbofWzFDs/S/g=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NDQUdsQiw4REFBQytDOzRCQUFJUSxXQUFVO3NDQUNYLDRFQUFDTztnQ0FDR0MsTUFBSztnQ0FDTFIsV0FBVTtnQ0FDVlMsYUFBWTtnQ0FDWkMsT0FBT3hFO2dDQUNQeUUsVUFBVSxDQUFDQyxJQUFNekUsV0FBV3lFLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FDMUNJLFlBQVlqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLNUIsOERBQUNqRCx1REFBR0E7Ozs7Ozs7Ozs7O0FBR2hCO0dBN0lNSztLQUFBQTtBQStJTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC5qcz9kMGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FiZWNlcmEgZnJvbSAnQC9jb21wb25lbnRzL2NhYmVjZXJhJztcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZW5zYWplLCBzZXRNZW5zYWplXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbWVuc2FqZXMsIHNldE1lbnNhamVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IENvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgIGNvbnN0IG1lbnNhamVzUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGFjdHVhbGl6YXJUYWJsYU1lbnNhamVzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9vYnRlbmVybWVuc2FqZXMnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgc2V0TWVuc2FqZXMocmVzcHVlc3RhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvYXBpL3NzZScpO1xuICBldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgbWVzc2FnZSBmcm9tIHNlcnZlcjonLCBkYXRhKTtcbiAgICAvLyBNYW5lamEgbG9zIGV2ZW50b3MgcmVjaWJpZG9zIHNlZ8O6biBzZWEgbmVjZXNhcmlvXG4gICAgLy8gUG9yIGVqZW1wbG8sIHB1ZWRlcyBhY3R1YWxpemFyIGVsIGVzdGFkbyBkZSBsb3MgbWVuc2FqZXNcbiAgfTtcbiAgICAgICAgYWN0dWFsaXphclRhYmxhTWVuc2FqZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGFjdHVhbGl6YXJUYWJsYU1lbnNhamVzKCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0JvdHRvbSgpO1xuICAgIH0sIFttZW5zYWplc10pO1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XG4gICAgICAgIG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbnNlcnRhck1lbnNhamUobWVuc2FqZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9pbnNlcnRhcm1lbnNhamUnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtZW5zYWplKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFbnZpYXJNZW5zYWplID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAobWVuc2FqZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBudWV2b01lbnNhamUgPSB7XG4gICAgICAgICAgICAgICAgY29udGVuaWRvOiBtZW5zYWplLFxuICAgICAgICAgICAgICAgIG5vbWJyZV91c3U6IHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIGhvcmE6IG9idGVuZXJIb3JhQWN0dWFsKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhd2FpdCBpbnNlcnRhck1lbnNhamUobnVldm9NZW5zYWplKTtcbiAgICAgICAgICAgIHNldE1lbnNhamUoJycpO1xuICAgICAgICAgICAgYWN0dWFsaXphclRhYmxhTWVuc2FqZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBoYW5kbGVFbnZpYXJNZW5zYWplKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb2J0ZW5lckhvcmFBY3R1YWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZlY2hhID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgaG9yYSA9IGZlY2hhLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dG9zID0gZmVjaGEuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3Qgc2VndW5kb3MgPSBmZWNoYS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4gYCR7aG9yYX06JHttaW51dG9zfToke3NlZ3VuZG9zfWA7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q2hhdDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuL2ltYWdlcy9jaGF0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL3N0eWxlcy9jaGF0LmNzc1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Q2FiZWNlcmEgbW9zdHJhckJvdG9uSG9tZT17dHJ1ZX0gbW9zdHJhckNlcnJhclNlc2lvbj17dHJ1ZX0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS01IGRpc3BsYXktNCBmb250LXdlaWdodC1ib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtc2Vjb25kYXJ5XCI+Q2hhdDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNoYXQtY29udGFpbmVyXCIgcmVmPXttZW5zYWplc1JlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhamVzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cubm9tYnJlX3VzdSA9PT0gdXNlcm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2Ugc2VudFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttc2cubWVuc2FqZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhbGxlY29udGFjdG8/bj0ke3VzZXJuYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlTDujwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+IC0ge21zZy5ob3JhfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZSByZWNlaXZlZFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttc2cubWVuc2FqZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhbGxlY29udGFjdG8/bj0ke21zZy5ub21icmVfdXN1fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkNvbnRhY3RvIDE8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiAtIHttc2cuaG9yYX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17bWVzc2FnZXNFbmRSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXNjcmliZSB1biBtZW5zYWplLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVuc2FqZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lbnNhamUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQaWUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhYmVjZXJhIiwiUGllIiwiSGVhZCIsIkNvb2tpZXMiLCJMaW5rIiwiaW8iLCJDaGF0IiwibWVuc2FqZSIsInNldE1lbnNhamUiLCJtZW5zYWplcyIsInNldE1lbnNhamVzIiwidXNlcm5hbWUiLCJnZXQiLCJtZW5zYWplc1JlZiIsIm1lc3NhZ2VzRW5kUmVmIiwiYWN0dWFsaXphclRhYmxhTWVuc2FqZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3B1ZXN0YSIsImpzb24iLCJvayIsImVycm9yIiwiY29uc29sZSIsImV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2UiLCJvbm1lc3NhZ2UiLCJldmVudCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2ciLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJpbnNlcnRhck1lbnNhamUiLCJib2R5Iiwic3RyaW5naWZ5IiwiaGFuZGxlRW52aWFyTWVuc2FqZSIsInRyaW0iLCJudWV2b01lbnNhamUiLCJjb250ZW5pZG8iLCJub21icmVfdXN1IiwiaG9yYSIsIm9idGVuZXJIb3JhQWN0dWFsIiwiaGFuZGxlS2V5UHJlc3MiLCJrZXkiLCJmZWNoYSIsIkRhdGUiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dG9zIiwiZ2V0TWludXRlcyIsInNlZ3VuZG9zIiwiZ2V0U2Vjb25kcyIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtb3N0cmFyQm90b25Ib21lIiwibW9zdHJhckNlcnJhclNlc2lvbiIsImgxIiwiY2xhc3NOYW1lIiwicmVmIiwibWFwIiwibXNnIiwiaW5kZXgiLCJwIiwic21hbGwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlQcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/chat.js\n"));

/***/ })

});