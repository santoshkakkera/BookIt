// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Host': 'trains.p.rapidapi.com',
// 		'X-RapidAPI-Key': '37312e1ab8msh79306e5bdf58b8ap1fab19jsn129797ba5391'
// 	},
// 	body: '{"search":"Rajdhani"}'
// };

const options = {
	// method: 'GET',
    // Access-Control-Allow-Methods: 'GET',
	headers: {
		'X-RapidAPI-Host': 'indianrailways.p.rapidapi.com',
		'X-RapidAPI-Key': '37312e1ab8msh79306e5bdf58b8ap1fab19jsn129797ba5391',
        'station': 'delhi',
        'mode':'no-cors'
	},
    // body: '{"station":"delhi"}'
};

// fetch('https://trains.p.rapidapi.com/', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// console.log('hello');
fetch('http://api.irishrail.ie/realtime/realtime.asmx/getCurrentTrainsXML', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


// https://indianrailways.p.rapidapi.com/findstations.php?station=delhi
// const getData = async()=>{
//     const data = await fetch('http://api.irishrail.ie/realtime/realtime.asmx/getCurrentTrainsXML', options)
//     console.log(data.re);

// }
// getData()
// console.log('hello');


