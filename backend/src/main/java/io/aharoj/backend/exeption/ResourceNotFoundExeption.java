package io.aharoj.backend.exeption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * ResourceNotFoundExeption
 * tell client that the resource they are looking for is not found
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExeption extends RuntimeException {

  public ResourceNotFoundExeption(String message) {
    super(message);
  }

}
