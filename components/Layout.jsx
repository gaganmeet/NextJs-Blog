import React from 'react'
import { Children } from 'react/cjs/react.production.min'
import { Header } from './'

const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
