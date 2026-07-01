package Algorithms_Data_Structures.Exercise7_FinancialForecasting;

public class Main {

    public static void main(String[] args) {

        double initialAmount = 10000;
        double growthRate = 0.10;
        int years = 5;

        double[] forecast = new double[years + 1];

        forecast[0] = initialAmount;

        for (int i = 1; i <= years; i++) {
            forecast[i] = forecast[i - 1] * (1 + growthRate);
        }

        for (int i = 0; i <= years; i++) {
            System.out.println("Year " + i + ": " + forecast[i]);
        }
    }
}