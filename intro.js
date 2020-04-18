let currentVersion  = '1.3'
let name = getCookie('name')
if(name == '') {
  name = prompt("Jak masz na imię?")
  while(name == '' || name == null) {
    name = prompt("Jak masz na imię?")
  }
}
if(getCookie('name') == '') {
  let saveToCookie = confirm('Zapisać wybór?')
  if (saveToCookie) {
    setCookie('name', name, 24)
  }
}
$('.chatbot-message').html(getCookie('chatHistory'))
$('#mainHeader').html("Cześć, " + name + ', poniżej prezentujemy chatbota <span class="courier"><strong>v. ' + currentVersion + '</strong></span>')
$('.botVersion').html(currentVersion)