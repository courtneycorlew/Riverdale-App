$(() => {
   
    // Local 
    // Storage

    localStorage.clear()
    let storedNorthSiders = [];
    let storedSouthSiders = [];
    let storedMainCharacters = [];
    let storedAllCharacters = [];
    let storedEvents = [];
    let storedLocations = [];





    
    // Home 
    // Button
    
    $('#home').click(() => {
        $('.card-columns').empty()
        loaded = false;
    })

    // Chacter 
    // Buttons

    $('#northSiders').click(() => {
        $('.card-columns').empty() 
        if(!localStorage.getItem('storedNorthSiders')) {      
            $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=northsiders&limit=37&format=json',
            type: 'GET' 
            }).done((data) => {    
                let characters = data.items
                characters.forEach( element => {
                    storedNorthSiders.push({title: element.title, url: element.url})
                    $('.card-columns').append(characterFunction(element))
                })
                localStorage.setItem('storedNorthSiders', storedNorthSiders)
            })
        } else {
            for(e of storedNorthSiders) {
                $('.card-columns').append(characterFunction(e))
           }
        }
    })


    $('#mainCharacters').click(() => {
        $('.card-columns').empty()
        if(!localStorage.getItem('storedMainCharacters')) {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=Main_Characters_(Riverdale)&format=json',
            type: 'GET' 
            }).done((data) => {
                let characters = data.items
                characters.forEach( element => {
                    storedMainCharacters.push({title: element.title, url: element.url})
                    $('.card-columns').append(characterFunction(element))
                })
                localStorage.setItem('storedMainCharacters', storedMainCharacters)
            })
        } else {
            for(e of storedMainCharacters) {
                $('.card-columns').append(characterFunction(e))
           }
        }
    })

    $('#southSiders').click(() => {
        $('.card-columns').empty()
        if(!localStorage.getItem('storedSouthSiders')) {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=southsiders&limit=11&format=json',
            type: 'GET' 
            }).done((data) => {    
                let characters = data.items
                characters.forEach( element => {
                    storedSouthSiders.push({title: element.title, url: element.url})
                    $('.card-columns').append(characterFunction(element))
                })
                localStorage.setItem('storedSouthSiders', storedSouthSiders)
            })
        } else {
            for(e of storedSouthSiders) {
                $('.card-columns').append(characterFunction(e))
           }
        }
    })


    $('#allRiverdaleCharacters').click(() => {
        $('.card-columns').empty()
        if(!localStorage.getItem('storedAllCharacters')) {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=Riverdale_Characters&limit=65&format=json',
            type: 'GET' 
            }).done((data) => {              
                let characters = data.items
                characters.forEach( element => {
                    storedAllCharacters.push({title: element.title, url: element.url})
                    $('.card-columns').append(characterFunction(element))
                })
                localStorage.setItem('storedAllCharacters', storedAllCharacters)
            })
        } else {
            for(e of storedAllCharacters) {
                $('.card-columns').append(characterFunction(e))
           }
        }
    })


    // Events

    $('#events').click(() => {
        $('.card-columns').empty()
        if(!localStorage.getItem('storedLocations')) {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=Events&limit=20&format=json',
            type: 'GET' 
            }).done((data) => {    
                let characters = data.items
                characters.forEach( element => {
                    storedLocations.push({title: element.title, url: element.url})
                    $('.card-columns').append(eventFunction(element))
                })
                localStorage.setItem('storedLocations', storedLocations)
            })
        } else {
            for(e of storedLocations) {
                $('.card-columns').append(eventFunction(e))
           }
        }
    })


    // Locations

    $('#locations').click(() => {
        $('.card-columns').empty()
        if(!localStorage.getItem('storedEvents')) {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://riverdale.wikia.com/api/v1/Articles/List?category=Locations&limit=42&format=json',
            type: 'GET' 
            }).done((data) => {                
                let characters = data.items
                characters.forEach( element => {
                    storedEvents.push({title: element.title, url: element.url})
                    $('.card-columns').append(eventFunction(element))
                })
                localStorage.setItem('storedEvents', storedEvents)
            })
        } else {
            for(e of storedEvents) {
                $('.card-columns').append(eventFunction(e))
           }
        }
    })




    function characterFunction(characters) { 
            let characterNames = characters.title
            let url = characters.url
            let urlLink = ('https://riverdale.wikia.com'+ url)
            let card = $(`<div class="card text-white mb-3"> </div>`)
            let characterName = $(`<div class="card-body"><a href="${urlLink}" target="_blank">${characterNames}</a></div>`)             
            card.append(characterName)
            return card
    }

    function eventFunction(characters){
        let characterNames = characters.title
        let url = characters.url
        let urlLink = ('https://riverdale.wikia.com'+ url)
        let card = $(`<div class="card text-white mb-3"> </div>`)
        let characterName = $(`<div class="card-body">${characterNames} <br><br> <a href="${urlLink}" target="_blank">Click here to read more!</a></div>`)        
        card.append(characterName)
        return card
    }


})
    