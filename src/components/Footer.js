import { FcCopyright } from "react-icons/fc";

function Footer() {
    return (
        <div
            style={{ height: '10vh' }}
            className="bg-secondary-subtle container-fluid position-absolute bottom-0"
        >
            <div className="container">
                <div className="d-flex justify-content-center align-items-center align-content-center">
                    <div className="mt-3">
                        <FcCopyright /> All rights reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;