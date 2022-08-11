package com.ssafy.backend.db.repository;

import com.ssafy.backend.db.entity.ApplicantState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicantStateRepository extends JpaRepository<ApplicantState,Long> {
}
