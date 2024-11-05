document.getElementById("subscribeButton").addEventListener("click", function() {
    // Open YouTube channel in a new tab
    window.open("https://www.youtube.com/@realeroux1904", "_blank");

    // Display thank-you message and download link after subscription
    setTimeout(() => {
        document.getElementById("thankYouMessage").classList.remove("hidden");
        document.getElementById("downloadLink").classList.remove("hidden");

        // Smooth scroll effect to the download section
        document.getElementById("downloadLink").scrollIntoView({ behavior: "smooth" });
    }, 2000); // Wait for 2 seconds before showing thank you message
});