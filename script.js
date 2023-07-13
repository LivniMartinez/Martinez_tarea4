document.addEventListener('DOMContentLoaded', function() {
    //Se obtienen las referencias a los elementos relevantes en el documento HTML
    const addInputButton = document.querySelector('.btn-primary'); // Botón "Agregar Input"
    const removeInputButton = document.querySelector('.btn-danger'); // Botón "Eliminar Input"
    const form = document.getElementById('Formulario'); // Formulario

    // Se asocia el evento click al botón "Agregar Input"
        addInputButton.addEventListener('click', addInput);

    // Se asocia el evento click al botón "Eliminar Input"
        removeInputButton.addEventListener('click', removeInput);

    // Se asocia el evento submit al formulario
        form.addEventListener('submit', handleSubmit);
    

)}