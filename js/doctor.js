var apiKey = require('./../.env').apiKey;

export let doctor = {


  // parseApiReturn: function(apiRequest1){
  //
  // }

findDoctorByQuery: function(query) {
  console.log("function called");
  let apiRequest1 = fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_key=${apiKey}&limit=1&query=${query}`)
  .then((res) => {
    res.json().then((data) => {
      console.log(data);
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
