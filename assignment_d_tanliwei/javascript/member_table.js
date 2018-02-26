var app_js = './app.js';
var chunk = require('chunk');
var jsf = require('jsonfile');
var $ = require('jquery');
var file = 'members.json'

$(function(){

  let members = jsf.readFileSync(file)

  if (members.length > 0) {    

    let member_page = chunk(members, 4)

    make_table(member_page[0])

    if (member_page.length > 1) {
      create_pagination(member_page)
    }
  }


})

function make_table(members)
{

  $('#members-table tbody').html('')
  for (var i in members) {

  let member_row_html = 
  '<tr>'+
    '<td>'+'entrant_number'+'</td>'+
    '<td>'+ members[i].entrant_number +'</td>'+
  '</tr>'+
  '<tr>'+
    '<td>'+'name_entrant'+
    '<td>'+ members[i].name_entrant +'</td>'+
  '</tr>'+
  '<tr>'+
    '<td>'+'picture_title'+
    '<td>'+ members[i].picture_title +'</td>'+
  '</tr>'+
  '<tr>'+
    '<td>'+'picture_location'+'</td>'+
    '<td>'+ members[i].picture_location +'</td>'+
  '</tr>'+
  '<tr>'+
    '<td>'+'date_entry'+
    '<td>'+ members[i].date_entry +'</td>'+
  '</tr>'+
  '<tr>'+
    '<td>'+'category'+'</td>'+
    '<td>'+ members[i].category +'</td>'+
  '</tr>'+
  '<tr>'+
    '<td>'+'camare_type'+'</td>'+
    '<td>'+ members[i].camare_type +'</td>'+
  '</tr>'+
  '<tr>'+
    '<td style="padding-bottom:20px">'+'</td>'+
    '<td style="padding-bottom:20px">'+'</td>'+
  '</tr>'
  ///////
    $('#members-table tbody').append(member_row_html)
  }
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
