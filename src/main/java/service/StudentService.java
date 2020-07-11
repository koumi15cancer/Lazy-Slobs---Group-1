package service;

import model.Student;
import model.Teacher;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by CoT on 10/14/17.
 */
@Transactional
@Service
public class StudentService {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void saveStudent(Student student){
        sessionFactory.getCurrentSession().save(student);
    }

    public Student getStudent(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Student where id=:id");
        query.setInteger("id", id);
        return (Student) query.uniqueResult();
    }


    public List<Student> getAllStudents(){
        Query query = sessionFactory.getCurrentSession().createQuery("from Student");
        return query.list();
    }

    public List<Student> findStudents(String name){
       Query query = sessionFactory.getCurrentSession().createQuery("from Student s where s.name like :name");
       query.setString("name", "%"+name+"%");
       return query.list();
    }


    public void deleteStudent(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Student where id=:id");
        query.setInteger("id", id);
        Student student = (Student) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(student);
    }

}
