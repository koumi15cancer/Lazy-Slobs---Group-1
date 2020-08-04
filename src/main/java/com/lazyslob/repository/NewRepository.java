package com.lazyslob.repository;

import com.lazyslob.entity.NewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewRepository extends JpaRepository<NewEntity, Long> {
	
}
