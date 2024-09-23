import React from "react";
import Container from "./Container.jsx";
import { AiFillCaretDown } from "react-icons/ai";
import CustomButton from "./customButton";
import { motion } from "framer-motion";
export default function ConnectStore() {
  const stores = [
    {
      name: "PrestaShop",
      url: "https://printify.com/prestashop/",
      imgSrc: "https://printify.com/pfh/media/presta-54F6AYUU.svg",
      position: { left: 23.9987, top: 47.9743 },
    },
    {
      name: "Wix",
      url: "https://printify.com/wix/",
      imgSrc: "https://printify.com/pfh/media/wix-MWZCZDTE.svg",
      position: { left: 94.7994, top: -1.9963 },
    },
    {
      name: "WooCommerce",
      url: "https://printify.com/woocommerce/",
      imgSrc: "https://printify.com/pfh/media/woo-PGFAG65X.svg",
      position: { left: 76.9993, top: 34.9818 },
    },
    {
      name: "Squarespace",
      url: "https://printify.com/squarespace/",
      imgSrc: "https://printify.com/pfh/media/squarespace-FIBF2RIF.svg",
      position: { left: 63.9987, top: 9.9927 },
    },
    {
      name: "Shopify",
      url: "https://printify.com/shopify/",
      imgSrc: "https://printify.com/pfh/media/shopify-3NAPXPBF.svg",
      position: { left: 51.9993, top: 74.9633 },
    },
    {
      name: "Integrations",
      url: "https://printify.com/integrations/",
      imgSrc: "https://printify.com/pfh/media/more-integration-4S3FHLQZ.svg",
      position: { left: 37.999, top: 69.9633 },
    },
    {
      name: "Etsy",
      url: "https://printify.com/etsy/",
      imgSrc: "https://printify.com/pfh/media/etsy-MXXFYORZ.svg",
      position: { left: 87.999, top: 58.9708 },
    },
    {
      name: "Printify API",
      url: "https://printify.com/printify-api/",
      imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEzUlEQVR4nO2cS4gdRRSGv6AgmFEMjqIZRaLBzCYmKGqyEDWgKBpfRFCzc+Er40IMuBDFGATdmGg2vheDL0bjKkbxiS4UEmME32AEA4KOBjTJYuLN2FJyGo5F38d4O3R19/9BMdN1q/t2nf/Ws08fEEIIIYQQQgghhBBCCCGEEEII0QJOByaAt4BvgYNAVtN00OqwHVgHnEaNGAOeBjoJGDI7QmkWmALOIHGuAfbbTR8CXgVuApYA86kv860ON1udDlkdQ11Xkyh32y8ns1/PIprLmcDrrrWErjm5lhFu7DBwD+3hXqvzbEotZcx1U7EYJwMbgd01GtS/+h+ihPP+BE4lAZ5z3ZRnDTANbAYuqPkY0o+tZoMwmal8anvYBrlFkRg/AefQDs4yG3Ssx6iMCftlhJmH76amWyRGzpTZ4i4qZLvdRJgO5my0bqptrDVbbKvyJr63mzjb5X1hY0bbWGK2CCv6yjhgNzES5fnjtjBitgj1r4x8qhjntZWs6vpLkP8iQRJDgiSGBEkMCZIYEiQxJEhiNFKQR4E/gJ3AiQOUXwC8B3zWJb0PPA5c2OMaK4EPStjyaZwgxwEz7rq3D3DOyjk863gFOLbgGhtKMmbjBFkTGTBsXs5FkOeB+1x6AJgEfnNl/M70sIL80HRBJu38Gfc3tJpBBbmiS5kTgE9cufNLEiRrsiBHA/vs/Eecw0RoNcMKEhh35cIjgjIE+bLJglzqrhe8OnbY/6HVlCFI4BcrFx65ejSGFLDJjPW1HT9ox/us9ZQhyKdW7kMJ0p89ZqzH7Pg8Z+hLShLkcysX3Fs9GtQjljqjXmR584CfLW9TCYLMc+5KL5QkSGMH9fu7dE/PWn5oPcMKcpUrd2v0mQSJyAfwl6L865wRlw4hyCo3oE8XPGKWII7gx/R3gfcKZrh8TRJaUT9BwhjxrksfOyHydc3lBdfQtNdxhxmrY/tSMW/b5zsGEKRXegdY3uUamvYW+HZ91MOrPrNWtLCPIE8Ct7m01lpEcN7rhQQp2Ex8yFpInM7ts9noBbmyj+HLFqRxK/UbB+xush6bjVUK0rhp74tzFGSmYLNRgpQkSFhv/G7l+z0Yuth9V7zZKEFKEmSVO/+yPmWPcuLFm40SpCRBNjtf2GMGKP9yl9W8BClJkD1dtsK7cYv7vtCF5UiQkgSZtM2+8MLoICwA9tr2fHhjKSe81/cd8GOUPxeutS2VsHhs9Syr7mQFxxKkQiRIYkiQxJAgiSFBEkOCJIYESYzkBMm9OEaivDa8Fn28BZzxx1mUl0TggN0tCRywAtiVWuCAotAaDwNP0Hy22FPOpEJrrCtw8T/J9oWW0VyWA78CowXBZ+6s8L7+jc7ZsdBEwUE65wbbCFzWUDH2ms9YzuJUwjMFnrFfRohBSCTKtHmCrKj5QD9i2/xbrGVcH33+htngKRJgoZtthXB3nlFzINjlAtXUMe23OmyIuqnAeisT3os8hURY7YJgxqI0mfUuCGbwHU6KCffW09YhHhbVgcWum5q1yU2SXG0Lo8wGuSl79DregDFk3Ka2rwF/uW4quZYRM2rrkCaHGu9YBNIkwsIOypjNyd8Evqn5oH7A6rDN6lT51FYIIYQQQgghhBBCCCGEEEIIIQRHmn8A38illHkjVu4AAAAASUVORK5CYII=",
      position: { left: 1.9993, top: 63.967 },
    },
    {
      name: "BigCommerce",
      url: "https://printify.com/bigcommerce/",
      imgSrc: "https://printify.com/pfh/media/big-commerce-EGSGKPYX.svg",
      position: { left: 31.9993, top: 2.9963 },
    },
  ];

  return (
    <Container className="relative overflow-hidden pb-20">
      <div className="absolute -top-60 left-0 right-0 hidden sm:grid place-items-center text-center">
        <AiFillCaretDown size={450} className="text-[#f7f7f7]" />
      </div>

      <div className="flex flex-col md:items-center justify-center space-y-6 mt-20 md:mt-28 mb-20">
        <h2 className="text-4xl font-bold">Connect your store</h2>
        <p className="text-lg text-gray-500">

          Printify easily integrates with major e-commerce platforms and
          marketplaces API
        </p>
        <div className="relative mx-10">
          {stores.map((store, index) => (
            <motion.div
            viewport={{ once: true }}
              whileInView={{left: `${store.position.left}%`, top: `${store.position.top}%`, transform: "translate(0%, 0%)"}}
              initial={{left: `50%`, top: `50%`, transform: "translate(-50%, -50%)"}}
              transition={{duration:0.5, delay:0.3+index*0.05, ease:"easeInOut"}}
              key={index}
              className={` absolute p-1 sm:p-5 border bg-white shadow-2xl rounded-2xl cursor-pointer aspect-square object-cover flex items-center justify-center`}

              style={{
                left: `${store.position.left}%`,
                top: `${store.position.top}%`,
                maxWidth: `${100}px`,
                width: `15%`,
              }}
            >
              <img
                className="w-full h-full object-contain hover:scale-110 duration-300"
                src={store.imgSrc}
                alt={store.name}
              />
            </motion.div>
          ))}

          <div className="absolute p-1 sm:p-5 min-w-[40px] border w-[15%] max-w-[150px] bg-green-500 aspect-square object-contain top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl hover:scale-110 duration-300 cursor-pointer flex items-center justify-center z-50">
            <img
              src="https://printify.com/pfh/media/printify-E3TBSF5R.svg"

              alt=""
              srcset=""
              className="w-full h-full object-contain"
            />
          </div>

          <img
            src="https://printify.com/pfh/media/stores-background-QSGENTOX.svg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="bg-[#e2f7e3] py-4 md:py-8 px-8 lg:px-20 relative rounded-2xl overflow-hidden mx-8 md:mx-20 flex gap-4 items-center justify-between flex-wrap md:flex-nowrap">
        <img className="absolute right-0 top-0 bottom-0 h-full" src="https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg" alt="" srcset="" />
        <h2 className="text-sm md:text-xl lg:text-2xl font-bold text-green-800 md:whitespace-nowrap relative  z-10">Are you a large business looking <br className="hidden md:block"/> for custom solutions?</h2>
        <CustomButton className="relative z-10 bg-white text-sm md:text-base"> Talk to sales</CustomButton>
      </div>

    </Container>

  );
}
