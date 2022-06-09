import { Box, HStack, Text } from "@bitcoin/design";
import Image from "next/image";
import styled from "styled-components";

const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: ${(p) => p.theme.page.background};
  padding: 8px;
  width: 100%;
  margin-bottom: 40px;
  z-index: 9999;

  .navigation {
    &--header {
      max-width: 786px;
      margin: 0px auto;
      display: flex;
      justify-content: space-between;
    }

    &--userphoto {
      margin-left: 10px;
      margin-right: 10px;

      img {
        border-radius: 100%;
      }
    }

    &--username {
      color: white;
    }

    &--share {
      a {
        margin-left: 20px;
        display: inline-block;
        color: white;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

function Navigation() {
  return (
    <Header>
      <HStack className="navigation--header">
        <HStack>
          <Text.P className="navigation--username">Made with 💚 by </Text.P>
          <Box className="navigation--userphoto">
            <Image
              src="https://tawan.org/tawan.png"
              width={50}
              height={50}
              alt="author"
            />
          </Box>
          <Text.P className="navigation--username">Tawan</Text.P>
        </HStack>
        <HStack className="navigation--share">
          <a
            href="https://tawan.org"
            title="github"
            target="_blank"
            rel="noreferrer"
          >
            <Text.P>Website</Text.P>
          </a>
          <a
            href="https://github.com/tawanorg/bitcoinwebapp"
            title="github"
            target="_blank"
            rel="noreferrer"
          >
            <Text.P>Github</Text.P>
          </a>
        </HStack>
      </HStack>
    </Header>
  );
}

export default Navigation;
