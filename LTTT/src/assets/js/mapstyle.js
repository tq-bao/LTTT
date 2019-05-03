
  var places1 = new google.maps.places.Autocomplete(document.getElementById('txtsender'));
  google.maps.event.addListener(places1, 'place_changed', function () {
      $("#txtsender").click(); 
   
  });

  var places1 = new google.maps.places.Autocomplete(document.getElementById('txtrecevie'));
  google.maps.event.addListener(places1, 'place_changed', function () {
      var place = places1.getPlace();
      var address = place.formatted_address;
      var latitude = place.geometry.location.lat();
      var longitude = place.geometry.location.lng();
      $("#txtrecevie").click(); 
  });