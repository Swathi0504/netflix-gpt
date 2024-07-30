export const validateData = (email,password) =>{
   // console.log(email);
    const isEmailValid =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) {
        return "Please enter a valid email id."
    }

    if(!isPasswordValid) {
        return "Please enter a valid password"
    }


    return null;
}