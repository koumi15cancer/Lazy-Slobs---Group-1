package test;


import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import model.Student;
import org.junit.Assert;
import org.junit.Test;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

public class MyTest {

    @Test
    public void test1() throws IOException {

        try{
	        URL url = new URL(TestConfig.URL+"students");
	        HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
	        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
	        String line = "";
	        StringBuilder stringBuilder = new StringBuilder();
	
	        while((line = bufferedReader.readLine()) !=null){
	            stringBuilder.append(line);
	        }
	
	        Gson gson = new Gson();
	        String json = stringBuilder.toString();
	        List<Student> students = gson.fromJson(json, new TypeToken<List<Student>>(){}.getType());
	        //String s = stringBuilder.toString();
	        Assert.assertEquals(students.get(0).getName(), "Thanh");
	        
	    } catch (MalformedURLException e) {
	        e.printStackTrace();
	    } catch (IOException e) {
	        e.printStackTrace();
    }
}

}
