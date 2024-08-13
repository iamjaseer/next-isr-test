import Link from "next/link"



export default function Timeline(data) {


    const timelineData = data.data



    return (
        <>
            <div className="timeline realtive">
                <div className="outer">
                    {timelineData && timelineData.map((item, key) => {
                        return (
                            <div className={`${item.timeLineAcf.soon == true ? 'soon' : null} card`} key={key}>
                                <div className="sm:p-20 p-5 relative z-10" data-aos="fade-in">
                                    <h2  className={`${item.timeLineAcf.soon == true ? 'opacity-50' : null} title md:text-[1.5rem] text-[1.2rem] uppercase mb-1`}>
                                        {item.timeLineAcf.year}
                                    </h2>
                                    <h3  className={`${item.timeLineAcf.soon == true ? 'opacity-50' : null} title md:text-[2rem] text-[1.2rem] font-semibold uppercase mb-3`}>
                                        {item.title}
                                    </h3>
                                    <div className={`${item.timeLineAcf.soon == true ? 'opacity-50' : null} md:text-[1.125rem] text-[1rem]`}  dangerouslySetInnerHTML={{ __html: item.content }} />
                                    <div>
                                        {item.timeLineAcf.website && <Link title={`Visit website ${item.timeLineAcf.website}`} target="_blank" aria-label="Website" href={item.timeLineAcf.website} className="md:text-[1.125rem] text-[1rem] text-sky-500 hover:text-sky-800 hover:animate-pulse mt-3 inline-block">Website</Link>}
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}