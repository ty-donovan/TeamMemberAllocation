


const Footer = () => {

    let today = new Date();

    return (
        <footer className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h3>Team Member Allocation App - {today.getFullYear()}</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer