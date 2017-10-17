var gallons = function() {
  litConv = prompt("how many gallons do you have?");
  litDisp = litConv * 3.785;
  alert("you have " + litDisp + " liters.");
};

var liters = function() {
  galConv = prompt("how many liters do you have?");
  galDisp = galConv * 0.264;
  alert("you have " + galDisp + " gallons.");
};

liters();
