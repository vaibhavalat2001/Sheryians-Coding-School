var math = Number(prompt("Enter you marsk"));
var phy = Number(prompt("Enter you marsk"));
var chem = Number(prompt("Enter you marsk"));

var avg = (math + phy + chem) / 3;

if (avg >= 85) {
    console.log("Marks gretter than 85");
}
else {
    console.log("Marks not greater thatn 85");
}