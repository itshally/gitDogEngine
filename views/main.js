$(document).ready(() => {

     //Get request for all the list of dog's breed
     $.get('https://dog.ceo/api/breeds/list/all')
      .then((result) => {

          let dogbreeds = Object.keys(result.message);
          // Displaying all breeds in the about page
          for(let i in dogbreeds){
               $('.breeds-container .breeds-list-row').append(
                    `<div class="col-12 col-md-3 col-lg-2">
                         <div class="dropdown">
                              <button id="${dogbreeds[i]}" class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              ${dogbreeds[i]}
                              </button>
                              <div class="dropdown-menu ${dogbreeds[i]}" aria-labelledby="dropdownMenuButton">
                              </div>
                         </div>
                    </div>`
               );     

               if(result.message[dogbreeds[i]].length == 0){
                    $('#' + dogbreeds[i]).addClass('disabled-dropdown');
                    $('.disabled-dropdown').removeAttr('data-toggle');

               }else{
                    $('#' + dogbreeds[i]).append(`
                         <span class="badge badge-pill">${result.message[dogbreeds[i]].length}</span>
                    `).attr({
                         title: 'View Sub-Breeds'
                    });
                    
                    for(let b in result.message[dogbreeds[i]]){
                         $('.' + dogbreeds[i]).append(`
                              <span class="dropdown-item" href="#">${result.message[dogbreeds[i]][b]}</span>
                         `);
                    }
               }
          }
      })
      .catch( (error) => {
          console.log(error)
      });


      $.get('https://dog.ceo/api/breeds/list/all')
      .then((result) => {
          let dogbreeds = Object.keys(result.message);

          for(let x in dogbreeds){
               let breed = getDogBreed(dogbreeds[x])
               //Displaying all breeds in the dropdown of the gallery page 
               $('.form-control').append(breed);
          }
      })
      .catch( (error) => {
          console.log(error)
      });

      //displaying the images
     $('#submit-btn').on('click', (e) => {
          var x = $('.form-control').val();
          $('.row').empty();
          $.get(`https://dog.ceo/api/breed/${x}/images/random/12`)
          .then((result) => {
               var imgURL = result.message;

               for(var x in imgURL){
                    var img = displayDogImages(imgURL[x]);
                    $('.row').append(img);
               }
          })
          .catch((error) => {
               console.log(error)
          });
     });

     // getting the dog's breed function
     function getDogBreed(x){
          var output = `<option value='${x}'> ${x} </option>`
          return output;          
     }

     // displaying each of the dogs image
     function displayDogImages(x){
          var image = `
               <div class='col-12 col-md-4 col-lg-4'>
                    <img class='dog-pics' src='${x}'>
               </div>
          `
          return image;
     }

});