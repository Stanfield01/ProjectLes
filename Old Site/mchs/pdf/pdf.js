// import pdfMake from "pdfmake-master/build/pdfmake";
// import pdfFonts from "pdfmake-master/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
var prognoz = 'prognoz'; //document.getElementById("prognoz").textContent;
var emloyee = 'Имя_Сотрудника';
var employee_test = '';
var town_val = 'Мурманск';
var pogoda_table = 'pogoda'; //document.getElementById("weather_table").textContent;
// var file_name =
var select_town = document.getElementById('town');
var getValue_town;
var town_text = select_town.options[select_town.selectedIndex].text;
// var bla_test = document.getElementById('weather_table');
// var bla_text = bla_test.textContent;
var jq_weather = $('#weather_table').text();
var t_time_actually = document.getElementById('timeActualy').textContent;
var jq_time = $('#timeActualy').text();
// console.log(t_time_actually)

// var day_table_text = ''
// var weather_table_text = ''
// var presure_table_text = ''
// var vlaga_table_text = ''
// var osad_table_text = ''
// var speed_table_text = ''

// var d_array = []
// var t_array = []
// var p_array = []
// var v_array = []
// var o_array = []
// var s_array = []

var d_result = [];
var t_result = [];
var p_result = [];
var v_result = [];
var o_result = [];
var s_result = [];

var mapURL = 'Micro mapURL';
var mapURL_total = '${mapURL}';
var map_array = [];

// $(document).ready(function() {
//     //var testdiv = document.getElementById("testdiv");
//         html2canvas($("#weather_img"), {
//             onrendered: function(canvas) {
//                 // canvas is the final rendered <canvas> element
//                 var weather_img = canvas.toDataURL("image/png");
//                 window.open(weather_img);
//             }
//         });
//     });
let water_streets = '';
let mapInFolder = '';

let Varz_maps = {
    0: 'https://i.ibb.co/nRRycLw/var0.png',
    1: 'https://i.ibb.co/tZ2KLff/var1.png',
    2: 'https://i.ibb.co/FbGN1SL/var2.png',
    3: 'https://i.ibb.co/42WCScZ/var3.png',
    4: 'https://i.ibb.co/XbK1JpQ/var4.png',
    5: 'https://i.ibb.co/cXZjQGk/var5.png',
    6: 'https://i.ibb.co/8r4Yx0p/var6.png',
    7: 'https://i.ibb.co/hHvWghw/var7.png',
};
let Kild_maps = {
    0: 'https://i.ibb.co/GC8zjg5/kild0.png',
    1: 'https://i.ibb.co/YZ2pzK0/kild1.png',
    2: 'https://i.ibb.co/y098rHB/kild2.png',
    3: 'https://i.ibb.co/vszHqRF/kild3.png',
    4: 'https://i.ibb.co/X46mJgP/kild4.png',
    5: 'https://i.ibb.co/py8yDJK/kild5.png',
    6: 'https://i.ibb.co/R7nPx3d/kild6.png',
    7: 'https://i.ibb.co/j6VHHTP/kild7.png',
    8: 'https://i.ibb.co/R93D1gz/kild8.png',
    9: 'https://i.ibb.co/dDFkngL/kild9.png',
    10: 'https://i.ibb.co/QCZCsW5/kild10.png',
    11: 'https://i.ibb.co/HnmyR8Q/kild11.png',
    12: 'https://i.ibb.co/LkGBb1R/kild12.png',
    13: 'https://i.ibb.co/nz5VPWv/kild13.png',
    14: 'https://i.ibb.co/Q960Xf7/kild14.png',
};
let Magn_maps = {
    0: 'https://i.ibb.co/rfSygfn/mag0.png',
    1: 'https://i.ibb.co/JvYYNJQ/mag1.png',
    2: 'https://i.ibb.co/qCGWvk2/mag2.png',
    3: 'https://i.ibb.co/NnbzqNY/mag3.png',
    4: 'https://i.ibb.co/xHhNmVV/mag4.png',
    5: 'https://i.ibb.co/JQVHTpr/mag5.png',
    6: 'https://i.ibb.co/YRsX23R/mag6.png',
    7: 'https://i.ibb.co/5jZCBkb/mag7.png',
    8: 'https://i.ibb.co/VJFw9QZ/mag8.png',
    9: 'https://i.ibb.co/Ks6Jt4r/mag9.png',
    10: 'https://i.ibb.co/t4nBzqY/mag10.png',
    11: 'https://i.ibb.co/89bjBcB/mag11.png',
    12: 'https://i.ibb.co/5BNB5R5/mag12.png',
};
let Rosta_maps = {
    0: 'https://i.ibb.co/NLTv2VK/rst0.png',
    1: 'https://i.ibb.co/QHpxfYT/rst1.png',
    2: 'https://i.ibb.co/K6ZmcmY/rst2.png',
    3: 'https://i.ibb.co/4sVrKBz/rst3.png',
    4: 'https://i.ibb.co/MNtpjKq/rst4.png',
    5: 'https://i.ibb.co/0skxvWm/rst5.png',
    6: 'https://i.ibb.co/xGMMbHf/rst6.png',
    7: 'https://i.ibb.co/3fGBh40/rst7.png',
    8: 'https://i.ibb.co/j6nct4Y/rst8.png',
    9: 'https://i.ibb.co/9qCs31x/rst9.png',
    10: 'https://i.ibb.co/5jhGPND/rst10.png',
    11: 'https://i.ibb.co/D7tcJXs/rst11.png',
};
let Cola_maps = {
    0: 'https://i.ibb.co/bdtPGZT/kol0.png',
    1: 'https://i.ibb.co/9rxMmr7/kol1.png',
    2: 'https://i.ibb.co/WFmSknq/kol2.png',
    3: 'https://i.ibb.co/prvp8w7/kol3.png',
};
let Revda_maps = {
    0: 'https://i.ibb.co/R6t7cJT/rev0.png',
    1: 'https://i.ibb.co/Z8mMPZ8/rev1.png',
    2: 'https://i.ibb.co/p3s7LvC/rev2.png',
    3: 'https://i.ibb.co/S6zFRzx/rev3.png',
    4: 'https://i.ibb.co/yVpXLp6/rev4.png',
    5: 'https://i.ibb.co/KV2nL0g/rev5.png',
    6: 'https://i.ibb.co/3M8367m/rev6.png',
    7: 'https://i.ibb.co/WB1jzy7/rev7.png',
};
let Varzuga = {
    0: 'Нет затоплений\nБлижайший гидропост: адрес',
    1: 'Нет затоплений\nБлижайший гидропост: адрес',
    2: 'Никольская улица: 1, 2, 3, 4, 6, 16, 18, 8, 14, 10, 28, 119, 49, 51, 63, 54, 80, 79, 81, 83, 93, 84, 82, 86, 94, 101, 103, 109, 112, 113, 118, 108, 107, 116, 117, 117\nЦерковь Петра и Павла\nБлижайший гидропост: адрес',
    3: 'Никольская улица: 1, 2, 3, 4, 6, 16, 18, 8, 14, 10, 28, 119, 49, 51, 63, 54, 80, 79, 81, 83, 93, 84, 82, 86, 94, 101, 103, 109, 112, 113, 118, 108, 107, 36, 35, 31, 33, 39, 56, 64, 69, 66, 68, 71, 111, 89, 80, 105, 116, 117, 117А\nЦерковь Петра и Павла\nБлижайший гидропост: адрес',
    4: 'Никольская улица: 1, 2, 3, 4, 6, 16, 18, 8, 14, 10, 28, 119, 49, 51, 63, 54, 80, 79, 81, 83, 93, 84, 82, 86, 94, 101, 103, 109, 112, 113, 118, 108, 107, 36, 35, 31, 33, 39, 56, 64, 69, 66, 68, 71, 111, 89, 80, 105, 116, 117, 117А, 43, 44, 42, 45, 41, 37, 73, 74, 76, 77, 75, 46, 78\nЦерковь Петра и Павла\nУспенская улица: 40, 11\nБлижайший гидропост: адрес',
    5: 'Никольская улица: 1, 2, 3, 4, 6, 16, 18, 8, 14, 10, 28, 119, 49, 51, 63, 54, 80, 79, 81, 83, 93, 84, 82, 86, 94, 101, 103, 109, 112, 113, 118, 108, 107, 36, 35, 31, 33, 39, 56, 64, 69, 66, 68, 71, 111, 89, 80, 105, 116, 117, 117А, 43, 44, 42, 45, 41, 37, 73, 74, 76, 77, 75, 46, 78\nЦерковь Петра и Павла\nУспенская улица: 40, 11, 12, 41, 55, 59, 23, 27, 25, 29, 31, 33, 80\nЧасовня Уара\nЦерковь Сергия Радонежского\nЦерковь Афанасия Великого\nУспенская церковь\nБлижайший гидропост: адрес',
    6: 'Никольская улица: 1, 2, 3, 4, 6, 16, 18, 8, 14, 10, 28, 119, 49, 51, 63, 54, 80, 79, 81, 83, 93, 84, 82, 86, 94, 101, 103, 109, 112, 113, 118, 108, 107, 36, 35, 31, 33, 39, 56, 64, 69, 66, 68, 71, 111, 89, 80, 105, 116, 117, 117А, 43, 44, 42, 45, 41, 37, 73, 74, 76, 77, 75, 46, 78\nЦерковь Петра и Павла\nУспенская улица: 40, 11, 12, 41, 55, 59, 23, 27, 25, 29, 31, 33, 80, 79, 38, 36, 34, 32, 30, 28\nЧасовня Уара\nЦерковь Сергия Радонежского\nЦерковь Афанасия Великого\nУспенская церковь\nБлижайший гидропост: адрес',
    7: 'Никольская улица: 1, 2, 3, 4, 6, 16, 18, 8, 14, 10, 28, 119, 49, 51, 63, 54, 80, 79, 81, 83, 93, 84, 82, 86, 94, 101, 103, 109, 112, 113, 118, 108, 107, 36, 35, 31, 33, 39, 56, 64, 69, 66, 68, 71, 111, 89, 80, 105, 116, 117, 117А, 43, 44, 42, 45, 41, 37, 73, 74, 76, 77, 75, 46, 78\nЦерковь Петра и Павла\nУспенская улица: 40, 11, 12, 41, 55, 59, 23, 27, 25, 29, 31, 33, 80, 79, 38, 36, 34, 32, 30, 28, 75\nЧасовня Уара\nЦерковь Сергия Радонежского\nЦерковь Афанасия Великого\nУспенская церковь\nБлижайший гидропост: адрес',
};
let Killdestroy = {
    0: 'Нет затоплений\nБлижайший гидропост: адрес',
    1: 'Набережная улица: 10, 9,\nУгольная котельная\nЖелезнодорожный тупик 7\nБлижайший гидропост: адрес',
    2: 'Северная улица: 35\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14\nСоветская улица 15, 13\nУгольная котельная\nЖелезнодорожный тупик: 7\nДНТ Кильдинское\nРечная улица: 7, 17\nБлижайший гидропост: адрес',
    3: 'Северная улица: 3, 35\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5\nСоветская улица 15, 13, 13А, 11\nУгольная котельная\nЖелезнодорожный тупик: 7\nОстановка 1425 км\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nБлижайший гидропост: адрес',
    4: 'Северная улица: 3, 35\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1\nСоветская улица 15, 13, 13А, 11\nУгольная котельная\nЖелезнодорожный тупик: 7\nОстановка 1425 км\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nБлижайший гидропост: адрес',
    5: 'Северная улица: 3, 35\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1\nСоветская улица 15, 13, 13А, 11\nУгольная котельная\nЖелезнодорожный тупик: 7\nОстановка 1425 км\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nСолнечная улица\nБлижайший гидропост: адрес',
    6: 'Северная улица: 3, 35, 11, 13\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1\nСоветская улица 15, 13, 13А, 11, 12, 14, 9\nУгольная котельная\nЖелезнодорожный тупик: 7\nОстановка 1425 км\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nСолнечная улица\nБлижайший гидропост: адрес',
    7: 'Северная улица: 3, 35, 11, 13\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1, 15, 7\nСоветская улица 15, 13, 13А, 11, 12, 14, 9\nУгольная котельная\nЖелезнодорожный тупик: 7О\nстановка 1425 км\nРучьевая улица: 4, 7\nКильдинское шоссе: 14\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nСолнечная улица\nБлижайший гидропост: адрес',
    8: 'Северная улица: 3, 35, 11, 13, 22\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1, 15, 7, 2\nСоветская улица 15, 13, 13А, 11, 12, 14, 9\nУгольная котельная\nЖелезнодорожный тупик: 7О\nстановка 1425 км\nРучьевая улица: 4, 7\nКильдинское шоссе: 14\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nСолнечная улица\nБлижайший гидропост: адрес',
    9: 'Северная улица: 3, 35, 11, 13, 22\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1, 15, 7, 2\nСоветская улица 15, 13, 13А, 11, 12, 14, 9\nУгольная котельная\nЖелезнодорожный тупик: 7О\nстановка 1425 км\nРучьевая улица: 4, 7\nКильдинское шоссе: 14\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nСолнечная улица\nБлижайший гидропост: адрес',
    10: 'Северная улица: 3, 35, 11, 13, 22\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1, 15, 7, 2\nСоветская улица 15, 13, 13А, 11, 12, 14, 9, 8\nУгольная котельная\nЖелезнодорожный тупик: 7О\nстановка 1425 км\nРучьевая улица: 4, 7\nКильдинское шоссе: 14\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nСолнечная улица\nБлижайший гидропост: адрес',
    11: 'Северная улица: 3, 35, 11, 13, 22\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1, 15, 7, 2\nСоветская улица 15, 13, 13А, 11, 12, 14, 9, 8, 10, 16\nУгольная котельная\nЖелезнодорожный тупик: 7О\nстановка 1425 км\nРучьевая улица: 4, 7\nКильдинское шоссе: 14\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nСолнечная улица\nБлижайший гидропост: адрес',
    12: 'Северная улица: 3, 35, 11, 13, 22, 34\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1, 15, 7, 2\nСоветская улица 15, 13, 13А, 11, 12, 14, 9, 8, 10, 16\nУгольная котельная\nЖелезнодорожный тупик: 7О\nстановка 1425 км\nРучьевая улица: 4, 7\nКильдинское шоссе: 14\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nСолнечная улица\nБлижайший гидропост: адрес',
    13: 'Северная улица: 3, 35, 11, 13, 22, 34, 32\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1, 15, 7, 2\nСоветская улица 15, 13, 13А, 11, 12, 14, 9, 8, 10, 16\nУгольная котельная\nЖелезнодорожный тупик: 7О\nстановка 1425 км\nРучьевая улица: 4, 7\nКильдинское шоссе: 14\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nСолнечная улица\nБлижайший гидропост: адрес',
    14: 'Северная улица: 3, 35, 11, 13, 22, 34, 32\nНабережная улица: гаражи, 12, 10, 9, 3, 6, 14, 5, 11, 1, 15, 7, 2\nСоветская улица 15, 13, 13А, 11, 12, 14, 9, 8, 10, 16\nУгольная котельная\nЖелезнодорожный тупик: 7О\nстановка 1425 км\nРучьевая улица: 4, 7\nКильдинское шоссе: 14, 13\nДНТ Кильдинское\nРечная улица: 7, 17, 22\nСолнечная улица\nБлижайший гидропост: адрес',
};
let Magnetit = {
    0: 'Нет затоплений\nБлижайший гидропост: адрес',
    1: 'ДНП Лапландия\nБлижайший гидропост: адрес',
    2: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15\nБлижайший гидропост: адрес',
    3: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15, 16, 18, 20, 21\nБлижайший гидропост: адрес',
    4: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15, 16, 18, 20, 21\nБлижайший гидропост: адрес',
    5: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15, 16, 18, 20, 21\nБлижайший гидропост: адрес',
    6: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15, 16, 18, 20, 21, 10, 12, 14\nБлижайший гидропост: адрес',
    7: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15, 16, 18, 20, 21, 10, 12, 14, 8\nБлижайший гидропост: адрес',
    8: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15, 16, 18, 20, 21, 10, 12, 14, 8\nБлижайший гидропост: адрес',
    9: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15, 16, 18, 20, 21, 10, 12, 14, 8\nБлижайший гидропост: адрес',
    10: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15, 16, 18, 20, 21, 10, 12, 14, 8\nЗаводская улица: 5, 6, 7, 8\nБлижайший гидропост: адрес',
    11: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15, 16, 18, 20, 21, 10, 12, 14, 8\nЗаводская улица: 5, 6, 7, 8, 4, 3\nБлижайший гидропост: адрес',
    12: 'ДНП Лапландия\nНабережная улица: 7, 9, 11, 13, 15, 16, 18, 20, 21, 10, 12, 14, 8\nЗаводская улица: 5, 6, 7, 8, 4, 3\nБлижайший гидропост: адрес',
};
let Rosta = {
    0: 'Нет затоплений\nБлижайший гидропост: адрес',
    1: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62\nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, Роснефть, ВиТЭК\nулица Лобова: 75\nЦех 10.7\nБлижайший гидропост: адрес',
    2: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62\nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, Роснефть, ВиТЭК\nулица Лобова: 75\nЦех 10.7\nБлижайший гидропост: адрес',
    3: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62\nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, Роснефть, ВиТЭК\nулица Лобова: 75\nЦех 10.7\nБлижайший гидропост: адрес',
    4: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62\nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, Роснефть, ВиТЭК\nулица Лобова: 75\nЦех 10.7\nБлижайший гидропост: адрес',
    5: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62 \nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, Роснефть, ВиТЭК\nулица Лобова: 75\nулица Ладыгина: 1/62\nБереговая улица \nПричалы КРГС\nГСК №191\nулица Угольная база\nБлижайший гидропост: адрес',
    6: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62 \nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, Роснефть, ВиТЭК\nулица Лобова: 75\nулица Ладыгина: 1/62\nБереговая улица \nПричалы КРГС\nГСК №191\nулица Угольная база\nБлижайший гидропост: адрес',
    7: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62 \nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, Роснефть, ВиТЭК\nулица Лобова: 75, 74\nулица Ладыгина: 1/62\nБереговая улица \nПричалы КРГС\nГСК №191\nулица Угольная база\nулица Александра Невского\nзавод ЖБиК\nБлижайший гидропост: адрес',
    8: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62 \nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, 9, Роснефть, ВиТЭК\nулица Лобова: 75, 74\nулица Ладыгина: 1/62\nБереговая улица \nПричалы КРГС\nГСК №191\nГСК №185\nулица Угольная база\nулица Александра Невского\nзавод ЖБиК\nбудка охраны\nБлижайший гидропост: адрес',
    9: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62 \nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, 12, 9, Роснефть, ВиТЭК\nулица Лобова: 75, 74\nулица Ладыгина: 1/62\nБереговая улица: 2, 3\nПричалы КРГС\nГСК №191\nГСК №185\nулица Угольная база: 9к1\nулица Александра Невского: 2, 2к3, 2к2\nзавод ЖБиК\nбудка охраны\nИК 17 УФСИН по Мурм. обл\nЦерковь матроны московской\nБлижайший гидропост: адрес',
    10: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62 \nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, 12, 9, Роснефть, ВиТЭК\nулица Лобова: 75, 74, 65\nулица Ладыгина: 1/62\nБереговая улица: 1, 2, 3, 7, 9\nПричалы КРГС\nГСК №191\nГСК №185\nулица Угольная база: 9к1\nулица Александра Невского: 2, 2к3, 2к2\nзавод ЖБиК\nбудка охраны\nИК 17 УФСИН по Мурм. обл\nЦерковь матроны московской\nБлижайший гидропост: адрес',
    11: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62 \nНижне-ростинское шоссе: 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, 12, 9, Роснефть, ВиТЭК\nулица Лобова: 100, 75, 74, 65, 63, 62, 14, 2\nулица Ладыгина: 1/62\nБереговая улица: 1, 2, 3, 7, 6, 9\nПричалы КРГС\nГСК №191\nГСК №185\nГСК №193\nГСК №193А\nулица Угольная база: 9к1, 9\nулица Александра Невского: 2, 2к3, 2к2, 6, 6а, 3, 11, 11а\nзавод ЖБиК\nбудка охраны\nИК 17 УФСИН по Мурм. обл\nЦерковь матроны московской\nБлижайший гидропост: адрес',
    12: 'Причал №11, №9, Баня у залива, Олонецкий якорь\nулица Нахимова: 77, 77к1, 71, 66, 62 \nНижне-ростинское шоссе: 171, 57, 39, 39/2, 33, 33к2, 33к1, 31к3, 31к2, 31к1, 12, 9, Роснефть, ВиТЭК\nулица Лобова: 100, 75, 74, 65, 63, 62, 14, 2\nулица Ладыгина: 1/62\nБереговая улица: 1, 2, 3, 7, 6, 9, 5а\nПричалы КРГС\nГСК №191\nГСК №185\nГСК №193\nГСК №193А\nГСК №187/1\nулица Угольная база: 9к1, 9\nулица Александра Невского: 2, 2к3, 2к2, 6, 6а, 3, 11, 11а, 4, 3\nзавод ЖБиК\nбудка охраны\nИК 17 УФСИН по Мурм. обл\nЦерковь матроны московской\nАГК №109\nБлижайший гидропост: адрес',
};
let Cola = {
    0: 'Нет затоплений\nБлижайший гидропост: адрес',
    1: 'Улица Каменный Остров: 4, 4А, 4Б, 4В\nПривокзальная Улица: 9, 12/1, гаражи, 3, 25\n Улица Кривошеева: 3А, 14\nПриморская Улица: 4, 6, 8, 10, 12, 13, 24\nБлижайший гидропост: адрес',
    2: 'улица Гск: 4 \nулица Победы: 1,2,3,5,2А\nулица Поморская:1,2,1к3,1к2,1к1,3,1А\nПроспект Защитников Заполярья: 10,12,1,3,3/1,5Б,5/1,11,13\n Улица Красноармейская: 3, 4,5,6,7,9,23\nУлица Каменный Остров: 4, 4А, 4Б, 4В,6А,5,8,2,1\nПривокзальная Улица: 9, 12/1, гаражи, 3, 25, 6,5А,10\nУлица Кривошеева: 3А, 14,3,9,11,13\nПриморская Улица: 4, 6, 8, 10, 12, 13, 24,2,9\nБлижайший гидропост: адрес',
    3: 'мыс Еловый\nулица Гск: 4\nулица Зелёная Набережная: 3\nулица Победы: 1,2,3,5,2А,10,8,7\nСоветский Проспект:8,14,13,15\nулица Поморская:1,2,1к3,1к2,1к1,3,1А\nПроспект Защитников Заполярья: 10,12,1,3,3/1,5Б,5/1,11,13,14,7,9,9А,30,34,32,36,38,49\nУлица Красноармейская: 3, 4,5,6,7,9,23,31,21\nУлица Каменный Остров: 4, 4А, 4Б, 4В,6А,5,8,2,1\nПривокзальная Улица: 9, 12/1, гаражи, 3, 25, 6,5А,10,12,11\nУлица Кривошеева: 3А, 14,3,9,11,13,2,7,12\nПриморская Улица: 4, 6, 8, 10, 12, 13, 24,2,9\nБлижайший гидропост: адрес',
};
let Revda = {
    0: 'Нет затоплений\nБлижайший гидропост: адрес',
    1: 'Лесная улица: 32, 34\nБлижайший гидропост: адрес',
    2: 'Лесная улица: 32, 34,26, 28, 30, 24, 16, 14, 6А, 10, 23, 25, 27, 29\nЗаозёрная улица: 1, 2, 5, 10, 11\nУлица Северный тракт: 37, 43, 41, 19\nБлижайший гидропост: адрес',
    3: 'Лесная улица: 32, 34,26, 28, 30, 24, 16, 14, 6А, 10, 23, 25, 27, 29, 15, 11, 9, 7, 8, 21, 20\nЗаозёрная улица: 1, 2, 5, 10, 11\nУлица Северный тракт: 37, 43, 41, 19, 33\nБлижайший гидропост: адрес',
    4: 'Лесная улица: 32, 34,26, 28, 30, 24, 16, 14, 6А, 10, 23, 25, 27, 29, 15, 11, 9, 7, 8, 21, 20, 17\nЗаозёрная улица: 1, 2, 5, 10, 11\nУлица Северный тракт: 37, 43, 41, 19, 33, 18, 16, 14, 14А, 11, 6, 7, 8\nБлижайший гидропост: адрес',
    5: 'Лесная улица: 32, 34,26, 28, 30, 24, 16, 14, 6А, 10, 23, 25, 27, 29, 15, 11, 9, 7, 8, 21, 20, 17, 1, 7А,\nЗаозёрная улица: 1, 2, 5, 10, 11\nУлица Северный тракт: 37, 43, 41, 19, 33, 18, 16, 14, 14А, 11, 34, 26, 28, 24, 4, 25, 9, 6, 7, 8, 25\nСтроительный переулок:  5, 3, 7\nБлижайший гидропост: адрес',
    6: 'Лесная улица: 32, 34,26, 28, 30, 24, 16, 14, 6А, 10, 23, 25, 27, 29, 15, 11, 9, 7, 8, 21, 20, 17, 1, 7А, 3, 1А, 2\nЗаозёрная улица: 1, 2, 5, 10, 11\nУлица Северный тракт: 37, 43, 41, 19, 33, 18, 16, 14, 14А, 11, 34, 26, 28, 24, 4, 25, 9, 6, 8, 7, 16А, 10\nСтроительный переулок: 5, 3, 7, 6, 9, 8, 11, 15, 13, 14, 17\nЗаводская улица: 6А, 3, 2, 5, 15, 19, 13, 17, 8\nБлижайший гидропост: адрес',
    7: 'Лесная улица: 32, 34,26, 28, 30, 24, 16, 14, 6А, 10, 23, 25, 27, 29, 15, 11, 9, 7, 8, 21, 20, 17, 1, 7А, 3, 1А, 2\nЗаозёрная улица: 1, 2, 5, 10, 11\nУлица Северный тракт: 37, 43, 41, 19, 33, 18, 16, 14, 14А, 11, 34, 26, 28, 24, 4, 25, 9, 6, 8, 7, 16А, 10\nСтроительный переулок: 5, 3, 7, 6, 9, 8, 11, 15, 13, 14, 17\nЗаводская улица: 6А, 3, 2, 5, 15, 19, 13, 17, 8, 11, 11А, 30, 28, 18, 14, 10, 16А, 12\nБлижайший гидропост: адрес',
};
let water_level = '';
// console.log(water_level)
// for (i in Killdestroy) {
//     console.log(Killdestroy[i]);
// }

select_town.addEventListener('change', function () {
    getValue_town = this.value;
    town_text = this.options[this.selectedIndex].text;
    console.log(town_text);
    //   town_text = this.options
    //getValue_town = this.value.textContent;

    // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
    // console.log(getValue);
});

// pdfMake.createPdf(docInfo).download('name.pdf');
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('.');
}
function imageToBase64(img) {
    var canvas, ctx, dataURL, base64;
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    dataURL = canvas.toDataURL('image/png');
    base64 = dataURL.replace(/^data:image\/png;base64,/, '');
    return base64;
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function get_image() {
    leafletImage(map, function (err, canvas) {
        var img = document.createElement('img');
        var dimensions = map.getSize();
        img.width = dimensions.x;
        img.height = dimensions.y;
        img.src = canvas.toDataURL();
        mapURL = img.src;
        // console.log(mapURL)
        // console.log(mapURL_total)
        // document.getElementById('images').innerHTML = '';
        // document.getElementById('images').appendChild(img);
    });
}
function get_weather_table() {
    var day_table_text = document.getElementById('col1').textContent;
    var weather_table_text = document.getElementById('col2').textContent;
    var presure_table_text = document.getElementById('col3').textContent;
    var vlaga_table_text = document.getElementById('col4').textContent;
    var osad_table_text = document.getElementById('col5').textContent;
    var speed_table_text = document.getElementById('col6').textContent;

    //   console.log(weather_table_text)
    var d_array = [];
    var t_array = [];
    var p_array = [];
    var v_array = [];
    var o_array = [];
    var s_array = [];
    for (element in day_table_text) {
        // console.log(day_table_text[element])
        if (day_table_text[element] != ' ') {
            d_array.push(day_table_text[element]);
        }
    }

    for (element in weather_table_text) {
        // console.log(weather_table_text[element])
        if (weather_table_text[element] != ' ')
            t_array.push(weather_table_text[element]);
    }

    for (element in presure_table_text) {
        if (presure_table_text[element] != ' ') {
            p_array.push(presure_table_text[element]);
        }
    }
    for (element in vlaga_table_text) {
        if (vlaga_table_text[element] != ' ') {
            v_array.push(vlaga_table_text[element]);
        }
    }
    for (element in osad_table_text) {
        if (osad_table_text[element] != ' ') {
            o_array.push(osad_table_text[element]);
        }
    }
    for (element in speed_table_text) {
        if (speed_table_text[element] != ' ') {
            s_array.push(speed_table_text[element]);
        }
    }
    // 1 Дни недели
    // ([А-Я][а-я]{0,})

    d_joined = d_array.join('');
    d_result = d_joined.match(/([А-Я][а-я]{0,})/g);
    d_result.shift();
    //   console.log(d_result)

    // 2 Температура

    //   console.log(t_array)
    t_joined = t_array.join('');
    //   console.log(t_joined)
    t_result = t_joined.match(/(\d+°C\/\d+°C)/g);
    //   console.log(t_result)

    // 3 Давление

    p_joined = p_array.join('');
    p_result = p_joined.match(/(\d+мм.рт.ст)/g);
    //   console.log(p_result)
    // (\d+мм.рт.ст)

    // 4 Влажность

    v_joined = v_array.join('');
    v_result = v_joined.match(/(\d+%)/g);
    //   console.log(v_result)
    // (\d+%)

    // 5 Вероятность осадков

    o_joined = o_array.join('');
    o_result = o_joined.match(/(\d+%)/g);
    //   console.log(o_result)
    // (\d+%)

    // 6 Скорость ветра

    s_joined = s_array.join('');
    s_result = s_joined.match(/(\d+(\.\d+)?м\/с)/g);
    //   console.log(s_result)
    // (\d+(\.\d+)?м\/с)
}
function do_image(err, canvas) {
    var img = document.createElement('img');
    var dimensions = map.getSize();
    img.width = dimensions.x;
    img.height = dimensions.y;
    img.src = canvas.toDataURL();
    // map_div_url = document.getElementById('map_div_url')
    // map_div_url.innerText = img.src
    document.getElementById('map_div_url').firstChild.data = img.src;
    // console.log(document.getElementById("map_div_url").firstChild.data)
    // mapURL = img.src
    // map_array.push(mapURL)
}
function get_streets() {
    // if ((town_text = 'Варзуга')) {
    //     water_level = document.getElementById('high').value;
    //     mapInFolder = Varz_maps[water_level];
    //     water_streets = Varzuga[water_level];
    // } else if (town_text == 'Кильдинстрой') {
    //     water_level = document.getElementById('high').value;
    //     console.log(water_level);
    //     // mapInFolder = `http://projects.masu.edu.ru/mchs/for_report/Kildinstroy/kild${water_level}.png`;
    //     mapInFolder = Kild_maps[water_level];
    //     console.log(mapInFolder);
    //     water_streets = Killdestroy[water_level];
    //     console.log(water_streets);
    //     // IMGtoDataURL(mapInFolder, function(dataUrl) {console.log('RESULT:', dataUrl)})
    //     // let newmap = imageToBase64(mapInFolder)
    //     // console.log(newmap)
    // } else if ((town_text = 'Магнетиты')) {
    //     water_level = document.getElementById('high').value;
    //     mapInFolder = Magn_maps[water_level];
    //     water_streets = Magnetit[water_level];
    // } else if ((town_text = 'Роста')) {
    //     water_level = document.getElementById('high').value;
    //     mapInFolder = Rosta_maps[water_level];
    //     water_streets = Rosta[water_level];
    // } else if ((town_text = 'Кола')) {
    //     water_level = document.getElementById('high').value;
    //     mapInFolder = Cola_maps[water_level];
    //     water_streets = Cola[water_level];
    // } else if ((town_text = 'Ревда')) {
    //     water_level = document.getElementById('high').value;
    //     mapInFolder = Revda_maps[water_level];
    //     water_streets = Revda[water_level];
    // }
    switch (town_text) {
        case 'Варзуга':
            water_level = document.getElementById('high').value;
            mapInFolder = Varz_maps[water_level];
            water_streets = Varzuga[water_level];
            break;
        case 'Кильдинстрой':
            water_level = document.getElementById('high').value;
            mapInFolder = Kild_maps[water_level];
            water_streets = Killdestroy[water_level];
            break;
        case 'Магнетиты':
            water_level = document.getElementById('high').value;
            mapInFolder = Magn_maps[water_level];
            water_streets = Magnetit[water_level];
            break;
        case 'Роста':
            water_level = document.getElementById('high').value;
            mapInFolder = Rosta_maps[water_level];
            water_streets = Rosta[water_level];
            break;
        case 'Кола':
            water_level = document.getElementById('high').value;
            mapInFolder = Cola_maps[water_level];
            water_streets = Cola[water_level];
            break;
        case 'Ревда':
            water_level = document.getElementById('high').value;
            mapInFolder = Revda_maps[water_level];
            water_streets = Revda[water_level];
            break;
    }
}
// setInterval(get_streets, 3000);
function create_pdf() {
    // prepare_pdf()
    // leafletImage(map, do_image);
    // leafletImage(map, do_image);
    get_streets();
    console.log(water_level);
    // sleep(2000);
    console.log('ZDAROVA');
    // mapURL = document.getElementById('map_div_url').textContent;
    employee_test = document.getElementById('selected_emp').textContent;
    console.log(employee_test);
    // console.log(mapURL);
    var kek_array = map_array;
    // console.log(map_array[0])
    // console.log(kek_array[0])
    // map_joined = map_array.join('');
    // console.log(map_joined)
    get_weather_table();
    let now = new Date();
    let doc_date = formatDate(now);
    console.log(doc_date);
    // console.log(document.getElementById('map_div_url').textContent);
    // pdfMake.fonts ={
    //   Times: {
    //     normal: 'Times-Roman',
    //     bold: 'Times-Bold',
    //     italics: 'Times-Italic',
    //     bolditalics: 'Times-BoldItalic'
    //   }
    // };
    // pdfMake.vfs = font.pdfMake.vfs

    // pdfMake.fonts = {
    //     Times:{
    //         normal : ''
    //     }
    // }
    var docInfo = {
        info: {
            title: `Отчёт по зонам затопления за ${doc_date}`,
            author: '',
            subject: 'theme',
            keywords: 'kw',
        },
        content: [
            {
                text: `Отчёт по зонам затопления за ${doc_date} в н.п. ${town_text}`,
                fontSize: 14,
                alignment: 'center',
                margin: [0, 0, 0, 10],
            },
            {
                text: `Отчёт офомлен сотрудником ${employee_test}`, // в рабочем варе будет имя
                alignment: 'left',
            },

            {
                text: `Уровень затопления: ${water_level} м. \n\n`,
            },
            {
                text: `Карта подтоплений`,
                alignment: 'center',
            },
            {
                image: 'mapInFolder',
                style: 'image_alig',
                // alignment: 'center',
                // margin:20,
                width: 450,
                // snow: 'https://picsum.photos/seed/picsum/200/300'
            },
            {
                text: '\n',
            },
            {
                text: `Улицы, попавшие под затопление:\n${water_streets}`,
            },
            {
                text: 'Прогноз погоды на неделю \n',
                margin: [60, 0, 0, 20],
                alignment: 'center',
                pageBreak: 'before',
            },
            {
                table: {
                    fontSize: 12,

                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    style: 'table_style',
                    body: [
                        [
                            'День недели',
                            'Температура',
                            'Давление',
                            'Влажность',
                            'Вероястность осадков',
                            'Скорость ветра',
                        ],
                        [
                            d_result[0],
                            t_result[0],
                            p_result[0],
                            v_result[0],
                            o_result[0],
                            s_result[0],
                        ],
                        [
                            d_result[1],
                            t_result[1],
                            p_result[1],
                            v_result[1],
                            o_result[1],
                            s_result[1],
                        ],
                        [
                            d_result[2],
                            t_result[2],
                            p_result[2],
                            v_result[2],
                            o_result[2],
                            s_result[2],
                        ],
                        [
                            d_result[3],
                            t_result[3],
                            p_result[3],
                            v_result[3],
                            o_result[3],
                            s_result[3],
                        ],
                        [
                            d_result[4],
                            t_result[4],
                            p_result[4],
                            v_result[4],
                            o_result[4],
                            s_result[4],
                        ],
                        [
                            d_result[5],
                            t_result[5],
                            p_result[5],
                            v_result[5],
                            o_result[5],
                            s_result[5],
                        ],
                        [
                            d_result[6],
                            t_result[6],
                            p_result[6],
                            v_result[6],
                            o_result[6],
                            s_result[6],
                        ],
                    ],
                },
            },

            {
                text: '3D модель можно посмотреть на сайте Мониторинга ЧС:',
                margin: [0, 20, 0, 0],
            },
            {
                text: 'Ссылка на сайт',
                link: 'http://projects.masu.edu.ru/mchs',
            },
        ],
        defaultStyle: {
            // font: 'Times',
            fontSize: 12,
            alignment: 'justify',
        },
        images: {
            kek: 'https://picsum.photos/seed/picsum/200/300',
            myMap: mapURL,
            mapInFolder: mapInFolder,
            // pogoda1:"http://gis.vodinfo.ru/informer/draw/v2_71186_400_200_30_ffffff_110_8_6_H_none.png?"
        },
        styles: {
            table_style: {
                alignment: 'center',
                fontSize: 12,
            },
            image_align: {
                alignment: 'center',
            },
        },

        pageSize: 'A4',
        pageOrientation: 'portrait',
        pageMargins: [90, 60, 60, 30],
    };

    pdfMake.createPdf(docInfo).open();
}

// function do_pdf() {
//     pdfForElement('weather_table').open();
// }

// var pdf_promise = new Promise(function(resolve,reject){
// 	prepare_pdf()
// })

// var map = L.map('map', 'YOUR.MAPID').setView([38.9, -77.03], 14);
////////////////////////
////////////////////////
// function pdfForElement(id) {
//     function ParseContainer(cnt, e, p, styles) {
//         var elements = [];
//         var children = e.childNodes;
//         if (children.length != 0) {
//             for (var i = 0; i < children.length; i++)
//                 p = ParseElement(elements, children[i], p, styles);
//         }
//         if (elements.length != 0) {
//             for (var i = 0; i < elements.length; i++) cnt.push(elements[i]);
//         }
//         return p;
//     }

//     function ComputeStyle(o, styles) {
//         for (var i = 0; i < styles.length; i++) {
//             var st = styles[i].trim().toLowerCase().split(':');
//             if (st.length == 2) {
//                 switch (st[0]) {
//                     case 'font-size': {
//                         o.fontSize = parseInt(st[1]);
//                         break;
//                     }
//                     case 'text-align': {
//                         switch (st[1]) {
//                             case 'right':
//                                 o.alignment = 'right';
//                                 break;
//                             case 'center':
//                                 o.alignment = 'center';
//                                 break;
//                         }
//                         break;
//                     }
//                     case 'font-weight': {
//                         switch (st[1]) {
//                             case 'bold':
//                                 o.bold = true;
//                                 break;
//                         }
//                         break;
//                     }
//                     case 'text-decoration': {
//                         switch (st[1]) {
//                             case 'underline':
//                                 o.decoration = 'underline';
//                                 break;
//                         }
//                         break;
//                     }
//                     case 'font-style': {
//                         switch (st[1]) {
//                             case 'italic':
//                                 o.italics = true;
//                                 break;
//                         }
//                         break;
//                     }
//                 }
//             }
//         }
//     }

//     function ParseElement(cnt, e, p, styles) {
//         if (!styles) styles = [];
//         if (e.getAttribute) {
//             var nodeStyle = e.getAttribute('style');
//             if (nodeStyle) {
//                 var ns = nodeStyle.split(';');
//                 for (var k = 0; k < ns.length; k++) styles.push(ns[k]);
//             }
//         }

//         switch (e.nodeName.toLowerCase()) {
//             case '#text': {
//                 var t = {
//                     text: e.textContent.replace(/\n/g, ''),
//                 };
//                 if (styles) ComputeStyle(t, styles);
//                 p.text.push(t);
//                 break;
//             }
//             case 'b':
//             case 'strong': {
//                 //styles.push("font-weight:bold");
//                 ParseContainer(cnt, e, p, styles.concat(['font-weight:bold']));
//                 break;
//             }
//             case 'u': {
//                 //styles.push("text-decoration:underline");
//                 ParseContainer(
//                     cnt,
//                     e,
//                     p,
//                     styles.concat(['text-decoration:underline'])
//                 );
//                 break;
//             }
//             case 'i': {
//                 //styles.push("font-style:italic");
//                 ParseContainer(cnt, e, p, styles.concat(['font-style:italic']));
//                 //styles.pop();
//                 break;
//                 //cnt.push({ text: e.innerText, bold: false });
//             }
//             case 'span': {
//                 ParseContainer(cnt, e, p, styles);
//                 break;
//             }
//             case 'br': {
//                 p = CreateParagraph();
//                 cnt.push(p);
//                 break;
//             }
//             case 'table': {
//                 var t = {
//                     table: {
//                         widths: [],
//                         body: [],
//                     },
//                 };
//                 var border = e.getAttribute('border');
//                 var isBorder = false;
//                 if (border) if (parseInt(border) == 1) isBorder = true;
//                 if (!isBorder) t.layout = 'noBorders';
//                 ParseContainer(t.table.body, e, p, styles);

//                 var widths = e.getAttribute('widths');
//                 if (!widths) {
//                     if (t.table.body.length != 0) {
//                         if (t.table.body[0].length != 0)
//                             for (var k = 0; k < t.table.body[0].length; k++)
//                                 t.table.widths.push('*');
//                     }
//                 } else {
//                     var w = widths.split(',');
//                     for (var k = 0; k < w.length; k++)
//                         t.table.widths.push(w[k]);
//                 }
//                 cnt.push(t);
//                 break;
//             }
//             case 'tbody': {
//                 ParseContainer(cnt, e, p, styles);
//                 //p = CreateParagraph();
//                 break;
//             }
//             case 'tr': {
//                 var row = [];
//                 ParseContainer(row, e, p, styles);
//                 cnt.push(row);
//                 break;
//             }
//             case 'td': {
//                 p = CreateParagraph();
//                 var st = {
//                     stack: [],
//                 };
//                 st.stack.push(p);

//                 var rspan = e.getAttribute('rowspan');
//                 if (rspan) st.rowSpan = parseInt(rspan);
//                 var cspan = e.getAttribute('colspan');
//                 if (cspan) st.colSpan = parseInt(cspan);

//                 ParseContainer(st.stack, e, p, styles);
//                 cnt.push(st);
//                 break;
//             }
//             case 'div':
//             case 'p': {
//                 p = CreateParagraph();
//                 var st = {
//                     stack: [],
//                 };
//                 st.stack.push(p);
//                 ComputeStyle(st, styles);
//                 ParseContainer(st.stack, e, p);

//                 cnt.push(st);
//                 break;
//             }
//             default: {
//                 console.log('Parsing for node ' + e.nodeName + ' not found');
//                 break;
//             }
//         }
//         return p;
//     }

//     function ParseHtml(cnt, htmlText) {
//         var html = $(htmlText.replace(/\t/g, '').replace(/\n/g, ''));
//         var p = CreateParagraph();
//         for (var i = 0; i < html.length; i++) ParseElement(cnt, html.get(i), p);
//     }

//     function CreateParagraph() {
//         var p = {
//             text: [],
//         };
//         return p;
//     }
//     content = [
//         {
//             text: getValue_town,
//         },
//         {
//             text: 'Отчёт по зонам затопления',
//             fontSize: 14,
//             alignment: 'center',
//         },
//         {
//             text: 'Отчёт офомлен сотрудником ' + employee_test, // в рабочем варе будет имя
//             alignment: 'right',
//         },
//         {
//             text: 'Карта подтоплений населённого пункта ' + town_text, //getValue_town
//         },
//         {
//             //
//         },
//         {
//             text: 'Прогноз погоды \n',
//             // image:"pogoda1"
//         },
//         {
//             table: {
//                 widths: ['*', '*', '*'],
//                 style: 'table_style',
//                 body: [
//                     [jq_time, 'Column 2', 'Column 3'],
//                     ['День', 'Another one here', 'OK?'],
//                     ['День', 'x', 'x'],
//                     ['День', 'x', 'x'],
//                     ['День', 'x', 'x'],
//                     ['День', 'x', 'x'],
//                     ['День', 'x', 'x'],
//                 ],
//             },
//         },
//         // {
//         //     text: pogoda_table
//         // },
//         {
//             text: '3D модель можно по смотреть по ссылке:',
//             margin: [0, 20, 0, 0],
//         },
//         {
//             text: 'ссылка',
//             link: 'https://www.google.ru/',
//         },
//     ];
//     ParseHtml(content, document.getElementById(id).outerHTML);
//     return pdfMake.createPdf({
//         info: {
//             title: 'Отчёт по зонам затопления',
//             author: '',
//             subject: 'theme',
//             keywords: 'kw',
//         },
//         content: content,
//         images: {
//             kek: 'https://picsum.photos/seed/picsum/200/300',
//             // pogoda1:"http://gis.vodinfo.ru/informer/draw/v2_71186_400_200_30_ffffff_110_8_6_H_none.png?"
//             // weather_canvas:
//         },
//         styles: {
//             table_style: {
//                 alignment: 'center',
//             },
//         },

//         pageSize: 'A4',
//         pageOrientation: 'portrait',
//         pageMargins: [50, 50, 30, 60],
//     });
// }
