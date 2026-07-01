package Algorithms_Data_Structures.Exercise2_EcommercePlatformSearchFunction;

import java.util.ArrayList;

class Product {

    int productId;
    String productName;

    Product(int productId, String productName) {
        this.productId = productId;
        this.productName = productName;
    }
}

public class Main {

    public static Product linearSearch(ArrayList<Product> products, String name) {

        for (Product p : products) {

            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        ArrayList<Product> products = new ArrayList<>();

        products.add(new Product(1, "Laptop"));
        products.add(new Product(2, "Mobile"));
        products.add(new Product(3, "Camera"));

        Product result = linearSearch(products, "Mobile");

        if (result != null) {

            System.out.println("Product Found");
            System.out.println("ID: " + result.productId);
            System.out.println("Name: " + result.productName);

        } else {

            System.out.println("Product Not Found");
        }
    }
}