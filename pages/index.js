import { Button, Input } from '@nextui-org/react'
import React from 'react'

export default function Home () {
    const [data, setData] = React.useState(null)

    React.useEffect(async () => {
        window.console.log("html dom")
    })

    return (
        <>
        <Button>kill me</Button>
        <Input placeholder="Next UI" />
        </>
    )
}