import Button from '../common/Button';
import { CloseIcon, MinusFilledIcon, MinusUnfilledIcon, PlusFilledIcon } from '@/assets/svg';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import React, { useState } from 'react';
import styled from 'styled-components';

type SearchBottomProps = {
	numParentsAdults: number;
	setParentsNumAdults: React.Dispatch<React.SetStateAction<number>>;
	onClose: () => void;
};

const SearchBottom = ({ numParentsAdults, setParentsNumAdults, onClose }: SearchBottomProps) => {
	const [numAdults, setNumAdults] = useState(numParentsAdults);
	const [numChilds, setNumChilds] = useState(0);
	const [numBabies, setNumBabies] = useState(0);

	// 모달이 열리면 body 스크롤 비활성화
	document.body.style.overflow = 'hidden';

	const handleIncrease = (setState: React.Dispatch<React.SetStateAction<number>>) => {
		setState((prev) => prev + 1);
	};

	const handleDecrease = (setState: React.Dispatch<React.SetStateAction<number>>, currentValue: number) => {
		if (currentValue > 0) {
			setState((prev) => prev - 1);
		}
	};

	const handleConfirm = () => {
		setParentsNumAdults(numAdults);
		onClose();
	};

	return (
		<BottomSheet>
			<Backdrop onClick={onClose} />
			<BottomSheetContainer>
				<SheetTop>
					<CloseIcon onClick={onClose} />
					<SheetTitle>탑승객</SheetTitle>
				</SheetTop>
				<SheetBottom>
					<ContentWrapper>
						<ContentContainer>
							<ContainerLeft>
								<h2>성인</h2>
								<h3>12세 이상 (국내선: 13세 이상)</h3>
							</ContainerLeft>
							<ContainerRight>
								{numAdults > 0 ? (
									<MinusFilledIcon onClick={() => handleDecrease(setNumAdults, numAdults)} />
								) : (
									<MinusUnfilledIcon />
								)}
								<p>{numAdults}</p>
								<PlusFilledIcon onClick={() => handleIncrease(setNumAdults)} />
							</ContainerRight>
						</ContentContainer>
						<ContentContainer>
							<ContainerLeft>
								<h2>어린이</h2>
								<h3>2~11세 (국내선: 2~12세)</h3>
							</ContainerLeft>
							<ContainerRight>
								{numChilds > 0 ? (
									<MinusFilledIcon onClick={() => handleDecrease(setNumChilds, numChilds)} />
								) : (
									<MinusUnfilledIcon />
								)}
								<p>{numChilds}</p>
								<PlusFilledIcon onClick={() => handleIncrease(setNumChilds)} />
							</ContainerRight>
						</ContentContainer>
						<ContentContainer>
							<ContainerLeftNew>
								<h2>유아</h2>
								<h3>생후 14일~1세 (국내선: 생후 7일~1세)</h3>
							</ContainerLeftNew>
							<ContainerRight>
								{numBabies > 0 ? (
									<MinusFilledIcon onClick={() => handleDecrease(setNumBabies, numBabies)} />
								) : (
									<MinusUnfilledIcon />
								)}
								<p>{numBabies}</p>
								<PlusFilledIcon onClick={() => handleIncrease(setNumBabies)} />
							</ContainerRight>
						</ContentContainer>
					</ContentWrapper>
					<Button onClick={handleConfirm} variant="confirm">
						확인
					</Button>
				</SheetBottom>
			</BottomSheetContainer>
		</BottomSheet>
	);
};

export default SearchBottom;

const BottomSheet = styled.div`
	overflow: hidden;
`;

const Backdrop = styled.div`
	position: fixed;
	left: calc(50vw - 18.75rem);
	top: 0;
	height: 100vh;
	width: 37.5rem;
	background-color: ${({ theme }) => theme.colors.darkscreen};
	z-index: 1;
`;

const BottomSheetContainer = styled.div`
	position: fixed;
	width: 37.5rem;
	height: 33.4rem;
	left: calc(50vw - 18.75rem);
	bottom: 0;
	background-color: ${({ theme }) => theme.colors.white};
	z-index: 2;
	border-radius: 2.3rem 2.3rem 0 0;
`;

const SheetTop = styled.div`
	position: relative;

	padding: 1.5rem 1.6rem 1.4rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey20};
`;

const SheetTitle = styled.h1`
	position: absolute;
	top: 1.7rem;
	left: 16.7rem;
	${({ theme }) => theme.fonts.title2_eb_16}
`;

const SheetBottom = styled.div`
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	gap: 2.1rem;
	padding: 0 1.8rem;
`;
const ContentWrapper = styled.div`
	width: 100%;
`;
const ContentContainer = styled.div`
	${flexCssGenerator('flex', 'space-between', 'center', 'row')}
	width:100%;
	padding: 1.8rem 0.8rem 1.8rem 0.5rem;
	border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey20};
`;
const ContainerLeft = styled.div`
	${flexCssGenerator('flex', 'center', 'center', 'row')}

	gap: 0.7rem;

	h2 {
		${({ theme }) => theme.fonts.body1_sb_16}
		color: ${({ theme }) => theme.colors.black}
	}

	h3 {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.grey40}
	}
`;
const ContainerLeftNew = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}

	gap: 0.3rem;

	h2 {
		${({ theme }) => theme.fonts.body1_sb_16}
		color: ${({ theme }) => theme.colors.black}
	}

	h3 {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.grey40}
	}
`;
const ContainerRight = styled.div`
	${flexCssGenerator('flex', 'space-between', 'center', 'row')}

	p {
		${({ theme }) => theme.fonts.body1_sb_16}
	}

	width: 7.7rem;
`;
