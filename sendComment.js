window.addEventListener("keydown", function(e){
    if(e.ctrlKey && e.keyCode === 13){
        const divs = document.getElementsByClassName('tw-comment-post-operations');
        if (divs  && divs.length > 0) {
            if (!divs[0].children[0].disabled){
                divs[0].children[0].click();
            }
        }
    }
});