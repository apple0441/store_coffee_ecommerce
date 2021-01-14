import { Button, 
    Flex,
    Heading, 
    Link, 
    List, 
    ListItem, 
    Text } from "@chakra-ui/react";
import NextLink from "next/link";
import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline,     
    IoHelpCircleOutline,
    IoPersonOutline } from "react-icons/io5";

import AccountMenu from "@/components/Layout/AccountMenu/AccountMenu";

interface NAV { onOpen: () => void }

function Nav({ user, onOpen }: NAV): React.ReactElement {
    return (
        <Flex as="nav"
        align="center"
        justify="space-between"
        p={[2, 4, 6, 8]}
        >
            <Heading as="h1" fontSize="lg">
                <NextLink href="/">
                    <Link>
                        YourCoffeeShop
                    </Link>
                </NextLink>
            </Heading>
            <List alignItems="center"
            display="flex" 
            flex="1"
            fontSize="lg"
            justifyContent="end"
            >
                <ListItem mx={[1, 2, 4]}>
                    <NextLink href="/cart">
                        <Link alignItems="center" display="flex">
                            <IoCartOutline style={{ marginRight: "8px" }} />
                            Cart
                        </Link>
                    </NextLink>
                </ListItem>
                <ListItem display={["none", "none", "block"]} 
                mr={12} 
                ml={4}
                >
                    <NextLink href="/help">
                        <Link alignItems="center" display="flex">
                            <IoHelpCircleOutline style={{ marginRight: "8px" }} />
                            Help
                        </Link>
                    </NextLink>
                </ListItem>
                <AccountMenu user={user} display={["none", "none", "flex"]}/>
                <Button 
                fontSize="sm"
                onClick={onOpen}
                ml={8}
                variant="ghost" 
                >
                    <GiHamburgerMenu style={{ marginRight: "6px" }} />
                    <Text color="brand.300">
                        Menu
                    </Text>
                </Button>
            </List>
        </Flex>
    );
}

export default Nav;