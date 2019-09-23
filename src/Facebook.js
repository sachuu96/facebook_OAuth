import React,{Component} from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component{
  state={
    isLoggedIn:false,
    userID:'',
    name:'',
    email:'',
    picture:''
  }

  responseFacebook = response =>{
    console.log(response);
    this.setState({
      isLoggedIn:true,
      userID:response.userID,
      name:response.name,
      email:response.email,
      picture:response.picture.data.url
    })
  }
  componentClicked = ()=>{
    console.log("clicked");
  }
  render(){
    let fbContent;
    if(this.state.isLoggedIn)
    {
      fbContent=(
        <div style={{
          width:'600px',
          margin:'auto',
          background:'#000000',
          padding:'20px',

        }}>
        <img style={{width:'100px', height:'100px'}}src={this.state.picture} alt={this.state.name}/>
        <h4>Welcome {this.state.name}
        <br/>
        Email: {this.state.email}</h4>
        </div>
      );
    }
    else{
      fbContent=(
        <FacebookLogin
        appId="423770845163882"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        />);
    }
    return(
      <div>
          {fbContent}
      </div>
    )
  }
}
