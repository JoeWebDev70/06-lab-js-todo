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

/***/ "./src/lib_js/footer_structure.js":
/*!****************************************!*\
  !*** ./src/lib_js/footer_structure.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   copyright: () => (/* binding */ copyright),\n/* harmony export */   divLogo: () => (/* binding */ divLogo),\n/* harmony export */   globalFooter: () => (/* binding */ globalFooter),\n/* harmony export */   legalMentions: () => (/* binding */ legalMentions)\n/* harmony export */ });\n//FOOTER STRUCTURE\nvar globalFooter = document.createElement(\"footer\");\n//create link for legal mentions\nvar legalMentions = document.createElement(\"p\");\nvar linkLegalMentions = document.createElement(\"a\");\nlinkLegalMentions.href = \"./legal_mentions.html\";\nlinkLegalMentions.classList.add(\"link_page\");\nvar linkLegalMentionsContent = document.createTextNode(\"Legal mentions\");\n//create copyright \nvar copyright = document.createElement(\"p\");\nvar copyrightContent = document.createTextNode(\"Joelle Moureu \\xA9 2023\");\n// create a div for logos\nvar divLogo = document.createElement(\"div\");\n//create link on github\nvar logoGithub = document.createElement(\"p\");\nvar linkLogoGithub = document.createElement(\"a\");\nlinkLogoGithub.href = \"https://github.com/JoeWebDev70/JoeWebDev70\";\nvar imgLogoGithub = document.createElement(\"img\");\nimgLogoGithub.src = \"./ressources/images/github_25x25.webp\";\nimgLogoGithub.alt = \"Github logo\";\nimgLogoGithub.style.width = \"25px\";\nimgLogoGithub.style.height = \"25px\";\n//create link on github\nvar logoLinkedin = document.createElement(\"p\");\nvar linkLogoLinkedin = document.createElement(\"a\");\nlinkLogoLinkedin.href = \"https://www.linkedin.com/in/joellemoureu\";\nvar imgLogoLinkedin = document.createElement(\"img\");\nimgLogoLinkedin.src = \"./ressources/images/linkedin_25x21.webp\";\nimgLogoLinkedin.alt = \"Linkedin logo\";\nimgLogoLinkedin.style.width = \"25px\";\nimgLogoLinkedin.style.height = \"21px\";\n\n//insert elements in footer\n// mainFooter.appendChild(legalMentions);\nlinkLegalMentions.appendChild(linkLegalMentionsContent);\nlegalMentions.appendChild(linkLegalMentions);\n\n// mainFooter.appendChild(copyright);\ncopyright.appendChild(copyrightContent);\n\n// mainFooter.appendChild(divLogo);\ndivLogo.append(logoGithub);\nlogoGithub.appendChild(linkLogoGithub);\nlinkLogoGithub.appendChild(imgLogoGithub);\ndivLogo.appendChild(logoLinkedin);\nlogoLinkedin.appendChild(linkLogoLinkedin);\nlinkLogoLinkedin.appendChild(imgLogoLinkedin);\n\n//# sourceURL=webpack://my-webpack-project/./src/lib_js/footer_structure.js?");

/***/ }),

/***/ "./src/lib_js/header_structure.js":
/*!****************************************!*\
  !*** ./src/lib_js/header_structure.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   globalHeader: () => (/* binding */ globalHeader),\n/* harmony export */   imgPrincipale: () => (/* binding */ imgPrincipale),\n/* harmony export */   pBtnMode: () => (/* binding */ pBtnMode),\n/* harmony export */   pImgPrincipale: () => (/* binding */ pImgPrincipale)\n/* harmony export */ });\n//HEADER STRUCTURE\nvar globalHeader = document.createElement(\"header\");\n//create button dark/lightmode\nvar pBtnMode = document.createElement(\"p\");\nvar btnMode = document.createElement(\"button\");\nbtnMode.id = \"btn_mode\";\n//insert button dark/lightmode\npBtnMode.appendChild(btnMode);\n//create image\nvar pImgPrincipale = document.createElement(\"p\");\npImgPrincipale.classList.add(\"p_img_principale\");\nvar imgPrincipale = document.createElement(\"img\");\nimgPrincipale.id = \"m_img_princiaple\"; //for hover to do list logo in mentions page\nimgPrincipale.srcset = \"../ressources/images/logo_250x104.webp 250w, ../ressources/images/logo_495x205.webp 495w\";\nimgPrincipale.sizes = \"(max-width: 750px) 250px, 495px\";\nimgPrincipale.src = \"../ressources/images/logo_495x205.webp\";\nimgPrincipale.alt = \"logo To Do List, three post-it first orange with write on to, second yellow with write on do and third green with write on list\";\n//insert image\npImgPrincipale.appendChild(imgPrincipale);\n\n//# sourceURL=webpack://my-webpack-project/./src/lib_js/header_structure.js?");

/***/ }),

/***/ "./src/lib_js/list_columns.js":
/*!************************************!*\
  !*** ./src/lib_js/list_columns.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   columns: () => (/* binding */ columns)\n/* harmony export */ });\n//LIST COLUMNS\nvar btnOptionsContent = \"...\";\nvar btnAddContent = \"+\";\nvar btnAddTxtContent = \"Add a task\";\nvar titlesContent = [\"TO DO\", \"ON DOING\", \"DONE\"];\nvar colClasses = [\"col1\", \"col2\", \"col3\"];\nvar columns = new Array();\nfor (var i = 0; i < 3; i++) {\n  //create div col\n  columns[i] = document.createElement(\"div\");\n  columns[i].classList.add(\"list_columns\");\n\n  //create title\n  var divTitle = document.createElement(\"div\");\n  divTitle.classList.add(\"box_titles\");\n  divTitle.classList.add(\"border\");\n  divTitle.classList.add(colClasses[i]);\n  var colTitle = document.createElement(\"h2\");\n  var colTitleContent = document.createTextNode(titlesContent[i]);\n  //insert title in div col\n  columns[i].appendChild(divTitle);\n  divTitle.appendChild(colTitle);\n  colTitle.appendChild(colTitleContent);\n\n  //create zone tasks (drag and drop / button options on list / button Add task)\n  var divTasks = document.createElement(\"div\");\n  divTasks.classList.add(\"zone_tasks\");\n  divTasks.classList.add(\"border\");\n  divTasks.classList.add(colClasses[i]);\n  //insert zone tasks in div col\n  columns[i].appendChild(divTasks);\n\n  //create btn list option\n  var pOptions = document.createElement(\"p\");\n  pOptions.classList.add(\"align_self\");\n  var bOptions = document.createElement(\"button\");\n  bOptions.id = \"btn_list_option\".concat([i]);\n  bOptions.classList.add(\"btn_options\");\n  var bOptionsContent = document.createTextNode(btnOptionsContent);\n  //insert btn list options in column\n  divTasks.appendChild(pOptions);\n  pOptions.appendChild(bOptions);\n  bOptions.appendChild(bOptionsContent);\n\n  //create drop zone\n  var dropZone = document.createElement(\"div\");\n  dropZone.classList.add(\"drop_zone\");\n  // insert drop zone in zone tasks\n  divTasks.appendChild(dropZone);\n\n  //create btn add\n  var pAdd = document.createElement(\"p\");\n  pAdd.classList.add(\"width_100\");\n  var bAdd = document.createElement(\"button\");\n  bAdd.id = \"btn_list_add\".concat([i]);\n  bAdd.classList.add(\"btn_add\");\n  var bAddSpan = document.createElement(\"span\");\n  var bAddContent = document.createTextNode(btnAddContent);\n  var bAddTxtContent = document.createTextNode(btnAddTxtContent);\n  //insert btn add  in zone tasks\n  divTasks.appendChild(pAdd);\n  pAdd.appendChild(bAdd);\n  bAdd.appendChild(bAddContent);\n  bAdd.appendChild(bAddSpan);\n  bAddSpan.appendChild(bAddTxtContent);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/lib_js/list_columns.js?");

/***/ }),

/***/ "./src/lib_js/list_title.js":
/*!**********************************!*\
  !*** ./src/lib_js/list_title.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   titleDiv: () => (/* binding */ titleDiv)\n/* harmony export */ });\nvar titleContentBase = \"Untitled\";\nvar titleContent = titleContentBase;\n\n//get if local storage contain some value and set it \nif (!localStorage.getItem(\"titleContent\")) {\n  localStorage.href = 'index.html';\n}\nif (localStorage.getItem(\"titleContent\") != null) {\n  titleContent = localStorage.getItem(\"titleContent\");\n}\n\n//get if storage change\nwindow.addEventListener(\"storage\", function () {\n  titleContent = localStorage.getItem(\"titleContent\");\n  titleContentUpdate(titleContent);\n});\n\n//create title list\nvar titleDiv = document.createElement(\"div\");\ntitleDiv.id = \"title_div\";\nvar titleList = document.createElement(\"h1\");\ntitleList.id = \"title_list\"; //need for rename by user\nvar titleListContent = document.createTextNode(titleContent);\nvar titlePBtn = document.createElement(\"p\");\nvar titleBtn = document.createElement(\"button\");\ntitleBtn.id = \"title_btn\"; //need for rename by user\n//insert title\ntitleDiv.appendChild(titleList);\ntitleList.appendChild(titleListContent);\ntitleDiv.appendChild(titlePBtn);\ntitlePBtn.appendChild(titleBtn);\n\n//create input for changing title by user\nvar inputTitleList = document.createElement(\"input\");\ninputTitleList.type = \"text\";\ninputTitleList.maxLength = 150;\ninputTitleList.classList.add(\"input_title_list\");\n//insert\ntitleDiv.insertBefore(inputTitleList, titlePBtn);\ninputTitleList.classList.add(\"not_display_item\"); //not display\n\n//event on btn change title\nif (titleBtn != null) {\n  titleBtn.addEventListener(\"click\", function () {\n    toggleHideItem();\n    inputTitleList.focus();\n    this.disabled = true; //disable button action\n  });\n}\n\ninputTitleList.addEventListener(\"blur\", function () {\n  getTitleInputValue(inputTitleList.value);\n  titleContentUpdate(titleContent);\n  toggleHideItem();\n});\ninputTitleList.addEventListener(\"keydown\", function (e) {\n  if (e.key == \"Enter\") {\n    inputTitleList.blur();\n  }\n});\nfunction getTitleInputValue(txt) {\n  if (txt == \"\") {\n    titleContent = titleContentBase;\n  } else {\n    titleContent = txt;\n  }\n  localStorage.setItem(\"titleContent\", titleContent);\n}\nfunction toggleHideItem() {\n  inputTitleList.classList.toggle(\"not_display_item\");\n  titleList.classList.toggle(\"not_display_item\");\n}\nfunction titleContentUpdate(txt) {\n  titleListContent.textContent = txt;\n  titleBtn.disabled = false;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/lib_js/list_title.js?");

/***/ }),

/***/ "./src/lib_js/mainpage_structure.js":
/*!******************************************!*\
  !*** ./src/lib_js/mainpage_structure.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainBody: () => (/* binding */ mainBody)\n/* harmony export */ });\n/* harmony import */ var _header_structure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header_structure.js */ \"./src/lib_js/header_structure.js\");\n/* harmony import */ var _searchbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchbar.js */ \"./src/lib_js/searchbar.js\");\n/* harmony import */ var _list_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list_title */ \"./src/lib_js/list_title.js\");\n/* harmony import */ var _list_columns_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list_columns.js */ \"./src/lib_js/list_columns.js\");\n/* harmony import */ var _footer_structure_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer_structure.js */ \"./src/lib_js/footer_structure.js\");\n//MAIN PAGE STRUCTURE\n//header\n\n\n\n\n//main\n\n\n// import {column1} from \"./list_column1.js\";\n// import {column2} from \"./list_column2.js\";\n// import {column3} from \"./list_column3.js\";\n//footer\n\n\n\n\nvar mainBody = document.querySelector(\"#main_body\");\nvar mainDiv = document.querySelector(\"#main_div\");\n\n//STRUCTURE\nif (mainBody != null) {\n  //create\n  var mainHeader = _header_structure_js__WEBPACK_IMPORTED_MODULE_0__.globalHeader;\n  var mainMain = document.createElement(\"main\");\n  ;\n  var mainFooter = _footer_structure_js__WEBPACK_IMPORTED_MODULE_4__.globalFooter;\n  //insert\n  mainBody.insertBefore(mainHeader, mainDiv);\n  mainBody.insertBefore(mainMain, mainDiv);\n  mainMain.append(mainDiv);\n  mainBody.appendChild(mainFooter);\n\n  //HEADER\n  mainHeader.appendChild(_header_structure_js__WEBPACK_IMPORTED_MODULE_0__.pBtnMode); //insert button dark/lightmode\n  mainHeader.appendChild(_header_structure_js__WEBPACK_IMPORTED_MODULE_0__.pImgPrincipale); //insert image\n\n  //MAIN\n  //insert the importing search bar in main\n  mainMain.insertBefore(_searchbar_js__WEBPACK_IMPORTED_MODULE_1__.divSearchBar, mainDiv);\n  //insert structure list in div in main\n  mainDiv.appendChild(_list_title__WEBPACK_IMPORTED_MODULE_2__.titleDiv);\n  //create a div for list : titles h2 and tasks\n  var listDiv = document.createElement(\"div\");\n  listDiv.id = \"list_div\";\n  mainDiv.appendChild(listDiv);\n  _list_columns_js__WEBPACK_IMPORTED_MODULE_3__.columns.forEach(function (column) {\n    listDiv.appendChild(column);\n  });\n\n  //FOOTER\n  mainFooter.appendChild(_footer_structure_js__WEBPACK_IMPORTED_MODULE_4__.legalMentions);\n  mainFooter.appendChild(_footer_structure_js__WEBPACK_IMPORTED_MODULE_4__.copyright);\n  mainFooter.appendChild(_footer_structure_js__WEBPACK_IMPORTED_MODULE_4__.divLogo);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/lib_js/mainpage_structure.js?");

/***/ }),

/***/ "./src/lib_js/mentionspage_content.js":
/*!********************************************!*\
  !*** ./src/lib_js/mentionspage_content.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mContainer: () => (/* binding */ mContainer)\n/* harmony export */ });\n//MENTIONS PAGE CONTENT\n//create container for alignement\nvar mContainer = document.createElement(\"div\");\nmContainer.id = \"m_container\";\n\n//create component\nvar mComponent = document.createElement(\"div\");\nmComponent.id = \"m_component\";\n//insert component\nmContainer.appendChild(mComponent);\n\n//create title\nvar mTitle1 = document.createElement(\"h1\");\nvar mTitle1Content = document.createTextNode(\"Legal Mentions\");\n//insert title\nmComponent.appendChild(mTitle1);\nmTitle1.appendChild(mTitle1Content);\n//create P1\nvar mParagraphe1 = document.createElement(\"p\");\nvar mParagraphe1Content = document.createTextNode(\"This site was created by Joelle Moureu as part of the web developer training course with Online FormaPro in Lure, session 23-24.\");\n//insert P1\nmComponent.appendChild(mParagraphe1);\nmParagraphe1.appendChild(mParagraphe1Content);\n//create P2\nvar mParagraphe2 = document.createElement(\"p\");\nvar mParagraphe2Content = document.createTextNode(\"No personal informations are collected, it's not declared to the CNIL.\");\n//insert P2\nmComponent.appendChild(mParagraphe2);\nmParagraphe2.appendChild(mParagraphe2Content);\n//create P3\nvar mParagraphe3 = document.createElement(\"p\");\nvar mParagraphe3Content = document.createTextNode(\"It's hosting by Vercel.\");\n//insert P3\nmComponent.appendChild(mParagraphe3);\nmParagraphe3.appendChild(mParagraphe3Content);\n//create P4\nvar mParagraphe4 = document.createElement(\"p\");\nvar mParagraphe4Content1 = document.createTextNode(\"You could find on Github the \");\nvar mParagraphe4Link1 = document.createElement(\"a\");\nmParagraphe4Link1.href = \"https://github.com/JoeWebDev70/06-lab-js-todo\";\nvar mParagraphe4Link1Content = document.createTextNode(\"code\");\nvar mParagraphe4Content2 = document.createTextNode(\" and the relative \");\nvar mParagraphe4Link2 = document.createElement(\"a\");\nmParagraphe4Link2.href = \"https://github.com/JoeWebDev70/06-lab-js-todo_project\";\nvar mParagraphe4Link2Content = document.createTextNode(\"project\");\n//insert P4\nmComponent.appendChild(mParagraphe4);\nmParagraphe4.appendChild(mParagraphe4Content1);\nmParagraphe4.appendChild(mParagraphe4Link1);\nmParagraphe4Link1.appendChild(mParagraphe4Link1Content);\nmParagraphe4.appendChild(mParagraphe4Content2);\nmParagraphe4.appendChild(mParagraphe4Link2);\nmParagraphe4Link2.appendChild(mParagraphe4Link2Content);\n//create P5\nvar mParagraphe5 = document.createElement(\"p\");\nvar mParagraphe5Content = document.createTextNode(\"All pictures and logo was realized by Joelle Moureu except the official logos .\");\n//insert P5\nmComponent.appendChild(mParagraphe5);\nmParagraphe5.appendChild(mParagraphe5Content);\n\n//# sourceURL=webpack://my-webpack-project/./src/lib_js/mentionspage_content.js?");

/***/ }),

/***/ "./src/lib_js/mentionspage_structure.js":
/*!**********************************************!*\
  !*** ./src/lib_js/mentionspage_structure.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mentionsBody: () => (/* binding */ mentionsBody)\n/* harmony export */ });\n/* harmony import */ var _header_structure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header_structure.js */ \"./src/lib_js/header_structure.js\");\n/* harmony import */ var _mentionspage_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentionspage_content.js */ \"./src/lib_js/mentionspage_content.js\");\n/* harmony import */ var _footer_structure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer_structure.js */ \"./src/lib_js/footer_structure.js\");\n//MENTIONS PAGE STRUCTURE\n\n\n\n\n\n\n\n\nvar mentionsBody = document.querySelector(\"#body_mentions\");\n\n//STRUCTURE\nif (mentionsBody != null) {\n  //create\n  var mentionsHeader = _header_structure_js__WEBPACK_IMPORTED_MODULE_0__.globalHeader;\n  var mentionsMain = document.createElement(\"main\");\n  var mentionsFooter = _footer_structure_js__WEBPACK_IMPORTED_MODULE_2__.globalFooter;\n  //insert\n  mentionsBody.appendChild(mentionsHeader);\n  mentionsBody.appendChild(mentionsMain);\n  mentionsBody.appendChild(mentionsFooter);\n\n  // HEADER\n  //create link\n  var mLinkImgPrincipale = document.createElement(\"a\");\n  mLinkImgPrincipale.href = \"./index.html\";\n  mLinkImgPrincipale.classList.add(\"link_page\");\n  //insert image\n  mentionsHeader.appendChild(_header_structure_js__WEBPACK_IMPORTED_MODULE_0__.pImgPrincipale);\n  _header_structure_js__WEBPACK_IMPORTED_MODULE_0__.pImgPrincipale.appendChild(mLinkImgPrincipale);\n  mLinkImgPrincipale.appendChild(_header_structure_js__WEBPACK_IMPORTED_MODULE_0__.imgPrincipale);\n\n  //MAIN\n  mentionsMain.appendChild(_mentionspage_content_js__WEBPACK_IMPORTED_MODULE_1__.mContainer);\n\n  //FOOTER\n  mentionsFooter.appendChild(_footer_structure_js__WEBPACK_IMPORTED_MODULE_2__.legalMentions);\n  mentionsFooter.appendChild(_footer_structure_js__WEBPACK_IMPORTED_MODULE_2__.copyright);\n  mentionsFooter.appendChild(_footer_structure_js__WEBPACK_IMPORTED_MODULE_2__.divLogo);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/lib_js/mentionspage_structure.js?");

/***/ }),

/***/ "./src/lib_js/searchbar.js":
/*!*********************************!*\
  !*** ./src/lib_js/searchbar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   divSearchBar: () => (/* binding */ divSearchBar)\n/* harmony export */ });\n//create search bar\nvar divSearchBar = document.createElement(\"div\");\ndivSearchBar.id = \"search_bar\";\n\n//create form\nvar formSearch = document.createElement(\"form\");\nformSearch.id = \"search_form\";\nformSearch.noValidate = true;\n\n//create tooltip for label on input\nvar divTooltip = document.createElement(\"div\");\ndivTooltip.classList.add(\"tooltip_container\");\n//create input for searching word\nvar inputSearch = document.createElement(\"input\");\ninputSearch.type = \"text\";\ninputSearch.id = \"input_search\";\ninputSearch.name = \"input_search\";\ninputSearch.dataError = \"Can't be blank!\";\nvar txtPlaceHolder = \"Search in your lists\";\ninputSearch.placeholder = txtPlaceHolder;\ninputSearch.required = true;\n\n//create label for input\nvar labelSearch = document.createElement(\"label\");\nlabelSearch.for = \"input_search\";\nlabelSearch.textContent = \"Enter your word\";\nlabelSearch.classList.add(\"tooltip_content\");\n\n//create erase button\nvar btnErase = document.createElement(\"button\");\nbtnErase.type = \"button\";\nbtnErase.id = \"btn_erase\";\nbtnErase.textContent = \"X\";\nbtnErase.classList.add(\"item_hiden\");\n\n//create submit button\nvar btnSearch = document.createElement(\"button\");\nbtnSearch.type = \"submit\";\nbtnSearch.id = \"submit\";\n\n//insert \ndivSearchBar.appendChild(formSearch);\nformSearch.appendChild(divTooltip);\ndivTooltip.appendChild(inputSearch);\ndivTooltip.appendChild(labelSearch);\nformSearch.appendChild(btnErase);\nformSearch.append(btnSearch);\n\n//add event listener on seach bar and its items\nif (formSearch != null) {\n  // verification of form validity\n  formSearch.addEventListener('submit', function (e) {\n    // if not valid then display error message\n    if (!this.checkValidity()) {\n      e.preventDefault();\n      this.classList.add('item_not_valid');\n      if (!inputSearch.valid) {\n        inputSearch.placeholder = inputSearch.dataset.error;\n      }\n    } else {\n      this.classList.remove('item_not_valid');\n      inputSearch.placeholder = txtPlaceHolder;\n      //import search function here\n    }\n  });\n\n  // show or hide icon to erase data in input on new focus\n  inputSearch.addEventListener('focus', function () {\n    if (inputSearch.value != \"\") {\n      btnErase.classList.add(\"item_shown\");\n    } else {\n      btnErase.classList.remove(\"item_shown\");\n    }\n  });\n\n  // show or hide icon to erase data in input on change\n  inputSearch.addEventListener('change', function () {\n    if (inputSearch.value != \"\") {\n      btnErase.classList.add(\"item_shown\");\n    } else {\n      btnErase.classList.remove(\"item_shown\");\n    }\n  });\n\n  // erase data in input for new research on click icon\n  btnErase.addEventListener('click', function () {\n    inputSearch.value = \"\";\n    btnErase.classList.remove(\"item_shown\");\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/lib_js/searchbar.js?");

/***/ }),

/***/ "./src/lib_js/togglemode.js":
/*!**********************************!*\
  !*** ./src/lib_js/togglemode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage_structure.js */ \"./src/lib_js/mainpage_structure.js\");\n/* harmony import */ var _mentionspage_structure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentionspage_structure.js */ \"./src/lib_js/mentionspage_structure.js\");\n\n\nvar toggleModeBtn = document.querySelector(\"#btn_mode\");\nvar preferColor = window.matchMedia(\"(prefers-color-scheme: dark)\");\nvar toggleModeChoice;\nif (_mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody != null) {\n  var tmpToggle = _mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody.getAttribute(\"class\").split(\" \");\n  tmpToggle.forEach(function (classIn) {\n    if (classIn.includes(\"_mode\")) {\n      toggleModeChoice = classIn; //get default mode on body \n      setToggleModeChoice(); //set default mode on local storage\n    }\n  });\n}\n\n//get if local storage contain some value and set it \nif (!localStorage.getItem(\"toggleModeChoice\")) {\n  localStorage.href = 'index.html';\n}\nif (localStorage.getItem(\"toggleModeChoice\") != null) {\n  toggleModeChoice = localStorage.getItem(\"toggleModeChoice\");\n}\nsetTheme(toggleModeChoice);\n\n//get if storage change\nwindow.addEventListener(\"storage\", function () {\n  toggleModeChoice = localStorage.getItem(\"toggleModeChoice\");\n  setTheme(toggleModeChoice);\n});\n\n//if prefer color of computer change set it\npreferColor.addEventListener(\"change\", function (e) {\n  if (e.matches) {\n    toggleModeChoice = \"dark_mode\";\n    setTheme(\"dark_mode\");\n  } else {\n    toggleModeChoice = \"light_mode\";\n    setTheme(\"light_mode\");\n  }\n  setToggleModeChoice();\n});\n\n//else get the color prefer set with toggle on local storage\nif (toggleModeChoice == null) {\n  if (preferColor.matches || toggleModeChoice == \"dark_mode\") {\n    setTheme(\"dark_mode\");\n  } else {\n    setTheme(\"light_mode\");\n  }\n} else {\n  if (toggleModeBtn != null) {\n    toggleModeBtn.addEventListener(\"click\", function () {\n      if (_mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody != null) {\n        _mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody.classList.toggle(\"dark_mode\");\n        _mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody.classList.toggle(\"light_mode\");\n        toggleModeChoice = _mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody.className;\n        setToggleModeChoice();\n      }\n    });\n  }\n}\nfunction setToggleModeChoice() {\n  localStorage.removeItem(\"toggleModeChoice\");\n  var tmpToggle = toggleModeChoice.split(\" \");\n  tmpToggle.forEach(function (classIn) {\n    if (classIn.includes(\"_mode\")) {\n      toggleModeChoice = classIn; //get default \n    }\n  });\n\n  localStorage.setItem(\"toggleModeChoice\", toggleModeChoice);\n}\n\n//set color on various elements\nfunction setTheme(color) {\n  if (color == \"dark_mode\") {\n    if (_mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody != null) {\n      _mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody.classList.add(\"dark_mode\");\n      _mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody.classList.remove(\"light_mode\");\n    }\n    if (_mentionspage_structure_js__WEBPACK_IMPORTED_MODULE_1__.mentionsBody != null) {\n      _mentionspage_structure_js__WEBPACK_IMPORTED_MODULE_1__.mentionsBody.classList.add(\"dark_mode\");\n      _mentionspage_structure_js__WEBPACK_IMPORTED_MODULE_1__.mentionsBody.classList.remove(\"light_mode\");\n    }\n  } else {\n    if (_mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody != null) {\n      _mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody.classList.remove(\"dark_mode\");\n      _mainpage_structure_js__WEBPACK_IMPORTED_MODULE_0__.mainBody.classList.add(\"light_mode\");\n    }\n    if (_mentionspage_structure_js__WEBPACK_IMPORTED_MODULE_1__.mentionsBody != null) {\n      _mentionspage_structure_js__WEBPACK_IMPORTED_MODULE_1__.mentionsBody.classList.remove(\"dark_mode\");\n      _mentionspage_structure_js__WEBPACK_IMPORTED_MODULE_1__.mentionsBody.classList.add(\"light_mode\");\n    }\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/lib_js/togglemode.js?");

/***/ }),

/***/ "./src/lib_js/transition.js":
/*!**********************************!*\
  !*** ./src/lib_js/transition.js ***!
  \**********************************/
/***/ (() => {

eval("//TRANSITION BETWEEN PAGES MAIN AND MENTIONS\nvar body = document.querySelector('body');\nvar linkPage = document.querySelector(\".link_page\");\nvar hrefLink;\nif (linkPage != null) {\n  linkPage.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    hrefLink = evt.target.tagName == \"IMG\" ? evt.target.parentElement.href : evt.target.href;\n    body.classList.add(\"transition_out\");\n    body.classList.remove(\"transition_in\");\n  });\n}\ndocument.addEventListener(\"DOMContentLoaded\", function (evt) {\n  body.classList.remove(\"transition_out\");\n  body.classList.add(\"transition_in\");\n});\nbody.addEventListener(\"transitionend\", function () {\n  if (body.classList.contains(\"transition_out\")) {\n    window.location.href = hrefLink;\n  }\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/lib_js/transition.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _lib_js_header_structure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib_js/header_structure.js */ \"./src/lib_js/header_structure.js\");\n/* harmony import */ var _lib_js_footer_structure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib_js/footer_structure.js */ \"./src/lib_js/footer_structure.js\");\n/* harmony import */ var _lib_js_mainpage_structure_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib_js/mainpage_structure.js */ \"./src/lib_js/mainpage_structure.js\");\n/* harmony import */ var _lib_js_mentionspage_structure_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib_js/mentionspage_structure.js */ \"./src/lib_js/mentionspage_structure.js\");\n/* harmony import */ var _lib_js_mentionspage_content_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib_js/mentionspage_content.js */ \"./src/lib_js/mentionspage_content.js\");\n/* harmony import */ var _lib_js_list_title_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib_js/list_title.js */ \"./src/lib_js/list_title.js\");\n/* harmony import */ var _lib_js_list_columns_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib_js/list_columns.js */ \"./src/lib_js/list_columns.js\");\n/* harmony import */ var _lib_js_togglemode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib_js/togglemode.js */ \"./src/lib_js/togglemode.js\");\n/* harmony import */ var _lib_js_searchbar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib_js/searchbar.js */ \"./src/lib_js/searchbar.js\");\n/* harmony import */ var _lib_js_transition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib_js/transition.js */ \"./src/lib_js/transition.js\");\n/* harmony import */ var _lib_js_transition_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_js_transition_js__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/script.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;