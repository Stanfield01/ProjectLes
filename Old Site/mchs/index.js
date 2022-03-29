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

function weather (lat,lon) {
    // fetch('https://api.openweathermap.org/data/2.5/onecall?lat=68.804916&lon=33.099987&appid=52130df860809b2de4d3d941d6da9a80')
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid=52130df860809b2de4d3d941d6da9a80')

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
        
        [degrees__days, timeActualy, pop, wind, pressure, humidity].forEach(element => {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        });

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
                
                const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

                switch (day) {
                    case 0:
                        formattedTime = weekDays[0];
                        break;

                    case 1:
                        formattedTime = weekDays[1];
                        break;

                    case 2:
                        formattedTime = weekDays[2];
                        break;

                    case 3:
                        formattedTime = weekDays[3];
                        break;

                    case 4:
                        formattedTime = weekDays[4];
                        break;
    
                    case 5:
                        formattedTime = weekDays[5];
                        break;
    
                    case 6:
                        formattedTime = weekDays[6];
                        break;
                
                    default:
                        break;
                }

                timeElement.innerHTML = formattedTime;

                liElement.innerHTML = 
                + Math.round(element.temp.morn - 273.15) + "&deg;C / " 
                + Math.round(element.temp.eve - 273.15) + "&deg;C";

                pressureElement.innerHTML = Math.round(element.pressure * 0.75) + "мм.рт.ст";
                humidityElement.innerHTML = element.humidity + "%";
                popElement.innerHTML = Math.round(element.pop * 100) + "%";
                windElement.innerHTML = element.wind_speed + "м/с";
            }
        }

    }).catch(function () {
        //ловим ошибоси
    });
}

function changeHref() {
    let townsInformers = document.querySelector('#town').getElementsByTagName('option');
    console.log(townsInformers);
    
    let Varzuga = 2005,
        Kildin = 3983,
        Magnet = 103723,
        Rosta = 5538,
        Kola = 4152,
        Revda = 7067;
    
    let WeatherInformer = document.querySelector(".weather-informer");
    console.log(WeatherInformer);
    
            if(townsInformers[0].selected == true) {
    
                document.getElementById("frame-weather").setAttribute('src', 'https://rp5.ru/htmla.php?id='+Varzuga+'&lang=ru&um=00000&bg=%23466FD5&ft=%23466FD5&fc=%23466FD5&c=%23000000&f=Arial&s=12&sc=1');
                document.querySelector(".changeName").setAttribute('href', 'https://rp5.ru/'+Varzuga+'/ru');
                document.getElementById("townName").innerHTML = "Варзуга";
                
            } else if(townsInformers[1].selected == true) {
    
                document.getElementById("frame-weather").setAttribute('src', 'https://rp5.ru/htmla.php?id='+Kildin+'&lang=ru&um=00000&bg=%23466FD5&ft=%23466FD5&fc=%23466FD5&c=%23000000&f=Arial&s=12&sc=1');
                document.querySelector(".changeName").setAttribute('href', 'https://rp5.ru/'+Kildin+'/ru');
                document.getElementById("townName").innerHTML = "Кильдинстрой";
            } else if(townsInformers[2].selected == true) {
    
                document.getElementById("frame-weather").setAttribute('src', 'https://rp5.ru/htmla.php?id='+Magnet+'&lang=ru&um=00000&bg=%23466FD5&ft=%23466FD5&fc=%23466FD5&c=%23000000&f=Arial&s=12&sc=1');
                document.querySelector(".changeName").setAttribute('href', 'https://rp5.ru/'+Magnet+'/ru');
                document.getElementById("townName").innerHTML = "Магнетиты";
            } else if(townsInformers[3].selected == true) {
    
                document.getElementById("frame-weather").setAttribute('src', 'https://rp5.ru/htmla.php?id='+Rosta+'&lang=ru&um=00000&bg=%23466FD5&ft=%23466FD5&fc=%23466FD5&c=%23000000&f=Arial&s=12&sc=1');
                document.querySelector(".changeName").setAttribute('href', 'https://rp5.ru/'+Rosta+'/ru');
                document.getElementById("townName").innerHTML = "Роста";
            } else if(townsInformers[4].selected == true) {
    
                document.getElementById("frame-weather").setAttribute('src', 'https://rp5.ru/htmla.php?id='+Kola+'&lang=ru&um=00000&bg=%23466FD5&ft=%23466FD5&fc=%23466FD5&c=%23000000&f=Arial&s=12&sc=1');
                document.querySelector(".changeName").setAttribute('href', 'https://rp5.ru/'+Kola+'/ru');
                document.getElementById("townName").innerHTML = "Кола";
            } else if(townsInformers[5].selected == true) {
    
                document.getElementById("frame-weather").setAttribute('src', 'https://rp5.ru/htmla.php?id='+Revda+'&lang=ru&um=00000&bg=%23466FD5&ft=%23466FD5&fc=%23466FD5&c=%23000000&f=Arial&s=12&sc=1');
                document.querySelector(".changeName").setAttribute('href', 'https://rp5.ru/'+Revda+'/ru');
                document.getElementById("townName").innerHTML = "Ревда";
            }
        }

$(document).ready(function(){
	$('.faq_bar').click(function(){
		$('.hidden_faq').slideToggle(300);      
		return false;
	});
});
jQuery(($) => {
    $('.select_emp').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select_emp').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select_emp').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});




