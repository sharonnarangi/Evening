const fs = require("fs")//importing an object fs from node.js in  built modules.
//FS stands for File System Module.

fs.writeFile("style.css", `body{color:red}`,(error)=>{
    if(error){
        console.log(error);

    }else{
        console.log("file created successfully");
    }
}
)

//This function takes in 3 arguments.