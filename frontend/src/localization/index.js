import { createI18n } from 'vue-i18n'

export default createI18n({
  locale: 'ru',
  messages: {
    ru: {
      agentType: 'Тип контрагента',
      address: 'Адрес',
      name: 'Наименование',
      inn: 'ИНН',
      bill: 'Расчетный счет',
      phone: 'Телефон',
      email: 'Электронная почта',
      number: 'Номер',
      issueDate: 'Дата оформления',
      ttnNumber: 'Номер ТТН',
      utilizator: 'Утилизатор',
      actOfUtil: 'Номер акта утилизации',
      shippingDate: 'Дата отгрузки',
      ttnType: 'Тип ТТН',
      ttnForm: 'Форма ТТН',
      ttnOrder: 'Номер ТТН заказа',
      ttnReturn: 'Номер ТТН возврата',
      returnDate: 'Дата возврата',
      actOfReturn: 'Номер акта возврата',
      validations: {
        required: 'Поле обязательно к заполнению',
        email: 'Поле должно соответствовать электронной почте',
        numeric: 'Поле должно содержать только числа',
        maxLength: 'Кол-во символов должно быть менее {max}',
        minLength: 'Кол-во символов должно быть более {min}',
        phone: 'Поле не соотвествует формату телефона'
      }
    }
  }
})
