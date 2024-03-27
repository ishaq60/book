/* eslint-disable react/no-unescaped-entities */

const AboutUs = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="divide-y dark:divide-gray-300">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">Q: How do I search for a specific book on your website?</h3>
                        <p className="md:pl-0 md:col-span-7">To search for a book, simply use the search bar located at the top of every page. Type in the title, author, or keywords related to the book you're looking for, and hit enter. You'll then be presented with relevant search results that match your query.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">Q: Can I purchase books directly from your website?</h3>
                        <p className="md:pl-0 md:col-span-7">Yes, you can purchase books directly from our website. Simply navigate to the book's page, where you'll find options to add it to your cart and proceed to checkout. We offer secure payment methods and efficient shipping to ensure a smooth purchasing experience.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">Q: Do you offer e-books or audiobooks in addition to physical copies?</h3>
                        <p className="md:pl-0 md:col-span-7">Yes, we offer a variety of formats to cater to different preferences. Alongside physical copies, we also provide e-books and audiobooks for select titles. You can easily find and purchase these digital versions on our website, allowing you to enjoy your favorite books in the format of your choice.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">Q: Are there any discounts or promotions available for purchasing books on your website?</h3>
                        <p className="md:pl-0 md:col-span-7">We frequently offer discounts and promotions on a rotating selection of books. To stay updated on our latest deals, promotions, and exclusive offers, we recommend subscribing to our newsletter or following us on social media. Additionally, keep an eye out for banners or notifications on our website highlighting ongoing promotions.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">Q: What should I do if I encounter an issue with my order or have questions about a specific book?</h3>
                        <p className="md:pl-0 md:col-span-7">If you encounter any issues with your order or have questions about a specific book, our customer support team is here to assist you. You can reach out to us via email at support@example.com or through our contact form located on the website. We strive to provide timely and helpful responses to ensure your satisfaction with your book-buying experience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;