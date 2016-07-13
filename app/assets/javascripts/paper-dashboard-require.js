// require paper-dashboard/bootstrap.min
// require paper-dashboard/paper-dashboard
// require paper-dashboard/bootstrap-checkbox-radio
// require paper-dashboard/bootstrap-notify
// require paper-dashboard/chartist.min
// require paper-dashboard/demo
// require paper-dashboard/jquery-1.10.2


// require paper-dashboard/jquery-ui.min
// require paper-dashboard/jquery.validate.min
// require paper-dashboard/moment.min
// require paper-dashboard/bootstrap-datetimepicker
// require paper-dashboard/bootstrap-selectpicker
// require paper-dashboard/sweetalert2
// require paper-dashboard/jquery-jvectormap
// require paper-dashboard/jquery.bootstrap.wizard.min
// require paper-dashboard/bootstrap-table
// require paper-dashboard/fullcalendar.min
// require paper-dashboard/light-bootstrap-dashboard
//
// Dynamic load the javascript init based on features specified from view
// Combine the best practice to handle javascript invocation in rails
// http://brandonhilkert.com/blog/organizing-javascript-in-rails-application-with-turbolinks/
// https://viget.com/extend/javascript-execution-patterns-for-non-web-apps
//
// You have two methods to load your custom javascript init
//
// Method one:
// -----------------------------------------------------------------------------
// Uncomment the following lines to load your custom init in here
//
// $(document).on("page:change", function() {
//   if ($.inArray('feature1',App.features()) >= 0) {

//   demo.initChartist();

//             $.notify({
//                 icon: 'ti-gift',
//                 message: "Welcome to <b>Paper Dashboard</b> - a beautiful Bootstrap freebie for your next project."

//             },{
//                 type: 'success',
//                 timer: 4000
//             });	

//   }
// });
//
// Method two:
// -----------------------------------------------------------------------------
// Put the above script from method one in separate js file, then require it
// from application.js or light_bootstrap_dashboard_pro.js. Let say if you have
// 3 feature init scripts with file name app.feature1.js, app.feature2.js and
// app.feature3.js. You can place the `=` sign in front of the require statement
// to init that particular feature.
//
// require app.feature1
// require app.feature2
// require app.feature3
//
// After you done, please remember to add the content_for to specify the feature
// you want to add in your view. For example, if i want to add the feature1 and
// feature2, it will be <% content_for :features, "feature1 feature2" %>
// $(document).on("turbolinks:load", function() {

//   $('html').removeClass('nav-open');

//   $('.close-layer').remove();

//   setTimeout(function(){

//       $('.navbar-toggle').removeClass('toggled');

//   }, 400);

//   mobile_menu_visible = 0;

// }

// });