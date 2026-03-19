// write a node js that performs the following operations using path module and Asynchronous file system Module
// 1. from a given existing file path extract the directory name using the path module
// 2. create the extracted directory inside an existing folder using fs module
// 3. extract the file name from the given path using path module
// 4. create that file inside newly created directory and write some data into it 
// 5. copy the content of this file to another file
// 6. delete the original file after copying the content

var fs=require('fs');
var pm=require('path');

// 1. from a given existing file path extract the directory name using the path module
var dn=pm.dirname("/home/shlok/College/SemIV/FSD2/02-nodejs");
var fn=pm.basename("/home/shlok/College/SemIV/FSD2/02-nodejs/fs1.js");
console.log(dn);
console.log(fn);

// 2. create the extracted directory inside an existing folder using fs module
fs.mkdir(dn,(err)=>{
    if(err){
        console.log(err);
    }else{
        fs.writeFile(dn+"/"+fn,"Hello, Good night.Sweet dreams",(err)=>{
            if(err){
                console.log(err);
            }else{
                fs.copyFile(dn+"/"+fn,dn+"/copy.txt",(err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        fs.unlink(dn+"/"+fn,(err)=>{
                            if(err){
                                console.log(err);
                            }else{
                                console.log("File deleted successfully");
                            }
                        })
                    }   
                })
            }
        });
    }
});