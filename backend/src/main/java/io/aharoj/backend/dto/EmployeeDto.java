package io.aharoj.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * DTO stands for Data Transfer Object
 * EmployeeDto class is responsible for transferring data between the service
 * layer and the controller layer.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {

  private Long id;
  private String firstName;
  private String lastName;
  private String email;
}
