// user enters medial issue and returns list of doctors in portland area that fit query
// user enters name to retrieve list of doctors in portland area that fit query

// docotrs returned need to show: First name, last name, address, phone, website, accepting new patients status
// api request errors (not 200 level) return error message
// if no matches to query, notification to user
var apiKey = require('./../.env').apiKey;

// export let doctor {
  let apiRequest1 = fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_key=${apiKey}&limit=1&query=diabetes`)
  .then((res) => {
    res.json().then((data) => {
      console.log(data);
    });
  })

// }


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
