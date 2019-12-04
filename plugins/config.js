if (process.env.NODE_ENV === "production") {
    module.exports = {
        base_api: "https://thegotovet-api.herokuapp.com"
    };
    } else {
    module.exports = {
        base_api: "http://localhost:3000"
    };
}
