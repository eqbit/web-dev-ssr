const validateName = name => {
  if (name) {
    return name.length > 1;
  }
  
  return false;
};

const validatePhone = phone => {
  if (phone) {
    let letters = /^[^a-zA-Z]+$/;
    console.log(letters.test(phone))
    if(letters.test(phone)) {
      return phone.replace(/\D/g, '').length > 10
    }
  }
  
  return false;
};

export {validateName, validatePhone};