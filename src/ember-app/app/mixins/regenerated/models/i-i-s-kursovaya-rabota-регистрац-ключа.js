import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  срокДействия: DS.attr('date'),
  карта: DS.belongsTo('i-i-s-kursovaya-rabota-карта', { inverse: null, async: false }),
  комната: DS.belongsTo('i-i-s-kursovaya-rabota-комната', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-kursovaya-rabota-сотрудник', { inverse: null, async: false }),
  считыватель: DS.belongsTo('i-i-s-kursovaya-rabota-считыватель', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-регистрац-ключа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  срокДействия: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-регистрац-ключа.validations.срокДействия.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  карта: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-регистрац-ключа.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-регистрац-ключа.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-регистрац-ключа.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  считыватель: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-регистрац-ключа.validations.считыватель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрацКлючаE', 'i-i-s-kursovaya-rabota-регистрац-ключа', {
    дата: attr('Дата', { index: 0 }),
    срокДействия: attr('Карта действует до:', { index: 4 }),
    комната: belongsTo('i-i-s-kursovaya-rabota-комната', 'Номер комната', {

    }, { index: 1, displayMemberPath: 'номерКомнаты' }),
    карта: belongsTo('i-i-s-kursovaya-rabota-карта', 'Номер карты', {

    }, { index: 2, displayMemberPath: 'номерКарты' }),
    считыватель: belongsTo('i-i-s-kursovaya-rabota-считыватель', 'Уникальный код', {

    }, { index: 3, displayMemberPath: 'уникальныйКод' }),
    сотрудник: belongsTo('i-i-s-kursovaya-rabota-сотрудник', 'Ответственный', {

    }, { index: 5, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('РегистрацКлючаL', 'i-i-s-kursovaya-rabota-регистрац-ключа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-kursovaya-rabota-комната', 'Номер комнаты', {
      номерКомнаты: attr('Номер комнаты', { index: 1 })
    }, { index: -1, hidden: true }),
    карта: belongsTo('i-i-s-kursovaya-rabota-карта', 'Номер карты', {
      номерКарты: attr('Номер карты', { index: 2 })
    }, { index: -1, hidden: true }),
    считыватель: belongsTo('i-i-s-kursovaya-rabota-считыватель', 'Уникальный код', {
      уникальныйКод: attr('Уникальный код', { index: 3 })
    }, { index: -1, hidden: true }),
    срокДействия: attr('Карта действует до:', { index: 4 }),
    сотрудник: belongsTo('i-i-s-kursovaya-rabota-сотрудник', 'Ответственный', {
      фИО: attr('Ответственный', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
