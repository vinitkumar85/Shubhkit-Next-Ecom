/* module.exports = {
    basePath : "http://localhost:8888/shop/backend/",
    secretToken: "tlb5vy2barxkh8pgvlpevxr5b62nwmps" 
} */


/* module.exports = {
    basePath : "http://shubhkit.hypernode.io/",
    secretToken: "99hni9rt40qct5zyvgovjhs14w48itl5" 
} */

var devconfig= {
    basePath : "http://localhost:8888/localshop/",
    secretToken: "xs1dhwllwenug9xvykyurgpwqq052ck4",
    apiPath: "http://localhost:3003"
}
var prodconfig= {
    basePath : "http://192.168.43.224:8888/localshop/",
    secretToken: "xs1dhwllwenug9xvykyurgpwqq052ck4", //3- Access Token - not secret
    apiPath: "http://192.168.43.224:3001"
}

module.exports = (function(){
    console.log(process.env.NODE_ENV)
    switch(process.env.NODE_ENV){
        case 'development':
            return devconfig;

        case 'production':
            return prodconfig;

        default:
            return prodconfig;
    }
})();