function AyKiralananAracinKMChartData() {

   
   
    $.ajax({
        type: "GET",

        url: "http://localhost:54887/api/rapor/aygunkm",
        contentType: "application/json",
        dataType: "json",
        success: function (result) {

            var data = [];
            var tarih = [];
            var araba = [];
            Object.keys(result).forEach(function (element) {

                araba.push(result[element].AracAdi);
                data.push(result[element].YapilanKM);
                tarih.push(result[element].Veris_Tarihi);

            });
       
            AyKiralananAracinKMChart(data, tarih,araba);
        },
        error: function (err) {
            debugger;
            alert("hata");
        }
    });
}

$("#kiralananaraclarinkm").show(
    function () {
        
        AyKiralananAracinKMChartData();
    }
);



function AyKiralananAracinKMChart(data, tarih, araba) {
    var ctx = document.getElementById("kiralananaraclarinkm").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
     
    
        data: {
            labels: araba,
            datasets: [
                {
                   label:'Kiralanan Araçların 1 Aylık Yaptığı Km',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill:false

                }
           

            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            return float23dollar(value);
                        }
                    }
                }]
            },
        }
    });
}

function float23dollar(value) {
    return "KM " + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}





function getChartData() {



    $.ajax({
        type: "GET",

        url: "http://localhost:54887/api/rapor/gunkiraort",
        contentType: "application/json",
        dataType: "json",
        success: function (result) {

            var data = [];
            var ay = [];

            Object.keys(result).forEach(function (element) {

                ay.push(result[element].Gun);
                data.push(result[element].GunOrtKiralananarac);

            });

            renderChart(data, ay);
        },
        error: function (err) {
            debugger;
            alert("hata");
        }
    });
}

$("#myChart").show(
    function () {

        getChartData();
    }
);



function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'GunlukKiralananOrtalamaAracSayisi',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)'
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            return float2dollar(value);
                        }
                    }
                }]
            },
        }
    });
}

function float2dollar(value) {
    return " " + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}



function AylikGelir() {



    $.ajax({
        type: "GET",

        url: "http://localhost:54887/api/rapor/aylikgelir",
        contentType: "application/json",
        dataType: "json",
        success: function (result) {

            var data = [];
            var ay = [];

            Object.keys(result).forEach(function (element) {

                ay.push(result[element].Ay);
                data.push(result[element].AylikKazanc);
                console.log(result[element].AylikKazanc);
            });

            Aylikgelirchart(data, ay);
        },
        error: function (err) {
            debugger;
            alert("hata");
        }
    });
}

$("#gelirchart").show(
    function () {

        AylikGelir();
    }
);



function Aylikgelirchart(data, labels) {
    var ctx = document.getElementById("gelirchart").getContext('2d');
    var gelirchart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Aylık Kazanç',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)'
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            return floatgelir(value);
                        }
                    }
                }]
            },
        }
    });
}

function floatgelir(value) {
    return "TL " + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}



function GunlukKmAsanlarOrtChartData() {



    $.ajax({
        type: "GET",

        url: "http://localhost:54887/api/rapor/kmasan",
        contentType: "application/json",
        dataType: "json",
        success: function (result) {

            var data = [];
            var tarih = [];

            Object.keys(result).forEach(function (element) {


                data.push(result[element].Ortalama);
                tarih.push(result[element].Tarih);

            });

            GunlukKmAsanlarOrtRenderChart(data, tarih);
        },
        error: function (err) {
            debugger;
            alert("hata");
        }
    });
}

$("#gunlukkmasanarac").show(
    function () {

        GunlukKmAsanlarOrtChartData();
    }
);



function GunlukKmAsanlarOrtRenderChart(data, tarih) {
    var ctx = document.getElementById("gunlukkmasanarac").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',


        data: {
            labels: tarih,
            datasets: [
                {
                    label: 'Günlük Km Aşan Araçların Ortalamaları',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: false

                }


            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            return floattl(value);
                        }
                    }
                }]
            },
        }
    });
}

function floattl(value) {
    return "Ort " + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}











