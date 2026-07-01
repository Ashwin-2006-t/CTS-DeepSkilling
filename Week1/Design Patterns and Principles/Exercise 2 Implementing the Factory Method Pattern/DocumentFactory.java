package Design_Patterns_and_Principles.Exercise2_FactoryMethodPattern;

public class DocumentFactory {

    public static Document getDocument(String type) {

        if (type.equalsIgnoreCase("word"))
            return new WordDocument();

        if (type.equalsIgnoreCase("pdf"))
            return new PdfDocument();

        if (type.equalsIgnoreCase("excel"))
            return new ExcelDocument();

        return null;
    }
}