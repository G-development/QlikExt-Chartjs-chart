function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

define([
    './hist_chart'
],
    function () {
        'use strict';

        //Dimensions - measures - sortings
        var dimensions = {
            uses: "dimensions",
            min: 1,
            max: 1
        };

        var measures = {
            uses: "measures",
            min: 1,
            max: 5
        };

        var sorting = {
            uses: "sorting"
        }

        //myText
        /*
        var myText = {
            ref: "prop.myText",
            type: "string",
            label: "Insert text",
            defaultValue: "#3C887E"
        }
        */

        //color-pickers
        var colorPicks = [
            {
                label: "First dataset color",
                component: "color-picker",
                ref: "props.firstDataset",
                type: "object",
                defaultValue: {
                    index: "-1",
                    color: getRandomColor()
                }
            },
            {
                label: "Second dataset color",
                component: "color-picker",
                ref: "props.secondDataset",
                type: "object",
                defaultValue: {
                    index: "-1",
                    color: getRandomColor()
                }
            },
            {
                label: "Third dataset color",
                component: "color-picker",
                ref: "props.thirdDataset",
                type: "object",
                defaultValue: {
                    index: "-1",
                    color: getRandomColor()
                }
            },
            {
                label: "Fourth dataset color",
                component: "color-picker",
                ref: "props.fourthDataset",
                type: "object",
                defaultValue: {
                    index: "-1",
                    color: getRandomColor()
                }
            },
            {
                label: "Fifth dataset color",
                component: "color-picker",
                ref: "props.fifthDataset",
                type: "object",
                defaultValue: {
                    index: "-1",
                    color: getRandomColor()
                }
            }
        ]

        var checkGrid = {
            type: "boolean",
            component: "switch",
            label: "Grid",
            ref: "props.grid",
            options: [{
                value: true,
                label: "ON"
            }, {
                value: false,
                label: "OFF"
            }],
            defaultValue: true
        }

        var checkStacked = {
            type: "boolean",
            component: "switch",
            label: "Stack bars",
            ref: "props.stacked",
            options: [{
                value: true,
                label: "Stacked"
            }, {
                value: false,
                label: "Not stacked"
            }],
            defaultValue: false
        }

        var randomizeBtn = {
            label: "Randomize colors",
            component: "button",
            ref: "props.randBtn",
            action: function () {
                for (var i = 0; i < 5; i++) {

                }
            }
        }

        var legendBtn = {
            type: "string",
            component: "buttongroup",
            label: "Legend positioning",
            ref: "props.legend",
            options: [
                {
                    value: "t",
                    label: "⬆",
                    tooltip: "Legend on top"
                },
                {
                    value: "l",
                    label: "⬅",
                    tooltip: "Legend on left"
                },
                {
                    value: "b",
                    label: "⬇",
                    tooltip: "Legend on bottom"
                },
                {
                    value: "r",
                    label: "➡",
                    tooltip: "Legend on right"
                },
                {
                    value: "h",
                    label: "No",
                    tooltip: "Hide legend"
                }
            ],
            defaultValue: "t"
        }

        //Appearance section
        var appearanceSection = {
            uses: "settings",
            items: {
                //Colors panel
                colors: {
                    type: "items",
                    label: "Colors",
                    items: {
                        //myText: myText,
                        //cP1: colorPicks[0],
                        //cP2: colorPicks[1],
                        //cP3: colorPicks[2]
                    }
                },
                //settings panel
                settings: {
                    type: "items",
                    label: "Settings",
                    items: {
                        checkGrid: checkGrid,
                        checkStacked: checkStacked,
                        randomizeBtn: randomizeBtn,
                        legendBtn: legendBtn
                    }
                }


            }
        };

        //Display colorPick according on number of measures
        //Missing condition
        for (var i = 0; i < 5; i++) {
            appearanceSection.items.colors.items["cP" + i] = colorPicks[i];
        };


        // Main property panel definition
        return {
            type: "items",
            component: "accordion",
            items: {
                dimensions: dimensions,
                measures: measures,
                sorting: sorting,
                appearancePanel: appearanceSection
            }
        };

    });

