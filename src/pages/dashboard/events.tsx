import { useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material"
import { AuthGuard } from "../../components/authentication/auth-guard"
import { DashboardLayout } from "../../components/dashboard/dashboard-layout"
import { AnalyticsGeneralOverview } from "../../components/dashboard/analytics/analytics-general-overview"
import { AnalyticsMostVisited } from "../../components/dashboard/analytics/analytics-most-visited"
import { AnalyticsSocialSources } from "../../components/dashboard/analytics/analytics-social-sources"
import { AnalyticsVisitsByCountry } from "../../components/dashboard/analytics/analytics-visits-by-country"
import { AnalyticsTrafficSources } from "../../components/dashboard/analytics/analytics-traffic-sources"
import { Reports as ReportsIcon } from "../../icons/reports"
import { gtm } from "../../lib/gtm"
import { CustomerListTable } from "src/components/dashboard/customer/customer-list-table"
import { InsightsTotalEvents } from "src/components/dashboard/insights/insights-total-events"

const Events: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" })
  }, [])

  return (
    <>
      <Head>
        <title>Analytics | Healthy Church</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4">Events</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: "center",
                  display: "flex",
                  m: -1,
                }}
              >
                <TextField
                  defaultValue="week"
                  label="Period"
                  select
                  size="small"
                  sx={{ m: 1 }}
                >
                  <MenuItem value="week">Last week</MenuItem>
                  <MenuItem value="month">Last month</MenuItem>
                  <MenuItem value="year">Last year</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Grid container spacing={4}>
              <Grid item md={12} xs={12}>
                <InsightsTotalEvents />
              </Grid>
              <Grid item md={12} xs={12}>
                <AnalyticsTrafficSources sx={{ height: "100%" }} />
              </Grid>

              <Grid item md={12} xs={12}>
                <AnalyticsMostVisited />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

Events.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
)

export default Events
