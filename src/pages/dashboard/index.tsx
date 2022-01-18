import { useEffect, useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material"
import { AuthGuard } from "../../components/authentication/auth-guard"
import { DashboardLayout } from "../../components/dashboard/dashboard-layout"
import { EventsOverview } from "../../components/dashboard/overview/overview-events"
import { OverviewInbox } from "../../components/dashboard/overview/overview-inbox"
import { OverviewServing } from "../../components/dashboard/overview/overview-serving"
import { OverviewTotalBalance } from "../../components/dashboard/overview/overview-total-balance"
import { ArrowRight as ArrowRightIcon } from "../../icons/arrow-right"
import { Briefcase as BriefcaseIcon } from "../../icons/briefcase"
import { Download as DownloadIcon } from "../../icons/download"
import { ExternalLink as ExternalLinkIcon } from "../../icons/external-link"
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from "../../icons/information-circle-outlined"
import { Reports as ReportsIcon } from "../../icons/reports"
import { Users as UsersIcon } from "../../icons/users"
import { gtm } from "../../lib/gtm"
import { OverviewCampuses } from "src/components/dashboard/overview/overview-campuses"

const Overview: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" })
  }, [])

  return (
    <>
      <Head>
        <title>Overview | Ministry Management </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <EventsOverview />
            </Grid>
            <Grid item md={6} xs={12}>
              <OverviewServing />
            </Grid>

            <Grid item md={12} xs={12}>
              <OverviewCampuses />
            </Grid>
            <Grid item md={12} xs={12}>
              <OverviewInbox />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

Overview.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
)

export default Overview

// this is how you link to a diff page with react next js

{
  /* <NextLink href={"dashboard/chat"} passHref>
<Button>Go to chat</Button>
</NextLink> */
}
