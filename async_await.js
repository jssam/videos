async function fetchData() {
console.log('Bacha comming');
let res = await fetch('https://bachaSlip');
let data = await fetch('https://papaSlip',res);
console.log('Bacha Kicked:', data);
console.log("sanyam")
}