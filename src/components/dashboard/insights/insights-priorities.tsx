import type { FC } from "react"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import { Truck as TruckIcon } from "../../../icons/truck"
import NextLink from "next/link"
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right"

import { Scrollbar } from "../../scrollbar"
import { SeverityPill } from "../../severity-pill"

interface Vehicle {
  id: string
  endingRoute: string
  startingRoute: string
  status: "success" | "error" | "warning"
  temperature: number
  temperatureLabel: string
  warning?: string
}

const vehicles: Vehicle[] = [
  {
    id: "Social Strategy Meetup 2022",
    endingRoute: "Lake Forest",
    startingRoute: "Marketing",
    status: "success",
    temperature: 8,
    temperatureLabel: "Very Good",
  },
  {
    id: "CMS First Release",
    endingRoute: "Digital",
    startingRoute: "Development",
    status: "warning",
    temperature: 8,
    temperatureLabel: "Very Good",
    warning: "Needs Attention",
  },
  {
    id: "CM 2022 Planning",
    endingRoute: "Digital",
    startingRoute: "Development",
    status: "error",
    temperature: 8,
    temperatureLabel: "Very Good",
    warning: "Late",
  },
  {
    id: "Share Page Generator",
    endingRoute: "Digital",
    startingRoute: "Development",
    status: "success",
    temperature: 8,
    temperatureLabel: "Very Good",
  },
]

export const InsightsPriorities: FC = () => (
  <Card>
    <CardHeader title="Priorities" subheader="From your Board" />
    <Scrollbar>
      <Box sx={{ minWidth: 1200 }}>
        <Table>
          <TableHead>
            <TableRow>
              {" "}
              <TableCell>Title</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Allocation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow
                key={vehicle.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Avatar sx={{ mr: 2 }}>
                      <TruckIcon fontSize="small" />
                    </Avatar>
                    <Typography variant="subtitle2">{vehicle.id}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{vehicle.endingRoute}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {vehicle.startingRoute}
                  </Typography>
                </TableCell>
                <TableCell>
                  <SeverityPill color={vehicle.status}>
                    {vehicle.warning || "On Time"}
                  </SeverityPill>
                </TableCell>
                <TableCell>
                  <LinearProgress
                    value={vehicle.temperature}
                    variant="determinate"
                  />
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      mt: 2,
                    }}
                  >
                    <Typography color="inherit" variant="inherit">
                      {vehicle.temperatureLabel}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <CardActions>
        <NextLink href={"kanban"}>
          <Button
            variant="contained"
            endIcon={<ArrowRightIcon fontSize="small" />}
          >
            Go To Board
          </Button>
        </NextLink>
      </CardActions>
    </Scrollbar>
  </Card>
)
