import { Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    Input,
    Link,
    List,
    ListItem,
    StackDivider,
    VStack  } from "@chakra-ui/react";
import NextLink from "next/link";
import * as React from "react";

import AccountMenu from "@/components/Layout/AccountMenu/AccountMenu";

interface SIDEBAR {
    isOpen: boolean;
    onClose: () => void;
}

function Sidebar({ user, isOpen, onClose }: SIDEBAR): React.ReactElement {
    return (
        <Drawer isOpen={isOpen}
        onClose={onClose}
        placement="left">
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader mb={2}>
                        YourCoffeeShop
                    </DrawerHeader>
                    <DrawerBody>
                        <AccountMenu user={user} display={["flex", "flex", "none"]} />
                        <Heading 
                        as="h4" 
                        size="md"
                        mt={4}
                        >
                            Looking for something?
                        </Heading>
                        <Input placeholder="coffee beans..." my={4} />
                        <Heading as="h4" 
                        size="md"
                        mb={4}
                        >
                            Categories
                        </Heading>
                        <List>
                            <VStack divider={<StackDivider borderColor="brand.200" />}
                            spacing={[1, 2, 3]}
                            align="left"
                            >
                                <ListItem>
                                    <NextLink href="/">
                                        <Link>
                                            Coffee Beans
                                        </Link>
                                    </NextLink>
                                </ListItem>
                                <ListItem>
                                    <NextLink href="/">
                                        <Link>
                                            Ground Coffee
                                        </Link>
                                    </NextLink>
                                </ListItem>
                                <ListItem>
                                    <NextLink href="/">
                                        <Link>
                                            Coffee Capsules
                                        </Link>
                                    </NextLink>
                                </ListItem>
                                <ListItem>
                                    <NextLink href="/">
                                        <Link>
                                            Mugs & Cups
                                        </Link>
                                    </NextLink>
                                </ListItem>
                                <ListItem>
                                    <NextLink href="/">
                                        <Link>
                                            Other Miscellaneous
                                        </Link>
                                    </NextLink>
                                </ListItem>
                            </VStack>
                        </List>
                    </DrawerBody>
                    <DrawerFooter>
                        YourCoffeeShop @2021
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
}

export default Sidebar;