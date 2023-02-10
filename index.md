---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<head>
<link rel="stylesheet" href="css/tabs.css">
<script src="js/tabs.js"></script>
</head>

#<script>
#function openCity(evt, tab_name) {
#  // Declare all variables
#  var i, tabcontent, tablinks;

#  // Get all elements with class="tabcontent" and hide them
#  tabcontent = document.getElementsByClassName("tabcontent");
#  for (i = 0; i < tabcontent.length; i++) {
#    tabcontent[i].style.display = "none";
#  }
#
#  // Get all elements with class="tablinks" and remove the class "active"
#  tablinks = document.getElementsByClassName("tablinks");
#  for (i = 0; i < tablinks.length; i++) {
#    tablinks[i].className = tablinks[i].className.replace(" active", "");
#  }
#
#  // Show the current tab, and add an "active" class to the button that opened the tab
#  document.getElementById(tab_name).style.display = "block";
#  evt.currentTarget.className += " active";
#}
#</script>

<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'location')">Location</button>
  <button class="tablinks" onclick="openCity(event, 'schedule')">Schedule</button>
  <button class="tablinks" onclick="openCity(event, 'participants')">Participants</button>
</div>

<!-- Tab content -->
<div id="location" class="tabcontent">
  <h3>Location</h3>
  <p></p>
</div>

<div id="schedule" class="tabcontent">
  <h3>Schedule</h3>
  <p></p>
</div>

<div id="participants" class="tabcontent">
  <h3>Participants</h3>
  <p></p>
</div>
