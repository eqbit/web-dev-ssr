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
  }
]

const ModalRecall = props => (
  <Modal inputs={inputs}
         title='Заказать обратный звонок'
         handleClose={props.handleClose}
  />
);

export {ModalRecall}