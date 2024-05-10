$(document).ready(function () {
  // load images
  $("#image_list a").each(function () {
    var swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
  });

  $("#image_list a").click(function (evt) {
    var imageURL = $(this).attr("href");
    var caption = $(this).attr("title");

    var captionText = caption.split(": ")[1];

    var fullCaption = "James Allison " + captionText;

    $("#caption, #image").fadeOut(1000, function () {
      $("#image").attr("src", imageURL);
      $("#caption").text(fullCaption);

      // new caption and image
      $("#caption, #image").fadeIn(1000);
    });

    // cancel the link
    evt.preventDefault();
  });

  $("li:first-child a").focus();
});
