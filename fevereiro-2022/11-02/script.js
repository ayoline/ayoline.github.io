const videos = [
    'jcFmGzRZz3I',
    'C9zmtBMo3T0',
    'HiI6Hm0N0mk',
    '_zYoXIM4O3M',
    'eR3lSSwGev8',
    'hkLpKdnzcUo',
];

$(document).ready(() => {
    $('#root').html(`
    <h1 id="title">IGN Videos</h1>
    <div id="tabs">
      <ul></ul>
    </div>
  `);

    renderTabContents('tabs-1', true);
    renderTabs();

    $('.tabs').click(() => handleTabClick(event));
    $('#tabs').tabs();
    $('.accordion').accordion({ heightStyle: 'content' });
});

const handleTabClick = (event) => {
    const video = event.target.href.slice(-1);

    $('#player').remove();
    $(`#tabs-${video}`).prepend(`
    <iframe id="player" type="text/html" width="640" height="360" src="http://www.youtube.com/embed/${videos[video - 1]
        }?enablejsapi=1" frameborder="0">
    </iframe>
  `);

    createPlayer(videos[video - 1]);
    window.videoTab = `tabs-${video}`;
};

const renderTabs = () => {
    videos.forEach((video, index) => {
        if (index === 0) return;
        renderTabContents(`tabs-${index + 1}`);
    });
};

const renderTabContents = (tab, landingVideo) => {
    $('#tabs > ul').append(
        `<li class='tabs'>
            <a id="title-${tab}" href="#${tab}">
                ${tab}
            </a>
        </li>`
    );

    //append the tabs content
    $('#tabs').append(`
        <div id="${tab}">
            ${landingVideo ? '<div id="player"></div>' : ''}
        <div class="accordion">
            <h3>
                Title
            </h3>
            <div class="video_title">
            <p>
            </p>
        </div>
            <h3>
                Duration
            </h3>
            <div class="video_duration">
                <p>
                </p>
            </div>
            <h3>
                URL
            </h3>
            <div class="video_url">
                <p>
                </p>
            </div>
            <h3>
                Video ID
            </h3>
            <div class="video_id">
                <p>
                </p>
            </div>
        </div>
        </div>
        `);
};

function onYouTubeIframeAPIReady(videoId = videos[0]) {
    createPlayer(videoId);
}

let player;
const createPlayer = (videoId) => {
    if (player) player.destroy();

    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        events: {
            onReady: onPlayerReady,
        },
    });
};

function onPlayerReady(event) {
    const tab = videos.indexOf(event.target.getVideoData().video_id);

    $(`#title-tabs-${tab + 1}`).html(event.target.getVideoData().title);

    $(`#tabs-${tab + 1} > .accordion > .video_title > p`).html(
        event.target.getVideoData().title
    );

    $(`#tabs-${tab + 1} > .accordion > .video_duration > p`).html(
        parseInt(event.target.getDuration() / 60) +
        ':' +
        (event.target.getDuration() % 60)
    );

    $(`#tabs-${tab + 1} > .accordion > .video_url > p`).html(
        `<a target='_blank' href="${event.target.getVideoUrl()}">
			${event.target.getVideoUrl()}
		</a>`
    );

    $(`#tabs-${tab + 1} > .accordion > .video_id > p`).html(
        event.target.getVideoData().video_id
    );
}