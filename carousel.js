'use strict';

var Carousel = function(items){
    var me = this;
    me.paper = new Raphael("carousel", 800, 300);

    me.items = items;

    me.elements = me.paper.set();

    me.active_item(0);

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
        this.draw_active_item();
    },

    draw_active_item: function(){
        // Draw and return the elements of the 'active' menu item.

        console.log("paper: %o", this.paper);
        // Draw the active item in the middle of the paper
        
        var center = { // center of the paper
            x: this.paper.width / 2,
            y: this.paper.height / 2,
        };

        var size = { // size of the active element's containing 'box'
            width: 100,
            height: 100 
        }; 

        var elements = this.paper.set();

        var item = this.active_item();

        // Draw containing box
        var rect = this.paper.rect(center.x - size.width / 2, center.y - size.height / 2, size.width, size.height).attr({
            "fill": "#335"
        });

        // Draw text
        var text = this.paper.text(center.x, center.y, item.name).attr({
            "font-size": "22",
            "fill": "white",
        });

        elements.push(text, rect);
        return elements;

    },

};
