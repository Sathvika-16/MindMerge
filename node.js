

//http://localhost:3001/
/*   npm packages to be installed 
npm install express-session
npm install mongodb mongoose env bodyparser express
npm install express mongodb dotenv
 */


const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const connectToMongoDB = require('./routes/dbcon');
//connect to mongodb
connectToMongoDB();
const path = require('path');
const router = express.Router();
const port = 3001;
const { checkUserCredentials } = require('./routes/dbcon');

app.use(express.static(__dirname + '/public'));
app.use("/css", express.static(__dirname + './public/css'));
app.use("/html", express.static(__dirname + './public/html'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: "./public/html" });
});

app.get("/login1", function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'html', 'login1.html'));
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/public/html/contact.html");
});

app.get("/services", function (req, res) {
  res.sendFile(__dirname + "/public/html/services.html");
});

app.get("/profile", function (req, res) {
  res.sendFile(__dirname + "/public/html/profile.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/public/html/about.html");
});

router.post('/user', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const response = await axios.post('/user', {
      username: username,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Assuming your API returns a success message
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    // Check if 'error.response' is defined before accessing its properties
    if (error.response) {
      console.error('Error during user authentication:', error.response.data);
      res.status(error.response.status).json({ success: false, message: error.response.data.message });
    } else {
      // Handle other types of errors (e.g., network issues)
      console.error('Error during user authentication:', error.message);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
});


app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
