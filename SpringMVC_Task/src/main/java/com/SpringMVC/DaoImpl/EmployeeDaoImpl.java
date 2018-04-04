package com.SpringMVC.DaoImpl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.SpringMVC.Dao.EmployeeDao;
import com.SpringMVC.model.Employee;
import com.google.gson.Gson;

@Transactional
@Repository
public class EmployeeDaoImpl implements EmployeeDao {

	@PersistenceContext
	private EntityManager entityManager;

	
	@Transactional
	public void saveEmployee(Employee employee) {

				entityManager.persist(employee);

	}
	public List<Employee> getEmployee() {
		TypedQuery<Employee> query = entityManager.createQuery(" FROM Employee ORDER BY id DESC",
				Employee.class);
		System.out.println("query is ========================== " + query.toString());
	
		List<Employee> manageSourceConfig = query.getResultList();
		return manageSourceConfig;
	}
	
	@Transactional
	@Override
	public void  deleteEmployee(Integer id) {
		
		Employee emp = entityManager.find(Employee.class, id);
		entityManager.remove(emp);
		System.out.println("Deleted");
	
	}
	
	public List<Employee> findAllEmployeeList() {
		TypedQuery<Employee> query = entityManager.createQuery(" FROM Employee ORDER BY id DESC",
				Employee.class);
		System.out.println("query is ========================== " + query.toString());
	
		List<Employee> employee = query.getResultList();
		return employee;
	}
	
	@Override
	public Employee getEmployeeById(int id) {
		return entityManager.find(Employee.class, id);
	}
	
	
	@Transactional
	public void updateEmp(Employee emp) {
	

        System.out.println("data in daoImpl======="+emp); 
		entityManager.merge(emp);
		
	}
	
	public String autoSearch(String term) {

		String resultlist = null;
System.out.println("===========dao implementation============");
		TypedQuery<String> query = entityManager.createQuery(
				"select emailId from Employee where lower(emailId) like lower('%" + term + "%')", String.class);
		List<String> reportNameList = query.getResultList();
		System.out.println(reportNameList);
		if (reportNameList.size() != 0) {
			resultlist = new Gson().toJson(reportNameList);
		} else {
			ArrayList<String> list2 = new ArrayList<String>();
			list2.add("Source Not Found");
			String searchList = new Gson().toJson(list2);
			resultlist = searchList;
		}
		System.out.println("result list is" + resultlist);
		return resultlist;

	}

	
}
