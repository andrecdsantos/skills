import { data } from '../../data/data.js';

const flip = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl">Card flip</h1>
            <div className="w-[300px] h-[420px] [perspective:1000px] bg-transparent cursor-pointer group">
                <div className="relative [transformStyle:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                    <div className="absolute [backfaceVisibility:hidden] border-2 w-full h-full">
                        <img className="w-full h-full" src={data[1].image} />
                    </div>
                    <div className="absolute [transform:rotateY(180deg)] [backfaceVisibility:hidden] h-full w-full bg-gray-200">
                        <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24">
                            <h2 className="text-lg font-bold mb-3">Titulo</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse beatae iure sunt praesentium enim corrupti maxime nostrum temporibus in magnam perferendis, ex ab, nisi, architecto corporis perspiciatis maiores dolor.
                            </p>
                            <button
                                className="my-6 bg-teal-500 text-white rounded-full px-6 py-2 
                            absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20
                            scale-0 group-hover:scale-125 overflow-hidden"
                            >
                                Clique aqui
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default flip;
