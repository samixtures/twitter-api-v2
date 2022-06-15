console.log("Hello from bot.js!")

const {TwitterApi} = require("twitter-api-v2");
const config1 = require('./config1');

const client1 = new TwitterApi(config1);

const tweet = async (data) => {
    const result = await client1.v2.get('tweets/search/recent', { query: 'blue', max_results: 10 });
    console.log("hello from the func!");
    // console.log(result.data.length);
    // console.log(result);
    for (let i = 0; i < result.data.length; i++) {
        console.log(result.data[i].text);
        console.log("Next");
    }
    console.log(result.data); // TweetV2[]
}

tweet();

// var Twitter = require('twitter-v2');
// var config = require('./config');

// var client = new Twitter(config);

// const getData =  async (data) => {
//     await client.get('tweets', { ids: '1228393702244134912' });
//     console.log(data);
// }
// getData();
// const { data } = await client.get('tweets', { ids: '1228393702244134912' });
// console.log(data);

// T.get('tweets/search/recent', { query: 'banana', max_results: 2 }, function(err, data, response) {
//     console.log(data)
//   })

// With default prefix
// const result = await client.v2.get('tweets/search/recent', { query: 'nodeJS', max_results: 100 });
// console.log(result.data); // TweetV2[]
