Vue.use(window.vuelidate.default);
const { required, minLength } = window.validators;

let vm = new Vue({
    el: '#signup-form',
    data: {
        first_name: '',
        last_name: '',
        middle_name: '',
    },
    methods: {
        submitHandler: function (e) {
            e.preventDefault();
        },
        status(validation) {
            return {
              error: validation.$error,
            dirty: validation.$dirty
          }
        }
    },
    computed: {},
    validations: {
        last_name: {
            required,
            minLength: minLength(2),
        },
        first_name: {
            required,
            minLength: minLength(2),
        },

    },
});