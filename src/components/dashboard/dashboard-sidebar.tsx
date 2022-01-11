import { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import type { FC } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import type { TFunction } from "react-i18next"
import {
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material"
import type { Theme } from "@mui/material"
import { Calendar as CalendarIcon } from "../../icons/calendar"
import { Cash as CashIcon } from "../../icons/cash"
import { ChartBar as ChartBarIcon } from "../../icons/chart-bar"
import { ChartPie as ChartPieIcon } from "../../icons/chart-pie"
import { ChatAlt2 as ChatAlt2Icon } from "../../icons/chat-alt2"
import { ClipboardList as ClipboardListIcon } from "../../icons/clipboard-list"
import { CreditCard as CreditCardIcon } from "../../icons/credit-card"
import { Home as HomeIcon } from "../../icons/home"
import { LockClosed as LockClosedIcon } from "../../icons/lock-closed"
import { Mail as MailIcon } from "../../icons/mail"
import { MailOpen as MailOpenIcon } from "../../icons/mail-open"
import { Newspaper as NewspaperIcon } from "../../icons/newspaper"
import { OfficeBuilding as OfficeBuildingIcon } from "../../icons/office-building"
import { ReceiptTax as ReceiptTaxIcon } from "../../icons/receipt-tax"
import { Selector as SelectorIcon } from "../../icons/selector"
import { Share as ShareIcon } from "../../icons/share"
import { ShoppingBag as ShoppingBagIcon } from "../../icons/shopping-bag"
import { ShoppingCart as ShoppingCartIcon } from "../../icons/shopping-cart"
import { Truck as TruckIcon } from "../../icons/truck"
import { UserCircle as UserCircleIcon } from "../../icons/user-circle"

import { Users as UsersIcon } from "../../icons/users"
import { XCircle as XCircleIcon } from "../../icons/x-circle"
import { Logo } from "../logo"
import { Scrollbar } from "../scrollbar"
import { DashboardSidebarSection } from "./dashboard-sidebar-section"
import { OrganizationPopover } from "./organization-popover"
import { EventsIcon } from "../custom-icons/EventsIcon"
import { ServingOppsIcon } from "../custom-icons/ServingOppsIcon"
import { InsightsIcon } from "../custom-icons/InsightsIcon"
import { Phone as PhoneIcon } from "../../icons/phone"
import { CommunicationsIcon } from "../custom-icons/CommunicationsIcon"
import { DevToolsIcon } from "../custom-icons/DevToolsIcon"
import { Bell } from "src/icons/bell"

interface DashboardSidebarProps {
  onClose: () => void
  open: boolean
}

interface Item {
  title: string
  children?: Item[]
  chip?: ReactNode
  icon?: ReactNode
  path?: string
}

interface Section {
  title: string
  items: Item[]
}

const getSections = (t: TFunction): Section[] => [
  {
    title: t("General"),
    items: [
      {
        title: t("Overview"),
        path: "/dashboard",
        icon: <HomeIcon fontSize="small" />,
      },
      {
        title: t("Events"),
        path: "/dashboard/events",
        icon: <EventsIcon fontSize="small" />,
      },
      {
        title: t("Serving Opps"),
        path: "/dashboard/serving-opps",
        icon: <ServingOppsIcon fontSize="small" />,
      },
      {
        title: t("Insights"),
        path: "/dashboard/insights",
        icon: <InsightsIcon fontSize="small" />,
      },
      {
        title: t("Follow Ups"),
        path: "/dashboard/customers",
        icon: <UserCircleIcon fontSize="small" />,
      },
    ],
  },
  {
    title: t("MANAGEMENT"),
    items: [
      {
        title: t("Priorities Board"),
        path: "/dashboard/kanban",
        icon: <ClipboardListIcon fontSize="small" />,
      },
      {
        title: t("Interactions"),
        path: "/dashboard/invoices",
        icon: <MailIcon fontSize="small" />,
      },
      {
        title: t("Inbox"),
        path: "/dashboard/chat",
        icon: <ChatAlt2Icon fontSize="small" />,
      },
      {
        title: t("Calendar"),
        path: "/dashboard/calendar",
        icon: <CalendarIcon fontSize="small" />,
      },
    ],
  },
  {
    title: t("UTILS"),
    items: [
      {
        title: t("Mobile Engagement"),
        path: "#",
        icon: <PhoneIcon fontSize="small" />,
      },
      {
        title: t("Communications"),
        path: "#",
        icon: <CommunicationsIcon fontSize="small" />,
      },
      {
        title: t("Dev Tools"),
        icon: <DevToolsIcon fontSize="small" />,
        path: "#",
      },
      {
        title: t("Notifications"),
        path: "#",
        icon: <Bell fontSize="small" />,
      },
    ],
  },
]

export const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const { onClose, open } = props
  const router = useRouter()
  const { t } = useTranslation()
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
  })
  const sections = useMemo(() => getSections(t), [t])
  const organizationsRef = useRef<HTMLButtonElement | null>(null)
  const [openOrganizationsPopover, setOpenOrganizationsPopover] =
    useState<boolean>(false)

  const handlePathChange = () => {
    if (!router.isReady) {
      return
    }

    if (open) {
      onClose?.()
    }
  }

  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady, router.asPath]
  )

  const handleOpenOrganizationsPopover = (): void => {
    setOpenOrganizationsPopover(true)
  }

  const handleCloseOrganizationsPopover = (): void => {
    setOpenOrganizationsPopover(false)
  }

  const content = (
    <>
      <Scrollbar
        sx={{
          height: "100%",
          "& .simplebar-content": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div>
            <Box sx={{ p: 3 }}>
              <NextLink href="/dashboard" passHref>
                <a>
                  <Logo
                    sx={{
                      height: 42,
                      width: 42,
                    }}
                  />
                </a>
              </NextLink>
            </Box>
          </div>

          <Box sx={{ flexGrow: 1 }}>
            {sections.map((section) => (
              <DashboardSidebarSection
                key={section.title}
                path={router.asPath}
                sx={{
                  mt: 2,
                  "& + &": {
                    mt: 2,
                  },
                }}
                {...section}
              />
            ))}
          </Box>
          <Divider
            sx={{
              borderColor: "#2D3748", // dark divider
            }}
          />
        </Box>
      </Scrollbar>
      <OrganizationPopover
        anchorEl={organizationsRef.current}
        onClose={handleCloseOrganizationsPopover}
        open={openOrganizationsPopover}
      />
    </>
  )

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#1C2530",
            borderRightColor: "divider",
            borderRightStyle: "solid",
            borderRightWidth: (theme) =>
              theme.palette.mode === "dark" ? 1 : 0,
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    )
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
}
