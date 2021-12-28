//load FB SDK
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'Messenger'));

window.extAsyncInit = function() {
    // the Messenger Extensions JS SDK is done loading

    MessengerExtensions.getContext(facebookAppId,
        function success(thread_context){
            // success
            //set psid to input
            $("#psid").val(thread_context.psid);
            handleClickButtonFindOrder();
        },
        function error(err){
            // error
            console.log(err);
        }
    );
};

//validate inputs
function validateInputFields() {
   const EMAIL_REG = /[a-zA-Z][a-zA-Z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/g;  
   let customerName = $("#customerName");
    let orderNumber = $("#orderNumber");
    let phoneNum1 = $("#phoneNum1");

if (customerName.val().length>=2) {
    //        email.addClass("is-invalid");
        customerName.removeClass("is-invalid");
        } else {
        customerName.addClass("is-invalid"); 
        return true;
        }
   
if ((phoneNum1.val().startsWith("092") || phoneNum1.val().startsWith("091") || phoneNum1.val().startsWith("094")) && phoneNum1.val().length===10){
     phoneNum1.removeClass("is-invalid");
  // return console.log("if no");
} else{
    phoneNum1.addClass("is-invalid");
 //return  console.log("if yes");
 return true;
    };

    if (orderNumber.val() === "") {
        orderNumber.addClass("is-invalid");
        return true;
    } else {
        orderNumber.removeClass("is-invalid");
    }

    return false;
};

function handleClickButtonFindOrder(){
    $("#btnFindOrder").on("click", function(e) {
        let check = validateInputFields();
        let data = {
            psid: $("#psid").val(),
            customerName: $("#customerName").val(),
            phoneNum1: $("#phoneNum1").val(),
            orderNumber: $("#orderNumber").val()
        };

        if(!check) {
            //close webview
            MessengerExtensions.requestCloseBrowser(function success() {
                // webview closed
            }, function error(err) {
                // an error occurred
                console.log(err);
            });

            //send data to node.js server
            $.ajax({
                url: `${window.location.origin}/set-info-order`,
                method: "POST",
                data: data,
                success: function(data) {
                    console.log(data);
                },
                error: function(error) {
                    console.log(error);
                }
            })
        }
    });
}


