
    function calculate () {
        var elev = prompt("Please enter your elevation.", "0");
        var time = prompt("please enter your time.", "0");
        var final;
        if (elev < 3124 || elev === "null") {
        alert("Your speed wouldn't change with this altitude!");
    }
        else if (elev < 4009 && elev > 3124) {
        final=time - 12.29;
        alert("Your time would be "+final+" seconds!");
    }
        else if (elev < 6001 && elev > 4009) {
        alert("Your time would be 17.36 seconds less!");
    }
        else if (elev < 7703 && elev > 6001) {
        alert("Your time would be 32.76 seconds less!");
    }
        else {
        alert("Invalid Input!");    
    }
}
document.onload=calculate();
