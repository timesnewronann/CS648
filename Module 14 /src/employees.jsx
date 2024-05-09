
const employees = [
    {
        id: 1,
        name: 'Ronan Jared Borja',
        ext: '2226',
        email:'ronanborja26@gmail.com',
        title:'Chief Executive Officer',
        dateHired: new Date('2002-02-26'),
        isEmployed:true,
    },
    {
        id: 2,
        name: 'Lauren Tu',
        ext: '1972',
        email:'laurentu@gmail.com',
        title:'Chief Executive Pookiebear',
        dateHired: new Date('2002-07-19'),
        isEmployed:true,
    },
]

class BorderWrap extends React.Component {
    render() {
        const borderStyle = {border: "3px solid silver",
        padding:6}
        return (
            <div style = {borderStyle}>
                {this.props.children}
            </div>
        )
    }
}

class EmployeeList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BorderWrap>
                    <h1>Employee Management Application</h1>
                    <EmployeeFilter />
                    <hr/>
                    <EmployeeTable/>
                    <hr/>
                    <EmployeeAdd/>
                </BorderWrap>
            </React.Fragment>
        )

    }
}

class EmployeeFilter extends React.Component {
    render() {
        return (<div>This is a placeholder for the employee filter.</div>)

    }
}

class EmployeeTable extends React.Component {
    render(){
        const employeeRows = employees.map((employee) =>
        <EmployeeRow key = {employee.id} employee={employee} />)
        return (
            <table className ="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Extension</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Date Hired</th>
                        <th>Currently Employed?</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeRows}
                </tbody>
            </table>
        )

    }
}

class EmployeeRow extends React.Component {
    render() {
        const employee = this.props.employee
        return(
            <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.ext}</td>
                <td>{employee.email}</td>
                <td>{employee.title}</td>
                <td>{employee.dateHired.toDateString()}</td>
                <td>{employee.isEmployed ? 'Yes' : 'No'}</td>
            </tr>
        )
    }
}

class EmployeeAdd extends React.Component {
    render() {
        return (<div>This is a placeholder for employee add</div>)

    }
}




ReactDOM.render(
    <React.StrictMode>
        <EmployeeList/>
    </React.StrictMode>,
    document.getElementById('content')
)