document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("leapYearForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const year = document.getElementById("year").value;

        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            result.textContent = `${year} is a leap year.`;
            result.style.color = "green";
        } else {
            result.textContent = `${year} is not a leap year.`;
            result.style.color = "red";
        }

        result.style.visibility = "visible";
        animateResult(result);
    });
});

function animateResult(element) {
    const burst = new mojs.Burst({
        parent: element,
        radius: { 0: 100 },
        count: 10,
        children: {
            shape: "circle",
            radius: { 10: 0 },
            fill: ["#F90093", "#8A2BE2", "#00C9B1"],
            degreeShift: "rand(-360, 360)",
            duration: 2000,
        },
    });

    const timeline = new mojs.Timeline({ speed: 1.5 });
    timeline.add(burst);
    timeline.play();
}