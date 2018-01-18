const $ = require('jquery')
const jsf = require('jsonfile')
const fs = require('fs')
const chunk = require('chunk')
const file = 'data.json'

$(function(){
	let allRecord = jsf.readFileSync(file)
	let theRecord = chunk(allRecord, 10)

	makeTable(theRecord[0])
	if (theRecord.length > 1) {
		makeBtn(theRecord)
	}
})

function makeTable(data) {
	$('#showData').html("")
	let title = `<tr>
					<th>Entrant Number</th>
					<th>Entrant Name</th>
					<th>Picture Title</th>
					<th>Picture Location</th>
					<th>Entry Date</th>
					<th>Category Code</th>
					<th>Camera Type</th>
				</tr>`
	$('#showData').append(title)

	for (var m in data) {
		let theData = ` <tr><td>${data[m]['Entrant_Number']}</td>
						<td>${data[m]['Entrant_Name']}</td>
						<td>${data[m]['Picture_Title']}</td>
						<td>${data[m]['Picture Location']}</td>
						<td>${data[m]['Entry_Date']}</td>
						<td>${data[m]['Category_Code']}</td>
						<td>${data[m]['Camera_Type']}</td></tr>						
		`
		$('#showData').append(theData)
	}
}

function makeBtn(num) {
	$('#allBtn').html("")
	for (var i = 0; i < num.length; i++) {
		let btns = `<button class="theBtn" data-page="${i}">${i+1}</button>`
		$('#allBtn').append(btns)
	}

	$('.theBtn').click(function(){
		$this = $(this)
		makeTable(num[$this.data('page')])
	})
}