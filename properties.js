define( [], function () {
    'use strict';

    //Dimensions - measures - sortings
    var dimensions = {
        uses: "dimensions"
    };
    
    var measures = {
        uses: "measures"
    };

    var sorting = {
        uses: "sorting"
    }

    //myText
    var myText = {
        ref: "prop.myText",
        type: "string",
        label: "Insert text here",
        expression: "optional"
    }

    //Appearance section
    var appearanceSection = {
        uses: "settings",
        items: {
            //Header
            Header: {
                type: "items",
                label: "Header",
                items: {
                    myTextBox: myText
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
                //sorting: sorting,
                appearancePanel: appearanceSection
            }
    };

} );
