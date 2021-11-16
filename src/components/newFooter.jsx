import React from "react";

import { Box, Stack, StackDivider, Image } from "@chakra-ui/react";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { LinkGrid } from "./LinkGrid";
import { Copyright } from "./Copyright";
import { SubscribeForm } from "./SuscribeForm";
import logo from "../utils/Manfia.png";

export default function NewFooter() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7x1"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "10", lg: "28" }}
        >
          <Box flex="1" boxSize="100">
            <Image
              src={logo}
              boxSize="100px"
              alt="logo Manfia"
              borderRadius="full"
            />
          </Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "10", md: "20" }}
          >
            <LinkGrid spacing={{ base: "10", md: "20", lg: "28" }} flex="1" />
            <SubscribeForm width={{ base: "full", md: "sm" }} />
          </Stack>
        </Stack>
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Copyright />
          <SocialMediaLinks />
        </Stack>
      </Stack>
    </Box>
  );
}
