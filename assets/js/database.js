var db;
function errorHandler(error){
    console.error("SQL error: "+ error.message);
}
var DB= {
    createDatabase:function (){
        var shortName="RentGuideDatabase1";
        var version = " 1.0";
        var displayName="DB for RentGuide Website";
        var dbSize= 2 * 1024*1024;

        function dbCreateSuccessOne(){
            console.info("RentGuide database created successfully");
        }

        db=openDatabase(shortName,version,displayName,dbSize,dbCreateSuccessOne);

    },
    createTables: function () {
        db.transaction(function (rx) {
            var createLandlordTable = "CREATE TABLE IF NOT EXISTS landlords(" +
                "id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "firstName VARCHAR(20) NOT NULL," +
                "lastName VARCHAR(20)," +
                "eMail VARCHAR(30)," +
                "buildName VARCHAR(50) NOT NULL," +
                "unitNumber INTEGER," +
                "streetAdd VARCHAR(100) NOT NULL," +
                "city VARCHAR(20) NOT NULL," +
                "postalCode VARCHAR(10)," +
                "stateId INTEGER NOT NULL," +
                "priceRent INTEGER," +
                "squareFootage INTEGER," +
                "bedRoom INTEGER," +
                "bathRoom INTEGER," +
                "parKing VARCHAR(10)," +
                "petFriendly VARCHAR(10));";

            var tenantTable="CREATE TABLE IF  NOT EXISTS tenant("+
                "id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "firstNameT VARCHAR(20) NOT NULL," +
                "lastNameT VARCHAR(20)," +
                "eMailT VARCHAR(30)," +
                "phoneTenantC INTEGER,"+
                "phoneTenantW INTEGER,"+
                "moveDateT DATE,"+
                "rentalTypeID INTEGER,"+
                "bedroomT INTEGER,"+
                "bathroomT INTEGER,"+
                "termOfTenancyT INTEGER,"+
                "rentPriceRange INTEGER,"+
                "petFriendlyT VARCHAR(10),"+
                "commentsT VARCHAR(100));";

            var loginFormTable = " CREATE TABLE IF NOT EXISTS login(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "userName VARCHAR(50) NOT NULL," +
                "passWord VARCHAR(20));";

            var contactInfoTable = "CREATE TABLE IF NOT EXISTS contact(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "fName VARCHAR(20)," +
                " lName VARCHAR(20)," +
                "eMailC VARCHAR(50)," +
                "contactNumber INTEGER," +
                "addRess VARCHAR(50));";

            var bookingInfoTable = "CREATE TABLE IF NOT EXISTS book(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "fNameB VARCHAR(20)," +
                " lNameB VARCHAR(20)," +
                "eMailB VARCHAR(50)," +
                "contactNumberB INTEGER," +
                "addRessBook VARCHAR(50));";

            var registerAccountTable = "CREATE TABLE IF NOT EXISTS register(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "fullName VARCHAR(20)," +
                "userNameA VARCHAR(20)," +
                "regiEmail VARCHAR(50)," +
                "phoneNumber INTEGER," +
                "addressR VARCHAR(100)," +
                "cityR VARCHAR(20)," +
                "stateID INTEGER NOT NULL," +
                "postalCodeR VARCHAR(10));";

            var options = [];

            function successCallBackOne() {
                console.info("LandLord table  created successfully");
            }

            function successCallbackTwo() {
                console.info("Login table created successfully");
            }

            function successCallbackThird() {
                console.info("Contact table created successfully");
            }

            function successCallbackFourth() {
                console.info("Booking table created successfully");
            }

            function successCallbackFifth() {
                console.info("Registration table created successfully");
            }
            function successCallbackSixth() {
                console.info("Tenant table created successfully");
            }


            rx.executeSql(createLandlordTable, options, successCallBackOne, errorHandler);
            rx.executeSql(loginFormTable, options, successCallbackTwo, errorHandler);
            rx.executeSql(contactInfoTable, options, successCallbackThird, errorHandler);
            rx.executeSql(bookingInfoTable, options, successCallbackFourth, errorHandler);
            rx.executeSql(registerAccountTable, options, successCallbackFifth, errorHandler);
            rx.executeSql(tenantTable, options, successCallbackSixth, errorHandler);
        });
    }
    // },
    // dropTables:function (){
    //     function successCallBack1(){
    //         console.info("Drop table Successful");
    //
    //     }
    //     db.transaction(function (dlx){
    //         var options=[];
    //         var dropLandLordTable="DROP TABLE IF EXISTS landlords;";
    //         dlx.executeSql(dropLandLordTable,options,successCallBack1,errorHandler);
    //     });
    // }


};