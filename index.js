let loaded = false

$(() => {
  $(`#infoButton`).click(() => {
    if(!loaded){
      $.ajax({
       type: 'GET',
        url: 'https://swapi.co/api/people/'
     }).done((res) => { //res = keyword    change it to whatever
        let data = res.results
        for(person of data) {
         // tableBody.append(person)
          $('#tableBody').append(createTableRow(person))
        }
        loaded = true
      })
    }
  })

function createTableRow(person) {
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

})
// $(() => {}) short for $(document.ready(function) {})

