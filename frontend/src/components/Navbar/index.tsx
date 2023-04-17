import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  useMediaQuery,
  useDisclosure,
  HStack,
  Text,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon
} from "@chakra-ui/icons";
import logo from "../../assets/img/motors-shop.svg";

interface MenuItemType {
  label: string
  onClick: () => void
}

export const Navbar = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const handlerRegister = () => {
    navigate("/register")
  }

  const [visible, setVisible] = useState(false);
  return (
    <NavStyled>
      <NavContent>
        <Logotipo className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </Logotipo>
=======
  const [isLargerThanLaptop] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuIconVisible, setMenuIconVisible] = useState(false);
>>>>>>> 7bec9064be982c1f0fe7062e5db3b550918d9c97

  const menuItems = [
    { label: "Fazer Login", onClick: () => navigate("/login") },
    { label: "Cadastrar", onClick: () => navigate("/register") },
  ];

<<<<<<< HEAD
        <MenuLinks visible={visible}>
          <IoClose size={28} onClick={() => setVisible(false)} />

          <DivLineHeaderStyled></DivLineHeaderStyled>

          <Link to="/">
            <ButtonLoginStyled>Fazer Login</ButtonLoginStyled>
          </Link>

            <ButtonRegisterStyled onClick={handlerRegister} >Cadastrar</ButtonRegisterStyled>
            
        </MenuLinks>
      </NavContent>
    </NavStyled>
=======
  const renderDesktopMenu = () => (
    <HStack spacing="6">
      {menuItems.map(item => (
        item.label === "Cadastrar" ?
          <Button
            key={item.label}
            variant="ghost"
            fontSize="md"
            fontWeight="normal"
            border={"1px"}
            borderColor={"greyScale.grey0"}
            color={"greyScale.grey0"}
            onClick={item.onClick}
          >
            {item.label}
          </Button>
          :
          <Button
            key={item.label}
            variant="ghost"
            fontSize="md"
            fontWeight="normal"
            color={"greyScale.grey0"}
            onClick={item.onClick}
          >
            {item.label}
          </Button>
      ))}
    </HStack>
>>>>>>> 7bec9064be982c1f0fe7062e5db3b550918d9c97
  );

  const renderMobileMenu = () => (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        size="lg"
        icon={<HamburgerIcon />}
        color={"greyScale.grey0"}
        variant="ghost"
        onClick={() => setMenuIconVisible(true)}
      />
      {isMenuIconVisible && (
        <Box
          bg="white"
          h={"200px"}
          width={"100%"}
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="10"
        >
          <Flex direction="column" h="full">
            <Box p="4" display="flex" justifyContent={"space-between"} w={"100%"}>
              <Link to="/" style={{ display: "flex" }}>
                <img src={logo} alt="Motors Shop" />
              </Link>
              <IconButton
                aria-label="Close menu"
                icon={<CloseIcon />}
                size="lg"
                onClick={() => setMenuIconVisible(false)}
                alignSelf="flex-end"
                color={"greyScale.grey0"}
              />
            </Box>
            <Flex flex="1" overflowY="auto"
              flexDirection={"column"} align={"flex-start"} gap={"10px"}
              p={"10px"} h={"max-content"}>
              {menuItems.map(item => (
                item.label === "Cadastrar" ?
                  <Button
                    key={item.label}
                    variant="ghost"
                    fontSize="md"
                    fontWeight="normal"
                    border={"1px"}
                    borderColor={"greyScale.grey0"}
                    color={"greyScale.grey0"}
                    onClick={item.onClick}
                    w={"100%"}
                  >
                    {item.label}
                  </Button>
                  :
                  <Button
                    key={item.label}
                    variant="ghost"
                    fontSize="md"
                    fontWeight="normal"
                    color={"greyScale.grey0"}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </Button>
              ))}
            </Flex>
          </Flex>
        </Box>
      )}
    </Menu>
  );

  return (
    <Box borderBottom="2px" borderColor="gray.200" bg="white">
      <Flex maxW="1600px" mx="auto" p="2" align="center">
        <Box w="200px" px="2">
          <Link to="/" style={{ display: "flex" }}>
            <img src={logo} alt="Motors Shop" />
          </Link>
        </Box>
        <Spacer />
        {isLargerThanLaptop ? renderDesktopMenu() : renderMobileMenu()}
      </Flex>
    </Box>
  );
};