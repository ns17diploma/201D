
var jsonfile=require('jsonfile');
var filename=('jsonfile.js');
var $=require('jquery');
var chunk=require('chunk');

$(function(){
	let numbers = jsonfile.readFileSync(filename)
	if(numbers.length>0){
		let number_page = chunk(numbers,10)
		make_table(number_page[0])
		if (number_page.length>1) {
			create_pagnitaion(number_page)
		}
	}
});

function make_table(numbers){
	var html_table_inside=""
	for(var i in numbers){
		html_table_inside= html_table_inside +
						   '<tr><td>'+numbers[i].Entrants_Number+'</td>'+
							'<td>'+numbers[i].Date_Of_Entry+'</td>'+
							'<td>'+numbers[i].Name_Of_Entrant+'</td>'+
							'<td>'+numbers[i].Picture_Title+'</td>'+
							'<td>'+numbers[i].Picture_Location+'</td>'+
							'<td>'+numbers[i].Category_Code+'</td>'+
							'<td>'+numbers[i].Camera_Type+'</td>'+'</tr>'
	}

	var html_table='<table>'+
						'<tr>'+
							'<th>'+'Entrants_Number'+'</th>'+
							'<th>'+'Date_Of_Entry'+'</th>'+
							'<th>'+'Name_Of_Entrant'+'</th>'+
							'<th>'+'Picture_Title'+'</th>'+
							'<th>'+'Picture_Location'+'</th>'+
							'<th>'+'Category_Code'+'</th>'+
							'<th>'+'Camera_Type'+'</th>'+
						'</tr>'									
					+html_table_inside+'</table>'

	$('section#content').html(html_table);
}

function create_pagination(pages){
	$('#number-pagination').html('')

	for(var i = 0; i <pages.length; i++){
		let item_html =`<span class="item" data-pahes="${i}">${i+1}</span>`
		$('#number-pagination').append(item_html)
	}
	$('#number-pagination span.item').click(function(){
		$this = $(this)
		make_table(pages[$this.data('page')]);
	})
}