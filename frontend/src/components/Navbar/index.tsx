import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  useMediaQuery,
  useDisclosure,
  HStack,
  Button,
  IconButton,
  Menu,
  MenuButton,
  CardBody,
  Avatar,
  Stack,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import logo from "../../assets/img/motors-shop.svg";
import { UserContext } from "../../context/userContext";
import ModalRegister from "../ModalRegister";

interface MenuItemType {
  label: string
  onClick: () => void
}

export const Navbar = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate();
  const [isLargerThanLaptop] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuIconVisible, setMenuIconVisible] = useState(false);
  const menuItems = [
    { label: "Fazer Login", onClick: () => navigate("/login") },
    { label: "Cadastrar", onClick: () => navigate("/register") },
  ];
  const menuLogged = [
    { label: "Editar Perfil", onClick: () => navigate("/dashboard") },
    { label: "Editar Endereço", onClick: () => navigate("/dashboard") },
    { label: "Meus Anúncios", onClick: () => navigate("/dashboard") },
    { label: "Sair", onClick: () => navigate("/dashboard") },
  ]
  const renderDesktopMenu = () => {
    if (user) {

      return (
        <Menu>

          <Flex color={"greyScale.grey0"} cursor={"pointer"} align={"center"} gap={"15px"} onClick={() => setMenuIconVisible(!isMenuIconVisible)}>
            <Avatar w={"40px"} h={"40px"} name={user?.name} src={user?.name} />
            <Heading size='md'>{user?.name}</Heading>
          </Flex>
          {user && isMenuIconVisible && (
            <Box
              bg="white"
              h={"210px"}
              width={"15%"}
              position="fixed"
              top="54px"
              left="84%"
              right="0"
              bottom="0"
              zIndex="10"
            >
              <Flex direction="column" h="full">
                <Flex flex="1" overflowY="auto"
                  flexDirection={"column"} align={"flex-start"} gap={"10px"}
                  p={"10px"} h={"max-content"}>
                  {menuLogged.map(item => (
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
      )

    } else {


      return (<HStack spacing="6">
        {menuItems.map(item => (
          item.label === "Cadastrar" ?
            <ModalRegister/>
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
      </HStack>)
    }
  };

  const renderMobileMenu = () =>
  (
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
      {user && isMenuIconVisible && (
        <Box
          bg="white"
          h={"300px"}
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
              {menuLogged.map(item => (
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
      {isMenuIconVisible && !user && (
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
                <ModalRegister/>
                  // <Button
                  //   key={item.label}
                  //   variant="ghost"
                  //   fontSize="md"
                  //   fontWeight="normal"
                  //   border={"1px"}
                  //   borderColor={"greyScale.grey0"}
                  //   color={"greyScale.grey0"}
                  //   onClick={item.onClick}
                  //   w={"100%"}
                  // >
                  //   {item.label}
                  // </Button>
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
    </Menu>)


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