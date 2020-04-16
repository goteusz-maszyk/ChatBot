function answerQuestion(message) {
  return questions[message]
}
function chat() {
  let userMessage = document.forms["chatForm"]["userMessage"].value;
  a = answerQuestion(userMessage);
  if(userMessage == "otwórz stronę") {
    site = prompt('Jaką stronę chcesz otworzyć? (zacznij od https:// lub http://)\nStrona zostanie otwarta w tej karcie. Jeśli nie chcesz jej otwierać, nic nie wpisuj lub kliknij ANULUJ')
    if (site != "" && site != null && site != 'https://' && site != 'http://') { window.location.href = site; }
  } else {
    if (userMessage != "" && userMessage != 'null' && questions[userMessage]) {
      alert(questions[userMessage])
      $('.chatbot-message').html($('.chatbot-message').html() + questions[userMessage] + "<br />");
      document.forms["chatForm"]["userMessage"].value = "";
    } else if(questions[userMessage] == undefined && userMessage != "" && userMessage != 'null') {
      alert('przepraszam, ale nie rozumiem...')
    }
  }
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