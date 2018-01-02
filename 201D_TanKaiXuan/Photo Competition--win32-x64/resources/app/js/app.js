var jsonfile = require('jsonfile');
var file = "data.json";
var fs = require('fs');

if (!fs.existsSync(file)) {
  fs.mkdirSync('allData')
  fs.writeFileSync(file, '[]')
}

var data = "";

function create() {
  var x = Math.floor((Math.random() * 999996) + 1);

  var digit = x.toString();
  var mul = 6;
  var sum = 0;
  for (var i = 0; i < digit.length; i++) {
    sum += (digit[i] * mul);
    mul--
  }

  if (digit.length === 6 && (sum % 11) === 0) {
    document.getElementById('entrant_number').value = x; 
  } else {
    create();
  }
}

function validation() {
  
  var entrant_number = document.getElementById('entrant_number').value;
  var entrant_name = document.getElementById('entrant_name').value;
  var picture_title = document.getElementById('picture_title').value;
  var picture_location = document.getElementById('picture_location').value;
  var entry_date = document.getElementById('entry_date').value;

  var digit = entrant_number.toString();
  var mul = 6;
  var sum = 0;
  for (var i = 0; i < digit.length; i++) {
    sum += (digit[i] * mul);
    mul--
  }
  
  var point = 0

  if (digit.length === 6 && (sum % 11) === 0) {
    point++;
  } else {
    document.getElementById('label_entrant_number').style.display = 'block';
    document.getElementById('error_entrant_number').classList.add("error");
  }
  if (entrant_name != "") {
    point++;
  } else {
    document.getElementById('label_entrant_name').style.display = 'block';
    document.getElementById('error_entrant_name').classList.add("error");
  }
  if (picture_title != "") {
    point++;
  } else {
    document.getElementById('label_picture_title').style.display = 'block';
    document.getElementById('error_picture_title').classList.add("error");
  }
  if (picture_location != "") {
    point++
  } else {
    document.getElementById('label_picture_location').style.display = 'block';
    document.getElementById('error_picture_location').classList.add("error");
  }
  if (entry_date != "") {
    point++;
  } else {
    document.getElementById('label_entry_date').style.display = 'block';
    document.getElementById('error_entry_date').classList.add("error");
  }

  if (point == 5 ) {
    submitform()
    document.getElementById('myModal').style.display = "block";
  }
}

var newData = {}; 

function submitform() {

  newData.entrant_number = document.getElementById('entrant_number').value;
  newData.entrant_name = document.getElementById('entrant_name').value;
  newData.picture_title = document.getElementById('picture_title').value;
  newData.picture_location = document.getElementById('picture_location').value;
  newData.entry_date = document.getElementById('entry_date').value;
  newData.category_code = document.getElementById('category_code').value;
  newData.camera_type = document.getElementById('camera_type').value;

  let data = jsonfile.readFileSync(file);
  data.push(newData); 

  jsonfile.writeFile(file, data, {spaces:2,EOL:'\r\n'}, function (err) {
    console.error(err);
    return;
  })
}

/*Function For Modal*/
function clickSpan() {
    document.getElementById('myModal').style.display = "none";
}function clickSpan() {
  location.reload();
}