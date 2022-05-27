/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//Function to prevent Cross-Site Scripting
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


//Takes in a tweet object and returs an <article> element containing the entire HTML structure of the tweet
const createTweetElement = function(tweetObj) {
  return  $(`
    <article class="tweet">
    <header class="tweet-header">
      <i class="fa-solid fa-user-astronaut"></i>
      <div class="names">
        <span class="user-name">${tweetObj.user.name}</span>
        <span class="user-nickname">${tweetObj.user.handle}</span>
      </div>
    </header>
    <div class="tweet-main">
      <p>${escape(tweetObj.content.text)}<p>
    </div>
    <footer class="tweet-footer">
      <div class="date">
        <label id="date-posted">${timeago.format(tweetObj.created_at)}</label>
      </div>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-share"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article> `);
};

  
//Takes in an array of tweet objects and then appends each one to the #tweets-container
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};


$(document).ready(function() {
  //jQuery POST request
  $("#form").submit(function(event) {
    event.preventDefault();
    if ($("textarea").val().length === 0 || $("textarea").val() === null) {
      $("#error").html('Empty text area! Please enter text');
    } 
    else if ($("textarea").val().length > 140) {
      $("#error").html('You have exceeded the maximum number of characters');
    }
    else {
      const queryString = $(this).serialize();
      $.post("/tweets", queryString)
        .done(function(data) {
          $("textarea").val("");
          loadTweets();
          $("#error").hide();
          $(".counter").val(140);
        });
    }

  });

  // Fetch tweets with AJAX
  const loadTweets = function() {
    $("#tweets-container").empty();
    $.get("/tweets", function(data) {
      return renderTweets(data);
    });
  };
  loadTweets();
});