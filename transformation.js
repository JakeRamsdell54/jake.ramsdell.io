$(document).ready(function () {

    // Function to transform content for the Original Mode
    function transformOriginalMode() {
        // Hide video, show image
        $('#transformVideo').hide(); 
        $('#transformImage').show(); 
        // Animate container background color
        $('#interactiveContainer').animate({ backgroundColor: "#6fcf97" }, 500);
        // Toggle CSS classes for image
        $('#transformImage').toggleClass('flipped');
        $('#transformImage').toggleClass('fade-in');
        // Set new image source and update text content
        $('#transformImage').attr('src', 'alaska1.jpg');
        $('h1').text("Alaska");
        $('p').text("Mt. Denali");
        // Remove fadeOut class from header and paragraph
        $('h1, p').removeClass('fadeOut');
    }

    // Function to transform content for the Transformed Mode
    function transformTransformedMode() {
        // Hide video, show image
        $('#transformVideo').hide(); 
        $('#transformImage').show();
        // Animate container background color
        $('#interactiveContainer').animate({ backgroundColor: "#3498db" }, 500);
        // Toggle CSS classes for image
        $('#transformImage').toggleClass('flipped');
        $('#transformImage').toggleClass('fade-in');
        // Set new image source and update text content
        $('#transformImage').attr('src', 'alaska2.jpg');
        $('h1').text("Exit Glacier");
        $('p').text("Hiked up to see Exit Glacier. The glacier is part of the Harding Ice Field");
        // Remove fadeOut class from header and paragraph
        $('h1, p').removeClass('fadeOut');
    }

    // Function to transform content for the Third Mode
    function transformThirdMode() {
        // Show video, hide image
        $('#transformVideo').show(); 
        $('#transformImage').hide(); 
        // Animate container background color
        $('#interactiveContainer').animate({ backgroundColor: "#ffcc00" }, 500);
        // Toggle CSS classes for image
        $('#transformImage').toggleClass('flipped');
        $('#transformImage').toggleClass('fade-in');
        // Update text content for video mode
        $('h1').text("Holgate Glacier");
        $('p').text("Went on a day cruise in Kenai Fjords National Park. Holgate Glacier is also part of the Harding Icefield");
        // Remove fadeOut class from header and paragraph
        $('h1, p').removeClass('fadeOut');
    }

    // Event handler for Original Mode click
    $('#originalMode').click(function (e) {
        e.preventDefault();
        transformOriginalMode();
    });

    // Event handler for Transformed Mode click
    $('#transformedMode').click(function (e) {
        e.preventDefault();
        transformTransformedMode();
    });

    // Event handler for Third Mode click in the navbar
    $('#thirdMode').click(function (e) {
        e.preventDefault();
        transformThirdMode();
    });

    // Initial transformation for Original Mode
    transformOriginalMode();
});
