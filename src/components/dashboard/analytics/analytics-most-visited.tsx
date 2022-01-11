import type { FC } from "react"
import numeral from "numeral"
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material"
import { ExternalLink as ExternalLinkIcon } from "../../../icons/external-link"
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from "../../../icons/information-circle-outlined"
import { Scrollbar } from "../../scrollbar"

interface Page {
  bounceRate: number
  uniqueVisits: number
  url: string
  visitors: number
}

const pages: Page[] = [
  {
    bounceRate: 16,
    uniqueVisits: 74,
    url: "https://saddleback.test/events/MenOnTheEdge/2021/registration",
    visitors: 385,
  },
  {
    bounceRate: 5,
    uniqueVisits: 111,
    url: "https://saddleback.test/events/Christmas/2021/registration",
    visitors: 3125,
  },
  {
    bounceRate: 2,
    uniqueVisits: 659,
    url: "/dashboard",
    visitors: 4125,
  },
  {
    bounceRate: 12,
    uniqueVisits: 547,
    url: "https://saddleback.test/events/GroceryPickup/2021/registration",
    visitors: 7500,
  },
  {
    bounceRate: 10,
    uniqueVisits: 127,
    url: "https://saddleback.test/events/SO/2021/registration",
    visitors: 5478,
  },
  {
    bounceRate: 8,
    uniqueVisits: 155,
    url: "https://saddleback.test/events/Christmas/2020/registration",
    visitors: 2569,
  },
]

export const AnalyticsMostVisited: FC = () => (
  <Card>
    <CardHeader
      title="Most Visited Share Pages"
      action={
        <Tooltip title="Refresh rate is 24h">
          <InformationCircleOutlinedIcon sx={{ color: "action.active" }} />
        </Tooltip>
      }
    />
    <Scrollbar>
      <Table sx={{ minWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell>Page Name</TableCell>
            <TableCell>Visitors</TableCell>
            <TableCell>Unique page visits</TableCell>
            <TableCell>Bounce rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pages.map((page) => (
            <TableRow
              key={page.url}
              sx={{
                "&:last-child td": {
                  border: 0,
                },
              }}
            >
              <TableCell>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <ExternalLinkIcon
                    sx={{
                      color: "action.active",
                      cursor: "pointer",
                    }}
                  />
                  <Typography sx={{ ml: 2 }} variant="body2">
                    {page.url}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{numeral(page.visitors).format("0,0")}</TableCell>
              <TableCell>{numeral(page.uniqueVisits).format("0,0")}</TableCell>
              <TableCell>{page.bounceRate}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbar>
  </Card>
)
