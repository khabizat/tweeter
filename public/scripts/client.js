/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$( document ).ready(function() {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

  const createTweetElement = function (tweetObj) {
  return  $(`
  <article class="tweet">
  <header class="tweets-header">
    <i class="fa-solid fa-user-astronaut"></i>
    <div class="names">
      <span id="user-name">${tweetObj.user.name}</span>
      <span id="user-nickname">${tweetObj.user.handle}</span>
    </div>
  </header>
  <div class = "tweets-main">
    <h2>${tweetObj.content.text}</h2>
  </div>
  <footer class="tweets-footer">
    <div class="date">
      <label id="date-posted">${tweetObj.created_at}</label>
    </div>
    <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-share"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article> `)

 }
  const $tweet = createTweetElement(tweetData);

  //Test
  // console.log($tweet);
  // $('.tweet-container').append($tweet);
});