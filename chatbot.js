function answerQuestion(message) {
  return questions[message]
}
function chat() {
  let m = document.forms["chatForm"]["m"].value.toLowerCase();
  a = answerQuestion(m);
  if(m == "otwórz stronę") {
    site = prompt('Jaką stronę chcesz otworzyć? (zacznij od https:// lub http://)\nStrona zostanie otwarta w tej karcie. Jeśli nie chcesz jej otwierać, nic nie wpisuj lub kliknij ANULUJ')
    if (site != "" && site != null) { window.location.href = site; }
  } else if (m == "wyświetl emotikonki") {
    emotikonka = prompt("Jaką byś chciał(a) emotikonkę?").toLowerCase()
    zdj_emotikonki = emotikonki[emotikonka]
    if(zdj_emotikonki == null) {
      alert('Przepraszam, ale nie znalazłem tej emotikonki.')
    } else {
      $('.chatbot-message').html($('.chatbot-message').html() + "Ty: wyświetl emotikonki => " + emotikonka + "<br />");
      $('.chatbot-message').html($('.chatbot-message').html() + "Ja: " + emotikonki[emotikonka] + "<br />");
    }
  } else {
    if (m != "" && m != 'null' && questions[m]) {
      $('.chatbot-message').html($('.chatbot-message').html() + "Ty: " + m + "<br />");
      $('.chatbot-message').html($('.chatbot-message').html() + "Ja: " +  questions[m] + "<br />");
      document.forms["chatForm"]["m"].value = "";
    } else if(questions[m] == undefined && m != "" && m != 'null') {
      alert('przepraszam, ale nie rozumiem...')
    }
  }
  setCookie('chatHistory', $('.chatbot-message').html(), 48)
  return false
}
function addQuestion() {
  let question = document.forms["addQuestionForm"]["question"].value;
  let answer = document.forms["addQuestionForm"]["answer"].value;
  document.forms["addQuestionForm"]["question"].value = "";
  document.forms["addQuestionForm"]["answer"].value = "";
  questions[question] = answer
  return false
}