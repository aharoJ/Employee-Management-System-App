package io.aharoj.backend.service.impl;

import org.springframework.stereotype.Service;

import io.aharoj.backend.dto.EmployeeDto;
import io.aharoj.backend.entity.Employee;
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

}
