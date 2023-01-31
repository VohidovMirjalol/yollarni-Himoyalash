import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import App from './app.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)