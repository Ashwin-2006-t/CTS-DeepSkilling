package net.javaguides;

public class Driver {

    private Car car;

    public void setCar(Car car) {
        this.car = car;
    }

    public void driveCar() {
        car.drive();
    }
}