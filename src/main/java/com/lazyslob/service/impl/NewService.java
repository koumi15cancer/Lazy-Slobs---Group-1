package com.lazyslob.service.impl;

import com.lazyslob.dao.INewDAO;
import com.lazyslob.model.NewModel;
import com.lazyslob.service.INewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NewService implements INewService {
    @Autowired
    private INewDAO newDao;

    @Override
    public List<NewModel> findAll() {
        return newDao.findAll();
    }
}
