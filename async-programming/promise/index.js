let pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let data = "promise data resolve"
        resolve(data);
        // let err = "new error"
        // reject(err);
    },5000)
})

//console.log(pr);

pr
    .then((data)=>{
        
    })