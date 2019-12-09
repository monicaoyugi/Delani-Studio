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
      var name = document.getElementById('mce-NAME').value;
      var email = document.getElementById('mce-EMAIL').value;
      var message = document.getElementById('mce-MESSAGE').value;
      if(name == ""){
        alert("Please enter your name");
        name.focus();
        return false;
      }
      if(email == ""){
        alert("Please enter your email");
        email.focus();
        return false;
      }
      if(message == ""){
        alert("Please enter the required message");
        message.focus();
        return false;
      }
     alert(name +", we have received your message. Thank you for contacting us.");
    
    });
    $("button").click((event) => {
      $('form').each(function(){
        this.reset();
      });
    });

    // function postToMailChimp(name, email, message) {
    
    //     $.ajax({
    //         url: "https://gmail.us4.list-manage.com/subscribe/post?u=a27ed764514f6345683756895&id=d2f822424a",
    //         type: "POST",
    //         contentType: 'application/json',
    //         data: JSON.stringify({name: name, email: email, message: message}),
    //         processData: false,
    //         success: function(data){
    //           console.log(data)

    //         },
    //         error: function(errorThrown){
    //           console.log(errorThrown)
    //         }
    //     })
    // }
  });