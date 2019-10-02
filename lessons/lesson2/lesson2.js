
const lesson2 = () => {
    class EmailParser {
        constructor(email) {
            this.email = email;

            Object.defineProperty(this, 'name', {
                get: function () {
                    return  this.isCorrect ? this.email.replace(/@.+/igm, '') : null;
                }
            })
        }

        get isCorrect(){
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm.test(this.email);
        }

        get domain(){
            return this.isCorrect ? this.email.replace(/(.*?)@/igm, '') : null;
        }

    }




    const parser = new EmailParser('test@test.com');
    console.log(parser);
    console.log(parser.name);
    console.log(parser.isCorrect);
    console.log(parser.domain);
}
export default lesson2;