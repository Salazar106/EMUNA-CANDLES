"use client"

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";


export default function CatalogCard(){

    const list = [
        {
          title: "Orange",
          img: "/imgs/emunaLogo.png",
          price: "$5.50",
          description:`esta es una pequena descripcion de lo que iria como aroma etc.`
        },
        {
          title: "Tangerine",
          img: "/imgs/emunaLogo.png",
          price: "$3.00",
          description:`esta es una pequena descripcion de lo que iria como aroma etc.`
        },
        {
          title: "Raspberry",
          img: "/imgs/emunaLogo.png",
          price: "$10.00",
          description:`esta es una pequena descripcion de lo que iria como aroma etc.`
        },
        {
          title: "Lemon",
          img: "/imgs/emunaLogo.png",
          price: "$5.30",
          description:`esta es una pequena descripcion de lo que iria como aroma etc.`
        },
        {
          title: "Avocado",
          img: "/imgs/emunaLogo.png",
          price: "$15.70",
          description:`esta es una pequena descripcion de lo que iria como aroma etc.`
        },
        {
          title: "Lemon 2",
          img: "/imgs/emunaLogo.png",
          price: "$8.00",
          description:`esta es una pequena descripcion de lo que iria como aroma etc.`
        },
        {
          title: "Banana",
          img: "/imgs/emunaLogo.png",
          price: "$7.50",
          description:`esta es una pequena descripcion de lo que iria como aroma etc.`
        },
        {
          title: "Watermelon",
          img: "/imgs/emunaLogo.png",
          price: "$12.20",
          description:`esta es una pequena descripcion de lo que iria como aroma etc.`
        },
      ];
    
      return (
        <div className="gap-5 w-full flex flex-wrap justify-center my-5" >
          {list.map((item, index) => (
            <Card className="sm:w-[280px] sm:h-[400px]" shadow="lg" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[100%]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small flex flex-col text-start items-start">
                <b className="text-blac">{item.title}</b>
                <span className="text-gray-400">{item.description}</span>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
}