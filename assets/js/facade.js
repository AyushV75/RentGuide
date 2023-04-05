// function addLandLord(){
//     // if(doValidate_frmLandlord()){
//
//         // console.info("Add landlord listings is valid");
//         var firstName = $("#txtFirstName").val();
//         var lastName = $("#txtLastName").val();
//         var eMail = $("#txtEmailId").val();
//         var buildName = $("#buildingName").val();
//         var unitNumber= $("#UnitNo").val();
//         var streetAdd = $("#streetAddress").val();
//         var city = $("#inputCity").val();
//         // var stateId = $("#cmbState").val();
//         var postalCode = $("#postalCode").val();
//         // var priceRent=$("#price").val();
//         // var squareFootage= $("#squareFootage").val();
//         // var bedRoom=$("#bedRooms").val();
//         // var bathRoom=$("#bathrooms").val();
//         // var parking=$("#parking").val();
//         // var petFriendly=$("#petFriendly").val();
//
//         var objLandlord = new Event(firstName, lastName, eMail, buildName, unitNumber, streetAdd, city,postalCode);
//         CustomLandlord.insert(objLandlord);
//     // }
//     //
//     // else{
//     //     console.info("Landlord form is invalid");
//     //     }
//
// }
function addLoginInfo(){
        // if(doValidate_frmLogin()){
                console.info("Login Successfully");
                var userName= $("#userName").val();
                var passWord=$("#userPassword").val();

                var objLogin= new LoginEvent(userName,passWord);
                User.insert(objLogin);
        // }
        // else {
        //         console.info("Login Failed ");
        //
        // }

}
function addContactInfo(){
        var fName= $("#FiName").val();
        var lName= $("#LaName").val();
        var eMailC= $("#cEmail").val();
        var contactNumber= $("#contactNo").val();
        var addRess= $("#addressContact").val();
        var objContact = new ContactEvent(fName,lName,eMailC,contactNumber,addRess);

        Contact.insert(objContact);
}
function addBookingInfo(){
        var fNameB=$("#fNameBook").val();
        var lNameB=$("#lNameBook").val();
        var eMailB=$("#eMailBook").val();
        var contactNumberB=$("#ContactNoBook").val();
        var addRessBook=$("#addressBook").val();

        var objBook= new BookEvent(fNameB,lNameB,eMailB,contactNumberB,addRessBook);

        Book.insert(objBook);
}