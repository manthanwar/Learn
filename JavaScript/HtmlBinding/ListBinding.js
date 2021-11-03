class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = [
            'item 11',
            'item 21',
            'item 31'

        ];
    }


    // make <li>text</li> element/tag
    static createListItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }



    clean() {
        // remove all <li> tags
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

    }


    update() {
        this.clean();

        // fill <ul>/<ol> with <li>
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }

    }


    add(text) {
        this.textList.push(text);
        this.update();
    }

    remove(index) {
        this.textList.splice(index, 1);
        this.update();
    }

    removeMany(index, number) {
        this.textList.splice(index, number);
        this.update();
    }
}