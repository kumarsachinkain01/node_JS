/*console.log("hello from nodeJs");
const arr = [1,2,3,4,5]
console.log(arr);

// object
const obj = {
    name: "Sachin kumar",
    age: 25
}
console.log(obj);*/




const fs = require("fs");  //CJS

// write opration with Async method 
const writeFileDemo = () => {
    fs.writeFile(
        "sample.txt",
        "Hello there my name is Sachin kumar!!!", (err)=> {
       
        if(err){
            console.log("Error Occured while writting file");
            return;
        }
        console.log("FILE WRITTEN SUCCESSFULLY");
    } );
}
//writeFileDemo()

/*------- readFile() method with async --------*/

/*
const readFileDemo = () => {
    // if we use utf8 than we dont need use to -> toString() . utf8 is basically for our data ko read string me ya jo data hota hai usse readable formate mai convert krdeta hai .

    fs.readFile("sample.txt", "utf8",(err , data) => {
       if(err){
        console.log("Error Reading File", err);
        return;
       }
       // ager utf8 use nahi kiya hai to hame data ko read formate k liye toString() krna pdta hai isse jo bhi hota hai usse hum string k formate mai pdh skte hai .
       console.log("FILE DATA => ", data.toString());
       //console.log("file written successfull .....  !!!.")
    });
};
//readFileDemo();


const path = require('path');
// __dirname is 
console.log(path.join(__dirname, "/classes"));

const taskFilePath = path.join(__dirname, "task.json");
// Ensure the file exixts ;

if(!fs.existsSync(taskFilePath)){
    console.log("FILE DOES NOT EXIST, CREATING IT NOW !.")
    fs.writeFileSync(taskFilePath, '[{"desc":"Hello", "completed": false }]');
} */
 
// readeLine Operation :-> readLine helps to take input from the user from the terminal .

const readLine = require("readline");
 const rl = readLine.createInterface({
    input: process.stdin,
    output:process.stdout
 })


/*
 rl.question("what is Your name ? and how are uh today.", (input) => {
    console.log(`Hello ${input} \nnice to hear , Have a good day ${input} !!!.`)
    rl.close();
   })
*/


   // program todoManager -->


   const getMyTask  = () => {
    const tasks = fs.readFileSync(taskFilePath);
    console.log(tasks);
   }

   const addTask = (task) => {
     getMyTask();
   }

   function todoManager(){
    rl.question("What would you like to do?\n Add a task", (answer => {
        switch (answer) {
            case "1":
                rl.question("Enter you task: " , (task) => {
                   console.log(`Adding this task: ${task}`) ;
                   addTask(task);
                })
                break;

            default:
               console.log("Invalid option please Enter a valid Option.");
                todoManager();
        }
    }))
   }
   todoManager();
   rl.close()

   

