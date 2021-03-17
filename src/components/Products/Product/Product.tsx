import { 
    Box, 
    Button,
    Flex, 
    IconButton, 
    Link, 
    Text,
    Tooltip,
    useColorModeValue, 
    VStack} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import { useStore, useStoreUpdate } from "@/hooks/useStorage";
import { IProductStorage } from "@/utils/storage";

const Product: React.FC<IProductStorage> = ({ 
    category,
    description,
    image,
    id,
    name, 
    price
 }) => {

    const router = useRouter();

    const [ isSaved, setIsSaved ] = React.useState<boolean>(false);
    const { addCartValue, toggleSavedValue } = useStoreUpdate()!;
    const { cartStorage, savedStorage } = useStore()!;


    const product = {
        category,
        description,
        image, 
        id,
        name, 
        price
    };

    const addProductToCart = () => addCartValue(product);

    const updateCartStatus = () => {
        const btn = document.querySelector(`.btn-${id}`);

        if (cartStorage?.some(item => item.id === id)) {
            btn && btn.textContent !== "In Cart" ? btn.textContent = "In Cart" : null;
        } else {
            btn && btn.textContent === "In Cart" ? btn.textContent = "+ Add To Cart" : null;
        }
    };

    const updateLikedStatus = () => {
        const saveBtn = document.querySelector(`.save-btn-${id}`)! as HTMLButtonElement;

        let isASavedProduct = false;

        if (savedStorage?.some(item => item.id === id)) {
            saveBtn.firstElementChild?.setAttribute("fill", "white");
            saveBtn.style.backgroundColor = "rgb(184, 50, 128)";
            isASavedProduct = true;
        }

        setIsSaved(isASavedProduct);
    };

    React.useEffect(() => {
        updateLikedStatus();
    }, []);

    React.useEffect(() => {
        updateCartStatus();
    }, [ cartStorage ]);


    return (
        <Flex
        alignItems="flex-end"
        borderRadius="md"
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.800", "gray.50")}
        flexDirection="column"
        fontSize="sm"
        h="420px"
        m="auto"
        overflow="hidden"
        position="relative"
        shadow="base"
        w="300px"
        zIndex={0}
        >
            <Tooltip
            label={isSaved ? "Remove Save" : "Save"}
            fontSize="xs"
            hasArrow
            placement="top-end"
            >
                <span>
                    <IconButton 
                    aria-label="save item"
                    borderRadius="none"
                    borderBottomLeftRadius="md"
                    bg={useColorModeValue("gray.100", "gray.700")}
                    className={`save-btn-${id}`}
                    colorScheme="pink"
                    _hover={{
                        bg: useColorModeValue("gray.100", "gray.900")
                    }}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                        const curTarget = event.currentTarget as HTMLButtonElement;

                        setIsSaved(!isSaved);

                        if (!isSaved) {
                            curTarget.firstElementChild?.setAttribute("fill", "white");
                            curTarget.style.backgroundColor = "rgb(184, 50, 128)";
                        } else {
                            curTarget.firstElementChild?.setAttribute("fill", "rgb(184, 50, 128)");
                            curTarget.style.backgroundColor = "#EDF2F7";
                        }

                        toggleSavedValue("saved-products", product);
                    }}
                    icon={router.pathname === "/saved-products" ?
                    <TiDeleteOutline /> 
                    : <AiOutlineHeart /> } 
                    position="absolute"
                    top="0"
                    right="0"
                    variant="ghost"
                    zIndex="10"
                    />
                </span>
            </Tooltip>
            <NextLink 
            href={`/store/products/${name.split(" ").join("-")}`}
            passHref
            >
                <Link 
                height="55%"
                w="100%"
                >
                    <Box 
                    h="100%"
                    w="100%"
                    _hover={{
                        transform: "scale(1.03)",
                        transition: "transform 300ms ease-in"
                    }}
                    >   
                        <Image
                        alt={name}
                        src={`/${image}`}
                        height={200}
                        width={300}
                        />
                    </Box>
                </Link>
            </NextLink>
            <VStack 
            h="full"
            px={2}
            pb={3}
            textAlign="center"
            w="full"
            >
                <Text 
                fontSize="md"
                textTransform="uppercase"
                >
                    {name}
                </Text>
                <Text 
                color={useColorModeValue("gray.600", "gray.200")}
                fontSize="xs"
                mb="auto"
                >
                    {description}
                </Text>
                <Text 
                fontWeight="bold"
                textAlign="center"
                >
                    €{(price / 100).toFixed(2)}
                </Text>
                <Button 
                className={`btn-${product.id}`}
                colorScheme="pink"
                onClick={addProductToCart}
                size="sm"
                variant="solid"
                >
                    + Add to Cart 
                </Button>
            </VStack>
        </Flex>
    );
};

export default React.memo(Product);