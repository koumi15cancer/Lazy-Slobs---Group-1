package com.lazyslob.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.lazyslob.dao.INewDAO;
import com.lazyslob.mapper.NewMapper;
import com.lazyslob.model.NewModel;

@Repository
public class NewDAO extends AbstractDAO<NewModel> implements INewDAO {
	
	@Override
	public List<NewModel> findAll() {
		StringBuilder sql = new StringBuilder("SELECT * FROM news");
		return query(sql.toString(), new NewMapper());
	}
}
