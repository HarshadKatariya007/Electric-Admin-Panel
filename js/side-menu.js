$(document).ready(function()
{
   $(".red-skin").click(function()
   {
        $(".toggle-content").slideDown();
   });
   $(".close-icon").click(function()
   {
        $(".toggle-content").slideUp();
   });

     $(".dash").click(function () {
     $(".dash-menu").slideToggle();
     $(".menu-1").toggleClass("new-menu-1");
     
     });
     $(".kit").click(function()
     {
     $(".ui-kit-menu").slideToggle();
     });
     $(".page").click(function()
     {
     $(".page-menu").slideToggle();
     });
     $(".email").click(function()
     {
     $(".email-menu").slideToggle();
     });
     $(".form").click(function()
     {
     $(".form-menu").slideToggle();
     });
     $(".map").click(function()
     {
     $(".map-menu").slideToggle();
     });
     $(".extra").click(function()
     {
     $(".extra-menu").slideToggle();
     });

     $(".menu-opations").click(function()
     {
          $(".side-menu").toggleClass("new-side");
          $(".main-content").toggleClass("new-main");
     })
     $(".noti-1").click(function()
     {
          $(".noti-1").toggleClass("new-noti-1");
     })
})   