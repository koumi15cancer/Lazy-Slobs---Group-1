package com.lazyslob.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lazyslob.entity.NewEntity;

public interface NewRepository extends JpaRepository<NewEntity, Long> {
	
}
