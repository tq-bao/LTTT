

    var places1 = new google.maps.places.Autocomplete(document.getElementById('txtPlaces2'));
    google.maps.event.addListener(places1, 'place_changed', function () {
        var place = places1.getPlace();
        var address = place.formatted_address;
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
        var mesg = "Address: " + address;
        mesg += "\nLatitude: " + latitude;
        mesg += "\nLongitude: " + longitude;
        $(".Address").val(address)
        $(".lat").val(latitude);
        $(".lng").val(longitude)
    });
  var places1 = new google.maps.places.Autocomplete(document.getElementById('txtPlaces1'));
  google.maps.event.addListener(places1, 'place_changed', function () {
      var place = places1.getPlace();
      var address = place.formatted_address;
      var latitude = place.geometry.location.lat();
      var longitude = place.geometry.location.lng();
      var mesg = "Address: " + address;
      mesg += "\nLatitude: " + latitude;
      mesg += "\nLongitude: " + longitude;
      $(".Address1").val(address)
      $(".lat1").val(latitude);
      $(".lng1").val(longitude)
  });

$( function() {
    $("#datepicker").datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: function(date) {
        $(".datePicker").val(date)
      }
    });
 
  } );