import type { FC } from "react"
import NextLink from "next/link"
import { Avatar, Box, Button, Container, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from "../../icons/check-circle-outlined"
import { Users as UsersIcon } from "../../icons/users"
import { Star as StarIcon } from "../../icons/star"
import { Template as TemplateIcon } from "../../icons/template"

export const HomeHero: FC = (props) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        pt: 6,
      }}
      {...props}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography color="primary" variant="overline">
          Made By Javier
        </Typography>
        <Typography align="center" variant="h1">
          Ministry Management Prototype
        </Typography>

        <Box
          sx={{
            alignItems: {
              sm: "center",
              xs: "flex-start",
            },
            display: "flex",
            flexDirection: {
              sm: "row",
              xs: "column",
            },
            py: 3,
            m: -1,
            "& > *": {
              m: 1,
            },
          }}
        >
          <Typography color="textSecondary" variant="caption">
            Made With
          </Typography>
          {["JavaScript", "TypeScript", "React", "Next JS"].map((item) => (
            <Box
              key={item}
              sx={{
                alignItems: "center",
                display: "flex",
                m: 2,
              }}
            >
              <CheckCircleOutlinedIcon color="success" sx={{ mr: 1 }} />
              <Typography variant="subtitle2">{item}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mx: -1,
            mt: 2,
            mb: 6,
            "& > a": {
              m: 1,
            },
          }}
        >
          <NextLink href="/dashboard" passHref>
            <Button component="a" size="large" variant="contained">
              Open Prototype
            </Button>
          </NextLink>
        </Box>
      </Container>
      <Box
        sx={{
          maxWidth: 980,
          width: "100%",
          mx: "auto",
        }}
      ></Box>
      <Box sx={{ py: 8 }}></Box>
    </Box>
  )
}
