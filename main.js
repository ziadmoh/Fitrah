window.addEventListener('load', (event) => {
    let fitra = document.getElementById('fitraCont')
let donwloadBtn = document.getElementById('donwloadPhoto')
let namesForm = document.getElementById('namesForm')
let first = document.getElementById('first')
let last = document.getElementById('last')
let errMsg1 = document.getElementById('err-msg1')
let errMsg2 = document.getElementById('err-msg2')
let toReplace = document.getElementById('toReplace')
let isFirstValid = false
let isLastValid = false
function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
    fitra.style.display = "none"
}

function printToFile(div) {
    html2canvas(div).then(function(canvas) {
        var myImage = canvas.toDataURL("image/png");
            downloadURI("data:" + myImage, first.value+"-" + last.value + "-supports-Fitrah.png");
    });

}


donwloadBtn.addEventListener('click' ,function(){
    if(isFirstValid && isLastValid){
        fitra.style.display = "block"
        toReplace.innerText = first.value[0] + last.value[0]
        printToFile(fitra)
    }else{
        if(!isFirstValid && isLastValid){
            errMsg1.style.display = "block"
        }else if (!isLastValid && isFirstValid){
            errMsg2.style.display = "block"
        }else{
            errMsg1.style.display = "block"
            errMsg2.style.display = "block"
        }
    }
})

first.addEventListener('keyup',function(){
    if(!this.value.length || !this.value.trim()  ){
        errMsg1.style.display = "block"
        isFirstValid = false
    }else{
        errMsg1.style.display = "none"
        isFirstValid = true
    }
})
last.addEventListener('keyup',function(){
    if(!this.value.length || !this.value.trim()){
        errMsg2.style.display = "block"
        isLastValid = false
    }else{
        errMsg2.style.display = "none"
        isLastValid = true
    }
})



namesForm.addEventListener('submit' ,function(e){
    e.preventDefault();
})


});