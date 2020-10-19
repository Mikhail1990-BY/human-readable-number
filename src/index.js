module.exports = function toReadable (number) {
  let numbersArr = ['', 'one', 'two', 'three', 'four', 'five', 'six',
   'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let tensArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'];
  if (number === 0) {return 'zero'};
   if (number < 20) {return numbersArr[number]};
   if (number >= 20 && number < 100) {return (`${tensArr[Math.trunc(number / 10)]} ${numbersArr[number % 10]}`).trim()}; 
   if (number >= 100) { return (`${numbersArr[Math.trunc(number / 100)]} hundred ${((number % 100) >= 21 ? tensArr[Math.trunc((number % 100) / 10)] +
     ' ' +  numbersArr[(number % 100) % 10] : numbersArr[number % 100])}`).trim()};
}
