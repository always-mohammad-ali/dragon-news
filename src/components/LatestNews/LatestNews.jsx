import Marquee from "react-fast-marquee";


const LatestNews = () => {
    return (
        <div className='bg-gray-200 flex items-center gap-5 p-3 mx-auto my-5'>
            <p className='bg-accent py-2 px-3 text-white'>Latest</p>

            <Marquee className="flex gap-9" pauseOnHover={true} speed={100}>
                 <p className="font-semibold text-sm">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>

                 <p className="font-semibold text-sm">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>

                 <p className="font-semibold text-sm">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>

            </Marquee>
            
        </div>
    );
};

export default LatestNews;