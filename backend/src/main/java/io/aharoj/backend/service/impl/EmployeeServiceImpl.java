package io.aharoj.backend.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import io.aharoj.backend.dto.EmployeeDto;
import io.aharoj.backend.entity.Employee;
import io.aharoj.backend.exeption.ResourceNotFoundExeption;
import io.aharoj.backend.mapper.EmployeeMapper;
import io.aharoj.backend.repository.EmployeeRepository;
import io.aharoj.backend.service.EmployeeService;
import lombok.AllArgsConstructor;

/**
 * EmployeeServiceImpl
 * 
 * This class is responsible for implementing the EmployeeService interface.
 * DTOs are used to transfer data between the layers of the application.
 */
@Service
@AllArgsConstructor // forgot this and wouldnt inject the autowired repository
public class EmployeeServiceImpl implements EmployeeService {

  private EmployeeRepository employeeRepository;

  @Override
  public EmployeeDto createEmployee(EmployeeDto employeeDto) {
    Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
    Employee savedEmployee = employeeRepository.save(employee);
    return EmployeeMapper.mapToEmployeeDto(savedEmployee);
  }

  @Override
  public EmployeeDto getEmployee(Long employeeId) {
    Employee employee = employeeRepository.findById(employeeId)
        .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + employeeId));
    return EmployeeMapper.mapToEmployeeDto(employee);
  }

  @Override
  public List<EmployeeDto> getAllEmployees() {
    List<Employee> employees = employeeRepository.findAll();
    return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
  }

  @Override
  public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
    Employee employee = employeeRepository.findById(employeeId).orElseThrow(
        () -> new ResourceNotFoundExeption("Employee with id: " + employeeId + "does NOT exist"));
    employee.setFirstName(updatedEmployee.getFirstName());
    employee.setLastName(updatedEmployee.getLastName());
    employee.setEmail(updatedEmployee.getEmail());
    Employee updatedEmployeeObject = employeeRepository.save(employee);
    return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObject);
  }

  @Override
  public void deleteEmployee(Long employeeId) {
    Employee employee = employeeRepository.findById(employeeId).orElseThrow(
        () -> new ResourceNotFoundExeption("Employee with id: " + employeeId + "does NOT exist"));
    employeeRepository.deleteById(employeeId);
  }

}
