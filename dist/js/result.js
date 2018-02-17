webpackJsonp([10],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(163);


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Pearl8
	* @Date:   2018-02-17 14:58:30
	* @Last Modified by:   Pearl8
	* @Last Modified time: 2018-02-17 15:07:35
	*/

	'use strict';
	__webpack_require__(164);
	__webpack_require__(166);
	var _mm = __webpack_require__(8);

	$(function(){
	    var type        = _mm.getUrlParam('type') || 'default',
	        $element    = $('.' + type + '-success');
	    if(type === 'payment'){
	        var orderNumber  = _mm.getUrlParam('orderNumber'),
	            $orderNumber = $element.find('.order-number');
	        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
	    }
	    // 显示对应的提示元素
	    $element.show();
	})

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Pearl8
	* @Date:   2018-02-17 14:58:30
	* @Last Modified by:   Pearl8
	* @Last Modified time: 2018-02-17 15:08:54
	*/

	'use strict';
	__webpack_require__(167);

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});