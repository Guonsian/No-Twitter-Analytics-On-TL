function getElementsByXPath(xpath, parent){
    let elements = [];
    let query = document.evaluate(xpath, parent || document,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        elements.push(query.snapshotItem(i));
    }
    return elements;
}

setInterval(() => {
	let selector = "//a[contains(@href, 'analytics')]/.."

	if(window.location.href.includes("/status")){
		try{
			if(getComputedStyle(getElementsByXPath(selector+"/..")[0])['marginRight'] === "20px"){
				getElementsByXPath(selector+"/..")[0].setAttribute("style", "margin-right: 0")
			}
		}catch{}
	}
	getElementsByXPath(selector).forEach(elem => elem.remove());
}, 100)
