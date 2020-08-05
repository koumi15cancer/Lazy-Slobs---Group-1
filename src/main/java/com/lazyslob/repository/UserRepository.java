package com.lazyslob.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lazyslob.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	UserEntity findOneByUserNameAndStatus(String name, int status);
}
