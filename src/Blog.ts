import express from 'express';

export class Blog {
    express: express.Express;
    
    constructor() {        
        this.express = express();
        this.express.get('/', this.helloWorld);
    }

    helloWorld(req: express.Request, res: express.Response) {
        console.log('/');
        res.send('Hello, World!');
    }

    async start() {
        this.express.listen(80, () => console.log("Listening on port 80."));
    }
}
