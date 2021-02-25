
let pirates = [ 
    {name: 'luffy', age: 12}, 
    {name: 'roronoa', age: 16}, 
    {name: 'jimbei', age: 30}, 
    {name: 'usopp', age:14}, 
    {name: 'roger', age:40}
];

let grouped_pirates = pirates.reduce( (accumulator, current) => {
    let start_age = parseInt(`${current.age}`[0]) + '0'
    let end_age = parseInt(`${current.age}`[0]) + '9'
	let key = `${start_age} - ${end_age}`;
	if (!accumulator[key]) {
  	accumulator[key] = [];
  }

  accumulator[key].push(current);

  return accumulator;

}, {} );

console.log(grouped_pirates);