//Write nodejs script to perform below task:Write below object in f2.txt file. Read data from same file and perform below task.1.a+b 2.c[1]-b 3.c[0]*c[1] . Add the output of +,-,* in f2.txt file

data = {
  d: {
    a: 10,
    b: 20,
    c: [30, 10],
  },
};

var fs = require("fs");

fs.writeFileSync("f2.txt", JSON.stringify(data));

data = JSON.parse(fs.readFileSync("f2.txt"));

a_d = data.d.a + data.d.b;
s_b = Math.abs(data.d.c[1] - data.d.b);
m_l = data.d.c[1] * data.d.c[0];

fs.appendFileSync("f2.txt", "\nSum:" + a_d + "\nSub:" + s_b + "\nMul:" + m_l);
