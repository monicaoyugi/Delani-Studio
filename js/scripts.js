$(document).ready(function(){
    //toggle at design,development and product mgmt
    $(".design").click(function(){
      $(".show").toggle();
      $(".click").toggle();
    });
    $(".development").click(function(){
      $(".show1").toggle();
      $(".click1").toggle();
    });
    $(".product").click(function(){
      $(".show2").toggle();
      $(".click2").toggle();
    });
  
    //display white box on hover
    $(".project").hover(function(){
      $(this).animate({opacity:'1'});
    },
    function(){
      $(this).animate({opacity:'0'});
    });
  
    $(".button").click(function(event){
      event.preventDefault();
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      if(name == ""){
        alert("Please fill the name field");
        name.focus();
        return false;
      }
      if(email == ""){
        alert("Please fill the email field");
        email.focus();
        return false;
      }
      if(message == ""){
        alert("Please fill the message field");
        message.focus();
        return false;
      }
      alert(name +", we have received your message. Thank you for contacting us.");
    });
    $("button").click(function(event){
      $('form').each(function(){
        this.reset();
      });
    });
  });