package io.aharoj.backend.mapper;

import io.aharoj.backend.dto.EmployeeDto;
import io.aharoj.backend.entity.Employee;

/**
 * EmployeeMapper class is responsible for mapping Employee entity to EmployeeDto and vice versa.
 */
public class EmployeeMapper {

  public static EmployeeDto mapToEmployeeDto(Employee employee) {
    return new EmployeeDto(
      employee.getId(),
      employee.getFirstName(),
      employee.getLastName(),
      employee.getEmail()
    );
  }

  public static Employee mapToEmployee(EmployeeDto employeeDto) {
    return new Employee(
      employeeDto.getId(),
      employeeDto.getFirstName(),
      employeeDto.getLastName(),
      employeeDto.getEmail()
    );
  }
}
