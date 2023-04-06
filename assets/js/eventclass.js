var LandlordEvent = function(firstName, lastName, eMail, buildName, unitNumber, streetAdd, city,stateId,postalCode,priceRent,squareFootage,bedRoom,bathRoom,parking,petFriendly){
    this.firstName=firstName;
    this.lastName=lastName;
    this.eMail=eMail;
    this.buildName=buildName;
    this.unitNumber=unitNumber;
    this.streetAdd=streetAdd;
    this.city=city;
    this.stateId=stateId;
    this.postalCode=postalCode;
    this.priceRent=priceRent;
    this.squareFootage= squareFootage;
    this.bedRoom=bedRoom;
    this.bathRoom=bathRoom;
    this.parking=parking;
    this.petFriendly=petFriendly;
}
var LoginEvent = function (userName, passWord){
    this.userName= userName;
    this.passWord=passWord;

}
var ContactEvent=function (fName,lName,eMailC,contactNumber,addRess){

    this.fName=fName;
    this.lname=lName;
    this.eMailC=eMailC;
    this.contactNumber=contactNumber;
    this.addRess=addRess;
}
var BookEvent= function (fNameB,lNameB,eMailB,contactNumberB,addRessBook){
    this.fNameB=fNameB;
    this.lNameB=lNameB;
    this.eMailB=eMailB;
    this.contactNumberB=contactNumberB;
    this.addRessBook=addRessBook;
}
var RegisterEvent= function (fullName,userNameA,regiEmail,phoneNumber,addressR,cityR,stateID,postalCodeR){
    this.fullName=fullName;
    this.userNameA=userNameA;
    this.regiEmail=regiEmail;
    this. phoneNumber=phoneNumber;
    this.addressR=addressR;
    this.cityR=cityR;
    this.stateID=stateID;
    this.postalCodeR=postalCodeR;
}
var TenantEvent= function (firstNameT,lastNameT,eMailT,phoneTenantC,phoneTenantW,moveDateT,rentalTypeID,bedroomT,bathroomT,termOfTenancyT,rentPriceRange,petFriendlyT,commentsT){
    this.firstNameT=firstNameT;
    this.lastNameT=lastNameT;
    this.eMailT=eMailT;
    this.phoneTenantC=phoneTenantC;
    this.phoneTenantW=phoneTenantW;
    this.moveDateT=moveDateT;
    this.rentalTypeID=rentalTypeID;
    this.bedroomT=bedroomT;
    this.bathroomT=bathroomT;
    this.termOfTenancyT=termOfTenancyT;
    this.rentPriceRange=rentPriceRange;
    this.petFriendlyT=petFriendlyT;
    this.commentsT=commentsT;
}