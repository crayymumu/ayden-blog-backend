import type { ReactNode } from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { CanAccess, useMenu } from '@refinedev/core'
import { Link } from 'react-router'

export function Menu() {
  const { menuItems, selectedKey } = useMenu()

  return (
    <nav aria-label="resource list">
      <List sx={{ paddingY: '24px' }}>
        {menuItems.map((item) => {
          return (
            <CanAccess
              key={item.key}
              action="list"
              resource={item.identifier || item.name.toLowerCase()}
            >
              {item.children.map((child) => {
                if (child.meta?.hide)
                  return null
                if (!child?.route)
                  return null
                const isSelected
                  = selectedKey === child.key || selectedKey.includes(child.key)

                return (
                  <MenuItem
                    key={child.key}
                    isSelected={isSelected}
                    icon={child.meta?.icon}
                    route={child.route}
                    label={child.label}
                  />
                )
              })}
            </CanAccess>
          )
        })}
      </List>
    </nav>
  )
}

interface MenuItemProps {
  isSelected: boolean
  icon: ReactNode
  route: string
  label: string | undefined
  rightSlot?: ReactNode
}

function MenuItem({
  isSelected,
  icon,
  route,
  label,
  rightSlot,
}: MenuItemProps) {
  return (
    <ListItem
      disablePadding
      sx={{
        'borderRadius': '12px',
        'bgcolor': isSelected ? 'primary.50' : 'transparent',
        '& .MuiListItemButton-root': {
          paddingTop: '0px',
          paddingBottom: '0px',
          paddingLeft: '12px',
          paddingRight: '8px',
          height: '40px',
          borderRadius: '12px',
        },
        '& .Mui-selected': {
          bgcolor: 'unset',
        },
        '&:not(:last-child)': {
          marginBottom: '8px',
        },
      }}
    >
      <ListItemButton component={Link} to={route} selected={isSelected}>
        <ListItemIcon
          sx={{
            'minWidth': '24px',
            'color': isSelected ? 'primary.main' : 'text.secondary',
            'strokeWidth': isSelected ? '2px' : '1.5px',
            '& svg > g': { strokeWidth: isSelected ? '1.5px' : '1px' },
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            noWrap: true,
            color: isSelected ? 'primary.700' : 'text.primary',
            fontWeight: isSelected ? 600 : 400,
            fontSize: '14px',
            lineHeight: '24px',
          }}
        />
        {rightSlot}
      </ListItemButton>
    </ListItem>
  )
}
