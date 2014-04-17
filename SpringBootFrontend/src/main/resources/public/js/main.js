
$(function() {
    initialize();
    $('a').click(function() {
    	var frm = $( '#userForm' );   	
    	payload.populate( frm.serializeArray() );
    	form.post();
    });
})


var form;
var payload;
function initialize() {	
	
	payload = {
			username 	: '',
			firstname 	: '',
			lastname 	: '',
			email 		: '',
			createdDate : '',
			isActive 	: '',
			
			populate : function (formData) {
				this.username 	= formData[0].value;
				this.firstname 	= formData[1].value;
				this.lastname 	= formData[2].value;
				this.email 		= formData[3].value;
				this.createdDate = formData[4].value;
				this.isActive 	= formData[5].value;		
			}
	// [{"name":"username","value":"sdf"},
	// {"name":"firstname","value":"sdf"},
	// {"name":"lastname","value":"sdf"},
	// {"name":"email","value":"sdf"},
	// {"name":"createdDate","value":"2014-02-02T00:00:00"},
	// {"name":"isActive","value":"1"}]"
	
	};
	
	
	form = {			
		
		post : function () {
			console.log("payload: " + payload);
	    		$.ajax({
	    			type : 'POST',
	    			contentType : 'application/json',
	    			url : "http://localhost:8080/user",
	    			dataType : "json",
	    			processData : false,
	    			data : JSON.stringify(payload),
	    			success : function(data, textStatus, jqXHR) {
	    				console.log('Log created successfully');
	    			},
	    			error : function(jqXHR, textStatus, errorThrown) {
	    				console.log('data: ' + this.data);
	    				console.log('jqXHR: ' + jqXHR);
	    				console.log('textStatus: ' + textStatus);
	    				console.log('errorThrown: ' + errorThrown);
	    			}
	    		});
			}
			
	};
}





