/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const root = document.getElementById(\"root\");\r\n\r\nfunction TodoForm(add) {\r\n    const container = document.createElement(\"form\")\r\n\r\n    container.innerHTML = `\r\n    <input type= \"text\" />\r\n    <button>Add</button>\r\n    `;\r\n    container.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault(); // նշանակում է որ որևէ բան մի արա\r\n        const value = container.querySelector(\"input\").value;\r\n        add(value)\r\n    })\r\n\r\n    return container;\r\n}\r\n\r\nfunction ListItem(todo, onChange) {\r\n    const container = document.createElement(\"div\");\r\n\r\n    container.innerHTML = `\r\n    <label>\r\n        <input type=\"checkbox\" ${todo.completed ? \"checked\" : \"\"}/>\r\n        ${todo.label}\r\n    </label>\r\n    `;\r\n\r\n    const input = container.querySelector(\"input\");\r\n    input.addEventListener(\"change\", (e) => {\r\n        onChange(e.target.checked);\r\n    });\r\n\r\n    return container;\r\n}\r\nfunction List(todos, onChange) {\r\n    const container = document.createElement(\"div\");\r\n\r\n    todos.map(todo => {\r\n        return ListItem(todo, (change) => {\r\n            todo.completed = change;\r\n            onChange();\r\n        });\r\n    }).forEach(element => {\r\n        container.appendChild(element)\r\n    });\r\n\r\n    return container;\r\n}\r\n\r\nfunction TodoFooter(todos, onChange) {\r\n    const container = document.createElement(\"div\");\r\n\r\n    const completed = todos.filter(todo => todo.completed === true).length;\r\n\r\n    container.innerHTML = `\r\n    <span> ${completed} / ${todos.length} Completed </span>\r\n    <button>Clear Completed</button>\r\n    `;\r\n\r\n    const btn = container.querySelector(\"button\");\r\n    btn.addEventListener(\"click\", () => {\r\n        onChange(todos.filter((todo) => todo.completed === false))\r\n    })\r\n\r\n    return container;\r\n}\r\n\r\nfunction App() {\r\n\r\n    let todos = [\r\n        { label: \"Learn HTML\", completed: false },\r\n        { label: \"Learn CSS\", completed: false },\r\n        { label: \"Learn JS\", completed: false }\r\n    ];\r\n    const container = document.createElement(\"div\");\r\n\r\n    function render() {\r\n        container.innerHTML = \"\";\r\n\r\n        container.appendChild(TodoForm(function (newText) {\r\n            todos.push({\r\n                label: newText,\r\n                completed: false\r\n            })\r\n            render();\r\n        }));\r\n        container.appendChild(List(todos, () => {\r\n            render();\r\n        }));\r\n        container.appendChild(TodoFooter(todos, (newTodo) => {\r\n            todos = newTodo;\r\n            render();\r\n        }))\r\n    }\r\n    render();\r\n\r\n    return container;\r\n}\r\n\r\nroot.appendChild(App())\n\n//# sourceURL=webpack://webpack-todos/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;