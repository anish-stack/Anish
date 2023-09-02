const express = require('express');
const app = express();

// Require the contact route
const contactRoute = require('./contact');

// Use the contact route
app.use(contactRoute);

app.get('/',(req,res)=>{
    res.send("hello word")
})
// Other routes and middleware...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
