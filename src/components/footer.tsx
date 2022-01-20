import type { FC } from "react"
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material"
import { alpha } from "@mui/material/styles"
import { MinusOutlined as MinusOutlinedIcon } from "../icons/minus-outlined"
import { Logo } from "./logo"

const sections = [
  {
    title: "Menu",
    links: [
      {
        title: "Browse Components",
        href: "/browse",
      },
      {
        title: "Documentation",
        href: "/docs/welcome",
      },
    ],
  },
  {
    title: "Placeholders",
    links: [
      {
        title: "Terms & Conditions",
        href: "#",
      },
      {
        title: "License",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        title: "Instagram",
        href: "#",
      },
      {
        title: "LinkedIn",
        href: "#",
      },
    ],
  },
]

export const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: "background.default",
      borderTopColor: "divider",
      borderTopStyle: "solid",
      borderTopWidth: 1,
      pb: 6,
      pt: {
        md: 15,
        xs: 6,
      },
    }}
    {...props}
  >
    <Container maxWidth="lg"></Container>
  </Box>
)
