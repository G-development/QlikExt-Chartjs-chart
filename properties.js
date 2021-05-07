define( [], function () {
    'use strict';

    //Dimensions - measures - sortings
    var dimensions = {
        uses: "dimensions"
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
    var colPick1 = {
        label:"First dataset color",
        component: "color-picker",
        //dualOutput: true,
        ref: "props.firstDataset",
        type: "object",
        defaultValue: {
            index: "-1",
            color: "#48E5C2"
        }
    }
    var colPick2 = {
        label:"Second dataset color",
        component: "color-picker",
        //dualOutput: true,
        ref: "props.secondDataset",
        type: "object",
        defaultValue: {
            index: "-1",
            color: "#4A8FE7"
        }
    }

    var checkBox =  {
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
                    colPick1: colPick1,
                    colPick2: colPick2
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

} );
