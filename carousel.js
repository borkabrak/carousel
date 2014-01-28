var Carousel = function(items){
    var me = this;
    me.paper = new Raphael("carousel", 800, 200);
    me.items = me.paper.set();

    me.paper.showRuler();

    console.log("First item:%o", me.menu_item(items[0]));
};

Carousel.prototype.next = function(n){
};

Carousel.prototype.prev = function(n){
};

Carousel.prototype.select = function(n){
};

Carousel.prototype.menu_item = function(item_spec){
    // return a Raphael set of elements composing a menu item.
    // The returned item should be suitable for applying motions and transforms.
    // It's own object?
    var elements = this.paper.set();
    return elements;
    
};

