var pm = require("path")

path = pm.basename("/home/shlok/College/SemIV/FSD2/02-nodejs/cricket.txt")
console.log(path)

path1 =pm.dirname("/home/shlok/College/SemIV/FSD2/02-nodejs/cricket.txt")
console.log(path1)

ext = pm.extname("/home/shlok/College/SemIV/FSD2/02-nodejs/cricket.txt")
console.log(ext)

path2 = pm.parse("/home/shlok/College/SemIV/FSD2/02-nodejs/cricket.txt")
console.log(path2)