import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div className="hero p-20 bg-base-200 my-10 rounded-lg">
            <div className="hero-content flex-col lg:gap-52 lg:flex-row-reverse">
                <img  src={`https://i.ibb.co/1K1TCj3/banneri.png?fbclid=IwAR3PLmmORo3hPWJrg2Zf1zQ0yDQQULlzVvYCdjt3JSmpcFFpbXFQVC2QCNY_aem_AW7X8a4l16IuOEOuEMs90h2KaF3x2KDtd7sB4abultsJCW1kv4H2spNwn51ahHQZ4F58olvfRW7-owMJVXuAH0Vz`} className="rounded-lg shadow-2xl lg:h-[400px]" />
                <div className="">
                    <h1 className="text-5xl font-playFair font-bold my-10">Books to freshen up your bookshelf</h1>
                    <Link to='./listedBooks'><button className="bg-[#23BE0A] px-5 py-3 rounded-lg text-white font-bold">View The list</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;