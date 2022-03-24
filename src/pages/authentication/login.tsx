import { useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { Box, Card, Container, Divider, Link, Typography } from "@mui/material"
import { GuestGuard } from "../../components/authentication/guest-guard"
import { JWTLogin } from "../../components/authentication/jwt-login"
import { Logo } from "../../components/logo"
import { useAuth } from "../../hooks/use-auth"
import { gtm } from "../../lib/gtm"
import { AnalyticsTrafficSources } from "src/components/dashboard/analytics/analytics-traffic-sources"

const platformIcons = {
  Amplify: "/static/icons/amplify.svg",
  Auth0: "/static/icons/auth0.svg",
  Firebase: "/static/icons/firebase.svg",
  JWT: "/static/icons/jwt.svg",
}

const Login: NextPage = () => {
  const router = useRouter()
  const { platform } = useAuth() as any
  const { disableGuard } = router.query

  useEffect(() => {
    gtm.push({ event: "page_view" })
  }, [])

  return (
    <>
      <Head>
        <title> Test Login | Ministry Management</title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container
          sx={{
            py: {
              xs: "60px",
              md: "120px",
            },
          }}
        >
          <AnalyticsTrafficSources />
        </Container>
      </Box>
    </>
  )
}

Login.getLayout = (page) => <GuestGuard>{page}</GuestGuard>

export default Login
