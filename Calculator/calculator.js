// function to display value
function display(val) {
    // var num = document.getElementById('screen').value;
    document.getElementById("screen").value += val

}
function clr() {
    document.getElementById("screen").value = ""
    document.getElementById("addt").disabled = false;
    document.getElementById("subt").disabled = false;
    document.getElementById("mult").disabled = false;
    document.getElementById("divi").disabled = false;
}

function solve() {
    let x = document.getElementById("screen").value
    let y = eval(x)
    document.getElementById("screen").value = y
}

function manageOperator(){
    addt = document.getElementById("addt");
    addt.setAttribute("disabled", "disabled");
    document.getElementById("subt").disabled = true;
    document.getElementById("mult").disabled = true;
    document.getElementById("divi").disabled = true;
    // buttons.disabled = true;
}