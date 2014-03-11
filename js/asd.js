var Layout = new function () {
    
    // private variables
    var context = this;
	var contentWrapperID = "content";
	var desktopWidth = 960; // in px
	var responsiveWidth = 480; // in px
	var width = window.innerWidth; // in px
	var height = window.innerHeight; // in px
	var pageUrl = document.URL;
	var browserName = navigator.appName;
	var browserCodeName = navigator.appCodeName;
	var browserVersion = navigator.appVersion;
	var browserLanguage = navigator.language;
	var browserPlatform = navigator.platform;
	var userAgentHeader = navigator.userAgent;
	var systemLanguage = navigator.systemLanguage;
	var deviceType = "";
	var MSG_GO_BCAK_OR_RETRY = "<br/>Go <a href='' onclick='javascript:window.history.back();'>back</a> or <a href='' onclick='javascript:window.location = document.URL;'>retry</a>.";
	var MSG_LAYOUT_REG_FAILED = "JavaScript Error : Layout registration failed.";
	var MSG_LAYOUT_UNSUPPORTED = "JavaScript Error : This Layout doesn't support any screen width less than 480px.";
	var MSG_LAYOUT_UNSUPPORTED_FLIP = context.MSG_LAYOUT_UNSUPPORTED + " If your device alows you, then flip the screen to get the display back.";
	
    // use below line(s) if you want to run any method 
    // when the script loads
    // i.e. works like constructor
    context.Layout = function () {
		console.log("context.responsiveWidth");
		console.log(context.responsiveWidth);
		console.log("context.deviceType");
		console.log(context.deviceType);
		console.log("context.width");
		console.log(context.width);
		console.log("_______________________________________________________");
        if (context.width < context.responsiveWidth) context.deviceType = "unsupported";
		else if (context.width <= context.desktopWidth) context.deviceType = "mobile";
		else context.deviceType = "desktop";
		console.log("context.responsiveWidth");
		console.log(context.responsiveWidth);
		console.log("context.deviceType");
		console.log(context.deviceType);
		console.log("context.width");
		console.log(context.width);
		console.log("_______________________________________________________");
		
		if (typeof pageUrl === 'undefined' || pageUrl === null || pageUrl === "") {
			document.body.innerHTML = "<p class='center'>" + context.MSG_LAYOUT_REG_FAILED + context.MSG_GO_BCAK_OR_RETRY + "</p>";
		}
		else if (context.width < context.responsiveWidth) {
			if (context.height > context.responsiveWidth){ 
				document.body.innerHTML = "<p class='center'>" + context.MSG_LAYOUT_UNSUPPORTED_FLIP + context.MSG_GO_BCAK_OR_RETRY + "</p>";
			}
			else{
				document.body.innerHTML = "<p class='center'>" + context.MSG_LAYOUT_UNSUPPORTED + context.MSG_GO_BCAK_OR_RETRY + "</p>";
			}
		}
    };
    window.onload = function () {
        context.Layout();
    };
	window.onresize=function(){
		context.Layout();
	};
    // initializer
    context.Inintialize = function () {
        context.Layout();
		if (typeof context !== "undefined") return context;
		else return null;
    };
    // end of constructor & initializer
    
    // setters
    context.SetPageUrl = function (url) {
        if(typeof url !== "undefined" || url !== "") context.pageUrl = url;
    };
    
    // getters
    context.GetDeviceType = function () {
        return context.deviceType;
    };
	
	// other functions
    
};

console.log(Layout.Inintialize());
console.log(Layout.GetDeviceType());
