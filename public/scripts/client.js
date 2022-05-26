/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {

  //takes in a tweet object and returs an <article> element containing the entire HTML structure of the tweet
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
  //Test for createTweetElement function
  // console.log($tweet);
  // $('#tweet-container').append($tweet);


  //Takes in an array of tweet objects and then appends each one to the #tweets-container
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      // const $tweet = createTweetElement(tweetData);
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').append($tweet);
    }
  }

  //jQuery POST request
  $( "#form" ).submit(function( event ) {
    event.preventDefault();
    const queryString = $(this).serialize();
    console.log(queryString);
    $.post("http://localhost:8080/tweets", queryString);
  
  });

  //Fetch tweets with AJAX
  const loadTweets = function() {
    $.get("http://localhost:8080/tweets", function (data) {
      return renderTweets(data);
    });
  }
  loadTweets()

});