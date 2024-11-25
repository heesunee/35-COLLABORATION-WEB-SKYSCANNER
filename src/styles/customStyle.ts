import { css } from 'styled-components';

export const flexCssGenerator = (
	display = 'flex',
	justifyContent = 'center',
	alignItems = 'center',
	flexDirection = 'row',
) => css`
	display: ${display};
	justify-content: ${justifyContent};
	flex-direction: ${flexDirection};
	align-items: ${alignItems};
`;
