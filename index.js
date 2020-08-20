Vue.config.devtools = true;

Vue.use(window.vuelidate.default);

const { required, minLength, maxLength, numeric, between, helpers } = window.validators;
const isName = helpers.regex('isName', /^[a-zA-Zа-яА-ЯёЁ\-\s]*$/);
const isDate = helpers.regex('isDate', /^(3[01]|[12][0-9]|0[1-9])\.(1[012]|0[1-9])\.((19|20)\d{2})$/g);
const firstLetterIsUppercase = (value) => {
    if (!value) {
        return true;
    };
    let string = value;
    string.split('');
    return string[0] === string[0].toUpperCase();
};
const firstNumberIsSeven = (value) => {
    if (!value) {
        return true;
    };
    let stringNumber = value;
    stringNumber.toString().split();
    return stringNumber[0] === '7';
};
const phoneIsCorrect = helpers.regex('phoneIsCorrect', /^[7][0-9]{10}$/g);
const isBirthCertificateSeries = helpers.regex('isBirthCertificateSeries', /^[ivxIVX]{1,3}\-[а-яА-ЯёЁ]{2}$/g);

// ===========================================================================================================================

let vm = new Vue({
    el: '#signup-form',
    data: {
        first_name: '',
        last_name: '',
        middle_name: '',
        birth_date: '',
        phone_number: '',
        gender: 'male',
        client_group: [],
        doctor_name: '',
        get_sms_notifications: '',
        postal_code: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house_number: '',
        document_type: '',
        document_series: '',
        birth_certificate_series: '',
        document_number: '',
        document_issuer: '',
        document_date: '',
    },
    // computed: {
    //     document_series_validators: {
    //         get: function () {
    //             if (this.document_type === 'birth_certificate') {
    //                 return {

    //                 };
    //             } else return {
    //                 numeric,
    //                 minLength: minLength(4),
    //                 maxLength: maxLength(4),
    //             };
    //         }

    //     }
    // },
    methods: {
        checkForm: function (e) {
            if (this.$v.$invalid) {
                e.preventDefault();
                this.$v.$touch();
                return;
            } else {
                alert('Пользователь успешно создан!');
            };
        },
        status(validation) {
            return {
                'error': validation.$error,
                'dirty': validation.$dirty
            }
        }
    },
    validations: {
        last_name: {
            required,
            isName,
            minLength: minLength(2),
            firstLetterIsUppercase
        },
        first_name: {
            required,
            isName,
            minLength: minLength(2),
            firstLetterIsUppercase
        },
        middle_name: {
            isName,
            minLength: minLength(3),
            firstLetterIsUppercase
        },
        birth_date: {
            required,
            isDate
        },
        phone_number: {
            required,
            numeric,
            firstNumberIsSeven,
            phoneIsCorrect
        },
        client_group: {
            required
        },
        doctor_name: {
            
        },
        postal_code: {
            numeric,
            minLength: minLength(5),
            maxLength: maxLength(6)
        },
        country: {
            isName,
            minLength: minLength(3),
            firstLetterIsUppercase
        },
        region: {
            isName,
            minLength: minLength(6),
            firstLetterIsUppercase
        },
        city: {
            required,
            isName,
            minLength: minLength(2),
            firstLetterIsUppercase
        },
        street: {
            isName,
            minLength: minLength(2),
            firstLetterIsUppercase
        },
        house_number: {},
        document_type: {
            required
        },
        document_series: {
            numeric,
            minLength: minLength(4),
            maxLength: maxLength(4)
        },
        birth_certificate_series: {
            isBirthCertificateSeries
        },
        document_number: {
            numeric,
            minLength: minLength(6),
            maxLength: maxLength(6)
        },
        document_issuer: {
            
        },
        document_date: {
            required,
            isDate
        }
    }
});