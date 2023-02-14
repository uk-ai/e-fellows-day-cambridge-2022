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

function show_csv(control_id, file_id){
  var reader = new FileReader();
  alert("inside show csv...");
  reader.onload = function (e) {
    alert("inside onload...");
    var table = document.createElement("table");
    var rows = e.target.result.split("\n");
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
    var dvCSV = document.getElementById("participants");
    dvCSV.innerHTML = "";
    dvCSV.appendChild(table);
  }
  const node = document.createElement("li");
  const textnode = document.createTextNode("Test");
  node.appendChild(textnode);
  var dvCSV = document.getElementById(control_id);
  dvCSV.innerHTML = "";
  dvCSV.appendChild(node);
  file = document.getElementById(file_id);
  reader.readAsText(file);
}
