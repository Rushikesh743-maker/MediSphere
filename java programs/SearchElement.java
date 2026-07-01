import java.util.Scanner;

public class SearchElement {

    public static void main(String[] args) {

        int[] arr = {12, 25, 30, 45, 60};

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter element to search: ");
        int key = sc.nextInt();

        boolean found = false;

        for (int num : arr) {
            if (num == key) {
                found = true;
                break;
            }
        }

        if (found)
            System.out.println("Element Found");
        else
            System.out.println("Element Not Found");
    }
}
