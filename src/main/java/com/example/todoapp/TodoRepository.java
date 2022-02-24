package com.example.todoapp;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "todos", path = "todos")
public interface TodoRepository extends MongoRepository<Todo, String> {

    List<Todo> findByTitle(@Param("title") String title);
}
