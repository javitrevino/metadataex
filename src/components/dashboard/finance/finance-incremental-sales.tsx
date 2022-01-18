import type { FC } from "react"
import type { ApexOptions } from "apexcharts"
import numeral from "numeral"
import {
  Badge,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { Chart } from "../../chart"

const data = {
  series: [
    {
      color: "#00254D",
      category: "Rancho Capistrano",
      data: 3753,
    },
    {
      color: "#54CC86",
      category: "Saddleback En Español",
      data: 5271,
    },
    {
      color: "#F99E49",
      category: "Lake Forest",
      data: 6293,
    },
    {
      color: "#C68EF6",
      category: "San Clemente",
      data: 1059,
    },
    {
      color: "#00AEEF",
      category: "Los Angeles",
      data: 1321,
    },
  ],
}

export const FinanceIncrementalSales: FC = (props) => {
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
    grid: {
      borderColor: theme.palette.divider,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "45",
        distributed: true,
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: data.series.map((item) => item.category),
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  }

  const chartSeries = [
    {
      data: data.series.map((item) => item.data),
      name: "Instances",
    },
  ]

  return (
    <Card {...props}>
      <CardHeader title="Campus SO Visits" />
      <Divider />
      <CardContent>
        <Chart
          height={350}
          options={chartOptions}
          series={chartSeries}
          type="bar"
        />
      </CardContent>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Campus Label</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.series.map((item) => (
            <TableRow key={item.data}>
              <TableCell>
                <Box
                  key={item.category}
                  sx={{
                    alignItems: "center",
                    display: "flex",
                  }}
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
                  <Typography variant="subtitle2">{item.category}</Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="body2">
                  {numeral(item.data).format("$0,0.00")}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
