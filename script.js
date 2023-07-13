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



    // Asociar el evento click al botón "Agregar Input"
    addInputButton.addEventListener('click', addInput); 
    // Asociar el evento click al botón "Eliminar Input"
    removeInputButton.addEventListener('click', removeInput); 
    // Asociar el evento submit al formulario
    form.addEventListener('submit', handleSubmit); 
  
    function addInput() {
    // Contenedor de inputs
    const inputsContainer = document.getElementById('inputs');
    // Cantidad actual de inputs 
    const inputCount = inputsContainer.children.length; 

        
    // Crear un nuevo elemento de input
      const newInput = document.createElement('div'); 
      newInput.className = 'form-group';
      newInput.innerHTML = `
        <label for="input${inputCount + 1}">Input ${inputCount + 1}:</label>
        <input type="text" class="form-control" id="input${inputCount + 1}" name="input${inputCount + 1}">
      `;
    // Agregar el nuevo input al contenedor
      inputsContainer.appendChild(newInput); 
    }
  
    function removeInput() {
    // Contenedor de inputs
      const inputsContainer = document.getElementById('inputs');
    // Cantidad actual de inputs 
      const inputCount = inputsContainer.children.length; 
  
      if (inputCount > 1) {
    // Eliminar el último input agregado
        inputsContainer.removeChild(inputsContainer.lastChild); 
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