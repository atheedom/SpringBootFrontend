
$(function() {
    initialize();
    $('a').click(function() {
    	var frm = $( '#userForm' );   	
    	form.payload = JSON.stringify(frm.serializeArray());
    	form.post();
    });
})


var form;
function initialize() {	
	
	form = {			
		payload : {},
		
		post : function () {
			console.log('here');
	    		$.ajax({
	    			type : 'POST',
	    			contentType : 'application/json',
	    			url : "http://localhost:8080/user",
	    			dataType : "json",
	    			data : form.payload,
	    			success : function(data, textStatus, jqXHR) {
	    				console.log('Log created successfully');
	    			},
	    			error : function(jqXHR, textStatus, errorThrown) {
	    				console.log('jqXHR: ' + jqXHR);
	    				console.log('textStatus: ' + textStatus);
	    				console.log('errorThrown: ' + errorThrown);
	    			}
	    		});
			}
			
	};
}





