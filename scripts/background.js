;(function(){

    // https://developer.chrome.com/extensions/tabs#event-onUpdated
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){

        if(changeInfo.status == 'complete'){

            if(/baidu.com/i.test(tab.url)){
                
                // https://developer.chrome.com/extensions/tabs#method-executeScript
                chrome.tabs.executeScript(tabId,
                    {
                        file: "dist/app.js",
                        runAt:"document_end"
                    })
            }
        }
    });
}())