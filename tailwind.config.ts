import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: { back: "url('/bg.svg')" },
      screens: {
        sm: "375px",
        md: "744px",
        lg: "1920px",
      },
      borderRadius: {
        xs: "4px",
        md: "8px",
        lg: "16px",
      },

      spacing: {
        "0-sm": "2px",
        "0-md": "4px",
        "0-lg": "6px",
        "0-xl": "8px",
        "1-xs": "10px",
        "1-sm": "12px",
        "1-md": "14px",
        "1-lg": "16px",
        "1-xl": "18px",
        "2-xs": "20px",
        "2-sm": "22px",
        "2-md": "24px",
        "2-lg": "26px",
        "2-xl": "28px",
        "3-xs": "30px",
        "3-sm": "32px",
        "4-xs": "40px",
        "4-xl": "48px",
        "6-xs": "60px",
        "8-xs": "80px",
        "10-xs": "100px",
      },
      colors: {
        primary: {
          default: { light: "#F29B18", dark: "#FFAD31" },
          hover: { light: "#D98B15", dark: "#FFA31B" },
          disabled: { light: "#F2F1F0", dark: "#332F29" },
        },
        bg: {
          primary: { light: "#FCFBFA", dark: "#0A0601" },
          secondary: { light: "#F2EEE9", dark: "#1A1104" },
        },
        line: {
          primary: { light: "#F5EDE1", dark: "#403526" },
          hover: { light: "#EBDFCE", dark: "#291B08" },
          disabled: { light: "#D9D7D4", dark: "#26231F" },
        },
        text: {
          primary: { light: "#291804", dark: "#F2EADF" },
          hover: { light: "#1F1203", dark: "#E5DED3" },
          secondary: { light: "#140C02", dark: "#FAF8F5" },
          subtitle: { light: "#665E52", dark: "#999187" },
        },
        link: {
          primary: { light: "#2145D9", dark: "#1339BF" },
          hover: { light: "#1938A6", dark: "#173499" },
          visited: {
            primary: { light: "#6B15D9", dark: "#5F13BF" },
            hover: { light: "#5719A6", dark: "#501799" },
          },
        },
        info: {
          primary: { light: "#2183D9", dark: "#1D73BF" },
          light: { light: "#8ABBE5", dark: "#72A2CC" },
        },
        positive: {
          primary: { light: "#21D92D", dark: "#1DBF28" },
          light: { light: "#73E57E", dark: "#72CC78" },
        },
        warning: {
          primary: { light: "#D9CC21", dark: "#BFB41D" },
          light: { light: "#E5DF8A", dark: "#CCC672" },
        },
        utility: {
          primary: { light: "#853DF2", dark: "#5D1DBF" },
          light: { light: "#B891F2", dark: "#9F79D9" },
        },
        error: {
          primary: { light: "#D92121", dark: "#BF1D1D" },
          light: { light: "#F26161", dark: "#D94E4E" },
        },
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        h_xs: "32px",
        h_base: "36px",
        h_lg: "44px",
        h_xl: "52px",
        h_xxl: "64px",
      },
      lineHeight: {
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        h_xs: "32px",
        h_base: "36px",
        h_lg: "44px",
        h_xl: "48px",
        h_xxl: "60px",
        h1_xs: "68px",
        h1_lg: "72px",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};

export default config;
