function validation(){

    var name = document.getElementById('inputname').value;
    var contact = document.getElementById('inputcontact').value;
    var qty =document.getElementById('inputqty').value;
    var city = document.getElementById('inputCity').value;
    var zip = document.getElementById('inputZip').value;
    
    
    
    
    var namecheck = /^[A-Z a-z]{2,}$/;
    var contactcheck = /^[6789][0-9]{9}$/;
    var qtycheck = /^[1-100]{1}$/;
    var citycheck = /^[A-Z a-z]{2,}$/;
    var zipcheck = /^[0-9]{6}$/;
    
    
    if(namecheck.test(name)){
        document.getElementById('error-name').innerHTML = "";
    
    }
    else{
        document.getElementById('error-name').innerHTML = "Use only Alphabets"
        return false;
    }
    
    if(contactcheck.test(contact)){
        document.getElementById('error-contactnumber').innerHTML = "";
    
    }
    else{
        document.getElementById('error-contactnumber').innerHTML = "Enter a valid number"
        return false;
    }
     
    if(qtycheck.test(qty)){
        document.getElementById('error-qty').innerHTML = "";
    
    }
    else{
        document.getElementById('error-qty').innerHTML = "Enter between 1-100"
        return false;
    }
    
    if(citycheck.test(city)){
        document.getElementById('error-inputcity').innerHTML = "";
    
    }
    else{
        document.getElementById('error-inputcity').innerHTML = "Use only alphabets"
        return false;
    }
    
    if(zipcheck.test(zip)){
        document.getElementById('error-inputzip').innerHTML = "";
    
    }
    else{
        document.getElementById('error-inputzip').innerHTML = "Enter correct pincode"
        return false;
    }
    }