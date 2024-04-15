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

}
