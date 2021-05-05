define( [ 
    //here are the dependencies;
    'jquery',
    './properties',
    './js/chart'
],
function ( $, props, chart ) {
    'use strict';

    return {

        //def of layout-panels - ref to properties.js
        definition: props,
        
        initialProperties: {
            qHyperCubeDef: {
                qDimensions: [],
                qMeasures: [],
                qInitialDataFetch: [
                    {
                        //Default of columns
                        qHeight: 100,
                        qWidth: 10
                    }
                ]
            }
            
        },
        


        //Paint resp.Rendering logic
        paint: function ( $element, layout ) {

            //Create hyperCube var
            var hc = layout.qHyperCube;
            console.log( 'Data returned: ', hc );

           
            // Create datasets
            //var dataValues = hc.qDataPages[0].qMatrix.map(function(d) { return { label: d[0].qText, x: d[0].qNum, y: d[1].qNum } })
            var dataValues = hc.qDataPages[0].qMatrix.map(function(d) { return { y: d[1].qNum } })
            console.log('dataValues: ', dataValues)
            var dataVals = hc.qDataPages[0].qMeasures;
            console.log(dataVals);

            var dataLabels = hc.qDataPages[0].qMatrix.map(function(d) { return d[0].qText; })
            console.log('dataLabels: ', dataLabels)

            var datasets = [
                {
                label: "Boh",
                borderColor: 'rgba(215,25,28,0.4)',
                pointBackgroundColor: 'rgba(215,25,28,1)',
                pointBorderColor: 'rgba(215,25,28,0.4)',
                pointBorderWidth: 0,
                pointRadius: 4,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointHoverBorderColor: 'rgba(0,0,0,0.2)',
                pointHoverBackgroundColor: 'rgba(253,174,97,0.9)',
                pointHitRadius:70,
                backgroundColor: 'rgba(215,25,28,0.04)',
                fill: 'origin',  // A bit pointless if only one measure
                data: dataValues
                }
            ];

            var canvas_id  = layout.qInfo.qId + "_chartjs_bar";

            //Get width and height of the element
            var ext_width = $element.width(), ext_height = $element.height();

            $element.html('<canvas id="'+canvas_id+'" width="'+ext_width+'" height="'+ext_height+'"></canvas>');  //<canvas id="myChart" width="100" height="50"></canvas>

            var ctx = document.getElementById(canvas_id).getContext('2d');
            var myChart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: dataLabels,  	// labels: ["January", "February", "March", "April"],
                    datasets: datasets		// datasets: [0, 10, 5, 2],
                },

                // Configuration options go here
                options: {
                                    legend: false
                                }
            });

            console.log ('--------- END ------------');


        }
    }; 
} );



