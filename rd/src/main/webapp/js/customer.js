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
function cusAcc(){
	var cusAcc="";
	cusAcc += "<div>";
	cusAcc += "<table>";
	cusAcc += "<tr>";
	cusAcc += "<td>Aadhar Number<\/td><td><input type=\"text\" id=\"aadhar\"><\/td>";
	cusAcc += "<\/tr>";
	cusAcc += "<tr>";
	cusAcc += "<td>Account Number<\/td><td><input type=\"text\" id=\"acnum\"><\/td>";
	cusAcc += "<\/tr>";
	cusAcc += "<td>Amount<\/td><td><input type=\"text\" id=\"amt\"><\/td>";
	cusAcc += "<\/tr>";
	cusAcc += "<tr>";
	cusAcc += "<td>Date<\/td><td><input type=\"date\" id=\"date\"><\/td>";
	cusAcc += "<\/tr>";
	cusAcc += "<tr>";
	cusAcc += "<td>Duration<\/td><td><input type=\"text\" id=\"duration\"><\/td>";
	cusAcc += "<\/tr>";
	cusAcc += "<tr>";
	cusAcc += "<td><button id=\"add\">Add<\/button><\/td>";
	cusAcc += "<\/tr>";
	cusAcc += "<\/table>";
	cusAcc += "<\/div>";
$('.customer')[0].innerHTML=cusAcc; 
}
function payment(){
	var payment="";
	payment += "<div>";
	payment += "<table>";
	payment += "<tr>";
	payment += "<td>Account Number<\/td><td><input type=\"text\" id=\"acnum\"><\/td>";
	payment += "<\/tr>";
	payment += "<tr>";
	payment += "<td>Amount<\/td><td><input type=\"text\" id=\"amt\"><\/td>";
	payment += "<\/tr>";
	payment += "<td>Date<\/td><td><input type=\"date\" id=\"date\"><\/td>";
	payment += "<\/tr>";
	payment += "<tr>";
	payment += "<td><button id=\"add\">Add<\/button><\/td>";
	payment += "<\/tr>";
	payment += "<\/table>";
	payment += "<\/div>";
$('.customer')[0].innerHTML=payment;
}