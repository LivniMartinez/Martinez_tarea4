document.addEventListener('DOMContentLoaded', function() {
    //Se obtienen las referencias a los elementos relevantes en el documento HTML
    const addInputButton = document.querySelector('.btn-primary');
    // Botón "Agregar Input"
    const const removeInputButton = document.querySelector('.btn-danger');
    // Botón "Eliminar Input"
    const form = document.getElementById('Formulario');
    
    // Formulario

    // Se asocia el evento click al botón "Agregar Input"
        addInputButton.addEventListener('click', addInput);

    // Se asocia el evento click al botón "Eliminar Input"
        removeInputButton.addEventListener('click', removeInput);

    // Se asocia el evento submit al formulario
        form.addEventListener('submit', handleSubmit);
    

    // Función para agregar un nuevo input al formulario
    function addInput() {
    // Contenedor de los inputs
    const inputsContainer = document.getElementById('inputs'); 
    // Cantidad actual de los inputs
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
    // Función para eliminar el último input del formulario
    function removeInput() {
    // Contenedor de inputs
    const inputsContainer = document.getElementById('inputs'); 
    // Cantidad actual de inputs
    const inputCount = inputsContainer.children.length;
    
    // Verificar si hay más de un input antes de eliminarlo
        if (inputCount > 1) {
    // Eliminar el último input agregado
        inputsContainer.removeChild(inputsContainer.lastChild); 
      }
    }
    // Función para manejar el envío del formulario
        function handleSubmit(event) {
    // Prevenir el envío del formulario
        event.preventDefault(); 
    // Obtener todos los inputs dentro del formulario
    const inputs = form.getElementsByTagName('input'); 
    let valid = true;
     
    // Validar que todos los inputs estén llenos
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