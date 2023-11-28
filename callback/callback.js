let data = [{i:4,b:3},{i:2,b:3},{i:4,b:5},{i:6,b:7}];
let area = (i,b)=>{
    return i*b;
}

let parameter = (i,b)=>{
    return 2*(i+b);
}

function cal(x,logic){
    let result = [];
    for(let i of x){
        result.push(logic(i.i,i.b));
    }
    return result;
}

let areaData = cal(data,area);
let arr = cal(data , parameter);

console.log(areaData);
console.log(arr)