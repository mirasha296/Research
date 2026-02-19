AFRAME.registerComponent('grid', {
  schema: {
    size: { type: 'number', default: 10 },
    divisions: { type: 'number', default: 10 },
    color: { type: 'color', default: '#888888' }
  },

  init: function () {

    const size = this.data.size;
    const divisions = this.data.divisions;

    // Convert A-Frame color to THREE.Color
    const gridColor = new THREE.Color(this.data.color);

    const grid = new THREE.GridHelper(
      size,
      divisions,
      gridColor,
      gridColor
    );

    grid.position.y = 0;

    this.el.setObject3D('mesh', grid);
  }
});