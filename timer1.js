let argv = process.argv;
argv =argv.map(Number); // all strings will be NaN
argv.sort(); 
for(let ele of argv){
  if(ele !== NaN && ele >0){
    setTimeout(()=>{
      // let start = new Date().getSeconds();
      // console.log(start);
      process.stdout.write('\x07');
    },ele*1000);
  }
  
}

