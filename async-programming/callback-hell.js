function downloadFile(path,downloaded){
    console.log('file start to download from ',path);
    setTimeout(()=>{
        let file = path.split('/')[1]
        downloaded(file);
    },3000)
}

function compressFile(file,compressed){
    console.log('file start to compress');
    setTimeout(()=>{
        let compFile = file.split('.')[0]+'.zip';
        compressed(compFile);
    },2000)
}

function upload(compFile,uploaded){
    console.log('file started to upload');

    setTimeout(()=>{
        uploaded();
    },3000)
}

// call-back hell

downloadFile('facebook.com/profile.jpg',(file)=>{
    console.log('file successfully downloaded as',file);
    compressFile(file,(compFile)=>{
        console.log('compressed successfully as',compFile);
        upload(compFile,()=>{
            console.log('file uploaded successfully');
        });
    })
})