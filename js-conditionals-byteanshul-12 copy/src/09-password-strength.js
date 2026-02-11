/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  let pass = "weak";
  if(!password){
    return "weak"
  }
  
  
 

  //Strong pass checker 
 else if( password.length >= 8 && 
   /[A-Z]/.test(password) && 
   /[a-z]/.test(password) && 
   /\d/.test(password) && 
   /[^A-Za-z0-9]/.test(password)){
   pass = "very strong"
 }


   else if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password)
  ) {
    pass = "strong";
  }

else if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  ) {
    pass = "strong";
  }

  
  
  

  else if ((/[a-z]/.test(password)) &&
            /[^A-Za-z0-9]/.test(password) && /\d/.test(password) ){
              pass = "medium"
            }


else if (password.length < 8 ){
    pass = "weak"
  }
else if (
    password.length >= 8 &&
    (/[A-Z]/.test(password) || /[a-z]/.test(password))
  ) {
    pass = "medium";
  
}

return pass;
}
console.log(checkPasswordStrength("fa2?4l"))

