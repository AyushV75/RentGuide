function addLandLord(){
    if(doValidate_frmLandlord()){

        console.info("Add landlord listings is valid");
        var firstName = $("#txtFirstName").val();
        var lastName = $("#txtLastName").val();
        var eMail = $("#txtEmailId").val();
        var buildName = $("#buildingName").val();
        var unitNumber= $("#UnitNo").val();
        var streetAdd = $("#streetAddress").val();
        var city = $("#inputCity").val();
        // var stateId = $("#cmbState").val();
        var postalCode = $("#postalCode").val();
        var priceRent=$("#price").val();
        var squareFootage= $("#squareFootage").val();
        var bedRoom=$("#bedRooms").val();
        var bathRoom=$("#bathrooms").val();
        var parking=$("#parking").val();
        var petFriendly=$("#petFriendly").val();

        var objLandlord = new Event(firstName, lastName, eMail, buildName, unitNumber
            , streetAdd, city,postalCode,priceRent,squareFootage,bedRoom,bathRoom,parking,petFriendly);
        CustomLandlord.insert(objLandlord);
    }

    else{
        console.info("Landlord form is invalid");
        }

}