import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Divider,Typography } from '@material-ui/core'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    circle: {
        position: 'absolute',
        height: 16,
        width: 16,
        borderRadius: '50%',
        boxShadow: theme.shadows[3],
        left: 18,
        top: 23,
    },
    verticalLine: {
        position: 'absolute',
        left: 25,
        width: 2,
        background: 'rgba(var(--body), 0.1)',
    },
    upperLine: {
        top: 0,
        height: 23,
    },
    lowerLine: {
        position: 'absolute',
        top: 40,
        left: 25,
        bottom: 0,
    },
    lightBG: {
        background: 'rgba(var(--body),0.03)',
        borderRadius: 4,
    },
    icon: {},
    container:{
        padding:10,
        margin:10,
        borderRadius:5,
        boxShadow: "1px 1px 3px 1px #9E9E9E"
    },
    
}))

const NotificationCard = ({ item, isFirstIndex, isLastIndex }) => {
    const classes = useStyles()
    return (
        <Link   to="/">
        <div className={classes.container}>
            <div  >
                   
                    <div style={{
                        justifyContent:'space-between',
                        alignItems:'center',
                        display:'flex'
                    }} >
                        <Typography variant='title'  >
                            {item.title}
                        </Typography>
                        <small  >
                      {item.time}
                    </small>
                    </div>
                <Typography    variant='caption' >
                    {item.subtitle}
                </Typography>
              
            </div>
        </div>
        </Link>  
    )
}

export default NotificationCard
