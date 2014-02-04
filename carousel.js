'use strict';

var Carousel = function(items){
    var me = this;
    me.paper = new Raphael("carousel", 800, 300);

    // A word about naming:
    //
    //  * 'items' are js objects with properties describing menu items
    //
    //  * 'elements' are Raphael Element objects (graphical elements rendered on the screen)
    //
    //  * 'widgets' are sets (Raphael set()s) of elements that comprise a single 'thing' on-screen.

    me.items = items;
    me.active_index = 0;    // initialize active

    me.active_element = me.paper.set();
    me.elements = me.paper.set();

    me.active_item(1);

    me.draw();

    me.paper.showRuler(50);
};

Carousel.prototype = {

    active_item: function(index){
        // return or set the active menu item
        if (typeof index !== "undefined") {
            this.active_index = index;
        }

        return this.items[this.active_index];

    },

    prev: function(){
    },

    next: function(){
    },

    draw: function(){
        var me = this;

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
            var elements = me.paper.set();

            // position relative to active element
            var position = i - me.active_index;

            // Draw containing box
            var rect = me.paper.rect(point.x, point.y, size.width, size.height).attr({
                "stroke-width": "3px",
                "stroke": "#fff",
                "fill": Raphael.hsb(point.x / me.paper.width, 0.5, 0.5)
            });

            // Draw text
            var text = me.paper.text(point.x + size.width / 2, point.y + size.height / 2, item.name).attr({
                "font-size": "14",
                "fill": "white",
            });

            point.x += size.width + margin;
            var element = me.paper.set(rect, text);
            me.elements.push(element);

        };
    },

};
