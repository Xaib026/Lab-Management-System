/*      Custom Script       */ 

$(document).ready(function(){

    // Banner Section Owl Carousel Slider
    $("#banner-section .owl-carousel").owlCarousel({
        dots:false,
        items:1,
        loop:true,
        autoplay:true
    });

     // Lab Section Owl Carousel Slider
    $("#lab-section .owl-carousel").owlCarousel({
        dots:false,
        loop:true,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

     // Course Section Owl Carousel Slider
    $("#course-section .owl-carousel").owlCarousel({
        dots:false,
        loop:true,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

     // Instructor Owl Carousel Slider
    $("#instructor-section .owl-carousel").owlCarousel({
        dots:false,
        loop:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

     // Management Staff Owl Carousel Slider
    $("#management-section .owl-carousel").owlCarousel({
        dots:false,
        loop:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // Disabling to Drag Image from HTML Page
    $('img').on('dragstart', function(event) { event.preventDefault(); });

    $('#dashboard-section .toggler-btn').click(function(){
        $('#side-Nav').slideToggle();
    });

});

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();