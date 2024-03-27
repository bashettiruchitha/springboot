// //factory method

// public abstract class Resturant{
//     public Burger orderBurger(String request){
//         Burger burger= null;
//         if('BFF'.equals(request)){
//             burger =new BeefBurger();
//         }else if("VEGGEIE".equals(request)){
//             burger new= VeggieBurger();
//         }
//         burger.prepare();
//         return burger;
//     }
//     public abstract Burger createBurger();
// }
// public class BeefBurger extends Resturant{//SUB CLASS
//     @override
//     public Burger createBurger(){
//         return new BeefBurger();
//     }
// }
// public class VeggieBurger extends Resturant{
//     @override
//     public Burger createBurger(){
//         return new VeggieBurger();
//     }
// }
// public static void main(String args[])

// {
//     Resturant beefrepo= new BeefBurgerResturant();
//     Burger BeefBurger=beefrepo.orderBurger(null);

//     Resturant VeggieBurgerrepo = new VeggieBurgerResturant();
//     Burger VeggieBurger=VeggieBurgerrepo.orderBurger(null)


// }