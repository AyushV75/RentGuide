// function doValidate_frmLogin(){
//     let form = $("#frm_Login");
//     form.validate({
//         rules:{
//             userName:{
//                 required:true,
//                 minlength:2,
//                 maxlength:20
//             },
//             userPassword:{
//                 required: true,
//                 passWordCheck: true
//             }
//
//         },
//         messages:{
//             userName: {
//                 required:"Please enter user name"
//             },
//             userPassword: {
//                 required:"Please enter password",
//                 passWordCheck: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
//             }
//
//
//
//         }
//     });
//     return form.valid();
// }
// jQuery.validator.addMethod("passWordCheck",
//     function (value, element){
//         let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/;
//         return passRegex.test(value);
//     });
// // jQuery.validator.addMethod("emailcheck",
// //     function (value, element){
// //         var  EmailRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// //         return EmailRegex.test(value) ;
// //     });
// //
// // jQuery.validator.addMethod("postcheck",
// //     function (value,elements){
// //         var postRegex= /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/;
// //         return postRegex.test(value);
// //     });