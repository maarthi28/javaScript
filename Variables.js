/*function temp(){
    var x=5;
    function hello(){
       var x=6;
    }
    console.log(x);
}

temp();

function f() {
    //console.log(bar); 
    bar = 'abc';
    console.log(bar); 
    }
f()

!function () { 
    console.log("hello")
    }()
(function () { 
        console.log("hello")
        }());


        var x = 23;
        (function (twice) {
        console.log(twice);
        }(x * 2));

        var setValue = function () {
            var prevValue;
            return function (value) { 
            if (value !== prevValue) {
            console.log('Changed: ' + value);
            prevValue = value;
            }
            else{
                console.log("not changed");
            }
            };
            }();

            setValue(5);
            setValue(5); 

            function f() {
                var result = [];
                for (var i=0; i<3; i++) {
                var func = function () {
                return i;
                };
                result.push(func);
                }
                return result;
                }
                console.log(f()[1]());*/

                function f() {
                    var result = [];
                    for (var i=0; i<3; i++) {
                    (function () {
                    var pos = i; 
                    var func = function () {
                    return pos;
                    };
                    result.push(func);
                    }());
                    }
                    return result;
                    }
                    console.log(f()[1]());