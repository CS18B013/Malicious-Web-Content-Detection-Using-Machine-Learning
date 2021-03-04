// Purpose - This file contains all the logic relevant to the extension such as getting the URL, calling the server
// side clientServer.php which then calls the core logic.

function transfer(){	
	var tablink;
	chrome.tabs.getSelected(null,function(tab) {
	   	tablink = tab.url;
		$("#p1").text("The URL being tested is - "+tablink);

		var xhr=new XMLHttpRequest();
		params="url="+tablink;
        alert(params);
		var markup = "url="+tablink+"&html="+document.documentElement.innerHTML;
<<<<<<< HEAD
		xhr.open("POST","http://C:/Users/LENOVO/Malicious-Web-Content-Detection-Using-Machine-Learning/clientServer.php",false);
=======
		xhr.open("POST","http://localhost/Malicious-Web-Content-Detection-Using-Machine-Learning/clientServer.php",true);
>>>>>>> 7cd38b040437511e18406ebf2009ab9a49212693
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(markup);
		// Uncomment this line if you see some error on the extension to see the full error message for debugging.
		alert(xhr.responseText);
		$("#div1").text(xhr.responseText);
		return xhr.responseText;
	});
}


/*$(document).ready(function(){
    $("button").click(function(){	
		var val = transfer();
    });
});
*/
document.getElementById("button").addEventListener("click", myfunction);

function myfunction(){
  console.log('asd');
}

chrome.tabs.getSelected(null,function(tab) {
   	var tablink = tab.url;
	$("#p1").text("The URL being tested is - "+tablink);
});
