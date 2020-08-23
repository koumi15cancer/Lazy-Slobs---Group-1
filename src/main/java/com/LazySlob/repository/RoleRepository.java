package com.LazySlob.repository;

import com.LazySlob.model.Role;
import com.LazySlob.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends  JpaRepository<Role,Long> {
    Optional<Role> findByName(RoleName roleName);
}
