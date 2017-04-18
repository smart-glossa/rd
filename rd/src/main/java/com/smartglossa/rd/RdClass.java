package com.smartglossa.rd;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class RdClass {
	Connection con=null;
	Statement stat=null;
	ResultSet rs=null;
	
	public RdClass() throws ClassNotFoundException,SQLException{
		OpenConnection();
		
	}
	
	public void addCustomer(String cusName,String aadharNum,String mobileNum,String addr) throws SQLException {
		try {
			String query="insert into customer(customerName,aadharNumber,mobileNumber,address)values('"+cusName+"','"+aadharNum+"','"+mobileNum+"','"+addr+"')";
            stat.execute(query);			
		} finally {
			CloseConnection();

		}
		
		
	}

	
	private void OpenConnection() throws ClassNotFoundException, SQLException{
		Class.forName("com.mysql.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://"+ RdConstant.MY_SERVER + "/" + RdConstant.DATABASE,RdConstant.USERNAME,RdConstant.PASSWORD);
		stat=con.createStatement();
		
		
	}
	private void CloseConnection() throws SQLException {

		if (con != null) {
			con.close();
		}
		if (stat != null) {
			stat.close();
		}
		if (rs != null) {
			rs.close();
		}
	}


}
