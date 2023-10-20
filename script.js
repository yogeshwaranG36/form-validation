let fname;
let lname;
let gen;
let num;
let mail;

function get() {
    fname = document.getElementById("name").value;
    lname = document.getElementById("lname").value;
    gen = document.getElementById("gen").value;
    num = document.getElementById("number").value;
    mail = document.getElementById("mail").value;
    myfunction()
}
function myfunction() {
    if (fname && lname && gen && num && mail != null) {
        console.log(fname);
        console.log(lname);
        console.log(gen);
        console.log(num);
        console.log(mail);
        fname = document.getElementById("name").value;
        document.getElementById("lname").value = null;
        document.getElementById("gen").value = null;
        document.getElementById("number").value = null;
        document.getElementById("mail").value = null;
    }
    else {
        alert("“Please fill in all fields”")
    }
}