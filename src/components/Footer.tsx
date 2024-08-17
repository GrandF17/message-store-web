import { Flex, Link, SimpleGrid } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex mt={1} padding={"20px"} justify={"center"}>
      <SimpleGrid columns={3} spacing={10}>
        <Link href="https://t.me/GrandF17" isExternal>
          Contact Me
        </Link>
        <Link href="https://ai-dex-ebon.vercel.app/swap" isExternal>
          AiDex website
        </Link>
        <Link href="https://github.com/GrandF17/" isExternal>
          GitHub
        </Link>
      </SimpleGrid>
    </Flex>
  );
}

export default Footer;
