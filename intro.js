name = prompt("Jak masz na imię?")
while(name == '' || name == 'null') {
  name = prompt("Jak masz na imię?")
}
$('#mainHeader').html("Cześć, " + name + ', poniżej prezentujemy chatbota <span class="courier"><strong>v. 1.0</strong></span>')