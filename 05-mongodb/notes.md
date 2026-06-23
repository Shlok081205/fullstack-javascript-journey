RDMS -> Database
Database - Database
Table - Collection
Column - Field
Row - Documents

cmd:
mongosh -> localhost:27017
use mydb
show collections
db.createCollection("student")
db.faculty.drop()
db.students.insertOne({name:'n1',rollno:22})
db.students.insertMany([{name:'n2',rollno:23},{name:'n3',rollno:24}])
db.students.find()
db.students.renameCollection("students")
db.students.find(query|filter|condition,projection{})
db.students_data.find({name:'n1'})
db.students_data.find({},{name:1})
db.students_data.find({},{\_id:0,name:1})
db.students_data.find({},{\_id:0,city:0})
db.students_data.find({name:'n1'},{\_id:0,age:false})
db.students_data.find().limit(2)
db.students_data.find().limit(2).skip(2)
db.students_data.updateOne({name:'n2'},{$set:{name:'n6',age:22}})
db.students_data.updateMany({name:'n1'},{$set:{age:21}})
upsert=update + insert
db.students_data.updateMany({name:'n10'},{$set:{age:21}},{upsert:true})
db.students_data.count()
db.students_data.find().count()
db.students_data.countDocuments()
db.students_data.find().sort({rollno:1})
db.employee.deleteMany({years_of_experience:2})
db.employee.find({age:{$in:[20,23]}})
$gte
$lte
$ne
$in
$nin

to change default server:mongosh "mongodb://192.168.1.100:27018"

Examples:
create a collection named employee having fields name,age,years of experience and
ratings:

1. insert 5 documents in collection
2. arrange all the records in ascending order by age
3. show the name of employee who is the oldest among all employees.
4. find the only name of employee having 10 ratings.
5. delete the record of the employee if the years of experience is 2.
   6.display all documents where age is greater than 19 and less than 23.
