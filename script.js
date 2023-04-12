const age = Number(prompt("Введіть рік нардження"));
const city = prompt("Введіть місто проживання");
const sport = prompt("Введіть улюблений вид спорту");

const ageCalc = new Date().getFullYear() - age;
const capital = [ 'Київ', 'Вашингтон', 'Лондон' ]
const sportCamp = {
    'футбол': 'Леонель Месси',
    'Формула 1': 'Макс Ферстапен',
    'Баскетбол': 'Майкл Джордан'

};

console.log(ageCalc)
console.log(city)
console.log(sport)


if (age === null || city === null || sport === null) {
    alert ( 'Шкода, що Ви не захотіли ввести свій(ю)  ');
    if (age === null) {
      alert('рік народження');
    } else if (city === null) {
      alert ('назву міста');
    } else if (sport === null) {
      alert ('вид спорту');
    }
  } 
  
  else {
    alert (`Ваш вік: ${ageCalc}`);
    // 
    if (capital.includes(city)) {
      switch (city) {
        case 'Київ':
          country = 'Україна';
          break;
        case 'Вашингтон':
          country = 'США';
          break;
        case 'Лондон':
          country = 'Великобританія';
          break;
      }
      alert ( `Ти живеш у столиці ${country}`);
    } else {
      alert ( `Ти живеш у місті ${city}`);
    }
// 
    if (sportCamp.hasOwnProperty(sport)) {
      alert ( `Круто! Ти хочеш стати як ${sportCamp[sport]}?`);
    }else {
        alert( `Ти любиш ${sport}`)
    }
  }

