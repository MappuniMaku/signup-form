Vue.config.devtools = true;

Vue.use(window.vuelidate.default);

const { required, minLength, maxLength, numeric, between, helpers } = window.validators;
const isName = helpers.regex('isName', /^[a-zA-Zа-яА-ЯёЁ\-\s]*$/);
const isBirthDate = helpers.regex('isBirthDate', /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g);
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
    },
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
                error: validation.$error,
                dirty: validation.$dirty
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
            isBirthDate
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
        }
    }
});