---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<head>
<link rel="stylesheet" href="css/tabs.css">
<script src="js/functions.js"></script>
</head>

<!-- Tab links -->
<div class="tab">
  <button class="tablinks active" onclick="open_tab(event, 'description')">Description</button>
  <button class="tablinks" onclick="open_tab(event, 'location')">Location</button>
  <button class="tablinks" onclick="open_tab(event, 'schedule')">Schedule</button>
  <button class="tablinks" onclick="open_tab(event, 'participants'); show_csv('participants', 'participants/participants.csv')">Participants</button>
</div>

<!-- Tab content -->
<div id="description" class="tabcontent" style="display: block;">
  <p>This was the first meetup of Turing AI Fellows and teams. Researchers presented their work around ML applications in the form of posters and talks.</p>
</div>

<div id="location" class="tabcontent">
  <p>Lecture Theatre 2 (LT2)</p>
  <p>William Gates Building</p>
  <p>15 JJ Thomson Ave, Cambridge, CB3 0FD</p>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4608756367845!2d0.09093377127032908!3d52.21084871510938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8774a3e90f6a7%3A0x46f5a17802d7f53b!2sLecture%20Theatre%202%2C%20Cambridge%20CB3%200FD!5e0!3m2!1sen!2suk!4v1676040082729!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  
</div>

<div id="schedule" class="tabcontent">
  <iframe src="schedule/schedule.pdf" width="100%" height="680px"></iframe>
</div>

<div id="participants" class="tabcontent">
</div>
