export const userData = {
   name: '',
   email: '',
   message: ''
 };
 
 export const saveUserData = (data) => {
   userData.name = data.name;
   userData.email = data.email;
   userData.message = data.message;
 };