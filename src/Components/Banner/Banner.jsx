
const Banner = () => {
    return (
        <div className="hero p-20 bg-base-200 my-10 rounded-lg">
            <div className="hero-content flex-col gap-52 lg:flex-row-reverse">
                <img  src="../../../src/BannerImg/pngwing 1 (1).png" className="max-w-sm rounded-lg shadow-2xl h-[400px]" />
                <div className="">
                    <h1 className="text-5xl font-playFair font-bold my-10">Books to freshen up your bookshelf</h1>
                    <button className="bg-[#23BE0A] px-5 py-3 rounded-lg text-white font-bold">View The list</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;