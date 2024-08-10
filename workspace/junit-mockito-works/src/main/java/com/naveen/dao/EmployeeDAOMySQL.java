package com.naveen.dao;

import com.naveen.contracts.IEmployeeDAO;

// this class shall have connection information of mysql
public class EmployeeDAOMySQL implements IEmployeeDAO {

	@Override
	public boolean insertEmployee
		(int empId, String empName) {
		
		return empId > 100 && 
			empName.length() >6;
	}

}
