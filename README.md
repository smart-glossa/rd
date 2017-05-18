# Database : rd

tableName : 
 
 1.customer | CREATE TABLE `customer` (
  `customerName` varchar(50) DEFAULT NULL,
  `aadharNumber` varchar(50) DEFAULT NULL,
  `mobileNumber` varchar(10) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  UNIQUE KEY `aadharNumber` (`aadharNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |

  
  2. customerAccount | 
       CREATE TABLE `customeraccount` (
  `aadharNumber` varchar(50) default NULL,
  `accountNumber` varchar(20) default NULL,
  `amount` int(11) default NULL,
  `date` varchar(50) default NULL,
  `duration` varchar(50) default NULL,
  UNIQUE KEY `accountNumber` (`accountNumber`),
  KEY `aadharNumber` (`aadharNumber`),
  CONSTRAINT `customerAccount_ibfk_1` FOREIGN KEY (`aadharNumber`) REFERENCES `customer` (`aadharNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |

        
  3. payment | CREATE TABLE `payment` (
  `accountNumber` varchar(20) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  KEY `accountNumber` (`accountNumber`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`accountNumber`) REFERENCES `customerAccount` (`accountNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |
