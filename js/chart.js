var options = {
  series: [{
  name: 'series1',
  data: [100,300,10,400,100,50,-10]
}, {
  name: 'series2',
  data: [65,-10,10,80,300,100,-20]
}],
  chart: {
  height:232,
  type: 'area'
},
dataLabels: {
  enabled:true
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
colors:['#6e6eff','#ff6b6b']
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();