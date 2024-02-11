// Select the radio button for "Take Picture"
var takePictureRadio = document.getElementById("takePicture");
// Select the radio button for "Upload from Gallery"
var uploadFromGalleryRadio = document.getElementById("uploadFromGallery");

// Add event listener to the radio buttons
takePictureRadio.addEventListener("click", function() {
    // Turn on webcam
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            var video = document.createElement('video');
            video.srcObject = stream;
            video.onloadedmetadata = function(e) {
                video.play();
            };
            document.body.appendChild(video);
        })
        .catch(function(err) {
            console.log('Error accessing webcam:', err);
        });
});

uploadFromGalleryRadio.addEventListener("click", function() {
    // Open file input dialog to select image from gallery
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', function(e) {
        var file = e.target.files[0];
        if (file) {
            // Use FileReader to read the file and display it
            var reader = new FileReader();
            reader.onload = function(event) {
                var image = document.createElement('img');
                image.src = event.target.result;
                document.body.appendChild(image);
            };
            reader.readAsDataURL(file);
        }
    });
    fileInput.click(); // Trigger the file input dialog
});

// code for arrow

// Select the elements
var arrowImg = document.getElementById("arrowImg");
var profileDetails = document.getElementById("profileDetails");

// Add click event listener to the arrow image
arrowImg.addEventListener("click", function() {
    // Toggle the visibility of the profile details
    if (profileDetails.style.display === "none" || profileDetails.style.display === "") {
        profileDetails.style.display = "block";
    } else {
        profileDetails.style.display = "none";
    }
});

// fetch map api
function getUserLocation() {
    // Check if geolocation is supported
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Get user's coordinates
            var userCoords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            // Do something with the user's coordinates
            console.log('User coordinates:', userCoords);
        }, function() {
            // Handle geolocation errors
            alert('Error: The Geolocation service failed.');
        });
    } else {
        // Browser doesn't support Geolocation
        alert('Error: Your browser doesn\'t support geolocation.');
    }
}

//for popup message

// Get the submit button
var submitButton = document.getElementById('submitButton');

// Add event listener to the submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show message that information is saved
    alert('Your information is saved!');

    // Redirect to skills.html
    window.location.href = './skills';
});



