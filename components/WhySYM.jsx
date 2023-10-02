import React from "react";
import Card from "./card";

function WhySYM() {
    const cardData = [
        { id: 1, heading: 'Bulk Ordering Made Simple', description: 'Place bulk orders effortlessly, with tiered pricing and quantity discounts available for larger purchases.', image: './image.jpg' },
        { id: 2, heading: 'Customization Unlimited', description: "Say goodbye to traditional catalogs! We don't limit your choices. You dream it, we create it.", image: './image2.jpg' },
        { id: 3, heading: 'Dedicated Account Managers', description: 'Benefit from personalized support from dedicated account managers who understand your business needs.', image: './image3.jpg' },
        { id: 4, heading: 'Consistent Quality', description: 'Expect consistent product quality and branding across all orders, ensuring a cohesive brand image. We don’t compromise on the quality of our products.', image: './image4.jpg' },
        { id: 5, heading: 'Competitive Pricing', description: 'Enjoy premium quality merchandise at competitive prices, ensuring you get the best value for your investment.', image: './image5.jpg' },
        { id: 6, heading: 'Flexible Payment Options', description: 'Choose from a variety of secure payment options, including invoicing and credit terms for qualified businesses.', image: './image6.jpg' },
    ];

    const style="h-20 w-20";

    const titleStyle = {
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: "100px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        color: "#105454",
    };

    return (
        <div className="relative flex flex-col gap-12 h-full w-full  overflow-hidden">
            <h1 style={titleStyle} className="relative md:text-8xl text-3xl  font-semibold text-center px-96">Why Us?</h1>
            <div className=" relative h-full w-full flex items-center left-96 ">
                <div className="relative grid grid-cols-3 gap-4">
                    {cardData.map(card => (
                        <Card key={card.id}
                            heading={card.heading}
                            description={card.description}
                            image={card.image} 
                            //style={style}
                            />
                    ))}
                </div>
            </div>
        </div>


    );
}
export default WhySYM;
