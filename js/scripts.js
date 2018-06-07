$(document).ready(function(){
var string = "";

function converter(numb) {
  var calcNum = numb;
  var arrM = [];
  var arrD = [];
  var arrC = [];
  var arrL = [];
  var arrX = [];
  var arrV = [];
  var total = [];

  var condition1 = [3000,2000,1000,500,100,100,100,100,50,10,10,10,10];
  var condition2 = ["M","M","M","D","C","C","C","CD","L","X","X","X","XL"];
  var condition3 = [1000,1000,1000,500,100,100,100,100,50,10,10,10,10];
  var condition4 = [arrM,arrM,arrM,arrD,arrC,arrC,arrC,arrC,arrL,arrX,arrX,arrX,arrX];

  if (numb < 4000) {
    for (i = 0; i < condition1.length; i++) {
      if(calcNum / condition1[i] >= 1) {
      calcNum -= condition3[i];
      condition4[i].push(condition2[i]);
      }
    }
    if (arrC.length > 3) {
    arrC = "CD";
    }
    if (arrX.length > 3) {
    arrX = "XL";
    }

    var arr = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
      arrV.push(arr[calcNum -1]);

    total = arrM.concat(arrD,arrC,arrL,arrX,arrV);
    string = total.join("");
    } else {
    string = "Roman numerals only count to 3999"
    }
  }
  $("#form-roman-numeral").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    converter(input);
    $("#roman-numeral-conversion").text(string);
  });
});
