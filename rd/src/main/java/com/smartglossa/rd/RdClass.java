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
	
	public void updateCustomer(String cusName,String aadharNum,String mobileNum,String addr) throws SQLException {
		try {
			String query="update customer set customerName='"+cusName+"',mobileNumber='"+mobileNum+"',address='"+addr+"' where aadharNumber='"+aadharNum+"' ";
			stat.execute(query);
			
		} finally {
			CloseConnection();
			
		}
		
	}
	public void addCusAccount(String aadharNum,String accNum,int amt,String date,String duration) throws SQLException {
		try {
			String query="insert into customeraccount(aadharNumber,accountNumber,amount,date,duration)values('"+aadharNum+"','"+accNum+"',"+amt+",'"+date+"','"+duration+"')";
		    stat.execute(query);
		} finally {
            CloseConnection();
		}
		 
	}
	public void updateCusAccount(String aadharNum,String accNum,int amt,String duration) throws SQLException {
		try {
			String query="update customeraccount set accountNumber='"+accNum+"',amount="+amt+",duration='"+duration+"' where aadharNUmber='"+aadharNum+"'";
			stat.execute(query);
			
		} finally {
            CloseConnection();
		}
		
	}
	public void addPayment(String accNum,String amount,String date) throws SQLException {
		try {
			String query="insert into payment(accountNumber,amount,date)values('"+accNum+"','"+amount+"','"+date+"')";
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
