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
			String cusName=request.getParameter("cusname");
			String aadharNum=request.getParameter("aadharNum");
			String mobileNum=request.getParameter("mobileNum");
			String addr=request.getParameter("addr");
			JSONObject result=new JSONObject();
			try {
				
				
			} catch (Exception e) {

			}
			response.getWriter().println(result);
			
		}
	}

}
