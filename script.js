function oddEvenFn() {
    
    a = parseInt(document.getElementById("num1").value);
    
    if(a%2==0) {
        document.getElementById("resultShow").value="The Value "+a+" is Even Number";
    } else {
        document.getElementById("resultShow").value="The Value "+a+" is Odd Number";
    }

}