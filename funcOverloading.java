public class Kitchen {

    // Function for making momo
    public static void kitchen(
        String water, 
        String component) 
        {
            String com = water + component;
            System.out.println(com + "momo is made");
    }

    // Function for making modak
    public static void kitchen(
         String water,
         String component, 
         String sugar) 
        {
        String com = water + component + sugar;
        System.out.println(com + "modak is made");
    }

    public static void main(String[] args) {
        // Calling the momo-making function
        kitchen("water ", "maida ");

        // Calling the modak-making function
        kitchen("water ", "besan ", "sugar ");
    }
}