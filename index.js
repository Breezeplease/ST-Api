
$(() => {
localStorage.clear()
let storedStudents = []
let storedStaff = []
//   let myData = {
//   title: 'Information',
//   content:  [1,2,4,4,5,9] 
// }

// localStorage.setItem('setting',myData)

  $(`#infoButton`).click(() => {
    $('#tableBody').empty()
    $('#frontOne').text('Name')
    $('#frontTwo').text('Gender')
    $('#frontThree').text('House')

    if(!localStorage.getItem('storedStudents')){
      $.ajax({
       type: 'GET',
        url: 'http://hp-api.herokuapp.com/api/characters/students'
     }).done((res) => { //res = keyword    change it to whatever
        console.log(res)
        for(students of res) {
         // tableBody.append(students)
         storedStudents.push({name: students.name, gender: students.gender, house: students.house})
          $('#tableBody').append(createTableRowOne(students))
        }
        localStorage.setItem('storedStudents', JSON.stringify(storedStudents))
      })
    } else {
      for(students of storedStudents) {
        $('#tableBody').append(createTableRowOne(students))
      }
    }
  })
  
  function createTableRowOne(students) {
    let row = $(`<tr></tr>`)
    let name = $(`<td>${students.name}</td>`)
    let gender = $(`<td>${students.gender}</td>`)
    let house = $(`<td>${students.house}</td>`)
    
    name.css('color','red')
    
    row.append(name, gender, house)
    
    return row
  }

  $(`#staffButton`).click(() => {
    $('#tableBody').empty()
    $('#frontOne').text('Name')
    $('#frontTwo').text('Gender')
    $('#frontThree').text('Actor')
    if(!localStorage.getItem('storedStaff')){
      $.ajax({
       type: 'GET',
        url: 'http://hp-api.herokuapp.com/api/characters/staff'
     }).done((res) => { //res = keyword    change it to whatever

        for(staff of res) {
         // tableBody.append(staff)
         storedStaff.push({name: staff.name, gender: staff.gender, staff: staff.actor})
          $('#tableBody').append(createTableRowTwo(staff))
        }
        localStorage.setItem('storedStaff', JSON.stringify(storedStaff))
      })
    } else {
      for(staff of storedStaff) {
        $('#tableBody').append(createTableRowTwo(staff))
      }}
  })
  
  function createTableRowTwo(staff) {
    let row = $(`<tr></tr>`)
    let name = $(`<td>${staff.name}</td>`)
    let gender = $(`<td>${staff.gender}</td>`)
    let actor = $(`<td>${staff.actor}</td>`)
    
    row.append(name, gender, actor)
    
    return row
  }
  
  $('#clearButton').click(() => {
    $('#tableBody').empty()
    $('#frontOne').text('Choose')
    $('#frontTwo').text('One')
    $('#frontThree').text('Please')
    loaded = false
  })

})
// $(() => {}) short for $(document.ready(function) {})

