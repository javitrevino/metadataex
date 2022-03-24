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
import { FinanceCostBreakdown } from "../../components/dashboard/finance/finance-cost-breakdown"
import { FinanceOverview } from "../../components/dashboard/finance/finance-overview"
import { FinanceIncrementalSales } from "../../components/dashboard/finance/finance-incremental-sales"
import { FinanceProfitableProducts } from "../../components/dashboard/finance/finance-profitable-products"
import { FinanceSalesByContinent } from "../../components/dashboard/finance/finance-sales-by-continent"
import { FinanceSalesRevenue } from "../../components/dashboard/finance/finance-sales-revenue"
import { Download as DownloadIcon } from "../../icons/download"
import { Reports as ReportsIcon } from "../../icons/reports"
import { Cog as CogIcon } from "../../icons/cog"
import { gtm } from "../../lib/gtm"
import { InsightsTotalEvents } from "src/components/dashboard/insights/insights-total-events"
import { InsightsTotalSO } from "src/components/dashboard/insights/insights-total-so"

const ServingOpps: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" })
  }, [])

  return (
    <>
      <Head>
        <title>Serving Opps Task 2 Exercise</title>
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
                <Typography variant="h4">Serving Opps</Typography>
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
          <Grid container spacing={4}>
            <Grid item md={12} xs={12}>
              <InsightsTotalSO />
            </Grid>
            <Grid item md={8} xs={12}>
              <FinanceSalesRevenue />
            </Grid>
            <Grid item md={4} xs={12}>
              <FinanceCostBreakdown />
            </Grid>

            <Grid item md={12} xs={12}>
              <FinanceIncrementalSales />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

ServingOpps.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
)

export default ServingOpps
