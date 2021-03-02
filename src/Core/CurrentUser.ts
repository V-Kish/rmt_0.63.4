
type currentUserStateType = {
    userToken?: string;
    userTheme?: string
};

class CurrentUser {

    private _state: currentUserStateType;

    constructor() {
        this._state = {

            userTheme: 'default'
        };
    }

    public get state() {
        return this._state;
    }

    public get token() {
        return this._state.userToken;
    }

    public set token(value) {
        this._state.userToken = value;
    }
    public get userTheme() {
        return this._state.userTheme;
    }

    public set userTheme(value) {
        this._state.userTheme = value;
    }
}

export { CurrentUser }
