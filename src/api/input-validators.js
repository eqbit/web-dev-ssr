const validateName = name => {
  if (name) {
    return name.length > 1;
  }
  
  return false;
};

const validatePhone = phone => {
  if (phone) {
    let letters = /^[^a-zA-Z]+$/;
    
    if (letters.test(phone)) {
      return phone.replace(/\D/g, '').length > 10;
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

const validateEmail = email => {
  if (email && email.length > 3) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  return false;
};

export {
  validateName,
  validatePhone,
  validateSite,
  validateEmail
};