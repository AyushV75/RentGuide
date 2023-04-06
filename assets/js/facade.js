function addLandLord(){
//     // if(doValidate_frmLandlord()){
//
        console.info("Add landlord listings is valid");
        var firstName = $("#txtFirstName").val();
        var lastName = $("#txtLastName").val();
        var eMail = $("#txtEmailId").val();
        var buildName = $("#buildingName").val();
        var unitNumber= $("#UnitNo").val();
        var streetAdd = $("#streetAddress").val();
        var city = $("#inputCity").val();
        var stateId = $("#cmbState").val();
        var postalCode = $("#postalCode").val();
        var priceRent=$("#price").val();
        var squareFootage= $("#squareFootage").val();
        var bedRoom=$("#bedRooms").val();
        var bathRoom=$("#bathrooms").val();
        var parking=$("#parking").val();
        var petFriendly=$("#petFriendly").val();

        var objLandlord = new LandlordEvent(firstName, lastName, eMail, buildName, unitNumber, streetAdd, city,stateId,postalCode,priceRent,squareFootage,bedRoom,bathRoom,parking,petFriendly);
        CustomLandlord.insert(objLandlord);
//     // }
//     //
//     // else{
//     //     console.info("Landlord form is invalid");
//     //     }
//
}
function addTenant(){
    console.info("Tenant listing added");
    var firstNameT = $("#txtFirstNameT").val();
    var lastNameT = $("#txtLastNameT").val();
    var eMailT = $("#txtEmailIdT").val();
     var phoneTenantC = $("#txtPhoneTenantC").val();
    var phoneTenantW = $("#txtPhoneTenantW").val();
    var moveDateT = $("#moveInDate").val();
     var rentalTypeID = $("#cmbRentalType").val();
    var bedroomT = $("#bedRoomsT").val();
    var bathroomT = $("#bathroomsT").val();
     var termOfTenancyT = $("#termOfTenancy").val();
    var rentPriceRange = $("#rentPriceRange").val();
    var petFriendlyT = $("#petFriendlyT").val();
    var commentsT = $("#comments").val();

    var objTenant = new TenantEvent(firstNameT,lastNameT,eMailT,phoneTenantC,phoneTenantW,moveDateT,rentalTypeID,bedroomT,bathroomT,termOfTenancyT,rentPriceRange,petFriendlyT,commentsT);

    Tenant.insert(objTenant);
}
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
function accountRegister(){
    // if(doValidate_frmRegister()){
    //     console.info("Register successfully");
    // }
    // else {
    //     console.info("Register Failed");
    //
    // }
    var fullName= $("#txtFullName").val();
    var userNameA= $("#txtUserName").val();
    var regiEmail= $("#txtUserEmail").val();
    var phoneNumber= $("#txtPhoneNumber").val();
    var addressR= $("#txtAddress1").val();
    var cityR= $("#txtCity").val();
    var stateID= $("#cmbState").val();
    var postalCodeR= $("#txtPostalCode").val();

    var objRegister= new RegisterEvent(fullName,userNameA,regiEmail,phoneNumber,addressR,cityR,stateID,postalCodeR);

    Register.insert(objRegister);

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