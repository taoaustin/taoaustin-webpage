import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;
  margin-right: 20px;

  img {
    transition: 150ms ease;
  }

  &:hover img {
    transform: scale(1.15);
  }
`;

const Logo = () => {
  const tao = `/images/logo${useColorModeValue("", "-dark")}.png`;
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <img src={tao} width={25} height={25} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="normal"
            ml={1.5}
          >
            Austin Tao
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
