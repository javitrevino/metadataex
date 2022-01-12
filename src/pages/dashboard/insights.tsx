import { useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { AuthGuard } from "../../components/authentication/auth-guard"
import { DashboardLayout } from "../../components/dashboard/dashboard-layout"
import { LogisticsOverview } from "../../components/dashboard/insights/logistics-overview"
import { InsightsTotalEvents } from "../../components/dashboard/insights/insights-total-events"
import { InsightsItemMetrics } from "../../components/dashboard/insights/insights-item-metrics"
import { InsightsPriorities } from "../../components/dashboard/insights/insights-priorities"
import { Cog as CogIcon } from "../../icons/cog"
import { Download as DownloadIcon } from "../../icons/download"
import { Reports as ReportsIcon } from "../../icons/reports"
import { gtm } from "../../lib/gtm"
import { FinanceSalesByContinent } from "src/components/dashboard/finance/finance-sales-by-continent"
import { AnalyticsSocialSources } from "src/components/dashboard/analytics/analytics-social-sources"
import { OverviewCampuses } from "src/components/dashboard/overview/overview-campuses"

const Logistics: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" })
  }, [])

  return (
    <>
      <Head>
        <title>Ministry Management | Insights</title>
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
                <Typography variant="h4">Insights</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  m: -1,
                }}
              >
                <Button
                  startIcon={<ReportsIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Export Report
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Grid container spacing={4}>
              <Grid item xl={12} xs={12}>
                <InsightsItemMetrics />
              </Grid>

              <Grid item xs={12}>
                <InsightsPriorities />
              </Grid>
              <Grid item md={4} xs={12}>
                <AnalyticsSocialSources />
              </Grid>
              <Grid item md={8} xs={12}>
                <OverviewCampuses />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

Logistics.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
)

export default Logistics
