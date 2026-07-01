public class BubbleSort {

    public static void main(String[] args) {

        int[] numbers = {25, 18, 12, 40, 5};

        for (int i = 0; i < numbers.length - 1; i++) {

            for (int j = 0; j < numbers.length - i - 1; j++) {

                if (numbers[j] > numbers[j + 1]) {

                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }

        System.out.println("Sorted Array:");

        for (int num : numbers) {
            System.out.print(num + " ");
        }
    }
}
