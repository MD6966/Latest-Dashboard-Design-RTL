import React, {Component} from "react";
import Page from '../page/Page'
import ErrorPage from './components/ErrorPage'

class ErrorBoundary extends Component {
    constructor()
     {
        super()
        this.state ={
            error : null
        }
     }
     static getDerivedStateFromError()
     {
        return{error: true}
     }
    render()
    {
        return (
            <Page
            title="Error 404"
            >
                {this.state.error ? <><ErrorPage /> </> : this.props.children}
            </Page>
        )
    }
}
export default ErrorBoundary