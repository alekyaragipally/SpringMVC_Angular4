package com.SpringMVC.Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.SpringMVC.model.Employee;
import com.SpringMVC.service.EmployeeService;

@Controller
@Transactional
public class EmployeeController {


	@Autowired
	private EmployeeService employeeService;      
	
	@RequestMapping(value = "/saveEmployee", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody String saveEmployee(@RequestBody Employee employee)	{
    System.out.println("Employee details==="+employee);
    employeeService.saveEmployee(employee);
	return "OK";
}

	@RequestMapping(value = "/getEmployee", method = RequestMethod.GET)
	public @ResponseBody List <Employee>  getEmployee()  {
		List<Employee> manageSourceList= new ArrayList<Employee>();
		try
		{
			manageSourceList=employeeService.getEmployee();
			System.out.println("In CONTROLLER=============="+manageSourceList);
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		return manageSourceList;
		
	}
	@RequestMapping(value = "/deleteById/{id}", method = RequestMethod.DELETE)
	public @ResponseBody List<Employee> deleteEmployee(@PathVariable(value = "id") String id) {

		System.out.println("DELETE CONTROLLER1");
		List<Employee> list= new ArrayList<Employee>();

		try{
			System.out.println("DELETE CONTROLLER");
				list = employeeService.deleteEmployee(Integer.parseInt(id));
		}catch(Exception e)
		{
			e.printStackTrace();
		}
				return list;
	}
    @RequestMapping(value="/updateEmp",method = RequestMethod.POST)
    public @ResponseBody List<Employee> updateEmp(@RequestBody Employee emp) {
		
    	List<Employee> emp1 = new ArrayList<Employee>();
    	try {
    		System.out.println("Update======="+emp1);
    		emp1 = employeeService.updateEmp(emp);
    	}catch(Exception e) {
    		e.printStackTrace();
    	}
    	return emp1;
    	
    }
  
    @RequestMapping(value="/autoSearch",method = RequestMethod.GET)
	public void autoSearch(@RequestParam String term, HttpServletResponse response) {
		try {
			String result = employeeService.autoSearch(term);
			PrintWriter out = response.getWriter();
			out.println(result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
    
}
