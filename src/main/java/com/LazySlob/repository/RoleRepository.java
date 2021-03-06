package com.LazySlob.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.LazySlob.models.ERole;
import com.LazySlob.models.Role;
// Repository to find role type
@Repository
public interface RoleRepository extends  JpaRepository<Role,Long> {
    Optional<Role> findByName(ERole name);
}
