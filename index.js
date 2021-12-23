const http = require('http');
const readWrite = require('./moduloReadWrite/readWriteData');
const port = 3000;

const server = http.createServer( (req,res) => {
    res.statusCode = 200;
    
    console.log('req.url: ', req.url);
    console.log('req.met: ', req.method);

    if(req.url == '/add'){
        //agregue objeto
        
        let array_posts = JSON.parse(readWrite.getData());
        console.log('array_posts: ', array_posts);
        
        let post =  {
            "userId": 1,
            "id": 6,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          };

        array_posts.push(post);
        readWrite.setData(JSON.stringify(array_posts))
        res.write('add');
        res.end();
        return;
        
    }
    if(req.url == '/remove'){
        //remove objeto
        res.write('remove');
        res.end();
        return;
    }
})


server.listen(port,'localhost',() => {
    console.log("estoy escuchando en el puerto " + port);
})