import {Modal} from '../modal';
import {validateName, validatePhone, validateEmail} from '../../../api/input-validators';

const inputs = [
  {
    name: 'name',
    placeholder: 'Имя*',
    required: true,
    validate: validateName
  },
  {
    name: 'phone',
    placeholder: 'Телефон*',
    required: true,
    inputmask: '+7(999)999-99-99',
    validate: validatePhone
  },
  {
    name: 'email',
    placeholder: 'E-mail*',
    required: true,
    validate: validateEmail
  }
]

const ModalRecall = props => (
  <Modal inputs={inputs}
         title='Заказать обратный звонок'
         handleClose={props.handleClose}
  />
);

export {ModalRecall}