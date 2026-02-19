AFRAME.registerComponent('test-controls',  
{
    init: function () 
    {
        /*
            this runs 100 times per second on VR headsets
        */
        function move(event)
        {

            // how far should we move? (distance)
            // speed = distance / time
            // distance = speed * time

            let x = event.detail.x / 100;
            let z = event.detail.y / 100;

            let camera = document.getElementById("camera");
            
            // get raw data
            let positionString = camera.getAttribute("position"); // "4 3 7"

            // convert to array (of strings)
            let stringArray = positionString.split(" "); // ["4", "3", "7"]

            // convert string to numbers
            let numberArray = stringArray.map(Number); // [4, 3, 7]

            // add or subtract from the number
            numberArray[0] += x;
            numberArray[2] += z;

            // convert numbers back to strings
            stringArray = numberArray.map(String);

            // put strings back together separated by spaces
            positionString = stringArray.join(" ");

            // set attribute
            camera.setAttribute("position", positionString);
        }

        this.el.addEventListener('thumbstickmoved',  move );
    }
});