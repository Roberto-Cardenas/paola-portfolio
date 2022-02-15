$(document).ready(function(){
  // Initiate modal
  var projectModal = $('.modal').modal();

  var images = [
    'media/stock-dog.jpg',
    'media/stock-sunset-1.jpg',
    'media/stock-sunset-2.jpg',
    'media/stock-sunset-river.jpg',
    'media/stock-dog.jpg',
    'media/stock-sunset-1.jpg',
    'media/stock-sunset-2.jpg',
    'media/stock-sunset-river.jpg',
    'media/stock-dog.jpg',
    'media/stock-sunset-1.jpg',
    'media/stock-sunset-2.jpg',
    'media/stock-sunset-river.jpg'
  ];

  // Add images to page
  var imageClone = $('.modal-btn');
  var imageDiv = $('#image-div');

  // Insert each image into the grid and add the onclick event
  $.each(images, (i, val) => {    
    var image = imageClone.clone().removeClass('hide');

    image.find('img').attr('src', val);

    image.click(() => {
      var modal = $('#modal1');
      modal.find('#modal-img').attr('src', val)

      $('.modal').modal('open');
    });

    imageDiv.append(image);
  });
});