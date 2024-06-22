import Image from "next/image";
import React from "react";
import useStore from "@/zustand/store/useStore";

function Realtor(props) {
  const { language } = useStore();

  const isRu = language === "ru";
  return (
    <div className="flex">
      <Image
        className="rounded-tl-md rounded-bl-md"
        src="/images/realtor.webp" // Убедитесь, что имя файла и расширение правильные
        alt="Realtor Image"
        width={150} // Укажите нужную ширину изображения
        height={150} // Укажите нужную высоту изображения
      />
      <div className="p-2">
        {/* <p className=" text-black dark:text-slate-400">
                    Занимается объектом:
                </p> */}
        <p className="text-xl font-medium">
          {isRu ? "Ковалевский Александр" : "Kovalevskiy Alexandr"}
        </p>
        {/* <p>
                    Директор
                </p> */}
        <div className="text-center mt-5">
          <a
            href="mailto:cactusbusines@gmail.com"
            className="hover:text-green-600 transition duration-300 block"
          >
            cactusbusines@gmail.com
          </a>
          <a
            href="tel:+355685577016"
            className="hover:text-green-600 transition duration-300 text-xl block"
          >
            +355 68 557 7016
          </a>
        </div>
      </div>
    </div>
  );
}

export default Realtor;
