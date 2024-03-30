import { extendTheme } from "@chakra-ui/react";

const colors = {
  negro: "#f1f6f9",
  blanco: "#f1f6f9",
  azul: "#2E3192",
  naranja: "#FF7E00",
  fondo: "#f1f6f9",
};

const fonts = {
  body: `'Noto Sans TC Variable', sans-serif`,
  heading: `'Paytone One', sans-serif`,
};

const Button = {
  baseStyle: {
    fontWeight: "regular",
  },
  // Variaciones de estilos por prop `variant`
  variants: {
    solid: {
      bg: colors.naranja,
      color: colors.blanco,
      _hover: {
        bg: "#d46900",
      },
    },
    outline: {
      border: "2px solid",
      borderColor: colors.azul,
      color: colors.azul,
      _hover: {
        bg: colors.azul,
        color: colors.blanco,
      },
    },
    ghost: {
      color: colors.azul,
      _hover: {
        bg: colors.azul,
        color: colors.blanco,
      },
    },
    link: {
      color: colors.blanco,
      _hover: {
        textDecoration: "underline",
        color: colors.naranja,
      },
    },
  },
};

const styles = {
  global: {
    "html, body": {
      backgroundColor: colors.fondo,
      color: colors.negro, // Asegúrate de definir `colors.natural` o corrige a `colors.negro` si fue un error tipográfico
      fontSize: "16px",
    },
  },
};

const theme = extendTheme({ colors, fonts, styles, components: { Button } });

export default theme;
