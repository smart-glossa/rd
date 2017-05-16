function cus(){
	var cus="";
	cus += "<div>";
	cus += "<table>";
	cus += "<tr>";
	cus += "<td>Customer Name<\/td><td><input type=\"text\" id=\"name\"><\/td>";
	cus += "<\/tr>";
	cus += "<tr>";
	cus += "<td>Aadhar Number<\/td><td><input type=\"text\" id=\"aadhar\"><\/td>";
	cus += "<\/tr>";
	cus += "<td>Mobile Number<\/td><td><input type=\"text\" id=\"mno\"><\/td>";
	cus += "<\/tr>";
	cus += "<tr>";
	cus += "<td>Address<\/td><td><input type=\"text\" id=\"addr\"><\/td>";
	cus += "<\/tr>";
	cus += "<tr>";
	cus += "<td><button id=\"add\">Add<\/button><button id=\"update\">Update<\/button><\/td>";
	cus += "<\/tr>";
	cus += "<\/table>";
	cus += "<\/div>";
$('.customer')[0].innerHTML=cus;
}	