$(document).ready(function(){
	$(document).on("click","#add",function(){
		var cname=$("#name").val();
		var aadhar=$("#aadhar").val();
		var mno=$("#mno").val();
		var addr=$("#addr").val();
		if(cname==""){
			$("#name").focus().css("outline-color","red");
			return;
		}
		if(aadhar==""){
			$("#aadhar").focus().css("outline-color","red");
			return;
		}
		if(mno==""){
			$("#mno").focus().css("outline-color","red");
			return;
		}
		if(addr==""){
			$("#addr").focus().css("outline-color","red");
			return;
		}
		var url="/rd/RdServlet?operation=addCustomer&cusName="+cname+"&aadharNum="+aadhar+"&mobileNum="+mno+"&addr="+addr; 
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Successfully Added");
		}).fail(function(result){
			alert("Please Check Deatils");
		})
	});
	$(document).on("click","#update",function(){
		var cname=$("#name").val();
		var aadhar=$("#aadhar").val();
		var mno=$("#mno").val();
		var addr=$("#addr").val();
		if(cname==""){
			$("#name").focus().css("outline-color","red");
			return;
		}
		if(aadhar==""){
			$("#aadhar").focus().css("outline-color","red");
			return;
		}
		if(mno==""){
			$("#mno").focus().css("outline-color","red");
			return;
		}
		if(addr==""){
			$("#addr").focus().css("outline-color","red");
			return;
		}
		var url="/rd/RdServlet?operation=updateCustomer&cusName="+cname+"&aadharNum="+aadhar+"&mobileNum="+mno+"&addr="+addr;
		
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Update Successfully");
			
		}).fail(function(result){
			alert("Error Accours");
		})
	});
	
	
	
	$(document).on("click","#add",function(){
		var aadhar=$("#aadhar").val();
		var acnum=$("#acnum").val();
		var amt=$("#amt").val();
		var date=$("#date").val();
		var duration=$("#duration").val();
		if(aadhar==""){
			$("#aadhar").focus().css("outline-color","red");
			return;
		}
		if(acnum==""){
			$("#acnum").focus().css("outline-color","red");
			return;
		}
		if(amt==""){
			$("#amt").focus().css("outline-color","red");
			return;
		}
		if(date==""){
			$("#date").focus().css("outline-color","red");
			return;
		}
		if(duration==""){
			$("#duration").focus().css("outline-color","red");
			return;
		}
		var url="/rd/RdServlet?operation=addCusAccount&aadharNum="+aadhar+"&accNum="+acnum+"&amount="+amt+"&date="+date+"&duration="+duration; 
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Successfully Added");
		}).fail(function(result){
			alert("Please Check Deatils");
		})
	});
	$(document).on("click","#add",function(){
		var acnum=$("#acnum").val();
		var date=$("#date").val();
		if(acnum==""){
			$("#acnum").focus().css("outline-color","red");
			return;
		}
		if(date==""){
			$("#date").focus().css("outline-color","red");
			return;
		}
		var url="/rd/RdServlet?operation=addPayment&accNum="+acnum+"&date="+date;
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Successfully Added");
		}).fail(function(result){
			alert("Please Check Deatils");
		})
	});
	$(document).on("click","#getAll",function(){
		var url="/rd/RdServlet?operation=getAllPayment";
	$.ajax({
		url:url,
		type:'POST'
	})
	.done(function(result){
		var array=JSON.parse(result);
		var table="<table border='2px' class='table'><tr><th>Amount</th><th>Date</th></tr>"
        for(i=0;i<array.length;i++){
	    	table+="<tr>"
		 	    table+="<td>"+array[i].amt+"</td>"
		 		table+="<td>"+array[i].date+"</td>"		 		
		 		table+="</tr>";
		 	}
		table+="</table>";
		 	$(".get")[0].innerHTML=table;	

		 })
		 .fail(function(result){
		 	alert("error");
		 })
		  
	})
});

	
	
	
	
