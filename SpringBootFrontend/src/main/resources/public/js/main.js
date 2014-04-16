
$(function() {
    initialize();
    $('a').click(function() {
    	var frm = $( '#userForm' ).serialize();
    	
    	console.log( frm );
    	console.log( frm.serialize() );
    	console.log( frm.serialize().serializeArray() );
    	console.log( JSON.stringify(frm.serialize().serializeArray()) );
    });
})



var url;
function initialize() {
	url = "http://localhost:8080";		
}


//$('#userForm').serialize(); 



var form = {
		
		rootURL : url + "/user",
		
		post : function addLog(log) {
		    		$.ajax({
		    			type : 'POST',
		    			contentType : 'application/json',
		    			url : rootURL,
		    			dataType : "json",
		    			data : log,
		    			success : function(data, textStatus, jqXHR) {
		    				console.log('Log created successfully');
		    			},
		    			error : function(jqXHR, textStatus, errorThrown) {
		    				console.log('Error adding: ' + textStatus);
		    			}
		    		});
				}
		
};


