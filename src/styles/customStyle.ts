import styled, { css } from 'styled-components';

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

export const FogEffect = styled.div<{ showFogEffect: boolean }>`
	${({ showFogEffect }) =>
		showFogEffect &&
		`
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 40rem;
			background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
			pointer-events: none;
			z-index: 1;
    `}
`;
