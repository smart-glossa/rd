# Database : rd

tableName : 
 
 1. customer :
 
       customerName varchar(50),
       aadharNumber varchar unique,
       mobileNumber varchar(10),
       address varchar(255)
  
  2. customerAccount :
  
        aadharNumber varchar foreign key,
        accountNumber varchar(20) unique,
        Amount int,
        date varchar
        
  3. payment :
  
       accountNumber foreign key,
       amount
       date varchar
