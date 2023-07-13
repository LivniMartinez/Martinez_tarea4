document.addEventListener('DOMContentLoaded', function() {
    //Se obtienen las referencias a los elementos relevantes en el documento HTML
    const addInputButton = document.querySelector('.btn-primary'); 
    // Botón "Agregar Input"
    const removeInputButton = document.querySelector('.btn-danger');
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
    const inputsContainer = document.getElementById('inputs'); // Contenedor de inputs
    const inputCount = inputsContainer.children.length; // Cantidad actual de inputs
    }

