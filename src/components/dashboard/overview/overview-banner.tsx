import type { FC } from "react"
import PropTypes from "prop-types"
import {
  Box,
  Button,
  Card,
  CardActions,
  Chip,
  Divider,
  Typography,
} from "@mui/material"

interface OverviewBannerProps {
  onDismiss?: () => void
}

export const OverviewBanner: FC<OverviewBannerProps> = (props) => {
  const { onDismiss, ...other } = props

  return (
    <Card
      sx={{
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        p: 4,
      }}
      {...other}
    >
      <Box
        sx={{
          mr: 4,
          width: 200,
          height: 200,
          "& img": {
            height: 200,
            width: "auto",
          },
        }}
      >
        <img alt="" src="/static/banner-illustration.png" />
      </Box>
      <div>
        <div>
          <Chip color="secondary" label="New" />
        </div>
        <Typography color="inherit" sx={{ mt: 2 }} variant="h4">
          Welcome to Material Kit Pro v5!
        </Typography>
        <Typography color="inherit" sx={{ mt: 1 }} variant="subtitle2">
          Your dashboard has been improved! Explore new features like
          Notifications, Search, Jobs Platform and more.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button color="secondary" onClick={onDismiss} variant="contained">
            Dismiss Banner
          </Button>
        </Box>
      </div>
      <Divider />
      <CardActions>
        <NextLink href={"dashboard/serving-opps"}>
          <Button
            variant="contained"
            endIcon={<ArrowRightIcon fontSize="small" />}
          >
            Go To SO&#39;s
          </Button>
        </NextLink>
      </CardActions>
    </Card>
  )
}

OverviewBanner.propTypes = {
  onDismiss: PropTypes.func,
}
