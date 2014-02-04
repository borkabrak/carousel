'use strict';

var Carousel = function(items){
    var me = this;
    me.paper = new Raphael("carousel", 800, 300);

    // A word about naming:
    //
    //  * 'items' are js objects with properties describing menu items
    //
    //  * 'elements' are Raphael Element objects (graphical elements rendered on the screen)

    me.items = items;

    me.active_index = 0;    // initialize active

    me.elements = me.draw();

    me.paper.showRuler(50);
};

Carousel.prototype = {

    prev: function(){
        this.active( this.active_index > 0 ? (this.active_index - 1) : 0 );
    },

    next: function(){
        this.active( this.active_index < this.elements.length - 1  ? (this.active_index + 1) : this.elements.length - 1 );
    },

    active: function(index){
        var me = this;

        me.elements[me.active_index].animate({transform: scale(-1)}, 250);

        // If we're setting, then set
        me.active_index = (typeof index !== "undefined") ? index : me.active_index;

        me.elements[me.active_index].animate({transform: scale(0)}, 250);
        return me.elements[me.active_index];
    },

    draw: function(){
        var me = this;

        // Track drawn elements
        var elements = me.paper.set();

        // Margin, in pixels
        var margin = 20;

        var size = { // size of each element
            width: (me.paper.width / this.items.length) - (margin / 2 * (this.items.length - 1)),
            height: me.paper.height / 2
        }; 

        var point = {
            x: margin,
            y: (me.paper.height - size.height) / 2
        };

        for(var i = 0; i < me.items.length; i++){
            var item = me.items[i];

            // Elements that visually comprise this item.
            var item_elements = me.paper.set();

            // position relative to active element
            var position = i - me.active_index;

            // Draw containing box
            var rect = me.paper.rect(point.x, point.y, size.width, size.height).attr({
                "stroke-width": "3px",
                "stroke": "#fff",
                "fill": Raphael.hsb(point.x / me.paper.width, 0.5, 0.5),
                "transform": scale(position)
            });

            // Draw text
            var text = me.paper.text(point.x + size.width / 2, point.y + size.height / 2, item.name).attr({
                "font-size": "18",
                "fill": "white",
                "transform": scale(position)
            });

            point.x += size.width + margin;
            var item_elements = me.paper.set(rect, text);
            elements.push(item_elements);

        };

        return elements;

    },

};

// Return a transformation string to be applied to an element, based on position.
// position < 0 - it precedes the active element
// position > 0 - follows the active element
// position === 0 - it IS the active element
function scale(position){
    return position === 0 ? "" : "s 0.75,0.75";
};
