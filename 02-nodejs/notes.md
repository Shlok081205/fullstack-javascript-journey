### Node JS:

- open Source
- cross platform
- Javascript Runtime environment

### Node JS Architecture(Asynchronous Programming)

- Single threaded
- Event driven

### Key Components:

1. Client request
2. Event queue
3. Event loop
4. Worker Thread

### File System Module

```js
var fs = require("fs");
Sync(Async);
```

=> Possiblites:

- create a directory: `fs.mkdirSync("Sample")`js
- read: `text = fs.readFileSync("Sample/write.txt").toString("utf-8");`
- write : ` fs.writeFileSync("Sample/write.txt", "Be Kind");`
- append: `fs.appendFileSync("Sample/write.txt"," to Everyone");`
- delete : `fs.unlinkSync("Sample/wow.txt");`
- rename : `fs.renameSync("Sample/write.txt","Sample/wow.txt");`
- copy : `fs.copyFile("source.txt","destination.txt")`
- remove directory : `fs.rmdirSync("Sample")`

> Note: Refer fs1.js


### Sync
- mkdirSync
- writeFileSync
- readFileSync
- appendFileSync
- renameSync
- unlinkSync
- copyFileSync
- rmdirSync


### =>What whappens when you remove the FOlder containing a file???
> Director not Empty


### Path Module
=> var pm = require("path")

- pm.basenamr()
- pm.dirname()
- pm.extname()
- pm.parse()