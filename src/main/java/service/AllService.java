package service;

import model.*;
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
public class AllService {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public Product saveProduct(Product product){
        sessionFactory.getCurrentSession().save(product);
        return product;
    }


    public Receipt saveReceipt(Receipt receipt){

        for(ReceiptDetail rd: receipt.getReceiptDetails()){
            rd.setReceipt(receipt);
        }

        sessionFactory.getCurrentSession().save(receipt);


        return receipt;
    }


    public ReceiptDetail saveReceiptDetail(ReceiptDetail receiptDetail){
        sessionFactory.getCurrentSession().save(receiptDetail);
        return receiptDetail;
    }

}
