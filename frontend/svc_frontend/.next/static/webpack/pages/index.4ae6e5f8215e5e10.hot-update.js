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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pie */ \"./src/components/pie.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n // Importa la biblioteca para manejar cookies\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [exito, setExito] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchData = async (userData)=>{\n        try {\n            const response = await fetch(\"/api/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(userData)\n            });\n            const respuestaJSON = await response.json();\n            if (response.ok) {\n                // Si las credenciales son correctas, muestra un mensaje y luego redirige a la página de menú\n                setIsLoading(true);\n                setExito(\"Credenciales correctas, redirigiendo a men\\xfa...\");\n                setTimeout(()=>{\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"isLoggedIn\", \"true\");\n                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"username\", userData.username);\n                    router.push(\"/menu\");\n                }, 1500);\n            } else {\n                const responseData = await response.json();\n                setError(responseData.error);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"isLoggedIn\");\n        // Simular una carga durante 2 segundos\n        const timer = setTimeout(()=>{\n            if (isLoggedIn === \"true\") {\n                // Si el usuario está logueado, redirecciona a la página de menú\n                router.push(\"/menu\");\n            } else {\n                // Si el usuario no está logueado, se ha completado la carga\n                setIsLoading(false);\n                router.push(\"/\");\n            }\n        }, 300);\n        return ()=>clearTimeout(timer); // Limpia el temporizador al desmontar el componente\n    }, []);\n    const handleLogin = ()=>{\n        const userData = {\n            username: username,\n            password: password\n        };\n        fetchData(userData);\n    };\n    const handleRegistro = ()=>{\n        // Si el usuario no está logueado, se ha completado la carga\n        setIsLoading(false);\n        router.push(\"/registro\");\n    };\n    if (isLoading) {\n        // Si isLoading es true, la página está cargando\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cargando\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/cargando.gif\",\n                alt: \"Cargando\"\n            }, void 0, false, {\n                fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 83,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n            lineNumber: 82,\n            columnNumber: 13\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Iniciar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Usuario\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Contrase\\xf1a\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogin,\n                        children: \"Iniciar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleRegistro,\n                        children: \"Registrarse\"\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"error-message\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 27\n                    }, undefined),\n                    exito && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"exito-message\",\n                        children: exito\n                    }, void 0, false, {\n                        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 27\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/migue/Descargas/trabajoREST/frontend/svc_frontend/src/pages/index.js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"fUdi8kB2vLx2JnJcbnB88dHBbe4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDaEMxQix1QkFBUyw4REFBQzJCO3dCQUFJQyxXQUFVO2tDQUFpQjVCOzs7Ozs7b0JBQ3pDRSx1QkFBUyw4REFBQ3lCO3dCQUFJQyxXQUFVO2tDQUFpQjFCOzs7Ozs7Ozs7Ozs7MEJBRTlDLDhEQUFDWix1REFBR0E7Ozs7Ozs7Ozs7O0FBR2hCO0dBL0ZNRTs7UUFDYUosa0RBQVNBOzs7S0FEdEJJO0FBaUdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnOyAvLyBJbXBvcnRhIGxhIGJpYmxpb3RlY2EgcGFyYSBtYW5lamFyIGNvb2tpZXNcbmltcG9ydCBQaWUgZnJvbSAnLi4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2V4aXRvLHNldEV4aXRvXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1c2VyRGF0YSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGFKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgLy8gU2kgbGFzIGNyZWRlbmNpYWxlcyBzb24gY29ycmVjdGFzLCBtdWVzdHJhIHVuIG1lbnNhamUgeSBsdWVnbyByZWRpcmlnZSBhIGxhIHDDoWdpbmEgZGUgbWVuw7pcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0RXhpdG8oJ0NyZWRlbmNpYWxlcyBjb3JyZWN0YXMsIHJlZGlyaWdpZW5kbyBhIG1lbsO6Li4uJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KCdpc0xvZ2dlZEluJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoJ3VzZXJuYW1lJywgdXNlckRhdGEudXNlcm5hbWUpOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWVudScpO1xuICAgICAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IocmVzcG9uc2VEYXRhLmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBDb29raWVzLmdldCgnaXNMb2dnZWRJbicpO1xuXG4gICAgICAgIC8vIFNpbXVsYXIgdW5hIGNhcmdhIGR1cmFudGUgMiBzZWd1bmRvc1xuICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9nZ2VkSW4gPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIC8vIFNpIGVsIHVzdWFyaW8gZXN0w6EgbG9ndWVhZG8sIHJlZGlyZWNjaW9uYSBhIGxhIHDDoWdpbmEgZGUgbWVuw7pcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL21lbnUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2kgZWwgdXN1YXJpbyBubyBlc3TDoSBsb2d1ZWFkbywgc2UgaGEgY29tcGxldGFkbyBsYSBjYXJnYVxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTsgLy8gTGltcGlhIGVsIHRlbXBvcml6YWRvciBhbCBkZXNtb250YXIgZWwgY29tcG9uZW50ZVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZmV0Y2hEYXRhKHVzZXJEYXRhKTtcbiBcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdHJvID0gKCkgPT4ge1xuIFxuICAgICAgICAvLyBTaSBlbCB1c3VhcmlvIG5vIGVzdMOhIGxvZ3VlYWRvLCBzZSBoYSBjb21wbGV0YWRvIGxhIGNhcmdhXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvcmVnaXN0cm8nKTtcbiBcbiAgICB9O1xuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAvLyBTaSBpc0xvYWRpbmcgZXMgdHJ1ZSwgbGEgcMOhZ2luYSBlc3TDoSBjYXJnYW5kb1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJnYW5kb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2FyZ2FuZG8uZ2lmXCIgYWx0PVwiQ2FyZ2FuZG9cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxoMT5JbmljaWFyIFNlc2nDs248L2gxPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXN1YXJpb1wiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW59PkluaWNpYXIgU2VzacOzbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVnaXN0cm99PlJlZ2lzdHJhcnNlPC9idXR0b24+XG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICAgICAge2V4aXRvICYmIDxkaXYgY2xhc3NOYW1lPVwiZXhpdG8tbWVzc2FnZVwiPntleGl0b308L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQaWUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiUGllIiwiSGVhZCIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJleGl0byIsInNldEV4aXRvIiwiZmV0Y2hEYXRhIiwidXNlckRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcHVlc3RhSlNPTiIsImpzb24iLCJvayIsInNldFRpbWVvdXQiLCJzZXQiLCJwdXNoIiwicmVzcG9uc2VEYXRhIiwiY29uc29sZSIsImlzTG9nZ2VkSW4iLCJnZXQiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsImhhbmRsZUxvZ2luIiwiaGFuZGxlUmVnaXN0cm8iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});