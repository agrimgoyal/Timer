document.addEventListener('DOMContentLoaded', function () {
    // Set the target time as 12:00 AM on November 19, 2023
    var targetTime = new Date('November 19, 2023 00:00:00').getTime();

    var countdownFunction = setInterval(function() {
        var now = new Date().getTime();
        var distance = targetTime - now;

        if (distance < 0) {
            clearInterval(countdownFunction);
            // Display only one large knife emoji
            var countdownElement = document.querySelector('.countdown');
            countdownElement.innerHTML = '<span style="font-size: 100px;">&#128298;</span>';
        } else {
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
        }
    }, 1000);
});
