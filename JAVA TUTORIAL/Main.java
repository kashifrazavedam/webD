import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner scn=new Scanner(System.in);
        int a=scn.nextInt();
        int b=scn.nextInt();
        int choice=scn.nextInt();
        int operation1=a+b;
        int operation2=a-b;
        int operation3=a * b;
        int operation4=a / b;
        int operation5=a % b;

        switch(choice){
            case 1:System.out.println(operation1);
            break;
            case 2:System.out.println(operation2);
            break;
            case 3:System.out.println(operation3);
            break;
            case 4:System.out.println(operation4);
            break;
            case 5:System.out.println(operation1);
            break;




        }

        
    }
}