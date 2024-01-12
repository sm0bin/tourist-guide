import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer>
            <div className="p-10 bg-base-300 text-base-content">
                <div className="footer mx-4 md:mx-8 lg:mx-auto max-w-7xl">


                    <aside>
                        <img src="/travel-logo.svg" className="w-24 h-24" alt="brand logo" />
                        <h2 className=" text-4xl font-bold text-blue-400">Tourist <span className="text-yellow-500">Guide</span></h2>
                        <p>Trusted Service Since 1999</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    {/* <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav> */}
                    <form>
                        <header className="footer-title">Newsletter</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Subscribe to our Newsletter:</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@email.com" className="input input-bordered join-item" />
                                <button className="btn btn-info join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className="items-center p-4 bg-neutral text-neutral-content ">
                <div className="footer mx-4 md:mx-8 lg:mx-auto max-w-7xl">
                    <aside className="items-center grid-flow-col">
                        <img src="/travel-logo.svg" className="w-8 h-8" alt="brand logo" />
                        <p>Copyright © Tourist Guide 2023 - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
                        <FaFacebook />
                        <FaYoutube />
                        <RiInstagramFill />
                    </nav>
                </div>
            </div>

        </footer>
    );
};

export default Footer;