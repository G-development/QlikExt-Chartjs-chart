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
            console.log('Data returned:', hc);

            //Empty the element
            $element.empty();

            // Create datasets
            //var dataValues = hc.qDataPages[0].qMatrix.map(function(d) { return { label: d[0].qText, x: d[0].qNum, y: d[1].qNum } })
            var dataLabels = hc.qDataPages[0].qMatrix.map(function(d) { return d[0].qText; })
            console.log('dataLabels: ', dataLabels)

            var dataValues1 = hc.qDataPages[0].qMatrix.map(function(d) { return { y: d[1].qNum } })
            console.log('dataValues1: ', dataValues1)
            var dataValues2 = hc.qDataPages[0].qMatrix.map(function(d) { return { y: d[2].qNum } })
            console.log('dataValues2: ', dataValues2)

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
                    backgroundColor: "#FAC748",
                    fill: 'origin',     // A bit pointless if only one measure
                    data: dataValues1
                },
                {
                    label: hc.qMeasureInfo[1].qFallbackTitle,
                    backgroundColor: "#5B8E7D",
                    fill: 'origin',     // A bit pointless if only one measure
                    data: dataValues2
                }
            ];
            


            //CHART
            var canvas_id  = layout.qInfo.qId + "_chartjs_bar";

            //Get width and height of the element
            var ext_width = $element.width(), ext_height = $element.height();

            $element.html('<canvas id="'+canvas_id+'" width="'+ext_width+'" height="'+ext_height+'"></canvas>');  //<canvas id="myChart" width="100" height="50"></canvas>

            var ctx = document.getElementById(canvas_id).getContext('2d');
            var myChart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'bar',

                // The data for our dataset
                data: {
                    labels: dataLabels,  	// labels: ["January", "February", "March", "April"],
                    datasets: datasets		// datasets: [0, 10, 5, 2],
                },

                // Configuration options go here
                options: {
                    plugins: {
                        legend: {
                          position: 'top',
                        },
                    }
                }
                        
            });

            console.log ('--------- END ------------');


        }
    }; 
} );