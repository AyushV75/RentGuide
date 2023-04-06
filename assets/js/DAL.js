var CustomLandlord={
    insert: function(objLandlord) {
        db.transaction(function(lax){
            var sql="INSERT INTO landlords(firstName, lastName, eMail, buildName, unitNumber, streetAdd, city,stateId,postalCode,priceRent,squareFootage,bedRoom,bathRoom,parking,petFriendly) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
            var options = [objLandlord.firstName, objLandlord.lastName,objLandlord. eMail,objLandlord. buildName,objLandlord. unitNumber,objLandlord. streetAdd,objLandlord. city,objLandlord.stateId,objLandlord.postalCode,objLandlord.priceRent,objLandlord.squareFootage,objLandlord.bedRoom,objLandlord.bathRoom,objLandlord.parking,objLandlord.petFriendly];
            function successTransaction(){
                console.info("Success: Insert Landlord successful");
            }

            lax.executeSql(sql, options, successTransaction, errorHandler);
        });
    },
};
var Tenant={
    insert:function (objTenant){
        db.transaction(function (tex){
           var sql5="INSERT INTO tenant(firstNameT,lastNameT,eMailT,phoneTenantC,phoneTenantW,moveDateT,rentalTypeID,bedroomT,bathroomT,termOfTenancyT,rentPriceRange,petFriendlyT,commentsT) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
           var option6=[objTenant.firstNameT,objTenant.lastNameT,objTenant.eMailT,objTenant.phoneTenantC,objTenant.phoneTenantW,objTenant.moveDateT,objTenant.rentalTypeID,objTenant.bedroomT,objTenant.bathroomT,objTenant.termOfTenancyT,objTenant.rentPriceRange,objTenant.petFriendlyT,objTenant.commentsT];

            function successTransaction6(){
                console.info("Success Tenant Successfully");
            }
            tex.executeSql(sql5,option6,successTransaction6,errorHandler);
        });
    }
}

var User={
    insert:function (objLogin){
        db.transaction(function (lx){
            var sql1="INSERT INTO login(userName,passWord) VALUES(?,?);";
            var option1=[objLogin.userName,objLogin.passWord];
            function successTransaction1(){
                console.info("Success insert login successfully");
            }
            lx.executeSql(sql1,option1,successTransaction1,errorHandler);

        });
    }
}
var Contact={
    insert:function (objContact){
        db.transaction(function (cx){
           var sql2="INSERT INTO contact(fName,lName,eMailC,contactNumber,addRess) VALUES(?,?,?,?,?);";
           var option3=[objContact.fName,objContact.lname,objContact.eMailC,objContact.contactNumber,objContact.addRess];
           function successTransaction3(){
               console.info("Success contact Successfully");
           }
           cx.executeSql(sql2,option3,successTransaction3,errorHandler);
        });

    }
}
var Book={
    insert:function (objBook){
        db.transaction(function (bx){
            var sql3="INSERT INTO book(fNameB,lNameB,eMailB,contactNumberB,addRessBook) VALUES(?,?,?,?,?);";
            var option4=[objBook.fNameB,objBook.lNameB,objBook.eMailB,objBook.contactNumberB,objBook.addRessBook];
            function successTransaction4(){
                console.info("Success book Successfully");
            }
            bx.executeSql(sql3,option4,successTransaction4,errorHandler);
        });

    }
}
var Register={
    insert:function (objRegister){
        db.transaction(function (rex){
              var sql4="INSERT INTO  register(fullName,userNameA,regiEmail,phoneNumber,addressR,cityR,stateID,postalCodeR)VALUES(?,?,?,?,?,?,?,?)";
              var option5=[objRegister.fullName,objRegister.userNameA,objRegister.regiEmail,objRegister.phoneNumber,objRegister.addressR,objRegister.cityR,objRegister.stateID,objRegister.postalCodeR];
              function successtransaction5(){
                  console.info("Success Register Successfully");
              }
              rex.executeSql(sql4,option5,successtransaction5,errorHandler);
        });

    }
}