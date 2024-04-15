package io.aharoj.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.aharoj.backend.dto.EmployeeDto;
import io.aharoj.backend.service.EmployeeService;
import lombok.AllArgsConstructor;

/**
 * EmployeeController
 * This class is responsible for handling the HTTP requests related to the
 * Employee entity.
 * 
 * @RequestBody extracts the json from the request body and maps it to the
 * EmployeeDto object.
 */
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

  private EmployeeService employeeService;

  // Build Add Employee REST API
  @PostMapping
  public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
    EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
    return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
  }

  // Build Get Employee By Id REST API
  @GetMapping("{id}")
  public ResponseEntity<EmployeeDto> getEmployee(@PathVariable("id") Long employeeId) {
    EmployeeDto employeeDto = employeeService.getEmployee(employeeId);
    // return new ResponseEntity<>(employee, HttpStatus.OK);
    return ResponseEntity.ok(employeeDto);
  }

}
