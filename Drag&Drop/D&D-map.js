function allowDrop(ev) {
            ev.preventDefault();
        }
        function drag(ev) {
		  ev.dataTransfer.setData("var", ev.target.id);
        }
        function drop(ev, element2) {
            var element1 = ev.dataTransfer.getData("var");
			var val1 = document.getElementById(element2).getAttribute("src");
            var val2 = document.getElementById(element1).getAttribute("src");
			document.getElementById(element2).setAttribute("src", val2);
			document.getElementById(element1).setAttribute("src", val1);
            ev.preventDefault();
        }
	

function showPosition() {
    lat = 32.3538;
    lon = 50.8248122;
    latlon = new google.maps.LatLng(lat, lon)
    mapholder = document.getElementById('mapholder')
    mapholder.style.height = '250px';
    mapholder.style.width = '100%';
    var myOptions = {
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

