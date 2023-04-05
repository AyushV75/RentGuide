var Event = function(firstName, lastName, eMail, buildName, unitNumber, streetAdd, city,postalCode){
    this.firstName=firstName;
    this.lastName=lastName;
    this.eMail=eMail;
    this.buildName=buildName;
    this.unitNumber=unitNumber;
    this.streetAdd=streetAdd;
    this.city=city;
    // this.stateId=stateId;
    this.postalCode=postalCode;
    // this.priceRent=priceRent;
    // this.squareFootage= squareFootage;
    // this.bedRoom=bedRoom;
    // this.bathRoom=bathRoom;
    // this.parking=parking;
    // this.petFriendly=petFriendly;
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