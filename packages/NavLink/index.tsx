import * as React from 'react'
import classnames from 'classnames'
import { AnyTag, PropsWithTagProps } from '@duik/core'

import './styles.scss'

type NavLinkBaseProps = {
  className?: string,
  children?: React.ReactNode,
  rightEl?: React.ReactNode,
  highlighted?: boolean,
  icon?: React.ReactNode,
  leftEl?: React.ReactNode,
  // styles
  pill?: boolean,
  secondary?: boolean
}

const getClass = (pill?: boolean, secondary?: boolean) => {
  if (pill) {
    return 'nav-link-pill'
  } else if (secondary) {
    return 'nav-link-secondary'
  }

  return 'nav-link'
}

export type NavLinkProps<T extends AnyTag> = PropsWithTagProps<T, NavLinkBaseProps & { Component?: T }>

export function NavLink<T extends AnyTag>({
  rightEl,
  children,
  className,
  highlighted,
  leftEl,
  icon,
  Component,
  pill,
  secondary,
  ...rest
}: NavLinkProps<T>) {



  return (
    <Component
      className={classnames(getClass(pill, secondary), className, {
        ['highlighted']: highlighted,
      })}
      {...rest}
    >
      <span className={'nav-link-text'}>
        {
          (leftEl || icon) && (
            <span className='left-el-wrapper'>
              {leftEl || icon}
            </span>
          ) || null
        }
        {children}
      </span>
      {rightEl && (
        <span className='right-el-wrapper'>
          {rightEl}
        </span>
      ) || null}
    </Component>
  )
}

NavLink.displayName = "NavLink"

NavLink.defaultProps = {
  className: null,
  rightEl: null,
  highlighted: false,
  leftEl: null,
  children: null,
  Component: 'a',
}

export default NavLink