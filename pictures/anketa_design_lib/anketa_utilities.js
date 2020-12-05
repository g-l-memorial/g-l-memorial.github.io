function toggleTabs (tabCurrent) {
	tabsContainer = getParentNode(tabCurrent,"UL");
	tabsCollection = tabsContainer.getElementsByTagName("A");
	$A(tabsCollection).each(function (tab) {
		var container = $(tab.hash.substr(1));
		if (tab == tabCurrent) { 
			container.show(); 
			tab.className = "current";
			tab.onclick = function () { return false; }
		}
		else {
			container.hide();
			tab.className = "tab";
			tab.onclick = function () { toggleTabs(tab); return false; }
		}
	});
}

