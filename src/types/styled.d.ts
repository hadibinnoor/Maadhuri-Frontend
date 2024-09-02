import 'styled-components';
import { theme } from '../data/theme';

declare module "styled-components" {
    export interface DefaultTheme extends Theme {};
}