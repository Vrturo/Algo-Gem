Statically Typed vs Dynamically Typed

    Static/Dynamic typing is about when type information is aquired (Either at compiletime or at runtime)

    - What is Statically Typed??

        A language is statically typed if the type of a variable is known at compile time.
        For some languages this means that you as the programmer must specify what type each variable is
        (e.g.: Java, C, C++);


    - What is Dynamically Typed??

        Some languages offer some form of type inference, the capability of the type system to deduce the type of a variable
        (e.g.: OCaml, Haskell, Scala, Javascript)

        A language is dynamically typed if the type is associated with run-time values,
        and not named variables/fields/etc. This means that you as a programmer can write a little quicker because
        you do not have to specify types every time (unless using a statically-typed language with type inference).
        Example: Perl, Ruby, Python


    In a statically typed language the type is static, meaning once you set a variable to a type, you CANNOT change it.
    That is because typing is associated with the variable rather than the value it refers to.

    For example in Java:

        String str = "Hello";  //statically typed as string
        str = 5;   //would throw an error since java is statically typed
        Whereas in a dynamically typed language the type is dynamic, meaning after you set a variable to a type,
        you CAN change it. That is because typing is associated with the value rather than the variable.

    For example in Python:

        str = "Hello" # it is a string
        str = 5       # now it is an integer; perfectly OK
        On the other hand, the strong/weak typing in a language is related to implicit type conversions
        (partly taken from @Dario's answer):

    For example in Python:

        str = 5 + "hello"
        # would throw an error since it does not want to cast one type to the other implicitly.
        whereas in PHP:

        $str = 5 + "hello"; // equals 5 because "hello" is implicitly casted to 0
        // PHP is weakly typed, thus is a very forgiving language.
        Static typing allows for checking type correctness at compile time.
        Statically typed languages are usually compiled, and dynamically typed languages are interpreted.
        Therefore, dynamicly typed languages can check typing at run time.


    The main advantage here is that all kinds of checking can be done by the compiler,
    and therefore a lot of trivial bugs are caught at a very early stage.

    Most scripting languages have this feature as there is no compiler to do static type-checking anyway,
    but you may find yourself searching for a bug that is due to the interpreter misinterpreting the type of a variable.
    Luckily, scripts tend to be small so bugs have not so many places to hide.

    Most dynamically typed languages do allow you to provide type information, but do not require it.
    One language that is currently being developed (Rascal) takes a hybrid approach allowing dynamic typing within
    functions but enforcing static typing for the function signature.
