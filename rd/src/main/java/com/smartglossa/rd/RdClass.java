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
	
	public void addCustomer(String cusName,String aadharNum,String mobileNum,String addr) {
		try {
			String query="insert into customer()";
			
		} finally {

		}
		
		
	}

	private void OpenConnection() throws ClassNotFoundException, SQLException{
		Class.forName("com.mysql.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://"+ RdConstant.MY_SERVER + "/" + RdConstant.DATABASE,RdConstant.USERNAME,RdConstant.PASSWORD);
		stat=con.createStatement();
		
		
	}

}
