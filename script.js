

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var result = document.getElementById("result")
    var year = new Date().getFullYear()+parseInt(years);
    if(principal <= 0)
    {
        alert("Please enter a positive number.");
        document.getElementById("principal").focus();
        result.innerText="";  
    }
    else
    {
        innerHTML = "If you deposit <span class='hihglight'> "+ principal +" </span><br>"+
        "at an intertest rate of <span class='hihglight'> "+ rate +"%.</span><br>"+
        "You will receive an amount of <span class='hihglight'> "+ interest +",</span><br>"+
        "in the year <span class='hihglight'> "+ year +"</span><br>";
        result.innerHTML=innerHTML;  
    }
}

setInterval(
    function() {
        var principal = document.getElementById("principal").value;
        if(principal <= 0)
        {
            document.getElementById("principal").style.color = "red";
        }
        else
        {
            document.getElementById("principal").style.color = "black";
        }
    }, 100);

