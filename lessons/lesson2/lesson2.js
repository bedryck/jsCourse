
const lesson2 = () => {
    class EmailParser {
        constructor(email) {
            this.email = email;

            Object.defineProperty(this, 'name', {
                get: function () {
                    return this.isCorrect ? this.email.replace(/@.+/igm, '') : null;
                }
            })

            // Proxy()
        }

        get isCorrect() {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm.test(this.email);
        }

        get domain() {
            return this.isCorrect ? this.email.replace(/(.*?)@/igm, '') : null;
        }

    }

    const watchObj = (obj, func) => {
        // eslint-disable-next-line no-undef
        return new Proxy(obj, {

            get: (target, prop) => {
                func(prop);

                return target[prop];

            },

            set: (target, prop, val, receiver) => {
                // console.log(target, prop, val, receiver, this)
                func(prop, val)
                // if (prop.split('.').length == 2) {
                //     console.log(prop);
                //     return false;
                // } else {
                //     target[prop] = val;

                //     return true;
                // }
                target[prop] = val;

                return true;
            },

        }

        )
    }

    window.addEventListener('load', () => {

        let div = document.createElement('div');
        document.body.appendChild(div);

        let cleverDiv = watchObj(div, function (prop, val) {
            console.log(prop, val);
        });

        cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
        // console.log(cleverDiv.style);
        cleverDiv.style.color = 'red';

















































    })





    const parser = new EmailParser('test@test.com');
    // console.log(parser);
    // console.log(parser.name);
    // console.log(parser.isCorrect);
    // console.log(parser.domain);





}
export default lesson2;