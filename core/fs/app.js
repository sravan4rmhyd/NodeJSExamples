var fs = require('fs');
//async version
/*fs.unlink('./sample.txt', function (err) {
    if (err) throw err;
    console.log('successfully deleted /tmp/hello');
});
//sync version
try {
    fs.unlinkSync("./sample.txt");
    console.log("sucessfully delated using sync call")
}catch(e)
{
    throw e;
}*/

/*fs.rename("./sample-new.txt","./sample.txt",function(err)
{
   if(err)
   {
       console.log('error in renaming file');
       throw err;
   }
});*/

/*fs.stat('./sample.txt', function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
});*/
/*console.log(process.cwd());*/

/*
fs.ftruncate("sample.txt",3,function(err)
{
   if(err)
   {
       throw err;
   }
});*/
fs.writeFileSync("./sample.txt","writing using sync method");
console.log(fs.readFileSync("./sample.txt").toString())
