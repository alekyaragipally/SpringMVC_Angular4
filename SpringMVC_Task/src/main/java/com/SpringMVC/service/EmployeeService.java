package com.SpringMVC.service;

import java.util.List;

import com.SpringMVC.model.Employee;

public interface EmployeeService {

	void saveEmployee(Employee employee);

	public List<Employee> getEmployee();

	List<Employee> deleteEmployee(Integer id);

	List<Employee> updateEmp(Employee emp);

	String autoSearch(String term);

}
