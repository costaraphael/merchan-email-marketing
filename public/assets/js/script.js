 function validation() {
     $().acknowledgeinput();
     $('#awesomeForm').isHappy({
         fields: {
             // reference the field you're talking about, probably by `id`
             // but you could certainly do $('[name=name]') as well.
             '#yourName': {
                 required: true,
                 message: 'Might we inquire your name'
             },
             '#email': {
                 required: true,
                 message: 'How are we to reach you sans email??',
                 test: happy.email // this can be *any* function that returns true or false
             }
         }
     });
 }

 function maintenance() {
     $(".maintenance").backstretch("assets/img/big/5.jpg");
     $(".maintenance").fadeIn();
 }

 function bootstrapselect() {
     $('.selectpicker').selectpicker();
 }

 function browserreject() {
     $('#reject').click(function () {
         $.reject({
             reject: {
                 safari: true, // Apple Safari  
                 chrome: true, // Google Chrome  
                 firefox: true, // Mozilla Firefox  
                 msie: true, // Microsoft Internet Explorer  
                 opera: true, // Opera  
                 konqueror: true, // Konqueror (Linux)  
                 unknown: true // Everything else  
             },
             imagePath: 'assets/jreject/images/'
         }); // Customized Browsers  

         return false;
     });
 }

 function flotcharts() {
     var data1 = [
         [1, 43],
         [2, 35],
         [3, 49],
         [4, 31],
         [5, 45],
         [6, 54],
         [7, 52],
         [8, 62],
         [9, 59],
         [10, 66],
         [11, 48],
         [12, 42]
     ];
     var data2 = [
         [1, 18],
         [2, 23],
         [3, 15],
         [4, 26],
         [5, 19],
         [6, 35],
         [7, 41],
         [8, 46],
         [9, 32],
         [10, 34],
         [11, 31],
         [12, 25]
     ];

     var plot = $.plot($("#chart"), [{
         data: data1,
         label: "2012"
     }, {
         data: data2,
         label: "2013"
     }], {
         series: {
             lines: {
                 show: true,
                 lineWidth: 1,
                 fill: true,
                 fillColor: {
                     colors: [{
                         opacity: 0.05
                     }, {
                         opacity: 0.09
                     }]
                 }
             },
             points: {
                 show: true,
                 lineWidth: 2,
                 radius: 3
             },
             shadowSize: 0,
             stack: true
         },
         grid: {
             hoverable: true,
             clickable: true,
             tickColor: "#f9f9f9",
             borderWidth: 0
         },
         legend: {
             // show: false
             labelBoxBorderColor: "#fff"
         },
         colors: ["#94aec4", "#3473A9"],
         xaxis: {
             ticks: [
                 [1, "JAN"],
                 [2, "FEB"],
                 [3, "MAR"],
                 [4, "APR"],
                 [5, "MAY"],
                 [6, "JUN"],
                 [7, "JUL"],
                 [8, "AUG"],
                 [9, "SEP"],
                 [10, "OCT"],
                 [11, "NOV"],
                 [12, "DEC"]
             ],
             font: {
                 size: 12,
                 family: "Open Sans, Arial",
                 variant: "small-caps",
                 color: "#9da3a9"
             }
         },
         yaxis: {
             ticks: 3,
             tickDecimals: 0,
             font: {
                 size: 12,
                 color: "#9da3a9"
             }
         }
     });

     function showTooltip(x, y, contents) {
         $('<div id="tooltip">' + contents + '</div>').css({
             position: 'absolute',
             display: 'none',
             top: y - 30,
             left: x - 50,
             color: "#fff",
             padding: '2px 5px',
             'border-radius': '6px',
             'background-color': '#000',
             opacity: 0.80
         }).appendTo("body").fadeIn(200);
     }

     var previousPoint = null;
     $("#statsChart").bind("plothover", function (event, pos, item) {
         if (item) {
             if (previousPoint != item.dataIndex) {
                 previousPoint = item.dataIndex;

                 $("#tooltip").remove();
                 var x = item.datapoint[0].toFixed(0),
                     y = item.datapoint[1].toFixed(0);

                 var month = item.series.xaxis.ticks[item.dataIndex].label;

                 showTooltip(item.pageX, item.pageY,
                     item.series.label + " of " + month + ": " + y);
             }
         } else {
             $("#tooltip").remove();
             previousPoint = null;
         }
     });

     var dataSet = [{
         label: "Asia",
         data: 4119630000,
         color: "#057D9F"
     }, {
         label: "Latin America",
         data: 590950000,
         color: "#216477"
     }, {
         label: "Africa",
         data: 1012960000,
         color: "#025167"
     }, {
         label: "Oceania",
         data: 35100000,
         color: "#39AECF"
     }, {
         label: "Europe",
         data: 727080000,
         color: "#25567B"
     }, {
         label: "North America",
         data: 344120000,
         color: "#0B61A4"
     }];
     var placeholder = $("#pie");
     $.plot(placeholder, dataSet, {
         series: {
             pie: {
                 show: true,
                 combine: {
                     color: '#999',
                     threshold: 0.1
                 }
             }
         },
         legend: {
             show: false
         }
     });

     var data = [
         ["January", 10],
         ["February", 8],
         ["March", 4],
         ["April", 13],
         ["May", 17],
         ["June", 9]
     ];

     $.plot("#bar", [data], {
         series: {
             bars: {
                 show: true,
                 barWidth: 0.6,
                 align: "center"
             }

         },
         colors: ["#94aec4", "#3473A9"],
         grid: {
             hoverable: true,
             clickable: true,
             tickColor: "#fff",
             borderWidth: 0
         },
         xaxis: {
             mode: "categories",
             tickLength: 0
         }
     });


     var males = {
         "15%": [
             [2, 88.0],
             [3, 93.3],
             [4, 102.0],
             [5, 108.5],
             [6, 115.7],
             [7, 115.6],
             [8, 124.6],
             [9, 130.3],
             [10, 134.3],
             [11, 141.4],
             [12, 146.5],
             [13, 151.7],
             [14, 159.9],
             [15, 165.4],
             [16, 167.8],
             [17, 168.7],
             [18, 169.5],
             [19, 168.0]
         ],
         "90%": [
             [2, 96.8],
             [3, 105.2],
             [4, 113.9],
             [5, 120.8],
             [6, 127.0],
             [7, 133.1],
             [8, 139.1],
             [9, 143.9],
             [10, 151.3],
             [11, 161.1],
             [12, 164.8],
             [13, 173.5],
             [14, 179.0],
             [15, 182.0],
             [16, 186.9],
             [17, 185.2],
             [18, 186.3],
             [19, 186.6]
         ],
         "25%": [
             [2, 89.2],
             [3, 94.9],
             [4, 104.4],
             [5, 111.4],
             [6, 117.5],
             [7, 120.2],
             [8, 127.1],
             [9, 132.9],
             [10, 136.8],
             [11, 144.4],
             [12, 149.5],
             [13, 154.1],
             [14, 163.1],
             [15, 169.2],
             [16, 170.4],
             [17, 171.2],
             [18, 172.4],
             [19, 170.8]
         ],
         "10%": [
             [2, 86.9],
             [3, 92.6],
             [4, 99.9],
             [5, 107.0],
             [6, 114.0],
             [7, 113.5],
             [8, 123.6],
             [9, 129.2],
             [10, 133.0],
             [11, 140.6],
             [12, 145.2],
             [13, 149.7],
             [14, 158.4],
             [15, 163.5],
             [16, 166.9],
             [17, 167.5],
             [18, 167.1],
             [19, 165.3]
         ],
         "mean": [
             [2, 91.9],
             [3, 98.5],
             [4, 107.1],
             [5, 114.4],
             [6, 120.6],
             [7, 124.7],
             [8, 131.1],
             [9, 136.8],
             [10, 142.3],
             [11, 150.0],
             [12, 154.7],
             [13, 161.9],
             [14, 168.7],
             [15, 173.6],
             [16, 175.9],
             [17, 176.6],
             [18, 176.8],
             [19, 176.7]
         ],
         "75%": [
             [2, 94.5],
             [3, 102.1],
             [4, 110.8],
             [5, 117.9],
             [6, 124.0],
             [7, 129.3],
             [8, 134.6],
             [9, 141.4],
             [10, 147.0],
             [11, 156.1],
             [12, 160.3],
             [13, 168.3],
             [14, 174.7],
             [15, 178.0],
             [16, 180.2],
             [17, 181.7],
             [18, 181.3],
             [19, 182.5]
         ],
         "85%": [
             [2, 96.2],
             [3, 103.8],
             [4, 111.8],
             [5, 119.6],
             [6, 125.6],
             [7, 131.5],
             [8, 138.0],
             [9, 143.3],
             [10, 149.3],
             [11, 159.8],
             [12, 162.5],
             [13, 171.3],
             [14, 177.5],
             [15, 180.2],
             [16, 183.8],
             [17, 183.4],
             [18, 183.5],
             [19, 185.5]
         ],
         "50%": [
             [2, 91.9],
             [3, 98.2],
             [4, 106.8],
             [5, 114.6],
             [6, 120.8],
             [7, 125.2],
             [8, 130.3],
             [9, 137.1],
             [10, 141.5],
             [11, 149.4],
             [12, 153.9],
             [13, 162.2],
             [14, 169.0],
             [15, 174.8],
             [16, 176.0],
             [17, 176.8],
             [18, 176.4],
             [19, 177.4]
         ]
     };

     var females = {
         "15%": [
             [2, 84.8],
             [3, 93.7],
             [4, 100.6],
             [5, 105.8],
             [6, 113.3],
             [7, 119.3],
             [8, 124.3],
             [9, 131.4],
             [10, 136.9],
             [11, 143.8],
             [12, 149.4],
             [13, 151.2],
             [14, 152.3],
             [15, 155.9],
             [16, 154.7],
             [17, 157.0],
             [18, 156.1],
             [19, 155.4]
         ],
         "90%": [
             [2, 95.6],
             [3, 104.1],
             [4, 111.9],
             [5, 119.6],
             [6, 127.6],
             [7, 133.1],
             [8, 138.7],
             [9, 147.1],
             [10, 152.8],
             [11, 161.3],
             [12, 166.6],
             [13, 167.9],
             [14, 169.3],
             [15, 170.1],
             [16, 172.4],
             [17, 169.2],
             [18, 171.1],
             [19, 172.4]
         ],
         "25%": [
             [2, 87.2],
             [3, 95.9],
             [4, 101.9],
             [5, 107.4],
             [6, 114.8],
             [7, 121.4],
             [8, 126.8],
             [9, 133.4],
             [10, 138.6],
             [11, 146.2],
             [12, 152.0],
             [13, 153.8],
             [14, 155.7],
             [15, 158.4],
             [16, 157.0],
             [17, 158.5],
             [18, 158.4],
             [19, 158.1]
         ],
         "10%": [
             [2, 84.0],
             [3, 91.9],
             [4, 99.2],
             [5, 105.2],
             [6, 112.7],
             [7, 118.0],
             [8, 123.3],
             [9, 130.2],
             [10, 135.0],
             [11, 141.1],
             [12, 148.3],
             [13, 150.0],
             [14, 150.7],
             [15, 154.3],
             [16, 153.6],
             [17, 155.6],
             [18, 154.7],
             [19, 153.1]
         ],
         "mean": [
             [2, 90.2],
             [3, 98.3],
             [4, 105.2],
             [5, 112.2],
             [6, 119.0],
             [7, 125.8],
             [8, 131.3],
             [9, 138.6],
             [10, 144.2],
             [11, 151.3],
             [12, 156.7],
             [13, 158.6],
             [14, 160.5],
             [15, 162.1],
             [16, 162.9],
             [17, 162.2],
             [18, 163.0],
             [19, 163.1]
         ],
         "75%": [
             [2, 93.2],
             [3, 101.5],
             [4, 107.9],
             [5, 116.6],
             [6, 122.8],
             [7, 129.3],
             [8, 135.2],
             [9, 143.7],
             [10, 148.7],
             [11, 156.9],
             [12, 160.8],
             [13, 163.0],
             [14, 165.0],
             [15, 165.8],
             [16, 168.7],
             [17, 166.2],
             [18, 167.6],
             [19, 168.0]
         ],
         "85%": [
             [2, 94.5],
             [3, 102.8],
             [4, 110.4],
             [5, 119.0],
             [6, 125.7],
             [7, 131.5],
             [8, 137.9],
             [9, 146.0],
             [10, 151.3],
             [11, 159.9],
             [12, 164.0],
             [13, 166.5],
             [14, 167.5],
             [15, 168.5],
             [16, 171.5],
             [17, 168.0],
             [18, 169.8],
             [19, 170.3]
         ],
         "50%": [
             [2, 90.2],
             [3, 98.1],
             [4, 105.2],
             [5, 111.7],
             [6, 118.2],
             [7, 125.6],
             [8, 130.5],
             [9, 138.3],
             [10, 143.7],
             [11, 151.4],
             [12, 156.7],
             [13, 157.7],
             [14, 161.0],
             [15, 162.0],
             [16, 162.8],
             [17, 162.2],
             [18, 162.8],
             [19, 163.3]
         ]
     };

     var dataset = [{
             label: "Female mean",
             data: females["mean"],
             lines: {
                 show: true
             },
             color: "rgba(232,81,81,1)"
         }, {
             id: "f15%",
             data: females["15%"],
             lines: {
                 show: true,
                 lineWidth: 0,
                 fill: false
             },
             color: "rgba(232,81,81,1)"
         }, {
             id: "f25%",
             data: females["25%"],
             lines: {
                 show: true,
                 lineWidth: 0,
                 fill: 0.2
             },
             color: "rgba(232,81,81,1)",
             fillBetween: "f15%"
         }, {
             id: "f50%",
             data: females["50%"],
             lines: {
                 show: true,
                 lineWidth: 0.5,
                 fill: 0.4,
                 shadowSize: 0
             },
             color: "rgba(232,81,81,1)",
             fillBetween: "f25%"
         }, {
             id: "f75%",
             data: females["75%"],
             lines: {
                 show: true,
                 lineWidth: 0,
                 fill: 0.4
             },
             color: "rgba(232,81,81,1)",
             fillBetween: "f50%"
         }, {
             id: "f85%",
             data: females["85%"],
             lines: {
                 show: true,
                 lineWidth: 0,
                 fill: 0.2
             },
             color: "rgba(232,81,81,1)",
             fillBetween: "f75%"
         },

         {
             label: "Male mean",
             data: males["mean"],
             lines: {
                 show: true
             },
             color: "rgba(92,139,181,1)"
         }, {
             id: "m15%",
             data: males["15%"],
             lines: {
                 show: true,
                 lineWidth: 0,
                 fill: false
             },
             color: "rgba(92,139,181,1)"
         }, {
             id: "m25%",
             data: males["25%"],
             lines: {
                 show: true,
                 lineWidth: 0,
                 fill: 0.2
             },
             color: "rgba(92,139,181,1)",
             fillBetween: "m15%"
         }, {
             id: "m50%",
             data: males["50%"],
             lines: {
                 show: true,
                 lineWidth: 0.5,
                 fill: 0.4,
                 shadowSize: 0
             },
             color: "rgba(92,139,181,1)",
             fillBetween: "m25%"
         }, {
             id: "m75%",
             data: males["75%"],
             lines: {
                 show: true,
                 lineWidth: 0,
                 fill: 0.4
             },
             color: "rgba(92,139,181,1)",
             fillBetween: "m50%"
         }, {
             id: "m85%",
             data: males["85%"],
             lines: {
                 show: true,
                 lineWidth: 0,
                 fill: 0.2
             },
             color: "rgba(92,139,181,1)",
             fillBetween: "m75%"
         }
     ];

     $.plot($("#graph"), dataset, {
         xaxis: {
             tickDecimals: 0
         },
         yaxis: {
             tickFormatter: function (v) {
                 return v + " cm";
             }
         },
         grid: {
             tickColor: "#fff",
             borderWidth: 0
         },
         legend: {
             position: "se"
         }
     });


     // We use an inline data source in the example, usually data would
     // be fetched from a server

     var data = [],
         totalPoints = 300;

     function getRandomData() {

         if (data.length > 0)
             data = data.slice(1);

         // Do a random walk

         while (data.length < totalPoints) {

             var prev = data.length > 0 ? data[data.length - 1] : 50,
                 y = prev + Math.random() * 10 - 5;

             if (y < 0) {
                 y = 0;
             } else if (y > 100) {
                 y = 100;
             }

             data.push(y);
         }

         // Zip the generated y values with the x values

         var res = [];
         for (var i = 0; i < data.length; ++i) {
             res.push([i, data[i]])
         }

         return res;
     }

     // Set up the control widget

     var updateInterval = 30;

     var plot = $.plot("#realtime", [getRandomData()], {
         series: {
             shadowSize: 0 // Drawing is faster without shadows
         },
         grid: {
             hoverable: true,
             tickColor: "#fff",
             borderWidth: 0
         },
         colors: ["#64A3D7"],
         yaxis: {
             min: 0,
             max: 100
         },
         xaxis: {
             show: false
         }
     });

     function update() {

         plot.setData([getRandomData()]);

         // Since the axes don't change, we don't need to call plot.setupGrid()

         plot.draw();
         setTimeout(update, updateInterval);
     }

     update();

 }

 function xcharts() {

     var data1 = {
         "xScale": "ordinal",
         "yScale": "linear",
         "main": [{
             "className": ".pizza",
             "data": [{
                 "x": "Pepperoni",
                 "y": 4
             }, {
                 "x": "Cheese",
                 "y": 8
             }]
         }]
     };
     var myChart = new xChart('bar', data1, '#chart1');
     var data2 = {
         "xScale": "time",
         "yScale": "linear",
         "type": "line",
         "main": [{
             "className": ".pizza",
             "data": [{
                 "x": "2012-11-05",
                 "y": 1
             }, {
                 "x": "2012-11-06",
                 "y": 6
             }, {
                 "x": "2012-11-07",
                 "y": 13
             }, {
                 "x": "2012-11-08",
                 "y": -3
             }, {
                 "x": "2012-11-09",
                 "y": -4
             }, {
                 "x": "2012-11-10",
                 "y": 9
             }, {
                 "x": "2012-11-11",
                 "y": 6
             }]
         }]
     };
     var opts = {
         "dataFormatX": function (x) {
             return d3.time.format('%Y-%m-%d').parse(x);
         },
         "tickFormatX": function (x) {
             return d3.time.format('%A')(x);
         }
     };
     var myChart = new xChart('line', data2, '#chart3', opts);
     var tt = document.createElement('div'),
         leftOffset = -(~~$('html').css('padding-left').replace('px', '') + ~~$('body').css('margin-left').replace('px', '')),
         topOffset = -32;
     tt.className = 'ex-tooltip';
     document.body.appendChild(tt);

     var data3 = {
         "xScale": "time",
         "yScale": "linear",
         "main": [{
             "className": ".pizza",
             "data": [{
                 "x": "2012-11-05",
                 "y": 6
             }, {
                 "x": "2012-11-06",
                 "y": 6
             }, {
                 "x": "2012-11-07",
                 "y": 8
             }, {
                 "x": "2012-11-08",
                 "y": 3
             }, {
                 "x": "2012-11-09",
                 "y": 4
             }, {
                 "x": "2012-11-10",
                 "y": 9
             }, {
                 "x": "2012-11-11",
                 "y": 6
             }]
         }]
     };
     var opts2 = {
         "dataFormatX": function (x) {
             return d3.time.format('%Y-%m-%d').parse(x);
         },
         "tickFormatX": function (x) {
             return d3.time.format('%A')(x);
         },
         "mouseover": function (d, i) {
             var pos = $(this).offset();
             $(tt).text(d3.time.format('%A')(d.x) + ': ' + d.y)
                 .css({
                     top: topOffset + pos.top,
                     left: pos.left + leftOffset
                 })
                 .show();
         },
         "mouseout": function (x) {
             $(tt).hide();
         }
     };
     var myChart = new xChart('line-dotted', data3, '#chart4', opts2);
     (function () {
         var errorBar = {
             enter: function (self, storage, className, data, callbacks) {
                 var insertionPoint = xChart.visutils.getInsertionPoint(9),
                     container,
                     eData = data.map(function (d) {
                         d.data = d.data.map(function (d) {
                             return [{
                                 x: d.x,
                                 y: d.y - d.e
                             }, {
                                 x: d.x,
                                 y: d.y
                             }, {
                                 x: d.x,
                                 y: d.y + d.e
                             }];
                         });
                         return d;
                     }),
                     paths;

                 container = self._g.selectAll('.errorLine' + className)
                     .data(eData, function (d) {
                         return d.className;
                     });

                 container.enter().insert('g', insertionPoint)
                     .attr('class', function (d, i) {
                         return 'errorLine' + className.replace(/\./g, ' ') + ' color' + i;
                     });

                 paths = container.selectAll('path')
                     .data(function (d) {
                         return d.data;
                     }, function (d) {
                         return d[0].x;
                     });

                 paths.enter().insert('path')
                     .style('opacity', 0)
                     .attr('d', d3.svg.line()
                         .x(function (d) {
                             return self.xScale(d.x) + self.xScale.rangeBand() / 2;
                         })
                         .y(function (d) {
                             return self.yScale(d.y);
                         })
                 );

                 storage.containers = container;
                 storage.paths = paths;
             },
             update: function (self, storage, timing) {
                 storage.paths.transition().duration(timing)
                     .style('opacity', 1)
                     .attr('d', d3.svg.line()
                         .x(function (d) {
                             return self.xScale(d.x) + self.xScale.rangeBand() / 2;
                         })
                         .y(function (d) {
                             return self.yScale(d.y);
                         })
                 );
             },
             exit: function (self, storage, timing) {
                 storage.paths.exit()
                     .transition().duration(timing)
                     .style('opacity', 0);
             },
             destroy: function (self, storage, timing) {
                 storage.paths.transition().duration(timing)
                     .style('opacity', 0)
                     .remove();
             }
         };

         xChart.setVis('error', errorBar);

         var data4 = [{
             "xScale": "ordinal",
             "yScale": "linear",
             "main": [{
                 "className": ".errorExample",
                 "data": [{
                     "x": "Ponies",
                     "y": 12
                 }, {
                     "x": "Unicorns",
                     "y": 23
                 }, {
                     "x": "Trolls",
                     "y": 1
                 }]
             }],
             "comp": [{
                 "type": "error",
                 "className": ".comp.errorBar",
                 "data": [{
                     "x": "Ponies",
                     "y": 12,
                     "e": 5
                 }, {
                     "x": "Unicorns",
                     "y": 23,
                     "e": 2
                 }, {
                     "x": "Trolls",
                     "y": 1,
                     "e": 1
                 }]
             }]
         }, {
             "xScale": "ordinal",
             "yScale": "linear",
             "main": [{
                 "className": ".errorExample",
                 "data": [{
                     "x": "Ponies",
                     "y": 76
                 }, {
                     "x": "Unicorns",
                     "y": 45
                 }, {
                     "x": "Trolls",
                     "y": 82
                 }]
             }],
             "comp": [{
                 "type": "error",
                 "className": ".comp.errorBar",
                 "data": [{
                     "x": "Ponies",
                     "y": 76,
                     "e": 12
                 }, {
                     "x": "Unicorns",
                     "y": 45,
                     "e": 3
                 }, {
                     "x": "Trolls",
                     "y": 82,
                     "e": 12
                 }]
             }]
         }];

         var myChart = new xChart('bar', data4[0], '#chart2'),
             i = 0;

         function timer() {
             setTimeout(function () {
                 timer();
                 i += 1;
                 myChart.setData(data4[i % 2]);
             }, 3000);
         }
         timer();
     }());

     (function () {
         var data5 = [{
             "xScale": "ordinal",
             "comp": [],
             "main": [{
                 "className": ".main.l1",
                 "data": [{
                     "y": 15,
                     "x": "2012-11-19T00:00:00"
                 }, {
                     "y": 11,
                     "x": "2012-11-20T00:00:00"
                 }, {
                     "y": 8,
                     "x": "2012-11-21T00:00:00"
                 }, {
                     "y": 10,
                     "x": "2012-11-22T00:00:00"
                 }, {
                     "y": 1,
                     "x": "2012-11-23T00:00:00"
                 }, {
                     "y": 6,
                     "x": "2012-11-24T00:00:00"
                 }, {
                     "y": 8,
                     "x": "2012-11-25T00:00:00"
                 }]
             }, {
                 "className": ".main.l2",
                 "data": [{
                     "y": 29,
                     "x": "2012-11-19T00:00:00"
                 }, {
                     "y": 33,
                     "x": "2012-11-20T00:00:00"
                 }, {
                     "y": 13,
                     "x": "2012-11-21T00:00:00"
                 }, {
                     "y": 16,
                     "x": "2012-11-22T00:00:00"
                 }, {
                     "y": 7,
                     "x": "2012-11-23T00:00:00"
                 }, {
                     "y": 18,
                     "x": "2012-11-24T00:00:00"
                 }, {
                     "y": 8,
                     "x": "2012-11-25T00:00:00"
                 }]
             }],
             "type": "line-dotted",
             "yScale": "linear"
         }, {
             "xScale": "ordinal",
             "comp": [],
             "main": [{
                 "className": ".main.l1",
                 "data": [{
                     "y": 12,
                     "x": "2012-11-19T00:00:00"
                 }, {
                     "y": 18,
                     "x": "2012-11-20T00:00:00"
                 }, {
                     "y": 8,
                     "x": "2012-11-21T00:00:00"
                 }, {
                     "y": 7,
                     "x": "2012-11-22T00:00:00"
                 }, {
                     "y": 6,
                     "x": "2012-11-23T00:00:00"
                 }, {
                     "y": 12,
                     "x": "2012-11-24T00:00:00"
                 }, {
                     "y": 8,
                     "x": "2012-11-25T00:00:00"
                 }]
             }, {
                 "className": ".main.l2",
                 "data": [{
                     "y": 29,
                     "x": "2012-11-19T00:00:00"
                 }, {
                     "y": 33,
                     "x": "2012-11-20T00:00:00"
                 }, {
                     "y": 13,
                     "x": "2012-11-21T00:00:00"
                 }, {
                     "y": 16,
                     "x": "2012-11-22T00:00:00"
                 }, {
                     "y": 7,
                     "x": "2012-11-23T00:00:00"
                 }, {
                     "y": 18,
                     "x": "2012-11-24T00:00:00"
                 }, {
                     "y": 8,
                     "x": "2012-11-25T00:00:00"
                 }]
             }],
             "type": "cumulative",
             "yScale": "linear"
         }, {
             "xScale": "ordinal",
             "comp": [],
             "main": [{
                 "className": ".main.l1",
                 "data": [{
                     "y": 12,
                     "x": "2012-11-19T00:00:00"
                 }, {
                     "y": 18,
                     "x": "2012-11-20T00:00:00"
                 }, {
                     "y": 8,
                     "x": "2012-11-21T00:00:00"
                 }, {
                     "y": 7,
                     "x": "2012-11-22T00:00:00"
                 }, {
                     "y": 6,
                     "x": "2012-11-23T00:00:00"
                 }, {
                     "y": 12,
                     "x": "2012-11-24T00:00:00"
                 }, {
                     "y": 8,
                     "x": "2012-11-25T00:00:00"
                 }]
             }, {
                 "className": ".main.l2",
                 "data": [{
                     "y": 29,
                     "x": "2012-11-19T00:00:00"
                 }, {
                     "y": 33,
                     "x": "2012-11-20T00:00:00"
                 }, {
                     "y": 13,
                     "x": "2012-11-21T00:00:00"
                 }, {
                     "y": 16,
                     "x": "2012-11-22T00:00:00"
                 }, {
                     "y": 7,
                     "x": "2012-11-23T00:00:00"
                 }, {
                     "y": 18,
                     "x": "2012-11-24T00:00:00"
                 }, {
                     "y": 8,
                     "x": "2012-11-25T00:00:00"
                 }]
             }],
             "type": "bar",
             "yScale": "linear"
         }];
         var order = [0, 1, 0, 2],
             i = 0,
             xFormat = d3.time.format('%A'),
             chart = new xChart('line-dotted', data5[order[i]], '#chart', {
                 axisPaddingTop: 5,
                 dataFormatX: function (x) {
                     return new Date(x);
                 },
                 tickFormatX: function (x) {
                     return xFormat(x);
                 },
                 timing: 1250
             }),
             rotateTimer,
             toggles = d3.selectAll('.multi button'),
             t = 3500;

         function updateChart(i) {
             var d = data5[i];
             chart.setData(d);
             toggles.classed('toggled', function () {
                 return (d3.select(this).attr('data-type') === d.type);
             });
             return d;
         }

         toggles.on('click', function (d, i) {
             clearTimeout(rotateTimer);
             updateChart(i);
         });

         function rotateChart() {
             i += 1;
             i = (i >= order.length) ? 0 : i;
             var d = updateChart(order[i]);
             rotateTimer = setTimeout(rotateChart, t);
         }
         rotateTimer = setTimeout(rotateChart, t);
     }());
 }

 function tokenfield() {
     $('#tokenfield2').tokenfield();
     $('#tokenfield3').tokenfield();
     $('#tokenfield4').tokenfield();
     $('#tokenfield5').tokenfield();
     $('#tokenfield6').tokenfield();
     $('#tokenfield7').tokenfield();
     $('#tokenfield8').tokenfield();
     $('#tokenfield9').tokenfield();
     $('#tokenfield10').tokenfield();
     $('#tokenfield11').tokenfield();
     $('#tokenfield12').tokenfield();
     $('#tokenfield13').tokenfield();
     $('#tokenfield14').tokenfield();
     $('#tokenfield15').tokenfield();
     $('#tokenfield-typeahead').tokenfield({
         typeahead: {
             name: 'tags',
             local: ['red', 'blue', 'green', 'yellow', 'violet', 'brown', 'purple', 'black', 'white'],
         },
         allowDuplicates: true
     });
     $('#tokenfield').tokenfield({
         autocomplete: {
             source: ['red', 'blue', 'green', 'yellow', 'violet', 'brown', 'purple', 'black', 'white'],
             delay: 100
         },
         showAutocompleteOnFocus: true,
         allowDuplicates: true
     });
 }

 function othercharts() {
     $("#sparkline").sparkline([5, 9, 4, 8, 4, 6, 8, 11, 6, 5, 8, 10], {
         type: 'line',
         width: '100%',
         height: '100px',
         lineColor: '#39c',
         fillColor: '#ffffff',
         lineWidth: 5,
         spotColor: '#cccccc',
         highlightSpotColor: '#cccccc',
         highlightLineColor: '#777777',
         minSpotColor: '#cccccc',
         maxSpotColor: '#cccccc'
     });
     $("#sparkline2").sparkline([5, 6, 7, 2, 0, -4, -2, 4, 7, 6, 2, 1, 5, 9, 6, 3, 1, -1, -2], {
         type: 'bar',
         width: '100%',
         height: '200px',
         barWidth: 17,
         barSpacing: 5,
         barColor: '#5cb85c',
         negBarColor: '#d9534f',
         zeroColor: '#cccccc'
     });
     $("#sparkline3").sparkline([9, 6, 5, 2, 7], {
         type: 'pie',
         width: '200',
         height: '200',
         sliceColors: ['#5cb85c', '#428bca', '#39c', '#5bc0de', '#f0ad4e']
     });
     $('#chart').easyPieChart({
         easing: 'easeOutBounce'
     });
     $('#chart2').easyPieChart({
         easing: 'easeOutBounce',
         barColor: '#555'
     });
     $('#chart3').easyPieChart({
         easing: 'easeOutBounce',
         barColor: '#428bca'
     });
     $('#chart4').easyPieChart({
         easing: 'easeOutBounce',
         barColor: '#5cb85c'
     });
     $('#chart5').easyPieChart({
         easing: 'easeOutBounce',
         barColor: '#39c',
         lineWidth: 1
     });
     $('#chart6').easyPieChart({
         easing: 'easeOutBounce',
         barColor: '#39c',
         lineWidth: 10
     });
     $('#chart7').easyPieChart({
         easing: 'easeOutBounce',
         barColor: '#39c',
         lineWidth: 5,
         onStep: function (from, to, percent) {
             $(this.el).find('.percent').text(Math.round(percent));
         }
     });
     $('#chart8').easyPieChart({
         easing: 'easeOutBounce',
         trackColor: '#999',
         lineWidth: 5
     });
 }

 function chosen() {
     $("#chosen-select").chosen();
     $("#chosen-select2").chosen();
     $("#chosen-select3").chosen();
     $("#chosen-select4").chosen();
     $("#chosen-select5").chosen({
         disable_search_threshold: 10
     });
     $("#chosen-select6").chosen({
         no_results_text: "Oops, nothing found!"
     });
     $("#chosen-select7").chosen({
         allow_single_deselect: true
     });
     $("#chosen-select8").chosen();
     $("#chosen-select9").chosen();
     $("#chosen-select10").chosen({
         no_results_text: "Oops, nothing found!"
     });
     $("#chosen-select11").chosen();
     $("#chosen-select12").chosen();
     $("#chosen-select13").chosen();
     $("#chosen-select14").chosen();
 }

 function bootstrapmultiselect() {
     $('#multiselect').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect2').multiselect({
         buttonClass: 'btn btn-primary'
     });
     $('#multiselect3').multiselect({
         buttonClass: 'btn btn-info'
     });
     $('#multiselect4').multiselect({
         buttonClass: 'btn btn-success'
     });
     $('#multiselect5').multiselect({
         buttonClass: 'btn btn-warning'
     });
     $('#multiselect6').multiselect({
         buttonClass: 'btn btn-danger'
     });
     $('#multiselect7').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect8').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect9').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect10').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect11').multiselect({
         buttonClass: 'btn btn-default btn-sm'
     });
     $('#multiselect12').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect13').multiselect({
         buttonClass: 'btn btn-default',
         buttonWidth: '100%',
         onChange: function (element, checked) {
             $.pnotify({
                 title: 'Change Alert',
                 text: 'This is done with pines notify'
             });
         }
     });
     $('#multiselect14').multiselect({
         buttonClass: 'btn btn-default',
         maxHeight: 200
     });
     $('#multiselect15').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect16').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect17').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect18').multiselect({
         buttonClass: 'btn btn-default'
     });

     $('#multiselect20').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect20-disable').on('click', function () {
         $('#multiselect20').multiselect('disable');
     });
     $('#multiselect21').multiselect({
         buttonClass: 'btn btn-default'
     });
     $('#multiselect19').multiselect({
         buttonClass: 'btn btn-default'
     });
     $("#multiselect19-toggle").click(function (e) {
         e.preventDefault();
         multiselect_toggle($("#multiselect19"), $(this));
     });

     function multiselect_selected($el) {
         var ret = true;
         $('option', $el).each(function (element) {
             if ( !! !$(this).prop('selected')) {
                 ret = false;
             }
         });
         return ret;
     }

     function multiselect_selectAll($el) {
         $('option', $el).each(function (element) {
             $el.multiselect('select', $(this).val());
         });
     }

     function multiselect_deselectAll($el) {
         $('option', $el).each(function (element) {
             $el.multiselect('deselect', $(this).val());
         });
     }

     function multiselect_toggle($el, $btn) {
         if (multiselect_selected($el)) {
             multiselect_deselectAll($el);
             $btn.text("Select All");
         } else {
             multiselect_selectAll($el);
             $btn.text("Deselect All");
         }
     }
     var firstConfigurationSet = {
         includeSelectAllOption: false,
         enableFiltering: false,
         enableCasInsensitiveFiltering: false
     };
     var secondConfigurationSet = {
         includeSelectAllOption: true,
         enableFiltering: true,
         enableCasInsensitiveFiltering: true
     };

     var set = 1;
     $('#example33').multiselect(firstConfigurationSet);

     function rebuildMultiselect(options) {
         $('#example33').multiselect('setOptions', options);
         $('#example33').multiselect('rebuild');
     }

     $('#example33-configuration-set').on('click', function (event) {
         switch (set) {
         case 2:
             rebuildMultiselect(firstConfigurationSet);

             $(this).text('Configuration Set 2');
             set = 1;
             break;
         case 1:
         default:
             rebuildMultiselect(secondConfigurationSet);

             $(this).text('Configuration Set 1');
             set = 2;
             break;
         }
     });
 }

 function blogpost() {
     $("textarea").fseditor();
 }

 function biccal() {
     mesos = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

     dias = ["M", "T", "W", "T", "F", "S", "S"];

     $('#cal').bic_calendar({
         nombresMes: mesos,
         dias: dias,
         req_ajax: {
             type: 'get',
             url: 'http://bic.cat/bic_calendar/index.php'
         }
     });
 }

 function gallery() {
     'use strict';

     // Load demo images from flickr:
     $.ajax({
         url: (window.location.protocol === 'https:' ?
             'https://secure' : 'http://api') +
             '.flickr.com/services/rest/',
         data: {
             format: 'json',
             method: 'flickr.interestingness.getList',
             api_key: '7617adae70159d09ba78cfec73c13be3'
         },
         dataType: 'jsonp',
         jsonp: 'jsoncallback'
     }).done(function (result) {
         var linksContainer = $('#links'),
             baseUrl;
         // Add the demo images as links with thumbnails to the page:
         $.each(result.photos.photo, function (index, photo) {
             baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
                 photo.server + '/' + photo.id + '_' + photo.secret;
             $('<a/>')
                 .append($('<img>').prop('src', baseUrl + '_s.jpg'))
                 .prop('href', baseUrl + '_b.jpg')
                 .prop('title', photo.title)
                 .attr('data-gallery', '')
                 .appendTo(linksContainer);
         });
     });

     $('#borderless-checkbox').on('change', function () {
         var borderless = $(this).is(':checked');
         $('#blueimp-gallery').data('useBootstrapModal', !borderless);
         $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
     });

     $('#fullscreen-checkbox').on('change', function () {
         $('#blueimp-gallery').data('fullScreen', $(this).is(':checked'));
     });

     $('#image-gallery-button').on('click', function (event) {
         event.preventDefault();
         blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
     });

     $('#video-gallery-button').on('click', function (event) {
         event.preventDefault();
         blueimp.Gallery([{
             title: 'Sintel',
             href: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
             type: 'video/mp4',
             poster: 'http://media.w3.org/2010/05/sintel/poster.png'
         }, {
             title: 'Big Buck Bunny',
             href: 'http://upload.wikimedia.org/wikipedia/commons/7/75/' +
                 'Big_Buck_Bunny_Trailer_400p.ogg',
             type: 'video/ogg',
             poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
                 'Big.Buck.Bunny.-.Opening.Screen.png/' +
                 '800px-Big.Buck.Bunny.-.Opening.Screen.png'
         }, {
             title: 'Elephants Dream',
             href: 'http://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
                 'Elephants_Dream_%28high_quality%29.ogv/' +
                 'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
             type: 'video/webm',
             poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
                 'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
         }, {
             title: 'LES TWINS - An Industry Ahead',
             href: 'http://www.youtube.com/watch?v=zi4CIXpx7Bg',
             type: 'text/html',
             youtube: 'zi4CIXpx7Bg',
             poster: 'http://img.youtube.com/vi/zi4CIXpx7Bg/0.jpg'
         }, {
             title: 'KN1GHT - Last Moon',
             href: 'http://vimeo.com/73686146',
             type: 'text/html',
             vimeo: '73686146',
             poster: 'http://b.vimeocdn.com/ts/448/835/448835699_960.jpg'
         }], $('#blueimp-gallery').data());
     });
 }

 function formcomponents() {
     $("#mxlenght").maxlength({
         alwaysShow: true
     });
     $("#mxlenght2").maxlength({
         alwaysShow: true,
         threshold: 10,
         warningClass: "label label-success",
         limitReachedClass: "label label-danger",
         separator: ' of ',
         preText: 'You have ',
         postText: ' chars remaining.',
         validate: true
     });
     $('textarea').autosize();
     $(".selectpicker").select2();
     $(".dial").knob();
     $(".textarea").fseditor();
     $(".dial2").knob();
 }

 function bootstrapalerts() {
     $('.alert .close.effect-1').click(function (ev) {
         $(this).parent().fadeOut();
         ev.stopPropagation();
     });
     $('.alert .close.effect-2').click(function (ev) {
         $(this).parent().slideUp();
         ev.stopPropagation();
     });
     $("#warn-me").click(function () {
         $(document).trigger("add-alerts", [{
             'message': "This is a warning.",
             'priority': 'warning'
         }]);
     });
 }

 function datatables() {
     $('#managed-table').dataTable();
     $('.selectpicker').selectBoxIt();
     $(window).resize(function () {
         $("#jqGrid01").jqGrid('setGridWidth', $(".jqgrid").width(), true);

     });
     // Set data
     var mydata = [{
         id: "1",
         invdate: "2010-05-24",
         name: "test",
         note: "note",
         tax: "10.00",
         total: "2111.00"
     }, {
         id: "2",
         invdate: "2010-05-25",
         name: "test2",
         note: "note2",
         tax: "20.00",
         total: "320.00"
     }, {
         id: "3",
         invdate: "2007-09-01",
         name: "test3",
         note: "note3",
         tax: "30.00",
         total: "430.00"
     }, {
         id: "4",
         invdate: "2007-10-04",
         name: "test",
         note: "note",
         tax: "10.00",
         total: "210.00"
     }, {
         id: "5",
         invdate: "2007-10-05",
         name: "test2",
         note: "note2",
         tax: "20.00",
         total: "320.00"
     }, {
         id: "6",
         invdate: "2007-09-06",
         name: "test3",
         note: "note3",
         tax: "30.00",
         total: "430.00"
     }, {
         id: "7",
         invdate: "2007-10-04",
         name: "test",
         note: "note",
         tax: "10.00",
         total: "210.00"
     }, {
         id: "8",
         invdate: "2007-10-03",
         name: "test2",
         note: "note2",
         amount: "300.00",
         tax: "21.00",
         total: "320.00"
     }, {
         id: "9",
         invdate: "2007-09-01",
         name: "test3",
         note: "note3",
         amount: "400.00",
         tax: "30.00",
         total: "430.00"
     }, {
         id: "11",
         invdate: "2007-10-01",
         name: "test",
         note: "note",
         amount: "200.00",
         tax: "10.00",
         total: "210.00"
     }, {
         id: "12",
         invdate: "2007-10-02",
         name: "test2",
         note: "note2",
         amount: "300.00",
         tax: "20.00",
         total: "320.00"
     }, {
         id: "13",
         invdate: "2007-09-01",
         name: "test3",
         note: "note3",
         amount: "400.00",
         tax: "30.00",
         total: "430.00"
     }, {
         id: "14",
         invdate: "2007-10-04",
         name: "test",
         note: "note",
         amount: "200.00",
         tax: "10.00",
         total: "210.00"
     }, {
         id: "15",
         invdate: "2007-10-05",
         name: "test2",
         note: "note2",
         amount: "300.00",
         tax: "20.00",
         total: "320.00"
     }, {
         id: "16",
         invdate: "2007-09-06",
         name: "test3",
         note: "note3",
         amount: "400.00",
         tax: "30.00",
         total: "430.00"
     }, {
         id: "17",
         invdate: "2007-10-04",
         name: "test",
         note: "note",
         amount: "200.00",
         tax: "10.00",
         total: "210.00"
     }, {
         id: "18",
         invdate: "2007-10-03",
         name: "test2",
         note: "note2",
         amount: "300.00",
         tax: "20.00",
         total: "320.00"
     }, {
         id: "19",
         invdate: "2007-09-01",
         name: "test3",
         note: "note3",
         amount: "400.00",
         tax: "30.00",
         total: "430.00"
     }, {
         id: "21",
         invdate: "2007-10-01",
         name: "test",
         note: "note",
         amount: "200.00",
         tax: "10.00",
         total: "210.00"
     }, {
         id: "22",
         invdate: "2007-10-02",
         name: "test2",
         note: "note2",
         amount: "300.00",
         tax: "20.00",
         total: "320.00"
     }, {
         id: "23",
         invdate: "2007-09-01",
         name: "test3",
         note: "note3",
         amount: "400.00",
         tax: "30.00",
         total: "430.00"
     }, {
         id: "24",
         invdate: "2007-10-04",
         name: "test",
         note: "note",
         amount: "200.00",
         tax: "10.00",
         total: "210.00"
     }, {
         id: "25",
         invdate: "2007-10-05",
         name: "test2",
         note: "note2",
         amount: "300.00",
         tax: "20.00",
         total: "320.00"
     }, {
         id: "26",
         invdate: "2007-09-06",
         name: "test3",
         note: "note3",
         amount: "400.00",
         tax: "30.00",
         total: "430.00"
     }, {
         id: "27",
         invdate: "2007-10-04",
         name: "test",
         note: "note",
         amount: "200.00",
         tax: "10.00",
         total: "210.00"
     }, {
         id: "28",
         invdate: "2007-10-03",
         name: "test2",
         note: "note2",
         amount: "300.00",
         tax: "20.00",
         total: "320.00"
     }, {
         id: "29",
         invdate: "2007-09-01",
         name: "test3",
         note: "note3",
         amount: "400.00",
         tax: "30.00",
         total: "430.00"
     }];

     // Setup grid
     jQuery("#jqGrid01").jqGrid({
         data: mydata,
         datatype: "local",
         height: 200,
         rowNum: 10,
         rowList: [10, 20, 30],
         colNames: ['Inv No', 'Date', 'Client', 'Amount', 'Tax', 'Total', 'Notes'],
         colModel: [{
             name: 'id',
             index: 'id',
             editable: true,
             width: 60,
             sorttype: "int",
             search: true
         }, {
             name: 'invdate',
             index: 'invdate',
             editable: true,
             width: 90,
             sorttype: "date",
             formatter: "date"
         }, {
             name: 'name',
             index: 'name',
             editable: true,
             width: 100
         }, {
             name: 'amount',
             index: 'amount',
             editable: true,
             width: 80,
             align: "right",
             sorttype: "float",
             formatter: "number"
         }, {
             name: 'tax',
             index: 'tax',
             editable: true,
             width: 80,
             align: "right",
             sorttype: "float"
         }, {
             name: 'total',
             index: 'total',
             editable: true,
             width: 80,
             align: "right",
             sorttype: "float"
         }, {
             name: 'note',
             index: 'note',
             editable: true,
             width: 100,
             sortable: false
         }],
         pager: "#jqGridPager01",
         viewrecords: true,
         add: true,
         edit: true,
         addtext: 'Add',
         edittext: 'Edit',
         caption: "Data",
         hidegrid: false
     });

     // Setup buttons
     jQuery("#jqGrid01").jqGrid('navGrid', '#jqGridPager01', {
         edit: true,
         add: true,
         del: true,
         search: true
     }, {
         height: 200,
         reloadAfterSubmit: true
     });

     // Setup filters
     jQuery("#jqGrid01").jqGrid('filterToolbar', {
         defaultSearch: true,
         stringResult: true
     });

     $("#jqGrid01").jqGrid('setGridWidth', $(".jqgrid").width(), true);

     // Bootstrap customization
     $(".ui-pg-input").attr('class', 'form-control');
 }

 function comingsoon() {
     $(".coming-soon").backstretch([
         "assets/img/big/1.jpg", "assets/img/big/2.jpg", "assets/img/big/3.jpg"
     ], {
         duration: 3000,
         fade: 750
     });
     $('.countdown').downCount({
         date: '09/09/2014 12:00:00',
         offset: +10
     });
 }

 function colorpicker() {
     $('.my-colorpicker-control').colorpicker();
     $('#cp1').colorpicker();
     $('#cp2').colorpicker();
     $(".rgb-demo").ColorPickerSliders({
         flat: true,
         swatches: false,
         order: {
             rgb: 1,
             opacity: 2
         },
         labels: {
             rgbred: 'Red',
             rgbgreen: 'Green',
             rgbblue: 'Blue'
         }
     });
     $(".cielch-demo").ColorPickerSliders({
         flat: true,
         customswatches: "different-swatches-groupname",
         swatches: ["rgb(174, 156, 227)", "rgb(29, 179, 229)", "rgb(54, 185, 163)", "rgb(144, 176, 105)", "rgb(224, 148, 110)", "rgb(233, 137, 168)"],
         order: {
             cie: 1,
             preview: 2
         }
     });
     var options = {
         colors: [
             ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#EFF7F7', '#FFFFFF']
         ]
     }
     $('#colorpalette4').colorPalette(options)
         .on('selectColor', function (e) {
             $('#selected-color3').val(e.color);
         });
     $('#colorpalette2').colorPalette()
         .on('selectColor', function (e) {
             $('#selected-color2 i').css('color', e.color);
         });
     $('#colorpalette3').colorPalette()
         .on('selectColor', function (e) {
             $('#selected-color2').css('background-color', e.color);
         });
     $('#colorpalette1').colorPalette()
         .on('selectColor', function (e) {
             $('#selected-color1').val(e.color);
         });
 }

 function components() {
     $('[rel=popover]').popover();
     $('[rel=tooltip]').tooltip();
     $('.dynamic .demo').click(function () {
         var tmpl = [
             // tabindex is required for focus
             '<div class="modal hide fade" tabindex="-1">',
             '<div class="modal-header">',
             '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
             '<h4 class="modal-title">Modal header</h4>',
             '</div>',
             '<div class="modal-body">',
             '<p>Test</p>',
             '</div>',
             '<div class="modal-footer">',
             '<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>',
             '<a href="#" class="btn btn-primary">Save changes</a>',
             '</div>',
             '</div>'
         ].join('');

         $(tmpl).modal();
     });
     var $modal = $('#ajax-modal');

     $('.ajaxmodal').on('click', function () {
         // create the backdrop and wait for next modal to be triggered
         $('body').modalmanager('loading');

         setTimeout(function () {
             $modal.load('assets/bootstrapmodal/modalajax.html', '', function () {
                 $modal.modal();
             });
         }, 1000);
     });

     $modal.on('click', '.update', function () {
         $modal.modal('loading');
         setTimeout(function () {
             $modal
                 .modal('loading')
                 .find('.modal-body')
                 .prepend('<div class="alert alert-info fade in">' +
                     'Updated!<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                     '</div>');
         }, 1000);
     });

 }

 function contact() {
     new GMaps({
         div: '#map',
         lat: -12.043333,
         lng: -77.028333
     });
     $('textarea').autosize();
 }

 function creativebuttons() {
     var buttons7Click = Array.prototype.slice.call(document.querySelectorAll('#cbtn-click button')),
         buttons9Click = Array.prototype.slice.call(document.querySelectorAll('button.cbtn-8g')),
         totalButtons7Click = buttons7Click.length,
         totalButtons9Click = buttons9Click.length;

     buttons7Click.forEach(function (el, i) {
         el.addEventListener('click', activate, false);
     });
     buttons9Click.forEach(function (el, i) {
         el.addEventListener('click', activate, false);
     });

     function activate() {
         var self = this,
             activatedClass = 'cbtn-activated';

         if (classie.has(this, 'cbtn-7h')) {
             // if it is the first of the two cbtn-7h then activatedClass = 'cbtn-error';
             // if it is the second then activatedClass = 'cbtn-success'
             activatedClass = buttons7Click.indexOf(this) === totalButtons7Click - 2 ? 'cbtn-error' : 'cbtn-success';
         } else if (classie.has(this, 'cbtn-8g')) {
             // if it is the first of the two cbtn-8g then activatedClass = 'cbtn-success3d';
             // if it is the second then activatedClass = 'cbtn-error3d'
             activatedClass = buttons9Click.indexOf(this) === totalButtons9Click - 2 ? 'cbtn-success3d' : 'cbtn-error3d';
         }

         if (!classie.has(this, activatedClass)) {
             classie.add(this, activatedClass);
             setTimeout(function () {
                 classie.remove(self, activatedClass)
             }, 1000);
         }
     }
 }

 function daterangepicker() {
     $("#form_datetime").datetimepicker({
         format: 'yyyy-mm-dd hh:ii'
     });
     $("#form_datetime2").datetimepicker({
         format: "dd MM yyyy - hh:ii"
     });
     $('#t3').clockface({
         format: 'H:mm'
     }).clockface('show', '14:30');
     $('#t1').clockface();
     $('#t2').clockface({
         format: 'HH:mm',
         trigger: 'manual'
     });

     $('#toggle-btn').click(function (e) {
         e.stopPropagation();
         $('#t2').clockface('toggle');
     });
     $('#reservationtime').daterangepicker({
         timePicker: true,
         timePickerIncrement: 30,
         format: 'MM/DD/YYYY h:mm A'
     });
     $('#reservation').daterangepicker();
     $('#reportrange').daterangepicker({
             startDate: moment().subtract('days', 29),
             endDate: moment(),
             minDate: '01/01/2012',
             maxDate: '12/31/2014',
             dateLimit: {
                 days: 60
             },
             showDropdowns: true,
             showWeekNumbers: true,
             timePicker: false,
             timePickerIncrement: 1,
             timePicker12Hour: true,
             ranges: {
                 'Today': [moment(), moment()],
                 'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                 'Last 7 Days': [moment().subtract('days', 6), moment()],
                 'Last 30 Days': [moment().subtract('days', 29), moment()],
                 'This Month': [moment().startOf('month'), moment().endOf('month')],
                 'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
             },
             opens: 'left',
             buttonClasses: ['btn btn-default'],
             applyClass: 'btn-small btn-primary',
             cancelClass: 'btn-small',
             format: 'MM/DD/YYYY',
             separator: ' to ',
             locale: {
                 applyLabel: 'Submit',
                 fromLabel: 'From',
                 toLabel: 'To',
                 customRangeLabel: 'Custom Range',
                 daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                 monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                 firstDay: 1
             }
         },
         function (start, end) {
             console.log("Callback has been called!");
             $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
         }
     );
     //Set the initial state of the picker label
     $('#reportrange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
 }

 function dragwidgets() {
     $(".column").sortable({
         connectWith: ".column"
     });

     $(".column").disableSelection();
     $("#sortable1, #sortable2").sortable({
         connectWith: ".connectedSortable"
     }).disableSelection();
     $("#owl-example").owlCarousel({
         items: 2
     });
     $('.dd').nestable();
     $("#sortable").sortable();
     $("#sortable").disableSelection();
 }

 function fueluxwizard() {
     $('#MyWizard').on('change', function (e, data) {
         console.log('change');
         if (data.step === 3 && data.direction === 'next') {
             // return e.preventDefault();
         }
     });
     $('#MyWizard').on('changed', function (e, data) {
         console.log('changed');
     });
     $('#MyWizard').on('finished', function (e, data) {
         console.log('finished');
     });
     $('#btnWizardPrev').on('click', function () {
         $('#MyWizard').wizard('previous');
     });
     $('#btnWizardNext').on('click', function () {
         $('#MyWizard').wizard('next', 'foo');
     });
     $('#btnWizardStep').on('click', function () {
         var item = $('#MyWizard').wizard('selectedItem');
         console.log(item.step);
     });
     $('#MyWizard').on('stepclick', function (e, data) {
         console.log('step' + data.step + ' clicked');
         if (data.step === 1) {
             // return e.preventDefault();
         }
     });

     // optionally navigate back to 2nd step
     $('#btnStep2').on('click', function (e, data) {
         $('[data-target=#step2]').trigger("click");
     });

 }

 function fullcalendar() {
     $('#external-events div.external-event').each(function () {

         // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
         // it doesn't need to have a start or end
         var eventObject = {
             title: $.trim($(this).text()) // use the element's text as the event title
         };

         // store the Event Object in the DOM element so we can get to it later
         $(this).data('eventObject', eventObject);

         // make the event draggable using jQuery UI
         $(this).draggable({
             zIndex: 999,
             revert: true, // will cause the event to go back to its
             revertDuration: 0 //  original position after the drag
         });

     });


     /* initialize the calendar
		-----------------------------------------------------------------*/

     $('#calendar').fullCalendar({
         header: {
             left: 'prev,next today',
             center: 'title',
             right: 'month,agendaWeek,agendaDay'
         },
         editable: true,
         droppable: true, // this allows things to be dropped onto the calendar !!!
         drop: function (date, allDay) { // this function is called when something is dropped

             // retrieve the dropped element's stored Event Object
             var originalEventObject = $(this).data('eventObject');

             // we need to copy it, so that multiple events don't have a reference to the same object
             var copiedEventObject = $.extend({}, originalEventObject);

             // assign it the date that was reported
             copiedEventObject.start = date;
             copiedEventObject.allDay = allDay;

             // render the event on the calendar
             // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
             $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

             // is the "remove after drop" checkbox checked?
             if ($('#drop-remove').is(':checked')) {
                 // if so, remove the element from the "Draggable Events" list
                 $(this).remove();
             }

         }
     });

 }

 function googlemaps() {
     new GMaps({
         div: '#map',
         lat: -12.043333,
         lng: -77.028333
     });

     url = GMaps.staticMapURL({
         size: [610, 300],
         lat: -12.043333,
         lng: -77.028333
     });

     $('<img/>').attr('src', url)
         .appendTo('#static');

     map = new GMaps({
         div: '#route',
         lat: -12.043333,
         lng: -77.028333
     });
     $('#start_travel').click(function (e) {
         e.preventDefault();
         map.travelRoute({
             origin: [-12.044012922866312, -77.02470665341184],
             destination: [-12.090814532191756, -77.02271108990476],
             travelMode: 'driving',
             step: function (e) {
                 $('#instructions').append('<li>' + e.instructions + '</li>');
                 $('#instructions li:eq(' + e.step_number + ')').delay(450 * e.step_number).fadeIn(200, function () {
                     map.setCenter(e.end_location.lat(), e.end_location.lng());
                     map.drawPolyline({
                         path: e.path,
                         strokeColor: '#131540',
                         strokeOpacity: 0.6,
                         strokeWeight: 6
                     });
                 });
             }
         });
     });

     var addresspicker = $("#addresspicker").addresspicker();
     var addresspickerMap = $("#addresspicker_map").addresspicker({
         regionBias: "de",
         map: "#map_canvas",
         typeaheaddelay: 1000,
         mapOptions: {
             zoom: 16,
             center: new google.maps.LatLng(52.5122, 13.4194)
         }

     });

     addresspickerMap.on("addressChanged", function (evt, address) {
         console.dir(address);
     });
     addresspickerMap.on("positionChanged", function (evt, markerPosition) {
         markerPosition.getAddress(function (address) {
             if (address) {
                 $("#addresspicker_map").val(address.formatted_address);
             }
         })
     });
 }

 function humanealerts() {
     $('#boldlight').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-boldlight'
         })
         notify.log('Bold Light')
     });
     $('#boldlighterror').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-boldlight',
             addnCls: 'humane-boldlight-error'
         })
         notify.log('Bold Light Error')
     });
     $('#boldlightinfo').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-boldlight',
             addnCls: 'humane-boldlight-info'
         })
         notify.log('Bold Light Info')
     });
     $('#boldlightsuccess').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-boldlight',
             addnCls: 'humane-boldlight-success'
         })
         notify.log('Bold Light Success')
     });
     $('#bigbox').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-bigbox'
         })
         notify.log('Big Box')
     });
     $('#bigboxerror').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-bigbox',
             addnCls: 'humane-bigbox-error'
         })
         notify.log('Big Box Error')
     });
     $('#bigboxinfo').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-bigbox',
             addnCls: 'humane-bigbox-info'
         })
         notify.log('Big Box Info')
     });
     $('#bigboxsuccess').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-bigbox',
             addnCls: 'humane-bigbox-success'
         })
         notify.log('Big Box Success')
     });
     $('#libnotify').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-libnotify'
         })
         notify.log('Libnotify')
     });
     $('#libnotifyerror').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-libnotify',
             addnCls: 'humane-libnotify-error'
         })
         notify.log('Libnotify Error')
     });
     $('#libnotifyinfo').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-libnotify',
             addnCls: 'humane-libnotify-info'
         })
         notify.log('Libnotify Info')
     });
     $('#libnotifysuccess').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-libnotify',
             addnCls: 'humane-libnotify-success'
         })
         notify.log('Libnotify Success')
     });
     $('#jackedup').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-jackedup'
         })
         notify.log('Jacked Up')
     });
     $('#jackeduperror').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-jackedup',
             addnCls: 'humane-jackedup-error'
         })
         notify.log('Jacked Up Error')
     });
     $('#jackedupinfo').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-jackedup',
             addnCls: 'humane-jackedup-info'
         })
         notify.log('Jacked Up Info')
     });
     $('#jackedupsuccess').click(function () {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-jackedup',
             addnCls: 'humane-jackedup-success'
         })
         notify.log('Jacked Up Success')
     });
 }

 function icheck() {
     $('.colors li').click(function () {
         var self = $(this);

         if (!self.hasClass('active')) {
             self.siblings().removeClass('active');

             var skin = self.closest('.skin'),
                 color = self.attr('class') ? '-' + self.attr('class') : '',
                 checkbox = skin.data('icheckbox'),
                 radio = skin.data('iradio'),
                 checkbox_default = 'icheckbox_minimal',
                 radio_default = 'iradio_minimal';

             if (skin.hasClass('skin-square')) {
                 checkbox_default = 'icheckbox_square', radio_default = 'iradio_square';
                 checkbox == undefined && (checkbox = 'icheckbox_square-green', radio = 'iradio_square-green');
             };

             if (skin.hasClass('skin-flat')) {
                 checkbox_default = 'icheckbox_flat', radio_default = 'iradio_flat';
                 checkbox == undefined && (checkbox = 'icheckbox_flat-red', radio = 'iradio_flat-red');
             };

             if (skin.hasClass('skin-line')) {
                 checkbox_default = 'icheckbox_line', radio_default = 'iradio_line';
                 checkbox == undefined && (checkbox = 'icheckbox_line-blue', radio = 'iradio_line-blue');
             };

             checkbox == undefined && (checkbox = checkbox_default, radio = radio_default);

             skin.find('input, .skin-states .state').each(function () {
                 var element = $(this).hasClass('state') ? $(this) : $(this).parent(),
                     element_class = element.attr('class').replace(checkbox, checkbox_default + color).replace(radio, radio_default + color);

                 element.attr('class', element_class);
             });

             skin.data('icheckbox', checkbox_default + color);
             skin.data('iradio', radio_default + color);
             self.addClass('active');
         };
     });
     $('.skin-minimal input').iCheck({
         checkboxClass: 'icheckbox_minimal',
         radioClass: 'iradio_minimal',
         increaseArea: '20%'
     });
     $('.skin-square input').iCheck({
         checkboxClass: 'icheckbox_square-green',
         radioClass: 'iradio_square-green',
         increaseArea: '20%'
     });
     $('.skin-flat input').iCheck({
         checkboxClass: 'icheckbox_flat-red',
         radioClass: 'iradio_flat-red'
     });
     $('.skin-line input').each(function () {
         var self = $(this),
             label = self.next(),
             label_text = label.text();

         label.remove();
         self.iCheck({
             checkboxClass: 'icheckbox_line-blue',
             radioClass: 'iradio_line-blue',
             insert: '<div class="icheck_line-icon"></div>' + label_text
         });
     });
     $('.skin-polaris input').iCheck({
         checkboxClass: 'icheckbox_polaris',
         radioClass: 'iradio_polaris',
         increaseArea: '-10%'
     });
     $('.skin-futurico input').iCheck({
         checkboxClass: 'icheckbox_futurico',
         radioClass: 'iradio_futurico',
         increaseArea: '20%'
     });
 }

 function inbox() {
     $('[rel=tooltip]').tooltip();

     function inbox_size() {
         $('.message-summary, .messagecon').height($(window).height() - 180);
         if ($(window).height() <= 450) {
             $('.message-summary, .messagecon').height(400);
         }
     }
     inbox_size();
     window.onresize = function () {
         $('.message-summary, .messagecon').height($(window).height() - 180);
         if ($(window).height() <= 450) {
             $('.message-summary, .messagecon').height(400);
         }
     }
 }

 function ionsounds() {
     $.ionSound({
         sounds: [
             "beer_can_opening",
             "bell_ring",
             "branch_break",
             "button_click",
             "button_click_on",
             "button_push",
             "button_tiny",
             "camera_flashing",
             "camera_flashing_2",
             "cd_tray",
             "computer_error",
             "door_bell",
             "door_bump",
             "glass",
             "keyboard_desk",
             "light_bulb_breaking",
             "metal_plate",
             "metal_plate_2",
             "pop_cork",
             "snap",
             "staple_gun",
             "tap",
             "water_droplet",
             "water_droplet_2",
             "water_droplet_3"
         ],
         path: "assets/ionsound/sounds/", // set path to sounds
         multiPlay: false, // playing only 1 sound at once
         volume: "0.3"
     });
     $('#beer_can_opening').click(function () {
         $.ionSound.play('beer_can_opening');
     });
     $('#bell_ring').click(function () {
         $.ionSound.play('bell_ring');
     });
     $('#branch_break').click(function () {
         $.ionSound.play('branch_break');
     });
     $('#button_click').click(function () {
         $.ionSound.play('button_click');
     });
     $('#button_click_on').click(function () {
         $.ionSound.play('button_click_on');
     });
     $('#button_push').click(function () {
         $.ionSound.play('button_push');
     });
     $('#button_tiny').click(function () {
         $.ionSound.play('button_tiny');
     });
     $('#camera_flashing').click(function () {
         $.ionSound.play('camera_flashing');
     });
     $('#camera_flashing_2').click(function () {
         $.ionSound.play('camera_flashing_2');
     });
     $('#cd_tray').click(function () {
         $.ionSound.play('cd_tray');
     });
     $('#computer_error').click(function () {
         $.ionSound.play('computer_error');
     });
     $('#door_bell').click(function () {
         $.ionSound.play('door_bell');
     });
     $('#door_bump').click(function () {
         $.ionSound.play('door_bump');
     });
     $('#glass').click(function () {
         $.ionSound.play('glass');
     });
     $('#keyboard_desk').click(function () {
         $.ionSound.play('keyboard_desk');
     });
     $('#light_bulb_breaking').click(function () {
         $.ionSound.play('light_bulb_breaking');
     });
     $('#metal_plate').click(function () {
         $.ionSound.play('metal_plate');
     });
     $('#metal_plate_2').click(function () {
         $.ionSound.play('metal_plate_2');
     });
     $('#pop_cork').click(function () {
         $.ionSound.play('pop_cork');
     });
     $('#snap').click(function () {
         $.ionSound.play('snap');
     });
     $('#staple_gun').click(function () {
         $.ionSound.play('staple_gun');
     });
     $('#tap').click(function () {
         $.ionSound.play('tap');
     });
     $('#water_droplet').click(function () {
         $.ionSound.play('water_droplet');
     });
     $('#water_droplet_2').click(function () {
         $.ionSound.play('water_droplet_2');
     });
     $('#water_droplet_3').click(function () {
         $.ionSound.play('water_droplet_3');
     });
 }

 function jqrangesliders() {
     $("#slider").rangeSlider();
     $("#slider2").dateRangeSlider();
     $("#slider3").editRangeSlider();
     var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
     $("#slider5").dateRangeSlider({
         bounds: {
             min: new Date(2012, 0, 1),
             max: new Date(2012, 11, 31, 12, 59, 59)
         },
         defaultValues: {
             min: new Date(2012, 1, 10),
             max: new Date(2012, 4, 22)
         },
         scales: [{
             first: function (value) {
                 return value;
             },
             end: function (value) {
                 return value;
             },
             next: function (value) {
                 var next = new Date(value);
                 return new Date(next.setMonth(value.getMonth() + 1));
             },
             label: function (value) {
                 return months[value.getMonth()];
             },
             format: function (tickContainer, tickStart, tickEnd) {
                 tickContainer.addClass("myCustomClass");
             }
         }]
     });
     $("#slider4").rangeSlider({
         scales: [
             // Primary scale
             {
                 first: function (val) {
                     return val;
                 },
                 next: function (val) {
                     return val + 10;
                 },
                 stop: function (val) {
                     return false;
                 },
                 label: function (val) {
                     return val;
                 },
                 format: function (tickContainer, tickStart, tickEnd) {
                     tickContainer.addClass("myCustomClass");
                 }
             },
             // Secondary scale
             {
                 first: function (val) {
                     return val;
                 },
                 next: function (val) {
                     if (val % 10 === 9) {
                         return val + 2;
                     }
                     return val + 1;
                 },
                 stop: function (val) {
                     return false;
                 },
                 label: function () {
                     return null;
                 }
             }
         ]
     });
 }

 function jqueryui() {
     var spinner = $("#spinner").spinner();

     $("#disable").click(function () {
         if (spinner.spinner("option", "disabled")) {
             spinner.spinner("enable");
         } else {
             spinner.spinner("disable");
         }
     });
     $("#destroy").click(function () {
         if (spinner.data("ui-spinner")) {
             spinner.spinner("destroy");
         } else {
             spinner.spinner();
         }
     });
     $("#getvalue").click(function () {
         alert(spinner.spinner("value"));
     });
     $("#setvalue").click(function () {
         spinner.spinner("value", 5);
     });

     $("#progress-bar-1").progressbar({
         value: 1,
         create: function () {
             $("#progress-bar-1 > .ui-progressbar-value").animate({
                 width: "79%"
             }, {
                 duration: 49000,
                 step: function (now) {
                     $(".progress-bar-result-1").html(parseInt(now));
                 }
             })
         }
     });
     $("#progress-bar-2").progressbar({
         value: 1,
         create: function () {
             $("#progress-bar-2 > .ui-progressbar-value").animate({
                 width: "100%"
             }, {
                 duration: 70000,
                 step: function (now) {
                     $(".progress-bar-result-2").html(parseInt(now));
                 }
             })
         }
     });
     $("#progress-bar-3").progressbar({
         value: 1,
         create: function () {
             $("#progress-bar-3 > .ui-progressbar-value").animate({
                 width: "100%"
             }, {
                 duration: 19000,
                 step: function (now) {
                     $(".progress-bar-result-3").html(parseInt(now * .78));
                 }
             })
         }
     });
     $("#slider").slider({
         animate: true,
         range: "min",
         value: 22,
         min: 0,
         max: 100,

         //this gets a live reading of the value and prints it on the page
         slide: function (event, ui) {
             $(".slider-result").html(ui.value);
         }
     });
     $("#slider2").slider({
         animate: true,
         range: "min",
         value: 170,
         min: 0,
         max: 500,

         //this gets a live reading of the value and prints it on the page
         slide: function (event, ui) {
             $(".slider-result-2").html(ui.value);
         }
     });
     $("#slider3").slider({
         animate: true,
         range: "max",
         value: 332,
         min: 0,
         max: 500,

         //this gets a live reading of the value and prints it on the page
         slide: function (event, ui) {
             $(".slider-result-3").html(ui.value);
         }
     });
     $("#slider4").slider({
         animate: true,
         range: "min",
         value: 20,
         min: 0,
         max: 100,
         step: 10,

         //this gets a live reading of the value and prints it on the page
         slide: function (event, ui) {
             $(".slider-result-4").html(ui.value);
         }
     });
     $("#slider5").slider({
         animate: true,
         range: true,
         min: 0,
         max: 500,
         values: [163, 354],
         slide: function (event, ui) {
             $(".slider-result-5").html("$" + ui.values[0] + " - $" + ui.values[1]);
         }
     });
     $('#dialog_link').click(function () {
         $('#dialog_simple').dialog('open');
         return false;
     });

     // Modal Link
     $('#modal_link').click(function () {
         $('#dialog-message').dialog('open');
         return false;
     });

     // Dialog Simple
     $('#dialog_simple').dialog({
         autoOpen: false,
         width: 600,
         modal: true,
         buttons: {
             "Ok": function () {
                 $(this).dialog("close");
             },
             "Cancel": function () {
                 $(this).dialog("close");
             }
         }
     });

     // Dialog message
     $("#dialog-message").dialog({
         autoOpen: false,
         modal: true,
         buttons: {
             Ok: function () {
                 $(this).dialog("close");
             }
         }
     });
     $('#datepicker').datepicker({
         inline: true
     });
     var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];

     $("#tags").autocomplete({
         source: availableTags
     });
 }

 function jqueryuislider() {
     $("#slider-vertical-1").slider({
         animate: true,
         value: 12,
         min: 0,
         max: 100,
         range: "min",
         orientation: "vertical"
     });
     $("#slider-vertical-2").slider({
         animate: true,
         value: 22,
         min: 0,
         max: 100,
         range: "min",
         orientation: "vertical"
     });
     $("#slider-vertical-3").slider({
         animate: true,
         value: 82,
         min: 0,
         max: 100,
         range: "max",
         orientation: "vertical"
     });
     $("#slider-vertical-4").slider({
         animate: true,
         value: 32,
         min: 0,
         max: 100,
         range: "min",
         orientation: "vertical"
     });
     $("#slider-vertical-5").slider({
         animate: true,
         value: 42,
         min: 0,
         max: 100,
         range: "max",
         orientation: "vertical"
     });
     $("#slider-vertical-6").slider({
         animate: true,
         value: 62,
         min: 0,
         max: 100,
         range: "min",
         orientation: "vertical"
     });

     $("#slider").slider({
         animate: true,
         range: "min",
         value: 22,
         min: 0,
         max: 100,

         //this gets a live reading of the value and prints it on the page
         slide: function (event, ui) {
             $(".slider-result").html(ui.value);
         }
     });
     $("#slider2").slider({
         animate: true,
         range: "min",
         value: 170,
         min: 0,
         max: 500,

         //this gets a live reading of the value and prints it on the page
         slide: function (event, ui) {
             $(".slider-result-2").html(ui.value);
         }
     });
     $("#slider3").slider({
         animate: true,
         range: "max",
         value: 332,
         min: 0,
         max: 500,

         //this gets a live reading of the value and prints it on the page
         slide: function (event, ui) {
             $(".slider-result-3").html(ui.value);
         }
     });
     $("#slider4").slider({
         animate: true,
         range: "min",
         value: 20,
         min: 0,
         max: 100,
         step: 10,

         //this gets a live reading of the value and prints it on the page
         slide: function (event, ui) {
             $(".slider-result-4").html(ui.value);
         }
     });
     $("#slider5").slider({
         animate: true,
         range: true,
         min: 0,
         max: 500,
         values: [163, 354],
         slide: function (event, ui) {
             $(".slider-result-5").html("$" + ui.values[0] + " - $" + ui.values[1]);
         }
     });
 }

 function jwizard() {
     $("#wizard").jWizard();
 }

 function laddabootstrap() {
     Ladda.bind('div:not(.progress-demo) button', {
         timeout: 2000
     });

     Ladda.bind('.progress-demo button', {
         callback: function (instance) {
             var progress = 0;
             var interval = setInterval(function () {
                 progress = Math.min(progress + Math.random() * 0.1, 1);
                 instance.setProgress(progress);

                 if (progress === 1) {
                     instance.stop();
                     clearInterval(interval);
                 }
             }, 200);
         }
     });

     // You can control loading explicitly using the JavaScript API
     // as outlined below:

     // var l = Ladda.create( document.querySelector( 'button' ) );
     // l.start();
     // l.stop();
     // l.toggle();
     // l.isLoading();
     // l.setProgress( 0-1 );
 }

 function lightbox() {
     $(".boxer").boxer();
     $(".swipebox").swipebox();
     $('.colorbox').colorbox({
         rel: 'gal'
     });
 }

 function lockscreen() {
     $(".lockscreen").fadeIn()

     function demo() {
         var engine = new RainyDay('canvas', 'background', window.innerWidth, window.innerHeight);
         engine.gravity = engine.GRAVITY_NON_LINEAR;
         engine.trail = engine.TRAIL_DROPS;
         engine.VARIABLE_GRAVITY_ANGLE = Math.PI / 8;
         engine.rain([
             engine.preset(0, 2, 0.5),
             engine.preset(4, 4, 1)
         ], 50);
     }
     demo();
 }

 function login() {
     $(".login").backstretch("assets/img/big/1.jpg");
     $(".login-panel").fadeIn();
 }

 function markdown() {
     $("#markdown").markdown({
         additionalButtons: [
             [{
                 name: "groupCustom",
                 data: [{
                     name: "cmdBeer",
                     toggle: true, // this param only take effect if you load bootstrap.js
                     title: "Beer",
                     icon: "fa fa-glass",
                     callback: function (e) {
                         // Replace selection with some drinks
                         var chunk, cursor,
                             selected = e.getSelection(),
                             content = e.getContent(),
                             drinks = ["Heinekken", "Budweiser",
                                 "Iron City", "Amstel Light",
                                 "Red Stripe", "Smithwicks",
                                 "Westvleteren", "Sierra Nevada",
                                 "Guinness", "Corona", "Calsberg"
                             ],
                             index = Math.floor((Math.random() * 10) + 1)


                             // Give random drink
                             chunk = drinks[index]

                             // transform selection and set the cursor into chunked text
                             e.replaceSelection(chunk)
                             cursor = selected.start

                             // Set the cursor
                             e.setSelection(cursor, cursor + chunk.length)
                     }
                 }]
             }]
         ]
     });
 }

 function medium() {
     new Medium({
         element: document.getElementById('title'),
         mode: 'inline',
         maxLength: 25,
         placeholder: 'Your Title',
         tags: {
             paragraph: 'p',
             outerLevel: ['pre', 'blockquote', 'figure', 'hr'],
             innerLevel: ['a', 'b', 'u', 'i', 'img', 'strong']
         }
     });
     new Medium({
         element: document.getElementById('article'),
         mode: 'rich',
         tags: {
             paragraph: 'p',
             outerLevel: ['pre', 'blockquote', 'figure', 'hr'],
             innerLevel: ['a', 'b', 'u', 'i', 'img', 'strong']
         }
     });
 }

 function messengeralerts() {
     $('#messengerice').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
             theme: 'ice'
         }
         Messenger().post({
             message: 'There was an cat snooping around your request.',
             showCloseButton: true
         });
     });
     $('#messengerfuture').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
             theme: 'future'
         }
         Messenger().post({
             message: 'This is the future',
             showCloseButton: true
         });
     });
     $('#messengerflat').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
             theme: 'flat'
         }
         Messenger().post({
             message: 'Flat alert',
             showCloseButton: true
         });
     });
     $('#messengerblock').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
             theme: 'block'
         }
         Messenger().post({
             message: 'Block alert',
             showCloseButton: true
         });
     });
     $('#messengerair').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
             theme: 'air'
         }
         Messenger().post({
             message: 'nsjkandkjanskjdnijbf ... a cat walked on my keyboard',
             theme: 'air',
             showCloseButton: true
         });
     });
     $('#messengertopleft').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-top messenger-on-left',
             theme: 'flat'
         }
         Messenger().post({
             message: 'This is an ALERT',
             showCloseButton: true
         });
     });
     $('#messengertop').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-top',
             theme: 'flat'
         }
         Messenger().post({
             message: 'This is an ALERT',
             showCloseButton: true
         });
     });
     $('#messengertopright').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
             theme: 'flat'
         }
         Messenger().post({
             message: 'This is an ALERT',
             showCloseButton: true
         });
     });
     $('#messengerbottomright').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
             theme: 'flat'
         }
         Messenger().post({
             message: 'This is an ALERT',
             showCloseButton: true
         });
     });
     $('#messengerbottom').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-bottom',
             theme: 'flat'
         }
         Messenger().post({
             message: 'This is an ALERT',
             showCloseButton: true
         });
     });
     $('#messengerbottomleft').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-left',
             theme: 'flat'
         }
         Messenger().post({
             message: 'This is an ALERT',
             showCloseButton: true
         });
     });
     $('#messengerlaunch').click(function () {
         Messenger.options = {
             extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-left'
         }
         var i;

         i = 0;

         Messenger().run({
             errorMessage: 'Destroying the planet',
             successMessage: 'Planet destroyed!',
             action: function (opts) {
                 if (++i < 3) {
                     return opts.error({
                         status: 500,
                         readyState: 0,
                         responseText: 0
                     });
                 } else {
                     return opts.success();
                 }
             }
         });

     });
 }

 function newsarticle() {
     $("textarea").fseditor();
 }

 function nouislider() {
     var slider3 = $('#slider7');

     slider3.noUiSlider({
         range: [0, 100],
         start: 80,
         handles: 1,
         connect: true
     });

     $("#slider7_set").click(function () {

         // Set the slider value to 20
         slider3.val(20);
     });
     var slider2 = $('#slider6'),
         inp1 = slider2.parent().find('[name="val1"]'),
         inp2 = slider2.parent().find('[name="val2"]')

         slider2.noUiSlider({
             range: [20, 60],
             start: [30, 50],
             connect: true,
             serialization: {
                 // provide 2 jQuery objects
                 to: [inp1, inp2],
                 // round to 1 decimal
                 resolution: 0.1
             }

             // listen to the form change event
         });
     var slider1 = $('#slider5'),
         inp2 = slider1.parent().find('[name="val3"]')

         slider1.noUiSlider({
             range: [20, 60],
             start: [30, 50],
             connect: true,
             serialization: {
                 // define a name for a new input field, 
                 // and pass a jQuery object with another.
                 to: ["val1", inp2],
                 // round to 0 decimals
                 resolution: 1
             }

         });
     $("#slider1").noUiSlider({
         start: [20, 80],
         range: [0, 100],
         connect: true,
         handles: 2
     });
     $("#slider2").noUiSlider({
         range: [20, 100],
         start: [40, 80],
         step: 1,
         connect: true,
         slide: function () {
             var values = $(this).val();

             $(this).next('span').text(
                 values[0] + " - " + values[1]
             );
         }
     });
     $('#slider3').noUiSlider({
         range: [0, 100],
         start: [40, 80],
         step: 1,
         connect: true
     });

     $("#slider3-checkbox")
         .click(function () {
             if (this.checked) {
                 // Disable the slider
                 $("#slider3").attr("disabled", "disabled");
             } else {
                 // Enabled the slider
                 $("#slider3").removeAttr("disabled");
             }
         });
 }

 function photogrid() {
     $('.photoset-grid-lightbox').photosetGrid({
         highresLinks: true,
         rel: 'gallery',
         gutter: '20px',

         onComplete: function () {
             $('.photoset-grid-lightbox').attr('style', '');
             $('.photoset-grid-lightbox a').colorbox({
                 photo: true,
                 scalePhotos: true,
                 maxHeight: '90%',
                 maxWidth: '90%'
             });
         }
     });
 }

 function pinesalerts() {
     $('#changeing_notice').click(function () {
         $.pnotify({
             title: 'Notice',
             text: 'Right now I\'m a notice.',
             before_close: function (pnotify) {
                 pnotify.pnotify({
                     title: 'Error',
                     text: 'Uh oh. Now I\'ve become an error.',
                     type: 'error',
                     before_close: function (pnotify) {
                         pnotify.pnotify({
                             title: 'Success',
                             text: 'I fixed the error!',
                             type: 'success',
                             before_close: function (pnotify) {
                                 pnotify.pnotify({
                                     title: 'Info',
                                     text: 'Everything\'s cool now.',
                                     type: 'info',
                                     before_close: null
                                 });
                                 pnotify.pnotify_queue_remove();
                                 pnotify.effect('bounce');
                                 return false;
                             }
                         });
                         pnotify.pnotify_queue_remove();
                         pnotify.effect('bounce');
                         return false;
                     }
                 });
                 pnotify.pnotify_queue_remove();
                 pnotify.effect('bounce');
                 return false;
             }
         });
     });
     $('#dyn_notice').click(function () {
         var percent = 0;
         var notice = $.pnotify({
             title: "Please Wait",
             type: 'info',
             icon: 'picon picon-throbber',
             hide: false,
             closer: false,
             sticker: false,
             opacity: .75,
             shadow: false,
             width: "150px"
         });

         setTimeout(function () {
             notice.pnotify({
                 title: false
             });
             var interval = setInterval(function () {
                 percent += 2;
                 var options = {
                     text: percent + "% complete."
                 };
                 if (percent == 80) options.title = "Almost There";
                 if (percent >= 100) {
                     window.clearInterval(interval);
                     options.title = "Done!";
                     options.type = "success";
                     options.hide = true;
                     options.closer = true;
                     options.sticker = true;
                     options.icon = 'picon picon-task-complete';
                     options.opacity = 1;
                     options.shadow = true;
                     options.width = $.pnotify.defaults.width;
                     //options.min_height = "300px";
                 }
                 notice.pnotify(options);
             }, 120);
         }, 2000);
     });
     $('#show_stack_info').click(function () {
         var modal_overlay;
         if (typeof info_box != "undefined") {
             info_box.pnotify_display();
             return;
         }
         info_box = $.pnotify({
             title: "Pines Notify Stacks",
             text: "Stacks are used to position notices and determine where new notices will go when they're created. Each notice that's placed into a stack will be positioned related to the other notices in that stack. There is no limit to the number of stacks, and no limit to the number of notices in each stack.",
             type: "info",
             icon: "picon picon-object-order-raise",
             delay: 20000,
             history: false,
             stack: false,
             before_open: function (pnotify) {
                 // Position this notice in the center of the screen.
                 pnotify.css({
                     "top": ($(window).height() / 2) - (pnotify.height() / 2),
                     "left": ($(window).width() / 2) - (pnotify.width() / 2)
                 });
                 // Make a modal screen overlay.
                 if (modal_overlay) modal_overlay.fadeIn("fast");
                 else modal_overlay = $("<div />", {
                     "class": "ui-widget-overlay",
                     "css": {
                         "display": "none",
                         "position": "fixed",
                         "top": "0",
                         "bottom": "0",
                         "right": "0",
                         "left": "0"
                     }
                 }).appendTo("body").fadeIn("fast");
             },
             before_close: function () {
                 modal_overlay.fadeOut("fast");
             }
         });
     });
 }

 function profile() {
     $('#textarea').wysihtml5();
     $(".selectpicker").select2();
     $("#sparkline").sparkline([5, 9, 4, 8, 4, 6, 8, 11, 6, 5, 8, 10], {
         type: 'line',
         width: '100%',
         height: '100px',
         lineColor: '#cccccc',
         fillColor: '#ffffff',
         lineWidth: 5,
         spotColor: '#cccccc',
         highlightSpotColor: '#cccccc',
         highlightLineColor: '#777777',
         minSpotColor: '#cccccc',
         maxSpotColor: '#cccccc'
     });
     $("#sparkline2").sparkline([5, 6, 7, 2, 0, -4, -2, 4, 7, 6, 2, 1, 5, 9, 6, 3, 1, -1, -2], {
         type: 'bar',
         width: '100%',
         height: '200px',
         barWidth: 10,
         tooltip: 'false',
         barSpacing: 5,
         barColor: '#cccccc',
         negBarColor: '#7f7f7f',
         zeroColor: '#cccccc'
     });
 }

 function register() {
     $(".register").backstretch("assets/img/big/1.jpg");
     $(".register-panel").fadeIn();
 }

 function select2() {
     $("#e1").select2();
     $("#e2").select2();
     $("#e4").select2({
         placeholder: "Select a State",
         allowClear: true
     });
     $("#e3").select2({
         placeholder: "Select a State"
     });
     $("#e5").select2({
         minimumInputLength: 2
     });
     $("#e6").select2({
         maximumSelectionSize: 3
     });
     $("#e7").select2();
     $("#e8").val(["AL", "AZ"]).select2();
     $("#e8_init").click(function () {
         $("#e8").select2();
     });
     $("#e8_destroy").click(function () {
         $("#e8").select2("destroy");
     });
     $("#e9").select2();
     $("#e9_2").select2();
     $("#e9_enable").click(function () {
         $("#e9,#e9_2").select2("enable", true);
     });
     $("#e9_disable").click(function () {
         $("#e9,#e9_2").select2("enable", false);
     });
     $("#e10").select2();
     $("#e10_set").click(function () {
         $("#e10").select2("data", [{
             id: "CA",
             text: "California"
         }, {
             id: "MA",
             text: "Massachusetts"
         }]);
     });
     $("#e11").select2()
     $("#e11_open").click(function () {
         $("#e11").select2("open");
     });
     $("#e11_close").click(function () {
         $("#e11").select2("close");
     });
 }

 function selectboxit() {
     $("#select").selectBoxIt();
     $("#select2").selectBoxIt({
         theme: "jqueryui"
     });
     $("#select3").selectBoxIt({
         showEffect: "fadeIn",
         showEffectSpeed: 400,
         hideEffect: "fadeOut",
         hideEffectSpeed: 400
     });

     $("#select4").selectBoxIt({
         showEffect: "shake",
         showEffectSpeed: 'slow',
         showEffectOptions: {
             times: 1
         },
         hideEffect: "explode"
     });
     $("#select5").selectBoxIt({
         native: true
     });
     $("#select6").selectBoxIt({
         defaultText: "Sample text here"
     });
     $("#select7").selectBoxIt({
         downArrowIcon: "icon-hand-down"
     });
     $("#select8").selectBoxIt();
     $("#select9").selectBoxIt();
     $("#select10").selectBoxIt();
     $("#select11").selectBoxIt();
     $("#select12").selectBoxIt();
     $("#select13").selectBoxIt();
     $("#select13").data("selectBox-selectBoxIt").remove(0);
     $("#select14").selectBoxIt();
     $("#select14").data("selectBox-selectBoxIt").remove([0, 1]);
     $("#select15").selectBoxIt();
 }

 function stepswizard() {
     $("#wizard3").steps({
         headerTag: "h2",
         bodyTag: "section",
         transitionEffect: "none",
         enableFinishButton: false,
         enablePagination: false,
         enableAllSteps: true,
         titleTemplate: "#title#",
         cssClass: "tabcontrol"
     });
     $("#wizard2").steps({
         headerTag: "h2",
         bodyTag: "section",
         transitionEffect: "slideLeft",
         stepsOrientation: "vertical"
     });
     $("#wizard").steps({
         headerTag: "h2",
         bodyTag: "section",
         transitionEffect: "slideLeft"
     });
 }

 function summernote() {
     $('#summernote').summernote({
         height: 300
     });
 }

 function tables() {
     $("#darktable").tablecloth({
         theme: "dark"
     });
     $("#statstable").tablecloth({
         theme: "stats"
     });
     $("#papertable").tablecloth({
         theme: "paper"
     });
 }

 function tagmanager() {
     var tag3 = jQuery("#tag-manager3").tagsManager({
         prefilled: ["Angola", "Laos", "Nepal"]
     });

     jQuery("#tag-manager3").typeahead({
         local: ['red', 'blue', 'green', 'yellow', 'violet', 'brown', 'purple', 'black', 'white']
     });
     jQuery("#tag-manager2").tagsManager({
         prefilled: ["Pisa", "Rome"]
     });
     jQuery("#tag-manager").tagsManager();
     jQuery("#tag-manager4").tagsManager();
     jQuery("#tag-manager5").tagsManager();
     jQuery("#tag-manager6").tagsManager();
     jQuery("#tag-manager7").tagsManager();
     jQuery("#tag-manager8").tagsManager();
 }

 function toastralerts() {
     var
     i = -1,
         toastCount = 0,
         $toastlast,
         getMessage = function () {
             var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
                 '<div><input class="form-control" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
                 'Are you the six fingered man?',
                 'Inconceivable!',
                 'I do not think that means what you think it means.',
                 'Have fun storming the castle!'
             ];
             i++;
             if (i === msgs.length) {
                 i = 0;
             }

             return msgs[i];
         };
     $('#showtoast').click(function () {
         var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
         var msg = $('#message').val();
         var title = $('#title').val() || '';
         var $showDuration = $('#showDuration');
         var $hideDuration = $('#hideDuration');
         var $timeOut = $('#timeOut');
         var $extendedTimeOut = $('#extendedTimeOut');
         var $showEasing = $('#showEasing');
         var $hideEasing = $('#hideEasing');
         var $showMethod = $('#showMethod');
         var $hideMethod = $('#hideMethod');
         var toastIndex = toastCount++;

         toastr.options = {
             closeButton: $('#closeButton').prop('checked'),
             debug: $('#debugInfo').prop('checked'),
             positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
             onclick: null
         };

         if ($('#addBehaviorOnToastClick').prop('checked')) {
             toastr.options.onclick = function () {
                 alert('You can perform some custom action after a toast goes away');
             };
         }

         if ($showDuration.val().length) {
             toastr.options.showDuration = $showDuration.val();
         }

         if ($hideDuration.val().length) {
             toastr.options.hideDuration = $hideDuration.val();
         }

         if ($timeOut.val().length) {
             toastr.options.timeOut = $timeOut.val();
         }

         if ($extendedTimeOut.val().length) {
             toastr.options.extendedTimeOut = $extendedTimeOut.val();
         }

         if ($showEasing.val().length) {
             toastr.options.showEasing = $showEasing.val();
         }

         if ($hideEasing.val().length) {
             toastr.options.hideEasing = $hideEasing.val();
         }

         if ($showMethod.val().length) {
             toastr.options.showMethod = $showMethod.val();
         }

         if ($hideMethod.val().length) {
             toastr.options.hideMethod = $hideMethod.val();
         }

         if (!msg) {
             msg = getMessage();
         }

         $("#toastrOptions").text("Command: toastr[" + shortCutFunction + "](\"" + msg + (title ? "\", \"" + title : '') + "\")\n\ntoastr.options = " + JSON.stringify(toastr.options, null, 2));

         var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
         $toastlast = $toast;
         if ($toast.find('#okBtn').length) {
             $toast.delegate('#okBtn', 'click', function () {
                 alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                 $toast.remove();
             });
         }
         if ($toast.find('#surpriseBtn').length) {
             $toast.delegate('#surpriseBtn', 'click', function () {
                 alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
             });
         }

         $('#clearlasttoast').click(function () {
             toastr.clear($toastlast);
         });
     });
     $('#cleartoasts').click(function () {
         toastr.clear();
     });
 }

 function treeview() {
     $('.tree-toggle').click(function () {
         $(this).parent().children('ul.tree').toggle(200);
     });
     var DataSource = function (options) {
         this._formatter = options.formatter;
         this._columns = options.columns;
         this._data = options.data;
     };

     DataSource.prototype = {

         columns: function () {
             return this._columns;
         },

         data: function (options, callback) {

             var self = this;
             if (options.search) {
                 callback({
                     data: self._data,
                     start: start,
                     end: end,
                     count: count,
                     pages: pages,
                     page: page
                 });
             } else if (options.data) {
                 callback({
                     data: options.data,
                     start: 0,
                     end: 0,
                     count: 0,
                     pages: 0,
                     page: 0
                 });
             } else {
                 callback({
                     data: self._data,
                     start: 0,
                     end: 0,
                     count: 0,
                     pages: 0,
                     page: 0
                 });
             }
         }
     };

     var treeDataSource = new DataSource({
         data: [{
             name: 'Folder 1',
             type: 'folder',
             additionalParameters: {
                 id: 'F1'
             },
             data: [{
                 name: 'Sub Folder 1',
                 type: 'folder',
                 additionalParameters: {
                     id: 'FF1'
                 }
             }, {
                 name: 'Sub Folder 2',
                 data: [{
                     name: 'sub sub folder 1',
                     type: 'folder',
                     additionalParameters: {
                         id: 'FF21'
                     }
                 }, {
                     name: 'sub sub item',
                     type: 'item',
                     additionalParameters: {
                         id: 'FI2'
                     }
                 }],
                 type: 'folder',
                 additionalParameters: {
                     id: 'FF2'
                 }
             }, {
                 name: 'Item 2 in Folder 1',
                 type: 'item',
                 additionalParameters: {
                     id: 'FI2'
                 }
             }]
         }, {
             name: 'Folder 2',
             type: 'folder',
             additionalParameters: {
                 id: 'F2'
             }
         }, {
             name: 'Item 1',
             type: 'item',
             additionalParameters: {
                 id: 'I1'
             }
         }, {
             name: 'Item 2',
             type: 'item',
             additionalParameters: {
                 id: 'I2'
             }
         }],
         delay: 400
     });

     $('#MyTree').tree({
         dataSource: treeDataSource
     });

     $('#tree-selected-items').on('click', function () {
         console.log("selected items: ", $('#MyTree').tree('selectedItems'));
     });

     $('#MyTree').on('loaded', function (evt, data) {
         console.log('tree content loaded');
     });

     $('#MyTree').on('opened', function (evt, data) {
         console.log('sub-folder opened: ', data);
     });

     $('#MyTree').on('closed', function (evt, data) {
         console.log('sub-folder closed: ', data);
     });

     $('#MyTree').on('selected', function (evt, data) {
         console.log('item selected: ', data);
     });
 }

 function vectormaps() {
     jQuery('#vmap').vectorMap({
         map: 'world_en',
         backgroundColor: '#ffffff',
         color: '#777777',
         hoverOpacity: 0.7,
         selectedColor: '#666666',
         enableZoom: true,
         showTooltip: true,
         values: sample_data,
         scaleColors: ['#C8EEFF', '#006491'],
         normalizeFunction: 'polynomial'
     });
     jQuery('#vmap-asia').vectorMap({
         map: 'asia_en',
         backgroundColor: '#ffffff',
         color: '#777777',
         hoverOpacity: 0.7,
         selectedColor: '#666666',
         enableZoom: true,
         showTooltip: true,
         values: sample_data,
         scaleColors: ['#C8EEFF', '#006491'],
         normalizeFunction: 'polynomial'
     });
     jQuery('#vmap-europe').vectorMap({
         map: 'europe_en',
         backgroundColor: '#ffffff',
         color: '#777777',
         hoverOpacity: 0.7,
         selectedColor: '#666666',
         enableZoom: true,
         showTooltip: true,
         values: sample_data,
         scaleColors: ['#C8EEFF', '#006491'],
         normalizeFunction: 'polynomial'
     });
     jQuery('#vmap-australia').vectorMap({
         map: 'australia_en',
         backgroundColor: '#ffffff',
         color: '#777777',
         hoverOpacity: 0.7,
         selectedColor: '#666666',
         enableZoom: true,
         showTooltip: true,
         values: sample_data,
         scaleColors: ['#C8EEFF', '#006491'],
         normalizeFunction: 'polynomial'
     });
     jQuery('#vmap-africa').vectorMap({
         map: 'africa_en',
         backgroundColor: '#ffffff',
         color: '#777777',
         hoverOpacity: 0.7,
         selectedColor: '#666666',
         enableZoom: true,
         showTooltip: true,
         values: sample_data,
         scaleColors: ['#C8EEFF', '#006491'],
         normalizeFunction: 'polynomial'
     });
     jQuery('#vmap-northamerica').vectorMap({
         map: 'north-america_en',
         backgroundColor: '#ffffff',
         color: '#777777',
         hoverOpacity: 0.7,
         selectedColor: '#666666',
         enableZoom: true,
         showTooltip: true,
         values: sample_data,
         scaleColors: ['#C8EEFF', '#006491'],
         normalizeFunction: 'polynomial'
     });
     jQuery('#vmap-southamerica').vectorMap({
         map: 'south-america_en',
         backgroundColor: '#ffffff',
         color: '#777777',
         hoverOpacity: 0.7,
         selectedColor: '#666666',
         enableZoom: true,
         showTooltip: true,
         values: sample_data,
         scaleColors: ['#C8EEFF', '#006491'],
         normalizeFunction: 'polynomial'
     });
 }

 function vexalerts() {
     $('.demo-login').click(function () {
         vex.defaultOptions.className = 'vex-theme-wireframe';
         vex.dialog.open({
             message: 'Enter your username and password:',
             input: '' +
                 '<input name="username" type="text" placeholder="Username" required />' +
                 '<input name="password" type="password" placeholder="Password" required />' +
                 '',
             buttons: [
                 $.extend({}, vex.dialog.buttons.YES, {
                     text: 'Login'
                 }),
                 $.extend({}, vex.dialog.buttons.NO, {
                     text: 'Back'
                 })
             ]
         });
     });
     $('.demo-setting').click(function () {
         vex.defaultOptions.className = 'vex-theme-top';
         vex.dialog.open({
             message: 'Change Setting:',
             input: '' +
                 '<input name="username" type="text" placeholder="Username" required />' +
                 '<input name="password" type="password" placeholder="Password" required />' +
                 '<input name="email" type="text" placeholder="Email" required />' +
                 '<input name="email again" type="password" placeholder="Email Again" required />' +
                 '',
             buttons: [
                 $.extend({}, vex.dialog.buttons.YES, {
                     text: 'Yes'
                 }),
                 $.extend({}, vex.dialog.buttons.NO, {
                     text: 'No'
                 })
             ]
         });
     });
     $('.demo-input').click(function () {
         vex.defaultOptions.className = 'vex-theme-default';
         vex.dialog.open({
             message: 'Change Name:',
             input: '' +
                 '<input name="input" type="text" placeholder="Input" required />' +
                 '',
             buttons: [
                 $.extend({}, vex.dialog.buttons.YES, {
                     text: 'Save'
                 }),
                 $.extend({}, vex.dialog.buttons.NO, {
                     text: 'Cancel'
                 })
             ]
         });
     });
     $('.demo-prompt').click(function () {
         vex.defaultOptions.className = 'vex-theme-default';
         vex.dialog.open({
             message: 'Integer mattis ipsum sed odio molestie euismod. Vestibulum nec nulla id enim pharetra elementum vitae sit amet lorem.',
             buttons: [
                 $.extend({}, vex.dialog.buttons.YES, {
                     text: 'OK'
                 }),
                 $.extend({}, vex.dialog.buttons.NO, {
                     text: 'Cancel'
                 })
             ]
         });
     });
     $('.demo-prompt2').click(function () {
         vex.defaultOptions.className = 'vex-theme-default';
         vex.dialog.open({
             message: 'Running out of ideas',
             buttons: [
                 $.extend({}, vex.dialog.buttons.YES, {
                     text: 'OK'
                 }),
                 $.extend({}, vex.dialog.buttons.NO, {
                     text: 'Cancel'
                 })
             ]
         });
     });
     $('.demo-buttons').click(function () {
         vex.defaultOptions.className = 'vex-theme-os';
         vex.dialog.open({
             message: 'Lots of buttons',
             buttons: [
                 $.extend({}, vex.dialog.buttons.YES, {
                     text: 'Button1'
                 }),
                 $.extend({}, vex.dialog.buttons.NO, {
                     text: 'Button2'
                 }),
                 $.extend({}, vex.dialog.buttons.YES, {
                     text: 'Button3'
                 }),
             ]
         });
     });
     $('.demo-message').click(function () {
         vex.defaultOptions.className = 'vex-theme-plain';
         vex.dialog.open({
             message: 'Nam sit amet ultricies mi, at scelerisque massa. Donec felis leo, accumsan vestibulum libero a, molestie eleifend dolor. Nunc aliquet nisl massa.'
         });
     });
     $('.demo-alert').click(function () {
         vex.defaultOptions.className = 'vex-theme-plain';
         vex.dialog.open({
             message: 'This is alot of alerts.'
         });
     });

     vex.defaultOptions.className = 'vex-theme-os';

     $('[data-theme]').each(function () {
         $(this).click(function (e) {
             e.preventDefault();
             vex.dialog.alert({
                 message: 'Testing the <code>' + $(this).data('theme') + '</code> theme.',
                 className: $(this).data('theme')
             });
             return false;
         });
     });
 }

 function widgets() {
     $("#sparkline").sparkline([5, 9, 4, 8, 4, 6, 8, 11, 6, 5, 8, 10], {
         type: 'line',
         width: '100%',
         height: '100px',
         lineColor: '#cccccc',
         fillColor: '#ffffff',
         lineWidth: 5,
         spotColor: '#cccccc',
         highlightSpotColor: '#cccccc',
         highlightLineColor: '#777777',
         minSpotColor: '#cccccc',
         maxSpotColor: '#cccccc'
     });
     $("#sparkline2").sparkline([5, 6, 7, 2, 0, -4, -2, 4, 7, 6, 2, 1, 5, 9, 6, 3, 1, -1, -2], {
         type: 'bar',
         width: '100%',
         height: '200px',
         barWidth: 18,
         barSpacing: 5,
         barColor: '#cccccc',
         negBarColor: '#7f7f7f',
         zeroColor: '#cccccc'
     });
     $("#sparkline3").sparkline([9, 6, 5, 2, 7], {
         type: 'pie',
         width: '200',
         height: '200',
         sliceColors: ['#aaa', '#bbb', '#ccc', '#ddd', '#777', '#666', '#0099c6', '#990099 ']
     });
     $(".todo li").mouseover(function () {
         $(this).find('i.todo-remove').fadeIn(100);
     });
     $(".todo li").mouseleave(function () {
         $(this).find('i.todo-remove').fadeOut(100);
     });
     $(".todo li a i.todo-remove").click(function () {
         $(this).parent().parent().slideUp();
     });
     $('.todo li a').click(function () {
         $(this).toggleClass('checked');
         $(this).find('i.check').toggleClass('fa-circle-o');
         $(this).find('i.check').toggleClass('fa-check-circle-o');
     });
     var skycons = new Skycons({
         "color": "#aaa"
     });

     // you can add a canvas by it's ID...
     skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

     skycons.add("icon3", Skycons.WIND);

     // ...or by the canvas DOM element itself.
     skycons.add(document.getElementById("icon2"), Skycons.RAIN);

     // start animation!
     skycons.play();
     $.fn.spin = function (opts) {
         this.each(function () {
             var $this = $(this),
                 data = $this.data();

             if (data.spinner) {
                 data.spinner.stop();
                 delete data.spinner;
             }
             if (opts !== false) {
                 data.spinner = new Spinner($.extend({
                     color: $this.css('color')
                 }, opts)).spin(this);
             }
         });
         return this;
     };

     function update() {
         var opts = {};
         $('input[min], select').each(function () {
             opts[this.name] = parseFloat(this.value);
         });
         $('input:checkbox').each(function () {
             opts[this.name] = this.checked;
         });
         $('.preview').spin(opts);
     }
     $('input[min], select').change(update);
     $('input:checkbox').click(update);
     update();
     $("select").selectBoxIt();
 }

 function writemessage() {
     $('#textarea').wysihtml5();
 }

 function wysihtml5editor() {
     $('#textarea').wysihtml5();
 }

 function xeditable() {
     //defaults
     $.fn.editable.defaults.url = '/post';

     //enable / disable
     $('#enable').click(function () {
         $('#user .editable').editable('toggleDisabled');
     });

     //editables 
     $('#username').editable({
         url: '/post',
         type: 'text',
         pk: 1,
         name: 'username',
         title: 'Enter username'
     });

     $('#firstname').editable({
         validate: function (value) {
             if ($.trim(value) == '') return 'This field is required';
         }
     });

     $('#sex').editable({
         prepend: "not selected",
         source: [{
             value: 1,
             text: 'Male'
         }, {
             value: 2,
             text: 'Female'
         }],
         display: function (value, sourceData) {
             var colors = {
                 "": "gray",
                 1: "green",
                 2: "blue"
             },
                 elem = $.grep(sourceData, function (o) {
                     return o.value == value;
                 });

             if (elem.length) {
                 $(this).text(elem[0].text).css("color", colors[value]);
             } else {
                 $(this).empty();
             }
         }
     });

     $('#status').editable();

     $('#group').editable({
         showbuttons: false
     });

     $('#vacation').editable({
         datepicker: {
             todayBtn: 'linked'
         }
     });

     $('#dob').editable();

     $('#event').editable({
         placement: 'right',
         combodate: {
             firstItem: 'name'
         }
     });

     $('#meeting_start').editable({
         format: 'yyyy-mm-dd hh:ii',
         viewformat: 'dd/mm/yyyy hh:ii',
         validate: function (v) {
             if (v && v.getDate() == 10) return 'Day cant be 10!';
         },
         datetimepicker: {
             todayBtn: 'linked',
             weekStart: 1
         }
     });

     $('#comments').editable({
         showbuttons: 'bottom'
     });

     $('#note').editable();
     $('#pencil').click(function (e) {
         e.stopPropagation();
         e.preventDefault();
         $('#note').editable('toggle');
     });

     $('#state').editable({
         source: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
     });


     $('#fruits').editable({
         pk: 1,
         limit: 3,
         source: [{
             value: 1,
             text: 'banana'
         }, {
             value: 2,
             text: 'peach'
         }, {
             value: 3,
             text: 'apple'
         }, {
             value: 4,
             text: 'watermelon'
         }, {
             value: 5,
             text: 'orange'
         }]
     });

     $('#tags').editable({
         inputclass: 'input-large',
         select2: {
             tags: ['html', 'javascript', 'css', 'ajax'],
             tokenSeparators: [",", " "]
         }
     });

     var countries = [];
     $.each({
         "BD": "Bangladesh",
         "BE": "Belgium",
         "BF": "Burkina Faso",
         "BG": "Bulgaria",
         "BA": "Bosnia and Herzegovina",
         "BB": "Barbados",
         "WF": "Wallis and Futuna",
         "BL": "Saint Bartelemey",
         "BM": "Bermuda",
         "BN": "Brunei Darussalam",
         "BO": "Bolivia",
         "BH": "Bahrain",
         "BI": "Burundi",
         "BJ": "Benin",
         "BT": "Bhutan",
         "JM": "Jamaica",
         "BV": "Bouvet Island",
         "BW": "Botswana",
         "WS": "Samoa",
         "BR": "Brazil",
         "BS": "Bahamas",
         "JE": "Jersey",
         "BY": "Belarus",
         "O1": "Other Country",
         "LV": "Latvia",
         "RW": "Rwanda",
         "RS": "Serbia",
         "TL": "Timor-Leste",
         "RE": "Reunion",
         "LU": "Luxembourg",
         "TJ": "Tajikistan",
         "RO": "Romania",
         "PG": "Papua New Guinea",
         "GW": "Guinea-Bissau",
         "GU": "Guam",
         "GT": "Guatemala",
         "GS": "South Georgia and the South Sandwich Islands",
         "GR": "Greece",
         "GQ": "Equatorial Guinea",
         "GP": "Guadeloupe",
         "JP": "Japan",
         "GY": "Guyana",
         "GG": "Guernsey",
         "GF": "French Guiana",
         "GE": "Georgia",
         "GD": "Grenada",
         "GB": "United Kingdom",
         "GA": "Gabon",
         "SV": "El Salvador",
         "GN": "Guinea",
         "GM": "Gambia",
         "GL": "Greenland",
         "GI": "Gibraltar",
         "GH": "Ghana",
         "OM": "Oman",
         "TN": "Tunisia",
         "JO": "Jordan",
         "HR": "Croatia",
         "HT": "Haiti",
         "HU": "Hungary",
         "HK": "Hong Kong",
         "HN": "Honduras",
         "HM": "Heard Island and McDonald Islands",
         "VE": "Venezuela",
         "PR": "Puerto Rico",
         "PS": "Palestinian Territory",
         "PW": "Palau",
         "PT": "Portugal",
         "SJ": "Svalbard and Jan Mayen",
         "PY": "Paraguay",
         "IQ": "Iraq",
         "PA": "Panama",
         "PF": "French Polynesia",
         "BZ": "Belize",
         "PE": "Peru",
         "PK": "Pakistan",
         "PH": "Philippines",
         "PN": "Pitcairn",
         "TM": "Turkmenistan",
         "PL": "Poland",
         "PM": "Saint Pierre and Miquelon",
         "ZM": "Zambia",
         "EH": "Western Sahara",
         "RU": "Russian Federation",
         "EE": "Estonia",
         "EG": "Egypt",
         "TK": "Tokelau",
         "ZA": "South Africa",
         "EC": "Ecuador",
         "IT": "Italy",
         "VN": "Vietnam",
         "SB": "Solomon Islands",
         "EU": "Europe",
         "ET": "Ethiopia",
         "SO": "Somalia",
         "ZW": "Zimbabwe",
         "SA": "Saudi Arabia",
         "ES": "Spain",
         "ER": "Eritrea",
         "ME": "Montenegro",
         "MD": "Moldova, Republic of",
         "MG": "Madagascar",
         "MF": "Saint Martin",
         "MA": "Morocco",
         "MC": "Monaco",
         "UZ": "Uzbekistan",
         "MM": "Myanmar",
         "ML": "Mali",
         "MO": "Macao",
         "MN": "Mongolia",
         "MH": "Marshall Islands",
         "MK": "Macedonia",
         "MU": "Mauritius",
         "MT": "Malta",
         "MW": "Malawi",
         "MV": "Maldives",
         "MQ": "Martinique",
         "MP": "Northern Mariana Islands",
         "MS": "Montserrat",
         "MR": "Mauritania",
         "IM": "Isle of Man",
         "UG": "Uganda",
         "TZ": "Tanzania, United Republic of",
         "MY": "Malaysia",
         "MX": "Mexico",
         "IL": "Israel",
         "FR": "France",
         "IO": "British Indian Ocean Territory",
         "FX": "France, Metropolitan",
         "SH": "Saint Helena",
         "FI": "Finland",
         "FJ": "Fiji",
         "FK": "Falkland Islands (Malvinas)",
         "FM": "Micronesia, Federated States of",
         "FO": "Faroe Islands",
         "NI": "Nicaragua",
         "NL": "Netherlands",
         "NO": "Norway",
         "NA": "Namibia",
         "VU": "Vanuatu",
         "NC": "New Caledonia",
         "NE": "Niger",
         "NF": "Norfolk Island",
         "NG": "Nigeria",
         "NZ": "New Zealand",
         "NP": "Nepal",
         "NR": "Nauru",
         "NU": "Niue",
         "CK": "Cook Islands",
         "CI": "Cote d'Ivoire",
         "CH": "Switzerland",
         "CO": "Colombia",
         "CN": "China",
         "CM": "Cameroon",
         "CL": "Chile",
         "CC": "Cocos (Keeling) Islands",
         "CA": "Canada",
         "CG": "Congo",
         "CF": "Central African Republic",
         "CD": "Congo, The Democratic Republic of the",
         "CZ": "Czech Republic",
         "CY": "Cyprus",
         "CX": "Christmas Island",
         "CR": "Costa Rica",
         "CV": "Cape Verde",
         "CU": "Cuba",
         "SZ": "Swaziland",
         "SY": "Syrian Arab Republic",
         "KG": "Kyrgyzstan",
         "KE": "Kenya",
         "SR": "Suriname",
         "KI": "Kiribati",
         "KH": "Cambodia",
         "KN": "Saint Kitts and Nevis",
         "KM": "Comoros",
         "ST": "Sao Tome and Principe",
         "SK": "Slovakia",
         "KR": "Korea, Republic of",
         "SI": "Slovenia",
         "KP": "Korea, Democratic People's Republic of",
         "KW": "Kuwait",
         "SN": "Senegal",
         "SM": "San Marino",
         "SL": "Sierra Leone",
         "SC": "Seychelles",
         "KZ": "Kazakhstan",
         "KY": "Cayman Islands",
         "SG": "Singapore",
         "SE": "Sweden",
         "SD": "Sudan",
         "DO": "Dominican Republic",
         "DM": "Dominica",
         "DJ": "Djibouti",
         "DK": "Denmark",
         "VG": "Virgin Islands, British",
         "DE": "Germany",
         "YE": "Yemen",
         "DZ": "Algeria",
         "US": "United States",
         "UY": "Uruguay",
         "YT": "Mayotte",
         "UM": "United States Minor Outlying Islands",
         "LB": "Lebanon",
         "LC": "Saint Lucia",
         "LA": "Lao People's Democratic Republic",
         "TV": "Tuvalu",
         "TW": "Taiwan",
         "TT": "Trinidad and Tobago",
         "TR": "Turkey",
         "LK": "Sri Lanka",
         "LI": "Liechtenstein",
         "A1": "Anonymous Proxy",
         "TO": "Tonga",
         "LT": "Lithuania",
         "A2": "Satellite Provider",
         "LR": "Liberia",
         "LS": "Lesotho",
         "TH": "Thailand",
         "TF": "French Southern Territories",
         "TG": "Togo",
         "TD": "Chad",
         "TC": "Turks and Caicos Islands",
         "LY": "Libyan Arab Jamahiriya",
         "VA": "Holy See (Vatican City State)",
         "VC": "Saint Vincent and the Grenadines",
         "AE": "United Arab Emirates",
         "AD": "Andorra",
         "AG": "Antigua and Barbuda",
         "AF": "Afghanistan",
         "AI": "Anguilla",
         "VI": "Virgin Islands, U.S.",
         "IS": "Iceland",
         "IR": "Iran, Islamic Republic of",
         "AM": "Armenia",
         "AL": "Albania",
         "AO": "Angola",
         "AN": "Netherlands Antilles",
         "AQ": "Antarctica",
         "AP": "Asia/Pacific Region",
         "AS": "American Samoa",
         "AR": "Argentina",
         "AU": "Australia",
         "AT": "Austria",
         "AW": "Aruba",
         "IN": "India",
         "AX": "Aland Islands",
         "AZ": "Azerbaijan",
         "IE": "Ireland",
         "ID": "Indonesia",
         "UA": "Ukraine",
         "QA": "Qatar",
         "MZ": "Mozambique"
     }, function (k, v) {
         countries.push({
             id: k,
             text: v
         });
     });
     $('#country').editable({
         source: countries,
         select2: {
             width: 200
         }
     });

     $('#user .editable').on('hidden', function (e, reason) {
         if (reason === 'save' || reason === 'nochange') {
             var $next = $(this).closest('tr').next().find('.editable');
             if ($('#autoopen').is(':checked')) {
                 setTimeout(function () {
                     $next.editable('show');
                 }, 300);
             } else {
                 $next.focus();
             }
         }
     });

 }
 
 function index() {
     var data1 = [
         [1, 43],
         [2, 35],
         [3, 49],
         [4, 31],
         [5, 45],
         [6, 54],
         [7, 52],
         [8, 62],
         [9, 59],
         [10, 66],
         [11, 48],
         [12, 42]
     ];
     var data2 = [
         [1, 18],
         [2, 23],
         [3, 15],
         [4, 26],
         [5, 19],
         [6, 35],
         [7, 41],
         [8, 46],
         [9, 32],
         [10, 34],
         [11, 31],
         [12, 25]
     ];

     var plot = $.plot($("#chart"), [{
         data: data1,
         label: "2012"
     }, {
         data: data2,
         label: "2013"
     }], {
         series: {
             lines: {
                 show: true,
                 lineWidth: 1,
                 fill: true,
                 fillColor: {
                     colors: [{
                         opacity: 0
                     }, {
                         opacity: 0
                     }]
                 }
             },
             points: {
                 show: true,
                 lineWidth: 2,
                 radius: 3
             },
             shadowSize: 0,
             stack: true
         },
         grid: {
             hoverable: true,
             clickable: true,
             tickColor: "#5cb85c",
             borderWidth: 0
         },
         legend: {
             show: false
         },
         colors: ["#fff", "#fff"],
         xaxis: {
             ticks: [
                 [1, "JAN"],
                 [2, "FEB"],
                 [3, "MAR"],
                 [4, "APR"],
                 [5, "MAY"],
                 [6, "JUN"],
                 [7, "JUL"],
                 [8, "AUG"],
                 [9, "SEP"],
                 [10, "OCT"],
                 [11, "NOV"],
                 [12, "DEC"]
             ],
             font: {
                 size: 12,
                 family: "Open Sans, Arial",
                 variant: "small-caps",
                 color: "#fff"
             }
         },
         yaxis: {
             ticks: 3,
             tickDecimals: 0,
             font: {
                 size: 12,
                 color: "#fff"
             }
         }
     });

     function showTooltip(x, y, contents) {
         $('<div id="tooltip">' + contents + '</div>').css({
             position: 'absolute',
             display: 'none',
             top: y - 30,
             left: x - 50,
             color: "#fff",
             padding: '2px 5px',
             'border-radius': '6px',
             'background-color': '#000',
             opacity: 0.80
         }).appendTo("body").fadeIn(200);
     }

     function humaneindex() {
         var notify = humane.create({
             timeout: 4000,
             baseCls: 'humane-bigbox'
         })
         notify.log('Welcome to Legend')
     }
     onload = humaneindex();

     var previousPoint = null;
     $("#statsChart").bind("plothover", function (event, pos, item) {
         if (item) {
             if (previousPoint != item.dataIndex) {
                 previousPoint = item.dataIndex;

                 $("#tooltip").remove();
                 var x = item.datapoint[0].toFixed(0),
                     y = item.datapoint[1].toFixed(0);

                 var month = item.series.xaxis.ticks[item.dataIndex].label;

                 showTooltip(item.pageX, item.pageY,
                     item.series.label + " of " + month + ": " + y);
             }
         } else {
             $("#tooltip").remove();
             previousPoint = null;
         }
     });
     var skycons = new Skycons({
         "color": "#aaa"
     });

     // you can add a canvas by it's ID...
     skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

     skycons.add("icon3", Skycons.WIND);

     // ...or by the canvas DOM element itself.
     skycons.add(document.getElementById("icon2"), Skycons.RAIN);

     // start animation!
     skycons.play();
     $.fn.spin = function (opts) {
         this.each(function () {
             var $this = $(this),
                 data = $this.data();

             if (data.spinner) {
                 data.spinner.stop();
                 delete data.spinner;
             }
             if (opts !== false) {
                 data.spinner = new Spinner($.extend({
                     color: $this.css('color')
                 }, opts)).spin(this);
             }
         });
         return this;
     };

     function clock() {
         var now = new Date();
         var outStr = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
         document.getElementById('clock').innerHTML = outStr;
         setTimeout('clock()', 1000);
     }
     clock();
     $("#sparkline").sparkline([5, 9, 4, 8, 4, 6, 8, 11, 6, 5, 8, 10], {
         type: 'line',
         width: '100%',
         height: '50px',
         lineColor: '#d9534f',
         fillColor: '#5cb85c',
         lineWidth: 5,
         spotColor: '#d9534f',
         highlightSpotColor: '#d9534f',
         highlightLineColor: '#d9534f',
         minSpotColor: '#d9534f',
         maxSpotColor: '#d9534f'
     });
     $("#sparkline2").sparkline([9, 6, 9, 8, 12, 16, 20, 24, 20, 16, 20, 16], {
         type: 'line',
         width: '100%',
         height: '50px',
         lineColor: '#fff',
         fillColor: '#5cb85c',
         lineWidth: 5,
         spotColor: '#fff',
         highlightSpotColor: '#fff',
         highlightLineColor: '#fff',
         minSpotColor: '#fff',
         maxSpotColor: '#fff'
     });
     $('#chart3').easyPieChart({
         easing: 'easeOutBounce',
         barColor: '#999',
         lineWidth: 8,
         scaleColor: '#fff',
         trackColor: '#fff',
         size: 100,
         lineCap: 'square',
         onStep: function (from, to, percent) {
             $(this.el).find('.percent').text(Math.round(percent));
         }
     });
     mesos = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

     dias = ["M", "T", "W", "T", "F", "S", "S"];

     $('#cal').bic_calendar({
         nombresMes: mesos,
         dias: dias,
         req_ajax: {
             type: 'get',
             url: 'http://bic.cat/bic_calendar/index.php'
         }
     });
     $(".todo li").mouseover(function () {
         $(this).find('i.todo-remove').fadeIn(100);
     });
     $(".todo li").mouseleave(function () {
         $(this).find('i.todo-remove').fadeOut(100);
     });
     $(".todo li a i.todo-remove").click(function () {
         $(this).parent().parent().slideUp();
     });
     $('.todo li a').click(function () {
         $(this).toggleClass('checked');
         $(this).find('i.check').toggleClass('fa-circle-o');
         $(this).find('i.check').toggleClass('fa-check-circle-o');
     });
 }