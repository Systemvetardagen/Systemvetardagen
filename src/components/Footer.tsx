import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t] = useTranslation('global');
    return (
        <footer className="bg-white w-full">
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            <div className="container mx-auto flex justify-evenly items-center px-4 py-6">
                {' '}
                <div className="text-left text-gray-600">
                    <h3 className="font-bold text-xl">Systemvetardagen 2026</h3>
                    <p className="text-sm w-1/2">
                        Organized by Studentkåren DISK at the Department of
                        Computer and Systems Sciences at Stockholm University.
                    </p>
                    <p className="text-sm">
                        <a
                            href="https://www.google.com/maps/place/DSV,+Institutionen+f%C3%B6r+data-+och+systemvetenskap/@59.4068103,17.9426538,543m/data=!3m1!1e3!4m15!1m8!3m7!1s0x465f9eedb4b0b12f:0x17108ff333fa684a!2sBorgarfjordsgatan+6C,+164+40+Kista!3b1!8m2!3d59.4068103!4d17.9452287!16s%2Fg%2F11c5d8mhp9!3m5!1s0x465f9eed05efbb67:0x18ac39c13897c4a9!8m2!3d59.4067198!4d17.9452225!16s%2Fg%2F1tczcj6x?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Borgarfjordsgatan 6C 164 40 Kista
                        </a>
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <a
                            href="https://www.facebook.com/Systemvetardagen/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/svgs/facebook.svg" alt="facebook logo" />
                        </a>
                        <a
                            href="https://www.instagram.com/systemvetardagen/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/svgs/instagram.svg"
                                alt="instagram logo"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/systemvetardagen/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/svgs/linkedin.svg" alt="linkedin logo" />
                        </a>
                    </div>
                    <div className='text-xs text-gray-600'>
                        {/* dessa emails e inte rätt lol */}
                        <span>Business Relations: </span>
                        <a className='text-link' href="mailto:bsc@systemvetardagen.se">
                            bsc@systemvetardagen.se
                        </a>
                        <br />
                        <span>Sales: </span>
                        <a className='text-link' href="mailto:management@systemvetardagen.se">
                            management@systemvetardagen.se
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
