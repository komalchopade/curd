const express= require ("express");
const app=express();
const port ="2000";
//rout

app.get("/",(req,res)=>{
     res.send("Welcome to my home page");
    });

 // GET request
    app.get('/', (req, res) => {
    res.send('GET request received');
  });
  
  // POST request
  app.post('/', (req, res) => {
    res.send('POST request received');
  });
  
  // PUT request
  app.put('/', (req, res) => {
    res.send('PUT request received');
  });
  
  // PATCH/UPDATE request
  app.patch('/', (req, res) => {
    res.send('PATCH request received');
  });
  
  // DELETE request
  app.delete('/', (req, res) => {
    res.send('DELETE request received');
  });
//listen

app.listen(port,()=>{
    console.log("server is running");
});

""