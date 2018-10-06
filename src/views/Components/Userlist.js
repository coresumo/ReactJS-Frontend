import React,{ Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state={
    	selectedObject:""
    }
   }
   actionTemplate() {
        return <div>
            <i className="fa fa-edit" onClick={this.props.editUser}></i> 
            

        </div>;
    }
    componentWillReceiveProps(PropsData){
      console.log("==nextprops",PropsData.selectedCar1)
      this.setState({selected : PropsData.selectedCar1}) 
    }
    render() {
    return (
        <div>
           <DataTable value={this.props.data} paginator={true} selectionMode="single" selection={this.props.selectedCar1} responsive={true} onSelectionChange={this.props.changeSelection} rows={5} rowsPerPageOptions={[5,10,20]}>
                <Column field="vin" header="Vin" sortable={true}/>
                <Column field="year" header="Year" sortable={true}/>
                <Column field="brand" header="Brand" sortable={true}/>
                <Column field="color" header="Color" sortable={true}/>
                <Column header="Action" body={this.actionTemplate.bind(this)} style={{textAlign:'center', width: '6em'}}/>
            </DataTable>
        <select id="lang" onChange={this.props.change} value={this.props.chnagevalue}>
                  <option value="select">Select</option>
                  <option value="Java">Java</option>
                  <option value="C++">C++</option>
        </select>
        <p>{this.props.chnagevalue}</p>
        </div>
    )
   }
}
export default UserList;

