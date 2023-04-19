import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";


const Employees = ({selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange, employees}) => {

    return (
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
                <div className='col-8'>
                    <div className="card-collection">
                        {
                            employees.map((employee) => (
                                <div id={employee.id} className={(employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2")} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>

                                    {(employee.gender) === "male" ? <img src={maleProfile} className='card-img-top' alt="maleProfile"/> : <img src={femaleProfile} className='card-img-top' alt="femaleProfile"/>}
                                    <div>
                                        <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                                        <p className='card-text'><b>Designation:</b> {employee.designation}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees