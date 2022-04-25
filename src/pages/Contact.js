import React from "react"

class Contact extends React.Component {
    constructor(props){
        super(props)
    }
     componentWillMount(){
        console.log("COmponentWilMount!")
 }

    componentDidMount(){
        console.log("componentDidMount!!")
    }

     componentWillUnmount() {
     console.log("componentWillUnmount!!!")
     }

    render() {
        return (
            <section>
                <div className="container-fluid" >
                    <div className="row">
                        <h1> Contact </h1>
                    </div>
                    <div className="row">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum mi purus, eu hendrerit felis eleifend in. Vivamus sapien massa, venenatis a nunc id, rhoncus tincidunt nisl. Suspendisse nunc arcu, porttitor vitae sodales non, pharetra vel elit. Sed vitae dignissim orci. Ut eget nulla vel erat euismod laoreet sed nec. {this.props.name}
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact