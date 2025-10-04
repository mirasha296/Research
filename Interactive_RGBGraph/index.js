const date = ['Red', 'Green', 'Blue']
let rgb_value = [255,50,180]   // start color
// let rgbColor = `rgb(${rgb_value[0]}, ${rgb_value[1]}, ${rgb_value[2]})`
let rgbColor = `rgb(${rgb_value.join(",")})` //both are ways to convert array into a string

// chart setup
const chart = new Chart("chart", {
    type: 'line',
    data: {
        labels: date,
        datasets: [{
            data: rgb_value,
            backgroundColor: rgbColor,   // <-- fill colorz
            borderColor: rgbColor,       // optional: match line color too
            fill: true,
            pointRadius: 6,
            pointBackgroundColor: ['Red','Green','Blue'],
            dragData: true,
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'RGB Values'
        },
        scales: {       // ChatGpt assisted with this fixed y axis issue (y axis was auto scaling)
            yAxes: [{       //setting y as fixed value
                ticks: {    // With my understanding, this is setting the y axis range
                    min: 0,     // min y value
                    max: 260,   // max y value; setting to 260 and not 255 allows spacing above the max point

                }
            }]
        }
    }
})

function getTextColor(rgb) {
    const [r, g, b] = rgb
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b
    return luminance > 128 ? "black" : "white"
}


// slider setup red
var redSlider = document.getElementById("redSlider");
    var redValue = document.getElementById("redValue");
    redSlider.oninput = function(){
    chart.data.datasets[0].data[0] = this.value;  // update the red value in the chart data
    redValue.textContent = `${this.value}`; 
}

// slider setup green
var greenSlider = document.getElementById("greenSlider");
    var greenValue = document.getElementById("greenValue");
    greenSlider.oninput = function(){
    chart.data.datasets[0].data[1] = this.value;  // update the green value in the chart data
    greenValue.textContent = `${this.value}`;
}

// slider setup blue
var blueSlider = document.getElementById("blueSlider");
    var blueValue = document.getElementById("blueValue");
    blueSlider.oninput = function(){
    chart.data.datasets[0].data[2] = this.value;  // update the blue value in the chart data
    blueValue.textContent = `${this.value}`;
}   
// update rgb_value with new slider values
rgb_value[0] = parseInt(redSlider.value) //converting string to int
rgb_value[1] = parseInt(greenSlider.value)
rgb_value[2] = parseInt(blueSlider.value)
rgbColor = `rgb(${rgb_value.join(",")})` //both are ways to convert array into a string

// update chart fill + line color
chart.data.datasets[0].backgroundColor = rgbColor
chart.data.datasets[0].borderColor = rgbColor
chart.update()


function UpdateEverything(){
    rgbColor = `rgb(${rgb_value.join(",")})`; //string of css code
    chart.data.datasets[0].backgroundColor = rgbColor; 
    chart.data.datasets[0].borderColor = rgbColor;
    chart.update();
}

setInterval(UpdateEverything, 100)
