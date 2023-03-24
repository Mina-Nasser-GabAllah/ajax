      // Creating Our XMLHttpRequest object 
    var xhr = new XMLHttpRequest();

    // Making our connection  
    xhr.open("GET", "text.txt");

    // function execute after request is successful 
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".cont").innerHTML=xhr.responseText

            
        }
    }
    // Sending our request 
    xhr.send();
