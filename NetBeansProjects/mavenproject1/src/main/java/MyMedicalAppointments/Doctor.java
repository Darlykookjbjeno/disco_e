public class Doctor{

    int id;
    String name;
    String speciality;
    
    Doctor(){
    System.out.println("construyendo el objeto");
    }
    Doctor(String name){
    System.out.println("El nombre del doctor asignado es");
    }
    public void showName(){
      System.out.println(name);
    
    }
    

}