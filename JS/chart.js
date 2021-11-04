//line chart

var ctx = document.getElementById('line-chart');

var selectedTime = document.querySelector('.selected-time');



document.addEventListener('click', (e) => {
    const trafficNav = document.querySelector('.times');
    const trafficNavLink = trafficNav.children;
    for (let i = 0; i < trafficNavLink.length; i++){
        if (e.target === trafficNavLink[i]){
            const previousSelection = document.querySelector('.selected-time');
            previousSelection.className = 'traffic-nav-link';
            e.target.className = 'selected-time';
        } 
    }
});





var lineChartData = {
    hourlyX: [510, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2100, 1500, 2500],
    hourlyY: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],

    dailyX: [540, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2100, 1500, 2500],
    dailyY: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],

    weeklyX: [580, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2100, 1500, 2500],
    weeklyY: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],

    monthlyX: [2000, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2100, 1500, 2500],
    monthlyY: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',]
};



//hourly data
var trafficHourly = lineChartData.hourlyX;
var hours = lineChartData.hourlyY;

//daily data
var trafficDaily = lineChartData.dailyX;
var daysDaily = lineChartData.dailyY;

//weekly data
var trafficWeekly = lineChartData.weeklyX;
var weeksWeekly = lineChartData.weeklyY;

//monthly data
var trafficMonthly = lineChartData.monthlyX;
var monthsMonthly = lineChartData.monthlyY;


var myLineChart = new Chart(ctx, {
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
            data: trafficHourly,
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

var myBarChart = new Chart(ctx, {
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

var myPieChart = new Chart(ctx, {
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