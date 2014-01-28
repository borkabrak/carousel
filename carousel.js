'use strict';

var Carousel = function(items){
    var me = this;
    me.paper = new Raphael("carousel", 800, 300);
    me.paper.showRuler(50);

    me.items = items;

    me.selected = 0;

    me.draw();

};

Carousel.prototype = {

    select: function(index){
        console.log("Select menu item %s", index);
    },

    prev: function(){
    },

    next: function(){
    },

    draw: function(){
        var me = this;

        var height = me.paper.height;
        var width = me.paper.width / me.items.length;
        var x = 0;

        // draw menu items
        me.items.forEach(function(item){

            var attributes = (me.items.indexOf(item) === me.selected) ? {
                frame: {
                    "fill"          : "#335", 
                    "stroke"        : "black",
                    "stroke-width"  : "3px",
                },

                text: {
                    "fill": "white",
                },

            } : {
                frame: {
                },
                text: {
                },
            };

            var frame = me.paper.rect(x, 0, width, height).attr(attributes.frame);

            var middle_of_frame = { 
                x: frame.attr("x") + (frame.attr("width")  / 2), 
                y: frame.attr("y") + (frame.attr("height") / 2), 
            };

            var text = me.paper.text(middle_of_frame.x, middle_of_frame.y, item.name).attr(attributes.text);

            x += frame.attr("width");
        });
    },
};
