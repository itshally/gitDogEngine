$(document).ready(() => {

     //Get request for all the list of dog's breed
     $.get('https://dog.ceo/api/breeds/list/all')
      .then((result) => {

          let dogbreeds = Object.keys(result.message);
          // Displaying all breeds in the home page
          for(let i in dogbreeds){
               $('.breeds-container .row').append(
                    `<div class="col-12 col-md-3 col-lg-2">
                         <p class="dog-breed" id="${dogbreeds[i]}">${dogbreeds[i]}</p>
                    </div>`
               );     

               if(result.message[dogbreeds[i]].length == 0){
                    console.log(dogbreeds[i] + " has no sub-degree")
                    $('#' + dogbreeds[i]).css('color', 'red');
               }else{
                    console.log(dogbreeds[i] + ' has a sub-degree')
               }
          }

          	//getting the sub-breed
		// 	  $('.dog-breed').on('click', (e) => {
          //           e.preventDefault();
                    
          //           let breed = e.target.textContent;
          //           console.log(e.target.textContent)
                    
          //           $.get(`https://dog.ceo/api/breed/${breed}/list`)
          //           .then((result) => {
          //                console.log(result)

          //                if(result.message.length == 0){
          //                     console.log('no sub-breed available')
          //                }
          //                else{
          //                     console.log('there is available')
          //                }
                              
          //           })
          //           .catch( (error) => {
          //                console.log(error);
          //           })
          //     });
      })
      .catch( (error) => {
          console.log(error)
      });


      $.get('https://dog.ceo/api/breeds/list/all')
      .then((result) => {
          let dogbreeds = Object.keys(result.message);

          for(let x in dogbreeds){
               let breed = getDogBreed(dogbreeds[x])
               //Displaying all breeds in the gallery's dropdown page
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