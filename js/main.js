const a = document.querySelector("#sch")

a.addEventListener("submit", function(x){
    x.preventDefault()
    const jsform = new FormData(this);
    if(jsform.get("school") == ("Alliance").toUpperCase()){
        return jsform.("sch")

    }
})
const b = document.querySelector("#subform")

b.addEventListener("submit", function(x){
    x.preventDefault()
    const jsform = new FormData(this);
    console.log(jsform.get("flexRadioDefault"))
    console.log(jsform.get("Default"))
    if((jsform.get("flexRadioDefault")) && (jsform.get("Default"))){
        alert("please go to the contact form to contact us ")
    }
    else{
        alert("please show fill all the fileds ")
    } 
})
