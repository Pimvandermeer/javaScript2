//import $ from "jquery";
//import { youtube } from "./youTube.js";
var videos = [];
//console.log(videos);
$.ajax({
  url: "https://api.myjson.com/bins/k4o2v",
  cache: false,
  dataType: "JSON",
  success: function(data) {
    console.log(data.videos);
    for (i = 0; i < data.videos.length; i++){
        addVideoToList(data.videos[i]);
      }
  },
  error: function(xhr, textStatus, errorThrown) {
    console.log(errorThrown);
    $("data");
  }
});


var addVideoToList = function(video) {
  var videoLink = $("<a>");
  videoLink.append(video.title);
  var thumbnailUrl = youtube.generateThumbnailUrl(video.youtubeId);
  var thumbnailImg = $("<img>");
  thumbnailImg.attr("src", thumbnailUrl);
  videoLink.append(thumbnailImg);

  videoLink.on("click", function(e) {
    e.preventDefault();

    var videoTitle = $("<h2>");
    videoTitle.html(video.title + " <small>" + video.author + "</small>");

    var videoEmbed = $("<iframe></iframe>");
    videoEmbed.attr("src", youtube.generateEmbedUrl(video.youtubeId));
    videoEmbed.attr("width", 560);
    videoEmbed.attr("height", 315);

    var videoWatcher = $("#video-watcher");
    videoWatcher.hide();
    videoWatcher.empty();
    videoWatcher.append(videoTitle);
    videoWatcher.append(videoEmbed);
    videoWatcher.fadeIn();
  });

  var videoItem = $("<li>");
  videoItem.append(videoLink);
  $("#videos-list").append(videoItem);
};

for (var i = 0; i < videos.length; i++) {
  addVideoToList(videos[i]);
}
