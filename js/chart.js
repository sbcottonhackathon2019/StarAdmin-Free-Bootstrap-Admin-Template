
$(function() {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict';
  var data = {
    labels: ["Test1", "Test2", "Test3", "Test4", "Final"],
    datasets: [{
      label: '#Anolysis AlfaAlfa',
    data: [40, 90, 100, 83, 49], // works
    borderColor: 'yellow',
      borderwidth: 2
    },
    {
      label: '#Alfred University',
      data: [41, 97, 96, 97, 48], // works
       borderColor: 'black',
       borderWidth: 2
      },
      {
        label: '#Gerty Gramma',
        data: [41, 48, 60, 40, 44], // works
       borderColor: 'darkgreen',
       //backgroundColor: 'white',
      borderWidth: 2
        },
        {
          label: '#Anroid Electric',
          data: [42, 23, 36, 45, 47], // works
         //backgroundColor: white,
         borderColor: 'red',
          borderWidth: 2
          },
          {
            label: '#Bumpkin Fred',
            data: [43, 78, 88, 77, 45], // works
           //backgroundColor: 'white',
           borderColor: 'purple',
            borderWidth: 2
            },
            {
              label: '#Rubble Betty',
              data: [44, 90, 80, 90, 46], // works
             //backgroundColor: 'white',
             borderColor: 'Orange',
           
              borderWidth: 2
              },
              {
                label: 'Buff Bif',
                data: [46, 20, 30, 40,50 ], // works
                borderColor:'black',
                borderWidth: 2
                }
], 

}; 
    
new Chart(document.getElementById("pie-chart"), { 
    type: 'pie',
    data: {
      labels: ["Test1", "Test2", "Test3", "Test4", "Final"],
      datasets: [{
        label: "Test Scores",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],

        data: [40, 90, 100, 83, 49],
        
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Test Score of AlfaAlfa in Pie-Chart',
      }
    }
});

new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Test1", "Test2", "Test3", "Test4", "Final"],
    datasets: [
      {
        label: "Test Score of Gerty",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [41, 80, 60, 40, 44]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'test score 0f Gerty'
    }
  }
});

new Chart(document.getElementById("polar-chart"), {
  type: 'polarArea',
  data: {
    labels: ["Test1", "Test2", "Test3", "Test4", "Final"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [42, 23, 36, 45, 47]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Test Score of Anroid'
    }
  }
});

new Chart(document.getElementById("bar-chart-horizontal"), {
  type: 'horizontalBar',
  data: {
    labels: ["Test1", "Test2", "Test3", "Test4", "Final"],
    datasets: [
      {
        label: "Test Score",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [43, 78, 88, 77, 45]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Test Score of Bumpkin in Horizontal bar chart'
    }
  }
});


  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: true,
      position: "fix"
    },
    elements: {
      point: {
        radius: 2
      }
    }
  }
  



  if ($("#lineChart").length) {
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      fontColor: 'black',
      data: data,
      options: options
    });
  }

  if ($("#linechart-multi").length) {
    var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData,
      options: options
    });
  }

  if ($("#areachart-multi").length) {
    var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData,
      options: multiAreaOptions
    });
  }

  if ($("#doughnutChart").length) {
    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }

  if ($("#pieChart").length) {
    var pieChart= $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChart, {
      type: 'pie',
      data: data,
      options: doughnutPieOptions,
    });
  }

  if ($("#areaChart").length) {
    var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: areaData,
      options: areaOptions
    });
  }

  if ($("#scatterChart").length) {
    var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
    var scatterChart = new Chart(scatterChartCanvas, {
      type: 'scatter',
      data: scatterChartData,
      options: scatterChartOptions
    });
  }

  if ($("#browserTrafficChart").length) {
    var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: browserTrafficData,
      options: doughnutPieOptions
    });
  }
});