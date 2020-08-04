package com.lazyslob.dao;

import java.util.List;

import com.lazyslob.model.NewModel;

public interface INewDAO extends GenericDAO<NewModel> {
	List<NewModel> findAll();
}
