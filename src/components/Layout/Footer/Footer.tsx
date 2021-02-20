import { Flex, 
    HStack, 
    Link, 
    List, 
    ListItem, 
    Text } from "@chakra-ui/react";
import NextLink from "next/link";
import * as React from "react";

import { IUser } from "@/components/Layout/Nav/Nav";

interface IFooter {
    user: IUser;
}

const Footer: React.FC<IFooter> = ({ user }) => {
    return (
        <Flex 
        as="footer" 
        alignItems="center"
        direction="column"
        justifyContent="center"
        p={[6, 6, 8, 12]}
        >
            <Text 
            fontSize="md" 
            mb={6}
            >
                YourCoffeeShop @2021
            </Text>
            <List 
            fontSize="sm"
            >
                <HStack spacing={8}>
                    <ListItem>
                        <NextLink href="/store">
                            <Link>
                                Store
                            </Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href="/cart">
                            <Link>
                                Cart
                            </Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        {user ? 
                        <NextLink href="/account">
                            <Link>
                                Account
                            </Link>
                        </NextLink>
                        :
                        <NextLink href="/api/login">
                            <Link>
                                Login/Register
                            </Link>
                        </NextLink>
                        }
                    </ListItem>
                </HStack>
            </List>
        </Flex>
    );
};

export default Footer;