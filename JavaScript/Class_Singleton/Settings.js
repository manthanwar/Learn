class Settings {
    constructor() {

        this.settingObject = {
            'background': '#ff0000',
            'version': Math.floor(Math.random() * 4000)
        };


        Object.freeze(this.settingObject);
    }


    get(key) {
        return this.settingObject[key];
    }

}