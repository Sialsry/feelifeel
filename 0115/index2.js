const obj = {
    name : "soon",
    getName() {
        console.log(obj.name)
    }
}

const obj2 = obj;
obj2.getName()


function inner() {
    console.log(3,this);
    function outer() {
        console.log("2",this);
        function hello() {
            console.log(4,this)
        }
        hello()
    }

    outer()
    return function() {
        console.log("1",this);
    }
}

inner();
inner.call({name : "soon2"});



/* ------------------------------------------*/
Foo = {name: name, getState(){console.log(this)}}

obj = {name : soon, getState(){console.log(this)}}


// 24번 줄 이전의 this : 

