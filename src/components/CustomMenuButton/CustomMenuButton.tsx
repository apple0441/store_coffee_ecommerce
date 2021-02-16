import { Button, 
    Menu,
    MenuButton, 
    MenuItem, 
    MenuList } from "@chakra-ui/react";
import * as React from "react";
import { BsArrowDownShort } from "react-icons/bs";

import { generateItemKey } from "@/utils/generateItemKey";

interface IMenuButton {
    title: string,
    listItems: string[]
}

const CustomMenuButton: React.FC<IMenuButton> = ({ title, listItems = []}) => {

    const MenuItems = React.useMemo(() => listItems.map((item) => 
        <MenuItem key={generateItemKey(item)}>
            {item}
        </MenuItem>
        ), [ listItems ]);

    return (
        <Menu>
            <MenuButton 
            as={Button}
            mr={4}
            rightIcon={<BsArrowDownShort />}
            w="10rem"
            >
                {title ?? "No title"}
            </MenuButton>
            <MenuList>
                {MenuItems}
            </MenuList>
        </Menu>
    );
};

export default CustomMenuButton;