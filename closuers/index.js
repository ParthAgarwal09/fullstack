// function outer(){
//     var p=50;

//     function inner(){
//         var a=10;
//         p++;
//         console.log('p=',p,'a=',a)
//     }

//     return inner;
// }

// var fun = outer();  //inner //closure value =51 then closure value =52
// var fun1 = outer(); //inner //closure value =51

// fun();
// fun();
// fun1();



function outerFun(){
    let money = 150;
    function innerFun(){
        money++;
        let a =10;
        function innerMostFun(){
            money++;
            a++;
            console.log('money: ',money,'a: ',a);
        }
        return innerMostFun;
    }
    return innerFun();
}

let fun = outerFun();
let fun1 = fun();
let fun2 = fun();

fun1();
fun1();
fun2();
fun2();
fun1();