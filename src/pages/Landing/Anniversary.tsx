const Anniversary = () => {
    return (
        <section id="30" className="my-5 flex flex-col md:flex-row gap-4">
            <div id="left" className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-4xl font-semibold">
                    Systemvetardagen 2026
                </h2>
                <h3 className="text-3xl">
                    Three decades of connecting with top companies
                </h3>
                <p className="">
                    This year marks the{' '}
                    <span className="text-primary font-semibold">
                        30th annual Systemvetardagen
                    </span>
                    , the premier tech job fair for students and professionals
                    in the IT ans System Science field! Organized by{' '}
                    <span className="text-accent">Studentkåren DISK</span>,
                    Systemvetardagen has been the go-to event for fostering
                    connections between ambitious tech students and leading
                    companies in Sweden.
                </p>
                <p>
                    Whether you&apos;re looking for internships, full-time
                    positions, or just want to explore the latest trends in IT,
                    Systemvetardagen 2026 is the place to be. Join us for a day
                    of networking, inspiring talks and exciting opportunities to
                    meet your future colleagues.
                </p>
            </div>
            <div id="right">
                <img
                    className="rounded-md"
                    src="/images/2024logoWithShirt.webp"
                    alt=""
                />
            </div>
        </section>
    );
};

export default Anniversary;
