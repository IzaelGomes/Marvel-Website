import 'styled-components';


declare module 'styled-components'{
    export interface DefaultTheme{
        title: string,

        colors: {
            primary : string,
            secundary: string,
    
            background:string,
            text:string
            text2:string;
            text3:string;
        }

        fonts:{
            fontFamily: string;
        }
    }
}