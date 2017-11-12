new Vue({
  el: '#box_styling',
  data: {
    val_x: 0,
    val_y: 0,
    blur: 20,
    spread: 5,
    opacity: 0.55,
    color:'#000000'
  },
  methods:{
    convert: function hexToRGB(color) {
    var r = parseInt(this.color.slice(1, 3), 16),
        g = parseInt(this.color.slice(3, 5), 16),
        b = parseInt(this.color.slice(5, 7), 16);

         return"rgba(" + r + ", " + g + ", " + b + ", " + this.opacity + ")";
    
}
  }
})