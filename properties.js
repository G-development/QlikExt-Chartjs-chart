function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

define([], function () {
    'use strict';

    //Dimensions - measures - sortings
    var dimensions = {
        uses: "dimensions",
        min: 1,
        max: 1
    };

    var measures = {
        uses: "measures",
        min: 1
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
        }
    ]

    var checkBox = {
        type: "boolean",
        label: "Stacked",
        ref: "props.stacked",
        defaultValue: false
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
                    checkStacked: checkBox
                }
            }


        }
    };

    var nomeCP = ["cP1", "cP2", "cP3"];

    for (var i=0; i<3; i++) {
        var x = appearanceSection.items.colors.items;
        appearanceSection.items.colors.items.cP1 = colorPicks[i-2];
        appearanceSection.items.colors.items.cP2 = colorPicks[i-1];
        appearanceSection.items.colors.items.cP3 = colorPicks[i];

    };

    // Main property panel definition
    // Only what's defined here will be returned from properties.js
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

