package com.lazyslob.service.impl;

import com.lazyslob.service.HomeService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HomeServiceImpl implements HomeService {
    @Override
    public List<String> loadMenu() {
        List<String> menus = new ArrayList<>();
        menus.add("blog java ");
        menus.add("huong dan hoc javaweb ");
        return menus;
    }
}
