const express = require('express');
 const app = express();
 const fetch = require('node-fetch');
 /*
 const button = document.getElementById('btnGo');
 button.addEventListener('click', function(e) {
  console.log('button was clicked');
 });
 */
 app.use(express.static('public')) // Serva statiska filer

//app.use(express.bodyParser());

app.get('/news', async function (req, res){
    const response = await fetch(
        "https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=738be83d4e774452a88ca18474058c42", {
            method: 'get'
        });

    const data = await response.json();
    res.send(data);
})

app.post('/', function(req, res) {
 console.log(req.body);
 res.send([
     {
         city: "Stockholm",
         time: "Torsdag",
         temp: 21
     },
     
        {
            city: "Stockholm",
            time: "Torsdag",
            temp: 21
        }

    ]);
});
//app.get('/api/hello', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!')); 
 