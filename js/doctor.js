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
        street: test.practices[0].visit_address.street,
        city: test.practices[0].visit_address.city,
        state: test.practices[0].visit_address.state,
        zip: test.practices[0].visit_address.zip,
        lat: test.practices[0].visit_address.lat,
        lng:test.practices[0].visit_address.lon,
        phone: test.practices[0].phones[0].number,
        website: test.practices[0].website,
        acceptingPatients: test.practices[0].accepts_new_patients,
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
  .catch(console.log);
},

findDoctorByName: function(name, displayDoctors) {
  let apiRequest2 = fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&limit=10&user_key=${apiKey}`)
  .then((res) => {
    res.json().then((test) => {
      doctor.parseApiReturn(test, displayDoctors);
    });
  })
  .catch(console.log);
  }
};
