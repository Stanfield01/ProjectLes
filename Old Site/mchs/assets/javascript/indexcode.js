// function reloaddata(){
//     var town = document.getElementById("town").options.selectedIndex;
//     var high = document.getElementById("high").value;
//     document.getElementById('terrain').src="assets/imgs/"+document.getElementById("town").options[town].text+"/bg.png";
//     document.getElementById('water').src="assets/imgs/"+document.getElementById("town").options[town].text+"/"+high+".png";
// }

const water = document.querySelector('.water');


function choose(event) {
    var disasters = ['water','fire','snow']
    var users = ['1','2','3']

    for (var i = 0; i < 3; i++){
        if (document.getElementById("btn" + disasters[i]).classList.contains('btn__clicked') == true){
            document.querySelector(".btn--" + disasters[i]).classList.toggle('btn__clicked')
        }
    }
    document.querySelector('.btn--'+event).classList.toggle('btn__clicked')


    for (var i = 0; i < 3; i++){
        if (document.getElementById("btn" + users[i]).classList.contains('btn__clicked') == true){
            window.user = users[i]
            document.location.href = event + ".html";
        }
    }
}

function user(usr) {
    var disasters = ['water','fire','snow']
    var users = ['1','2','3']

    for (var i = 0; i < 3; i++){
        if (document.getElementById("btn" + users[i]).classList.contains('btn__clicked') == true){
            document.querySelector(".btn--" + users[i]).classList.toggle('btn__clicked')
        }
    }
    document.querySelector('.btn--'+usr).classList.toggle('btn__clicked')

    for (var i = 0; i < 3; i++){
        if (document.getElementById("btn" + disasters[i]).classList.contains('btn__clicked') == true){
            window.user = usr
            document.location.href = disasters[i] + ".html";
        }
    }
}

function changewater() {
    document.getElementById('water').src='assets/imgs/'+document.getElementById('town').options[document.getElementById("town").options.selectedIndex].text+'/'+document.getElementById("high").value+'.png'
}

function changetown(){
    document.getElementById('giff').src='assets/gifs/'+document.getElementById('town').options[document.getElementById('town').selectedIndex].text+'.gif' 
}


fetch('https://api.openweathermap.org/data/2.5/onecall?lat=66.393784&lon=36.586868&appid=52130df860809b2de4d3d941d6da9a80')
    .then(function (resp) {
        return resp.json();
    }).then(function (data) {

        console.log(data);

        const degrees__days = document.getElementById("degrees__days");
        const timeActualy = document.getElementById("timeActualy");
        const pressure = document.getElementById("pressure");
        const pop = document.getElementById("pop");
        const wind = document.getElementById("wind");
        const humidity = document.getElementById("humidity");

        let ulElement = document.createElement("div");
        let wrapPressureElement = document.createElement("div");
        let wrapHumidityElement = document.createElement("div");
        let wrapPopElement = document.createElement("div");
        let wrapWindElement = document.createElement("div");
        let wrapTimeElement = document.createElement("div");

        timeActualy.append(wrapTimeElement);
        degrees__days.append(ulElement);
        pressure.append(wrapPressureElement);
        humidity.append(wrapHumidityElement);
        pop.append(wrapPopElement);
        wind.append(wrapWindElement);

        let timeElement;
        let liElement;
        let pressureElement;
        let humidityElement;
        let popElement;
        let windElement;

        //1 day
        for (let index = 0; index < 1; index++) {
            for (let jndex = 0; jndex < data.daily.length-1; jndex++) {

                timeElement = document.createElement("div");
                liElement = document.createElement("div");
                pressureElement = document.createElement("div");
                humidityElement = document.createElement("div");
                popElement = document.createElement("div");
                windElement = document.createElement("div");

                wrapTimeElement.append(timeElement);
                ulElement.append(liElement);
                wrapPressureElement.append(pressureElement);
                wrapHumidityElement.append(humidityElement);
                wrapPopElement.append(popElement);
                wrapWindElement.append(windElement);

                let element = data.daily[jndex];
                let unixTimeStamp = data.daily[jndex].dt;

                let date = new Date(unixTimeStamp * 1000);
                let day = date.getDay();
                let formattedTime;

                if (day == 0){
                    formattedTime = "Воскресенье";
                }
                else if (day == 1){
                    formattedTime = "Понедельник";
                }
                else if (day == 2){
                    formattedTime = "Вторник";
                }
                else if (day == 3){
                    formattedTime = "Среда";
                }
                else if (day == 4){
                    formattedTime = "Четверг";
                }
                else if (day == 5){
                    formattedTime = "Пятница";
                }
                else {
                    formattedTime = "Суббота";
                }

                timeElement.innerHTML = formattedTime;

                liElement.innerHTML = 
                + Math.round(element.temp.morn - 273.15) + "&deg;C / " 
                + Math.round(element.temp.eve - 273.15) + "&deg;C";

                pressureElement.innerHTML = Math.round(element.pressure * 0.75);
                humidityElement.innerHTML = element.humidity + "%";
                popElement.innerHTML = (element.pop * 100) + "%";
                windElement.innerHTML = element.wind_speed + "м/с";
            }
        }

    }).catch(function () {
        //ловим ошибоси
    });
