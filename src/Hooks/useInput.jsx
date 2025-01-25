import React, { useState } from 'react'

export default function useInput(init) {
    const [value, setValue] = useState(init)

    const binding = {
        value:value ,
        onChange: e => setValue(e.target.value)
    }

    const resetValue = ()=>{
        setValue('')
    }

    return [value , resetValue , binding]

}
