$(document).ready(function(){
var value;
$("#btn").click(function(){
   value=$(".value").val();
  console.log(value);
$(".container").html("")

$.ajax({
  type:"GET",
  dataType:"jsonp",
  cache:false,
  url:"https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query="+ value,
  success:function(response){

var place= response.response.venues;
    place.forEach(function(venue){
  //  $.each(place, function(venue){

  //  $.each(place, function(venue){
      console.log(venue);

      if(venue.contact.phone===undefined){
        venue.contact.phone = 'Phone not available';
      }

       if(venue.location.address===undefined){
         venue.location.address='Adress not available';

     }



      var location =venue.location
      var html ='<div class="float-right img-thumbnail">';
      html+= '<a '+'target="_blank"'+'href='+venue.url +'>'+'<strong>'+venue.name+'</strong>'+'</a>'
      html+='<br />'
      html+='<img src="'
      html+= 'https://maps.googleapis.com/maps/api/staticmap'
      html+='?zoom=15'
      html+='&size=300x225'
      html+='&maptype=roadmap'
      html+='&center='+location.lat +','+location.lng
      html+='&markers=' + encodeURIComponent('||')+ location.lat +','+ location.lng
      html+='">'
      html+='<br />'
      html+=venue.contact.phone
      html+='<br />'
      html+=venue.hereNow.summary
      html+='<br />'
      html+=venue.location.address+', '+venue.location.city
      html+='</div>'

if(venue.url===undefined){
  var html ='<div class="float-right img-thumbnail">';
  html+= '<strong>'+venue.name+'</strong>'
  html+='<br />'
  html+='<img src="'
  html+= 'https://maps.googleapis.com/maps/api/staticmap'
  html+='?zoom=15'
  html+='&size=300x225'
  html+='&maptype=roadmap'
  html+='&center='+location.lat +','+location.lng
  html+='&markers=' + encodeURIComponent('||')+ location.lat +','+ location.lng
  html+='">'
  html+='<br />'
  html+=venue.contact.phone
  html+='<br />'
  html+=venue.hereNow.summary
  html+='<br />'
  html+=venue.location.address+', '+venue.location.city
  html+='</div>'
}
  //document.getElementsByClassName("container")[0].innerHTML +=html;

//$(".container").prepend(html).hide();
$(".container").prepend(html);


});



  }//success


})//ajax

});//button

$(".value").keypress(function(e){
    if(e.which===13){
      $("#btn").click();
    }
});//keypress

});//docuement
