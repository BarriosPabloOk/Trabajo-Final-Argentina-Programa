
const form = document.querySelector('#work-form')
const arrayOfValidations = document.querySelectorAll('span')
const spans = Array.from(arrayOfValidations)

//Espero a que se cargue toda la ventana
window.addEventListener('load', () => {
  let validator = new FormValidator('work-form',
  [ // creo un array con la informacion necesaria para cada campo. Esa info se entrega como un objeto
  {
    name : 'first-name',
    display: 'Nombre',
    rules: 'required|min_length[10]'
  },
  {
    name : 'email',
    display: 'Email',
    rules: 'required|valid_email'
  },
  {
    name : 'phone',
    display: 'Teléfono',
    rules: 'required|numeric'
  },
  {
    name : 'experience',
    display: 'Experiencia',
    rules: 'required|min_length[20]'
  },
  {
    name : 'reason',
    display: 'Motivo',
    rules: 'required|min_length[50]'
  },
  
  ], function(errors, event) {

    if (errors.length > 0) {
      spans.forEach((element)=>{
        element.innerText = ""
      })
      //si tengo errores, debo detener el envío de datos
      event.preventDefault()
      

        errors.forEach((element, index, array) => {
          console.log(element)     
          const spanError = spans.filter(span => span.id == `${element.id}-validation`)     
          if(spanError.length !=0){
            
            spanError[0].innerText = element.message
          }
          
        });
        
      }else{
        alert("Formulario enviado")
      }
  


  })



})

