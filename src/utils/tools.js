const verification=({email,password,repeatPassword},isRepeateActive)=>{
    let noErrors=true
    const errors={
        email:null,
        password:null,
        repeatPassword: null,
    }
    if (!email.includes('@')||email.length<6){
        noErrors=false;
        errors.email='the email should be valid an at least 6 characters long'
    }
    if (password.length===0){
        noErrors=false;
        errors.password="this field can't be empty"
    }
    if (password.length===0) {
        noErrors = false;
        errors.repeatPassword = "this field can't be empty"
    }
    if (password!==repeatPassword&&!isRepeateActive){
        noErrors = false;
        errors.repeatPassword="passwords should be matching"
    }
   if (noErrors){
       return [true,errors]
   }else{
       return [false,errors]
   }
}

export {verification}