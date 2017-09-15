import { doctor } from "./../js/doctor.js";

$(document).ready(function(){
// function displayDoctors(){
//   doctorArray.forEach(function(doctor){
//     $('#doctorInfo').append('<p>' + bike.title);
//   });
// }

$('#userInputQuery').submit(function(e){
  e.preventDefault();
  let query = $("input[name='userInputQuery']").val();
  $("input").val("");
  console.log(query);
  doctor.findDoctorByQuery(query);
});




});
