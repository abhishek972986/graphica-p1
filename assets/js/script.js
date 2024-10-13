function fetchData(event) {
    event.preventDefault(); 


    let inputField = document.getElementById("registrationfield").value;

    let namefield = document.getElementById("namefield");
    let mobfield = document.getElementById("mobilefield");
    let emailfield = document.getElementById("emailfield");
    let branchfield = document.getElementById("branchdetail"); 
    let name2 = "Vivek Sharma";
    let phone2 = 9451302544;
    let email2 = "viveksharma_240087@aitpune.edu.in";
    let branch2 = "Comp B";
    let registration = "240087"; 

    let name1 = "Abhishsek";
    let phone1 = 8708250109;
    let email1 = "abhishek_240275@aitpune.edu.in";
    let branch1 = "Comp B";
    let registration1 = "240275"; 

    if (inputField === registration) {
        namefield.value = name2;
        branchfield.value = branch2; 
        emailfield.value = email2; 
        mobfield.value = phone2; 
    } else if (inputField === registration1) {
        namefield.value = name1;
        branchfield.value = branch1; 
        emailfield.value = email1; 
        mobfield.value = phone1; 
    } else if(inputField===240391){


        namefield.value = "Lokendra singh";
        branchfield.value = "IA A"; 
        emailfield.value = "lokendrasingh_240391"; 
        mobfield.value = 9166510943;

    }else{
        alert("Student not found");
    }
}
