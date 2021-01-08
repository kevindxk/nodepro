
//nodejs操作es

let elasticsearch = require('elasticsearch');

let client = new elasticsearch.Client({
    host: "192.168.1.27:9200",
    log: "error",
})


client.search({
    index: "postsinfo",
    type: "_doc",
    body: {
        query: {
            match: {
                platform: "tiktok"
            }
        }
    }
}, (error, response) => {
    if(error){
        console.log(error);
    }
    response.hits.hits.map((v) => console.log(v))
})