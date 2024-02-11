const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
}); 

logicLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
}); 



document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("passwordConfirm").value;
    var passwordError = document.getElementById("passwordError");
    
    // Perform password validation
    if (password !== passwordConfirm) {
        passwordError.textContent = "Passwords do not match";
    } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
    } else {
        // Password validation passed, perform signup (dummy example)
        alert("Signup successful!");
        // Redirect to another page or perform further actions
    }
});

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

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If you need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });