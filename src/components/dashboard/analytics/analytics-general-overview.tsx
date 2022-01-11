import type { FC } from "react"
import type { ApexOptions } from "apexcharts"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  Grid,
  Typography,
} from "@mui/material"
import { alpha, useTheme } from "@mui/material/styles"
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right"
import { ChevronDown as ChevronDownIcon } from "../../../icons/chevron-down"
import { ChevronUp as ChevronUpIcon } from "../../../icons/chevron-up"
import { Chart } from "../../chart"

const LineChart: FC = () => {
  const theme = useTheme()

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#2F3EB1"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
    },
    stroke: {
      width: 3,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  }

  const chartSeries = [{ data: [0, 60, 30, 60, 0, 30, 10, 30, 0] }]

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="line"
      width={120}
    />
  )
}

const BarChart: FC = () => {
  const theme = useTheme()

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#2F3EB1"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  }

  const chartSeries = [{ data: [10, 20, 30, 40, 50, 60, 5] }]

  return (
    <Chart options={chartOptions} series={chartSeries} type="bar" width={120} />
  )
}

export const AnalyticsGeneralOverview: FC = () => (
  <Grid container spacing={4}>
    <Grid item md={3} sm={6} xs={12}>
      <Card>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            px: 3,
            py: 2,
          }}
        >
          <div>
            <Typography color="textSecondary" variant="body2">
              Serving Opps
            </Typography>
            <Typography sx={{ mt: 1 }} variant="h5">
              610
            </Typography>
          </div>
          <LineChart />
        </Box>
        <Divider />
        <CardActions>
          <Button endIcon={<ArrowRightIcon fontSize="small" />}>
            See all visits
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item md={3} sm={6} xs={12}>
      <Card>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            px: 3,
            py: 2,
          }}
        >
          <div>
            <Typography color="textSecondary" variant="body2">
              Events
            </Typography>
            <Typography sx={{ mt: 1 }} variant="h5">
              42
            </Typography>
          </div>
          <LineChart />
        </Box>
        <Divider />
        <CardActions>
          <Button endIcon={<ArrowRightIcon fontSize="small" />}>
            See all visits
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item md={3} sm={6} xs={12}>
      <Card>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            px: 3,
            py: 2,
          }}
        >
          <div>
            <Typography color="textSecondary" variant="body2">
              Messages
            </Typography>
            <Typography sx={{ mt: 1 }} variant="h5">
              108
            </Typography>
          </div>
          <LineChart />
        </Box>
        <Divider />
        <CardActions>
          <Button endIcon={<ArrowRightIcon fontSize="small" />}>
            See all visits
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item md={3} sm={6} xs={12}>
      <Card>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            px: 3,
            py: 2,
          }}
        >
          <div>
            <Typography color="textSecondary" variant="body2">
              Conversions
            </Typography>
            <Typography sx={{ mt: 1 }} variant="h5">
              300
            </Typography>
          </div>
          <BarChart />
        </Box>
        <Divider />
        <CardActions>
          <Button endIcon={<ArrowRightIcon fontSize="small" />}>
            See all visits
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
)
