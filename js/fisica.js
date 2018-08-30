         function functionConfirm(msg, myYes, myNo, cancel) {
            var confirmBox = $("#confirm");
            confirmBox.find(".message").text(msg);
            confirmBox.find(".yes,.no,.cancel").unbind().click(function() {
               confirmBox.hide();
            });
            confirmBox.find(".yes").click(myYes);
            confirmBox.find(".no").click(myNo);
            confirmBox.find(".no").click(cancel);
            confirmBox.show();
         }

          function functionConfirm2(msg, myYes, myNo, cancel) {
            var confirmBox = $("#confirm2");
            confirmBox.find(".message2").text(msg);
            confirmBox.find(".yes,.no,.cancel").unbind().click(function() {
               confirmBox.hide();
            });
            confirmBox.find(".yes").click(myYes);
            confirmBox.find(".no").click(myNo);
            confirmBox.find(".no").click(cancel);
            confirmBox.show();
         }
         function functionConfirm3(msg, myYes, myNo, cancel) {
            var confirmBox = $("#confirm3");
            confirmBox.find(".message3").text(msg);
            confirmBox.find(".yes,.no,.cancel").unbind().click(function() {
               confirmBox.hide();
            });
            confirmBox.find(".yes").click(myYes);
            confirmBox.find(".no").click(myNo);
            confirmBox.find(".no").click(cancel);
            confirmBox.show();
         }

         var number1 = 0;
var number2 = 0;
var operator = "";
    function writeNumbers(number){
    if(operator == ""){
        number1 += number;
        txtScreen.value += number;
    }
    else{
        number2 += number;
        txtScreen.value += number;
    };

}
function clearEverything() {
    number1 = 0;
    number2 = 0;
    operator = "";
    txtScreen.value = "";
}

function gtof(){
var g =number1 * 9 / 5 + 32;
txtScreen.value = "";
txtScreen.value = g;
}

function ftog(){
var f =(number1 -32) *5 /9;
txtScreen.value = "";
txtScreen.value = f;
}

function gtok(){
    var k =number1/1 + 273;
txtScreen.value = "";
txtScreen.value = k;
}
function ktog(){
    var n =number1-273;
txtScreen.value = "";
txtScreen.value = n;
}
function ftok(){
    var n =(number1 -32) *5 /9;
    n =n/1 + 273
txtScreen.value = "";
txtScreen.value = n;
}
function ktof(){
    var n =number1 -273;
    n= n* 9 / 5 + 32
txtScreen.value = "";
txtScreen.value = n;
}