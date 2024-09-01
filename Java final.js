let slideGroup = [
    { className: "Myimage",  interval: 5000 },
    {className:  "Myimage1", interval: 6000 },
    { className: "Myimage2", interval: 6000 },
    { className: "Myimage3", interval: 5000 },
    { className: "Myimage4", interval: 4080 },
    { className: "Myimage5", interval: 6000 },
    { className: "Myimage6", interval: 4000 },
    { className: "Myimage7", interval: 5000 },
    { className: "Myimage8", interval: 6000 },
    { className: "Myimage9", interval: 4000 },
    { className: "Myimage10", interval: 4000 },
    { className: "Myimage11", interval: 4000 },
    { className: "Myimage12", interval: 4000 },

];

slideGroup.forEach(function(group, index) {
    let slideIndex = 0;
    const slides = document.getElementsByClassName(group.className);

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, group.interval);
    }

    showSlides();
});