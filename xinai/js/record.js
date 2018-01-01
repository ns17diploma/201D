var jsf = require('jsonfile');
var filename = 'jsfile.json'
var chunk = require ('chunk')
var $ = require('jquery');

$(function () {
	let members = jsf.readFileSync(filename)

	if (members.length > 0) {
		let member_page_groups = chunk(members, 10)
		make_table(member_page_groups[0])

		if (member_page_groups.length > 1) {
			create_pagination(member_page_groups)
		}
	}
})

function make_table(members) {
	var html_insert_table = ""
	for (var i in members){
		html_insert_table = html_insert_table + 
							'<tr><td>' + members[i].Entrants_Number + '</td>' +
							'<td>' + members[i].Date_of_Entry + '</td>'	+ 						
							'<td>' + members[i].Name_of_Entrant + '</td>' +
							'<td>' + members[i].Picture_Title + '</td>' +
							'<td>' + members[i].Picture_Location + '</td>' +
							'<td>' + members[i].Category_Code + '</td>' +
							'<td>' + members[i].Camare_Type + '</td>' + '</tr>';
	}

	var html_table = '<table>' + 
						'<tr>' + 
							'<th>' + 'Entrants_Number' +'</th>' +
							'<th>' + 'Date_of_Entry' +'</th>' +
							'<th>' + 'Name_of_Entrant' +'</th>' +
							'<th>' + 'Picture_Title' +'</th>' +
							'<th>' + 'Picture_Location' +'</th>' +
							'<th>' + 'Category_Code' +'</th>' +
							'<th>' + 'Camare_Type' +'</th>' +							
						'</tr>'+
							html_insert_table + '</table>';
	$('section#content').html(html_table);
}

function create_pagination(pages) {

  $('#members-pagination').html('')

  for (var i = 0; i < pages.length; i++) {
    let item_html = `<span class="item" data-page="${i}">${i+1}</span>`
    $('#members-pagination').append(item_html)
  }
  $('#members-pagination span.item').click(function() {
    $this = $(this)
    make_table(pages[$this.data('page')]);
  });
}