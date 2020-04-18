let name = getCookie('name')
if(name == '') {
  name = prompt("Jak masz na imię?")
  while(name == '' || name == null) {
    name = prompt("Jak masz na imię?")
  }
}
if(getCookie('name') == '') {
  console.log('hej')
  let saveToCookie = confirm('Zapisać wybór?')
  if (saveToCookie) {
    console.log(document.cookie)
    setCookie('name', name, 4)
    console.log(document.cookie)
  }
}
$('#mainHeader').html("Cześć, " + name + ', poniżej prezentujemy chatbota <span class="courier"><strong>v. 1.1</strong></span>')