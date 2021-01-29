

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start text-light fixed-bottom">
            {/* <!-- Copyright --> */}
            <div className="text-center p-3 text-light" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Copyright:
    <a className="text-light" target="_blank" href="https://www.starwars.com/"> Star Wars</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    )
}

export default Footer;