package Design_Patterns_and_Principles.Exercise2_FactoryMethodPattern;

public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Excel Document");
    }
}