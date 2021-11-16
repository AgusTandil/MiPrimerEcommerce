import { Text } from "@chakra-ui/layout";
import * as React from "react";

export const Copyright = () => (
  <Text fontSize="sm">
    &copy; {new Date().getFullYear()} El Ropero de Manfia. Todos los derechos
    reservados.
  </Text>
);
