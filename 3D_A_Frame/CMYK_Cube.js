AFRAME.registerComponent('test-controls',  
{
    init: function () 
    {
        /*
            this runs 100 times per second on VR headsets
        */
        function move(event) {

            let x = event.detail.x / 200;
            let z = event.detail.y / 200;

            let camera = document.getElementById("entity");

            // get position as object
            let position = camera.getAttribute("position");

            // modify directly
            position.x += x;
            position.z += z;

            // set it back
            camera.setAttribute("position", position);
        }

        this.el.addEventListener('thumbstickmoved',  move );
    }
});