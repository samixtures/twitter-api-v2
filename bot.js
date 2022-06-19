import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi('AAAAAAAAAAAAAAAAAAAAADLRdgEAAAAA4%2BY7J%2BNoF9EveIPPzAMnlede%2Fso%3DdnAvCd4lmwCnE3tNjNaAnoRGukCb6Ef5jo6Y8yNMZYh6Uac01i');

const result = await client.v2.get('tweets/search/recent', { query: 'nodeJS', max_results: 100 });
console.log(result.data); 