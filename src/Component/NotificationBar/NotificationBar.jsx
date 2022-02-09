import React, { useState } from 'react'
import { Icon, Badge, Button, IconButton, Drawer, Typography,Divider } from '@material-ui/core'
import { ThemeProvider, useTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import NotificationCard from './NotificationCard'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    notification: {
        width: 360,
        
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
        },
        '& .notification__topbar': {
            height: 'var(--topbar-height)',
        },
    },
    notificationCard: {
        '&:hover': {
            '& .delete-button': {
                cursor: 'pointer',
                display: 'unset',
                right: 0,
                marginTop: 6,
                top: 0,
                zIndex: 2,
            },
            '& .card__topbar__time': {
                display: 'none',
            },
        },
        '& .delete-button': {
            display: 'none',
            position: 'absolute',
            right: 0,
            marginTop: 9,
        },
        '& .card__topbar__button': {
            borderRadius: 15,
            opacity: 0.9,
        },
    },
}))

const NotificationBar2 = ({ container }) => {
    const [panelOpen, setPanelOpen] = useState(false)
    const theme = useTheme()
    const dispatch = useDispatch()
    const classes = useStyles()
   
    const [notifcationList,setNotificationList] =useState([
        {
            title:"Title 1",
            subtitle:"Content 1",
            time:"2 hour ago"

        },
        {
            title:"Title 2",
            subtitle:"Content 2",
            time:"2 hour ago"

        },
        {
            title:"Title 3",
            subtitle:"Content 3",
            time:"2 hour ago"

        },
        {
            title:"Title 4",
            subtitle:"Content 4",
            time:"2 hour ago"

        },
    ])
    const handleDrawerToggle = () => {
        setPanelOpen(!panelOpen)
    }
    const parentThemePalette = theme.palette

    return (
        <div>
            <IconButton
                onClick={handleDrawerToggle}
                style={{
                    color:'white'
                }}
            >
                <Badge color="secondary" badgeContent={5}>
                    <Icon  >notifications</Icon>
                </Badge>
            </IconButton>
            <Drawer
                width={'100px'}
                variant="temporary"
                anchor={'right'}
                open={panelOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                  
             
                <Typography variant={'h5'}  align={'center'}  >Danh sách thông báo</Typography>
           
            <Divider />
                <div className={classes.notification}>
                    {notifcationList.map((item, ind) => (
                        <NotificationCard
                            item={item}
                            isLastIndex={ind === notifcationList.length - 1}
                            isFirstIndex={ind === 0}
                            key={ind}
                        />
                    ))}
                </div>
            </Drawer>
      
       </div>
    )
}

export default NotificationBar2
