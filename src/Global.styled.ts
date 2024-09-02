import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root {


	overflow: auto;


}


/* * {
    outline: 1px solid red;
} */

html, body {
    margin: 0;
}

* {
font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
    "wdth" 100;
	margin: 0;
	box-sizing: border-box;
}



a {
	text-decoration: none;
}
/* scrollBar */
::-webkit-scrollbar {
	width: 8px;

}

img {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
@media screen and (max-width: 400px) {
	body {
		overflow-x: hidden;
	}
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
	body {
		overflow-x: hidden;
	}
}

`;