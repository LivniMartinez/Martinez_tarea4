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
    
      function verificar() {
         // Prevenir el envío del formulario verificacion
        const inputs = form.getElementsByTagName('input');
        // Obtener todos los inputs dentro del formulario
        let valid = true;
        let vacios = [];
    
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].value.trim() === '') {
            inputs[i].classList.add('error');
            valid = false;
            vacios.push(inputs[i].id);
          } else {
          // Eliminar la clase de error de los inputs llenos
            inputs[i].classList.remove('error');
          }
        }
    
        if (valid) {
          crear_tabla();
        } else {
          const vacions_nombre = vacios.map(id => id.replace('input', 'Campo '));
          //alerta para llenar los inputs antes de enviar el formulario
          alert(`llene los siguientes espacios ${vacions_nombre.join(', ')}`);
        }
      }

    