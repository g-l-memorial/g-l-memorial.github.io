var anketaBehaviours = {
	'.anketaAddQuestion' : function (el) {
    el.onclick = function () {
			addPostingContainer(el,'QUEST_ORDNUM',10);
      return false;
    }
  },
	'.anketaAddAnswer' : function (el) {
		el.onclick = function () {
			addPostingContainer(el,'ANS_ORDNUM',10);
			return false;
		}
	},
	'.anketaPopupHelp' : function (el) {
		el.onclick = function () {
			openWindow(el.href,'anketaHelp',300,200,'status=no,resizable=yes');
			return false;
		}
	},
	'.anketaTabs a' : function (el) {
		el.onclick = function () {
			toggleTabs(el);
			return false;
		}
	}
}

Behaviour.register(anketaBehaviours);
