Vue.config.devtools = true;

let vm = new Vue({
  el: '.ticklishbutton',
  data(){
    return {
      translation: 0,
      rotationX: 0,
      rotationY: 0 }

  },
  mounted() {
    requestAnimationFrame(this.tick);
   },
  methods: {
    tap: function (e) {
      const el = this.$el;
      const tapX = e.offsetX;
      const tapY = e.offsetY;
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      const ratioX = tapX / width;
      const ratioY = tapY / height;
      const rotationalForceX = ratioX - .5;
      const rotationalForceY = ratioY - .5;
      const translationalForce = Math.abs((ratioX - .5) * 2) - 1;

      this.rotationX += rotationalForceX;
      this.rotationY += rotationalForceY;
      this.translation += translationalForce;
    },
    tick: function () {
      let rotationValueX = this.rotationX * 45;
      let rotationValueY = this.rotationY * 20;
      let translationValue = this.translation * 40;

      this.$el.style.transform = `perspective(500px) translateZ(${translationValue}px) rotateY(${rotationValueX}deg) rotateX(${-rotationValueY}deg)`;

      if (Math.abs(this.translation) < 0.01) this.translation = 0;else
      this.translation *= .95;
      if (Math.abs(this.rotationX) < 0.01) this.rotationX = 0;else
      this.rotationX *= .95;
      if (Math.abs(this.rotationY) < 0.01) this.rotationY = 0;else
      this.rotationY *= .95;

      requestAnimationFrame(this.tick);
    } } });
    
    let vm1 = new Vue({
  el: '.ticklishbutton1',
  data(){
    return {
      translation: 0,
      rotationX: 0,
      rotationY: 0 }

  },
  mounted() {
    requestAnimationFrame(this.tick);
   },
  methods: {
    tap: function (e) {
      const el = this.$el;
      const tapX = e.offsetX;
      const tapY = e.offsetY;
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      const ratioX = tapX / width;
      const ratioY = tapY / height;
      const rotationalForceX = ratioX - .5;
      const rotationalForceY = ratioY - .5;
      const translationalForce = Math.abs((ratioX - .5) * 2) - 1;

      this.rotationX += rotationalForceX;
      this.rotationY += rotationalForceY;
      this.translation += translationalForce;
    },
    tick: function () {
      let rotationValueX = this.rotationX * 45;
      let rotationValueY = this.rotationY * 20;
      let translationValue = this.translation * 40;

      this.$el.style.transform = `perspective(500px) translateZ(${translationValue}px) rotateY(${rotationValueX}deg) rotateX(${-rotationValueY}deg)`;

      if (Math.abs(this.translation) < 0.01) this.translation = 0;else
      this.translation *= .95;
      if (Math.abs(this.rotationX) < 0.01) this.rotationX = 0;else
      this.rotationX *= .95;
      if (Math.abs(this.rotationY) < 0.01) this.rotationY = 0;else
      this.rotationY *= .95;

      requestAnimationFrame(this.tick);
    } } });
    
   let vm2 = new Vue({
  el: '.ticklishbutton2',
  data(){
    return {
      translation: 0,
      rotationX: 0,
      rotationY: 0 }

  },
  mounted() {
    requestAnimationFrame(this.tick);
   },
  methods: {
    tap: function (e) {
      const el = this.$el;
      const tapX = e.offsetX;
      const tapY = e.offsetY;
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      const ratioX = tapX / width;
      const ratioY = tapY / height;
      const rotationalForceX = ratioX - .5;
      const rotationalForceY = ratioY - .5;
      const translationalForce = Math.abs((ratioX - .5) * 2) - 1;

      this.rotationX += rotationalForceX;
      this.rotationY += rotationalForceY;
      this.translation += translationalForce;
    },
    tick: function () {
      let rotationValueX = this.rotationX * 45;
      let rotationValueY = this.rotationY * 20;
      let translationValue = this.translation * 40;

      this.$el.style.transform = `perspective(500px) translateZ(${translationValue}px) rotateY(${rotationValueX}deg) rotateX(${-rotationValueY}deg)`;

      if (Math.abs(this.translation) < 0.01) this.translation = 0;else
      this.translation *= .95;
      if (Math.abs(this.rotationX) < 0.01) this.rotationX = 0;else
      this.rotationX *= .95;
      if (Math.abs(this.rotationY) < 0.01) this.rotationY = 0;else
      this.rotationY *= .95;

      requestAnimationFrame(this.tick);
    } } });
    
let vm3 = new Vue({
  el: '.ticklishbutton3',
  data(){
    return {
      translation: 0,
      rotationX: 0,
      rotationY: 0 }

  },
  mounted() {
    requestAnimationFrame(this.tick);
   },
  methods: {
    tap: function (e) {
      const el = this.$el;
      const tapX = e.offsetX;
      const tapY = e.offsetY;
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      const ratioX = tapX / width;
      const ratioY = tapY / height;
      const rotationalForceX = ratioX - .5;
      const rotationalForceY = ratioY - .5;
      const translationalForce = Math.abs((ratioX - .5) * 2) - 1;

      this.rotationX += rotationalForceX;
      this.rotationY += rotationalForceY;
      this.translation += translationalForce;
    },
    tick: function () {
      let rotationValueX = this.rotationX * 45;
      let rotationValueY = this.rotationY * 20;
      let translationValue = this.translation * 40;

      this.$el.style.transform = `perspective(500px) translateZ(${translationValue}px) rotateY(${rotationValueX}deg) rotateX(${-rotationValueY}deg)`;

      if (Math.abs(this.translation) < 0.01) this.translation = 0;else
      this.translation *= .95;
      if (Math.abs(this.rotationX) < 0.01) this.rotationX = 0;else
      this.rotationX *= .95;
      if (Math.abs(this.rotationY) < 0.01) this.rotationY = 0;else
      this.rotationY *= .95;

      requestAnimationFrame(this.tick);
    } } });
	
	
	let vm4 = new Vue({
	  el: '.ticklishbutton4',
	  data(){
	    return {
	      translation: 0,
	      rotationX: 0,
	      rotationY: 0 }
	
	  },
	  mounted() {
	    requestAnimationFrame(this.tick);
	   },
	  methods: {
	    tap: function (e) {
	      const el = this.$el;
	      const tapX = e.offsetX;
	      const tapY = e.offsetY;
	      const width = el.offsetWidth;
	      const height = el.offsetHeight;
	      const ratioX = tapX / width;
	      const ratioY = tapY / height;
	      const rotationalForceX = ratioX - .5;
	      const rotationalForceY = ratioY - .5;
	      const translationalForce = Math.abs((ratioX - .5) * 2) - 1;
	
	      this.rotationX += rotationalForceX;
	      this.rotationY += rotationalForceY;
	      this.translation += translationalForce;
	    },
	    tick: function () {
	      let rotationValueX = this.rotationX * 45;
	      let rotationValueY = this.rotationY * 20;
	      let translationValue = this.translation * 40;
	
	      this.$el.style.transform = `perspective(500px) translateZ(${translationValue}px) rotateY(${rotationValueX}deg) rotateX(${-rotationValueY}deg)`;
	
	      if (Math.abs(this.translation) < 0.01) this.translation = 0;else
	      this.translation *= .95;
	      if (Math.abs(this.rotationX) < 0.01) this.rotationX = 0;else
	      this.rotationX *= .95;
	      if (Math.abs(this.rotationY) < 0.01) this.rotationY = 0;else
	      this.rotationY *= .95;
	
	      requestAnimationFrame(this.tick);
	    } } });
	
	