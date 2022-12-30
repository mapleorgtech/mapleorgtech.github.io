import Link from "next/link";
import styled from "styled-components";
import { menuItems } from "../public/assets/data/menu";
import Image from "next/image";

export default function Menu() {
	return (
		<>
			<Wrapper>
                {menuItems.map((item) => {
                    <Card>
                        <Logo src={item.logo} alt=''/>
                        <Title>{item.title}</Title>
                    </Card>
                })}
            </Wrapper>
		</>
	);
}

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 40px;
    background: #404040;
    border-radius: 5.5px;
`

const Logo = styled(Image)`
    background: #FFA654;
    left: 0px;
    transform: translateX(-50%);
`
const Title = styled.p`
    font-weight: 800;
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: #264653;
	border-radius: 22px;
`;
