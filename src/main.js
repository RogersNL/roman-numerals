import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Number } from './scripts';
// SUBMIT FORM: PULLS NUMBER FROM DOCUMENT, OUTPUTS CONVERTED NUMBER
$(document).ready(function(){
  $("#form-roman-numeral").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var number = new Number(input);
    $("#roman-numeral-conversion").text(number.converter());
  });
});
