var Layout = new function () {
    
    // private variables
    var context = this;
	context.contentWrapperID = "content";
	
	context.desktopWidth = 960; // in px
	context.responsiveWidth = 480; // in px
	context.width = window.innerWidth; // in px
	context.height = window.innerHeight; // in px
	context.pageUrl = document.URL;
	context.browserName = navigator.appName;
	context.browserCodeName = navigator.appCodeName;
	context.browserVersion = navigator.appVersion;
	context.browserLanguage = navigator.language;
	context.browserPlatform = navigator.platform;
	context.userAgentHeader = navigator.userAgent;
	context.systemLanguage = navigator.systemLanguage;
	context.deviceType = "";
	
	context.MSG_GO_BCAK_OR_RETRY = "<br/>Go <a href='' onclick='javascript:window.history.back();'>back</a> or <a href='' onclick='javascript:window.location = document.URL;'>retry</a>.";
	context.MSG_LAYOUT_REG_FAILED = "JavaScript Error : Layout registration failed.";
	context.MSG_LAYOUT_UNSUPPORTED = "JavaScript Error : This Layout doesn't support any screen width less than 480px.";
	context.MSG_LAYOUT_UNSUPPORTED_FLIP = context.MSG_LAYOUT_UNSUPPORTED + " If your device alows you, then flip the screen to get the display back.";
	
	//css paths are taken with chrome > inspect element > right-click on element > copy css path
	context.Header_User_Account_Menu_Icon = "#header > div > div.header_account_container > ul > li.user_account_menu_icon";
	context.Header_User_Account_Menu_Icon_DropDown = "#header > div > div.header_account_container > ul > li.user_account_menu_icon > div.user_account_dropdown";
	context.Header_Messages_Icon = "#header > div > div.header_account_container > ul > li.notification > a.link.messages_link";
	context.Header_Messages_Icon_DropDown = "#header > div > div.header_account_container > ul > li.notification > div.messages_dropdown";
	context.Header_Notification_Icon = "#header > div > div.header_account_container > ul > li.notification > a.link.notification_link";
	context.Header_Notification_Icon_Dropdown = "#header > div > div.header_account_container > ul > li.notification > div.notification_dropdown";
	context.Header_Notification_Icon = "#header > div > div.header_account_container > ul > li.notification > a.link.notification_link";
	context.Header_Notification_Icon_DropDown = "#header > div > div.header_account_container > ul > li.notification > div.notification_dropdown";
	context.HeaderResponsive_Left_Navigation_Menu_Icon = "#header > div > div.mob_sub_menu_icon";
	context.HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown = "#header > div > div.mob_sub_menu_icon > div.sub_menu_dropdown";
	context.HeaderResponsive_Right_Navigation_Menu_Icon = "#header > div > div.header_account_container > ul > li.mob_main_menu_icon";
	context.HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown = "#header > div > div.header_account_container > ul > li.mob_main_menu_icon > div";
	context.HeaderResponsive_User_Account_Menu_Icon = "#header > div > div.header_account_container > ul > li.user_account_menu_icon";
	context.HeaderResponsive_User_Account_Menu_Icon_DropDown = "#header > div > div.header_account_container > ul > li.user_account_menu_icon > div.user_account_dropdown";
	
	
    // use below line(s) if you want to run any method 
    // when the script loads
    // i.e. works like constructor
    context.Layout = function () {
		context.width = window.innerWidth; // in px
		context.height = window.innerHeight; // in px
		
		console.log("context.responsiveWidth - " + context.responsiveWidth);
		console.log("context.deviceType - " + context.deviceType);
		console.log("context.width - " + context.width);
		console.log("context.height - " + context.height);
		console.log("_______________________________________________________");
        if (context.width < context.responsiveWidth) context.deviceType = "unsupported";
		else if (context.width <= context.desktopWidth) context.deviceType = "mobile";
		else context.deviceType = "desktop";
		console.log("context.responsiveWidth - " + context.responsiveWidth);
		console.log("context.deviceType - " + context.deviceType);
		console.log("context.width - " + context.width);
		console.log("context.height - " + context.height);
		console.log("_______________________________________________________");
		//console.log("(context.width < context.responsiveWidth)");
		//console.log((context.width < context.responsiveWidth));
		console.log("_______________________________________________________");
		
		if (typeof context.pageUrl === 'undefined' || context.pageUrl === null || context.pageUrl === "") {
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
		context.SetDropDownMenuItems();
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
    context.SetDropDownMenuItems = function () {
		document.body.onclick = function (e) {
			var clicked_element = e.target;
			var clicked_element_parent = clicked_element.parentNode;
			
			var Header_User_Account_Menu_Icon = context.getElementByCssSelector(context.Header_User_Account_Menu_Icon);
			var Header_User_Account_Menu_Icon_DropDown = context.getElementByCssSelector(context.Header_User_Account_Menu_Icon_DropDown);
			
			var Header_Messages_Icon = context.getElementByCssSelector(context.Header_Messages_Icon);
			var Header_Messages_Icon_DropDown = context.getElementByCssSelector(context.Header_Messages_Icon_DropDown);
			
			var Header_Notification_Icon = context.getElementByCssSelector(context.Header_Notification_Icon);
			var Header_Notification_Icon_DropDown = context.getElementByCssSelector(context.Header_Notification_Icon_DropDown);
			
			var HeaderResponsive_Left_Navigation_Menu_Icon = context.getElementByCssSelector(context.HeaderResponsive_Left_Navigation_Menu_Icon);
			var HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown = context.getElementByCssSelector(context.HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown);
			
			var HeaderResponsive_Right_Navigation_Menu_Icon = context.getElementByCssSelector(context.HeaderResponsive_Right_Navigation_Menu_Icon);
			var HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown = context.getElementByCssSelector(context.HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown);
			
			var HeaderResponsive_User_Account_Menu_Icon = context.getElementByCssSelector(context.HeaderResponsive_User_Account_Menu_Icon);
			var HeaderResponsive_User_Account_Menu_Icon_DropDown = context.getElementByCssSelector(context.HeaderResponsive_User_Account_Menu_Icon_DropDown);
			
			if (clicked_element === Header_User_Account_Menu_Icon || clicked_element_parent === Header_User_Account_Menu_Icon){
				var display_status = context.getComputedStyle(Header_User_Account_Menu_Icon_DropDown, 'display');
				if (display_status === 'block') {
					Header_User_Account_Menu_Icon_DropDown.style.display = 'none';
				}
				else if (display_status === 'none') {
					Header_User_Account_Menu_Icon_DropDown.style.display = 'block';
					Header_Messages_Icon_DropDown.style.display = 'none';
					Header_Notification_Icon_DropDown.style.display = 'none';
					HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown.style.display = 'none';
					HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown.style.display = 'none';
					//HeaderResponsive_User_Account_Menu_Icon_DropDown.style.display = 'none';
				}
			}
			else if (clicked_element === Header_Messages_Icon || clicked_element_parent === Header_Messages_Icon){
				var display_status = context.getComputedStyle(Header_Messages_Icon_DropDown, 'display');
				if (display_status === 'block') {
					Header_Messages_Icon_DropDown.style.display = 'none';
				}
				else if (display_status === 'none') {
					Header_User_Account_Menu_Icon_DropDown.style.display = 'none';
					Header_Messages_Icon_DropDown.style.display = 'block';
					Header_Notification_Icon_DropDown.style.display = 'none';
					HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown.style.display = 'none';
					HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown.style.display = 'none';
					//HeaderResponsive_User_Account_Menu_Icon_DropDown.style.display = 'none';
				}
			}
			else if (clicked_element === Header_Notification_Icon || clicked_element_parent === Header_Notification_Icon){
				var display_status = context.getComputedStyle(Header_Notification_Icon_DropDown, 'display');
				if (display_status === 'block') {
					Header_Notification_Icon_DropDown.style.display = 'none';
				}
				else if (display_status === 'none') {
					Header_User_Account_Menu_Icon_DropDown.style.display = 'none';
					Header_Messages_Icon_DropDown.style.display = 'none';
					Header_Notification_Icon_DropDown.style.display = 'block';
					HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown.style.display = 'none';
					HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown.style.display = 'none';
					//HeaderResponsive_User_Account_Menu_Icon_DropDown.style.display = 'none';
				}
			}
			else if (clicked_element === HeaderResponsive_Left_Navigation_Menu_Icon || clicked_element_parent === HeaderResponsive_Left_Navigation_Menu_Icon){
				var display_status = context.getComputedStyle(HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown, 'display');
				if (display_status === 'block') {
					HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown.style.display = 'none';
				}
				else if (display_status === 'none') {
					Header_User_Account_Menu_Icon_DropDown.style.display = 'none';
					Header_Messages_Icon_DropDown.style.display = 'none';
					Header_Notification_Icon_DropDown.style.display = 'none';
					HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown.style.display = 'block';
					HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown.style.display = 'none';
					//HeaderResponsive_User_Account_Menu_Icon_DropDown.style.display = 'none';
				}
			}
			else if (clicked_element === HeaderResponsive_Right_Navigation_Menu_Icon || clicked_element_parent === HeaderResponsive_Right_Navigation_Menu_Icon){
				var display_status = context.getComputedStyle(HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown, 'display');
				if (display_status === 'block') {
					HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown.style.display = 'none';
				}
				else if (display_status === 'none') {
					Header_User_Account_Menu_Icon_DropDown.style.display = 'none';
					Header_Messages_Icon_DropDown.style.display = 'none';
					Header_Notification_Icon_DropDown.style.display = 'none';
					HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown.style.display = 'none';
					HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown.style.display = 'block';
					//HeaderResponsive_User_Account_Menu_Icon_DropDown.style.display = 'none';
				}
			}
			/*else if (clicked_element === HeaderResponsive_User_Account_Menu_Icon || clicked_element_parent === HeaderResponsive_User_Account_Menu_Icon){
				var display_status = context.getComputedStyle(HeaderResponsive_User_Account_Menu_Icon_DropDown, 'display');
				if (display_status === 'block') {
					HeaderResponsive_User_Account_Menu_Icon_DropDown.style.display = 'none';
				}
				else if (display_status === 'none') {
					Header_User_Account_Menu_Icon_DropDown.style.display = 'none';
					Header_Messages_Icon_DropDown.style.display = 'none';
					Header_Notification_Icon_DropDown.style.display = 'none';
					HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown.style.display = 'none';
					HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown.style.display = 'none';
					//HeaderResponsive_User_Account_Menu_Icon_DropDown.style.display = 'block';
				}
			}*/
			else {
				Header_User_Account_Menu_Icon_DropDown.style.display = 'none';
				Header_Messages_Icon_DropDown.style.display = 'none';
				Header_Notification_Icon_DropDown.style.display = 'none';
				HeaderResponsive_Left_Navigation_Menu_Icon_Dropdown.style.display = 'none';
				HeaderResponsive_Right_Navigation_Menu_Icon_Dropdown.style.display = 'none';
				//HeaderResponsive_User_Account_Menu_Icon_DropDown.style.display = 'none';
			}
		};
    };
    
    // getters
    context.GetDeviceType = function () {
        return context.deviceType;
    };
	
	// helper functions
	context.getElementByCssSelector = function (cssSelector) {
		// returns a single dom element against css selector
		var elements = document.querySelectorAll(cssSelector);
		if (elements.length === 1) return elements[0];
		else return null;
	};
	context.getComputedStyle = function (el, style) {
		var cs;
		if (typeof el.currentStyle != 'undefined') {
			cs = el.currentStyle;
		} else {
			cs = document.defaultView.getComputedStyle(el, null);
		}
		return cs[style];
	}


};

console.log("context - " + Layout.Inintialize());
console.log("DeviceType - " + Layout.GetDeviceType());