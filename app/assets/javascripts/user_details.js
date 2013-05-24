//= require jquery_ujs
//= require jquery-ui
//= require jquery-ui-timepicker-addon

//= require 'jquery-1-7-1'
//= require 'jquery-ui-1-8-1'
//= require 'jquery-multiselect'
//= require 'jquery-multiselect-filter'

//This is multiselect plugin function calling and this works on jquery version 1.7.1
var jq171 = jQuery.noConflict();
jq171(document).ready(function(){
  jq171("#user_place").multiselect().multiselectfilter();
});

//This is time picker plugin function calling and this works on jquery version 1.9.1
$(document).ready(function() {
    $("#user_time").timepicker({});
});