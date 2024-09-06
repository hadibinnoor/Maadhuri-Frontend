type Theme = {

    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
    accent1: string;
    accent2: string;

}

const theme: Theme = {
    primary: 'rgb(31, 29, 29)',
    secondary: '#191919',
    tertiary: 'rgba(0, 0, 0, 0.4)',
    text: '#ffffff',
    accent1: 'rgba(112, 255, 0, 1)',
    accent2: 'rgba(189, 0, 255, 1)'
}

const theme2 : Theme = {
    primary: '#202225',
    secondary: '#292b2f',
    tertiary: '#2f3136',
    text: '#ffffff',
    accent1: 'rgb(149, 2, 51)',
    accent2: 'rgba(189, 0, 255, 1)'
}

export { theme, theme2 }
export type { Theme }
