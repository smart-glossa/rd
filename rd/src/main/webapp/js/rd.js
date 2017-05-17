$(document).ready(function(){
	$(document).on("click","#add",function(){
		var cname=$("#name").val();
		var aadhar=$("#aadhar").val();
		var mno=$("#mno").val();
		var addr=$("#addr").val();
		if(cname==""){
			$("#name").focus().css("outline-color","red");
			return false;
		}
		if(aadhar==""){
			$("#aadhar").focus().css("outline-color","red");
			return false;
		}
		if(mno==""){
			$("#mno").focus().css("outline-color","red");
			return false;
		}
		if(addr==""){
			$("#addr").focus().css("outline-color","red");
			return false;
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
			return false;
		}
		if(acnum==""){
			$("#acnum").focus().css("outline-color","red");
			return false;
		}
		if(amt==""){
			$("#amt").focus().css("outline-color","red");
			return false;
		}
		if(date==""){
			$("#date").focus().css("outline-color","red");
			return false;
		}
		if(duration==""){
			$("#duration").focus().css("outline-color","red");
			return false;
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
		var amt=$("#amt").val();
		var date=$("#date").val();
		if(acnum==""){
			$("#acnum").focus().css("outline-color","red");
			return false;
		}
		if(amt==""){
			$("#amt").focus().css("outline-color","red");
			return false;
		}
		if(date==""){
			$("#date").focus().css("outline-color","red");
			return false;
		}
		var url="/rd/RdServlet?operation=addPayment&accNum="+acnum+"&amount="+amt+"&date="+date;
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Successfully Added");
		}).fail(function(result){
			alert("Please Check Deatils");
		})
	});
	
	$(document).on("click","#yearly",function(){
		var url="/rd/RdServlet?operation=yearlyPayment";
		
	})
	
	
})