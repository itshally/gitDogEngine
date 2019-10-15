// require('axios')

$(document).ready(() => {

     //GET request for all the breeds
     $.get('https://dog.ceo/api/breeds/list/all')
      .then((result) => {
          var dogbreeds = Object.keys(result.message);
          // console.log(result);
          for(var x in dogbreeds){
               var breed = getDogBreed(dogbreeds[x])
               $('.form-control').append(breed)
          }
      })
      .catch( (error) => {
          console.log(error)
      });
      
      //displaying the images
      $('#submit-btn').on('click', (e) => {
           var x = $('.form-control').val();
           $('.row').empty();
          console.log(x)
          $.get(`https://dog.ceo/api/breed/${x}/images/random/12`)
          .then((result) => {
               var imgURL = result.message;

               console.log(result.message)
               for(var x in imgURL){
                   var img = displayDogImages(imgURL[x]);
                    $('.row').append(img);
               }


          })
          .catch((error) => {
               console.log(error)
          });
     
     });

     // getting the dog breed
     function getDogBreed(x){
          var output = `<option value='${x}'> ${x} </option>`
          return output;
     }

     function displayDogImages(x){
          var image = `
               <div class='col-12 col-md-4 col-lg-4'>
                    <img class='dog-pics' src='${x}'>
               </div>
          `
          return image;
     }

});