var locations = [
    [
        "Clerihue Building",
        48.464302, -123.310564
    ],
    [
    		"Bibliocafe",
       48.463594, -123.309939
    ],
    [
    		"CARSA",
        48.468034, -123.311103
    ]
]

    var map = new google.maps.Map(document.getElementById('map'), 
    {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    
      var counter =0;
      for (var i = 0; i < locations.length; i++) {  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          counter++;
        infowindow.setContent(locations[i][0] + " " + locations[i][1] + "," + locations[i][2] + "  Count:" + counter);
          console.log("logged the click event" + counter);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }