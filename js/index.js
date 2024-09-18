import { userData, saveUserData } from './userData';
document.querySelector('.user-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector('.user-name').value;
  const email = document.querySelector('.user-email').value;
  const message = document.querySelector('.user-message').value;
    if( name.value =="" && email.value ==""){
        alert("Заповніть необхідні поля!")
    }
    else{
        alert("Ваше повідомлення було успішно відправленно!")
    }
  saveUserData({ name, email, message });
  console.log('Form Data:', userData);
}); 