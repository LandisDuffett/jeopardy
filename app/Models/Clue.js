export default class Clue {
    constructor(data) {
        this.id = data.id
        this.question = data.answer
        this.answer = data.question
        this.category = data.category.title
    }

    get Template() {
        let template =
            `<div class="thecard">
            <div class="thefront">
                <h3>Category: ${this.category} </h3>
                <h1>Hint: ${this.answer} </h1>
                <p>
                </p>
            </div>
            <div class="theback">
                <h1>Answer: ${this.question}</h1>
            </div>

        </div>`

        return template
    }


}