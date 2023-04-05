var db;
function errorHandler(error){
    console.error("SQL error: "+ error.message);
}
var DB= {
    createDatabase:function (){
        var shortName="RentGuideDatabase";
        var version = " 1.0";
        var displayName="DB for RentGuide Website";
        var dbSize= 2 * 1024*1024;

        function dbCreateSuccessOne(){
            console.info("RentGuide database created successfully");
        }

        db=openDatabase(shortName,version,displayName,dbSize,dbCreateSuccessOne);

    },
    createTables: function (){
        db.transaction(function (rx){
            // var createLandlordTable="CREATE TABLE IF NOT EXISTS landlords("+
            //     "id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
            //     "firstName VARCHAR(20) NOT NULL,"+
            //     "lastName VARCHAR(20),"+
            //     "eMail VARCHAR(30),"+
            //     "buildName VARCHAR(50) NOT NULL,"+
            //     "unitNumber INTEGER,"+
            //     "streetAdd VARCHAR(100) NOT NULL,"+
            //     "city VARCHAR(20) NOT NULL,"+
            //     "postalCode VARCHAR(10));";
            //     //"stateId INTEGER NOT NULL,"+
            //     // "priceRent INTEGER,"+
            //     // "squareFootage INTEGER,"+
            //     // "bedRoom INTEGER,"+
            //     // "bathRoom INTEGER,"+
            //     // "parKing VARCHAR(10),"+
            //     // "petFriendly VARCHAR(10));";
            var loginFormTable=" CREATE TABLE IF NOT EXISTS login("+
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
                    "userName VARCHAR(50) NOT NULL,"+
                    "passWord VARCHAR(20));";
            var contactInfoTable="CREATE TABLE IF NOT EXISTS contact("+
                    "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
                    "fName VARCHAR(20),"+
                    " lName VARCHAR(20),"+
                    "eMailC VARCHAR(50),"+
                    "contactNumber INTEGER,"+
                    "addRess VARCHAR(50));";
            var bookingInfoTable="CREATE TABLE IF NOT EXISTS book("+
                    "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
                    "fNameB VARCHAR(20),"+
                    " lNameB VARCHAR(20),"+
                    "eMailB VARCHAR(50),"+
                    "contactNumberB INTEGER,"+
                    "addRessBook VARCHAR(50));";
           var options=[];

            // function successCallBackOne(){
            //     console.info("LandLord table  created successfully");
            // }
            function successCallbackTwo(){
                console.info("Login table created successfully");
            }
            function successCallbackThird(){
                console.info("Contact table created successfully");
            }
            function successCallbackFourth(){
                console.info("Booking table created successfully");
            }

            // rx.executeSql(createLandlordTable,options,successCallBackOne,errorHandler);
            rx.executeSql(loginFormTable,options,successCallbackTwo,errorHandler);
            rx.executeSql(contactInfoTable,options,successCallbackThird,errorHandler);
            rx.executeSql(bookingInfoTable,options,successCallbackFourth,errorHandler);
        });
    }

}