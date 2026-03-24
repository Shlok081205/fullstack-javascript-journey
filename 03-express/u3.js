//Write node js script to print query string of url in url.txt file  using callback

var u = require("url")
var fs = require("fs");

url_add = "http://localhost:8080/detail.html?name=xyz&age=30";

/* q = u.parse(url_add,true)
process.noDeprecation = true

data =  JSON.stringify(q.query)

fs.writeFile("url.txt",data,(err)=>{
  if(err) throw err;
  console.log("Written")
})
  */

q = u.parse(url_add,false)
data = q.query;
fs.writeFile("url1.txt",data,(err)=>{
  if(err) throw err;
  console.log("Written")
})