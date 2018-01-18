const $ = require('jquery')
const jsf = require('jsonfile')
const fs = require('fs')
const file = 'data.json'
var allID = []

$(function(){
	if (!fs.existsSync(file)) {
		jsf.writeFileSync(file, [])
	}

	$('.getValue').each(function(){
		$this = $(this)
		allID.push($this.attr('id')) 		
	})

	$('#saveBtn').click(function(){
		checkEmpty()
		validate()
		if (checkEmpty() !== true || validate() !== true) {
			alert('The form is not complete!')
		} else {
			record()
			alert('The form has been saved.')
			clear()
		}
	})

	$('#clearBtn').click(clear())

})

function record() {
	if (!fs.existsSync(file)) {
		jsf.writeFileSync(file, [])
	}
	let data = jsf.readFileSync(file)
	let theData = {}
	$('.getValue').each(function(){
		$this = $(this)
		theData[$this.attr('name')] = $this.val()
	})

	data.push(theData)
	jsf.writeFileSync(file, data, {spaces: 2, EOL: "\r\n"})	
}

function checkEmpty() {
	for (var i = 0; i < allID.length; i++) {
		if ($('#'+ allID[i]).val() === "") {
			$('#' + allID[i]).parent().addClass('field error')
			$('#' + allID[i]).addClass('field error')
		} else {
			$('#' + allID[i]).parent().removeClass('field error')
			$('#' + allID[i]).removeClass('field error')
		}
	}
	if ($this.parent().hasClass('error')) {
		return false
	} else {
		return true
	}
}

function validate() {
	let val = ($('#Enumber').val()).toString()
	let sum = 0
	for (var m = 0; m < val.length; m++) {
		let mul = 6 - m
		sum += Number(val[m]) * mul
	}

	if ((sum % 11) !== 0 || val.length !== 6) {
		$('#Enumber').parent().addClass('field error')	
		return false	
	} else {
		$('#Enumber').parent().removeClass('field error')
		return true
	}
}

function clear() {
	for (var l in allID) {
		$('#' + allID[l]).val("")
	}
}