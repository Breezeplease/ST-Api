let loaded = false

$(() => {
  $(`#infoButton`).click(() => {
    if(!loaded){
      loaded = true
      $.ajax({
       type: 'GET',
        url: 'https://swapi.co/api/people/'
     }).done((res) => { //res = keyword    change it to whatever
        $('#frontOne').text('Name')
        $('#frontTwo').text('Height')
        $('#frontThree').text('Birth Year')
      let data = res.results
        
        for(person of data) {
         // tableBody.append(person)
          $('#tableBody').append(createTableRowOne(person))
        }
      })
    }
  })
  
  function createTableRowOne(person) {
    let row = $(`<tr></tr>`)
    let name = $(`<td>${person.name}</td>`)
    let height = $(`<td>${person.height}</td>`)
    let birth = $(`<td>${person.birth_year}</td>`)
    
    name.css('color','red')
    
    row.append(name)
    row.append(height)
    row.append(birth)
    
    return row
  }

  $(`#planetsButton`).click(() => {
    if(!loaded){
      loaded = true
      $.ajax({
       type: 'GET',
        url: 'https://swapi.co/api/planets/'
     }).done((res) => { //res = keyword    change it to whatever
      $('#frontOne').text('Name')
      $('#frontTwo').text('Diameter')
      $('#frontThree').text('Population')

      let data = res.results
        for(planet of data) {
         // tableBody.append(planet)
          $('#tableBody').append(createTableRowTwo(planet))
        }
      })
    }
  })
  
  function createTableRowTwo(planet) {
    let row = $(`<tr></tr>`)
    let name = $(`<td>${planet.name}</td>`)
    let diameter = $(`<td>${planet.diameter}</td>`)
    let population = $(`<td>${planet.population}</td>`)
    
    row.append(name)
    row.append(diameter)
    row.append(population)
    
    return row
  }

  $(`#shipsButton`).click(() => {
    if(!loaded){
      loaded = true
      $.ajax({
       type: 'GET',
        url: 'https://swapi.co/api/starships/'
     }).done((res) => { //res = keyword    change it to whatever
      $('#frontOne').text('Name')
      $('#frontTwo').text('Length')
      $('#frontThree').text('Crew')
      
      let data = res.results
        for(ships of data) {
         // tableBody.append(ships)
          $('#tableBody').append(createTableRowThree(ships))
        }
      })
    }
  })
  
  function createTableRowThree(ships) {
    let row = $(`<tr></tr>`)
    let name = $(`<td>${ships.name}</td>`)
    let length = $(`<td>${ships.length}</td>`)
    let crew = $(`<td>${ships.crew}</td>`)
    
    row.append(name)
    row.append(length)
    row.append(crew)
    
    return row
  }
  
  $('#clearButton').click(() => {
    $('#tableBody').empty()
    $('#frontOne').empty()
    $('#frontTwo').empty()
    $('#frontThree').empty()
    loaded = false
  })

})
// $(() => {}) short for $(document.ready(function) {})

