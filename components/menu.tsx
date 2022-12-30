import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import home from "../public/assets/images/home.svg";
import bag from "../public/assets/images/bag.svg";
import cart from "../public/assets/images/cart.svg";
import customers from "../public/assets/images/customers.svg";
import invoices from "../public/assets/images/invoices.svg";
import settings from "../public/assets/images/settings.svg";

const menuItems = [
	{
		title: "Dashboard",
		href: "/",
		logo: home
	},
	{
		title: "My Orders",
		href: "/",
		logo: bag
	},
	{
		title: "New Order",
		href: "/",
		logo: cart
	},
	{
		title: "Customer List",
		href: "/",
		logo: customers
	},
	{
		title: "Incoices",
		href: "/",
		logo: invoices
	},
	{
		title: "Settings",
		href: "/",
		logo: settings
	}
];

export default function Menu() {
	return (
		<>
			<Wrapper>
				<ul>
					{menuItems.map((item) => {
						return (
							<li>
								<Card>
									<Logo src={item.logo} alt='' width={22} height={22} />
									<Title>{item.title}</Title>
								</Card>
							</li>
						);
					})}
				</ul>
			</Wrapper>
		</>
	);
}

const Card = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
    position: relative;
	align-items: center;
	padding: 10px 40px;
	background: #404040;
	border-radius: 5.5px;
	margin-top: 20px;
    cursor: pointer;
    &:hover { 
        background:#E76F51;
    }
`;

const Logo = styled(Image)`
    position: absolute;
	left: 0px;
    transform: translateX(-50%);
    fill: #ffa654;
`;

const Title = styled.p`
	font-weight: 800;
	color: #ffa654;
	font-style: normal;
	font-size: 20px;
	line-height: 24px;
	text-transform: uppercase;
    &:hover { 
        color: white;
    }
`;

const Wrapper = styled.div`
	display: flex;
    width: min-content;
	position: absolute;
	flex-direction: column;
	background: #264653;
	border-radius: 22px;
	justify-content: space-evenly;
	height: auto;
	bottom: 0px;
	top: 0px;
	margin-bottom: 50px;
	margin-top: 150px;
`;
