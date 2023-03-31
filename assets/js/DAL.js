var CustomLandlord={
    insert: function(objLandlord) {
        db.transaction(function(tx){
            var sql="INSERT INTO landlord(firstName, lastName, eMail, buildName, unitNumber, streetAdd, city,postalCode,priceRent,squareFootage,bedRoom,bathRoom,parking,petFriendly) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
            var options = [objLandlord.firstName, objLandlord.lastName, objLandlord.eMail,objLandlord.buildName, objLandlord.unitNumber, objLandlord.streetAdd, objLandlord.city,objLandlord.postalCode,objLandlord.priceRent,objLandlord.squareFootage,objLandlord.bedRoom,objLandlord.bathRoom,objLandlord.parking,objLandlord.petFriendly];
            function successTransaction(){
                console.info("Success: Insert transaction successful");
            }
            tx.executeSql(sql, options, successTransaction, errorHandler);
        });
    },
};