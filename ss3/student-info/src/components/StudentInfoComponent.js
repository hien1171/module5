import {Component} from "react";

class StudentInfoComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            students:[
                {
                    "id":1,
                    "name":"A",
                    "age":19,
                    "address":"Da Nang"
                },
                {
                   "id":2,
                    "name":"B",
                    "age":20,
                    "address":"Ha Noi"
                }
            ]

        }
    }

    render(){
        return (
            <>
                <h1>Danh sach lop {this.props.name}</h1>
                <table >
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map((item,index)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))

                    }
                    </tbody>
                </table>
            </>
        )
    }
}

export default StudentInfoComponent;