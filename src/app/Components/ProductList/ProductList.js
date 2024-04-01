"use client";
import data from "@/app/MockData/mockData.json";
import { useState, useEffect } from "react";
import { Grid, GridItem, Text, VStack, Button, Stack } from "@chakra-ui/react";
import CardProduct from "../CardProduct/CardProduct";

export default function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilterCategory = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(data);
    } else {
      const filtered = data.filter(
        (product) => product.categoria === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <Stack paddingInline='2em' paddingBlock='2em' align='center'>
      <Grid w='100%' maxW='1280px' templateColumns='repeat(5, 1fr)' gap={4}>
        <GridItem colSpan={1}>
          <VStack align='start' spacing={4}>
            <Button
              variant='ghost'
              size='sm'
              cursor='pointer'
              onClick={() => handleFilterCategory("all")}
              bgColor={selectedCategory === "all" ? "azul" : undefined}
              color={selectedCategory === "all" ? "blanco" : undefined}
            >
              Todo
            </Button>
            <Button
              variant='ghost'
              size='sm'
              cursor='pointer'
              onClick={() => handleFilterCategory("indumentaria")}
              bgColor={selectedCategory === "indumentaria" ? "azul" : undefined}
              color={selectedCategory === "indumentaria" ? "blanco" : undefined}
            >
              Indumentaria
            </Button>
            <Button
              variant='ghost'
              size='sm'
              cursor='pointer'
              onClick={() => handleFilterCategory("hogar")}
              bgColor={selectedCategory === "hogar" ? "azul" : undefined}
              color={selectedCategory === "hogar" ? "blanco" : undefined}
            >
              Hogar
            </Button>
            <Button
              variant='ghost'
              size='sm'
              cursor='pointer'
              onClick={() => handleFilterCategory("suplementos")}
              bgColor={selectedCategory === "suplementos" ? "azul" : undefined}
              color={selectedCategory === "suplementos" ? "blanco" : undefined}
            >
              Suplementos
            </Button>
            <Button
              variant='ghost'
              size='sm'
              cursor='pointer'
              onClick={() => handleFilterCategory("mochilas")}
              bgColor={selectedCategory === "mochilas" ? "azul" : undefined}
              color={selectedCategory === "mochilas" ? "blanco" : undefined}
            >
              Mochilas
            </Button>
          </VStack>
        </GridItem>
        <GridItem colSpan={4}>
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            {filteredProducts.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Stack>
  );
}
