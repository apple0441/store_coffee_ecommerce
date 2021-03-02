import { useQuery } from "@apollo/client";
import { 
    Box,
    Flex, 
    Heading,
    Link, 
    Text,
    useColorModeValue, 
    VStack } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import NextLink from "next/link";
import { ParsedUrlQuery } from "querystring";
import * as React from "react";

import CartHeader from "@/components/Cart/CartHeader/CartHeader";
import Layout from "@/components/Layout/Layout";
import { USER_ORDER } from "@/queries/orders";

interface IReview {
    query: ParsedUrlQuery
}

const Review: NextPage<IReview> = ({ query }) => {
    const { data: orderData, loading, error } = useQuery(USER_ORDER, {
        variables: {
            id: query.id
        }
    });

    if (loading) {
        console.log("loading");
    }

    if (error) {
        console.log("error");
    }


    return (
        <Layout>
            <Flex        
            as="section"
            flexDirection={["column", "column", "column", "row"]}
            m={4}
            >
                <VStack 
                w="full"
                >
                    <Flex 
                    bg={useColorModeValue("gray.100", "gray.700")}
                    borderRadius="md"
                    color="pink.400"
                    justify="center"
                    mb={4}
                    p={8}
                    textTransform="uppercase"
                    w="full"
                    >
                        Order Completed Successfully
                    </Flex>
                    <Flex 
                    justify="space-evenly"
                    w="full"
                    >
                        <Box flex="1">
                            <CartHeader />
                            <VStack 
                            as="article"
                            bg={useColorModeValue("gray.50", "gray.700")}
                            borderRadius="sm"
                            fontSize="sm"
                            p={12}
                            >
                                <Heading 
                                as="h3"
                                fontSize="lg"
                                mb={8}
                                textAlign="center"
                                >
                                    Order Summary
                                </Heading>
                                <Flex 
                                bg={useColorModeValue("gray.100", "gray.600")}
                                borderRadius="sm"
                                justify="flex-start"
                                py={4}
                                px={2}
                                w="100%"
                                >
                                    <Text mx={4}>
                                        Email: 
                                    </Text>
                                    <Text mx={4}>
                                        {orderData.orders[0].email}
                                    </Text>
                                </Flex>
                                <Flex 
                                bg={useColorModeValue("gray.100", "gray.600")}
                                borderRadius="sm"
                                justify="flex-start"
                                mb={16}
                                py={4}
                                px={2}
                                w="100%"
                                >
                                    <Text mx={4}>
                                        Total:
                                    </Text>
                                    <Text mx={4}>
                                        €{(orderData.orders[0].total / 100).toFixed(2)}
                                    </Text>
                                </Flex>
                                <NextLink
                                href="/"
                                passHref
                                >
                                    <Link         
                                    bg="pink.400"
                                    borderRadius="md"
                                    color="white"
                                    display="block"
                                    my={8}
                                    p={6}
                                    w="max-content"
                                    _hover={{
                                    bg: "pink.500"
                                    }}
                                    >
                                        Back to home
                                    </Link>
                                </NextLink>
                            </VStack>
                        </Box>
                    </Flex>
                </VStack>
            </Flex>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            query: ctx.query,
        }
    };
};

export default Review;
