// Vue
	new Vue({
 		 el: '#wrapper',
  			data: {
    			isOpen: true
  			},
			methods:{
				toggle: function(){
            		this.isOpen = !this.isOpen
       			}
			}
	});
