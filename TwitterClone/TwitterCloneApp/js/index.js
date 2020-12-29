const URL = "http://localhost:3000/tweets";

const onEnter = (e) => {
    if(e.key == 'Enter'){
        getTwitterData();
    }
}

/**
 * Retrive Twitter Data from API
 */
const getTwitterData = () => {
    const q = document.getElementById('user-search-input').value;
    if(!q) return

    const url = `${URL}?q=${encodeURIComponent(q)}&count=10`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        buildTweets(data.statuses);
    })
}

/**
 * Save the next page data
 */
const saveNextPage = (metadata) => {
}

/**
 * Handle when a user clicks on a trend
 */
const selectTrend = (e) => {
    console.log(e.innerText)
    query = e.innerText;
    document.getElementById('user-search-input').value = query;
    getTwitterData();
}

/**
 * Set the visibility of next page based on if there is data on next page
 */
const nextPageButtonVisibility = (metadata) => {
}

/**
 * Build Tweets HTML based on Data from API
 */
const buildTweets = (tweets, nextPage) => {
    // console.log(tweets);
    let tweetContent = '';
    
    tweets.map((tweet) => {
        // console.log(tweet.full_text)
        const createdDate = moment(tweet.created_at).fromNow();

        tweetContent += `<div class="tweet-container">
                            <div class="tweet-user-info">
                                <div class="tweet-user-profile" style="background-image: url(${tweet.user.profile_image_url_https})">
                                </div>
                                <div class="tweet-user-name-container">
                                    <div class="tweet-user-fullname">
                                        ${tweet.user.name}
                                    </div>
                                    <div class="tweet-user-username">
                                    @${tweet.user.screen_name}
                                    </div>
                                </div>
                            </div>`
        
        let tweet_entity = tweet.extended_entities;

        if(tweet_entity && tweet_entity.media.length > 0){
            tweetContent += buildImages(tweet_entity.media);
            tweetContent += buildVideo(tweet_entity.media);
        }                      
                                
        tweetContent +=     `<div class="tweet-text-container">
                                ${tweet.full_text}
                            </div>
                            <div class="tweet-date-container">
                                ${createdDate}
                            </div>
                        </div>`
    });

    // console.log(tweetContent)
    document.querySelector('.tweets-list').innerHTML = tweetContent;
}

/**
 * Build HTML for Tweets Images
 */
const buildImages = (mediaList) => {
    // console.log(mediaList)

    let imagesContent = `<div class="tweet-images-container">`;
    let imageExists = false;
    
    mediaList.map((media) => {
        if(media.type == 'photo'){
            // console.log(media.media_url_https)

            imageExists = true;
            imagesContent += `<div class="tweet-image" style="background-image: url(${media.media_url_https})">
            </div>`
        }
    })
    imagesContent += `</div>`
    return imageExists ? imagesContent : '';
}

/**
 * Build HTML for Tweets Video
 */
const buildVideo = (mediaList) => {
    let videoContent = `<div class="tweet-video-container">`;
    let videoExists = false;
    
    mediaList.map((media) => {
        if(media.type == 'video'){
            // console.log(media.media_url_https)

            videoExists = true;
            videoContent += `
            <video controls>
                <source src="${media.video_info.variants[0].url}" type="video/mp4">
            </video>`
        } else if(media.type == 'animated_gif') {
            videoExists = true;
            videoContent += `
            <video loop autoplay>
                <source src="${media.video_info.variants[0].url}" type="video/mp4">
            </video>`
        }
    })
    videoContent += `</div>`
    return videoExists ? videoContent : '';
}
