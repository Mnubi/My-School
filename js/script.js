const a = document.querySelector("#cont");


a.addEventListener("submit", function(x){
    x.preventDefault()
    const jsform = new FormData(this);
    var name = jsform.get("name")
    console.log(jsform.get("name"))
    console.log(jsform.get("email"))
    console.log(jsform.get("message"))
    if(jsform.get("name") && (jsform.get("email")) && (jsform.get("message"))){
        alert("Thanky you "  + name )
    }
    else{
        alert('all fields are required ')
    }
})