package io.aharoj.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.aharoj.backend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
