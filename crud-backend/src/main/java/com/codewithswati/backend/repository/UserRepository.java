package com.codewithswati.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithswati.backend.model.User;

// Model and datatype of primary key
public interface UserRepository extends JpaRepository<User, Long> {

}
