define( [ 
    //here are the dependencies;
    'jquery',
    './properties',
    './initial',
    './js/chart'
],
function ( $, props, i, chart ) {
    'use strict';

    return {

        //def of layout-panels - ref to properties.js
        definition: props,
        initialProperties: initial,
        

        //Paint resp.Rendering logic
        paint: function ( $element, layout ) {

            //Create hyperCube var
            var hc = layout.qHyperCube;
            //console.log('Data returned:', hc);

            //Empty the element
            $element.empty();

            // Create datasets
            //var dataValues = hc.qDataPages[0].qMatrix.map(function(d) { return { label: d[0].qText, x: d[0].qNum, y: d[1].qNum } })
            var dataLabels = hc.qDataPages[0].qMatrix.map(function(d) { return d[0].qText; })
            var dataValues1 = hc.qDataPages[0].qMatrix.map(function(d) { return { y: d[1].qNum } })
            var dataValues2 = hc.qDataPages[0].qMatrix.map(function(d) { return { y: d[2].qNum } })

            /*
            var Dimensions = [], Measures = [];
            for (var r = 0; r < hc.qDataPages[0].qMatrix.length; r++) { 
                for (var c = 0; c < hc.qDataPages[0].qMatrix[r].length; c++) {
                    if (hc.qDataPages[0].qMatrix[r][c].qNum == "NaN"){
                        Dimensions.push(hc.qDataPages[0].qMatrix[r][c].qText);
                    } else {
                        Measures.push(hc.qDataPages[0].qMatrix[r][c].qNum);
                    }
                }
            }

            console.log("Dimensions:", Dimensions, "Measures:", Measures);
            console.log(Measures);
            */

            var datasets = [
                {
                    label: hc.qMeasureInfo[0].qFallbackTitle,
                    backgroundColor: layout.props.firstDataset.color,
                    fill: 'origin',     
                    data: dataValues1,
                    stack: stackName
                },
                {
                    label: hc.qMeasureInfo[1].qFallbackTitle,
                    backgroundColor: layout.props.secondDataset.color,
                    fill: 'origin',
                    data: dataValues2,
                    stack: 'Stack 1'
                }
            ];

             
            //If props.stacked = true, then stack the bars, else don't
            if (layout.props.stacked === true){
                //Set Options -> Scales -> Stacked eq to true
                //myChart.options.scales.x.stacked = true,  myChart.options.scales.y.stacked = true;
                datasets[0].stack = 'Stack 0';
                datasets[1].stack = 'Stack 0';
            } else {
                //Set Options -> Scales -> Stacked eq to false
                //myChart.options.scales.x.stacked = false,  myChart.options.scales.y.stacked = false;
                datasets[0].stack = 'Stack 0';
                datasets[1].stack = 'Stack 1';
            }

            //CHART
            var canvas_id  = layout.qInfo.qId + "_chartjs_bar";
            //Get width and height of the element
            var ext_width = $element.width(), ext_height = $element.height();
            $element.html('<canvas id="'+canvas_id+'" width="'+ext_width+'" height="'+ext_height+'"></canvas>');  
            var ctx = document.getElementById(canvas_id).getContext('2d');
            var myChart = new Chart(ctx, {
                // Chart TYPE
                type: 'bar',
                
                // Chart DATA
                data: {
                    //X AXIS
                    labels: dataLabels,  	
                    //Y AXIS
                    datasets: datasets		
                },
                
                // Chart OPTIONS
                options: {
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                    },
                    interaction: {
                        intersect: false,
                      },
                    scales: {
                        x: {
                            stacked: false
                        },
                        y: {
                          stacked: true
                        }
                    }
                }
                
            });



           
            
            

            console.log ('--------- END ------------');


        }
    }; 
} );

var stackName = 'Stack 0'