package com.SpringMVC.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SpringMVC.Dao.EmployeeDao;
import com.SpringMVC.model.Employee;
import com.SpringMVC.service.EmployeeService;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	private EmployeeDao employeeDao;

	@Override
	public void saveEmployee(Employee employee) {
		employeeDao.saveEmployee(employee);

	}

	public List<Employee> getEmployee() {
		return employeeDao.getEmployee();
	}
	
	public List<Employee> deleteEmployee(Integer id) {
		employeeDao.deleteEmployee(id);
	return employeeDao.findAllEmployeeList();
	
	}

	@Override
	public List<Employee> updateEmp(Employee emp) {
	employeeDao.updateEmp(emp);
		return employeeDao.findAllEmployeeList();
	}

	public String autoSearch(String term) {
		try {
			return this.employeeDao.autoSearch(term);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}

	}


}
