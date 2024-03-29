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
      art: 'Артикул',
      manufacture: 'Производитель',
      type: 'Тип товара',
      category: 'Категория',
      subcategory: 'Подкатегория',
      packageType: 'Вид упаковки',
      packageNum: 'Кол-во в упаковке',
      stockNum: 'Кол-во на складе',
      pricePerUnit: 'Цена за единицу',
      minOrder: 'Минимальный заказ',
      weight: 'Вес',
      height: 'Высота',
      width: 'Ширина',
      length: 'Длина',
      description: 'Описание',
      supplier: 'Поставщик',
      tc: 'ТК',
      ttn: 'Номер ТТН',
      paymentDoc: 'Номер платежного докумена',
      supplyCost: 'Стоимость поставки',
      supplyDate: 'Дата поставки',
      extra: 'Примечание',
      count: 'Кол-во',
      accept: 'Принято',
      client: 'Клиент',
      orderCost: 'Стоимость заказа',
      orderDate: 'Дата заказа',
      deliveryDate: 'Дата доставки',
      reason: 'Причина',
      employee: 'Сотрудник',
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
