import { useEffect, useState } from "react"
import type { ChangeEvent, FC, MouseEvent } from "react"
import NextLink from "next/link"
import numeral from "numeral"
import PropTypes from "prop-types"
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material"
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right"
import { PencilAlt as PencilAltIcon } from "../../../icons/pencil-alt"
import type { Customer } from "../../../types/customer"
import { getInitials } from "../../../utils/get-initials"
import { Scrollbar } from "../../scrollbar"

interface CustomerListTableProps {
  customers: Customer[]
  customersCount: number
  onPageChange?: (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void
  onRowsPerPageChange?: (event: ChangeEvent<HTMLInputElement>) => void
  page: number
  rowsPerPage: number
}

export const EventsTable: FC<EventsTableProps> = (props) => {
  const {
    events,
    eventsCount,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    ...other
  } = props
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])

  // Reset selected events when events change
  useEffect(
    () => {
      if (selectedEvents.length) {
        setSelectedEvents([])
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [events]
  )

  const handleSelectAllEvents = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedEvents(
      event.target.checked ? events.map((event) => event.id) : []
    )
  }

  const handleSelectOneCustomer = (
    event: ChangeEvent<HTMLInputElement>,
    customerId: string
  ): void => {
    if (!selectedEvents.includes(eventId)) {
      setSelectedEvents((prevSelected) => [...prevSelected, eventId])
    } else {
      setSelectedEvents((prevSelected) =>
        prevSelected.filter((id) => id !== eventId)
      )
    }
  }

  const enableBulkActions = selectedEvents.length > 0
  const selectedSomeEvents =
    selectedEvents.length > 0 && selectedEvents.length < events.length
  const selectedAllCustomers = selectedEvents.length === events.length

  return (
    <div {...other}>
      <Box
        sx={{
          backgroundColor: "neutral.100",
          display: !enableBulkActions && "none",
          px: 2,
          py: 0.5,
        }}
      >
        <Checkbox
          checked={selectedAllEvents}
          indeterminate={selectedSomeEvents}
          onChange={handleSelectAllEvents}
        />
        <Button size="small" sx={{ ml: 2 }}>
          Delete
        </Button>
        <Button size="small" sx={{ ml: 2 }}>
          Edit
        </Button>
      </Box>
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead
            sx={{ visibility: enableBulkActions ? "collapse" : "visible" }}
          >
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAllEvents}
                  indeterminate={selectedSomeEvents}
                  onChange={handleSelectAllEvents}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Orders</TableCell>
              <TableCell>Spent</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => {
              const isCustomerSelected = selectedCustomers.includes(customer.id)

              return (
                <TableRow hover key={customer.id} selected={isCustomerSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isCustomerSelected}
                      onChange={(event) =>
                        handleSelectOneCustomer(event, customer.id)
                      }
                      value={isCustomerSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar
                        src={customer.avatar}
                        sx={{
                          height: 42,
                          width: 42,
                        }}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Box sx={{ ml: 1 }}>
                        <NextLink href="/dashboard/customers/1" passHref>
                          <Link color="inherit" variant="subtitle2">
                            {customer.name}
                          </Link>
                        </NextLink>
                        <Typography color="textSecondary" variant="body2">
                          {customer.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {`${customer.city}, ${customer.state}, ${customer.country}`}
                  </TableCell>
                  <TableCell>{customer.totalOrders}</TableCell>
                  <TableCell>
                    <Typography color="success.main" variant="subtitle2">
                      {numeral(customer.totalAmountSpent).format(
                        `${customer.currency}0,0.00`
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <NextLink href="/dashboard/customers/1/edit" passHref>
                      <IconButton component="a">
                        <PencilAltIcon fontSize="small" />
                      </IconButton>
                    </NextLink>
                    <NextLink href="/dashboard/customers/1" passHref>
                      <IconButton component="a">
                        <ArrowRightIcon fontSize="small" />
                      </IconButton>
                    </NextLink>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={customersCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </div>
  )
}

CustomerListTable.propTypes = {
  customers: PropTypes.array.isRequired,
  customersCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}
