var keysJs = require('./keys.js');
var Twitter = require('Twitter');
var Spotify = require('Spotify');
var Request = require('request');
var fs = require('fs');

var input = function () {
	var inputString = '';
	for (var i = 3; i <process.argv.length; i++) {
		inputString += process.argv [i];
		if(process.argv.length - 1 >i){
			inputString += '';
		}else{
			i == 4;
		}
	}
	return inputString;
};
function execute(executor, execution){
	switch (executor) {
		case 'tweets': Twitter(execution); break;
		case 'spotify': spotify(execution); break;
		case 'movie': movie(execution); break;
		case 'do-what-it-says': do-what-it-says(execution); break;
		default: console.log ("tweets <user name>", "spotify <song name>", "movie <movie name>", "do-what-it-says");

	}
};
function twitter(screenName) {
	if (process.argv[3] = '') { screenName = 'mjaaam'}
		var client = new Twitter ({
			consumer_key: keysJs.twitterKeys.consumer_key,
			consumer_secret: keysJs.twitterKeys.consumer_key,
			access_token_key: keysJs.twitterKeys.access_key,
			access_token_key: keysJs.twitterKeys.access_token_key
		});
}

		var params = {screen_name: screenName};

		client.get('statuses/user_timeline', params, function(error,tweets,response){
			if (!error){
				lineBreak();
				for (var i = 0; i < 20; i++){
					if (tweets[i] !=undefined){
						logAndAppend(tweets[i].created_at + '')
						logAndAppend(' " +tweets [i].text+ " ');
					}else{
						i = 20;
					}
				}
				lineBreak();
			}
			else{
				console.log('error:' + error);
			return;
			}
		});
};
function spotify (choice) {
	if (!choice) {choice = 'Say my name'};
	Spotify.search({ type: 'track', query: choice}, function(error,data){
		if (!error){
			j = 1
			for (var i = 0; i < 20; i++){
				if(data.tracks.items[i] != undefined){
					lineBreak();
					logAndAppend('#' + j)
					lineBreak();
					logAndAppend('Artist:' + data.tracks.items[i].artists[0].name)
					logAndAppend('Song:' + data.tracks.items[i].name)
					logAndAppend('Album:' + data.tracks.items[i].album.name)
					logAndAppend('Preview Url:' data.tracks.items[i].preview_url)
				}
				j++;
			}
			lineBreak();
		}
		else{
			console.log('Error:' + error);
			return;
		}
	});
};
function movie(choice){
	if (!choice) {choice = 'Mr. Nobody'};
	Request('http://omdbapi.com/?t='+ choice + '&y=&plot=short&r=json', function (error,response,body)){
		if (!error && response.statusCode ==200){
			body = JSON.parse(body);
			lineBreak;
			logAndAppend('Title:' + body.Title);
			logAndAppend('Year:' + body.Year);
			logAndAppend('IMDB Rating:' + body.imdbRating);
			logAndAppend('Country:' + body.Country);
			logAndAppend('Plot:' + body.Plot);
			logAndAppend('Actors:' + body.Actors);
			logAndAppend('Rotten Tomatoes Rating:' + body.rottenTomatoesRating);
			lineBreak();
		}else{
			console.log('Error:' + error);
			return;
		}
	})
};

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'm476kDOScU2O8hIz4fTKyKDgG',
  consumer_secret: 'IOV7qUDx5VknRN493zvLkiuqwStAjXxfpCUFZyfcOdyTH5T2cd',
  access_token_key: '51181266-TXWZ9o2JAWvVCpokWe8wKtlMusqcQUGhylpmnx4R1',
  access_token_secret: 'Nmuua1acZasHW1l78aLuuGAImDs03RdWO1HKYXnn5r7FY'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});


lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback)
search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)
get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/ 


var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})









