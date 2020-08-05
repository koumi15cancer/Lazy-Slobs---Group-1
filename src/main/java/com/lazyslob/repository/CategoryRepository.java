package com.lazyslob.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lazyslob.entity.CategoryEntity;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {
	CategoryEntity findOneByCode(String code);
}
