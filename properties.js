define( [], function () {
    'use strict';

    //Dimensions - measures - sortings
    var dimensions = {
        uses: "dimensions"
    };
    
    var measures = {
        uses: "measures",
        min: 2
    };

    var sorting = {
        uses: "sorting"
    }

    //myText
    var myText = {
        ref: "prop.myText",
        type: "string",
        label: "Insert text",
        expression: "optional"
    }

    //color-picker - error
    var myColorPicker = {
        label:"My color-picker",
        component: "color-picker",
        ref: "myColor",
        type: "object",
        defaultValue: {
          color: "FAC748",
          index: "-1"
        }
    }

    //Appearance section
    var appearanceSection = {
        uses: "settings",
        items: {
            //Something panel
            Something: {
                type: "items",
                label: "Something",
                items: {
                    myText: myText,
                    ColorPick: myColorPicker
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
