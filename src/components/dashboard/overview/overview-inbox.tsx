import type { FC } from "react"
import NextLink from "next/link"

import { formatDistanceToNowStrict, subHours, subMinutes } from "date-fns"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material"

interface Message {
  id: string
  content: string
  date: Date
  senderAvatar: string
  senderName: string
  unread?: boolean
}

const messages: Message[] = [
  {
    id: "b91cbe81ee3efefba6b915a7",
    content: "jeffreydawson@saddleback.com",
    date: subMinutes(new Date(), 2),
    senderAvatar: "/static/mock-images/avatars/avatar-carson_darrin.png",
    senderName: "Jeffrey Dawson",
    unread: true,
  },
  {
    id: "de0eb1ac517aae1aa57c0b7e",
    content: "mariomiller@saddleback.com",
    date: subMinutes(new Date(), 56),
    senderAvatar: "/static/mock-images/avatars/avatar-fran_perez.png",
    senderName: "Mario Miller",
    unread: false,
  },
  {
    id: "38e2b0942c90d0ad724e6f40",
    content: "jenniferchung@saddleback.com",
    date: subHours(subMinutes(new Date(), 23), 3),
    senderAvatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
    senderName: "Jennifer Chung",
    unread: false,
  },
  {
    id: "467505f3356f25a69f4c4890",
    content: "heatherwright@saddleback.com",
    date: subHours(subMinutes(new Date(), 6), 8),
    senderAvatar: "/static/mock-images/avatars/avatar-anika_visser.png",
    senderName: "Heather Wright",
    unread: false,
  },
  {
    id: "7e6af808e801a8361ce4cf8b",
    content: "jeffreysampson@saddleback.com",
    date: subHours(subMinutes(new Date(), 18), 10),
    senderAvatar: "/static/mock-images/avatars/avatar-miron_vitold.png",
    senderName: "Jeffrey Sampson",
    unread: false,
  },
]

export const OverviewInbox: FC = (props) => (
  <Card {...props}>
    <CardHeader title="Follow Ups" />
    <Divider />
    <List disablePadding>
      {messages.map((message, index) => (
        <ListItem divider={index + 1 < messages.length} key={message.id}>
          <ListItemAvatar>
            <Avatar src={message.senderAvatar} />
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Typography variant="subtitle2">
                  {message.senderName}
                </Typography>
                {message.unread && (
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      borderRadius: "50%",
                      height: 8,
                      ml: 1,
                      width: 8,
                    }}
                  />
                )}
              </Box>
            }
            secondary={
              <Typography color="textSecondary" variant="body2">
                {message.content}
              </Typography>
            }
            sx={{ pr: 2 }}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
    <CardActions>
      <NextLink href={"dashboard/customers"} passHref>
        <Button variant="contained">Go to Follow Ups</Button>
      </NextLink>
    </CardActions>
  </Card>
)
