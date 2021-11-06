// Updating data function

function updateChart(chart, dataX, dataY, selectedTime) {
    const barChartLabel = document.querySelector('.bar-chart-label');
    chart.data.datasets[0].data = dataX;
    chart.data.labels = dataY;
    chart.update();
    barChartLabel.innerHTML = `${selectedTime.innerHTML.toUpperCase()} TRAFFIC`;
}


//line chart

var ctx = document.getElementById('line-chart');

var lineChartData = {

    lineChartX: [510, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2100, 1500, 2500],
    lineChartY: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],

    hourlyX: [510, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2100, 1500, 2500],
    hourlyY: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],

    dailyX: [4080, 3500, 4000, 16000, 12000, 1700, 6800, 9000, 7800, 1500, 1000],
    dailyY: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',],

    weeklyX: [20040, 12560, 25000, 30500, 8500, 24000, 14000, 10300, 9100, 1000, 8000],
    weeklyY: ['31-6', '7-13', '14-20', '21-27', '28-4', '5-11', '12-18', '19-25', '26-1', '2-8', '9-15',],

    monthlyX: [47143, 27628, 22013, 41124, 36552, 32264, 46996, 19674, 21928, 10216, 23291],
    monthlyY: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',]
};


var myLineChart = new Chart(ctx, {
    options: {
        responsive: true,
        aspectRatio: 3,
        scales: {
            y:{
                beginAtZero: true,
                display: false
            }
        }
    },
    type: 'line',
    data: {
        labels: lineChartData.lineChartY,
        datasets: [
        {
            label: 'Github Stars',
            data: lineChartData.lineChartX,
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

document.addEventListener('click', (e) => {
    const trafficNav = document.querySelector('.times');
    const trafficNavLink = trafficNav.children;
    for (let i = 0; i < trafficNavLink.length; i++){
        if (e.target === trafficNavLink[i]){
            const previousSelection = document.querySelector('.selected-time');
            previousSelection.classList.remove('selected-time');
            e.target.classList.add('selected-time');
        } 
    }

    var selectedTime = document.querySelector('.selected-time');

    if (selectedTime.className === 'hourly traffic-nav-link selected-time') {
        updateChart(myLineChart, lineChartData.hourlyX, lineChartData.hourlyY, selectedTime);
        updateChart(myBarChart, lineChartData.hourlyX, lineChartData.hourlyY, selectedTime);
        //updateChart(myPChart, lineChartData.hourlyX, lineChartData.hourlyY);
    } else if (selectedTime.className === 'daily traffic-nav-link selected-time') {
        updateChart(myLineChart, lineChartData.dailyX, lineChartData.dailyY, selectedTime);
        updateChart(myBarChart, lineChartData.dailyX, lineChartData.dailyY, selectedTime);
        //updateChart(myLineChart, lineChartData.dailyX, lineChartData.dailyY);
    } else if (selectedTime.className === 'weekly traffic-nav-link selected-time') {
        updateChart(myLineChart, lineChartData.weeklyX, lineChartData.weeklyY, selectedTime);
        updateChart(myBarChart, lineChartData.weeklyX, lineChartData.weeklyY, selectedTime);
        //updateChart(myLineChart, lineChartData.weeklyX, lineChartData.weeklyY);
    } else if (selectedTime.className === 'monthly traffic-nav-link selected-time') {
        updateChart(myLineChart, lineChartData.monthlyX, lineChartData.monthlyY, selectedTime);
        updateChart(myBarChart, lineChartData.monthlyX, lineChartData.monthlyY, selectedTime);
        //updateChart(myLineChart, lineChartData.monthlyX, lineChartData.monthlyY);
    }
});


/* Updating chart based on selected range attempt 1:

document.addEventListener('click', (e) => {
    const trafficNav = document.querySelector('.times');
    const trafficNavLink = trafficNav.children;
    for (let i = 0; i < trafficNavLink.length; i++){
        if (e.target === trafficNavLink[i]){
            const previousSelection = document.querySelector('.selected-time');
            previousSelection.classList.remove('selected-time');
            e.target.classList.add('selected-time');
        } 
    }

    var selectedTime = document.querySelector('.selected-time');


    if (selectedTime.className === 'hourly traffic-nav-link selected-time') {
        console.log('hourly selected');

        myLineChart.data.labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',];
        myLineChart.data.datasets[0].data = trafficHourly;
        console.log(myLineChart.data.labels);

    } else if (selectedTime.className === 'daily traffic-nav-link selected-time') {
        console.log('daily selected');

        myLineChart.data.labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',];
        myLineChart.data.datasets[0].data = trafficDaily;
        console.log(myLineChart.data.labels);

    } else if (selectedTime.className === 'weekly traffic-nav-link selected-time') {
        console.log('weekly selected');

        myLineChart.data.labels = ['31-6', '7-13', '14-20', '21-27', '28-4', '5-11', '12-18', '19-25', '26-1', '2-8', '9-15',];
        myLineChart.data.datasets[0].data = trafficWeekly; 
        console.log(myLineChart.data.labels);

    } else if (selectedTime.className === 'monthly traffic-nav-link selected-time') {
        console.log('monthly selected');

        myLineChart.data.labels = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',];
        myLineChart.data.datasets[0].data = trafficMonthly; 
        console.log(myLineChart.data.labels);

    }
});

*/

