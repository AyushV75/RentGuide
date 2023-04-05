var CustomLandlord={
    insert: function(objLandlord) {
        db.transaction(function(lax){
            var sql="INSERT INTO landlord(firstName, lastName, eMail, buildName, unitNumber, streetAdd, city,postalCode) VALUES(?,?,?,?,?,?,?,?);";
            var options = [objLandlord.firstName, objLandlord.lastName, objLandlord.eMail,objLandlord.buildName, objLandlord.unitNumber, objLandlord.streetAdd, objLandlord.city,objLandlord.postalCode];
            function successTransaction(){
                console.info("Success: Insert transaction successful");
            }

            lax.executeSql(sql, options, successTransaction, errorHandler);
        });
    },
};


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