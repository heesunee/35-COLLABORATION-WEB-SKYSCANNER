import "styled-components";
import { ColorTypes, FontTypes, ShadowTypes } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ColorTypes;
        fonts: FontTypes;
        shadows: ShadowTypes;
    }
}