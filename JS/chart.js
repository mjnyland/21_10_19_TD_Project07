//line chart

var ctx = document.getElementById('line-chart');

//hourly data
var stars = [510, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2100, 1500, 2500];
var hours = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',];

//daily data
var trafficDaily = [510, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2100, 1500, 2500];
var daysDaily = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',];

//weekly data
var trafficWeekly = [510, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2100, 1500, 2500];
var weeksWeekly = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',];

//monthly data
var trafficMonthly = [510, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2100, 1500, 2500];
var monthsMonthly = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',];

var myChart = new Chart(ctx, {
    options: {
        responsive: true,
        aspectRatio: 1,
        scales: {
            y:{
                beginAtZero: true,
                display: false
            }
        }
    },
    type: 'line',
    data: {
        labels: hours,
        datasets: [
        {
            label: 'Github Stars',
            data: stars,
            backgroundColor: "rgba(116, 119, 191, .4)",
            borderColor: "rgba(77, 76, 114, .4)",
            borderWidth: 1,
            lineTension: .35,
            fill: true
        }]
    },
})



//bar chart

var ctx = document.getElementById('bar-chart');

var stars = [75, 110, 175, 120, 220, 200, 100];
var days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

var myChart = new Chart(ctx, {
    options: {
        responsive: true,
        aspectRatio: 1,
        scales: {
            y:{
                beginAtZero: true,
                display: false
            }
        }
    },
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            label: 'Github Stars',
            data: stars,
            backgroundColor: "rgb(116, 119, 191)",
            borderColor: "rgb(77, 76, 114)",
            borderWidth: 1
        }]
    },
})



//pie chart

var ctx = document.getElementById('pie-chart');

var stars = [75, 12.5, 12.5];
var frameworks = ['Desktop', 'Tablet', 'Phones'];

var myChart = new Chart(ctx, {
 options: {
     responsive: true,
     aspectRatio: 1,
     scales: {
         y:{
             beginAtZero: true,
             display: false
         }
     }
 },
 type: 'doughnut',
 data: {
    labels: frameworks,
    datasets: [{
        label: 'Github Stars',
        data: stars,
        backgroundColor: [
            "rgba(116, 119, 191, 1)",
            "rgba(81, 182, 200, 1)",
            "rgba(129, 201, 143, 1)"
        ],
        borderColor: [
            "rgba(116, 119, 191, 1)",
            "rgba(81, 182, 200, 1)",
            "rgba(129, 201, 143, 1)"
          ],
        borderWidth: 1,
    }]
 },
})