import TwitterApi from 'twitter-api-v2';

const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAJHcVAEAAAAAD9QS2NUzNIOG%2B22Kaxd6WPZK2ac%3DuFLggfsPvmtQ4bKuQ1KEkF3jFqYFrd3yRVSzz9mZKO6VEEAaOi');
const roClient = twitterClient.readOnly;

export async function connect(){
  
  const user = await roClient.v2.user('44196397');
  const tweetsOfUser = await roClient.v2.userTimeline('44196397', { exclude: 'replies' });
  
  console.log(`Tweets of: ${user.data.name}`);
  //console.log(tweetsOfUser.data)

  return tweetsOfUser;
}