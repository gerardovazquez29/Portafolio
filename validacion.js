//Haz tú valiación en javascript a

  document.getElementById('formcontato__form').addEventListener('submit', function(event) {
    let nombre = document.getElementById('formcontato__input').nombre.value;
    let email = document.getElementById('formcontato__inputmeal').email.value;

    if (nombre === '' || email === '') {
      alert('Por favor completa todos los campos');
      event.preventDefault(); // Evita que el formulario se envíe
    }
  });
