var u = require("url")
addr = "http://localhost:8080/test?m1=50&m2=60&m3=70"
q = u.parse(addr,true)
process.noDeprecation=true;
m1 = parseInt(q.query.m1)
m2 = parseInt(q.query.m2)
m3 = parseInt(q.query.m3)
console.log((m1+m2+m3)/3)
