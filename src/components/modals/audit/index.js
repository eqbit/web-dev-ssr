import {Modal} from '../modal';
import {validateName, validatePhone, validateSite} from '../../../api/input-validators';

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
    required: true
  },
  {
    name: 'site',
    placeholder: 'Сайт*',
    required: true,
    validate: validateSite
  }
];

const ModalAudit = props => (
  <Modal inputs={inputs}
         title='Заказать аудит'
         handleClose={props.handleClose}
  />
);

export {ModalAudit}