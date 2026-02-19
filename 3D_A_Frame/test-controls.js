AFRAME.registerComponent('test-controls',  
{
    init: function () 
    {
        this.el.addEventListener('thumbstickmoved', function (evt)
        {
            let box = document.getElementById("box");
            if (evt.detail.y > 0.95)  { box.setAttribute("color", "pink"); }
            if (evt.detail.y < -0.95) { box.setAttribute("color", "red"); }
            if (evt.detail.x < -0.95) { box.setAttribute("color", "green"); }
            if (evt.detail.x > 0.95)  { box.setAttribute("color", "blue"); }
        });
    }
});