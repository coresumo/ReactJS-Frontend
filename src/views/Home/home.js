import React, { Component } from 'react';
import Documents from '../Components/Documents';
import UserList  from '../Components/Userlist';
import ModalPopUp  from '../Components/modal';
import {Button} from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      danger: false,
      modaltitle:'add case',
      selectedCar1:'',
      chnagevalue:'',
      data:[{'vin':'aaa',year:'2001',color:'green',brand:'wwe'},{'vin':'bbb',year:'2002',color:'yellow',brand:'xyz'}],
      data1:[{'vin':'aaa',year:'2001',color:'green',brand:'wwe'}]

    }
  }
  changeSelectionRecords(e){
    this.setState({selectedCar1: e.data})
  }
  editUser(e){
  this.setState({ selectedCar1: e }, () => {
  console.log(this.state.selectedCar1, 'selectedCar1');
  console.log("-------------",this.state.selectedCar1)
  this.toggleDanger()
}); 
    
  }
  deleteUser(){
    alert('');
  }
  actionTemplate() {

        return <div>
            <i className="fa fa-trash" onClick={this.editUser}></i> 
            

        </div>;

  }
  changeHandler(event,stateName) {
    this.setState({ yourName: event.target.value }, () => 
    console.log(this.state.yourName));
  }
   toggleDanger() {
    this.setState({danger: !this.state.danger});
  }
  change(event){
   this.setState({chnagevalue: event.target.value});
   this.setState({ data: this.state.data1 })
  }
  render() {
    return (
      <div className="animated fadeIn">
       <UserList change={this.change.bind(this)} chnagevalue={this.state.chnagevalue} data={this.state.data} editUser={this.editUser.bind(this,this.state.selectedCar1)} actionTemplate={this.actionTemplate} selectedCar1={this.state.selectedCar1} changeSelection={this.changeSelectionRecords.bind(this)}/>
        <p>{this.state.chnagevalue}</p>
       <ModalPopUp modaltitle={this.state.modaltitle} buttonName='Add Case' danger={this.state.danger} toggleDanger={this.toggleDanger.bind(this)}>
       <h1> Case modal</h1>
       vin : {this.state.selectedCar1.vin}
       year : {this.state.selectedCar1.year}
       </ModalPopUp>
        </div>
   );
  }
}

export default Home;
