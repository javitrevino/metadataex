import type { FC } from "react"
import type { ApexOptions } from "apexcharts"
import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right"
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from "../../../icons/information-circle-outlined"
import { Chart } from "../../chart"
import NextLink from "next/link"

const data = {
  series: [
    {
      color: "#97A4AB",
      data: 4,
      label: "LinkedIn",
    },
    {
      color: "#C96D20",
      data: 10,
      label: "Paid Ads",
    },
    {
      color: "#3A8E5D",
      data: 20,
      label: "Saddleback.com",
    },
    {
      color: "#1C93C4",
      data: 10,
      label: "Twitter",
    },
    {
      color: "#455a64",
      data: 70,
      label: "Facebook",
    },
  ],
}

export const AnalyticsSocialSources: FC = () => {
  const theme = useTheme()

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: data.series.map((item) => item.color),
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    labels: data.series.map((item) => item.label),
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
  }

  const chartSeries = data.series.map((item) => item.data)

  return (
    <Card>
      <CardHeader title="Contribution Sources" />
      <Divider />
      <CardContent>
        <Chart
          height={200}
          options={chartOptions}
          series={chartSeries}
          type="donut"
        />
        <Grid container>
          {data.series.map((item) => (
            <Grid
              item
              key={item.label}
              sx={{
                alignItems: "center",
                display: "flex",
                p: 1,
              }}
              xs={6}
            >
              <Box
                sx={{
                  border: 3,
                  borderColor: item.color,
                  borderRadius: "50%",
                  height: 16,
                  mr: 1,
                  width: 16,
                }}
              />
              <Typography variant="subtitle2">{item.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <NextLink href="invoices">
          <Button
            variant="contained"
            endIcon={<ArrowRightIcon fontSize="small" />}
          >
            See Interactions
          </Button>
        </NextLink>
      </CardActions>
    </Card>
  )
}
