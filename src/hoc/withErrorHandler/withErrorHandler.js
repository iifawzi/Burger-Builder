import React, {Component} from "react";
import Modal from "../../components/UI/Modal/Modal"
import Aux from "../Aux/Aux"
import axios from "axios";
const withErrorHandler = (WrappedComponent,axios)=>{
    return class extends Component {
        state = {
            error:null,
        }
        componentWillMount(){
           this.reqInterceptors =  axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error});
            })
            this.resInterceptors = axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            })
        }

        componentWillUnmount(){
            console.log("will unmount")
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }
        errorConfirmed = ()=>{
            this.setState({error:null})
        }
        render(){
            return(
                <Aux>
                <Modal modalClosed={this.errorConfirmed} show={this.state.error}>
                    {this.state.error ? this.state.error.message : null}
                    Something didn't work!
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>
            )
        }
}
}

export default withErrorHandler;