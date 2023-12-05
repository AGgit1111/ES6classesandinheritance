/* ES6 Classes and Inheritance
    - ES6 introduced a 'class' syntax that simplifies the creation of constructor functions
      and prototypes. Classes provide a much clearer and more concise syntax for creating
      objects and dealing with inheritance.
    - Under the hood, ES6 classes are syntactical sugar over JavaScript's existing
      prototype-based inheritance. */
// Example:
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the super class constructor (see explanation below)
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name}, the ${this.breed}, barks.`);
    }
}

const dog = new Dog('Barkface', 'Frenchie');
dog.speak();

const dog1 = new Dog('Flam', 'Giggadoodle');
dog1.speak();

/* The 'super' keyword in JavaScript is used in class constructors to call and access functions
   on an object's parent class. It serves two main purposes:
    - To Call the Parent Class Constructor: In a subclass constructor, super() is used to call
      the constructor of its parent class. This is necessary to ensure that the parent class is
      correctly initialized before the subclass adds or modifies properties. If you define a
      constructor within a subclass, you must call super() before using this.
    - To Access Parent Class Methods: The super keyword can also be used to call functions on the
      parent class.

   Using super in Constructors:
   When you extend a class in JavaScript (create a subclass), the subclass inherits all properties
   and methods from the parent class. If you define a constructor in the subclass, you need to call
   super() within it. This call to super() will execute the constructor of the parent class, allowing
   the subclass to inherit and add to the parent class's properties.

   In the above example:
    - Animal is the parent class with a constructor that initializes the name property.
    - Dog is a subclass of Animal. It has its own constructor, where super(name) is called.
      This call ensures that the name property is properly set up from the Animal class before
      the Dog class adds the breed property.
    - The Dog class can also have its own methods (like speak), or it can override methods of
      the Animal class.

   The use of super ensures that the inheritance chain is properly maintained and that the subclass
   behaves as expected, augmenting or modifying the behavior of the parent class. */