public class solution {

// Function for making momo
public static void printCountToZero(int n ){
    //base statement 
    if(n<0)return;
    
    System.out.println(n);
    printCountToZero(n-1);
}
//4 3 2 1 0
public static void main(String[] args) {
    printCountToZero(4);
}
}