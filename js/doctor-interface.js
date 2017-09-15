import { doctor } from "./../js/doctor.js";

$(document).ready(function(){
function displayDoctors(callDoctor){
  console.log("in front end function");
  console.log(callDoctor);
  callDoctor.forEach(function(test){
    $('#doctorInfo').append(`<p>${test.fName} ${test.mName} ${test.lName}, ${test.title} `);

  });
}

$('#userInputQuery').submit(function(e){
  e.preventDefault();
  let query = $("input[name='userInputQuery']").val();
  $("input").val("");
  doctor.findDoctorByQuery(query, displayDoctors);
});




});
