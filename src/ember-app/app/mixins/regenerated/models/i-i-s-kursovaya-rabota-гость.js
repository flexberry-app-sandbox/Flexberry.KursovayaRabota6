import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  данныеПаспорта: DS.attr('number'),
  датаРождения: DS.attr('date'),
  почта: DS.attr('string'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  карта: DS.belongsTo('i-i-s-kursovaya-rabota-карта', { inverse: null, async: false })
});

export let ValidationRules = {
  данныеПаспорта: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.данныеПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаРождения: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  карта: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостьE', 'i-i-s-kursovaya-rabota-гость', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    данныеПаспорта: attr('Серия и номер паспорта', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    почта: attr('E-mail', { index: 4 }),
    карта: belongsTo('i-i-s-kursovaya-rabota-карта', 'Карта', {

    }, { index: 5, displayMemberPath: 'номерКарты' })
  });

  modelClass.defineProjection('ГостьL', 'i-i-s-kursovaya-rabota-гость', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    данныеПаспорта: attr('Серия и номер паспорта', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    почта: attr('E-mail', { index: 4 }),
    карта: belongsTo('i-i-s-kursovaya-rabota-карта', 'Карта', {
      номерКарты: attr('Карта', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
