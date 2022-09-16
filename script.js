const wrapper=document.querySelector(".wrapper"),
form=wrapper.querySelector("form"),
fileInp=form.querySelector("input"),
infoText=form.querySelector("p")
;

function fetchRequest(formData,file) {
    infoText.innerText="Scanning QR Code...";
    //sending post request to qr server api with passing
    //form data as body and getting response from it
    fetch("http://api.qrserver.com/v1/read-qr-code/",{
        method: "POST",body:formData
    }).then(res=>res.json()).then(
        result=>{
            result=result[0].symbol[0].data;
            wrapper.querySelector("textarea").innerText=`${result}`;
            console.log(result);
            form.querySelector("img").src=URL.createObjectURL(file);
            infoText.innerText="Scanning QR Code...";
            wrapper.classList.add("active");
        });
}

fileInp.addEventListener("change",e=>{
    let file=e.target.files[0]; //getting the required user selected data
    let formData=new FormData(); //creating a new FormData object
    formData.append("file",file); //adding selected files to formData
    fetchRequest(formData,file);
});

form.addEventListener("click",()=>fileInp.click())