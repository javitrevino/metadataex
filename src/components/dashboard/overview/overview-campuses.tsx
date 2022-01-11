import type { FC } from "react"
import type { ApexOptions } from "apexcharts"
import { format } from "date-fns"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
} from "@mui/material"
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right"
import { useTheme } from "@mui/material/styles"
import { Chart } from "../../chart"
import { Scrollbar } from "../../scrollbar"
import NextLink from "next/link"

const data = {
  series: [
    { name: "Events", data: [12, 24, 36, 48, 60, 72, 84] },
    { name: "SO's", data: [12, 24, 36, 48, 60, 72, 84] },
    { name: "Follow Ups", data: [12, 24, 36, 48, 60, 72, 84] },
  ],
  categories: [
    "Saddleback en Español",
    "Los Angeles",
    "Irvine South",
    "Irvine North",
    "Anaheim",
    "Rancho Capistrano",
    "Lake Forest",
  ],
}

export const OverviewCampuses: FC = (props) => {
  const theme = useTheme()

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#6E7AD8", "#4655CE", "#2F3EB1"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: theme.palette.divider,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    states: {
      active: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      colors: ["transparent"],
      show: true,
      width: 2,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: data.categories,
      labels: {
        style: {
          colors: "#A3A3A3",
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: -12,
        style: {
          colors: "#A3A3A3",
        },
      },
    },
  }

  const chartSeries = data.series

  return (
    <Card {...props}>
      <CardHeader
        subheader={format(new Date(), "MMM yyyy")}
        title="Campus Performance"
      />
      <Divider />
      <Scrollbar>
        <Box
          sx={{
            height: 336,
            minWidth: 500,
            px: 2,
          }}
        >
          <Chart
            height={300}
            options={chartOptions}
            series={chartSeries}
            type="bar"
          />
        </Box>
        <Divider />
        <CardActions>
          <NextLink href={"dashboard/insights"}>
            <Button
              variant="contained"
              endIcon={<ArrowRightIcon fontSize="small" />}
            >
              Go To Insights
            </Button>
          </NextLink>
        </CardActions>
      </Scrollbar>
    </Card>
  )
}
