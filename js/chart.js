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
   // backgroundColor: 'white',
    borderColor: 'yellow',
      borderwidth: 2
    },
    {
      label: '#Alfred University',
      data: [41, 97, 96, 97, 48], // works
       borderColor: 'black',
     //  backgroundColor: 'white',
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
               
              //   backgroundColor: [
              //     'rgba(255, 99, 132, 0.2)',
              //     'rgba(54, 162, 235, 0.2)',
              //     'rgba(255, 206, 86, 0.2)',
              //     'rgba(75, 192, 192, 0.2)',
              //     'rgba(153, 102, 255, 0.2)'
              // ],
                borderColor:'black',
                borderWidth: 2
                },
                // {
                //   label: '#Airpump Andrew',
                //   data: [41, 97, 96, 97, 48], // works
                 
                // //   backgroundColor: [
                // //     'rgba(255, 99, 132, 0.2)',
                // //     'rgba(54, 162, 235, 0.2)',
                // //     'rgba(255, 206, 86, 0.2)',
                // //     'rgba(75, 192, 192, 0.2)',
                // //     'rgba(153, 102, 255, 0.2)'
                // // ],
                //   borderColor: 'brown',
                //   borderWidth: 2
                //   },
                //   {
                //     label: 'Art Carnivore',
                //     data: [44, 1, 80, 60, 40], // works
                   
                //   //   backgroundColor: [
                //   //     'rgba(255, 99, 132, 0.2)',
                //   //     'rgba(54, 162, 235, 0.2)',
                //   //     'rgba(255, 206, 86, 0.2)',
                //   //     'rgba(75, 192, 192, 0.2)',
                //   //     'rgba(153, 102, 255, 0.2)'
                //   // ],
                //     borderColor: 'Purple',
                //     borderWidth: 2
                //     },
                //     {
                //       label: 'Dandy Jim',
                //       data: [47, 1, 23, 36, 45], // works
                     
                //     //   backgroundColor: [
                //     //     'rgba(255, 99, 132, 0.2)',
                //     //     'rgba(54, 162, 235, 0.2)',
                //     //     'rgba(255, 206, 86, 0.2)',
                //     //     'rgba(75, 192, 192, 0.2)',
                //     //     'rgba(153, 102, 255, 0.2)'
                //     // ],
                //       borderColor: 'brown',
                //       borderWidth: 2
                //       },
                //       {
                //         label: 'Dandy Jim',
                //         data: [41, 97, 96, 97, 48], // works
                       
                //       //   backgroundColor: [
                //       //     'rgba(255, 99, 132, 0.2)',
                //       //     'rgba(54, 162, 235, 0.2)',
                //       //     'rgba(255, 206, 86, 0.2)',
                //       //     'rgba(75, 192, 192, 0.2)',
                //       //     'rgba(153, 102, 255, 0.2)'
                //       // ],
                //         borderColor: 'lightBlue',
                //         borderWidth: 2
                //         },
                //         {
                //           label: 'Elephant IMA',
                //           data: [45, 01, 78, 88, 77], // works
                         
                //         //   backgroundColor: [
                //         //     'rgba(255, 99, 132, 0.2)',
                //         //     'rgba(54, 162, 235, 0.2)',
                //         //     'rgba(255, 206, 86, 0.2)',
                //         //     'rgba(75, 192, 192, 0.2)',
                //         //     'rgba(153, 102, 255, 0.2)'
                //         // ],
                //           borderColor: 'darkblue',
                //           borderWidth: 2
                //           },
                //           {
                //             label: 'Franklyn Benny',
                //             data: [50, 01, 90, 80, 90], // works
                           
                //           //   backgroundColor: [
                //           //     'rgba(255, 99, 132, 0.2)',
                //           //     'rgba(54, 162, 235, 0.2)',
                //           //     'rgba(255, 206, 86, 0.2)',
                //           //     'rgba(75, 192, 192, 0.2)',
                //           //     'rgba(153, 102, 255, 0.2)'
                //           // ],
                //             borderColor: 'DarkRed',
                //             borderWidth: 2
                //             },
                //             {
                //               label: 'George Boy',
                //               data: [40, 01, 11, -1, 4], // works
                             
                //             //   backgroundColor: [
                //             //     'rgba(255, 99, 132, 0.2)',
                //             //     'rgba(54, 162, 235, 0.2)',
                //             //     'rgba(255, 206, 86, 0.2)',
                //             //     'rgba(75, 192, 192, 0.2)',
                //             //     'rgba(153, 102, 255, 0.2)'
                //             // ],
                //               borderColor: 'Darkblue',
                //               borderWidth: 1
                //               },
                            ], 

}; 
    
 var aaa = {     //checking
    labels: ["Test1", "Test2", "Test3", "Test4", "Final"],
    datasets: [{
      label: '# Grade of Alfred',
    data: [41, 97, 96, 97, 48], // works
     
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
    ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 2
    },
    
  ]
  };
  var multiLineData = {
    labels: ["Test1", "Test2", "Test3", "Test4", "Test5"],
    datasets: [{
        label: 'Dataset 1',
        data: [30, 40, 50, 60, 70],
        borderColor: [
          '#e389'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Dataset 2',
        data: [50, 30, 80, 4, 3,1],
        data: [60, 40, 67, 5, 2],
        borderColor: [
          '#ede300'
          
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Dataset 3',
        data: [15, 10, 21, 32, 12, 33],
        borderColor: [
          '#f44252'
        ],
        borderWidth: 2,
        fill: false
      }
    ]
  };
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };
//   var DummyData = {
//     labels = ["Test1", "Test2", "Test3", "Test4", "Test5"],

//     datasets: [
//       label = ["First name", "Last name"], 
//       data = [],

//     ],
    
    
//     [
//     {
//         "Last name": "Alfalfa",
//         "First name": "Aloysius",
//         "SSN": "123-45-6789",
//         "Test1": "40.0",
//         "Test2": "90.0",
//         "Test3": "100.0",
//         "Test4": "83.0",
//         "Final": "49.0",
//         "Grade": "D-"
//     },
//     {
//         "Last name": "Alfred",
//         "First name": "University",
//         "SSN": "123-12-1234",
//         "Test1": "41.0",
//         "Test2": "97.0",
//         "Test3": "96.0",
//         "Test4": "97.0",
//         "Final": "48.0",
//         "Grade": "D+"
//     },
//     {
//         "Last name": "Gerty",
//         "First name": "Gramma",
//         "SSN": "567-89-0123",
//         "Test1": "41.0",
//         "Test2": "80.0",
//         "Test3": "60.0",
//         "Test4": "40.0",
//         "Final": "44.0",
//         "Grade": "C"
//     },
//     {
//         "Last name": "Android",
//         "First name": "Electric",
//         "SSN": "087-65-4321",
//         "Test1": "42.0",
//         "Test2": "23.0",
//         "Test3": "36.0",
//         "Test4": "45.0",
//         "Final": "47.0",
//         "Grade": "B-"
//     },
//     {
//         "Last name": "Bumpkin",
//         "First name": "Fred",
//         "SSN": "456-78-9012",
//         "Test1": "43.0",
//         "Test2": "78.0",
//         "Test3": "88.0",
//         "Test4": "77.0",
//         "Final": "45.0",
//         "Grade": "A-"
//     },
//     {
//         "Last name": "Rubble",
//         "First name": "Betty",
//         "SSN": "234-56-7890",
//         "Test1": "44.0",
//         "Test2": "90.0",
//         "Test3": "80.0",
//         "Test4": "90.0",
//         "Final": "46.0",
//         "Grade": "C-"
//     },
//     {
//         "Last name": "Noshow",
//         "First name": "Cecil",
//         "SSN": "345-67-8901",
//         "Test1": "45.0",
//         "Test2": "11.0",
//         "Test3": "-1.0",
//         "Test4": "4.0",
//         "Final": "43.0",
//         "Grade": "F"
//     },
//     {
//         "Last name": "Buff",
//         "First name": "Bif",
//         "SSN": "632-79-9939",
//         "Test1": "46.0",
//         "Test2": "20.0",
//         "Test3": "30.0",
//         "Test4": "40.0",
//         "Final": "50.0",
//         "Grade": "B+"
//     },
//     {
//         "Last name": "Airpump",
//         "First name": "Andrew",
//         "SSN": "223-45-6789",
//         "Test1": "49.0      1.0",
//         "Test2": "90.0",
//         "Test3": "100.0",
//         "Test4": "83.0",
//         "Final": "A"
//     },
//     {
//         "Last name": "Backus",
//         "First name": "Jim",
//         "SSN": "143-12-1234",
//         "Test1": "48.0",
//         "Test2": "1.0",
//         "Test3": "97.0",
//         "Test4": "96.0",
//         "Final": "97.0",
//         "Grade": "A+"
//     },
//     {
//         "Last name": "Carnivore",
//         "First name": "Art",
//         "SSN": "565-89-0123",
//         "Test1": "44.0",
//         "Test2": "1.0",
//         "Test3": "80.0",
//         "Test4": "60.0",
//         "Final": "40.0",
//         "Grade": "D+"
//     },
//     {
//         "Last name": "Dandy",
//         "First name": "Jim",
//         "SSN": "087-75-4321",
//         "Test1": "47.0",
//         "Test2": "1.0",
//         "Test3": "23.0",
//         "Test4": "36.0",
//         "Final": "45.0",
//         "Grade": "C+"
//     },
//     {
//         "Last name": "Elephant",
//         "First name": "Ima",
//         "SSN": "456-71-9012",
//         "Test1": "45.0",
//         "Test2": "1.0",
//         "Test3": "78.0",
//         "Test4": "88.0",
//         "Final": "77.0",
//         "Grade": "B-"
//     },
//     {
//         "Last name": "Franklin",
//         "First name": "Benny",
//         "SSN": "234-56-2890",
//         "Test1": "50.0",
//         "Test2": "1.0",
//         "Test3": "90.0",
//         "Test4": "80.0",
//         "Final": "90.0",
//         "Grade": "B-"
//     },
//     {
//         "Last name": "George",
//         "First name": "Boy",
//         "SSN": "345-67-3901",
//         "Test1": "40.0",
//         "Test2": "1.0",
//         "Test3": "11.0",
//         "Test4": "-1.0",
//         "Final": "4.0",
//         "Grade": "B"
//     },
//     {
//         "Last name": "Heffalump",
//         "First name": "Harvey",
//         "SSN": "632-79-9439",
//         "Test1": "30.0",
//         "Test2": "1.0",
//         "Test3": "20.0",
//         "Test4": "30.0",
//         "Final": "40.0",
//         "Grade": "C"
//     }
// ]





  // var doughnutPieData = {
  //   datasets: [{
  //     data: [40, 90, 100, 83, 49],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.5)',
  //       'rgba(54, 162, 235, 0.5)',
  //       'rgba(255, 206, 86, 0.5)',
  //       'rgba(75, 192, 192, 0.5)',
  //       'rgba(153, 102, 255, 0.5)',
  //       'rgba(255, 159, 64, 0.5)'
  //     ],
  //     borderColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //   }],

  //   // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Test 1',
      'Test 2',
      'Test 3',
      'Test 4',
      'Test 5',
    ]
  // };
  // var doughnutPieOptions = {
  //   responsive: true,
  //   animation: {
  //     animateScale: true,
  //     animateRotate: true
  //   }
  // };
  // var browserTrafficData = {
  //   datasets: [{
  //     data: [20, 20, 10, 30, 20],
  //     backgroundColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(75, 192, 117, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //     borderColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(75, 192, 117, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //   }],

  //   // These labels appear in the legend and in the tooltips when hovering different arcs
  //   labels: [
  //     'Firefox',
  //     'Safari',
  //     'Explorer',
  //     'Chrome',
  //     'Opera Mini'
  //   ]
  // };
  // var areaData = {
  //   labels: ["Test1", "Test2", "Test3", "Test4", "Final"],
  //   datasets: [{
  //     label: 'grade of Alfred',
  //     data: [41, 97, 96, 47, 48],
  //     backgroundColor: [
  //       'CMYK(68, 3, 0, 0)',
  //       'CMYK(68, 3, 0, 0)',
  //       'CMYK(68, 3, 0, 0)',
  //       'CMYK(68, 3, 0, 0)',
  //       'CMYK(68, 3, 0, 0)',
        
  //     ],
  //     borderColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //     borderWidth: 1,
  //     fill: 'origin', // 0: fill to 'origin'
  //     fill: '+2', // 1: fill to dataset 3
  //     fill: 1, // 2: fill to dataset 1
  //     fill: false, // 3: no fill
  //     fill: '-2' // 4: fill to dataset 2
  //   }
  // ]
  // };

  // var areaOptions = {
  //   plugins: {
  //     filler: {
  //       propagate: true
  //     }
  //   }
  // }

  var multiAreaData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: 'Facebook',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
        borderColor: ['abgr(255, 99, 132, 0.5)'],
        backgroundColor: ['abgr(255, 99, 132, 0.5)'],
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Twitter',
        data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
        borderColor: ['rgba(54, 162, 235, 0.5)'],
        backgroundColor: ['rgba(54, 162, 235, 0.5)'],
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Linkedin',
        data: [6, 14, 16, 20, 12, 18, 15, 12, 17, 19, 15, 11],
        borderColor: ['rgba(255, 206, 86, 0.5)'],
        backgroundColor: ['rgba(255, 206, 86, 0.5)'],
        borderWidth: 1,
        fill: true
      }
    ]
  };

  var multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  // var scatterChartData = {
  //   datasets: [{
  //       label: 'First Dataset',
  //       data: [{
  //           x: -10,
  //           y: 0
  //         },
  //         {
  //           x: 0,
  //           y: 3
  //         },
  //         {
  //           x: -25,
  //           y: 5
  //         },
  //         {
  //           x: 40,
  //           y: 5
  //         }
  //       ],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)'
  //       ],
  //       borderWidth: 1
  //     },
  //     {
  //       label: 'Second Dataset',
  //       data: [{
  //           x: 10,
  //           y: 5
  //         },
  //         {
  //           x: 20,
  //           y: -30
  //         },
  //         {
  //           x: -25,
  //           y: 15
  //         },
  //         {
  //           x: -10,
  //           y: 5
  //         }
  //       ],
  //       backgroundColor: [
  //         'rgba(54, 162, 235, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(54, 162, 235, 1)',
  //       ],
  //       borderWidth: 1
  //     }
  //   ]
  // }

  // var scatterChartOptions = {
  //   scales: {
  //     xAxes: [{
  //       type: 'linear',
  //       position: 'bottom'
  //     }]
  //   }
  // }
  // Get context with jQuery - using jQuery's .get() method.
  // if ($("#barChart").length) {
  //   var barChartCanvas = $("#barChart").get(0).getContext("2d");
  //   // This will get the first returned node in the jQuery collection.
  //   var barChart = new Chart(barChartCanvas, {
  //     type: 'line',
  //     data: data,
  //     options: options
  //   });
  // }

  if ($("#lineChart").length) {
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      fontColor: 'black',
      data: data,
      options: options
    });
  }

  // if ($("#linechart-multi").length) {
  //   var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
  //   var lineChart = new Chart(multiLineCanvas, {
  //     type: 'line',
  //     data: multiLineData,
  //     options: options
  //   });
  // }

  // if ($("#areachart-multi").length) {
  //   var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
  //   var multiAreaChart = new Chart(multiAreaCanvas, {
  //     type: 'line',
  //     data: multiAreaData,
  //     options: multiAreaOptions
  //   });
  // }

  // if ($("#doughnutChart").length) {
  //   var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
  //   var doughnutChart = new Chart(doughnutChartCanvas, {
  //     type: 'doughnut',
  //     data: doughnutPieData,
  //     options: doughnutPieOptions
  //   });
  // }

  if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }

  // if ($("#areaChart").length) {
  //   var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
  //   var areaChart = new Chart(areaChartCanvas, {
  //     type: 'line',
  //     data: areaData,
  //     options: areaOptions
  //   });
  // }

  // if ($("#scatterChart").length) {
  //   var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
  //   var scatterChart = new Chart(scatterChartCanvas, {
  //     type: 'scatter',
  //     data: scatterChartData,
  //     options: scatterChartOptions
  //   });
  // }

  // if ($("#browserTrafficChart").length) {
  //   var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
  //   var doughnutChart = new Chart(doughnutChartCanvas, {
  //     type: 'doughnut',
  //     data: browserTrafficData,
  //     options: doughnutPieOptions
  //   });
  // }
});