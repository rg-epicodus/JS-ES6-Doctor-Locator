var apiKey = require('./../.env').apiKey;

export let doctor = {


parseApiReturn: function(test, displayDoctors){
  let callDoctor = [];
  test.data.forEach(function(test){
    callDoctor.push(
      {
        fName: test.profile.first_name,
        mName: test.profile.middle_name,
        lName: test.profile.last_name,
        title: test.profile.title,
        image_url: test.profile.image_url,
        // street: test.practices.visit_address.street,
        // city: test.practices.city,
        // state: test.practices.state,
        // zip: test.practices.zip,
        // lat: test.practices.lat,
        // lng:test.practices.lon,
        // // phone: test.practices.phones.number,
        // website: test.practices.website,
        // acceptingPatients: test.practices.accepts_new_patients,
      }
    );
  });
  displayDoctors(callDoctor);
},


findDoctorByQuery: function(query, displayDoctors) {
  let apiRequest1 = fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_key=${apiKey}&limit=2&query=${query}`)
  .then((res) => {
    res.json().then((test) => {
      doctor.parseApiReturn(test, displayDoctors);
    });
  })
  .catch((error) => {
    console.log(error);
  });


}

};







// let apiRequest2 = fetch('http://api.openweathermap.org/data/2.5/forecast?q=seattle&appid=da2fec2009d72c8dd21ed03e0419a232')
//   .then((res) => {
//     res.json().then((data) => {
//       console.log(data);
//     });
//   })
//
// Promise.all([apiRequest1, apiRequest2])
//   .then((data) => {
//   })
//   .catch((err) => {
//     console.log(err);
//   });
