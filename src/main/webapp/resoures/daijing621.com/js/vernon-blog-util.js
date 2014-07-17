var BlogUitl = {
	intputCutCount : function(inputObj, showObj, num, tipValue) {
		var $inputObj = $(inputObj);
		function inputHandler(event) {
			var $length = num - $.trim($inputObj.val()).length;
			if (!tipValue) {
				tipValue = "还可以输入:";
			}
			$(showObj).html(tipValue + ($length >= 0 ? $length : "<font color='red'>" + $length + "</font>"));
		}
		$inputObj.keyup(inputHandler);
		$inputObj.bind("cut paste change",inputHandler);
	}
};
