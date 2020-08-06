package controller;

import model.Product;
import model.Receipt;
import model.ReceiptDetail;
import model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.AllService;
import service.StudentService;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@RequestMapping(path = "/")
public class AllController {

    @Autowired
    private AllService allService;

    @RequestMapping(path = "products", method = RequestMethod.POST)
    public Product addProduct(@RequestBody Product product){
        return allService.saveProduct(product);
    }

    @RequestMapping(path = "receipts", method = RequestMethod.POST)
    public Receipt addReceipt(@RequestBody Receipt receipt){
        return allService.saveReceipt(receipt);
    }

    @RequestMapping(path = "receiptDetails", method = RequestMethod.POST)
    public ReceiptDetail addReceipt(@RequestBody ReceiptDetail receiptDetail){
        return allService.saveReceiptDetail(receiptDetail);
    }



}
