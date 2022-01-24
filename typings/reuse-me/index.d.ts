declare module 'reuse-me' {

    export interface IBase {
        id: string;
    }

    export interface IDerived extends IBase {
        name: string;
    }

}
