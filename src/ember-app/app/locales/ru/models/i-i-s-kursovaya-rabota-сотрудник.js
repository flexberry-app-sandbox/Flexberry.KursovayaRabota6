export default {
  projections: {
    СотрудникE: {
      кодСотрудника: {
        __caption__: 'ID сотрудника'
      },
      фИО: {
        __caption__: 'ФИО'
      },
      данныеПаспорта: {
        __caption__: 'Серия и номер паспорта'
      },
      телефон: {
        __caption__: 'Телефон'
      },
      должности: {
        __caption__: 'Должность'
      }
    },
    СотрудникL: {
      кодСотрудника: {
        __caption__: 'ID сотрудника'
      },
      фИО: {
        __caption__: 'ФИО'
      },
      должности: {
        __caption__: 'Должность',
        должность: {
          __caption__: 'Должность'
        }
      },
      данныеПаспорта: {
        __caption__: 'Серия и номер паспорта'
      },
      телефон: {
        __caption__: 'Телефон'
      }
    }
  },
  validations: {
    данныеПаспорта: {
      __caption__: 'Серия и номер паспорта'
    },
    кодСотрудника: {
      __caption__: 'ID сотрудника'
    },
    телефон: {
      __caption__: 'Телефон'
    },
    фИО: {
      __caption__: 'ФИО'
    },
    должности: {
      __caption__: 'Должность'
    }
  }
};
