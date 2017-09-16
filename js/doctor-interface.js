import { doctor } from "./../js/doctor.js";

$(document).ready(function(){

function displayDoctors(callDoctor){
if(callDoctor.length == 0){
  $('#doctorInfo').text("No Doctors meet the criteria");
}else{
  callDoctor.forEach(function(test){
    $('#doctorInfo').prepend(`<p>${test.fName} ${test.mName} ${test.lName}, ${test.title} `);
    $('#doctorInfo').prepend(`<p>${test.street} `);
    $('#doctorInfo').prepend(`<p>${test.city} ${test.state} ${test.zip}`);
    $('#doctorInfo').prepend(`<p>Phone: ${test.phone} Website: ${test.website}`);
    $('#doctorInfo').prepend(`<p>Doctor is currently accepting new patients: ${test.acceptingPatients}`);
    $('#doctorInfo').prepend(`<img src=${test.image_url} height="100" width="100"> `);
  });
  }
}

$('#userInputQuery').submit(function(e){
  e.preventDefault();
  let query = $("input[name='userInputQuery']").val();
  $("input").val("");
  doctor.findDoctorByQuery(query, displayDoctors);
})

$('#userInputName').submit(function(e){
  e.preventDefault();
  let name = $("input[name='userInputName']").val();
  $("input").val("");
  doctor.findDoctorByName(name, displayDoctors);
});





});
