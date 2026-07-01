package net.javaguides;

public class CustomerService {

    private CustomerRepository repository;

    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public void displayCustomer() {
        System.out.println(repository.getCustomer());
    }
}