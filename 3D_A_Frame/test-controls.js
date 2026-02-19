AFRAME.registerComponent('test-controls',  
{
    init: function () 
    {
        /*
            this runs 100 times per second on VR headsets
        */
        function move(event)
        {

            let box = document.getElementById("box");
            box.setAttribute("color", "red");

            // how far should we move? (distance)
            // speed = distance / time
            // distance = speed * time

            let x = event.detail.x;
            let z = event.detail.y;

            let camera = document.getElementById("camera");
            
            // get raw data
            let positionString = camera.getAttribute("position"); // "4 3 7"

            box.setAttribute("color", "orange");

            // convert to array (of strings)
            let stringArray = positionString.split(" "); // ["4", "3", "7"]

            // convert string to numbers
            let numberArray = stringArray.map(Number); // [4, 3, 7]

            // add or subtract from the number
            numberArray[0] += x;
            numberArray[2] += z;

            box.setAttribute("color", "green");

            // convert numbers back to strings
            stringArray = numberArray.map(String);

            // put strings back together separated by spaces
            positionString = stringArray.join(" ");

            box.setAttribute("color", "blue");

            // set attribute
            camera.setAttribute("position", positionString);

            box.setAttribute("color", "purple");

        }

        this.el.addEventListener('thumbstickmoved',  move );
    }
});