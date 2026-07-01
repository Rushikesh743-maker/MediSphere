import java.util.Scanner;

public class LinearSearch {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int[] numbers = {12, 25, 18, 40, 35, 50};

        System.out.print("Enter number to search: ");
        int key = sc.nextInt();

        boolean found = false;

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] == key) {

                System.out.println("Element found at position " + (i + 1));
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Element not found.");
        }
    }
}
