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
      color: "#F99E49",
      data: 40,
      label: "Ministries",
    },
    {
      color: "#EB4EA1",
      data: 40,
      label: "Digital Marketing",
    },
    {
      color: "#6DCFF6",
      data: 30,
      label: "Local Community",
    },
    {
      color: "#54CC86",
      data: 10,
      label: "Referrals",
    },
  ],
}

export const FinanceCostBreakdown: FC = (props) => {
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
    <Card {...props}>
      <CardHeader title="Source Breakdown" />
      <Divider />
      <CardContent>
        <Chart
          height={240}
          options={chartOptions}
          series={chartSeries}
          type="pie"
        />
      </CardContent>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Top Channels</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.series.map((item) => (
            <TableRow key={item.label}>
              <TableCell>
                <Box
                  key={item.label}
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
                  <Typography variant="subtitle2">{item.label}</Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="body2">
                  {item.data}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
