$(() => {
  $(`#infoButton`).click(() => {
    $.ajax({
      type: 'GET',
      url: 'https://swapi.co/api/people/'
    }).done((res) => { //res = keyword    change it to whatever
      let data = res.results
      for(person of data) {
        console.log(person.name)
      }
    })
  })

})
// short for $(document).ready(function) {}

