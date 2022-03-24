import { useState } from "react"
import type { FC } from "react"
import type { ApexOptions } from "apexcharts"
import {
  Badge,
  Box,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material"
import type { CardProps } from "@mui/material"
import { alpha, useTheme } from "@mui/material/styles"
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from "../../../icons/information-circle-outlined"
import { Chart } from "../../chart"

const data = {
  series: [
    {
      color: "#6DCFF6",
      data: [
        3350, 1840, 2254, 5780, 9349, 5241, 2770, 2051, 3764, 2385, 3912, 6323,
      ],
      name: "CPL",
    },
    {
      color: "#3A8E5D",
      data: [
        2135, 2341, 2362, 4255, 1300, 1800, 6000, 3756, 3688, 5100, 1500, 735,
      ],
      name: "Spend",
    },
    {
      color: "#EB4EA1",
      data: [
        2220, 1322, 4350, 3300, 2950, 4000, 2312, 1200, 3110, 6056, 490, 1400,
      ],
      name: "Leads",
    },
    {
      color: "#134174",
      data: [
        2450, 1322, 1378, 2200, 1350, 1300, 912, 1400, 2300, 3290, 2310, 2400,
      ],
      name: "Clicks",
    },
    {
      color: "#F99E49",
      data: [
        1350, 2422, 2278, 2200, 1150, 1300, 5112, 8100, 960, 900, 1220, 4000,
      ],
      name: "CPC",
    },
    {
      color: "#C68EF6",
      data: [
        6000, 7222, 3000, 2600, 5110, 2900, 650, 4000, 1000, 3650, 1620, 4890,
      ],
      name: "Impressions",
    },
    {
      color: "#DA6868",
      data: [
        1000, 2222, 2650, 8400, 7222, 1200, 1312, 5100, 7000, 4580, 7890, 9500,
      ],
      name: "MQLS",
    },
  ],
  xaxis: {
    dataPoints: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
      "09 Jan",
      "10 Jan",
      "11 Jan",
      "12 Jan",
    ],
  },
}

export const AnalyticsTrafficSources: FC<CardProps> = (props) => {
  const theme = useTheme()
  const [selectedSeries, setSelectedSeries] = useState([
    "CPL",
    "Spend",
    "Leads",
    "Leads",
    "Clicks",
    "CPC",
    "Impressions",
    "MQLS",
  ])

  const handleChange = (event, name: string): void => {
    if (!event.target.checked) {
      setSelectedSeries(selectedSeries.filter((item) => item !== name))
    } else {
      setSelectedSeries([...selectedSeries, name])
    }
  }

  const chartSeries = data.series.filter((item) =>
    selectedSeries.includes(item.name)
  )

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: chartSeries.map((item) => item.color),
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 10,
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
    legend: {
      show: false,
    },
    markers: {
      hover: {
        size: undefined,
        sizeOffset: 2,
      },
      radius: 2,
      shape: "circle",
      size: 3,
      strokeWidth: 0,
    },
    stroke: {
      curve: "smooth",
      lineCap: "butt",
      width: 3,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: data.xaxis.dataPoints,
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: [
      {
        axisBorder: {
          color: theme.palette.divider,
          show: true,
        },
        axisTicks: {
          color: theme.palette.divider,
          show: true,
        },
        labels: {
          style: {
            colors: theme.palette.text.secondary,
          },
        },
      },
      {
        axisTicks: {
          color: theme.palette.divider,
          show: true,
        },
        axisBorder: {
          color: theme.palette.divider,
          show: true,
        },
        labels: {
          style: {
            colors: theme.palette.text.secondary,
          },
        },
        opposite: true,
      },
    ],
  }

  return (
    <Card {...props}>
      <CardHeader title="" />
      <Divider />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          mt: 4,
          px: 2,
        }}
      >
        {data.series.map((item) => (
          <Box
            key={item.name}
            sx={{
              alignItems: "center",
              display: "flex",
              mr: 2,
            }}
          >
            <Checkbox
              checked={selectedSeries.some(
                (visibleItem) => visibleItem === item.name
              )}
              onChange={(event) => handleChange(event, item.name)}
            />
            <Box
              sx={{
                border: 3,
                borderColor: selectedSeries.some(
                  (visibleItem) => visibleItem === item.name
                )
                  ? item.color
                  : alpha(item.color, 0.4),
                borderRadius: "50%",
                height: 16,
                mr: 1,
                width: 16,
              }}
            />
            <Typography
              sx={{
                color: selectedSeries.some(
                  (visibleItem) => visibleItem === item.name
                )
                  ? "textPrimary"
                  : alpha(theme.palette.text.primary, 0.4),
              }}
              variant="subtitle2"
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Chart
        height={400}
        options={chartOptions}
        series={chartSeries}
        type="line"
      />
    </Card>
  )
}
