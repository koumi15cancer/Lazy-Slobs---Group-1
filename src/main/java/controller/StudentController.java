package controller;

import model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.StudentService;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@RequestMapping(path = "/")
public class StudentController {

    @Autowired
    private StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @RequestMapping(path = "students", method = RequestMethod.GET)
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @RequestMapping(path = "students", method = RequestMethod.POST)
    public void saveStudent(@RequestBody Student student){
        studentService.saveStudent(student);
    }


    @RequestMapping(path = "students/{id}", method = RequestMethod.DELETE)
    public void saveStudent(@PathVariable int id){
        studentService.deleteStudent(id);
    }


}
