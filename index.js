$(() => {
    let loaded = false;
    
 // Home Button
    
    $('#home').click(() => {
    $('.card-columns').empty()
        loaded = false;
    })

    // Chacter Buttons
    $('#northSiders').click(() => {
        $('.card-columns').empty()
        loaded = false;
        if(!loaded) {
            loaded = true;
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=northsiders&limit=37&format=json',
        type: 'GET' 
        }).done((data) => {
            
        let characters = data.items
        console.log(characters)
        let character =  characters.forEach( element => {
            let characterNames = element.title
            let url = element.url
            let urlLink = ('https://riverdale.wikia.com'+ url)
            let card = $(`<div class="card text-white mb-3"> </div>`)
            let characterName = $(`<div class="card-body"><a href="${urlLink}" target="_blank">${characterNames}</a></div>`)
         
            card.append(characterName)

            

            $('.card-columns').append(card)
        })
      })
    }
    })
    $('#mainCharacters').click(() => {
        $('.card-columns').empty()
        loaded = false;
        if(!loaded) {
            loaded = true;
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=Main_Characters_(Riverdale)&format=json',
            type: 'GET' 
            }).done((data) => {
                
            let characters = data.items
            console.log(characters)
            let character =  characters.forEach( element => {
                let characterNames = element.title
                let url = element.url
                let urlLink = ('https://riverdale.wikia.com'+ url)
                let card = $(`<div class="card text-white mb-3"> </div>`)
                let characterName = $(`<div class="card-body"><a href="${urlLink}" target="_blank">${characterNames}</a></div>`)
             
                card.append(characterName)
    
                
    
                $('.card-columns').append(card)
            })
          })
        }
        })
        $('#southSiders').click(() => {
            $('.card-columns').empty()
            loaded = false;
            if(!loaded) {
                loaded = true;
            $.ajax({
                url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=southsiders&limit=11&format=json',
                type: 'GET' 
                }).done((data) => {
                    
                let characters = data.items
                console.log(characters)
                let character =  characters.forEach( element => {
                    let characterNames = element.title
                    let url = element.url
                    let urlLink = ('https://riverdale.wikia.com'+ url)
                    let card = $(`<div class="card text-white mb-3"> </div>`)
                    let characterName = $(`<div class="card-body"><a href="${urlLink}" target="_blank">${characterNames}</a></div>`)
                 
                    card.append(characterName)
        
                    
        
                    $('.card-columns').append(card)
                })
              })
            }
            })
            $('#allRiverdaleCharacters').click(() => {
                $('.card-columns').empty()
                loaded = false;
                if(!loaded) {
                loaded = true;
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=Riverdale_Characters&limit=65&format=json',
                    type: 'GET' 
                    }).done((data) => {
                        
                    let characters = data.items
                    console.log(characters)
                    let character =  characters.forEach( element => {
                        let characterNames = element.title
                        let url = element.url
                        let urlLink = ('https://riverdale.wikia.com'+ url)
                        let card = $(`<div class="card text-white mb-3"> </div>`)
                        let characterName = $(`<div class="card-body"><a href="${urlLink}" target="_blank">${characterNames}</a></div>`)
                     
                        card.append(characterName)
            
                        
            
                        $('.card-columns').append(card)
                    })
                  })
            
                }
            })


// Events
$('#events').click(() => {
    $('.card-columns').empty()
    loaded = false;
    if(!loaded) {
    loaded = true;
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=Events&limit=20&format=json',
        type: 'GET' 
        }).done((data) => {
            
        let characters = data.items
        console.log(characters)
        let character =  characters.forEach( element => {
            let characterNames = element.title
            let url = element.url
            let urlLink = ('https://riverdale.wikia.com'+ url)
            let card = $(`<div class="card text-white mb-3"> </div>`)
            let characterName = $(`<div class="card-body">${characterNames} <br><br> <a href="${urlLink}" target="_blank">Click here to read more!</a></div>`)

         
            card.append(characterName)

            

            $('.card-columns').append(card)
        })
      })

    }


})


    // Locations




    $('#locations').click(() => {
        $('.card-columns').empty()
        loaded = false;
        if(!loaded) {
        loaded = true;
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=Locations&limit=42&format=json',
            type: 'GET' 
            }).done((data) => {
                
            let characters = data.items
            console.log(characters)
            let character =  characters.forEach( element => {
                let characterNames = element.title
                let url = element.url
                let urlLink = ('https://riverdale.wikia.com'+ url)
                let card = $(`<div class="card text-white b-3"> </div>`)
                let characterName = $(`<div class="card-body">${characterNames} <br><br> <a href="${urlLink}" target="_blank">Click here to read more!</a></div>`)
    
             
                card.append(characterName)
    
                
    
                $('.card-columns').append(card)
            })
          })
    
        }
    

})



























})
    