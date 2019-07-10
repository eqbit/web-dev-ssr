import {Modal} from '../modal';

const inputs = [
  {
    name: 'name',
    placeholder: 'Имя',
    required: true
  },
  {
    name: 'phone',
    placeholder: 'Телефон',
    required: true,
    inputmask: '+7(999)999-99-99'
  },
  {
    name: 'email',
    placeholder: 'E-mail',
    required: true
  },
  {
    name: 'site',
    placeholder: 'Сайт',
    required: true
  }
]

const ModalAudit = props => (
  <Modal inputs={inputs}
         title='Заказать аудит'
         handleClose={props.handleClose}
  />
);

export {ModalAudit}