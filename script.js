document.addEventListener('DOMContentLoaded', function() {
    // Botón "Agregar Input"
    const agrega_input = document.getElementById('agrega_input');
    // Botón "Eliminar Input"
    const quitar_input = document.getElementById('quitar_input');
    
    //Enviar Formulario
    const enviar = document.getElementById('enviar');

    // Formulario
    const form = document.getElementById('Formulario');
    
    //Contenedor de inputs
    const inputsContainer = document.getElementById('inputs');
    
    //Contenedor de la tabla
    const tableContainer = document.getElementById('tableContainer');
    
    //Cuerpo de la tabla
    const tableBody = document.getElementById('tableBody');

    //Cantidad de hijos del contenedor de los inputs
    let inputCount = inputsContainer.children.length;

    // Asociar el evento click al botón "Agregar Input"
    agrega_input.addEventListener('click', addInput); 
    // Asociar el evento click al botón "Eliminar Input"
    quitar_input.addEventListener('click', removeInput);
    // Asociar el evento click al formulario para verificar
    enviar.addEventListener('click', verificar);
  
    function addInput() {
    // Contenedor de inputs
    inputCount++;
    const newInput = document.createElement('div');
    newInput.className = 'form-group';
    newInput.innerHTML = `
      <label for="input${inputCount}"> Campo ${inputCount}:</label>
      <input type="text" class="form-control" id="input${inputCount}" name="input${inputCount}">
    `;
    inputsContainer.appendChild(newInput);
    }

    //Eliminacion de inputs
    function removeInput() {
      function removeInput() {
        if (inputCount > 1) {
          inputsContainer.removeChild(inputsContainer.lastChild);
          inputCount--;
        }
      }
  
    function handleSubmit(event) {
    // Prevenir el envío del formulario
      event.preventDefault(); 
    
    // Obtener todos los inputs dentro del formulario
      const inputs = form.getElementsByTagName('input'); 
      let valid = true;
  
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
    // Agregar una clase de error a los inputs vacíos
          inputs[i].classList.add('error'); 
          valid = false;
        } else {
    // Eliminar la clase de error de los inputs llenos
          inputs[i].classList.remove('error'); 
        }
      }
  
      if (valid) {
        alert('Formulario enviado correctamente');
      
      } else {
        alert('Por favor, complete todos los campos');
      }
    }
  });