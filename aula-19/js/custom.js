// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

   /*
    * Ouvinte de eventos .nav-modal-open
    */
   $('.nav-modal-open').on('click', function(e){

      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      
      $('.modal-header h3.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal($('#formulariooffer'))

      myModal.show()

   })

   /*
    * TODO: incrementar a validação
    * - checar se o nome é válido (mais de 2 caracteres)
    * - checar se o email é válido com ao menos um "@" e "."
    * - checar se o cpf é válido com regex
    */
   function validate( elem ){
      if( elem.val() == '') {

         console.log('o campo de '+ elem.attr('name') + ' é obrigatório')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }

   $('body').on('submit', '.modal-body .form', function(e){

      e.preventDefault()

      const inputName = $('.newname')
      const inputEmail = $('.newemail')
      const inputNumber = $('.newnumber')

      validate(inputName)
      validate(inputEmail)
      validate(inputNumber)

      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      } else {
         $(this).submit()  
      }
   })

   $('body').on('blur', '.newname', function(){
      validate($(this))
   })

   $('body').on('blur', '.newemail', function(){
      validate($(this))
   })

   $('body').on('keyup', '.newnumber', function(){
      validate($(this))
      $(this).mask('(00) 00000-0000');
   })

   $('body').on('blur', '.newpassenger', function(){
      validate($(this))
   })

   $('body').on('focus', '.newdatepicker', function(){
      $(this).datepicker()
   })

   $('body').on('blur', '.newdatepicker', function(){
      $(this).mask('00/00/0000');
   })

   $('body').on('keyup', '.newcontatocpf', function(){
      $(this).mask('999.999.999-99');
   })

   $('body').on('keyup', '.newcontatonumber', function(){
      $(this).mask('(00) 00000-0000');
   })

   $('body').on('keyup', '.newcontatocep', function(){
      $(this).mask('00000-000');
   })

   /*
    * Bloquear Clique em Roteiros Esgotados
   */
   $('#roteirosesgotados_a').mouseover(function(){
      $('h3 , button').removeClass('finished_a');
      $('h3 , button').addClass('overbook_a');     
   });

   $('#roteirosesgotados_a').mouseout(function(){
      $('h3 , button').removeClass('overbook_a');
      $('h3 , button').addClass('finished_a');     
   });
  
   $('#roteirosesgotados_c').mouseover(function(){
      $('h3 , button').removeClass('finished_c');
      $('h3 , button').addClass('overbook_c');     
   });

   $('#roteirosesgotados_c').mouseout(function(){
      $('h3 , button').removeClass('overbook_c');
      $('h3 , button').addClass('finished_c');     
   });

   /*
    * Animação para exibir imagens dos roteiros
   */
   $( ".special_box_a" ).show( 1500 );
   $( ".special_box_b" ).show( 2000 );
   $( ".special_box_c" ).show( 2500 );
   $( ".special_box_d" ).show( 3000 );

})
