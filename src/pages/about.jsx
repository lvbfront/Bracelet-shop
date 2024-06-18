import React from 'react';
import {neck} from '../components/assets/Data'

export default function About() {
    return (
        <div className="bg-pearl-white min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-deep-purple-800 mb-4">About Our Bracelet Store</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Welcome to our Bracelet Store, the premier destination for handcrafted, exquisite bracelets that
                    symbolize luxury and elegance. Our mission is to offer you unique pieces that are not just
                    accessories but also a personal expression of style.
                </p>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <img src={neck} alt="Showcase of bracelets" className="rounded-lg shadow-lg size-80"/>
                    </div>
                    <div className="text-gray-600">
                        <h2 className="text-2xl text-deep-purple-800 font-semibold mb-3">Our Craftsmanship</h2>
                        <p className="mb-4">
                            Each piece is crafted with meticulous attention to detail by skilled artisans who have
                            honed their craft over generations. Using only the finest materials, from precious metals
                            to rare gemstones, we ensure every bracelet is a masterpiece.
                        </p>
                        <h2 className="text-2xl text-deep-purple-800 font-semibold mb-3">Sustainability Commitment</h2>
                        <p>
                            We are committed to sustainable practices, ensuring that our crafting processes are
                            eco-friendly and ethically responsible. We believe in the beauty of preservation—both
                            in fashion and the natural world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

