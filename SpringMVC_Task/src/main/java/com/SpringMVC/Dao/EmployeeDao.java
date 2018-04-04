package com.SpringMVC.Dao;

import java.util.List;

import com.SpringMVC.model.Employee;

public interface EmployeeDao {

	void saveEmployee(Employee employee);

	public List<Employee> getEmployee();

	void deleteEmployee(Integer id);

	List<Employee> findAllEmployeeList();

	void updateEmp(Employee emp);

	Employee getEmployeeById(int id);

	String autoSearch(String term);
}
