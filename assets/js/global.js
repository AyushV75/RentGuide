$(document).ready(function (){
   initial();
   initialDB();
});
function initial(){

    // $("#btnSubmits").on("click",btnSubmits_click);
    $("#btnLogIn").on("click",btnLogIn_click);
    $("#btnSend").on("click",btnSend_click);
    $("#btnBookNow").on("click",btnBookNow_click);
}
// function btnSubmits_click(){
//     addLandLord();
// }
function btnLogIn_click(){
    addLoginInfo();
}
function btnSend_click(){
    addContactInfo();
}
function btnBookNow_click(){
    addBookingInfo();
}
function initialDB(){
    try{
        DB.createDatabase();
        if(db){
            console.info("Creating Tables...");
            DB.createTables();
        }
        else {
            console.error("Error: Cannot create Tables: database does not exists");
        }
    }
    catch (e) {
        console.error("Error (Fatal): Error in RentGuideDatabase. Can not proceed ");
    }

}