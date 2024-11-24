//Import or require module.
const http = requier("http")//This is an object. Almost everything in JavaScript is an boject

http.createServer((request,response)=>{
    console.log(request.headers);
    //process incoming request
    
    response.end("Hello,this is your server responding to a request")
})

//I have built my server there!
//To start my server----Tell my computer to listen to incoming request through a certain port.
//PORT-----We have hardware ports and we have software ports-----numbers assigned to applications for identity as they
//communicate with other devices.
http.listen(3000, ()=>console.log("server started and running on port 3000"))