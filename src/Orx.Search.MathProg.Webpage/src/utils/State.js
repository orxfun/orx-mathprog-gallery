export default class State {
    constructor(valueAndSetValue) {
        const [value, setValue] = valueAndSetValue;
        this.value = value;
        this.setValue = setValue;
    }
    val() {
        return this.value;
    }
    set(newValue) {
        this.setValue(newValue);
    }
}
