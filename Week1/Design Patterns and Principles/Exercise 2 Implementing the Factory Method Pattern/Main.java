package Design_Patterns_and_Principles.Exercise2_FactoryMethodPattern;

public class Main {

    public static void main(String[] args) {

        Document document =
                DocumentFactory.getDocument("pdf");

        document.open();
    }
}