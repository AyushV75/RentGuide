$(document).ready(function (){
   initial();
   initialDB();
});
function initial(){

    $("#btnSubmits").on("click",btnSubmits_click);
}
function btnSubmits_click(){
    addLandLord();
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