function open_tab(evt, tab_name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab_name).style.display = "block";
  evt.currentTarget.className += " active";
}

function load_file(file_id, div_id){
  // Load file from iframe
  alert("inside load file...");
  var file_frame = document.getElementById(file_id);
  // Read raw contents
  alert("before reading raw content...");
  var raw_contents = file_frame.contentWindow.document.body.childNodes[0].innerHTML;
  alert("middle reading raw content...");
  var rows = raw_contents.split("\n");
  alert("after reading raw content...");
  // Create table element
  var table = document.createElement("table");
  // Fill the table
  alert("filling the table...");
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].split(",");
    if (cells.length > 1) {
      var row = table.insertRow(-1);
      for (var j = 0; j < cells.length; j++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = cells[j];
      }
    }
  }
  // Add table to div
  var dvCSV = document.getElementById(div_id);
  dvCSV.innerHTML = "";
  dvCSV.appendChild(table);
}
