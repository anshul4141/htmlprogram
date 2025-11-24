class AgeError extends Error{
    constructor(age){
        super("Invalid Age:"+age)
    }
}