var directionsDisplay = new google.maps.DirectionsRenderer;
var map;
var iconDeliveryAddressGreen = "/assets/images/flag.png";
var iconDeliveryAddressRed = "/assets/images/flag-red.png";
var iconDeliveryMan = "/assets/images/location.gif";
var iconError = "/assets/images/warning.png";
var pointer = "/assets/images/pointer.png";
var list = "/assets/images/clipboard.png";
var arrayMarker = []; //Danh sách các điểm được tick trên map
var arrayAddress = []; //Danh sách địa chỉ vận đơn đang giữ
var arrayDistance = []; //Danh sách khoảng cách từ điểm hiện tại tới điểm giao hàng
var currentLat = "", currentLng = "";
var totalSuccess = 0, totalUnsuccess = 0;
var bkId = localStorage.getItem("bkId");
var fromHolding = false;
var xml = "";
var initMap = function () {
    var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    $('.maps').css("height", height - 50);
    //var latLng = Android.GetLatLng(); //return 'lat,lng'
    if (latLng.length < 3)
        latLng = "10.8087584,106.6646417"; //return 'lat,lng'
    // var latLng = "10.8087584,106.6646417"; //return 'lat,lng'
    latLng = latLng.split(",");
    var lat = latLng[0];
    var lng = latLng[1];
    //Khởi tạo map
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(lat), lng: parseFloat(lng) },
        scrollwheel: false,
        zoom: 14
    });
    directionsDisplay.setMap(map);

    //Sự kiện click lên bản đồ
    // google.maps.event.addListener(map, 'click', function (event) {
    //     // CheckPointOnMap(event.latLng, "click", iconDeliveryAddress); //Đánh dấu lên bản đồ
    //     GetDirectionOnMap(event.latLng); //Tìm đường đi từ điểm hiện tại tới điểm được tick
    // });
}

initMap();
getLatLngFromAndroid();
MB_spLadingDeliveryMen_HoldingByDate();
//Lấy tọa độ hiện tại từ android
var getLocation = setInterval(getLatLngFromAndroid, 2000); //Lấy lại vị trí hiện tại sau 2 giây

var updateLatLnt = setInterval(() => {
    MB_tblLading_UpdateLatLng(xml);
    clearInterval(updateLatLnt);
}, 5000);

function getLatLngFromAndroid() {
    //var latLng = Android.GetLatLng(); //return 'lat,lng'
    if (latLng.length < 3)
        latLng = "10.8087584,106.6646417"; //return 'lat,lng'
    // var latLng = "10.8087584,106.6646417"; //return 'lat,lng'
    latLng = latLng.split(",");
    var lat = latLng[0];
    var lng = latLng[1];
    if (currentLat != lat || currentLng != lng) { //Nếu có thay đổi vị trí thì tick lại điểm vị trí hiện tại
        currentLat = lat;
        currentLng = lng;
        //Xóa vị trí hiện tại trên map
        for (let i = 0; i < arrayMarker.length; i++) {
            if (arrayMarker[i].key == "currentLocation") {
                arrayMarker[i].marker.setMap(null);
                arrayMarker.splice(i, 1);
            }
        }
        //Set lại vị trí hiện tại lên map
        var myLatLng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        // map.setCenter(myLatLng);
        CheckPointOnMap(myLatLng, "currentLocation", iconDeliveryMan, -1);
    }
    if (!window.location.href.includes("ban-do-phat-hang")) {
        clearInterval(getLocation);
    }
}

//Lấy danh sách vận đơn đang giữ theo userid, tick địa chỉ lên bản đồ
function MB_spLadingDeliveryMen_HoldingByDate() {
    var today = new Date();
    var dd = today.getDate();
    var MM = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (MM < 10) {
        MM = '0' + MM;
    }
    var currentDate = yyyy + '-' + MM + '-' + dd;
    // var currentDate = "2019-02-26";
    var OfficerId = localStorage.getItem("OfficerId");
    // var url = "http://localhost:3000/api/MB_Ladings/MB_spLadingDeliveryMen_HoldingByDate";
    var url = "http://api.mb.vps.vn/api/MB_Ladings/MB_spLadingDeliveryMen_HoldingByDate";
    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify(
            {
                "OfficerId": OfficerId,
                "Fromdate": currentDate + ' 0:0:0',
                "Todate": currentDate + ' 23:59:59'
            }
        ),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var table = $('.tableAddress').find("tbody");
            table.html("");
            data.res.forEach(item => {
                var icon = "";
                if (item.Status == 5) {
                    totalUnsuccess++;
                    icon = iconDeliveryAddressRed;
                } else {
                    totalSuccess++;
                    icon = iconDeliveryAddressGreen;
                }
                if (item.Lat == null || item.Lng == null) {
                    fromHolding = false;
                    if (item.Id === bkId) fromHolding = true;
                    ConvertLatLngFromAddress(item.RecipientAddress, icon, fromHolding, item.Id);
                } else {
                    var location = { lat: item.Lat, lng: item.Lng }
                    CheckPointOnMap(location, 'delivery', icon, item.Id);
                    if (item.Id === bkId) {
                        GetDirectionOnMap(location);
                    }
                }
                arrayAddress.push(item.RecipientAddress);
            });

            $('.totalSuccess').find("td:eq(1)").html(totalSuccess);
            $('.totalUnsuccess').find("td:eq(1)").html(totalUnsuccess);
            //Lấy khoảng cách từ điểm hiện tại tới các điểm giao hàng
            GetDistanceBetweenTwoPoint();
        }
    });
}

//Lấy Lat-Lng từ địa chỉ
function ConvertLatLngFromAddress(address, icon, fromHolding, ladingId) {
    var geocoder = new google.maps.Geocoder();
    // var address = "Tân Bình-4-Hải âu - 39B trường sơn"; //test
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            // Đánh dấu lên bản đồ
            var location = results[0].geometry.location;
            CheckPointOnMap(location, "delivery", icon, ladingId);
            if (fromHolding) {
                GetDirectionOnMap(location);
            }
        }
    });
}

//Cập nhật lat lng vào db
function MB_tblLading_UpdateLatLng(xml) {
    xml = "<Root>" + xml + "</Root>";
    var url = "http://api.mb.vps.vn/api/MB_Ladings/MB_tblLading_UpdateLatLng";
    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify({ "Xml": xml }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
        }
    });
}

//Đánh dấu lên bản đồ
function CheckPointOnMap(location, key, icon, ladingId) {
    var marker = new google.maps.Marker({
        position: location,
        optimized: false,
        map: map,
        title: "Tracking user",
        icon: icon
    });
    var lat = marker.getPosition().lat();
    var lng = marker.getPosition().lng();
    if (key != "currentLocation") {
        xml += "<Item><LadingId>" + ladingId + "</LadingId><Lat>" + lat + "</Lat><Lng>" + lng + "</Lng></Item>";
    }

    //Click lên điểm giao hàng
    marker.addListener('click', function (event) {
        GetDirectionOnMap(event.latLng);
    });
    var itemMarker = { key: key, marker: marker };
    arrayMarker.push(itemMarker); //Lưu lại danh sách các điểm được tick trên map
}

//Tìm đường đi
function GetDirectionOnMap(location) {
    var directionsService = new google.maps.DirectionsService();
    directionsService.route({
        // origin: điểm bắt đầu
        origin: {
            lat: parseFloat(currentLat),
            lng: parseFloat(currentLng)
        },

        // destination: điểm kết thúc
        destination: location,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        }
    });
}

//Tính khoảng cách giữa 2 điểm
function GetDistanceBetweenTwoPoint() {
    var origin = new google.maps.LatLng(parseFloat(currentLat), parseFloat(currentLng));
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [origin],
            destinations: arrayAddress,
            travelMode: 'DRIVING'
        }, callback);
}

function callback(response, status) {
    arrayDistance = [];
    if (status == "OK") {
        var arrAddress = response.destinationAddresses;
        var arrDistance = response.rows[0].elements;
        $('.tableAddress').find("tbody").html("");
        var index = 0;
        for (let i = 0; i < response.destinationAddresses.length; i++) {
            var address = arrAddress[i];
            if (arrDistance[i].status == "OK") {
                var distance = arrDistance[i].distance.text;
                var time = arrDistance[i].duration.text;
                var html = "<tr onclick=\"GetDirectionOnMap(\'" + address + "\')\"><td>" + parseInt(++index) + "</td>";
                html += "<td>" + address + "</td>";
                html += "<td>" + distance + "</td>";
                html += "<td>" + time + "</td><tr>";
                $('.tableAddress').find("tbody").append(html);

                arrayDistance.push({ address: address, distance: distance, time: time });
            } else {
                var html = "";
                var html = "<tr style='color:red;'><td><img src='" + iconError + "'/></td>";
                html += "<td>" + address + "</td>";
                html += "<td style='text-align: center;'>...</td>";
                html += "<td style='text-align: center;'>...</td><tr>";
                $('.tableAddress').find("tbody").after(html);
            }
        }
    }

    MB_tblLading_UpdateLatLng(xml)
}