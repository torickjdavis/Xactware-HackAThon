
    function calculate () {
        alert("this is for 5k races");
        var elev = prompt("Please enter your elevation.", "0");
        var time = prompt("please enter your time. (min.seconds)", "0");
        var final;
        if (elev < 3124 || elev === "null") {
        alert("Your speed wouldn't change with this altitude!");
    }
        else if (elev < 4009 && elev > 3124) {
        final=time - .1229;
        alert("Your time would be "+final+" seconds!");
    }
        else if (elev < 6001 && elev > 4009) {
         final=time - .1736;
        alert("Your time would be" +final+" seconds less!");
    }
        else if (elev < 7703 && elev > 6001) {
        final=time - .3276
        alert("Your time would be" +final+" seconds less!");
    }
    else if (elev >= 7703 ) {
        final=time - .4898
        alert("Your time would be" +final+" seconds less!");
    }
        else {
        alert("Invalid Input!");    
    }
}
document.onload=calculate();
