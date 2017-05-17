package com.smartglossa.rd;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.json.JSONObject;


public class RdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public RdServlet() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String operation=request.getParameter("operation");
		if(operation.equals("addCustomer")){
			String cusName=request.getParameter("cusName");
			String aadharNum=request.getParameter("aadharNum");
			String mobileNum=request.getParameter("mobileNum");
			String addr=request.getParameter("addr");
			JSONObject result=new JSONObject();
			try {
				RdClass rd=new RdClass();
				rd.addCustomer(cusName, aadharNum, mobileNum, addr);
				result.put("status", 1);
			} catch (Exception e) {
				e.printStackTrace();
				result.put("status", 0);
			}
			response.getWriter().println(result);
		}else if(operation.equals("updateCustomer")){
			String cusName=request.getParameter("cusName");
			String aadharNum=request.getParameter("aadharNum");
			String mobileNum=request.getParameter("mobileNum");
			String addr=request.getParameter("addr");
			JSONObject result=new JSONObject();
			try {
				RdClass rd=new RdClass();
				rd.updateCustomer(cusName, aadharNum, mobileNum, addr);
				result.put("status", 1);
				
			} catch (Exception e) {
                 e.printStackTrace();
                 result.put("status",0);
			}
			response.getWriter().println(result);
		}else if(operation.equals("deleteCustomer")){
			String aadhar=request.getParameter("aadhar");
			JSONObject result=new JSONObject();
			try {
				RdClass rd=new RdClass();
				rd.deleteCustomer(aadhar);
				result.put("status",1);
				
			} catch (Exception e) {
                  e.printStackTrace();
                  result.put("status", 0);
			}
			response.getWriter().println(result);
			
		}else if(operation.equals("addCusAccount")){
			String aadharNum=request.getParameter("aadharNum");
			String accNum=request.getParameter("accNum");
			int amt=Integer.parseInt(request.getParameter("amount"));
			String date=request.getParameter("date");
			String duration=request.getParameter("duration");
			JSONObject result=new JSONObject();
			try {
				RdClass rd=new RdClass();
				rd.addCusAccount(aadharNum, accNum, amt, date, duration);
				result.put("status", 1);
			} catch (Exception e) {
               e.printStackTrace();
               result.put("status",0);
			}
			
			response.getWriter().println(result);
		   
		}else if(operation.equals("updateCusAccount")){
			String aadharNum=request.getParameter("aadharNum");
			String accNum=request.getParameter("accNum");
			int amt=Integer.parseInt(request.getParameter("amount"));
			String duration=request.getParameter("duration");
			JSONObject result=new JSONObject();
			try {
				RdClass rd=new RdClass();
				rd.updateCusAccount(aadharNum, accNum, amt, duration);
				result.put("status",1);
				
			} catch (Exception e) {
                  e.printStackTrace();
                  result.put("status",0);
			}
			response.getWriter().println(result);
		}else if(operation.equals("addPayment")){
			String accNum=request.getParameter("accNum");
			String amount=request.getParameter("amount");
			String date=request.getParameter("date");
			JSONObject result=new JSONObject();
			try {
				RdClass rd=new RdClass();
				rd.addPayment(accNum, amount, date);
				result.put("status", 1);
			} catch (Exception e) {
                 e.printStackTrace();
                 result.put("status", 0);
			}
			response.getWriter().println(result);
		}
		else if(operation.equals("yearlyPayment")){
			JSONObject result=new JSONObject();
			try {
				RdClass rd=new RdClass();
				result=rd.yearlyPayment();
				
			} catch (Exception e) {
                   e.printStackTrace();
			}
			response.getWriter().println(result);
		}
		
	}

}
