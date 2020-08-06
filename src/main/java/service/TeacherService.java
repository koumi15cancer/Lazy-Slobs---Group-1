package service;

import model.Teacher;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class TeacherService {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void saveTeacher(Teacher teacher){
        sessionFactory.getCurrentSession().save(teacher);
    }

    public Teacher getTeacher(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Teacher where id=:id");
        query.setInteger("id", id);
        return (Teacher) query.uniqueResult();
    }


    public List<Teacher> getAllTeachers(){
        Query query = sessionFactory.getCurrentSession().createQuery("from Teacher");
        return query.list();
    }

    public List<Teacher> findTeachers(String name){
       Query query = sessionFactory.getCurrentSession().createQuery("from Teacher s where s.name like :name");
       query.setString("name", "%"+name+"%");
       return query.list();
    }


    public void deleteTeacher(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Teacher where id=:id");
        query.setInteger("id", id);
        Teacher teacher = (Teacher) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(teacher);
    }

}
