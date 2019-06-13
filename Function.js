function id(x) {
    return x;
    }
console.log(id("hello"));
console.log(id(5));

var add = function (x, y) { return x + y };
console.log(add(2, 3));

var fac = function me(n) {
    if (n > 0) {
    return n * me(n-1);
    } else {
    return 1;
    }
    };
    console.log(fac(3));

    var add = new Function('x', 'y','z', 'return x + y+z');
    console.log(add(3,5,2))

    console.log(add(3,5));
    function add(x,y){
        return x+y;
    }

    console.log(add(3,5));
    var add=function(x,y){
        return x+y;
    }

    function add(x, y) {
        return x + y;
        }
        var add = add.bind(null,10);
        console.log(add(6));