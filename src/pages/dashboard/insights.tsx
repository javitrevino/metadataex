import { useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { AuthGuard } from "../../components/authentication/auth-guard"
import { DashboardLayout } from "../../components/dashboard/dashboard-layout"
import { LogisticsOverview } from "../../components/dashboard/logistics/logistics-overview"
import { InsightsTotalEvents } from "../../components/dashboard/logistics/insights-total-events"
import { InsightsItemMetrics } from "../../components/dashboard/logistics/insights-item-metrics"
import { InsightsPriorities } from "../../components/dashboard/logistics/insights-priorities"
import { Cog as CogIcon } from "../../icons/cog"
import { Download as DownloadIcon } from "../../icons/download"
import { Reports as ReportsIcon } from "../../icons/reports"
import { gtm } from "../../lib/gtm"
import { FinanceSalesByContinent } from "src/components/dashboard/finance/finance-sales-by-continent"

const Logistics: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" })
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard: Logistics | Material Kit Pro</title>
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
              <Grid item xl={6} xs={12}>
                <InsightsItemMetrics />
              </Grid>
              <Grid item xl={6} xs={12}>
                <InsightsTotalEvents />
              </Grid>

              <Grid item xs={12}>
                <InsightsPriorities />
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
