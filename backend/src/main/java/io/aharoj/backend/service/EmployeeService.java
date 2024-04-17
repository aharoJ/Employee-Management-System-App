package io.aharoj.backend.service;

import java.util.List;

import io.aharoj.backend.dto.EmployeeDto;

/**
 * EmployeeService
 */
public interface EmployeeService {
  // our @Post
  EmployeeDto createEmployee(EmployeeDto employeeDto);

  // our @Get
  EmployeeDto getEmployee(Long id);

  // our @Get for all employees
  List<EmployeeDto> getAllEmployees();

  // our @Put for updating an employee
  EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

  // our @Delete for deleting an employee
  void deleteEmployee(Long employeeId);

}
