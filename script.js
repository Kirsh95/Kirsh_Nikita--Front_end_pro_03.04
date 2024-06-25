  const years = Number(prompt('вкажіть рік народження'));
      const city = prompt('вкажіть місто проживання');
      const sport = prompt('вкажіть улюбленний спорт');  
      const old = new Date().getFullYear() - years;
      const capital = {"Київ" : "України", "Вашингтон":"США", "Лондон":"Британії"}
      const sportCamp = {"Футбол": "Анри", "Формула-1": "Фетел", "Теніс": "Надаль"};

      // 
      if(years===null || city===null || sport===null){
        alert(`Шкода що ви відмовились вводити дані`)
      }
      else if( (capital.hasOwnProperty(city)) && (sportCamp.hasOwnProperty(sport))){
          alert(`Ваш вік складає ${old}, живете ви у месті ${city},а це столиця ${capital[city]},ваш улюблений вид спорту ${sport} ти хочешь буду як ${sportCamp[sport]}?`) 
      }

      else if(!((capital.hasOwnProperty(city))) && ((sportCamp.hasOwnProperty(sport)))){
          alert(`Ваш вік складає ${old}, живете ви у месті ${city},ваш улюблений вид спорту ${sport} ти хочешь буду як ${sportCamp[sport]}?`) 
      }

      else if ((capital.hasOwnProperty(city)) && !(sportCamp.hasOwnProperty(sport))){
          alert(` Ваш вік складає ${old}, живете ви у месті ${city},а це столиця ${capital[city]}, ваш улюблений вид спорту ${sport}`) 
      }

      else{  !(capital.hasOwnProperty(city)) || !(sportCamp.hasOwnProperty(sport))
          alert(`Ваш вік складає ${old}, живете ви у месті ${city}, та полюбляете ${sport}`)
      }
// 
