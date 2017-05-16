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
		
	})
})