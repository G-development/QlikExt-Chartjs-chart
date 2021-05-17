var legendPosition = 'top';
var legendDisplay = true;
var tooltipsDisplay = true;

define([
    //here are the dependencies;
    'jquery',
    './properties',
    './initial',
    './js/chart'
],
    function ($, props) {
        'use strict';
        var datasets = [], colors = [];
        return {

            //def of layout-panels - ref to properties.js / initial.js
            definition: props,
            initialProperties: initial,


            //Paint resp.Rendering logic
            paint: function ($element, layout) {
                //Create hyperCube var
                var hc = layout.qHyperCube;

                //Empty the element
                $element.empty();

                // Create datasets
                var dataLabels = hc.qDataPages[0].qMatrix.map(function (d) { return d[0].qText; })

                //var colors = new Array(layout.props.firstDataset.color, layout.props.secondDataset.color, layout.props.thirdDataset.color, layout.props.fourthDataset.color, layout.props.fifthDataset.color);
                colors = [], datasets = [];

                for (var i = 0; i < hc.qMeasureInfo.length; i++) {
                    colors.push(layout.qHyperCube.qDataPages[0].qMatrix[0][i + 1].qAttrExps.qValues[0].qText);
                    datasets.push(
                        {
                            //axis: 'y',
                            label: hc.qMeasureInfo[i].qFallbackTitle,
                            backgroundColor: colors[i],
                            fill: 'origin',
                            data: hc.qDataPages[0].qMatrix.map(function (d) { return { y: d[i + 1].qNum } }),
                            stack: 'Stack' + i
                        }
                    )
                }

                //Get color values
                for (var i = 0; i < hc.qMeasureInfo.length; i++) {
                    console.log(layout.qHyperCube.qDataPages[0].qMatrix[0][i + 1].qAttrExps.qValues[0].qText);
                }

                //Colors opacity
                if (layout.props.colSlider == '0.5') {
                    console.log("If sì");
                    for (var i = 0; i < hc.qMeasureInfo.length; i++) {
                        var str = datasets[i].backgroundColor;
                        str = str.replace(/[^,]+(?=\))/, '1');
                        console.log(str);
                    }
                }

                //If props.stacked = true then stack the bars, else don't
                if (layout.props.stacked === true) {
                    for (let i = 0; i < hc.qMeasureInfo.length; i++) {
                        datasets[i].stack = 'One';
                    }
                } else {
                    for (let i = 0; i < hc.qMeasureInfo.length; i++) {
                        datasets[i].stack = i;
                    }
                }

                //if props.tooltips = true then show tooltips, else don't show
                if (layout.props.tooltips === true) {
                    tooltipsDisplay = true;
                } else {
                    tooltipsDisplay = false;
                }

                //If props.randBtn is clicked, randomize colors
                if (layout.props.randBtn) {
                    console.log(datasets[i].backgroundColor);
                }

                //If props.legend -> move the legend
                if (layout.props.legend == "t") {
                    legendDisplay = true;
                    legendPosition = 'top';
                } else if (layout.props.legend == "l") {
                    legendDisplay = true;
                    legendPosition = 'left';
                } else if (layout.props.legend == "b") {
                    legendDisplay = true;
                    legendPosition = 'bottom';
                } else if (layout.props.legend == "r") {
                    legendDisplay = true;
                    legendPosition = 'right';
                } else {
                    legendDisplay = false;
                }

                //CHART
                var canvas_id = layout.qInfo.qId + "_chartjs_bar";
                //Get width and height of the element
                var ext_width = $element.width(), ext_height = $element.height();
                $element.html('<canvas id="' + canvas_id + '" width="' + ext_width + '" height="' + ext_height + '"></canvas>');
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
                        legend: {
                            display: legendDisplay,
                            position: legendPosition,
                        },
                        responsive: true,
                        tooltips: {
                            enabled: tooltipsDisplay
                        },
                        /*interaction: {
                            intersect: false,
                        },*/
                        scales: {
                            indexAxis: 'y',
                            xAxes: {
                                gridLines: {
                                    display: true
                                }
                            },
                            yAxes: {
                                gridLines: {
                                    display: true
                                }
                            }
                        },
                    }

                });

                //If props.grid = true, then enable the grid, else don't
                if (layout.props.grid === true) {
                    myChart.options.scales.xAxes[0].gridLines.display = true;
                    myChart.options.scales.yAxes[0].gridLines.display = true;
                } else {
                    myChart.options.scales.xAxes[0].gridLines.display = false;
                    myChart.options.scales.yAxes[0].gridLines.display = false;
                }

                console.log('------------ END ------------');
            }
        };
    });

