import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <h1>ERROR 404: PAGE NOT FOUND</h1>
            <Link style = {{ textDecoration: 'none', fontSize: "40px" }}to="/home">TAKE ME HOME!</Link>
        </div>
    )
}
