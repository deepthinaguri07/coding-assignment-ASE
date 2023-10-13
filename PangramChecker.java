import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        
        boolean[] letterPresent = new boolean[26];

        for (char c : input.toLowerCase().toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                letterPresent[index] = true;
            }
        }

        boolean isPangram = true;
        for (boolean present : letterPresent) {
            if (!present) {
                isPangram = false;
                break;
            }
        }

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
