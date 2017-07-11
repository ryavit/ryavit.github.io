$(document).ready(function () {

    (function(){
		
//		  var socket = io.connect('http://localhost');
          $('.chat__header').hide();
          $('.chat__content-clock').hide();
          $('#chat').hide();
          $('#name').focus();
          $('form').submit(function(event){
            event.preventDefault();
          });

          $('#join').click(function(){
            var now = new Date();
            var currentTime = "TODAY AT " + now.getHours() + ":" + now.getMinutes(); 
            var name = $('#name').val();
              
            if (name != '') {
              //socket.emit('join', name);
              $('#login').hide();
              $('#chat').show(500);
              $('.chat__content-clock').show(500);
              $('.chat__content-time').append(currentTime);
              $('#msg').focus();
              ready = true;
              
              $('.chat__title').hide();
              $('.chat__icon').hide();
              $('.chat__login').hide();
              $('.chat__header').show();
              $('.chat__footer-bg').css("height", "3.9286rem");
                
              //=====================//
              var idMsg = localStorage.getItem("ID")
              console.log(idMsg);
              if (idMsg != null) {
                  for (var i=0; i<=idMsg; i++) {
                      var returnObj = JSON.parse(localStorage.getItem(i));
                      console.log(returnObj.message);
                      console.log(returnObj);
                      $('#msgs').append('<li class="chat__content-item"><div class="chat__content-item-msg">' + returnObj.message + '</div><div class="chat__content-item-name">' + returnObj.user + '</div></li>');
                      $('.chat__content-list').scrollTop(50000);
                  }
                  $('.chat__content-item').hide();
                  $('.chat__content-item').fadeIn(300);
              } 
              console.log(idMsg);
              
             }
          });

          $('#name').keypress(function(e){
            if(e.which == 13) {
              var now = new Date();
              var currentTime = "TODAY AT " + now.getHours() + ":" + now.getMinutes(); 
              var name = $('#name').val();
              
              if (name != '') {
                  //socket.emit('join', name);
                  $('#login').hide();
                  $('#chat').show(500);
                  $('.chat__content-clock').show(500);
                  $('.chat__content-time').append(currentTime);
                  $('#msg').focus();
                  ready = true;

                  $('.chat__title').hide();
                  $('.chat__icon').hide();
                  $('.chat__login').hide();
                  $('.chat__header').show();
                  $('.chat__footer-bg').css("height", "3.9286rem");
              
                  //=====================//
                  var idMsg = localStorage.getItem("ID")
                  console.log(idMsg);
                  if (idMsg != null) {
                    for (var i=0; i<=idMsg; i++) {
                      var returnObj = JSON.parse(localStorage.getItem(i));
                      console.log(returnObj.message);
                      console.log(returnObj);
                      $('#msgs').append('<li class="chat__content-item"><div class="chat__content-item-msg">' + returnObj.message + '</div><div class="chat__content-item-name">' + returnObj.user + '</div></li>');
                      $('.chat__content-list').scrollTop(50000);
                    }
                   } 
                   console.log(idMsg);
                  
               }
            }
          });
//
//          socket.on('update', function(msg) {
//            if(ready) $('#msgs').append('<li>' + msg + '</li>');
//          })
//
//          socket.on('update-people', function(people){
//            if(ready) {
//              $('#people').empty();
//              $.each(people, function(clientid, name) {
//                $('#people').append('<li>' + name + '</li>');
//              });
//            }
//          });
//
//          socket.on('chat', function(who, msg){
//            if(ready) {
//              $('#msgs').append('<li>' + who + ' написал: ' + msg + '</li>');
//            }
//          });
//
//          socket.on('disconnect', function(){
//            $('#msgs').append('<li>Сервер не доступен</li>');
//            $('#msg').attr('disabled', 'disabled');
//            $('#send').attr('disabled', 'disabled');
//          });
//          
//
        
          $('#send').click(function(){
            var sc = document.getElementsByClassName('.chat__content-list');
            console.log(sc);
            var msg = $('#msg').val();
            //socket.emit('send', msg);
            var who = $('#name').val();
            if(ready) {
              $('#msgs').append('<li class="chat__content-item"><div class="chat__content-item-msg">' + msg + '</div><div class="chat__content-item-name">' + who + '</div></li>');
              $('.chat__content-list').scrollTop(50000);
              $('#msg').val('');
              $('#msg').focus();
            
              //====================================//
              var idMsg = localStorage.getItem("ID")
              console.log(idMsg);
              if (idMsg != null) {
                  ++idMsg;
                  localStorage.setItem("ID", idMsg);
              } else {
                  idMsg = 0;
                  localStorage.setItem("ID", idMsg);
              }
              console.log(idMsg);
                
              var now = new Date();  
              var currentMsg = {
                    time: now,
                    user: who,
                    message: msg
                  };
              console.log(currentMsg);
              var serialObj = JSON.stringify(currentMsg);
              localStorage.setItem(idMsg, serialObj);
              console.log(serialObj);
              var returnObj = JSON.parse(localStorage.getItem(idMsg));
              console.log(returnObj);
             
             }
          });
          $('#msg').keypress(function(e){
            if(e.which == 13) {
                var msg = $('#msg').val();
                //socket.emit('send', msg);
                var who = $('#name').val();
                if(ready) {
                  $('#msgs').append('<li class="chat__content-item"><div class="chat__content-item-msg">' + msg + '</div><div class="chat__content-item-name">' + who + '</div></li>');
                  $('.chat__content-list').scrollTop(50000);
                  $('#msg').val('');
                  $('#msg').focus();
                    
                  //====================================//
                  var idMsg = localStorage.getItem("ID")
                  console.log(idMsg);
                  if (idMsg != null) {
                      ++idMsg;
                      localStorage.setItem("ID", idMsg);
                  } else {
                      idMsg = 0;
                      localStorage.setItem("ID", idMsg);
                  }
                  console.log(idMsg);

                  var now = new Date();  
                  var currentMsg = {
                        time: now,
                        user: who,
                        message: msg
                      };
                  console.log(currentMsg);
                  var serialObj = JSON.stringify(currentMsg);
                  localStorage.setItem(idMsg, serialObj);
                  console.log(serialObj);
                  var returnObj = JSON.parse(localStorage.getItem(idMsg));
                  console.log(returnObj);
                } 
            }
          });

	}());
});
