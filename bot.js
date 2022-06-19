console.log("Hello from bot.js!")
import { TwitterApi } from 'twitter-api-v2';
console.log("Modules!");
import config1 from './config1.js';

const client = new TwitterApi('AAAAAAAAAAAAAAAAAAAAADLRdgEAAAAA4%2BY7J%2BNoF9EveIPPzAMnlede%2Fso%3DdnAvCd4lmwCnE3tNjNaAnoRGukCb6Ef5jo6Y8yNMZYh6Uac01i');

const result = await client.v2.get('tweets/search/recent', { query: 'nodeJS', max_results: 100 });
console.log(result.data); 