'use strict';

var Carousel = function(items){
    var me = this;
    me.paper = new Raphael("carousel", 800, 300);
    me.paper.showRuler(50);
    me.items = items;

    me.draw();

};

Carousel.prototype = {
    selected: function(){
    },

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
        me.items.forEach(function(item){

            var frame = me.paper.rect(x, 0, width, height).attr({
                "stroke": "black",
                "stroke-width": "3px",
            });

            var middle_of_frame = { 
                x: frame.attr("x") + (frame.attr("width")  / 2), 
                y: frame.attr("y") + (frame.attr("height") / 2), 
            };

            var text = me.paper.text(middle_of_frame.x, middle_of_frame.y, item.name);

            x += frame.attr("width");
            console.log("%s >> frame:%o (middle:%o), text:%o, next:%s", item.name, frame, middle_of_frame, text, x);
        });
    },
};
