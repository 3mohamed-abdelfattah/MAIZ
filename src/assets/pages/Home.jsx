import React from 'react'
import style from '../style/Home.module.css'

export default function Home() {
    return (
        <div>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ lineHeight: '100px', letterSpacing: '10px', textAlign: 'center', fontSize: '48px', color: 'white' }}>
                    Hello World !!<br /><span style={{ color: 'wheat', fontSize: '62px' }}>MAIZ</span> Project Under Development
                </p>
            </div>
        </div>
    )
}
