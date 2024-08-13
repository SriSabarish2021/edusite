document.addEventListener("DOMContentLoaded", function() {
    // Hide the content initially
    const content = document.getElementById('content');
    content.style.display = 'none';

    // Timer to show content after 10 seconds
    setTimeout(function() {
        // Hide the loading icon
        const loadingIcon = document.getElementById('loading-icon');
        loadingIcon.style.display = 'none';

        // Display the content
        content.style.display = 'block';
    }, 5000); // 10 seconds (10,000 milliseconds)
});
