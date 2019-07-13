const validateName = name => {
  if (name) {
    return name.length > 1;
  }
  
  return false;
};

const validatePhone = phone => {
  if (phone) {
    let letters = /^[^a-zA-Z]+$/;
    
    if(letters.test(phone)) {
      return phone.replace(/\D/g, '').length > 10
    }
  }
  
  return false;
};

const validateSite = site => {
  if (site) {
    return site.length > 3;
  }
  
  return false;
};

export {validateName, validatePhone, validateSite};