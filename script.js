const wrapper=document.querySelector(".wrapper"),
form=wrapper.querySelector("form"),
fileInp=form.querySelector("input")

function fetchRequest(formData) {
    fetch("http://api.qrserver.com/v1/read-qr-code/",{
        method: "POST",body:formData
    }).then(res=>res.json()).then(
        result=>console.log(result);
    )
}

fileInp.addEventListener("change",e=>{
    let file=e.target.files[0]; //getting the required user selected data
    let formData=new FormData(); //creating a new FormData object
    formData.append("file",file); //adding selected files to formData
    fetchRequest(formData);
});

form.addEventListener("click",()=>fileInp.click())