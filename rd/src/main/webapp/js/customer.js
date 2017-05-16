function cus(){
	var cus="";
	cus += "<div>";
	cus += "<table>";
	cus += "<tr>";
	cus += "<td>Customer Name<\/td><td><input type=\"text\" id=\"name\"><\/td>";
	cus += "<td>Aadhar Number<\/td><td><input type=\"text\" id=\"aadhar\"><\/td>";
	cus += "<td>Mobile Number<\/td><td><input type=\"text\" id=\"mno\"><\/td>";
	cus += "<td>Address<\/td><td><input type=\"text\" id=\"addr\"><\/td>";
	cus += "<td><button id=\"add\">Add<\/button><button id=\"update\">Update<\/button><\/td>";
	cus += "<\/tr>";
	cus += "<\/table>";
	cus += "<\/div>";
$('.cus')[0].innerHTML=cus;
}