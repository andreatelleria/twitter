window.addEventListener('load', function () {
  var textarea = document.getElementById('textarea'); /* Formulario */
  var counter = document.getElementById('counter'); /* Contador */
  var button = document.getElementById('tweetbtn'); /* Botón para twittear */

  /**/
  textarea.addEventListener('keyup', function () {
    var newCounter = textarea.value.length;
    newCounter = 140 - newCounter;
    counter.textContent = newCounter;

    if (newCounter < 20) {
      counter.style.color = 'yellow';
    }

    if (newCounter < 10) {
      counter.style.color = 'orange';
    }

    if (newCounter < 0) {
      counter.style.color = 'red';
    }

    if (newCounter > 20) {
      counter.style.color = 'black';
    }

    if (newCounter < 0 || newCounter === 140) {
      button.setAttribute('disabled', 'disabled');
    } else {
      button.removeAttribute('disabled');
    }
  });

  /**/
  button.addEventListener('click', function () {
    var content = document.getElementById('textarea').value;

    if (content.length > 0) {
      var tweetsContainer = document.getElementById('tweeted');
      var newElement = document.createElement('div');
      var newParagraph = document.createElement('p');
      var firstElement = tweetsContainer.children[0];

      content = document.createTextNode(content);
      newParagraph.appendChild(content);
      newParagraph.classList.add('tweetParagraph');
      newElement.appendChild(newParagraph);

      tweetsContainer.insertBefore(newElement, firstElement);

      /**/
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();

      if (hours < 10) {
        hours = '0' + hours;
      }

      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      time = 'Posted on ' + hours + ':' + minutes;
      var hora = document.createElement('p');
      var horaContent = document.createTextNode(time);
      hora.classList.add('time');
      hora.appendChild(horaContent);
      newElement.insertBefore(hora, newParagraph);

      /**/
      textarea.value = '';
      textarea.style.height = '80px';
      counter.textContent = '140';
      button.setAttribute('disabled', 'disabled');
    }
  });

});
