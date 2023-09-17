// Student Name: Saurabh Kale
// Student ID: 1223450319
// Date: 09/02/2023

const httpServer = require('http'); 
const url = require('url');
const fs = require('fs');
const replaceTemplate = require('./modules/replaceTemplate');

//Read data from file
const tempCourse = fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'
) 

//Read data from file
const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/template/templateCourse.html`,
    'utf-8'
) 

const dataObj = JSON.parse(tempCourse); //converts String to Javascript object JSON

//Create Server
const server = httpServer.createServer( (req, res)=> { //callback function

    // const urlparameter = url.parse(req.url, true);
    // console.log(urlparameter.query);
    // console.log(urlparameter.pathname);
    const {query,pathname} = url.parse(req.url, true); // object destructors
    if(query.id){ //if there is query parameter named id read as String
        //Course page
        if(pathname === '/' || pathname.toLowerCase() === '/courses'){
            res.writeHead(200, { //Everything ran successfully
                'Content-type':'text/html'
            });
            const course = dataObj[Number(query.id)]   //Convert string to numeric value
            // res.end(`We received our first request from the client at resourse ${urlparameter.pathname.toLowerCase()} with query parameter ${urlparameter.query.id}
            // ${JSON.stringify(course)}`);    //Convert object back to string
            const strCourseName = JSON.stringify(course);
            const courseHTML = replaceTemplate(templateHTMLCourse,course);
            res.end(courseHTML);
        }
        else{
            res.writeHead(404, {    //Server did not find what you were looking
                'Content-type':'text/html'
            });
            res.end(`resource not found`);
        }
    }
    
    
});

//Start Listening to requests
server.listen(8000, 'localhost',()=> {
    console.log('Listening to requests on port 8000');
});