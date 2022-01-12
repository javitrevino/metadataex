import type { FC } from "react"
import type { ApexOptions } from "apexcharts"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  Typography,
} from "@mui/material"
import { alpha, useTheme } from "@mui/material/styles"
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right"
import { ChevronUp as ChevronUpIcon } from "../../../icons/chevron-up"
import { Chart } from "../../chart"
import NextLink from "next/link"

export const EventsOverview: FC = (props) => {
  const theme = useTheme()

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#00AEEF"],
    fill: {
      opacity: 1,
    },
    labels: [],
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: false,
        },
        hollow: {
          size: "40%",
        },
        track: {
          background: "#1C93C4",
        },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
  }

  const chartSeries = [76]

  return (
    <Card {...props}>
      <Box
        sx={{
          alignItems: {
            sm: "center",
          },
          display: "flex",
          flexWrap: "wrap",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Chart
          height={140}
          options={chartOptions}
          series={chartSeries}
          type="radialBar"
          width={160}
        />
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            pt: {
              sm: 3,
            },
            pb: 3,
            pr: 4,
            pl: {
              xs: 4,
              sm: 0,
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              mr: 3,
            }}
          >
            <Typography variant="h4">11 Events</Typography>
            <Typography color="textSecondary" sx={{ mt: 1 }} variant="body2">
              Total Active Events
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <CardActions>
        <NextLink href={"dashboard/events"}>
          <Button
            variant="contained"
            endIcon={<ArrowRightIcon fontSize="small" />}
          >
            Go To Events
          </Button>
        </NextLink>
      </CardActions>
    </Card>
  )
}
