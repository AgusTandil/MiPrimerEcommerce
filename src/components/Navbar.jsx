import React from "react";
import logo from "../utils/Manfia.png";
import { useSelector } from "react-redux";
import useLogin from "../hooks/useLogin";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { IoCartOutline } from "react-icons/io5";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  // Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import SearchForm from "./SearchForm";

const Navbar = () => {
  const history = useHistory();
  const { isOpen, onToggle } = useDisclosure();
  const loggedUser = useSelector((state) => state.user);
  const params = useLogin();
  const { handleLogout } = params;

  const handleClick = (e) => {
    e.preventDefault();
    handleLogout();
  };
  const onAdmin = (e) => {
    e.preventDefault();
    history.push("/admin");
    history.go(0);
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Link to="/">
          <Image
            src={logo}
            alt="logo Manfia"
            borderRadius="full"
            maxWidth="40%"
          />
        </Link>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Center h="100px" w="100%">
          <SearchForm />
        </Center>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={2}
        >
          <Box>
            <Link to="/cart">
              <IconButton
                color="black"
                bg="#B2F5EA"
                py="2"
                _hover={{ bg: "#81E6D9" }}
                icon={<IoCartOutline size="sm" />}
              />
            </Link>
          </Box>

          {loggedUser.id ? (
            <Button as={"a"} onClick={(e) => handleClick(e)}>
              Logout
            </Button>
          ) : (
            <>
              <Button
                as={"a"}
                fontSize={"lg"}
                fontWeight={400}
                color={"white"}
                colorScheme="teal"
                pl="5"
                pr="5"
                href={"/login"}
              >
                <strong> Login </strong>
              </Button>
              <Button
                as={"a"}
                display={{ base: "grid", md: "inline-flex" }}
                fontSize={"lg"}
                fontWeight={600}
                color={"white"}
                colorScheme="teal"
                href={"/register"}
              >
                Register
              </Button>
            </>
          )}
          {loggedUser.access === "admin" ? (
            <Button onClick={(e) => onAdmin(e)}>Administrar</Button>
          ) : null}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Button
                px={5}
                fontSize={"mg"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <strong> {navItem.label} </strong>
              </Button>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel } = NavItem) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href } = NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={2} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Hombre",
    children: [
      {
        label: "Todo",
        href: "/categories/men",
      },
      {
        label: "Pantalones",
        href: "/categories/men/pantalones",
      },
      {
        label: "Remeras",
        href: "/categories/men/remeras",
      },
      {
        label: "Buzos",
        href: "/categories/men/buzos",
      },
      {
        label: "Camperas",
        href: "/categories/men/camperas",
      },
      {
        label: "Shorts",
        href: "/categories/men/shorts",
      },
    ],
  },
  {
    label: "Mujer",
    children: [
      {
        label: "Todo",
        href: "/categories/women",
      },
      {
        label: "Pantalones",
        href: "/categories/women/pantalones",
      },
      {
        label: "Remeras",
        href: "/categories/women/remeras",
      },
      {
        label: "Buzos",
        href: "/categories/women/buzos",
      },
      {
        label: "Camperas",
        href: "/categories/women/camperas",
      },
      {
        label: "Shorts",
        href: "/categories/women/shorts",
      },
    ],
  },
];

export default Navbar;
